// Module ID: 8675
// Function ID: 8676
// Name: usePrivacyLevelHelpText
// Dependencies: [4750, 1085, 2071, 1096, 558, 576, 504, 4755, 1097, 1126, 2128, 2]

// Module 8675 (usePrivacyLevelHelpText)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2071 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2128 */;
import PermissionUtilsAll from "PermissionUtils" /* 4755 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const HelpdeskArticles = Constants.HelpdeskArticles;
const constants = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
const Permissions = Constants2.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStagePrivacyLevelSettings(channel, arg1, arg2) {
  let first;
  let stringResult;
  let tmp6;
  _require = channel;
  const obj = require("react");
  const cResult = obj.c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
    cResult[1] = channel;
    cResult[2] = E;
    tmp6 = E;
  } else {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== channel) {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
    const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
    PermissionUtilsAll;
    const obj3 = BigFlagUtilsAll;
    cResult[3] = channel;
    cResult[4] = canEveryoneRole(obj3.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
    const canEveryoneRoleResult = canEveryoneRole(obj3.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
  } else {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  if (cResult[5] === tmp8) {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  if (arg1 != null) {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  if (undefined === constants.PUBLIC) {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
    stringResult = obj4.string(require("intl").t.GFq5Rg);
  } else {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  cResult[5] = tmp8;
  cResult[6] = stateFromStores;
  cResult[7] = arg2;
  if (arg1 != null) {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  cResult[8] = undefined;
  cResult[9] = stringResult;
}) : (function useStagePrivacyLevelSettings(channel, privacy_level, arg2) {
  let obj4;
  let privacy_level1;
  let stringResult;
  let tmp16;
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel));
  const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
  PermissionUtilsAll;
  const obj2 = BigFlagUtilsAll;
  const canEveryoneRoleResult = canEveryoneRole(obj2.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
  privacy_level = undefined;
  if (privacy_level != null) {
    privacy_level = privacy_level.privacy_level;
  }
  if (privacy_level === constants.PUBLIC) {
    const intl4 = tmp(1126).intl;
    stringResult = intl4.string(tmp(1126).t.GFq5Rg);
  } else if (stateFromStores) {
    let stringResult1;
    if (canEveryoneRoleResult) {
      let formatResult = null;
      if (arg2 === constants.PUBLIC) {
        const intl3 = tmp(1126).intl;
        const format = intl3.format;
        const obj3 = { articleURL: obj4.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
        const prop = tmp(1126).t["ew/Jq4"];
        obj4 = HelpdeskUtilsDefault;
        formatResult = format(prop, obj3);
      }
      stringResult1 = formatResult;
    } else {
      const intl2 = tmp(1126).intl;
      stringResult1 = intl2.string(tmp(1126).t.E5T7a3);
    }
    stringResult = stringResult1;
  } else {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t.BOjr7t);
  }
  const obj5 = { helpText: stringResult, guildOnlyDisabled: privacy_level1 === constants.PUBLIC, publicDisabled: tmp16 };
  privacy_level1 = undefined;
  if (privacy_level != null) {
    privacy_level1 = privacy_level.privacy_level;
  }
  tmp16 = !stateFromStores;
  if (stateFromStores) {
    tmp16 = !canEveryoneRoleResult;
  }
  return obj5;
});
const result = size.fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default tmp2;
