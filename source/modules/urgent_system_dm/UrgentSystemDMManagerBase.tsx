// Module ID: 16184
// Function ID: 125577
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 1348, 1906, 1849, 16185, 653, 7889, 5078, 2]

// Module 16184 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { SYSTEM_USER } from "SYSTEM_USER";
import { UserFlags } from "ME";
import tmp2 from "AutomaticLifecycleManager";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function maybeShowUrgentMessageModal(arg0) {
  const currentUser = authStore2.getCurrentUser();
  if (null != currentUser) {
    channelId = channelId.getChannelId();
    const dMFromUserId = authStore.getDMFromUserId(SYSTEM_USER);
    if (currentUser.hasUrgentMessages()) {
      if (dMFromUserId !== channelId) {
        if (!c12) {
          c12 = true;
          arg0();
        }
      }
    }
    const obj = { channelId };
    maybeClearUrgentMessage(obj);
  }
}
function maybeClearUrgentMessage(channelId) {
  const currentUser = authStore2.getCurrentUser();
  let hasUrgentMessagesResult = null != currentUser;
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = currentUser.hasUrgentMessages();
  }
  if (hasUrgentMessagesResult) {
    hasUrgentMessagesResult = tmp;
  }
  if (hasUrgentMessagesResult) {
    let c12 = false;
    importAll(7889).setFlag(UserFlags.HAS_UNREAD_URGENT_MESSAGES, false);
    const obj2 = importAll(7889);
  }
}
let c12 = false;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/urgent_system_dm/UrgentSystemDMManagerBase.tsx");

export default tmp2;
