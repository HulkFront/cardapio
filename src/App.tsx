import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';


function App() {
  const { data } = useFoodData();
  console.log(data)
  return (
    <div className='container'>
      <h1>Cardapio</h1>
      <div className='card-grid'>
      {Array.isArray(data) && data?.map((foodData) => 
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        )}
      </div>
    </div>
  )
}

export default App
