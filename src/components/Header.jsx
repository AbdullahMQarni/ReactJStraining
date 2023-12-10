function Header() {
    const reactdes = ['Fundementals', 'basics', 'cores']
    function reactDescription(title) {
      return Math.floor(Math.random() * (title +1))
    }

    let description = reactdes[reactDescription(2)]
    
    return(
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

export default Header;