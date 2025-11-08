export default function ProjectItem({ year, title, image, hoverImage, alt, link, description }) {
  const hasImage = Boolean(image)
  const hasHover = Boolean(hoverImage)

  return (
    <div className="project-item">
      <div className="project-thumb" aria-hidden>
        {hasImage ? (
          <>
            <img className="project-thumb__img project-thumb__img--default" src={image} alt={alt || title} />
            {hasHover && (
              <img className="project-thumb__img project-thumb__img--hover" src={hoverImage} alt={alt ? `${alt} (hover)` : `${title} (hover)`} />
            )}
          </>
        ) : (
          <div className="project-placeholder" />
        )}
      </div>
      <div className="project-meta">
        <div className="project-year">{year}</div>
        {link ? (
          <a className="project-title" href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        ) : (
          <div className="project-title">{title}</div>
        )}
        {description && <p className="project-desc">{description}</p>}
      </div>
    </div>
  )
}
