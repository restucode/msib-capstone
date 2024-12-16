import styles from "./CommonPageLayout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, NewsCard } from "../components";
import { useEffect } from "react";
import { fetchNews } from "../store/actions";
import { NEWS_REDUCER_CASES } from "../store/reducers";
import { useNavigate } from "react-router-dom";

function CovidPage() {
    const newsReducer = useSelector((state) => state.news);
    const savedNewsReducer = useSelector((state) => state.savedNews);
    const dispatch = useDispatch();
    const navigate = useNavigate()

  
    useEffect(() => {
      dispatch(fetchNews({
          q: "Covid-19",
      }));
    }, [dispatch]);

    const handleToggleSave = (n) => {
        n.buttonName = "COVID-19"
      const isSaved = savedNewsReducer.some((saved) => saved._id === n._id);
      if (isSaved) {
        dispatch({
          type: NEWS_REDUCER_CASES.UNSAVE_NEWS,
          news: n,
        });
  
        alert("Artikel Berhasil dihapus ke halaman Saved")
      } else {
        dispatch({
          type: NEWS_REDUCER_CASES.SAVE_NEWS,
          news: n,
        });
  
        alert("Artikel Berhasil disimpan ke halaman Saved")
      }
    };

    return (
        <main>
        <Navbar 
          
        />
        <section className={styles.pageContainer}>
          <section>
            <h1 className={styles.h1Container}>Covid-19 News</h1>
          </section>
          <section className={styles.newsContainer}>
            {newsReducer.map((n, i) => {
              const { headline, abstract, source, byline } = n;
              const isSaved = savedNewsReducer.some((saved) => saved._id === n._id);
              return (
                <NewsCard
                  key={n._id}
                  headline={headline.main}
                  abstract={abstract}
                  source={source}
                  author={byline?.original || "Unknown Author"}
                  buttonName="Covid-19"
                  btnSaveUnsaveV2={isSaved ? 'Un-Save' : 'Save'}
                  isSaved={isSaved}
                  onToggleSave={() => handleToggleSave(n)}
                  onViewNewDetail={() => {
                    let titleToKeyword = n.headline.main.split(" ").join("-")
                    navigate(`/covid-19/${titleToKeyword}`)
                  }}
                />
              );
            })}
          </section>
        </section>
      </main>
    )
}


export default CovidPage;