
function App() {

  return (
    <div className="App">
    <div className="main">
		<nav className="nav">
		<div className="nav-left">
			<a style={{color:"white", fontSize:"2.5em"}}  href="/">Pohadkove</a>
		</div>
		<div className="nav-right">
			<a href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="35"
					height="35"
					fill="#ffffff"
					className="bi bi-braces-asterisk"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z"
					/>
					</svg>
			</a>
		</div>
	</nav>
	
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
					fill-rule="evenodd"
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
					fill-rule="evenodd"
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
    </div>
  )
}

export default App
