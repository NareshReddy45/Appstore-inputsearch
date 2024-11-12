import './index.css'

function AppItem({appsList}) {
  return (
    <div>
      <ul className="app-item-ul">
        {appsList.map(item => (
          <li key={item.appId} className="app-box">
            <img src={item.imageUrl} alt={item.appName} className="app-icon" />
            <p>{item.appName}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppItem
