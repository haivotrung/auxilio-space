type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '150' : '60';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        src="/auxilio-logo.png"
        alt="Auxilio Logo"
        width={size}
        height={size}
      />
    </span>
  );
};

export { Logo };
