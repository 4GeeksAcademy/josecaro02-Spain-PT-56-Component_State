import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({saludo}) => {
	// aqui va mi logica
	// useState esta pendiente del cambio de una variable
	// y si cambia la variable se recarga el componente
	//  const[ variable, funcion que cambia la variable] = useState(valor inicial de la variable)
	// comillas ``
	const [likes, setLikes] = useState(0)
	const [isLike, setIsLike] = useState(false)
	return (
		<div className={`text-center ${isLike == false ? "bg-warning" : "bg-info"}`}>
			{saludo}
			<h1>Likes {likes}</h1>
			{/* Si isLike es false aparece el boton verde de dar like
				Si isLike es true aparece  el boton rojo de dar dislike*/}
			{
				isLike == false 
				? 
				<button className="btn btn-success" onClick={()=>{
					setLikes(likes + 1)
					setIsLike(true)
				}}>Like</button>
				:
				<button className="btn btn-danger" onClick={()=>{
					setLikes(likes - 1)
					setIsLike(false)
				}}>Dislike</button>
			}

			
			
		</div>
	);
};

export default Home;
