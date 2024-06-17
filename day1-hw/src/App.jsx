import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import './hwStyles.css'
import ImageOne from './components/ImageOne'
import ImageTwo from './components/ImageTwo'
import ImageThree from './components/ImageThree'




function App() {
    
  return (
    <div class='App'>
      <Header />
      <About />
      <Contact />
      <section>
        <div class='gallery logos hidden'>
          <ImageOne />
          <ImageTwo />
          <ImageThree />
        </div>
      </section>
    </div>
  );
}

export default App

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }

  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
