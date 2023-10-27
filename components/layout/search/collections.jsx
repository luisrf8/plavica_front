import clsx from 'clsx';
import { Suspense } from 'react';
import FilterList from './filter';

// Simulación de datos de colecciones
const simulatedCollections = [
  { id: 'collection1', title: 'Vidrio Laminado' },
  { id: 'collection2', title: 'Vidrio Templado' },
  { id: 'collection3', title: 'Vidrio Insulado' },
  { id: 'collection4', title: 'Vidrio Antirreflectante' },
  { id: 'collection5', title: 'Extras' },
  { id: 'collection6', title: 'Electrodomesticos' },
  // Agrega más colecciones simuladas si es necesario
];

// Componente para simular la lista de colecciones
function CollectionList() {
  return <FilterList list={simulatedCollections} title="Lineas de Venta"/>;
}

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded';
const activeAndTitles = 'bg-neutral-800 ';
const items = 'bg-neutral-400 ';

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
