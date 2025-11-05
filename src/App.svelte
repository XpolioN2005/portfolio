<script>
  import Sidebar from './lib/Sidebar.svelte';
  import Contact from './lib/Contact.svelte';
</script>

<div class="hbox-container">
  <Sidebar /> <!-- fixed inside its component -->

  <div class="content-container">
    <div class="card">
      <Contact />
    </div>
  </div>
</div>

<style>
  /* Content container leaves space for the fixed sidebar */
  .content-container {
    margin-left: 280px; /* match the sidebar width */
    flex: 1 1 auto;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
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
      padding: 1.5rem;
    }
  }
</style>
