import '../css/main.scss';
import '../css/arsha-theme.scss';
import lax from 'lax.js';
import 'boxicons';

function loadLax() {
  lax.init();

  lax.addDriver('scrollY', () => window.scrollY);

  lax.addElements('#header', {}, {
    onUpdate(driverValues, domElement) {
      const element = domElement;
      const scrollY = driverValues.scrollY[0];

      if (scrollY > 300) {
        element.classList.add('header-scrolled');
      } else {
        element.classList.remove('header-scrolled');
      }
    },
  });
}

window.onload = () => {
  loadLax();
};
