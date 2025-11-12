<script>
  export let title = "Skills";

  let skills = [
  {
	category: "Programming Languages",
	items: [
	  { name: "Python", icon: "cib-python" },
	  { name: "HTML5", icon: "cib-html5" },
	  { name: "CSS3", icon: "cib-css3" },
	  { name: "JavaScript", icon: "cib-javascript" },
	  { name: "C", icon: "cib-c" },
	  { name: "C++", icon: "cib-cplusplus" },
	  { name: "Lua", icon: "cib-lua" },
	],
  },
  {
	category: "Engines & Frameworks",
	items: [
	  { name: "Godot", icon: "cib-godot" },
	  { name: "Unity", icon: "cib-unity" },
	  { name: "Pygame", icon: "cil-puzzle" },
	  { name: "Svelte", icon: "cib-svelte" },
	  { name: "Flutter", icon: "cib-flutter" },
	  { name: "Qt", icon: "cib-qt" },
	],
  },
  {
	category: "Tools & Libraries",
	items: [
	  { name: "Blender", icon: "cib-blender" },
	  { name: "Aseprite", icon: "cil-object-group" },
	  { name: "OpenCV", icon: "cib-opencv" },
	  { name: "Git", icon: "cib-git" },
	  { name: "GitHub", icon: "cib-github" },
	],
  },
];

</script>

<div class="section-container">
  <div class="section-title">{title}</div>
  <div class="section-content">
	{#each skills as group}
	  <h2 class="skill-category">{group.category}</h2>
	  <div class="skills-wrap">
		{#each group.items as skill}
		  <div class="skill-item" title={skill.name}>
			<i class={skill.icon} aria-hidden="true"></i>
			<span>{skill.name}</span>
		  </div>
		{/each}
	  </div>
	{/each}
  </div>
</div>

<style>
  @import "https://unpkg.com/@coreui/icons@2.0.0-beta.3/css/all.min.css";

  .section-container {
	position: relative;
	background: #1a1625;
	border: 2px solid rgba(255,255,255,0.08);
	box-shadow: 4px 4px 0 #000;
	border-radius: 12px;
	padding: 2rem;
	box-sizing: border-box;
	max-width: 1000px;
	margin: 1rem auto;
	height: auto;
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

  .skill-category {
	font-size: 12px;
	color: #82e9ff;
	margin: 1rem 0 0.75rem;
	text-transform: uppercase;
	letter-spacing: 0.5px;
  }

  /* Flex-wrap container instead of grid */
  .skills-wrap {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 1rem;
  }

  .skill-item {
	display: inline-flex; /* horizontal growth based on content */
	align-items: center;
	gap: 8px;
	padding: 0.5em 0.75em;
	background: #2b2440;
	border: 2px solid rgba(255,255,255,0.1);
	box-shadow: 3px 3px 0 #000;
	border-radius: 6px;
	color: #e6f3ff;
	font-size: 12px;
	white-space: nowrap; /* prevent wrapping inside the card */
  }

  .skill-item i {
	font-size: 16px;
	color: #4fc3f7;
	flex-shrink: 0;
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

	.skill-category {
	  font-size: 10px;
	}

	.skill-item {
	  font-size: 11px;
	  padding: 0.4em 0.6em;
	}

	.skill-item i {
	  font-size: 14px;
	}
  }
</style>
