import React from 'react'

export default function ExperienceItem({ range, title, company, description, techs = [] }) {
  return (
    <article className="experience-item">
      <div className="exp-range">{range}</div>
      <div className="exp-body">
        <h4 className="exp-title">{title} · <span className="exp-company">{company}</span></h4>
        <p className="exp-desc">{description}</p>
        <div className="tech-list">
          {techs.map((t) => (
            <span className="tech-chip" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
