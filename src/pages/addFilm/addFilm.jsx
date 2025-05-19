import { useState } from "react";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import "./addfilm.css"

function AddFilm() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [runtime, setRuntime] = useState("");
  const [poster, setPoster] = useState("");
  const [country, setCountry] = useState("");
  const [actors, setActors] = useState("");
  const [filmUrl, setFilmUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "filmlar"), {
        title,
        genre,
        runtime,
        poster,
        country,
        actors,
        filmUrl,
      });
      alert("Film muvaffaqiyatli qo'shildi!");
      setTitle(""); setGenre(""); setRuntime(""); setPoster(""); setCountry(""); setActors(""); setFilmUrl("")
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Xatolik yuz berdi");
    }
  };

  return (
    <div className="addFilms_container">
      <div className="addfilm_wrapper">
      <h2 className="addFilms_title">Yangi film qo'shish</h2>
      <form className="addFilm_form" onSubmit={handleSubmit} >
        <input type="text" placeholder="Sarlavha" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Janr" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        <input type="text" placeholder="Davomiyligi (minut)" value={runtime} onChange={(e) => setRuntime(e.target.value)} required />
        <input type="text" placeholder="Poster URL" value={poster} onChange={(e) => setPoster(e.target.value)} required />
        <input type="text" placeholder="Davlat" value={country} onChange={(e) => setCountry(e.target.value)} />
        <input type="text" placeholder="Aktyorlar" value={actors} onChange={(e) => setActors(e.target.value)} />
        <input type="text" placeholder="Filmning linki" value={filmUrl} onChange={(e) => setFilmUrl(e.target.value)} />

        <button className="addFilm_btn" type="submit">Qo'shish</button>
      </form>
      </div>
    </div>
  );
}

export default AddFilm;
