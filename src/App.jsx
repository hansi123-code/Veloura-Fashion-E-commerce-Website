import { useState } from "react";
import "./App.css";


const categoryProducts = {
  Dresses: [
    { name: "Elegant Dress", price: "Rs. 4,500", image: "/images/Elegant Dress.jfif" },
    { name: "Classic Midi Dress", price: "Rs. 5,200", image: "/images/Classic Midi Dress.jfif" },
    { name: "Floral Summer Dress", price: "Rs. 3,800", image: "/images/Floral Summer Dress.jfif" },
    { name: "Evening Dress", price: "Rs. 4,900", image: "/images/Evening Dress.jfif" },
  ],
  Tops: [
    { name: "Everyday Top", price: "Rs. 2,500", image: "/images/Everyday Top.jfif" },
    { name: "Classic Blouse", price: "Rs. 2,900", image: "/images/Classic Blouse.jfif" },
    { name: "Casual Top", price: "Rs. 1,800", image: "/images/Casual Top.jfif" },
    { name: "Modern Shirt", price: "Rs. 3,200", image: "/images/Modern Shirt.jfif" },
  ],
  Shoes: [
    { name: "Classic Heels", price: "Rs. 4,500", image: "/images/Classic Heels.jfif" },
    { name: "Everyday Flats", price: "Rs. 3,200", image: "/images/Everyday Flats.jfif" },
    { name: "Modern Sneakers", price: "Rs. 5,500", image: "/images/Modern Sneakers.jfif" },
    { name: "Elegant Sandals", price: "Rs. 2,800", image: "/images/Elegant Sandals.jfif" },
  ],
  Accessories: [
    { name: "Classic Handbag", price: "Rs. 3,500", image: "/images/Classic Handbag.jfif" },
    { name: "Elegant Earrings", price: "Rs. 1,200", image: "/images/Elegant Earrings.jfif" },
    { name: "Minimal Necklace", price: "Rs. 1,500", image: "/images/Minimal Necklace.jfif" },
    { name: "Everyday Tote", price: "Rs. 2,900", image: "/images/Everyday Tote.jfif" },
  ],
};


function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  
  return (
    <div className="page-background">
      <main className="store-container">
        {/* NAVBAR */}
        <header className="navbar">
          <a href="#home" className="logo">
            veloura<span>.</span>
          </a>

          <nav className="nav-links">
  <a href="#home" className="active-link">Home</a>
  <a href="#categories">Collections</a>
  <a href="#new-arrivals">New Arrivals</a>
  <a href="#about">About Us</a>
</nav>
          <div className="nav-actions">
            <a href="#cart" className="cart-link">
              Bag <span className="cart-count">0</span>
            </a>

            <a href="#categories" className="nav-explore">
  Explore
</a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              THE NEW SEASON EDIT
            </div>

            <h1>
              Style that
              <br />
              speaks <span>you.</span>
            </h1>

            <p className="hero-description">
              Discover thoughtfully curated fashion that
              celebrates your individuality. Timeless pieces,
              modern silhouettes, and a style that is uniquely yours.
            </p>

            <div className="hero-buttons">
             <a href="#categories" className="hero-btn">
  Explore
</a>

              <a href="#about" className="secondary-btn">
                Discover Our Story <span>→</span>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <h2>250<span>+</span></h2>
                <p>Curated Pieces</p>
              </div>

              <div className="stat-item">
                <h2>98<span>%</span></h2>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>

          {/* FASHION MODEL IMAGE */}
          <div className="hero-image">
            <div className="image-glow"></div>

            <img
              src="/images/fashion-model.png"
              alt="Veloura fashion model"
              className="fashion-model"
            />

            <div className="floating-card">
              <span className="floating-star">✳</span>
              <div>
                <strong>THE EDIT — 2026</strong>
                <p>Elegance in every detail</p>
              </div>
            </div>

            <div className="image-label">
              V E L O U R A <span>•</span> STUDIO
            </div>
          </div>
        </section>

        
{/* New Arrivals Section */}
<section className="new-arrivals" id="new-arrivals">
  <div className="section-heading">
    <div>
      <span className="section-eyebrow">CURATED FOR YOU</span>
      <h2>New <span>Arrivals.</span></h2>
      <p>Fresh styles. New moods. Your next favourite piece.</p>
    </div>

    <a href="#all-products" className="view-all">
      View All <span>↗</span>
    </a>
  </div>

  <div className="product-grid">
    <article className="product-card">
      <div className="product-image">
        <img src="/images/product1.jfif" alt="Elegant everyday outfit" />
        <span className="product-tag">NEW</span>
        <button className="quick-add">+ Quick View</button>
      </div>
      <div className="product-info">
        <div>
          <h3>Everyday Elegance</h3>
          <p>Minimal Collection</p>
        </div>
        <span className="product-price">Rs. 4,500</span>
      </div>
    </article>

    <article className="product-card">
      <div className="product-image">
        <img src="/images/product2.png" alt="Chic modern outfit" />
        <span className="product-tag">TRENDING</span>
        <button className="quick-add">+ Quick View</button>
      </div>
      <div className="product-info">
        <div>
          <h3>Modern Muse</h3>
          <p>Signature Collection</p>
        </div>
        <span className="product-price">Rs. 5,200</span>
      </div>
    </article>

    <article className="product-card">
      <div className="product-image">
        <img src="/images/product3.jfif" alt="Classic timeless outfit" />
        <button className="quick-add">+ Quick View</button>
      </div>
      <div className="product-info">
        <div>
          <h3>Timeless Classic</h3>
          <p>Essential Collection</p>
        </div>
        <span className="product-price">Rs. 3,800</span>
      </div>
    </article>

    <article className="product-card">
      <div className="product-image">
        <img src="/images/product4.jfif" alt="Contemporary fashion outfit" />
        <span className="product-tag">NEW</span>
        <button className="quick-add">+ Quick View</button>
      </div>
      <div className="product-info">
        <div>
          <h3>Soft Sophistication</h3>
          <p>New Season Collection</p>
        </div>
        <span className="product-price">Rs. 4,900</span>
      </div>
    </article>
  </div>
</section>


{/* Shop by Category */}
<section className="categories-section" id="categories">
  <div className="category-heading">
    <span className="section-eyebrow">FIND YOUR STYLE</span>
    <h2>Shop by <span>Category.</span></h2>
    <p>Explore pieces made for every version of you.</p>
  </div>

  <div className="category-grid">
   <button
  className="category-card"
  onClick={() => setSelectedCategory("Dresses")}
>
      <img src="/images/dresses.jfif" alt="Dresses collection" />
      <div className="category-overlay">
        
        <h3>Dresses</h3>
        <p>Explore Collection ↗</p>
      </div>
    </button>

   <button
  className="category-card"
  onClick={() => setSelectedCategory("Tops")}
>
      <img src="/images/tops.jfif" alt="Tops collection" />
      <div className="category-overlay">
       
        <h3>Tops</h3>
        <p>Explore Collection ↗</p>
      </div>
    </button>

    <button
  className="category-card"
  onClick={() => setSelectedCategory("Shoes")}
>
      <img src="/images/shoes.jfif" alt="Shoes collection" />
      <div className="category-overlay">
        
        <h3>Shoes</h3>
        <p>Explore Collection ↗</p>
      </div>
    </button>

    <button
  className="category-card"
  onClick={() => setSelectedCategory("Accessories")}
>
      <img src="/images/accessories.jfif" alt="Accessories collection" />
      <div className="category-overlay">
     
        <h3>Accessories</h3>
        <p>Explore Collection ↗</p>
      </div>
    </button>
  </div>
</section>


{selectedCategory && (
  <section className="new-arrivals" id="all-products">
    <div className="section-heading">
      <div>
        <span className="section-eyebrow">EXPLORE OUR COLLECTION</span>
        <h2>{selectedCategory} <span>Collection.</span></h2>
        <p>Discover your next favourite piece.</p>
      </div>

      <button
  className="back-category-btn"
  onClick={() => setSelectedCategory(null)}
>
  ← Back to Categories
</button>
    </div>

    <div className="product-grid">
      {categoryProducts[selectedCategory].map((product, index) => (
        <article className="product-card" key={`${selectedCategory}-${index}`}>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
            <span className="product-tag">COLLECTION</span>
          </div>

          <div className="product-info">
            <div>
              <h3>{product.name}</h3>
              <p>{selectedCategory}</p>
            </div>
            <span className="product-price">{product.price}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
)}


{/* Promotional Banner */}
<section className="promo-section">
  <div className="promo-content">
    <span className="section-eyebrow">A LITTLE SOMETHING SPECIAL</span>
    <h2>Good style.<br /><span>Even better prices.</span></h2>
    <p>
      Discover your next favourite look with 15% off
      your first order.
    </p>
    <a href="#new-arrivals" className="promo-button">
      Discover the Edit <span>↗</span>
    </a>
    <small>USE CODE: <strong>VELOURA15</strong></small>
  </div>

  
<div className="promo-decoration">
  <div className="promo-circle">
    <img
      src="/images/promo-photo.jpg"
      alt="Veloura fashion collection"
      className="promo-image"
    />
  </div>

  <div className="promo-note">
    <span>YOUR FIRST ORDER</span>
    <strong>15% OFF</strong>
    <span>JUST FOR YOU ✳</span>
  </div>
</div>

</section>


{/* Newsletter */}
<section className="newsletter-section">
  <span className="section-eyebrow">STAY IN THE LOOP</span>
  <h2>A little note from <span>Veloura.</span></h2>
  <p>New arrivals, style inspiration and special offers — straight to your inbox.</p>

  <form
    className="newsletter-form"
    onSubmit={(e) => {
      e.preventDefault();
      alert("Thank you for subscribing to Veloura!");
      e.currentTarget.reset();
    }}
  >
    <input
      type="email"
      placeholder="Enter your email address"
      aria-label="Email address"
      required
    />
    <button type="submit">Subscribe ↗</button>
  </form>

  <small>By subscribing, you agree to receive updates from Veloura.</small>
</section>

{/* Footer */}
<footer className="site-footer" id="about">
  <div className="footer-main">
    <div className="footer-brand">
      <a href="#home" className="logo">veloura<span>.</span></a>
      <p>Style that speaks you.<br />Thoughtfully curated, always.</p>
    </div>

    <div className="footer-column">
      <h3>EXPLORE</h3>
      <a href="#home">Home</a>
      <a href="#new-arrivals">New Arrivals</a>
      <a href="#categories">Categories</a>
    </div>

    <div className="footer-column">
      <h3>HELP</h3>
      <a href="#contact">Contact Us</a>
      <a href="#shipping">Shipping & Returns</a>
      <a href="#faq">FAQs</a>
    </div>

    <div className="footer-column">
      <h3>FOLLOW US</h3>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook ↗</a>
      <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest ↗</a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 Veloura. All rights reserved.</p>
    <p>Designed with care ✳</p>
  </div>
</footer>


      </main>
    </div>
  );
}

export default App;
