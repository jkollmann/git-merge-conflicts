import { useEffect, useState } from "react";
import NewsArticle from "../../components/newsarticle/NewsArticle";
import "./Home.css";

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        console.log("Getting new articles from the server");

        fetch(`https://newsapi.org/v2/top-headlines?country=de&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((articlesJson) => {
                setArticles(articlesJson.articles);
            })
    }, []);

    return (
        <section>
            {articles.map((article, index) => <NewsArticle key={index} imgUrl={article.urlToImage} title={article.title} description={article.description} publishedAt={article.publishedAt} linkToArticle={article.url} />)}
        </section>
    );
}

export default Home;