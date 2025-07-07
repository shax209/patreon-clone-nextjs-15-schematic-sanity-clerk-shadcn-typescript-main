import { getSiteSettings } from "@/sanity/lib/siteSettings/getSiteSettings";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import CurrentTierBadge from "./Badge/CurrentTierBadge";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Button } from "./ui/button";
import { HeartIcon } from "lucide-react";

async function Header() {
  const siteSettings = await getSiteSettings();

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200">
      {/* Left */}
      <div>
        <Link href="/">
          {siteSettings?.headerLogo ? (
            <Image
              src={urlFor(siteSettings?.headerLogo).url()}
              alt={siteSettings?.headerLogo?.alt || "Logo"}
              width={100}
              height={100}
              className="w-10 h-10 object-cover rounded-full aspect-square"
            />
          ) : (
            <h1 className="text-xl tracking-widest font-bold uppercase text-gray-400">
              {siteSettings?.siteTitle}
            </h1>
          )}
        </Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <SignedIn>
          <div className="flex items-center gap-2 hover:gap-4 px-2 py-2 hover:px-4 hover:bg-gray-100 transition-all duration-200 border border-gray-200 rounded-full">
            <CurrentTierBadge />

            <UserButton />
          </div>
        </SignedIn>
      </div>

      <SignedOut>
        <Button
          variant="outline"
          asChild
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          <div>
            <SignInButton mode="modal" />
            <HeartIcon className="w-4 h-4" />
          </div>
        </Button>
      </SignedOut>
    </header>
  );
}

export default Header;
