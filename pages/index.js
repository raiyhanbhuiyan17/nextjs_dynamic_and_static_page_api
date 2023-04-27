import Link from "next/link";
import Meta from "@/components/Meta";
import SingleNews from "./news/[id]";
const Home = ({newsList}) => {
  console.log(newsList);
  return (
    <>
        <main className='container mt-4'>
        <div className='row'>
          {newsList.map(( news ) => (
            //console.log(news);
            <div className='col-md-4 mb-5' key={news.id}>
              <h3>{news.title.substring(0, 20)}...</h3>
              <p>{news.body.substring(0, 50)}...</p>
              <Link legacyBehavior href="/news/[id]" as = {`/news/${news.id}`}>
                <a className='btn btn-success'>Read More</a>
              </Link>
            </div>
          ))}
        </div>
      </main>

    </>
  );
}
//server side props
/*export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
  const newsList = await res.json();
  
  return {
    props: {
      newsList
    }
  }
} 
*/


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
  const newsList = await res.json();

  return {
    props: {
      newsList
    }
  }
}



export default Home;