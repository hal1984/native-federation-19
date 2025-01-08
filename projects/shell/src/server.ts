import { initNodeFederation } from '@softarc/native-federation-node';

console.log('Starting SSR for Shell');

(async () => {

  await initNodeFederation({
    remotesOrManifestUrl: './dist/shell/browser/federation.manifest.json',
    relBundlePath: './dist/shell/browser/',
  });

  await import('./bootstrap-server');

})();
