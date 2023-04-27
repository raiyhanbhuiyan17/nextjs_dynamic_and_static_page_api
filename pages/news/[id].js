//Dynamic routing
import Meta from "@/components/Meta";

const SingleNews = ({newsItem}) => {
    return ( 
        <>
            <Meta title={newsItem.title} keywords={newsItem.title} description={newsItem.body} />
            <main className='container mt-4'>
                <div className='row'>
                    <h1>{newsItem.title}</h1>
                    <p>
                        {newsItem.body}
                    </p>
                </div>
            </main>

        </>
     );
}
//getServerSideProps:
/*export const getServerSideProps = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id);
  const newsItem = await res.json();
  return {
    props: {
      newsItem
    }
  }
} 
*/


export const getStaticProps = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id);
  const newsItem = await res.json();

  return {
    props: {
      newsItem
    }
  }
}
export const getStaticPaths = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const newsList = await res.json();
  const ids = newsList.map((newsItem) => newsItem.id);
  const paths = ids.map((id) => ({params: {id: id.toString()}}))
  return {
      paths,
      fallback: false
      //incase server gives any error then it return the next path
  }
}


export default SingleNews;















// import {useRouter} from 'next/router';

// const BlogPostDeatils = () => {
//   const router = useRouter();
//   //console.log(router);
//   const {id} = router.query;
//   return (
//     <div>
//         <h1>My Dynamic Page ID is {id}</h1>
//     </div>
//   )
// }

// export default BlogPostDeatils;


