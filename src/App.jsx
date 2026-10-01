import { useState } from 'react';
import News from './components/News.jsx';
import Sports from './components/Sports.jsx';
import Jobs from './components/Jobs.jsx';
import Goals from './components/Goals.jsx';
import Tasks from './components/Tasks.jsx';
import Calendar from './components/Calendar.jsx';

const navigation = [['overview', '◫', 'Overview'], ['news', '▤', 'Local news'], ['sports', '◉', 'Sports'], ['jobs', '▱', 'Job listings'], ['goals', '◎', 'Goals'], ['tasks', '☑', 'Tasks'], ['calendar', '▦', 'Calendar']];

export default function App() {
  const [active, setActive] = useState('overview');
  const date = new Date();
  const hour = date.getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  return <div className="app-shell">
    <aside className="sidebar"><a className="brand" href="#overview" onClick={() => setActive('overview')}><span className="brand-mark">d.</span>daybook<span className="brand-dot">●</span></a><p className="sidebar-label">YOUR PERSONAL SPACE</p>
      <nav aria-label="Main navigation">{navigation.map(([id, icon, label]) => <a key={id} href={`#${id}`} onClick={() => setActive(id)} className={active === id ? 'nav-link active' : 'nav-link'} aria-current={active === id ? 'location' : undefined}><span aria-hidden="true">{icon}</span>{label}{active === id && <span className="nav-dot">●</span>}</a>)}</nav>
      <div className="sidebar-note"><span className="note-spark">✧</span><h3>A little more intentional.</h3><p>Your city, your ambitions, your everyday. All in one place.</p></div><div className="profile"><span className="profile-avatar">ME</span><div><strong>My workspace</strong><span>Personal dashboard</span></div></div>
    </aside>
    <div className="workspace"><header className="topbar"><span>My workspace <span className="breadcrumb">/</span> <strong>Overview</strong></span><span className="location"><span className="small-dot" /> Toronto, ON</span></header>
      <main id="overview"><div className="page-heading"><div><span className="eyebrow">A LITTLE CLARITY FOR YOUR EVERYDAY</span><h1>{greeting}<span className="greeting-dot">.</span></h1><p>Welcome to your corner of the day. Let’s make it a good one.</p></div><div className="date-badge"><span>{date.toLocaleDateString('en-CA', { weekday: 'long' })}</span><strong>{date.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' })}</strong></div></div>
      <div className="welcome-banner"><div><span className="banner-label">YOUR DAILY PERSPECTIVE</span><h2>Stay informed. Keep inspired.</h2><p>A clearer view of what’s happening around you—and what’s next for you.</p></div><span className="banner-art" aria-hidden="true">✳</span></div>
      <div className="dashboard-grid"><News /><Sports /><Jobs /><Calendar /><Goals /><Tasks /></div>
      <footer className="page-footer"><span>daybook · A space for your everyday</span><span>Made for a little more focus.</span></footer></main>
    </div>
  </div>;
}
