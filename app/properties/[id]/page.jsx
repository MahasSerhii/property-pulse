// "use client" allow to use client component not server side component
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";

const PropertyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id } = useParams(); // get Id from page url
  const name = searchParams.get("name"); // get params from page url
  const pathName = usePathname(); // get page url
  return <div>PropertyPage</div>;
};

export default PropertyPage;
