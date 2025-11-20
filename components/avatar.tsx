import Image from "next/image";

export const Avatar = () => {
  return (
    <Image className="rounded-full" src={"/placeholder.svg"} width={30} height={30} alt="Avatar" />
  );
};