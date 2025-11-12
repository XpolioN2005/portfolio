<script>
  export let title = "About Me";
  let expanded = false;
</script>

<div class="section-container">
  <div class="section-title">{title}</div>
  <div class="section-content">
    <p>
      Hello! I'm Darsan Ghosh (<a href="https://github.com/XpolioN2005" target="_blank" rel="noopener noreferrer">XpolioN</a>),
      a B.Tech CSE student and developer. I focus on building efficient systems and interactive experiences that merge logic, design, and analytical thinking.
    </p>

    {#if expanded}
    <p>
      I work with modern tools and frameworks to improve performance, extract insights from data, and design scalable applications.
      My goal is to create reliable, innovative solutions across software, games, and data-driven systems.
    </p>
    {/if}

    <button class="read-more" type="button" on:click={() => expanded = !expanded}>
      {expanded ? "Read Less" : "Read More"}
    </button>
  </div>
</div>

<style>
  .section-container {
    position: relative;
    background: #1a1625;
    border: 2px solid rgba(255,255,255,0.08);
    box-shadow: 4px 4px 0 #000;
    border-radius: 12px;
    padding: 2rem;
    box-sizing: border-box;
    max-width: 800px;
    margin: 1rem auto;
  }

  .section-title {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 12px;
    font-weight: bold;
    color: #e6f3ff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .section-content p {
    font-size: 12px;
    color: #e6f3ff;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .section-content a {
    color: #4fc3f7;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .section-content a:hover {
    color: #82e9ff;
    text-decoration: underline;
  }

  .read-more {
    background: none;
    border: none;
    padding: 0;
    color: #4fc3f7;
    cursor: pointer;
    font-size: 12px;
    text-decoration: underline;
    font-family: inherit;
  }

  .read-more:hover {
    color: #82e9ff;
  }

  /* Responsive adjustments */
  @media (max-width: 600px) {
    .section-container {
      padding: 1rem;
      max-width: 95%;
    }

    .section-title {
      top: 0.5rem;
      right: 0.5rem;
      font-size: 10px;
    }

    .section-content p,
    .read-more {
      font-size: 11px;
      line-height: 1.4;
    }
  }
</style>
