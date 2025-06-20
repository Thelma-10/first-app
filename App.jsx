import React, { useState } from 'react';

function AuthForm({ isLogin }) {
  return (
    <div style={{ padding: 20, maxWidth: 400, margin: 'auto', background: '#e3f0ff', borderRadius: 10 }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <input placeholder="Username" style={{ display: 'block', marginBottom: 10 }} />
      <input placeholder="Password" type="password" style={{ display: 'block', marginBottom: 10 }} />
      <button>{isLogin ? "Login" : "Sign Up"}</button>
    </div>
  );
}

export default function App() {
  const [loginMode, setLoginMode] = useState(true);
  return (
    <div  style={{
        background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <AuthForm isLogin={loginMode} />
      <p style={{ textAlign: 'center' , marginTop: 20 }}>
        {loginMode ? "No account?" : "Already have an account?"}
        <button onClick={() => setLoginMode(!loginMode)} style={{ marginLeft: 8 }}>
          {loginMode ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}