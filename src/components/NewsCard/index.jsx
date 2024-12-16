import styles from './NewsCard.module.css';

const truncateChar = (text) => {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        if(i < 250) {
            result += text[i];
        }else {
            break
        }
    }

    return `${result}..`
}

function NewsCard(props) {
    const { headline,  abstract,  source, author, onViewNewDetail, buttonName, onToggleSave, isSaved, btnSaveUnsaveV2} = props


    return (
        <section className={styles.newsCard}>
            <h3>{source}</h3>
            <h1
             onClick={() => {
                onViewNewDetail()
            }}
            >{headline}</h1>
            <h4>{author}</h4>
            <p>{truncateChar(abstract)}</p>
        <div className={styles.buttonContainer}>
            <button className={styles.newsPageButton}
                onClick={() => {
                    onViewNewDetail()
                }}
            >{buttonName} Page</button>

            <button
                onClick={onToggleSave}
                style={{
                    backgroundColor: isSaved ? '#2a2a2a' : 'gray',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: "bold"
                }}
            >
                   {btnSaveUnsaveV2}
            </button>
        </div>
        </section>
    )
}

export { NewsCard }