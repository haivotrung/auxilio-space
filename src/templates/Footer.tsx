import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <Background color="bg-[#f1f2ec]">
    <Section>
      <CenteredFooter logo={<Logo xl />}></CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
