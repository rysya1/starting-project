import classes from './MainText.module.css'

function MainText(props) {
	return (
		<div>
			<h1 className={classes.main_text}>
				{props.name}
			</h1>
			<p>
				{props.price}
			</p>
		</div>
	)
}

export default MainText
