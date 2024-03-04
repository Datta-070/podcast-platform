import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import Button from "../components/common/Button";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/common/Loader";

function Profile() {
  const user = useSelector((state) => state.user.user);

  console.log("My User", user);
  if (!user) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      {user.profilePic && (
        <img
          src={user.profilePic}
          alt="Profile Picture"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />
      )}
      <div style={{ marginTop: "50px" }}>
      <h1>{"User Name: "}{user.name}</h1>
      <h1>{"User Mail: "}{user.email}</h1>
      <h1>{"User ID: "}{user.uid}</h1>
      </div>
      <div style={{ marginTop: "40px", marginLeft:"140px" }}>
        <Button
          text={"Logout"}
          onClick={handleLogout}
          style={{ margin: "0 auto", textAlign:"center" }}
        />
      </div>
    </div>
  );
}

export default Profile;