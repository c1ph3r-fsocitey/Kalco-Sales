import { Suspense, lazy } from 'react';
import './SplineScene.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function SplineScene({ scene, className }) {
  return (
    <Suspense
      fallback={
        <div className="spline-fallback" aria-hidden="true">
          <span className="spline-loader" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
