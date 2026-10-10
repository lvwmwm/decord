// Module ID: 7278
// Function ID: 7279
// Name: CollectiblesMarketingsStore
// Dependencies: [504, 584, 2]

// Module 7278 (CollectiblesMarketingsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_2;

const FetchState = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
const obj2 = { marketingsBySurfaces: null, fetchedAt: null };
const React2 = {};
let NOT_FETCHED = FetchState.NOT_FETCHED;
let closure_4 = obj2;
const PersistedStore = get_initializedDefault.PersistedStore;
class CollectiblesMarketingsStore extends PersistedStore {
  initialize(marketingsBySurfaces) {
    let fetchedAt;
    marketingsBySurfaces = undefined;
    if (marketingsBySurfaces != null) {
      marketingsBySurfaces = marketingsBySurfaces.marketingsBySurfaces;
    }
    if (marketingsBySurfaces == null) {
      marketingsBySurfaces = null;
    }
    const obj = { marketingsBySurfaces, fetchedAt };
    fetchedAt = undefined;
    if (marketingsBySurfaces != null) {
      fetchedAt = marketingsBySurfaces.fetchedAt;
    }
    if (fetchedAt == null) {
      fetchedAt = null;
    }
    closure_4 = obj;
  }
  getState() {
    return closure_4;
  }
  getMarketingBySurface(MOBILE_SHOP_BUTTON) {
    return closure_2[MOBILE_SHOP_BUTTON];
  }
  getCachedMarketingsBySurfaces(ttlMs) {
    let fetchedAt;
    let marketingsBySurfaces;
    ({ marketingsBySurfaces, fetchedAt } = closure_4);
    if (null != marketingsBySurfaces) {
      if (null != fetchedAt) {
        const _Date = Date;
        const diff = Date.now() - fetchedAt;
        let tmp3 = null;
        if (diff >= 0) {
          tmp3 = null;
          if (diff < ttlMs) {
            tmp3 = marketingsBySurfaces;
          }
        }
        return tmp3;
      }
    }
    return null;
  }
}
Object.defineProperty(CollectiblesMarketingsStore.prototype, "fetchState", {
  get: function fetchState() {
    return NOT_FETCHED;
  },
  set: undefined
});
CollectiblesMarketingsStore.displayName = "CollectiblesMarketingsStore";
CollectiblesMarketingsStore.persistKey = "CollectiblesMarketingsStore";
const obj3 = {
  COLLECTIBLES_MARKETING_FETCH: function handleFetchMarketing() {
    NOT_FETCHED = obj.FETCHING;
  },
  COLLECTIBLES_MARKETING_FETCH_SUCCESS: function handleFetchMarketingSuccess(marketings) {
    let obj;
    const marketingsBySurfaces = marketings.marketings.marketingsBySurfaces;
    NOT_FETCHED = obj.FETCHED;
    obj = { marketingsBySurfaces: marketings.marketings.marketingsBySurfaces, fetchedAt: Date.now() };
    closure_4 = obj;
  },
  COLLECTIBLES_MARKETING_CACHE_RESTORED: function handleCacheRestored(marketings) {
    const marketingsBySurfaces = marketings.marketings.marketingsBySurfaces;
    NOT_FETCHED = obj.FETCHED;
  },
  LOGOUT: function reset() {
    closure_2 = {};
    NOT_FETCHED = obj.NOT_FETCHED;
    closure_4 = obj2;
  }
};
const collectiblesMarketingsStore = new CollectiblesMarketingsStore(DispatcherDefault, obj3);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesMarketingsStore.tsx");

export default collectiblesMarketingsStore;
export { FetchState };
