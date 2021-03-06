import './ModalLogin.scss';

function ModalLogin({ modalClose }) {
  const onCloseModal = event => {
    if (event.target === event.currentTarget) {
      modalClose();
    }
  };

  return (
    <div className="modalLoginContainer" onClick={onCloseModal}>
      <div className="modal">
        <p className="text">이메일 또는 비밀번호를 확인해 주세요.</p>
        <button className="modalButton" onClick={modalClose}>
          확인
        </button>
      </div>
    </div>
  );
}

export default ModalLogin;
