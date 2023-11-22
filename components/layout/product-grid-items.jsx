import { GridTileImage } from 'components/grid/tile';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductGridItems({ products }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Agregar el campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px', borderRadius: '5px' }}
      />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }} className='flex wrap justify-center gap-6'>
        {filteredProducts.map((product) => (
          <div key={product.id} className="animate-fadeIn w-[22.5rem] h-[25rem]">
            <Link className="relative inline-block h-full w-full" href={`/product/${product.id}`}>
              <GridTileImage
                alt={product.name}
                label={{
                  title: product.name,
                  amount: product.price,
                  currencyCode: "BS"
                }}
                src={product.featuredImage?.url}
                available={product.enabled}
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
