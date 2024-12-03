import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube} from "react-icons/fa"

const midias = [
    { icon: <FaGithub/>, path: ""},
    { icon: <FaLinkedinIn/>, path: ""},
    { icon: <FaInstagram/>, path: ""},
    { icon: <FaYoutube/>, path: ""},

]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {midias.map((item, index)=>{
            return (
             <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            )
        })}
    </div>
  )
}

export default Social