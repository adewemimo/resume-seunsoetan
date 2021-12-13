const SideBar = function (props) {
    const {name, title, email, phone, description} = props;

    return (
        <div className="sidebar">
            <img src="https://avatars.githubusercontent.com/u/57603735?s=400&v=4" alt="Avatar" className="avatar" alt="profile image" />
            <h1>{name}</h1>
            <p>{title}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{description}</p>
        </div>
    )

}

export default SideBar;