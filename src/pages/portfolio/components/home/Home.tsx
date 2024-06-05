import { PrimaryButton } from "components/common";
import { SocialLink } from "pages/portfolio/types";

export default function Home() {

  const socialLinks: SocialLink[] = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/phungtienxinhdep/' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/lixxkook00' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/lequanglinh0209/' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/lixxkook/' },
  ];

  const SocialList: React.FC = () => (
    <div className="social-list">
      {socialLinks.map((social, index) => (
        <a key={index} href={social.url} className="social-item" target="_blank" rel="noreferrer">
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  )

  return (
    <div className="intro h-screen grid grid-cols-2 gap-4">
      <div className="intro-content flex flex-col items-center justify-center">
        <div className="intro-avt max-w-xs mb-4 flex items-center justify-center">
            <img className="rounded-full object-cover border-[var(--primary-blue)] border-8" src="https://www.usmagazine.com/wp-content/uploads/taylor-swift-kanye-west-2009-grammy-awards-c8bd8b6c-a623-4d1f-8976-1c11b9adab51.jpg?quality=78&strip=all" alt="" />
        </div>
        <div className="intro-infor w-2/4 max-w-xl leading-normal">
            <h2>Hi There!</h2>
            <h3 className="intro-title text-7xl uppercase font-bold">
                I'm
                <span className="text-[var(--primary-blue)]"> Front-End </span>
                <br />
                <span className="text-small">&</span>
                <span className="text-[var(--primary-blue)]">
                    BlockChain Developer </span>
            </h3>
            <p className="intro__decs">
                <i className="fas fa-quote-left"></i> Created
                front-end UI features and effects especially for blockchain websites
                using <strong>HTML5</strong>,
                <strong>SCSS</strong>,
                <strong>Javascript</strong>,
                <strong>ReactJS</strong>
                and
                <strong>
                    Web3
                </strong>
                <i className="fas fa-quote-right"></i>
            </p>
            
            <SocialList />

            <div className="flex">
                <PrimaryButton text="MORE ABOUT ME" type="contained"/>
                <PrimaryButton text="MY PORTFOLIO" type="outlined"/>
            </div>
        </div>
      </div>
      <div className="intro-model flex flex-col items-center justify-center">
        3D Model right there
      </div>
    </div>
  )
}
