import './index.css'

function TabItem({tabsList, setActiveTabId, activeTabId}) {
  return (
    <div>
      <ul className="tab-item-ul">
        {tabsList.map(item => (
          <li key={item.tabId}>
            <button
              className={`tab-button ${
                activeTabId === item.tabId ? 'active-tab' : ''
              }`}
              onClick={() => setActiveTabId(item.tabId)}
            >
              {item.displayText}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabItem
