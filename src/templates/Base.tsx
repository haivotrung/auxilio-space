import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {/* <VerticalFeatures /> */}
    {/* <Banner /> */}
    <Footer />
  </div>
);

export { Base };
