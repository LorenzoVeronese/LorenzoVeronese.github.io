// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-in-computer-science-engineering-at-politecnico-di-milano-specializing-in-ai",
          title: '🎓 Graduated in Computer Science Engineering at Politecnico di Milano, specializing in AI....',
          description: "",
          section: "News",},{id: "news-started-my-phd-in-bioengineering-at-politecnico-di-milano",
          title: '🚀 Started my PhD in Bioengineering at Politecnico di Milano.',
          description: "",
          section: "News",},{id: "news-selected-to-join-nova-talent",
          title: '🌟 Selected to join Nova Talent.',
          description: "",
          section: "News",},{id: "news-new-paper-out-optimized-ai-based-neural-decoding-from-bold-fmri-signal-for-analyzing-visual-and-semantic-rois-in-the-human-visual-system-published-in-journal-of-neural-engineering",
          title: '📄 New paper out! Optimized AI-based neural decoding from BOLD fMRI signal for...',
          description: "",
          section: "News",},{id: "news-presenting-my-work-evaluating-semantic-brain-regions-contribution-to-visual-neural-decoding-performance-on-different-classes-of-stimuli-at-cibb2025-in-the-special-session-ai-in-medical-imaging-radiomics-and-explainable-deep-learning",
          title: '🎤 Presenting my work, “Evaluating Semantic Brain Regions Contribution to Visual Neural Decoding...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-computational-cognitive-neuroscience",
          title: 'Computational Cognitive Neuroscience',
          description: "Neuro-inspired AI for modelling planning tasks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ComputationalCognitiveNeuroscience/";
            },},{id: "projects-do-you-understand-how-i-feel",
          title: 'Do you understand how I feel?',
          description: "Verifying empathy in therapy chatbots",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DoYouUnderstandHowIFeel/";
            },},{id: "projects-follow-the-light",
          title: 'Follow the Light',
          description: "A interactive CNC plotter for inclusive writing and play",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FollowTheLight/";
            },},{id: "projects-neural-decoding",
          title: 'Neural Decoding',
          description: "Visual stimulus reconstruction from fMRI signal using generative AI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NeuralDecoding/";
            },},{id: "projects-stain-transfer",
          title: 'Stain Transfer',
          description: "Histopathological images harmonization through CycleGAN",
          section: "Projects",handler: () => {
              window.location.href = "/projects/StainTransfer/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
