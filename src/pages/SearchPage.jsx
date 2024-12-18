import styles from "./CommonPageLayout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, NewsCard } from "../components";
import { useEffect, useState } from "react";
import { fetchNews } from "../store/actions";
import { NEWS_REDUCER_CASES } from "../store/reducers";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const newsReducer = useSelector((state) => state.news);
  const savedNewsReducer = useSelector((state) => state.savedNews);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { q } = useParams()

  const [headerTitle, setHeaderTitle] = useState("")
  
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  
  const handleToggleSave = (n) => {
      n.buttonName = capitalizeWords(q)
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

  const performSearch = (searchQuery) => {
    setHeaderTitle(searchQuery)
    dispatch(fetchNews({ q: searchQuery }));
  };
  
  useEffect(() => {
    if (q) {
      performSearch(q);
    }
  }, [q]); 

  return (
    <main>
      <Navbar performSearch={performSearch}  />
      <section className={styles.pageContainer}>
        <section>
          <h1 className={styles.h1Container}>{ headerTitle? capitalizeWords(headerTitle) : capitalizeWords(q) } News</h1>
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
                buttonName={headerTitle? capitalizeWords(headerTitle) : capitalizeWords(q)}
                btnSaveUnsaveV2={isSaved ? 'Un-Save' : 'Save'}
                isSaved={isSaved}
                onToggleSave={() => handleToggleSave(n)}
                onViewNewDetail={() => {
                  let titleToKeyword = n.headline.main.split(" ").join("-")
                  navigate(`/search/${q}/${titleToKeyword}`)
                }}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default SearchPage;
