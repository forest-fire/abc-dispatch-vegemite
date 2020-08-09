import { AbcStorePlugin, StorePlugin } from "@forest-fire/abc";
import vegemite from "vegemite";

export const plugin: AbcStorePlugin = () => {
  // state, on, off, subscribe, unsubscribe, dispatch
  return new (class VegemitePlugin extends StorePlugin {})();
};
