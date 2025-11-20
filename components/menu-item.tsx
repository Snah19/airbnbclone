"use client";

interface MenuItemProps {
  label: string;
  onClick: () => void;
}

export const MenuItem = ({ label, onClick }: MenuItemProps) => {
  return (
    <div className="py-3 px-4 font-semibold hover:bg-neutral-100 transition" onClick={onClick}>
      {label}
    </div>
  );
};