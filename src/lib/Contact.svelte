<script>
	let name = '';
	let email = '';
	let message = '';
	let success = false;

	function handleSubmit() {
		console.log({ name, email, message });
		success = true;

		name = '';
		email = '';
		message = '';

		setTimeout(() => (success = false), 3000);
	}
</script>

<section class="contact-section">
	<!-- Left side: Social links + contact info -->
	<div class="contact-links">
		<h2>Connect with me</h2>

		<!-- Social icons -->
		<div class="socials-line">
			<a href="https://xpolion.itch.io/" target="_blank" rel="noreferrer" title="Itch.io">
				<i class="cib-itch-io"></i>
			</a>
			<a href="https://www.linkedin.com/in/xpolion" target="_blank" rel="noreferrer" title="LinkedIn">
				<i class="cib-linkedin-in"></i>
			</a>
			<a href="https://github.com/xpolion2005" target="_blank" rel="noreferrer" title="GitHub">
				<i class="cib-github"></i>
			</a>
		</div>

		<!-- Contact info boxes -->
		<div class="contact-info">
			<div class="info-box">
				<span><strong>Email:</strong></span>
				<a href="mailto:xpolion2005@example.com">xpolion2005@example.com</a>
			</div>
			<div class="info-box">
				<span><strong>Phone:</strong></span>
				<a href="tel:+1234567890">+123 456 7890</a>
			</div>
		</div>
	</div>

	<!-- Right side: Contact form -->
	<div class="contact-form">
		<h2>Send me a message</h2>
		<form on:submit|preventDefault={handleSubmit}>
			<input type="text" placeholder="Your Name" bind:value={name} required />
			<input type="email" placeholder="Your Email" bind:value={email} required />
			<textarea placeholder="Your Message" bind:value={message} required></textarea>
			<button type="submit">Send</button>
		</form>

		{#if success}
			<div class="success-popup">
				<p>Message sent! I’ll get back to you soon.</p>
			</div>
		{/if}
	</div>
</section>

<style>
	.contact-section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 2rem;
		background: #1a1625;
		border: 2px solid rgba(255,255,255,0.08);
		box-shadow: 4px 4px 0 #000;
		border-radius: 12px;
		box-sizing: border-box;
	}

	@media(min-width: 768px) {
		.contact-section {
			flex-direction: row;
		}
	}

	.contact-links,
	.contact-form {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	h2 {
		font-size: 14px;
		margin-bottom: 0.5rem;
	}

	/* Social icons in a row */
	.socials-line {
		display: flex;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}
	.socials-line a {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #2b2440;
		border: 2px solid rgba(255,255,255,0.08);
		box-shadow: 3px 3px 0 #000;
		color: #e6f3ff;
		width: 36px;
		height: 36px;
		font-size: 16px;
		text-decoration: none;
		transition: transform 0.15s, background 0.15s;
		border-radius: 6px;
	}
	.socials-line a:hover {
		background: #333051;
		transform: translateY(-2px);
	}

	/* Contact info boxes */
	.contact-info {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.info-box {
		flex: 1 1 45%; /* ensure equal width */
		display: flex;
		flex-direction: column; /* stack text inside */
		gap: 4px;
		background: #2b2440;
		border: 2px solid rgba(255,255,255,0.08);
		box-shadow: 3px 3px 0 #000;
		padding: 16px;
		border-radius: 6px;
		font-size: 10px;
		word-break: break-word;
	}

	.info-box a {
		color: #e6f3ff;
		text-decoration: none;
		transition: transform 0.15s, color 0.15s;
	}
	.info-box a:hover {
		color: #4cd137;
		transform: translateY(-1px);
	}

	/* Stack info boxes vertically on very small screens */
	@media(max-width: 480px) {
		.info-box {
			width: 100%;
		}
	}

	.contact-form form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.contact-form input,
	.contact-form textarea {
		background: #2b2440;
		border: 2px solid rgba(255,255,255,0.08);
		box-shadow: 3px 3px 0 #000;
		color: #e6f3ff;
		font-size: 10px;
		padding: 8px;
		border-radius: 6px;
		resize: vertical;
	}

	.contact-form textarea {
		min-height: 120px;
	}

	.contact-form button {
		background: #2b2440;
		border: 2px solid rgba(255,255,255,0.08);
		box-shadow: 3px 3px 0 #000;
		color: #e6f3ff;
		font-size: 10px;
		padding: 10px;
		cursor: pointer;
		transition: transform 0.15s, background 0.15s;
		border-radius: 6px;
	}
	.contact-form button:hover {
		background: #333051;
		transform: translateY(-2px);
	}

	/* Success popup */
	.success-popup {
		position: fixed;
		top: 20px;
		left: 50%;
		background: #4cd137;
		color: #1a1625;
		padding: 12px 20px;
		border-radius: 8px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
		font-weight: bold;
		z-index: 1000;
		animation: popupFade 0.3s ease;
		transform: translateX(-50%);

	}

	@keyframes popupFade {
	from { opacity: 0; transform: translate(-50%, -10px); } /* include X offset */
	to { opacity: 1; transform: translateX(-50%) translateY(0); } /* keep centered */
}
</style>
