"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <>
      <NavbarBase 
        logoSrc="/images/logo.svg"
        logoAlt="MemeCoin Logo"
        leftButtonText="Menu"
        rightButtonText="Buy MEME"
        onLeftButtonClick={() => {}}
        onRightButtonClick={() => {}}
        className="sticky"
      />

      <BillboardHero
        title="Welcome to MemeCoin"
        subtitle="The fun way to engage with memes"
      />
      
      <SplitAbout
        description="MemeCoin is designed for the community, bringing fun and financial activity together. Join us on this exciting journey!"
      />

      <HowToBuy3D
        title="How to Buy MemeCoin"
        steps={[
          { title: "Step 1", description: "Set up a wallet", image: '/images/placeholder1.avif', position: 'left', isCenter: false },
          { title: "Step 2", description: "Purchase MEME via DEX", image: '/images/placeholder2.avif', position: 'right', isCenter: true },
          { title: "Step 3", description: "Join the community", image: '/images/placeholder3.avif', position: 'left', isCenter: false },
        ]}
      />

      <TextGridTokenomics
        title="Tokenomics"
        description="Understand how our tokenomics structure benefits everyone!"
        tokenData={[
          { value: "1B", description: "Total Supply" },
          { value: "20%", description: "Initial Burn" },
          { value: "5%", description: "Marketing" },
        ]}
      />

      <FooterBase 
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={100}
        columns={[
          { title: "Connect", items: [{ label: "Twitter", onClick: () => {} }, { label: "Github", onClick: () => {} }] },
          { title: "About", items: [{ label: "Join our community", onClick: () => {} }, { label: "FAQs", onClick: () => {} }] },
          { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] }
        ]}
        copyrightText="© 2023 MemeCoin"
        onPrivacyClick={() => {}}
      />
    </>
  );
}