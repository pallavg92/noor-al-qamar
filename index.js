
import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Noor Al Qamar Petrochemicals</h1>
        <p className="text-lg mb-6">Empowering Global Petrochemical Trade with Trust and Efficiency</p>
        <div className="space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded">Explore Products</button>
          <button className="border px-4 py-2 rounded">Contact Us</button>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="mb-4">
          Noor Al Qamar is a global petrochemical trading and logistics company headquartered in Dubai, UAE.
          We specialize in sourcing and transporting petrochemical products like Base Oil, Bitumen, Paraffin Wax,
          and more. With real-time tracking and a secure, efficient supply chain, we serve government, B2B, and
          financial sector clients worldwide.
        </p>
        <p>
          Our core values—Trust, Positivity, Security, and Safety—define every part of our business. Whether
          it’s providing consistent quality, ensuring safe transport, or maintaining regulatory compliance,
          Noor Al Qamar delivers professionalism and peace of mind.
        </p>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">Our Products</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Base Oil", "Bitumen", "Paraffin Wax", "Rubber Processing Oil", "Slack Wax", "Caustic Soda", "Petroleum Jelly", "White Spirit"].map(product => (
            <div key={product} className="text-center p-4 border rounded">
              <div className="mb-2">
                <Image 
                  src="https://via.placeholder.com/150" 
                  alt={product} 
                  width={150} 
                  height={150} 
                  className="mx-auto rounded" 
                />
              </div>
              <h3 className="font-semibold text-lg">{product}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Logistics</h2>
        <p className="mb-4">
          With live tracking and a global logistics network, Noor Al Qamar ensures timely, secure, and efficient
          delivery of petrochemical products across the world.
        </p>
        <p>
          From origin to destination, we offer complete visibility, so you can rest assured your shipment is
          in safe hands.
        </p>
      </section>

      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <p className="mb-2">Email: info@nooralqamar.com</p>
        <p className="mb-2">Phone: +971-XXX-XXXXXX</p>
        <p>Dubai, United Arab Emirates</p>
      </section>
    </main>
  );
}
