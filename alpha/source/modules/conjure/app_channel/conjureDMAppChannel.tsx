// Module ID: 6297
// Function ID: 6298
// Name: conjureDMAppChannel
// Dependencies: [5503, 2090, 1392, 1087, 558, 576, 504, 6298, 6299, 6301, 2]
// Exports: isDMAppChannel

// Module 6297 (conjureDMAppChannel)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6298 */;
import ApplicationStore from "ApplicationStore" /* 5503 */;
import GuildStore from "GuildStore" /* 2090 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
({ ApplicationFlags: hasOwnProperty, ChannelTypes: metroRequire } = Constants);
const DMAppChannel = "DMAppChannel";
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDMAppChannelApplicationId(arg0) {
  let first;
  let systemDM;
  let tmp10;
  let tmp14;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let type;
      if (systemDM != null) {
        type = obj.type;
      }
      if (type === metroRequire.DM) {
        if (!systemDM.isSystemDM()) {
          const user = UserStore.getUser(obj.getRecipientId());
          let bot;
          if (user != null) {
            bot = user.bot;
          }
          let id = null;
          if (true === bot) {
            id = user.id;
          }
          return id;
        }
      }
      return null;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== (null != stateFromStores)) {
    const obj2 = { autoTrackExposure: null != stateFromStores };
    cResult[4] = null != stateFromStores;
    cResult[5] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult4 = require("ConjureGuildExperiment");
  const hasConjureGuild = tmpResult4.useHasConjureGuild(DMAppChannel, tmp10);
  let tmp13 = null;
  const useApplication = require("ApplicationActionCreators").useApplication;
  require("ApplicationActionCreators");
  if (hasConjureGuild) {
    tmp13 = stateFromStores;
  }
  const data = useApplication(tmp13).data;
  if (cResult[6] !== data) {
    let id = null;
    if (null != data) {
      id = null;
      const tmpResult6 = require("ApplicationFlagUtils");
      if (tmpResult6.hasApplicationFlag(data, constants.DM_OPENS_ACTIVITY)) {
        id = data.id;
      }
    }
    cResult[6] = data;
    cResult[7] = id;
    tmp14 = id;
  } else {
    tmp14 = cResult[7];
  }
  return tmp14;
}) : (function useDMAppChannelApplicationId(arg0) {
  let systemDM;
  _require = arg0;
  const obj = require("get initialized");
  const items = [UserStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let type;
    if (systemDM != null) {
      type = obj.type;
    }
    if (type === metroRequire.DM) {
      if (!systemDM.isSystemDM()) {
        const user = UserStore.getUser(obj.getRecipientId());
        let bot;
        if (user != null) {
          bot = user.bot;
        }
        let id = null;
        if (true === bot) {
          id = user.id;
        }
        return id;
      }
    }
    return null;
  }, items1);
  const obj2 = require("ConjureGuildExperiment");
  const obj3 = { autoTrackExposure: null != stateFromStores };
  const hasConjureGuild = obj2.useHasConjureGuild(DMAppChannel, obj3);
  let tmp6 = null;
  const useApplication = require("ApplicationActionCreators").useApplication;
  require("ApplicationActionCreators");
  const tmp = _require;
  if (hasConjureGuild) {
    tmp6 = stateFromStores;
  }
  const data = useApplication(tmp6).data;
  let id = null;
  if (null != data) {
    id = null;
    const tmpResult = tmp(6301);
    if (tmpResult.hasApplicationFlag(data, constants.DM_OPENS_ACTIVITY)) {
      id = data.id;
    }
  }
  return id;
});
const result = size.fileFinishedImporting("modules/conjure/app_channel/conjureDMAppChannel.tsx");

export const useDMAppChannelApplicationId = tmp3;
export const isDMAppChannel = function isDMAppChannel(channel) {
  if (channel.type === metroRequire.DM) {
    if (!channel.isSystemDM()) {
      const user = UserStore.getUser(channel.getRecipientId());
      let bot;
      if (user != null) {
        bot = user.bot;
      }
      if (true === bot) {
        const _Object = Object;
        const obj2 = ConjureGuildExperiment;
        const tmp8 = require;
        if (obj2.hasConjureGuild(Object.values(GuildStore.getGuilds()), DMAppChannel)) {
          const getApplication = ApplicationStore.getApplication;
          let id = ApplicationStore.getAppIdForBotUserId(user.id);
          if (id == null) {
            id = user.id;
          }
          const application = getApplication(id);
          const tmp8Result = tmp8(6301);
          return tmp8Result.hasApplicationFlag(application, hasOwnProperty.DM_OPENS_ACTIVITY);
        }
      }
      return false;
    }
  }
  return false;
};
