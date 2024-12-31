import { initNodeFederation } from '@softarc/native-federation-node';

(async () => {

  await initNodeFederation({
    relBundlePath: './dist/mfe1/browser/',
  });

  await import('./bootstrap-server');

})();
