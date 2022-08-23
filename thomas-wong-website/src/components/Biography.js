import "../css/Biography.css";
import Profile from "./icons/pfp.webp";

const Biography = () => {
    return (
        <div className="biography-container">
            <div className="profile">
                <img className="profile-image" src={Profile} alt="profile-i" />
            </div>
            <div className="biography">
                <div className="biography-title">
                    Thomas Wong
                </div>
                <div className="biography-subTitle">
                    <span className="bio-content">President of San Gabriel Valley Municipal Water District, </span>
                    Candidate for Monterey Park City Council
                </div>
                <div className="biography-statement">
                    Keeping Monterey Park a city of opportunity for all
                </div>
                <hr className="bio-line-break"/>
                <div className="biography-contact">
                    <span className="fa fa-envelope"></span>
                    votethomaswong@gmail.com
                </div>
                <div className="biography-content">
                    Thomas Wong is an accomplished community leader and  
                    environmental advocate who has dedicated his career to  
                    serving Monterey Park &#8211; the community where he was born and  
                    raised. Since 2012, Thomas has been elected by Monterey Park  
                    voters to serve as the city&#39;s representative to the San Gabriel  
                    Valley Municipal Water District Board. Thomas is now running  
                    for Monterey Park City Council to ensure that his hometown  
                    continues to be a place of opportunity for all. 
                    <br/><br/>
                    Like many in our diverse community, Thomas&#39;s parents  
                    immigrated to the United States to seek opportunity and a better  
                    life for their family. Thomas was born at Garfield Medical Center  
                    here in Monterey Park, attended local schools and participated in  
                    local activities, including swimming with the Monterey Park Manta Rays—his
                    team picture is still  displayed at Barnes Park Pool. Thomas&#39;s father 
                    worked construction and other odd jobs before  a 25-year career as a civil
                    engineer with Caltrans. His mother continues to provide healthcare to  
                    our immigrant community as an eye doctor in Alhambra. Together, they raised 
                    Thomas and his  brothers to care for those around them and to take pride in
                    their community and heritage. 
                    <br/><br/>
                    Thomas began his journey into public service after earning his undergraduate
                    degree from  UCLA and master&#39;s degree in public administration from USC.
                    He has since served at all levels  of government and in both the private and 
                    non-profit sectors to give Monterey Park residents a  stronger voice and to 
                    help build a more vibrant community.
                    <br/><br/>
                    Thomas currently works as an environmental policy advocate for Southern
                    California Edison,  where he brings together local businesses, non-profits,
                    and community leaders to advance clean  energy, climate and environmental 
                    justice policies. Prior to Edison, he helped to craft policy and  engage 
                    communities for California State Controller Betty Yee and former Assemblymember
                    Mike  Eng. He also serves on the boards of the Alhambra Educational Foundation 
                    and the San Gabriel  Valley Economic Partnership.
                    <br/><br/>
                    When COVID-19 hit, Thomas took swift action to help our communities. 
                    He helped secure millions  of dollars for emergency assistance, infrastructure 
                    improvement, and job creation.
                    <br/><br/>
                    As our Councilmember, Thomas will fight to:
                    <br/> 
                    •&nbsp; Support our families and small businesses so they can succeed and thrive 
                    <br/>
                    •&nbsp; Ensure our community is safe and vibrant
                    <br/>
                    •&nbsp; Enhance public services, including our parks and streets and water infrastructure
                    <br/><br/>
                    Thomas is proud to be endorsed by Congressmember Judy Chu, Assemblymember Mike  Fong,
                    LA County Supervisor Hilda Solis, Monterey Park Mayor Henry Lo, Monterey Park  
                    Councilmembers Hans Liang and Peter Chan, former Assemblymember Mike Eng and many other  local leaders.  
                    <br/><br/>
                    He&#39;s ready to talk about ways to make Monterey Park better for everyone. You can reach him at&nbsp;
                    <span className="bio-email">votethomaswong@gmail.com</span>.
                </div>
            </div>
        </div>
    )
}

export default Biography;