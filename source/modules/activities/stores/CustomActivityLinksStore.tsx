// Module ID: 12873
// Function ID: 12874
// Name: getOne
// Dependencies: [12874, 586, 706, 2]

// Module 12873 (getOne)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_0 from "getAssetURL" /* 12874 */;

let closure_1 = {};
const Store = initializeDefault.Store;
class CustomActivityLinksStore extends Store {
}
CustomActivityLinksStore.prototype["getOne"] = function getOne(id, linkId) {
  if (null != dependencyMap[id]) {
    return dependencyMap[id][linkId];
  }
};
CustomActivityLinksStore.displayName = "CustomActivityLinksStore";
const customActivityLinksStore = new CustomActivityLinksStore(dispatcherDefault, {
  CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ applicationId, link } = arg0);
    if (null == dependencyMap[applicationId]) {
      const _Object = Object;
      dependencyMap[applicationId] = Object.create(null);
    }
    dependencyMap[applicationId][link.link_id] = new closure_0(link);
  },
  LOGOUT: function handleLogout() {
    closure_1 = {};
  }
});
const result = require("set").fileFinishedImporting("modules/activities/stores/CustomActivityLinksStore.tsx");

export default customActivityLinksStore;
