import "./about.css"
import { Link } from "react-router-dom"
function About() {
  return (
    <div className='about_container'>
       <h2 className="about_title">Salom bu kino sayt qiziqarli hamda foydali bo'lishi uchun yaratilgan. Bu yerda siz eng so'nggi filmlarni tomosha qilishingiz mumkin. Bizning saytimizda ko'plab janrlar mavjud, shuning uchun har kim o'ziga yoqadigan filmlarni topishi mumkin. Bizning maqsadimiz sizga eng yaxshi tomosha tajribasini taqdim etishdir. Sizning fikrlaringiz biz uchun juda muhim, shuning uchun iltimos, biz bilan bog'laning va o'z fikrlaringizni bildiring!</h2>
       <div className="social_links_container">
       <Link className="social_links" to="https://t.me/bobur08_dev">Telegram</Link>
       <Link className="social_links" to="https://www.instagram.com/abduvakhobov._.bobur/#">Instagram</Link>
       <Link className="social_links" to="https://www.linkedin.com/in/bobur-ashurmatov/">LinkedIn</Link>
       <Link className="social_links" to="https://www.facebook.com/batiroviches/">Facebook</Link>
       </div>
    </div>
  )
}

export default About
