const Card = ({title, imageUrl, content, category, tags, published }) => {
    return (
        <div className="card">
            <h2 className="cardTitle" >{title}</h2>
            <img className="cardImg"  src={imageUrl} alt={title} />
            <p className="cardContent" >{content}</p>
            <p className="cardContent" ><strong>Categoria:</strong>{category}</p>
            <p className="cardContent" ><strong>Tags:</strong>{tags}</p>
            <p className="cardContent" >{published}</p>
        </div>
    )
}

export default Card;