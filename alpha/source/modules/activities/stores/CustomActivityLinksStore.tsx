// Module ID: 15016
// Function ID: 15017
// Name: CustomActivityLinksStore
// Dependencies: [15017, 504, 572, 2]

// Module 15016 (CustomActivityLinksStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import CustomActivityLinkRecord from "CustomActivityLinkRecord" /* 15017 */;
import size from "module_2" /* 2 */;

let closure_1;

const Store = get_initializedDefault.Store;
class CustomActivityLinksStore extends Store {
  getOne(id, linkId) {
    if (null != closure_1[id]) {
      return closure_1[id][linkId];
    }
  }
}
const prototype = CustomActivityLinksStore.prototype;
CustomActivityLinksStore.displayName = "CustomActivityLinksStore";
const obj = {
  CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let applicationId;
    let link;
    ({ applicationId, link } = arg0);
    if (null == closure_1[applicationId]) {
      const _Object = Object;
      closure_1[applicationId] = Object.create(null);
    }
    const link_id = link.link_id;
    const tmp3 = closure_1[applicationId];
    tmp3[link_id] = new CustomActivityLinkRecord(link);
    new CustomActivityLinkRecord(link);
  },
  LOGOUT: function handleLogout() {
    closure_1 = {};
  }
};
const customActivityLinksStore = new CustomActivityLinksStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/activities/stores/CustomActivityLinksStore.tsx");

export default customActivityLinksStore;
