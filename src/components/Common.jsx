import Link from "next/link";
import Button from "./Button";

export default function Common() {
  return (
    <>
      <div className="container flex h-screen items-center flex-col justify-center">
        <p className="text-white text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui cumque
          accusantium deleniti! Ducimus obcaecati dicta consectetur? Nobis, rem
          rerum sit voluptatum at molestiae consequatur velit iste nam ad
          officia soluta, voluptatem excepturi necessitatibus. Mollitia
          repudiandae placeat velit saepe, itaque nulla consequatur ipsa eius ab
          repellat temporibus similique reprehenderit libero odit facilis
          ducimus a labore recusandae exercitationem laborum in. Corporis itaque
          accusantium aliquam, doloremque asperiores et maxime cupiditate iure?
          Incidunt cum minima libero? Facilis nam vero voluptatem, reprehenderit
          quisquam, magnam magni eaque asperiores deleniti illo velit delectus
          eius. Maxime aperiam voluptates commodi necessitatibus sunt
          repudiandae architecto! Assumenda explicabo eaque reprehenderit
          voluptatem!
        </p>
        <Link href={"/About"} ><Button text="Home btn" /></Link>
      </div>
    </>
  );
}
