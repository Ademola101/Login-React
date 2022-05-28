const welcomePage = ({ logOut }) => {
  return (
    <>
      <div>
        Hello welcome user <br />
        <button onClick={logOut}> Logout </button>
      </div>
    </>
  );
};

export default welcomePage;
