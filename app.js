'use strict';

// App Component
function App(props) {
	return (
		<div className={'container'}>
			<header>
				<nav>
					<ul>
						<li>
							<a href={'#'} className={'active'}>About Me (React)</a>
						</li>
						<li>
							<a href={'Sally_Student_Resume_Semantic.html'}>Not React</a>
						</li>
					</ul>
				</nav>

				<h1>{props.name}</h1>
				<address>
					<a href={'mailto:sally@sally.com'} target={'_blank'}>{props.email}</a>
					<br />
					<a href={'tel:1-111-222-3344'}>{props.phone}</a>
					<br />
					<a href={props.url} target={'_blank'}>{props.url}</a>
					<br />
					<a href={'https://github.com/sally'} target={'_blank'}>{props.github}</a>
				</address>
				<br />
				<img
					src={'https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg'}
					alt={'Student Sally Picture'}
				/>
			</header>

			<main>
				<section id={'summary'}>
					<header><h2>Summary</h2></header>
					<p>
						Background summary...
				</p>
				</section>

				<section id={'education'}>
					<header><h2>Education</h2></header>
					<ul>
						<li>Cornell University, B.S 1992</li>
					</ul>
				</section>

				<section id={'skills'}>
					<header>
						<h2>Technical Skills</h2>
					</header>
					<ul>
						<li>Languages: Lasso, JavaScript, PHP</li>
						<li>Database: FileMaker, PostgreSQL, MongoDB, MySQL</li>
						<li>
							Frameworks: ReactJS, AngularJS
					</li>
						<li>Tools: Git</li>
					</ul>
				</section>

				<section id={'experience'}>
					<header>
						<h2>
							Work Experience
						<a href={'https://sally.com/work/'} target={'_blank'}>[more]</a>
						</h2>
					</header>

					<details open>
						<summary>XXX Company (<a href={'http://xxx.com/'} target={'_blank'}
						>http://xxx.com</a
						>), Junior Developer 2014 - 2015
					</summary>
						<p>
							XXX description ipsum dolor sit amet ...
					</p>
						<ul>
							<li>
								Developed ...
						</li>
							<li>
								Designed ...
						</li>
							<li>
								Deployed...
						</li>
						</ul>
					</details>

					<details open>
						<summary>ZZZ Company (<a href={'http://zzz.com'} target={'_blank'}
						>http://zzz.com</a
						>), Senior 2015 - 2017
					</summary>
						<p>
							ZZZ description ipsum dolor sit amet ...
					</p>
						<ul>
							<li>
								Developed ...
						</li>
							<li>
								Designed ...
						</li>
							<li>
								Deployed...
						</li>
						</ul>
					</details>
				</section>

				<section id={'publications'}>
					<h2>
						Selected Publications
					<a href={'https://sally.com/publications'} target={'_blank'}>[more]</a>
					</h2>
					<ul>
						<li>
							<a href={'https://sally.com/publicationName'} target={'_blank'}
							>Publication Name</a
							>, April 2019
					</li>
					</ul>
				</section>

				<section id={'articles'}>
					<h2>
						Selected Articles
					<a href={'https://sally.com/articles'} target={'_blank'}>[more]</a>
					</h2>
					<ul>
						<li>
							<a href={'https://sally.com/articleName'} target={'_blank'}
							>Article Name</a
							>, April 2019
					</li>
					</ul>
				</section>
			</main>

			<footer>
				&copy; 2019 {props.name}
			</footer>

		</div>
	);
};


const appRoot = document.querySelector('#root');

ReactDOM.render(
	<App
		name='Sally Student'
		email='sally@sally.com'
		phone='1-111-222-3344'
		url='http://www.sally.com'
		github='github.com/sally'
	/>,
	appRoot
);
