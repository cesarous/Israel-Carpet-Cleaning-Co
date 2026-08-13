import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBroom, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';

import App from './App';

// Only the icons referenced by name as strings need registering here - the
// rest are imported directly where they are used. Registering the whole fab,
// fas and far packs pulled several thousand unused icons into the bundle.
library.add(faLinkedinIn, faBroom, faSprayCanSparkles);

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
