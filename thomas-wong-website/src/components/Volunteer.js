import "../css/Volunteer.css";

const Volunteer = () => {
    return (
        <div className="volunteer-background">
            <iframe
                className="volunteer-form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdnwlDwga_EMgUFaKmiVStcltMwKD4YldoVKQXlOSPDQwGxZg/viewform?embedded=true"
                title="VolunteerForm"
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"
            >
                Loading…
            </iframe>
        </div>
    )
}

export default Volunteer;