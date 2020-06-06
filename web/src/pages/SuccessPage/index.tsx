import React, { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import './styles.css'

const SuccessPage = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 2000);
  }, [history]);

  return (
    <div id="success-message">
      <FiCheckCircle color="green" className="icon" size="4vw" />
      <h1 className="title">Cadastro Concluído</h1>
    </div>
  );
};

export default SuccessPage;
