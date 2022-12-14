import { useEffect, useState } from "react";
import NewsArticle from "../../components/newsarticle/NewsArticle";
import "./Home.css";

function Home() {
    const [articles, setArticles] = useState([]);
    const [country, setCountry] = useState("de");

    useEffect(() => {
        console.log("Getting new articles from the server");

        fetch(`https://newsapi.org/v2/top-headlines?country=${country ? country : "de"}&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((articlesJson) => {
                setArticles(articlesJson.articles);
            })
    }, [country]);

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
            <input
                type="text"
                onChange={(e) => setCountry(e.target.value)}
            />
            {articles?.map((article, index) => <NewsArticle key={index} imgUrl={article.urlToImage} title={article.title} description={article.description} publishedAt={article.publishedAt} linkToArticle={article.url} />)}
        </section>
    );
}

export default Home;