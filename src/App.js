import './App.css'
import MainInput from './components/MainInput'
import MainText from './components/MainText'

function App() {
	let users = [
		{
			name: 'Kanat',
			price: '50$',
		},
	]
	console.log(users)
	return (
		<div className='App'>
			<h1>Hello World</h1>
			<MainText name={users[0].name} price={users[0].price}/>
			<MainText name={users[0].name} price={users[0].price}/>
			<MainInput />
		</div>
	)
}

export default App
