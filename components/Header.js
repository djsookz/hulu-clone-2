import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow space-x-4 justify-evenly max-w-2xl sm:mt-6">
        <HeaderItem title="HOME" Icon={HomeIcon} alt="HomeIcon" />
        <HeaderItem
          title="TRENDING"
          Icon={LightningBoltIcon}
          alt="TrendingIcon"
        />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} alt="VerifiedIcon" />
        <HeaderItem
          title="COLLECTIONS"
          Icon={CollectionIcon}
          alt="CollectionsIcon"
        />
        <HeaderItem title="SEARCH" Icon={SearchIcon} alt="SearchIcon" />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} alt="AccountIcon" />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={150}
        height={100}
      />
    </header>
  );
}

export default Header;
