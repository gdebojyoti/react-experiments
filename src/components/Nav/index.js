const Nav = () => {
  return <nav>
    <ul>
      {navItems.map(({label, url}) => { return <li key={label}>
        <a href={url}>{label}</a>
      </li> })}
    </ul>
  </nav>
}

const navItems = [
  {
    label: "Home",
    url: "/"
  },
  {
    label: "History",
    url: "/history"
  },
  {
    label: "Modals",
    url: "/modal"
  }
]

export default Nav