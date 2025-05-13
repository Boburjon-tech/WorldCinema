import { useCollectionsData } from "../../hooks/useCollectionsData";
import "./Films.css";
export default function Films() {
  const { data, isPending, error } = useCollectionsData();

  if (isPending) return <p style={{color:"white"}}>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik: {error} </p>;

  return (
    <div className="films_container">
    
      <div className="films_list">
        {data && data.films.map((item) => (
            <div className="film_div" key={item.id}>
                <button className="play_button"><img src={item.poster} alt={item.title}  />
                </button>
              <div className="film_abouts" style={{display:"flex",flexDirection:"column", alignItems:"start"}}>
                <h1 style={{color:"white"}}>{item.title}</h1>
                <p style={{color : "white"}}>{item.runtime}minut</p>
                <p style={{color : "white"}}>{item.genre}</p>
                <p style={{color : "white"}}>{item.country}</p>
                <p style={{color : "white"}}>{item.actors}</p>
              </div>
              
            </div>      
        ))}
      </div>
      
    </div>
  );
}
