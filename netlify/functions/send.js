// netlify/functions/send.js
export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");

    if (!message) {
      return { statusCode: 400, body: "Missing message" };
    }

    const embed = {
      title: "Contact Form Submission",
      color: 0x5865f2,
      fields: [
        { name: "Name", value: name || "Anonymous", inline: true },
        { name: "Email", value: email || "Not provided", inline: true },
        { name: "Message", value: message, inline: false },
      ],
    };

    const payload = {
      embeds: [embed],
      allowed_mentions: { parse: [] },
    };

    const res = await fetch(process.env.DISCORD_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { statusCode: res.status, body: "Discord request failed" };
    }

    return { statusCode: 200, body: "ok" };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Server error" };
  }
		  }
