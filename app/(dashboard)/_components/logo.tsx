import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <div className="flex items-center gap-x-1">
        <Image height={30} width={30} alt="logo" src="/logo.png" />
        <h1 className="font-bold text-xl">LEARN</h1>
      </div>
    </>
  );
};
