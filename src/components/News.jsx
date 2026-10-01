import Section, { EmptyState } from './Section.jsx';
const sources = ['CTV News', 'Toronto Star', 'National Post', 'CBC', 'CP24'];
export default function News() {
  return <Section id="news" eyebrow="Around the city" title="Local news" className="news-panel">
    <div className="source-list" aria-label="Planned news sources">{sources.map(source => <span key={source}>{source}</span>)}</div>
    <EmptyState symbol="▤" title="Your city, at a glance">Top local headlines from your favourite Canadian newsrooms will appear here.</EmptyState>
    <footer className="panel-footer"><span className="small-dot" /> Toronto & the GTA <span>5 news sources</span></footer>
  </Section>;
}
