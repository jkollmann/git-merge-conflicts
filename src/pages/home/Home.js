import { useEffect, useState } from "react";
import NewsArticle from "../../components/newsarticle/NewsArticle";
import "./Home.css";

function Home() {
    // 1. render: articles = undefined
    const [articles, setArticles] = useState();

    useEffect(() => {
        console.log("Getting new articles from the server");

        // Fetch wird asynchron ausgeführt, d.h. articles wird nicht sofort gesetzt
        fetch(`https://newsapi.org/v2/top-headlines?country=de&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((articlesJson) => {
                setArticles(articlesJson.articles);
            })
    }, []);

    // Lösung 1: if-statement
    // if (articles !== undefined) {
    //     return (
    //         <section>
    //             {articles.map((article, index) => <NewsArticle key={index} imgUrl={article.urlToImage} title={article.title} description={article.description} publishedAt={article.publishedAt} linkToArticle={article.url} />)}
    //         </section>
    //     );
    // } else {
    //     return <section><p>Loading...</p></section>
    // }

    // Lösung 2: Ternary Operator

    // return (
    //     <section>
    //         {articles !== undefined ? articles.map((article, index) => <NewsArticle key={index} imgUrl={article.urlToImage} title={article.title} description={article.description} publishedAt={article.publishedAt} linkToArticle={article.url} />) : <p>Loading...</p> }
    //     </section>
    // );
    
    // Lösung 3: Optional chaining

    return (
        <section>
            {articles?.map((article, index) => <NewsArticle key={index} imgUrl={article.urlToImage} title={article.title} description={article.description} publishedAt={article.publishedAt} linkToArticle={article.url} />)}
        </section>
    );
}

export default Home;