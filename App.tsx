import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Heart,
  Instagram,
  Menu,
  MessageCircle,
  MoveUpRight,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  X,
} from 'lucide-react'

type ProductCategory = 'All' | 'Jewellery' | 'Accessories' | 'New in'

type Product = {
  id: number
  name: string
  category: Exclude<ProductCategory, 'All'>
  price: string
  image: string
  tag?: string
  description: string
}

const logoIcon = '/assets/images/TITLI_Master_Logo_Hot_Pink_Background_4K.png'
const logoPoster = '/assets/images/TITLI%20Butterfly%20Brand%20Poster.png'
const brandBoard = '/assets/images/TITLI%20Hot%20Pink%20Brand%20Identity%20Board.png'

const products: Product[] = [
  {
    id: 1,
    name: 'Petal Drop Earrings',
    category: 'Jewellery',
    price: '₹899',
    image: 'https://images.pexels.com/photos/12486665/pexels-photo-12486665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Bestseller',
    description: 'Pretty sculptural petals with a soft golden glow for everyday dressing up.',
  },
  {
    id: 2,
    name: 'Pearl Bow Drops',
    category: 'New in',
    price: '₹799',
    image: 'https://images.pexels.com/photos/3881129/pexels-photo-3881129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Just in',
    description: 'A romantic pair finished with luminous pearls and a delicate ribbon silhouette.',
  },
  {
    id: 3,
    name: 'Golden Hour Chain',
    category: 'Jewellery',
    price: '₹1,299',
    image: 'https://images.pexels.com/photos/29502931/pexels-photo-29502931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Anti-tarnish',
    description: 'A fine everyday chain designed to layer beautifully or shine on its own.',
  },
  {
    id: 4,
    name: 'Blush Bloom Clip',
    category: 'Accessories',
    price: '₹549',
    image: 'https://images.pexels.com/photos/16963454/pexels-photo-16963454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Limited',
    description: 'A soft statement accent for hair-up days, gift boxes and little mood lifts.',
  },
  {
    id: 5,
    name: 'Pink Light Hoops',
    category: 'New in',
    price: '₹699',
    image: 'https://images.pexels.com/photos/29502932/pexels-photo-29502932.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'New in',
    description: 'Lightweight golden hoops with a polished finish and a playful pink attitude.',
  },
  {
    id: 6,
    name: 'The Pretty Edit',
    category: 'Accessories',
    price: '₹999',
    image: 'https://images.pexels.com/photos/29765799/pexels-photo-29765799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Giftable',
    description: 'A feel-good edit of little details made for thoughtful gifting and self-gifting.',
  },
]

const categories: ProductCategory[] = ['All', 'New in', 'Jewellery', 'Accessories']

function App() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const filteredProducts = useMemo(
    () => activeCategory === 'All' ? products : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  )

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const orderLink = (productName?: string) => {
    const message = productName ? `Hi TITLI, I would like to order the ${productName}.` : 'Hi TITLI, I would love to shop your latest collection.'
    return `https://wa.me/?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="site-shell">
      <div className="announcement"><Sparkles size={15} /> Free shipping on orders above ₹1,499 <span>·</span> Pretty things, packed with love</div>

      <header className="site-header">
        <button className="mobile-menu-button" aria-label="Open navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <button className="brand-lockup" onClick={() => scrollTo('home')} aria-label="TITLI home">
          <img src={logoIcon} alt="TITLI butterfly" />
          <span><strong>TITLI</strong><small>A Little World of Pretty Things</small></span>
        </button>
        <nav className={isMenuOpen ? 'main-nav is-open' : 'main-nav'}>
          <button onClick={() => scrollTo('home')}>Home</button>
          <button onClick={() => { setActiveCategory('New in'); scrollTo('shop') }}>New Arrivals</button>
          <button onClick={() => { setActiveCategory('Accessories'); scrollTo('shop') }}>Accessories</button>
          <button onClick={() => { setActiveCategory('Jewellery'); scrollTo('shop') }}>Jewellery</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
        <div className="header-actions">
          <button aria-label="Search" className="icon-button" onClick={() => setIsSearchOpen(!isSearchOpen)}><Search size={19} /></button>
          <button aria-label="Shopping bag" className="icon-button bag-button" onClick={() => scrollTo('shop')}><ShoppingBag size={19} /><span>0</span></button>
          <button className="header-shop" onClick={() => scrollTo('shop')}>Shop now <ArrowRight size={16} /></button>
        </div>
      </header>
      {isSearchOpen && <div className="search-drawer"><Search size={18} /><input autoFocus placeholder="Search pretty things" /><button onClick={() => setIsSearchOpen(false)}><X size={18} /></button></div>}

      <main>
        <section className="hero" id="home">
          <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
          <div className="floating-butterfly butterfly-one">✦</div><div className="floating-butterfly butterfly-two">✦</div>
          <div className="hero-copy">
            <p className="eyebrow light"><span /> Korean accessories · trendy finds</p>
            <h1>Pretty things<br /><em>for pretty moments.</em></h1>
            <p className="hero-text">A little world of joyful jewellery, charming accessories and tiny treasures that make every day feel a little more you.</p>
            <div className="hero-buttons"><button className="button button-light" onClick={() => scrollTo('shop')}>Explore collection <ArrowRight size={17} /></button><button className="text-button light-text" onClick={() => scrollTo('about')}>Our story <MoveUpRight size={16} /></button></div>
            <div className="hero-note"><div className="avatar-stack"><span>J</span><span>A</span><span>M</span></div><span>Loved by 2,000+ pretty people</span><Star size={13} fill="currentColor" /></div>
          </div>
          <div className="hero-art"><div className="hero-art-frame"><img src={logoPoster} alt="TITLI official white logo on hot pink" /></div><div className="hero-sticker">new<br />in<span>✦</span></div></div>
        </section>

        <section className="marquee"><div>Jewellery <span>✦</span> Little luxuries <span>✦</span> Korean finds <span>✦</span> Made for gifting <span>✦</span> Jewellery <span>✦</span> Little luxuries <span>✦</span></div></section>

        <section className="shop-section section-pad" id="shop">
          <div className="section-heading"><div><p className="eyebrow"><span /> Curated with love</p><h2>Meet your new<br /><em>little obsessions.</em></h2></div><p className="section-intro">Small joys, beautifully made. Discover pieces that bring a little more sparkle to the everyday.</p></div>
          <div className="category-row">{categories.map((category) => <button key={category} className={activeCategory === category ? 'category-button active' : 'category-button'} onClick={() => setActiveCategory(category)}>{category}<span>{category === 'All' ? products.length : products.filter((product) => product.category === category).length}</span></button>)}</div>
          <div className="product-grid">{filteredProducts.map((product) => <article className="product-card" key={product.id} onClick={() => setSelectedProduct(product)}><div className="product-image"><img src={product.image} alt={product.name} /><span className="product-tag">{product.tag}</span><button className="heart-button" aria-label={`Save ${product.name}`} onClick={(event) => event.stopPropagation()}><Heart size={17} /></button><button className="quick-view">Quick view <ArrowRight size={14} /></button></div><div className="product-info"><div><p>{product.category}</p><h3>{product.name}</h3></div><strong>{product.price}</strong></div></article>)}</div>
          <div className="shop-more"><button className="button button-pink" onClick={() => window.open(orderLink(), '_blank', 'noopener,noreferrer')}>Shop via WhatsApp <MessageCircle size={17} /></button></div>
        </section>

        <section className="editorial section-pad" id="about"><div className="editorial-image"><img src={brandBoard} alt="TITLI brand identity board" /><span className="image-caption">the TITLI feeling<br /><em>colourful, always.</em></span></div><div className="editorial-copy"><p className="eyebrow"><span /> A little bit about us</p><h2>Wear the<br /><em>happy.</em></h2><p>We believe the smallest details can change the whole mood. TITLI is a curated world of Korean-inspired accessories and everyday jewellery, chosen to make getting ready feel like the best part of your day.</p><p>Every piece is a little invitation to play, express yourself and collect the things that make you smile.</p><button className="text-button" onClick={() => scrollTo('contact')}>Come say hello <ArrowRight size={16} /></button></div></section>

        <section className="quote-section"><div className="quote-mark">“</div><blockquote>The best accessories are the ones<br /><em>that feel like you.</em></blockquote><div className="quote-sparkle">✦</div></section>

        <section className="contact-section section-pad" id="contact"><div><p className="eyebrow"><span /> Stay in the pretty loop</p><h2>Good things<br /><em>are coming.</em></h2></div><div className="contact-card"><p>Get first dibs on new drops, styling notes and little surprises. No noise, just the good stuff.</p><div className="email-row"><input placeholder="Your email address" type="email" /><button aria-label="Subscribe"><ArrowRight size={18} /></button></div><small>By subscribing, you agree to receive lovely things from TITLI.</small></div></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src={logoIcon} alt="TITLI butterfly" /><div><strong>TITLI</strong><p>A Little World of Pretty Things</p></div></div><div className="footer-links"><div><b>Explore</b><button onClick={() => scrollTo('shop')}>Shop all</button><button onClick={() => { setActiveCategory('New in'); scrollTo('shop') }}>New arrivals</button><button onClick={() => scrollTo('about')}>Our story</button></div><div><b>Say hello</b><button onClick={() => scrollTo('contact')}>Contact us</button><a href={orderLink()} target="_blank" rel="noreferrer">WhatsApp us</a><a href="#home">Instagram</a></div></div><div className="footer-bottom"><span>© 2026 TITLI. Made with love.</span><span>Designed for the pretty little moments.</span><Instagram size={17} /></div></footer>

      {selectedProduct && <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}><div className="product-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProduct(null)} aria-label="Close product details"><X size={20} /></button><div className="modal-image"><img src={selectedProduct.image} alt={selectedProduct.name} /></div><div className="modal-copy"><p className="eyebrow"><span /> {selectedProduct.category}</p><h2>{selectedProduct.name}</h2><strong className="modal-price">{selectedProduct.price}</strong><p>{selectedProduct.description}</p><div className="modal-note"><Sparkles size={16} /> Anti-tarnish finish · Gift-ready packaging</div><button className="button button-pink" onClick={() => window.open(orderLink(selectedProduct.name), '_blank', 'noopener,noreferrer')}>Order on WhatsApp <MessageCircle size={17} /></button></div></div></div>}
    </div>
  )
}

export default App
