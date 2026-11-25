// Module ID: 14410
// Function ID: 14411
// Name: CollectiblesRecommendationStore
// Dependencies: [1088, 559, 504, 572, 2]

// Module 14410 (CollectiblesRecommendationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1088 */;
import size from "module_2" /* 2 */;

const DAY = DurationsDefault.Millis.DAY;
const MINUTE = DurationsDefault.Millis.MINUTE;
let c1 = null;
let c2 = null;
let c3 = null;
let c4 = false;
let closure_5 = new BackoffDefault(MINUTE, DurationsDefault.Millis.HOUR);
const tmp2 = new BackoffDefault(MINUTE, DurationsDefault.Millis.HOUR);
const Store = get_initializedDefault.Store;
class CollectiblesRecommendationStore extends Store {
  getRecommendations() {
    return c1;
  }
  shouldFetch() {
    let tmp = c4;
    if (!tmp) {
      let tmp4 = null != c3;
      if (tmp4) {
        const _Date = Date;
        tmp4 = Date.now() < c3;
      }
      tmp = tmp4;
    }
    let tmp7 = !tmp;
    if (tmp7) {
      let tmp10 = null == c2;
      if (!tmp10) {
        const _Date2 = Date;
        tmp10 = Date.now() - c2 >= DAY;
      }
      tmp7 = tmp10;
    }
    return tmp7;
  }
}
const prototype = CollectiblesRecommendationStore.prototype;
CollectiblesRecommendationStore.displayName = "CollectiblesRecommendationStore";
const obj = {
  COLLECTIBLES_RECOMMENDATIONS_FETCH_START: function handleFetchStart() {
    c1 = null;
    c2 = null;
    c4 = true;
  },
  COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS: function handleFetchSuccess(recommendation) {
    recommendation = recommendation.recommendation;
    c2 = Date.now();
    c3 = null;
    c4 = false;
    closure_5.succeed();
  },
  COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE: function handleFetchFailure() {
    const timestamp = Date.now();
    c3 = timestamp + closure_5.fail();
    c4 = false;
  },
  LOGOUT: function handleLogout() {
    c1 = null;
    c2 = null;
    c3 = null;
    c4 = false;
    closure_5.succeed();
  }
};
const collectiblesRecommendationStore = new CollectiblesRecommendationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesRecommendationStore.tsx");

export default collectiblesRecommendationStore;
