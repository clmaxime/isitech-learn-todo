import { ChangeEventHandler, FC } from "react";

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export const Input: FC<Props> = (props) => {
  const { onChange, value } = props;

  return (
    <input
      className="outline outline-1 outline-black -outline-offset-1 rounded text-base p-2"
      type="text"
      onChange={onChange}
      value={value}
    />
  );
};
