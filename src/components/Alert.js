import React from 'react'

function Alert({ alert, setAlert }) {
  if (!alert) return null;

  return (
    <div
      className={`alert alert-${alert.type.toLowerCase()} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{alert.type}</strong> : {alert.msg}
      <button
        type="button"
        className="btn-close"
        onClick={() => setAlert(null)}   // ✅ No Bootstrap dismiss, React handles it
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
