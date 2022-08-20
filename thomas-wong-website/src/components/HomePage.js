import Carousel from "react-material-ui-carousel";
import "../css/HomePage.css";
import Image1 from "./icons/img1.webp";
import Image2 from "./icons/img2.webp";
import Image3 from "./icons/img3.webp";
import Image4 from "./icons/img4.webp";

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
            loading="lazy"
        >
            {
                // creates an array of Items
                items.map((item) => <Item item={item} loading="lazy"/>)
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <img className="carousel-image" src={props.item.webUrl} alt="MPK Photos" loading="lazy"/>
    )
}

const HomePage = () => {
    return (
        <div className="home-container">
            <CreateCarousel />
            <div className="mission-statement">
                <h1 className="statement-title"> Thomas Wong </h1>
                <h3 className="statement-subTitle"> &#8212; Keeping Monterey Park a city of opportunity for all </h3>
                <p className="statement-content">
                    For nearly 15 years, I&#39;ve proudly served Monterey Park as a city commissioner and an elected San Gabriel
                    Valley Municipal Water District Boardmember. I was born at Garfield Medical Center, attended local
                    schools, and earned my Bachelor&#39;s from UCLA and Master&#39;s degree from USC. I have dedicated my
                    career to giving Monterey Park residents a stronger voice in our government and creating more
                    opportunities for our families. 
                    <br/><br/>
                    When COVID-19 hit, I secured millions for emergency assistance, infrastructure improvement, and job
                    creation, including $4 million to improve our water quality. As an Alhambra Educational Foundation
                    Boardmember, I&#39;ve raised funds to expand educational programs and support teachers and students.
                    <br/><br/>
                    As your Councilmember, I will:
                    <br/>
                    -&nbsp;Support our families and small businesses
                    <br/>
                    -&nbsp;Enhance city services, including our parks and streets
                    <br/>
                    -&nbsp;Ensure our community is safe and continues to be one of the best places to live in the region
                    <br/><br/>
                    I&#39;m proud to be endorsed by trusted community leaders, including Congressmember Judy Chu,
                    Assemblymember Mike Fong, County Supervisor Hilda Solis, Monterey Park Mayor Henry Lo,
                    Councilmembers Hans Liang and Peter Chan, and Alhambra School Boardmember Bob Gin.
                    <br/><br/>
                    I&#39;m asking for your vote. Let&#39;s work together to keep Monterey Park a city of opportunity for all.
                </p>
            </div>
        </div>
    )
}

export default HomePage;