import { Button, Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui/dialog";
import { signIn } from "next-auth/react";
import React from "react";
import { LoginForm } from "./forms/login-form";
import { RegisterForm } from "./forms/register-form";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [type, setType] = React.useState<"login" | "register">("login");

  const onSwitchType = () => {
    setType(type === "login" ? "register" : "login");
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[300px] md:w-[450px]  bg-white p-10">
        {type === "login" ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}
        <Button
          variant="outline"
          onClick={onSwitchType}
          type="button"
          className="h-12"
        >
          {type != "login" ? "Sign in" : "sign up"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
