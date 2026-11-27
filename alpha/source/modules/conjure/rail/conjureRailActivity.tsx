// Module ID: 14301
// Function ID: 14302
// Name: conjureRailActivity
// Dependencies: [32, 19, 1231, 6932, 7659, 6934, 7706, 7670, 7669, 504, 2]
// Exports: useConjureRailTabActivity

// Module 14301 (conjureRailActivity)
import conjureProjectMute from "conjureProjectMute" /* 7670 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReadStateStore from "ReadStateStore" /* 6932 */;
import ConjureChatStore from "ConjureChatStore" /* 7659 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7706 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function readConjureRailActivity(id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let tmp = null;
  const obj = ConjureProjectStore;
  if (!ConjureProjectStore.isProjectDeleting(id)) {
    tmp = null;
    const obj2 = conjureProjectMute;
    const tmp2 = require;
    if (!obj2.isConjureProjectMuted(UserSettingsProtoStore.settings, id)) {
      let str2 = "working";
      const obj3 = ConjureChatStore;
      if (!ConjureChatStore.isThinking(id)) {
        str2 = "working";
        if (!obj.isProjectRunning(id)) {
          const publishStatus = ConjurePublishStatusStore.getPublishStatus(id);
          let publishing;
          if (publishStatus != null) {
            publishing = publishStatus.publishing;
          }
          str2 = "working";
          if (true !== publishing) {
            let str3 = "unread";
            const tmp2Result = tmp2(7669);
            if (!tmp2Result.isConjureProjectUnread(id)) {
              let str4 = null;
              if (flag) {
                str4 = null;
                if (null != obj3.getFinishedAt(id)) {
                  str4 = "working";
                }
              }
              str3 = str4;
            }
            str2 = str3;
          }
        }
      }
      tmp = str2;
    }
  }
  return tmp;
}
let items = [ConjureProjectStore, ConjureChatStore, ConjurePublishStatusStore, ReadStateStore, UserSettingsProtoStore];
const result = size.fileFinishedImporting("modules/conjure/rail/conjureRailActivity.tsx");

export const CONJURE_RAIL_ACTIVITY_STORES = items;
export { readConjureRailActivity };
export function useConjureRailTabActivity(arg0) {
  let closure_0;
  let first;
  let tmp3;
  _require = arg0;
  [first, tmp3] = react.useState(false);
  items = [arg0, first];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => readConjureRailActivity(closure_0, first), items);
  if (first !== "working" === stateFromStores) {
    tmp3("working" === stateFromStores);
  }
  return stateFromStores;
}
