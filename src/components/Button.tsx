import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{ onClick: () => void }>;

export const Button: FC<Props> = (props) => {
  const { children, onClick } = props;

  return (
    <button
      className="bg-blue-500 rounded p-3 leading-none text-white text-base"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
