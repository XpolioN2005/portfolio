<script>
  import Sidebar from './lib/Sidebar.svelte';
  import Contact from './lib/Contact.svelte';
  import About from './lib/About.svelte';
  import Skills from './lib/Skills.svelte';
  import Projects from './lib/Projects.svelte';
</script>


<div class="hbox-container">
  <Sidebar /> <!-- fixed inside its component -->

  <div class="content-container">
    <div class="card" id="about">
      <About />
    </div>

    <div class="card" id="skills">
      <Skills/>
    </div>

    <div class="card" id="projects">
      <Projects />
    </div>

    <div class="card" id="contact">
      <Contact />
    </div>
    
  </div>
</div>

<style>

  .content-container {
    margin-left: 280px; /* match the sidebar width */
    flex: 1 1 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 2rem;
  }

  .card {
    background: #1a1625;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    padding: 2rem;
    width: 100%;
    max-width: 900px;
  }

  /* Responsive: stack on mobile */
  @media (max-width: 768px) {
    .content-container {
      margin-left: 0; /* sidebar collapses on mobile */
      padding: 1rem;
    }

    .card {
      width: 100%;
      padding: 0.5rem;
    }
  }
</style>
