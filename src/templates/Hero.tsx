import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-lime-300">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.instagram.com/auxiliospace/">
            <a>Instagram</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20"
    title='THANK YOU for your support! We are pausing auxilio for the forseeable future.' children={undefined}/>
  
    <Section
      title="auxilio financials facts"
      description="Last year we raised $22,000 through support from our community. the overhead costs for the physical space annually were $31,000 before funding the food distribution program. we’ve absorbed as much of these costs as possible. to continue this year without long term funding is not viable. we will publish an annual report here soon for the public. más amor and we look forward to working to serve our communities with other organizations.
">
    </Section>
  </Background>
);

export { Hero };
