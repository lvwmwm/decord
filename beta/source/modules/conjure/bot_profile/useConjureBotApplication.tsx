// Module ID: 15672
// Function ID: 15673
// Name: useConjureBotApplication
// Dependencies: [2165, 7053, 504, 7055, 2]
// Exports: default

// Module 15672 (useConjureBotApplication)
import ApplicationStore from "ApplicationStore" /* 2165 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/bot_profile/useConjureBotApplication.tsx");

export default function useConjureBotApplication(autoTrackExposure, DMAppChannel) {
  let hasConjureGuild;
  _require = autoTrackExposure;
  const obj = require("ConjureGuildExperiment");
  const obj2 = { autoTrackExposure: autoTrackExposure.bot };
  hasConjureGuild = obj.useHasConjureGuild(DMAppChannel, obj2);
  const items = [ApplicationStore];
  const items1 = [hasConjureGuild, , ];
  ({ bot: arr2[1], id: arr2[2] } = autoTrackExposure);
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let tmp = null;
    if (hasConjureGuild) {
      tmp = null;
      if (autoTrackExposure.bot) {
        let id = ApplicationStore.getAppIdForBotUserId(tmp2.id);
        if (id == null) {
          id = tmp2.id;
        }
        tmp = id;
      }
    }
    return tmp;
  }, items1);
  const obj4 = require("ApplicationActionCreators");
  const data = obj4.useApplication(stateFromStores).data;
  let conjureProjectId;
  if (data != null) {
    conjureProjectId = data.conjureProjectId;
  }
  let tmp4 = null;
  if (null != conjureProjectId) {
    tmp4 = data;
  }
  return tmp4;
};
