const SideBar = function (props) {
    return (
        <div className="sidebar">
            <img src="https://avatars.githubusercontent.com/u/57603735?s=400&v=4" alt="profile" />
            <h1>{props.name}</h1>
            <p>{props.title}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.description}</p>
        </div>
    )

}

export default SideBar;