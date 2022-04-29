import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-10'
    }`}
  >
    {(props.title || props.description) && (
      <div className="p-3 mb-12 text-center md:px-10">
        {props.title && (
          <h2 className="text-5xl font-bold leading-tight text-left text-black md:font-[500] md:text-7xl ">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mt-4 text-2xl text-left text-black md:text-3xl">
            {props.description}
          </div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
