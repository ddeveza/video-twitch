import { Navbar } from "./_components/navbar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20 border-white border-2">{children}</div>
    </>
  );
};

export default BrowseLayout;
