const Buttons = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center py-3 px-7 border gap-2 font-montserrat leading-none
        ${
          backgroundColor
            ? `${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        }  rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="Rightarrow"
          width={20}
          height={20}
          className="ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Buttons;
