import React,{useEffect} from 'react';
import './Main.scss';
import { MdLocationOn } from 'react-icons/md';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import images
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';


// Data array of destinations
const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The options of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. The sunrise from the Sun Gate is simply spectacular.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. Its hallmark is lavish beauty. Always interesting to be in this place.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'According to the World Tourism Ranking, 45 million people visit Turkey each year, and about 2 million visit Cappadocia, known for luxury and adventure.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses are very colorful and vibrant.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$8400',
    description: 'The vibrant hues of the houses are a trademark here. If you love seafood, this place will excite you with the choices. Happy exploring great food!'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkor Wat represents the full range of Khmer art. This temple is considered the heart and soul of Cambodia, with luxurious and adventurous experiences.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'An immense white marble mausoleum built in Agra by Mughal Emperor Shah Jahan in memory of his wife Mumtaz. Breathtakingly beautiful.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is one of the top Indonesian holiday destinations, known for its volcanic mountains, culture, food, temples, and beautiful beaches.'
  },
];

const Main = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='main container section'>
      {/* Section Title */}
      <div className='secTitle'>
        <h3 className='title'>Most Visited Destinations</h3>
      </div>

      {/* Destination Cards */}
      <div className='secContent grid'>
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
          <div key={id}  data-aos="fade-up"
          className='singleDestination'>
            <div className='imageDiv'>
              <img src={imgSrc} alt={destTitle} />
            </div>

            <div className='cardInfo'>
              <h4 className='destTitle'>{destTitle}</h4>
              <span className='continent flex'>
                <MdLocationOn className='icon' />
                <span className='name'>{location}</span>
              </span>

              <div className='fees flex'>
                <div className='grade'>
                  <span>{grade}<small> +1</small></span>
                </div>
                <div className='price'>
                  <h5>{fees}</h5>
                </div>
              </div>

              <div className='desc'>
                <p>{description}</p>
              </div>

              <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className='icon' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
