import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return <div className="px-10 pt-[100px] space-x-2.5"></div>;
};

export default Home;
