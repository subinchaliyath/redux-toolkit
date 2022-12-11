import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userSlice";

function User() {
  const count = useSelector((state) => state.counter.count);
  const { data, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(count));
  }, [dispatch, count]);

  return (
    <div style={{ backgroundColor: "teal", width: "100%", height: "100vh" }}>
      <h1> User Component</h1>
      <h2>user: {count}</h2>
      {loading && <h3>Loading........</h3>}
      {!loading && error && <h2>{error}</h2>}
      {!loading && !error && data && <h1>{data?.name}</h1>}
    </div>
  );
}

export default User;
