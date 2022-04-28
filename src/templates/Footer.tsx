import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-lime-300">
    <Section>
      <CenteredFooter
        logo={<Logo />}>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };