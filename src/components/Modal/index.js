import useBackButton from "../../hooks/useBackButton"

import './style.css'

const Modal = ({ children, onClose: onCloseProp, shouldInterceptGoBack }) => {
  const onInnerClick = (e) => {
    e.stopPropagation()
  }

  useBackButton({
    key: 'modal',
    onBack: shouldInterceptGoBack ? () => {
      console.log("back button pressed in MODAL")
      onCloseProp()
    } : null
  })

  const onClose = !shouldInterceptGoBack ? onCloseProp : () => {
    console.log("master onClose method")
    onCloseProp()
    window.history.back()
  }

  return <div className="modal" onClick={onClose}>
    <div className="modal__content" onClick={onInnerClick}>
      {children}
    </div>
  </div>
}

export default Modal