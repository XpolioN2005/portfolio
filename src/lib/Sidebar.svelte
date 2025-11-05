<script>
	let isOpen = false;

	function toggleSidebar() {
		isOpen = !isOpen;
	}

	function closeSidebar() {
		isOpen = false;
	}
</script>

<button
	class="menu-btn"
	on:click={toggleSidebar}
	aria-label="Toggle menu"
	aria-expanded={isOpen}
	type="button"
><i class="cil-menu" aria-hidden="true"></i>
</button>

<aside class="sidebar" class:open={isOpen}>
	<div class="avatar">
		<img src="/avatar-pixel.png" alt="avatar" />
	</div>

	<h1>Darsan Ghosh</h1>
	<p>Game Developer, Software Developer</p>

	<div class="socials">
		<a href="https://xpolion.itch.io/" target="_blank" rel="noreferrer" title="Itch.io">
			<i class="cib-itch-io" aria-hidden="true"></i>
		</a>
		<a href="https://www.linkedin.com/in/xpolion" target="_blank" rel="noreferrer" title="LinkedIn">
			<i class="cib-linkedin-in" aria-hidden="true"></i>
		</a>
		<a href="https://github.com/xpolion2005" target="_blank" rel="noreferrer" title="GitHub">
			<i class="cib-github" aria-hidden="true"></i>
		</a>
		<a href="https://leetcode.com/u/xpolion" target="_blank" rel="noreferrer" title="LeetCode">
			<i class="cib-leetcode" aria-hidden="true"></i>
		</a>
	</div>

	<a href="/assets/resume.pdf" target="_blank" class="resume-btn">Download Resume</a>

	<nav>
		<a href="#about" class="nav-link" on:click={closeSidebar}>About</a>
		<a href="#skills" class="nav-link" on:click={closeSidebar}>Skills</a>
		<a href="#experience" class="nav-link" on:click={closeSidebar}>Experience</a>
		<a href="#projects" class="nav-link" on:click={closeSidebar}>Projects</a>
		<a href="#devlogs" class="nav-link" on:click={closeSidebar}>Devlogs</a>
		<a href="#contact" class="nav-link" on:click={closeSidebar}>Contact</a>
	</nav>
</aside>

{#if isOpen}
	<div
		class="drawer-backdrop open"
		role="button"
		tabindex="0"
		aria-label="Close sidebar"
		on:click={closeSidebar}
		on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && closeSidebar()}
	></div>
{/if}

<style>
	@import "https://unpkg.com/@coreui/icons@2.0.0-beta.3/css/all.min.css";

	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 280px;
		height: 100vh;
		background: #1a1625;
		padding: 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-right: 3px solid rgba(255, 255, 255, 0.1);
		box-sizing: border-box;
		transition: transform 0.25s ease;
		z-index: 50;
	}

	.sidebar.open {
		transform: translateX(0);
	}

	.avatar {
		width: 120px;
		height: 120px;
		background: #222;
		border: 3px solid rgba(255, 255, 255, 0.2);
		box-shadow: 4px 4px 0 #000;
		image-rendering: pixelated;
		overflow: hidden;
		margin-bottom: 12px;
	}
	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		image-rendering: pixelated;
	}

	h1 {
		font-size: 14px;
		margin: 12px 0 6px;
		text-align: center;
	}
	p {
		font-size: 10px;
		opacity: 0.8;
		text-align: center;
		margin: 0 0 20px;
	}

	.socials {
		display: flex;
		gap: 10px;
		margin-bottom: 16px;
	}
	.socials a {
		width: 36px;
		height: 36px;
		display: grid;
		place-items: center;
		background: #2b2440;
		border: 2px solid rgba(255, 255, 255, 0.1);
		box-shadow: 3px 3px 0 #000;
		color: #e6f3ff;
		font-size: 16px;
		text-decoration: none;
	}
	.socials a:hover {
		transform: translateY(-3px);
		transition: transform 0.15s;
	}

	.resume-btn {
		margin-bottom: 24px;
		display: block;
		text-align: center;
		padding: 10px;
		background: #2b2440;
		border: 2px solid rgba(255, 255, 255, 0.1);
		box-shadow: 3px 3px 0 #000;
		color: #e6f3ff;
		font-size: 10px;
		text-decoration: none;
	}
	.resume-btn:hover {
		background: #333051;
		transform: translateY(-2px);
		transition: 0.15s;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
	}
	.nav-link {
		padding: 10px;
		text-align: center;
		background: #2b2440;
		border: 2px solid rgba(255, 255, 255, 0.1);
		box-shadow: 3px 3px 0 #000;
		color: #e6f3ff;
		font-size: 10px;
		text-decoration: none;
	}
	.nav-link:hover {
		background: #333051;
	}

	.menu-btn {
		display: none;
		position: fixed;
		top: 12px;
		left: 12px;
		width: 44px;
		height: 44px;
		font-size: 18px;
		line-height: 1;
		background: #2b2440;
		border: 2px solid rgba(255, 255, 255, 0.08);
		box-shadow: 3px 3px 0 #000;
		color: #e6f3ff;
		cursor: pointer;
		border-radius: 6px;
		z-index: 60;
	}
	@media (max-width: 768px) {
		.menu-btn {
			display: block;
		}
		.sidebar {
			transform: translateX(-110%);
		}
		.sidebar.open {
			transform: translateX(0);
		}
	}

	.drawer-backdrop {
		display: none;
		transition: opacity 0.2s;
	}
	.drawer-backdrop.open {
		display: block;
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.45);
		z-index: 40;
	}
</style>
