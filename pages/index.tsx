import { GetServerSideProps } from "next";
import React from "react";
import { getRemult } from "../server/api";
import { User } from "../shared/models/User";
import { nextJson } from "../shared/utils/utils";

type Props = {
  users: User[];
};

const Home = ({ users }: Props) => {
  return (
    <div>
      <p>Test</p>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const remult = await getRemult(context);
  const users = await remult.repo(User).find();

  return { props: { users: nextJson(users) } };
};

export default Home;
