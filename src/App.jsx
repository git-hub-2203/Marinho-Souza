import React, { useEffect, useState } from "react";
import Areas from "./componentes/Areas";
import Contato from "./componentes/Contato";
import Escritorio from "./componentes/Escritorio";
import Footer from "./componentes/Footer";
import Hero from "./componentes/Hero";
import Navbar from "./componentes/Navbar";
import Testimonials from "./componentes/Testimonials";
import WhatsappFloat from "./componentes/WhatsappFloat";
import { mapLocations } from "./componentes/data";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(mapLocations[0]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Areas />
        <Escritorio />
      </main>
      <Testimonials />
      <Contato selectedLocation={selectedLocation} onSelectLocation={setSelectedLocation} />
      <Footer />
      <WhatsappFloat />
    </>
  );
}

export default App;
