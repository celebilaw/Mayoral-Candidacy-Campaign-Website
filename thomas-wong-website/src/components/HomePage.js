import Carousel from "react-material-ui-carousel";
import "../css/HomePage.css";
import Image1 from "./icons/img1.jpg";
import Image2 from "./icons/img2.jpg";
import Image3 from "./icons/img3.jpg";
import Image4 from "./icons/img4.jpg";

function CreateCarousel(props) {
    var items = [
        {
            webUrl: Image1
        },
        {
            webUrl: Image2
        },
        {
            webUrl: Image3
        },
        {
            webUrl: Image4
        },
    ]

    return (
        <Carousel
            indicators={false}
            stopAutoPlayOnHover={false}
            navButtonsAlwaysVisible={false}
            className="carousel"
        >
            {
                // creates an array of Items
                items.map((item) => <Item item={item}/>)
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <img className="carousel-image" src={props.item.webUrl} alt="MPK Photos"/>
    )
}

const HomePage = () => {
    return (
        <div className="home-container">
            <CreateCarousel />
            <div className="mission-statement">
                Mission Statement
            </div>
        </div>
    )
}

export default HomePage;