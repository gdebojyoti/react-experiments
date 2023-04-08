import { useEffect, useState } from "react";

function useBackButton({key, onBack}) {
  const [isOnBackTriggered, setIsOnBackTriggered] = useState(false)
  useEffect(() => {
    // ignore if key or onBack is not provided
    if (!key || !onBack) {
      console.warn("key or onBack is not provided")
      return
    }
    
    const currentState = window.history.state
    const {key: currentKey} = currentState || {}
    console.log("currentState details", key, currentState, currentKey)

    // exit if key is same as current key, which will be the case when user simply refreshes the page
    if (key === currentKey) {
      console.log("same key, exiting", key)
      return
    }

    window.history.pushState({key}, "random title")
    // window.history.go(1)

    const popStateEvent = window.addEventListener('popstate', data => {
      console.log("popped!")
      onBack(data)
    })
    return () => {
      console.log("unounted!")
      window.removeEventListener('popstate', popStateEvent)
    }
  }, []);
}

export default useBackButton