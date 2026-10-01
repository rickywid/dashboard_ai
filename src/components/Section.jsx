export default function Section({ id, eyebrow, title, children, className = '' }) {
  return <section id={id} className={`panel ${className}`} aria-labelledby={`${id}-title`}>
    <header className="panel-heading"><div><span className="eyebrow">{eyebrow}</span><h2 id={`${id}-title`}>{title}</h2></div></header>
    {children}
  </section>;
}

export function EmptyState({ symbol, title, children }) {
  return <div className="empty-state"><span className="empty-symbol" aria-hidden="true">{symbol}</span><h3>{title}</h3><p>{children}</p><span className="status-tag">Coming soon</span></div>;
}
