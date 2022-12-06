import "./NewsArticle.css";

// imgUrl={article.urlToImage} title={article.title} description={article.description} publishedAt={article.publishedAt} linkToArticle={article.url}

const placeholderImage = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

function NewsArticle(props) {

    const articleDate = new Date(props.publishedAt);

    return (
        <article className="newsArticle">
            <img alt="article" src={props.imgUrl ? props.imgUrl : placeholderImage} />
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{articleDate.toLocaleDateString('de-DE')}</p>
            <a href={props.linkToArticle}>Read More</a>
        </article>
    );
}

export default NewsArticle;