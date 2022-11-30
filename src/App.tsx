import Contact from "./components/Contact"
import Nav from "./components/Nav"
import './index.css';
function App() {

  return (
    <div className="App">
		<Nav />
    <div className="main">
		
		<div className="arrow">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="60"
				height="60"
				fill="#ffff"
				className="bi bi-arrow-down"
				viewBox="0 0 16 16"
			>
				<path
					fillRule="evenodd"
					d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
				/>
			</svg>
		</div>
	</div>
<div className="project">
	<div>
	<a href="https://github.com/pohadkove/MTG-Util-revamped" target="_blank"><h1>MTG-Util</h1></a>
</div>
	<div>
	<p><a href="https://github.com/pohadkove/MTG-Util-revamped" target="_blank">MTG-Util</a> is a desktop app for magic the gathering with life point counters dice roller and rule book</p>
</div>
<div className="arrow-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="60"
				height="60"
				fill="#ffff"
				className="bi bi-arrow-down"
				viewBox="0 0 16 16"
			>
				<path
					fillRule="evenodd"
					d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
				/>
			</svg>
		</div>
</div>
<div className="project-2">
	<div>
	<a href="https://groovy-songs.vercel.app/" target="_blank"><h1>Groovy</h1></a>
</div>
	<div>
	<p><a href="https://groovy-songs.vercel.app/" target="_blank">Groovy</a> is a site to discover new music it uses firebase on the backend to let users submit songs and to display songs</p>
</div>
</div>
<div className="project">
	<div id="contact">
		<Contact />
	</div>
</div>

    </div>
	
  )
}

export default App
