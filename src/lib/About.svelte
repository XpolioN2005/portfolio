<script>
  export let title = "About Me";
</script>

<div class="section-container">
  <div class="section-title">{title}</div>
  <div class="section-content">
    <p>
      Hello! I'm Darsan Ghosh (<a href="https://github.com/XpolioN" target="_blank" rel="noopener noreferrer">XpolioN</a>),
      a B.Tech CSE student and game, software, and data science developer.
      I focus on building efficient systems and interactive experiences that merge logic, design, and analytical thinking.
    </p>
    <p>
      I work with modern tools and frameworks to improve performance, extract insights from data, and design scalable applications.
      My goal is to create reliable, innovative solutions across software, games, and data-driven systems.
    </p>
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
</style>
