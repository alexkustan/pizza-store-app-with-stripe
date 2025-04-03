"use client";

import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals/auth-modal/auth-modal";

interface Props {
  hasSearch?: boolean;
  className?: string;
  hasCart?: boolean;
}

const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  return (
    <header className={cn("border-b")}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div>
              <h1 className="text-lg lg:text-2xl font-black uppercase">
                next pizza
              </h1>
              <p className="text-sm text-gray-400 lg:leading-3">
                Absolutely delicious!
              </p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 hidden lg:flex lg:flex-1">
            <SearchInput />
          </div>
        )}

        <div className="gap-3 flex items-center relative">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />
          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
          <div className="hidden lg:flex">{hasCart && <CartButton />}</div>
        </div>
      </Container>
      {hasCart && (
        <div className="lg:hidden fixed bottom-4 right-4 z-50">
          <CartButton />
        </div>
      )}
    </header>
  );
};

export default Header;
