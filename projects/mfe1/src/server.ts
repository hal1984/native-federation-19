import { initNodeFederation } from '@softarc/native-federation-node';

(async () => {

  await initNodeFederation({
    relBundlePath: './dist/shell/browser/',
  });

  await import('./bootstrap-server');

})();
