import { useEffect, useState } from "react"

import Nav from "../../components/Nav"
import Modal from "../../components/Modal"

const History = () => {
  const [showModalA, setShowModalA] = useState(false)
  const [showModalB, setShowModalB] = useState(false)
  
  return <div>
    <Nav />
    <h1>Experiment: Modals with support for back button press</h1>

    <button onClick={() => setShowModalA(true)}>Show Modal with back button intercept</button>
    <button onClick={() => setShowModalB(true)}>Show Modal without back button intercept</button>

    {showModalA && <Modal shouldInterceptGoBack onClose={() => setShowModalA(false)}>
      <h2>Modal</h2>
      <p>
        This modal creates a new entry in browser history.
        Clicking the browser back button will close this modal only, while the user remains in the same page.
      </p>
    </Modal>}

    {showModalB && <Modal onClose={() => setShowModalB(false)}>
      <h2>Modal</h2>
      <p>
        This modal does not create a new entry in browser history.
        Clicking the browser back button will take the user back to the previous page.
      </p>
    </Modal>}
  </div>
}

export default History