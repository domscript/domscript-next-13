"use client";
interface IconProps {
  width: number;
  height: number;
  path: string;
  viewBox: string;
  color: string;
  className: string;
}

export default function Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox={props.viewBox}
      className={props.className}
    >
      <path d={props.path} fill={props.color} />
    </svg>
  );
}
