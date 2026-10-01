import { useState } from 'react';
import Section from './Section.jsx';
export default function Calendar() {
  const today = new Date();
  const [month, setMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const offset = (month.getDay() + 6) % 7;
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = Array.from({ length: Math.ceil((offset + days) / 7) * 7 }, (_, i) => i - offset + 1);
  const moveMonth = direction => setMonth(previous => new Date(previous.getFullYear(), previous.getMonth() + direction, 1));
  return <Section id="calendar" eyebrow="Make space for what matters" title="Calendar">
    <div className="calendar-toolbar"><h3 aria-live="polite">{month.toLocaleDateString('en-CA', { month: 'long', year: 'numeric' })}</h3><div><button onClick={() => moveMonth(-1)} aria-label="Previous month">‹</button><button className="today-button" onClick={() => setMonth(new Date(today.getFullYear(), today.getMonth(), 1))}>Today</button><button onClick={() => moveMonth(1)} aria-label="Next month">›</button></div></div>
    <div className="calendar-grid" aria-label="Days of the week">{['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => <span className="weekday" key={i}>{day}</span>)}</div>
    <div className="calendar-grid">{cells.map((day, i) => { const valid = day > 0 && day <= days; const current = valid && day === today.getDate() && month.getMonth() === today.getMonth() && month.getFullYear() === today.getFullYear(); return <span key={i} className={`calendar-day ${current ? 'current-day' : ''}`} aria-current={current ? 'date' : undefined}>{valid ? day : ''}</span>; })}</div>
    <footer className="calendar-legend"><span className="small-dot" /> Today</footer>
  </Section>;
}
