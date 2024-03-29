import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export default function Layout({ children }) {
  return (
      <Suspense>
        <div className="w-full">
          <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
            <Suspense>{children}</Suspense>
            hola
          </div>
        </div>
        <Footer />
      </Suspense>
  );
}
