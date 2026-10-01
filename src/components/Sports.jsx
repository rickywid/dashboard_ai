import Section from './Section.jsx';
const teams = [{ initials: 'ML', name: 'Maple Leafs', league: 'NHL', color: 'blue' }, { initials: 'TR', name: 'Raptors', league: 'NBA', color: 'red' }, { initials: 'BJ', name: 'Blue Jays', league: 'MLB', color: 'sky' }];
export default function Sports() {
  return <Section id="sports" eyebrow="Home team advantage" title="Toronto sports">
    <p className="section-description">A spot for every score, start time, and final whistle.</p>
    <div className="team-list">{teams.map(team => <div className="team" key={team.name}><span className={`team-avatar ${team.color}`}>{team.initials}</span><div><h3>{team.name}</h3><span>{team.league} · Toronto</span></div><span className="team-status">Feed pending</span></div>)}</div>
    <footer className="panel-footer">Live scores and schedules coming soon</footer>
  </Section>;
}
