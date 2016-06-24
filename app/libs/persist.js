import makeFinalStore from 'alt-utils/lib/makeFinalStore';

export default function (alt, storage, storeName) {
  // Final store listens to all existing stores for changes
  const finalStore = makeFinalStore(alt);
  // this line possibly decorates or creates a finalStore instance on the
  // alt instance -- used on line 16 -- will listen for changes to state

  try {
    // bootstrap is a method of the alt object
    // this fetches the stored final store in localStorage
    alt.bootstrap(storage.get(storeName));
  } catch(e) {
    console.error('Failed to bootstrap', e);
  }

  finalStore.listen(() => {
    if (!storage.get('debug')) {
      storage.set(storeName, alt.takeSnapshot());
    }
  });
}
