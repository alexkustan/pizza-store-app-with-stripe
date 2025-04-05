import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "../ui";
import { CircleUser, User } from "lucide-react";

interface Props {
  className?: string;
  onClickSignIn?: () => void;
}

export const ProfileButton: React.FC<Props> = ({
  className,
  onClickSignIn,
}) => {
  const { data: sesion } = useSession();

  return (
    <div className={className}>
      {!sesion ? (
        <Button
          variant="outline"
          className="gap-1 flex items-center"
          onClick={onClickSignIn}
        >
          <User size={16} />
          Log in
        </Button>
      ) : (
        <Button variant="secondary" className="flex items-center gap-2">
          <CircleUser size={18} />
          Profile
        </Button>
      )}
    </div>
  );
};
