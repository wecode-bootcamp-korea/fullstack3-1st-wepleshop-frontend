import './ModalSignUp.scss';

function ModalSignUp({ modalSignUpClose, goToHome }) {
  const onCloseModal = async event => {
    if (event.target === event.currentTarget) {
      modalSignUpClose();
      await goToHome();
    }
  };

  return (
    <div className="modalLoginContainer" onClick={onCloseModal}>
      <div className="modal">
        <p className="text">가입을 환영합니다.</p>
        <button className="modalButton" onClick={modalSignUpClose}>
          확인
        </button>
      </div>
    </div>
  );
}

export default ModalSignUp;