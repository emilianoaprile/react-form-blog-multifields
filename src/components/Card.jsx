const Card = ({title, imageUrl, content, category, tags, published }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} />
            <p>{content}</p>
            <p>{category}</p>
            <p>{tags}</p>
            <p>{published}</p>
        </div>
    )
}

export default Card;