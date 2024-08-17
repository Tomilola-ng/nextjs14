import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src={"/public/logo.svg"} alt={"logo"} width={100} height={100} />
    </Link>
  );
}
