import { useEffect, useState } from "react";
import { getUserData, hasToken } from "../services/UserService";

export type Profile = {
  id: number;
  points: number;
  real_name: string;
};

const HomePage = () => {
  const [user, setUser] = useState<Profile | undefined>();

  useEffect(() => {
    if (hasToken()) {
      getUserData().then((res) => setUser(res));
    }
  });

  return (
    <div>
      {user ? (
        <h2>
          {user.real_name}! {user.points}
        </h2>
      ) : (
        <h2>byebye</h2>
      )}
    </div>
  );
};

export default HomePage;
