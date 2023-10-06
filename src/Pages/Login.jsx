import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config"; // Import your Firebase configuration

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailPasswordLogin = () => {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        console.log("Email/password login successful:", user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        // Handle login error
        console.error("Email/password login error:", error.message);
      });
  };

  const handleGoogleLogin = () => {
    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful Google login
        const user = result.user;
        console.log("Google login successful:", user);
      })
      .catch((error) => {
        // Handle Google login error
        console.error("Google login error:", error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-xl font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <i className="fa fa-eye-slash"></i>
                  ) : (
                    <i className="fa fa-eye"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleEmailPasswordLogin}
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Do not have an account?{" "}
              <Link
                to="/registration"
                className="text-blue-500 hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
        <div className="text-center">
          <button
            className="bg-orange-600 p-2 rounded-xl font-semibold text-white text-center w-full"
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
