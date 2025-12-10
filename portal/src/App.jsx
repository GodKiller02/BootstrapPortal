import './App.css'

const images = {
  logo: 'https://placehold.co/280x120?text=Logo',
  data: 'https://placehold.co/320x200/0b5ed7/ffffff?text=Data',
  dataViz: 'https://placehold.co/320x200/f97316/ffffff?text=Viz',
  tools: 'https://placehold.co/140/6366f1/ffffff?text=T',
  skills: 'https://placehold.co/140/14b8a6/ffffff?text=S',
  community: 'https://placehold.co/140/f43f5e/ffffff?text=C',
  navi: 'https://placehold.co/96x96/0ea5e9/ffffff?text=N',
  specialist: 'https://placehold.co/90x90/475569/ffffff?text=LH',
}

const dataHighlights = [
  {
    image: images.data,
    title: 'Data',
    description: 'Find, share and use data.',
  },
  {
    image: images.dataViz,
    title: 'Data Visualization',
    description: 'Explore dashboards and insights.',
  },
]

const capabilityHighlights = [
  {
    image: images.tools,
    title: 'Tools',
    description: 'Discover data tools that help you analyse, automate and share.',
  },
  {
    image: images.skills,
    title: 'Skills',
    description:
      'Build confidence with data by growing your data and analytics capability.',
  },
  {
    image: images.community,
    title: 'Community',
    description:
      'Learn, share and connect with others helping each other to unlock the value of data.',
  },
]

const stats = [
  { value: '25', label: 'Member Data Products' },
  { value: '13', label: 'Investment Data Products' },
  { value: '15', label: 'Enterprise Data Products' },
]

function App() {
  return (
    <div className="container-fluid py-4 portal-wrapper">
      <div className="row g-4">
        <section className="col-12 col-lg-9 portal-left">
          <div className="portal-hero d-flex flex-column flex-md-row align-items-center gap-4">
            <img
              src={images.logo}
              alt="Company logo"
              className="hero-logo flex-shrink-0"
            />
            <div className="text-center text-md-start">
              <p className="welcome-line mb-1">Welcome to the</p>
              <p className="compass-title mb-1">Fund Data Compass</p>
              <p className="compass-subtitle fst-italic mb-0">
                Your go to place for data in the Fund
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="info-card h-100 p-4">
                <p className="fw-semibold mb-3">
                  The Fund Data Compass has been created to equip Colleagues
                  with access to the data required to drive decisions that
                  deliver better outcomes for Members.
                </p>
                <p className="mb-0">
                  Choose from one of the options below or ask Navi (the Fund
                  Data Compass AI Agent) to guide you in the right direction.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="navi-card h-100 p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img
                    src={images.navi}
                    alt="Navi avatar"
                    className="navi-avatar"
                  />
                  <div>
                    <p className="mb-0 fw-semibold">I'm Navi and I'm here</p>
                    <p className="mb-0 fw-semibold">to guide you!</p>
                  </div>
                </div>
                <p className="navi-callout mb-2">Ask Navi</p>
                <p className="fst-italic text-muted mb-0">
                  type your data request here and I will point you in the right
                  direction...
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-1">
            {dataHighlights.map(({ image, title, description }) => (
              <div className="col-12 col-md-6" key={title}>
                <div className="content-card h-100 p-4 text-center">
                  <img src={image} alt={title} className="content-image mb-3" />
                  <p className="fw-bold mb-1">{title}</p>
                  <p className="mb-0 text-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4 mt-1">
            {capabilityHighlights.map(({ image, title, description }) => (
              <div className="col-12 col-md-4" key={title}>
                <div className="capability-card h-100 text-center p-4">
                  <img
                    src={image}
                    alt={title}
                    className="capability-image rounded-circle mb-3"
                  />
                  <p className="fw-bold mb-1">{title}</p>
                  <p className="mb-0 text-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="col-12 col-lg-3">
          <div className="right-panel h-100 p-4">
            <p className="right-panel-title mb-4">Data Products at a glance</p>
            <div className="d-flex flex-column gap-3">
              {stats.map(({ value, label }) => (
                <div className="stat-block" key={label}>
                  <p className="stat-value text-danger mb-1">{value}</p>
                  <p className="stat-label mb-0">{label}</p>
                </div>
              ))}
            </div>

            <div className="specialist-card mt-4 pt-4 border-top">
              <p className="fw-semibold mb-2">Speak to a Data Specialist</p>
              <p className="text-muted mb-0">
                If you need help or support feel free to reach out to a Data
                Specialist here.
              </p>
            </div>

            <div className="d-flex align-items-center gap-3 mt-4">
              <img
                src={images.specialist}
                alt="Luce Hughes"
                className="specialist-avatar rounded-circle"
              />
              <div>
                <p className="mb-0 fw-semibold">Luce Hughes</p>
                <p className="mb-0 text-muted">Data Product Owner</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App
