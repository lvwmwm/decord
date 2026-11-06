// Module ID: 13212
// Function ID: 13213
// Name: conjureRailActivity
// Dependencies: [32, 19, 1231, 6922, 10987, 6924, 11003, 11015, 11014, 504, 2]
// Exports: useConjureRailTabActivity

// Module 13212 (conjureRailActivity)
import ConjureProjectStore2 from "ConjureProjectStore" /* 6924 */;
import conjureProjectMute from "conjureProjectMute" /* 11015 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReadStateStore from "ReadStateStore" /* 6922 */;
import ConjureChatStore from "ConjureChatStore" /* 10987 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11003 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require;

function readConjureRailActivity(id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let tmp = null;
  if (!ConjureProjectStore.isProjectDeleting(id)) {
    tmp = null;
    const obj2 = conjureProjectMute;
    const tmp2 = require;
    if (!obj2.isConjureProjectMuted(UserSettingsProtoStore.settings, id)) {
      let str2 = "working";
      const obj3 = ConjureChatStore;
      if (!ConjureChatStore.isThinking(id)) {
        str2 = "working";
        if (!ConjureProjectStore.isProjectRunning(id)) {
          const publishStatus = ConjurePublishStatusStore.getPublishStatus(id);
          let publishing;
          if (publishStatus != null) {
            publishing = publishStatus.publishing;
          }
          str2 = "working";
          if (true !== publishing) {
            let str4 = "unread";
            const tmp2Result = tmp2(11014);
            if (!tmp2Result.isConjureProjectUnread(id)) {
              const project = obj.getProject(id);
              let install_scope_setup;
              if (project != null) {
                install_scope_setup = project.install_scope_setup;
              }
              str4 = "unread";
              const tmp10 = null != install_scope_setup && isProjectOwner(project);
              if (!tmp10) {
                let str5 = null;
                if (flag) {
                  str5 = null;
                  if (null != obj3.getFinishedAt(id)) {
                    str5 = "working";
                  }
                }
                str4 = str5;
              }
            }
            str2 = str4;
          }
        }
      }
      tmp = str2;
    }
  }
  return tmp;
}
const isProjectOwner = ConjureProjectStore2.isProjectOwner;
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
