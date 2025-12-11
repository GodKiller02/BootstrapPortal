import * as React from 'react';
import styles from './FundDataCompass.module.scss';
import type { IFundDataCompassProps } from './IFundDataCompassProps';

const placeholderImages = {
  logo: 'https://placehold.co/280x120?text=Logo',
  data: 'https://placehold.co/320x200/0b5ed7/ffffff?text=Data',
  dataViz: 'https://placehold.co/320x200/f97316/ffffff?text=Viz',
  tools: 'https://placehold.co/140/6366f1/ffffff?text=T',
  skills: 'https://placehold.co/140/14b8a6/ffffff?text=S',
  community: 'https://placehold.co/140/f43f5e/ffffff?text=C',
  navi: 'https://placehold.co/96x96/0ea5e9/ffffff?text=N',
  specialist: 'https://placehold.co/90x90/475569/ffffff?text=LH'
};

const dataHighlights = [
  {
    image: placeholderImages.data,
    title: 'Data',
    description: 'Find, share and use data.'
  },
  {
    image: placeholderImages.dataViz,
    title: 'Data Visualization',
    description: 'Explore dashboards and insights.'
  }
];

const capabilityHighlights = [
  {
    image: placeholderImages.tools,
    title: 'Tools',
    description: 'Discover data tools that help you analyse, automate and share.'
  },
  {
    image: placeholderImages.skills,
    title: 'Skills',
    description:
      'Build confidence with data by growing your data and analytics capability.'
  },
  {
    image: placeholderImages.community,
    title: 'Community',
    description:
      'Learn, share and connect with others helping each other to unlock the value of data.'
  }
];

const stats = [
  { value: '25', label: 'Member Data Products' },
  { value: '13', label: 'Investment Data Products' },
  { value: '15', label: 'Enterprise Data Products' }
];

const FundDataCompass: React.FC<IFundDataCompassProps> = () => {
  return (
    <section className={styles.fundDataCompass}>
      <div className={styles.portalGrid}>
        <div className={styles.primaryColumn}>
          <div className={styles.portalHero}>
            <img
              src={placeholderImages.logo}
              alt="Company logo"
              className={styles.heroLogo}
            />
            <div className={styles.heroCopy}>
              <p className={styles.welcomeLine}>Welcome to the</p>
              <p className={styles.compassTitle}>Fund Data Compass</p>
              <p className={styles.compassSubtitle}>
                <em>Your go to place for data in the Fund</em>
              </p>
            </div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <p className={styles.infoLead}>
                The Fund Data Compass has been created to equip Colleagues with
                access to the data required to drive decisions that deliver
                better outcomes for Members.
              </p>
              <p className={styles.infoBody}>
                Choose from one of the options below or ask Navi (the Fund Data
                Compass AI Agent) to guide you in the right direction.
              </p>
            </div>

            <div className={`${styles.infoCard} ${styles.naviCard}`}>
              <div className={styles.naviIntro}>
                <img
                  src={placeholderImages.navi}
                  alt="Navi avatar"
                  className={styles.naviAvatar}
                />
                <div>
                  <p className={styles.naviHeading}>I&apos;m Navi and I&apos;m here</p>
                  <p className={styles.naviHeading}>to guide you!</p>
                </div>
              </div>
              <p className={styles.naviCallout}>Ask Navi</p>
              <p className={styles.naviPrompt}>
                <em>
                  type your data request here and I will point you in the right
                  direction...
                </em>
              </p>
            </div>
          </div>

          <div className={styles.dataGrid}>
            {dataHighlights.map(({ image, title, description }) => (
              <div className={styles.contentCard} key={title}>
                <img src={image} alt={title} className={styles.contentImage} />
                <p className={styles.cardTitle}>{title}</p>
                <p className={styles.cardBody}>{description}</p>
              </div>
            ))}
          </div>

          <div className={styles.capabilityGrid}>
            {capabilityHighlights.map(({ image, title, description }) => (
              <div className={styles.capabilityCard} key={title}>
                <img
                  src={image}
                  alt={title}
                  className={styles.capabilityImage}
                />
                <p className={styles.cardTitle}>{title}</p>
                <p className={styles.cardBody}>{description}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className={styles.secondaryColumn}>
          <div className={styles.rightPanel}>
            <p className={styles.panelTitle}>Data Products at a glance</p>
            <div className={styles.stats}>
              {stats.map(({ value, label }) => (
                <div className={styles.statBlock} key={label}>
                  <p className={styles.statValue}>{value}</p>
                  <p className={styles.statLabel}>{label}</p>
                </div>
              ))}
            </div>

            <div className={styles.specialistCard}>
              <p className={styles.specialistHeading}>
                Speak to a Data Specialist
              </p>
              <p className={styles.cardBody}>
                If you need help or support feel free to reach out to a Data
                Specialist here.
              </p>
            </div>

            <div className={styles.specialistProfile}>
              <img
                src={placeholderImages.specialist}
                alt="Luce Hughes"
                className={styles.specialistAvatar}
              />
              <div>
                <p className={styles.profileName}>Luce Hughes</p>
                <p className={styles.cardBody}>Data Product Owner</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default FundDataCompass;
