import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="px-10 pt-[100px] space-x-2.5">
      <h1 className="h1-bold">
        {`Welcome to the world of Next.js ${session?.user?.name}!`}
      </h1>
      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit" className="cursor-pointer">
          Log out
        </Button>
      </form>
    </div>
  );
};

export default Home;
