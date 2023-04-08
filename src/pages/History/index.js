import { useEffect, useState } from "react"

import Nav from "../../components/Nav"
import Modal from "../../components/Modal"
import useBackButton from "../../hooks/useBackButton"

const History = () => {
  const [showModal, setShowModal] = useState(false)
  // const [hasOnBackModalTriggered, setHasOnBackModalTriggered] = useState(false)

  console.log("rendering inside HISTORY page..")
  
  useBackButton({
    key: 'history-experiments',
    onBack: (data) => {
      console.log("back button pressed in history page", data)
      // if (hasOnBackModalTriggered) {
      //   return
      // }

      // setTimeout(() => {
      //   setShowModal(true)
      // })
      setShowModal(true)
      // setHasOnBackModalTriggered(true)
    }
  })

  const onCloseModal = () => {
    setShowModal(false)
    window.history.back()
  }
  
  return <div>
    <Nav />
    <h1>Experiment: history API</h1>

    {/* {showModal && <div>asas</div>} */}
    {showModal && <Modal shouldInterceptGoBack_ onClose={onCloseModal}>
      <h2>Are you sure you want to go back?</h2>
      <p>
        This modal creates a new entry in browser history.
        Clicking the browser back button will close this modal only, while the user remains in the same page.
      </p>
    </Modal>}
  </div>
}

export default History