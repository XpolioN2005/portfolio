<script>
  import { onMount, onDestroy } from 'svelte';

  export let title = "Projects";

  let projects = [
    {
      name: "System Optimizer",
      description: "Windows performance tool built with Python and Electron to automate optimization tasks.",
      image: "/images/system-optimizer.png",
      link: "https://github.com/XpolioN2005/system-optimizer"
    },
    {
      name: "DataViz Studio",
      description: "Data visualization dashboard using SvelteKit and D3.js for live analytics and insights.",
      image: "/images/dataviz-studio.png",
      link: "https://github.com/XpolioN2005/dataviz-studio"
    },
    {
      name: "Chrono Engine",
      description: "Lightweight 2D game engine in C++ with SDL2, built for flexibility and performance.",
      image: "/images/chrono-engine.png",
      link: "https://github.com/XpolioN2005/chrono-engine"
    }
  ];

  let track;
  const cardWidthPx = 320;

  function scrollRight() { track.scrollBy({ left: cardWidthPx, behavior: 'smooth' }); }
  function scrollLeft() { track.scrollBy({ left: -cardWidthPx, behavior: 'smooth' }); }

  // Global keyboard handler
  function onKey(e) {
    if (e.key === 'ArrowRight') scrollRight();
    if (e.key === 'ArrowLeft') scrollLeft();
  }

  onMount(() => {
    window.addEventListener('keydown', onKey);
  });
  onDestroy(() => {
    window.removeEventListener('keydown', onKey);
  });

  function onWheel(e) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      const speed = 2.5;
      track.scrollBy({ left: e.deltaY * speed, behavior: 'smooth' });
    }
  }

</script>

<section class="section-container" aria-label="Projects Carousel">
  <div class="section-title">{title}</div>

  <div class="carousel-wrapper">
    <button class="nav left" type="button" aria-label="Scroll left" on:click={scrollLeft}>
      &lt;
    </button>

    <div
      class="carousel-track"
      bind:this={track}
      on:wheel={onWheel}
      role="list"
      aria-label="Project carousel"
    >
      {#each projects as project}
        <article class="project-card" role="listitem">
          <div class="img-wrap">
            <img src={project.image} alt={project.name} class="project-image" />
          </div>
          <div class="project-info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a class="view-btn" href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </article>
      {/each}
    </div>

    <button class="nav right" type="button" aria-label="Scroll right" on:click={scrollRight}>
      &gt;
    </button>
  </div>
</section>

<style>
  .section-container {
    background: #1a1625;
    border: 2px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 4px 4px 0 #000;
    box-sizing: border-box;
    max-width: 1000px;
    margin: 1rem auto;
    outline: none; /* keyboard focus style handled below */
  }

  .section-container:focus {
    box-shadow: 0 0 0 3px rgba(79,195,247,0.12);
  }

  .section-title {
    text-align: right;
    font-size: 12px;
    font-weight: bold;
    color: #e6f3ff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
  }

  .carousel-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .carousel-track {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 0.5rem 1rem;
    scroll-behavior: smooth;
    width: 100%;
  }

  /* hide native scrollbar but keep accessibility */
  .carousel-track {
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.08) transparent;
  }
  .carousel-track::-webkit-scrollbar {
    height: 10px;
  }
  .carousel-track::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.08);
    border-radius: 999px;
  }

  .project-card {
    background: #231b33;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    box-shadow: 3px 3px 0 #000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-width: 320px; /* controls slide width */
    max-width: 320px;
    scroll-snap-align: center;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    flex: 0 0 auto;
  }

  .project-card:hover {
    transform: translateY(-6px);
    box-shadow: 6px 6px 0 #000;
  }

  .img-wrap {
    width: 100%;
    height: 160px;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
  }

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .project-card:hover .project-image {
    transform: scale(1.06);
  }

  .project-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .project-info h3 {
    color: #82e9ff;
    font-size: 14px;
    margin: 0 0 0.4rem 0;
  }

  .project-info p {
    color: #e6f3ff;
    font-size: 12px;
    line-height: 1.4;
    margin: 0;
  }

  .view-btn {
    background: #4fc3f7;
    color: #0c0c12;
    text-align: center;
    font-weight: bold;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.2s ease;
    margin-top: 0.8rem;
    display: inline-block;
    width: fit-content;
    font-size: 12px;
  }

  .view-btn:hover {
    background: #82e9ff;
  }

  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(15,12,20,0.7);
    border: 1px solid rgba(255,255,255,0.06);
    color: #e6f3ff;
    font-size: 20px;
    line-height: 1;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 5;
    user-select: none;
  }

  .nav.left { left: 6px; }
  .nav.right { right: 6px; }

  .nav:hover {
    background: rgba(79,195,247,0.08);
  }

  @media (max-width: 700px) {
    .project-card { min-width: 280px; max-width: 280px; }
    .img-wrap { height: 140px; }
    .nav { width: 32px; height: 32px; font-size: 18px; }
  }

  @media (max-width: 420px) {
    .project-card { min-width: 240px; max-width: 240px; }
    .img-wrap { height: 120px; }
  }
</style>
