import "./Projects.css"



export default function Projects(){
    return (
        <div className="projects">
           <div className="headingprojects">
            <h1>My Projects</h1>
            <div className="projects1">
                <div className="box1">
                    <div className="headingportfolio">
                        <h4>Library Management Web Application</h4>
                    </div>
                    <img src= "https://media.istockphoto.com/id/1425259353/photo/library-bookshelves-cambridge-massachuetts.webp?b=1&s=170667a&w=0&k=20&c=nDkLIbcj1ZeNFqjRYODvxrY2mg7dgs_-EDBMipmWJ1I=" alt="img"  className="portfolioimg"/>?
                </div>
                <div className="box1">
                    <div className="headingspotify">
                        <h4>Gym Web Application</h4>
                    </div>
                    <img src="https://media.istockphoto.com/id/1132006407/photo/empty-gym.webp?b=1&s=170667a&w=0&k=20&c=ozYaMHwyxr2DAa_MMB5sN72-haSbwUG6-p9tLARipvY=" alt="img" className="spotifyimg"/>
                </div>
                <div className="box1">
                    <div className="headingecommerce">
                        <h4>Expense Tracker Application</h4>
                    </div>
                    <img src='https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV4cGVuc2UlMjB0cmFja2VyfGVufDB8fDB8fHww' alt="img" className="ecommerceimg"/>
                </div>
            </div>
           </div>
        </div>
    )
}