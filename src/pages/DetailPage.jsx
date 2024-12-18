import styles from "./CommonPageLayout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../components";
import { useParams } from "react-router-dom";
import { fetchNews } from "../store/actions";
function DetailPage() {
  const newsReducer = useSelector((state) => state.news);
  const { id} = useParams()

  const dispatch = useDispatch();

  let keywordToTitle = id.split("-").join(" ")
  const filterNewsReducer = newsReducer.filter((val) => val.headline.main.split(" ").join("-").includes(id))

    const performSearch = (searchQuery) => {
      // setHeaderTitle(searchQuery)
      dispatch(fetchNews({ q: searchQuery }));
    };

  return (
    <main>
      <Navbar performSearch={performSearch} />
      <section className={styles.pageContainer}>
        <section>
          <h1 className={styles.detailH1}>{ keywordToTitle }</h1>
        </section>
        <section className={styles.detailContainer}>
          <p className={styles.detailAuthor}>{ filterNewsReducer[0].byline?.original || "Unknown Author" }</p>
          <p className={styles.detailDate}>{ filterNewsReducer[0].pub_date }</p>
          <div className={styles.detailAbstract}>{ filterNewsReducer[0].abstract }</div>

          <p className={styles.detailArticles}>full article <a target="_blank" className={styles.detailClick} href={filterNewsReducer[0].web_url}>click here</a></p>
        </section>
      </section>
    </main>
  );
}

export default DetailPage;
