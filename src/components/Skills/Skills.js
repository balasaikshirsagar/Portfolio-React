import "./Skills.css"



export default function Skills(){
    return(
        <div className="skills">
            <div className="headingskills">
                <h1>My Skills</h1>
            </div>
            <div className="skills1">
                <div className="react">
                    <div className="reactimg">
                        <img src="./react.png" alt="" className="reactimg2" />
                    </div>
                </div>
                <div className="html">
                    <div className="htmlimg">
                        <img src="./html.png" alt="" className="htmlimg1"/>
                    </div>
                </div>
                <div className="tailwind">
                    <div className="tailwindimg">
                        <img src="https://images.unsplash.com/photo-1662026911591-335639b11db6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3FsfGVufDB8fDB8fHww" alt="" className="tailwindimg1" />
                    </div>
                </div>
            </div>
        </div>
    )
}