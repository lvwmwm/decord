// Module ID: 7533
// Function ID: 7534
// Name: ConjureServerProjectRouteStore
// Dependencies: [6982, 4999, 504, 7534, 572, 2]

// Module 7533 (ConjureServerProjectRouteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelConstants from "ChannelConstants" /* 4999 */;
import conjureServerProject from "conjureServerProject" /* 7534 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6982 */;
import size from "module_2" /* 2 */;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let map = new Map();
const Store = get_initializedDefault.Store;
class ConjureServerProjectRouteStore extends Store {
  initialize() {
    this.waitFor(ConjureProjectStore);
  }
  getReturnProjectId(id) {
    const value = map.get(id);
    let tmp2 = null;
    if (null != value) {
      let tmp6 = null;
      const obj = conjureServerProject;
      if (obj.conjureServerProjectGuildId(ConjureProjectStore.getProject(value)) === id) {
        tmp6 = value;
      }
      tmp2 = tmp6;
    }
    return tmp2;
  }
}
const prototype = ConjureServerProjectRouteStore.prototype;
ConjureServerProjectRouteStore.displayName = "ConjureServerProjectRouteStore";
let obj = {
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let guildId;
    let messageId;
    ({ guildId, messageId } = arg0);
    let tmp2 = null != guildId;
    if (tmp2) {
      if (tmp === StaticChannelRoute.CONJURE_PROJECT) {
        let deleteResult;
        if (null != messageId) {
          let flag = map.get(guildId) !== messageId;
          if (flag) {
            const result = map.set(guildId, messageId);
            flag = true;
          }
          deleteResult = flag;
        }
        tmp2 = deleteResult;
      }
      deleteResult = map.delete(guildId);
    }
    return tmp2;
  },
  LOGOUT: function handleLogout() {
    map = new Map();
  }
};
const conjureServerProjectRouteStore = new ConjureServerProjectRouteStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/server_workspace/ConjureServerProjectRouteStore.tsx");

export default conjureServerProjectRouteStore;
