import Section, { EmptyState } from './Section.jsx';
export default function Jobs() {
  return <Section id="jobs" eyebrow="Your next chapter" title="Engineering opportunities">
    <div className="source-list"><span>Civil engineering</span><span>Toronto</span></div>
    <EmptyState symbol="▱" title="Make your next move">Civil engineering postings from the City of Toronto, TTC, and the listed Oracle careers portal will appear here.</EmptyState>
    <footer className="panel-footer">Job listings coming soon <span>3 career portals</span></footer>
  </Section>;
}
