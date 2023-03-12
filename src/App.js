import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
    <Header
      title="Img galery with React"

    />
    <Card
    src="https://cdn.pixabay.com/photo/2020/05/02/14/06/chile-5121573_1280.jpg"
    title="Fitzroy national park"
    description="Monte Fitz Roy (also known as Cerro Chaltén, Cerro Fitz Roy, or simply Mount Fitz Roy) is a mountain in Patagonia, on the border between Argentina and Chile. It is located in the Southern Patagonian Ice Field, near El Chaltén village and Viedma Lake. It was first climbed in 1952 by French alpinists Lionel Terray and Guido Magnone."
    />
    <Card
    src="https://cdn.pixabay.com/photo/2021/06/22/17/24/torres-del-paine-6356782_1280.jpg"
    title="Torres del paine national park"
    description="Torres del Paine National Park, with its iconic granite towers, is one of the most popular destinations in Patagonia. It is most famous for the W Trek, but dig deeper and you'll find this is the perfect place to experience this region at it's wildest and most remote. Take on some of the secret hiking trails, kayak around icebergs or horseback ride across windswept pampa."
    />
    <Card
    src="https://cdn.pixabay.com/photo/2017/04/06/04/44/valdivia-2207187_1280.jpg"
    title="Valdivia city,Chile"
    description="ON RIVERS AND PIRATES Not widely known by tourists, is one of the most charming cities in Chile. This is a city suited for those travelers who want to know places plenty of history, anecdotes and legends; for those that once dreamed of being pirates or captains of a Spanish galleon."
    />
    
    <Footer

    />
    </div>
    
  );
}

export default App;
