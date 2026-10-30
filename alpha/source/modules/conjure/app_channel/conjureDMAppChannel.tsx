// Module ID: 6872
// Function ID: 6873
// Name: conjureDMAppChannel
// Dependencies: [2040, 4880, 1384, 1072, 504, 6873, 6875, 6877, 2]
// Exports: isDMAppChannel, useDMAppChannelApplicationId

// Module 6872 (conjureDMAppChannel)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6873 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import GuildStore from "GuildStore" /* 4880 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
({ ApplicationFlags: hasOwnProperty, ChannelTypes: metroRequire } = Constants);
const DMAppChannel = "DMAppChannel";
const result = size.fileFinishedImporting("modules/conjure/app_channel/conjureDMAppChannel.tsx");

export function useDMAppChannelApplicationId(stateFromStores) {
  _require = stateFromStores;
  const obj = require("get initialized");
  const items = [UserStore];
  const items1 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => {
    let type;
    if (stateFromStores != null) {
      type = obj.type;
    }
    if (type === metroRequire.DM) {
      if (!stateFromStores.isSystemDM()) {
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
    const tmpResult = tmp(6877);
    if (tmpResult.hasApplicationFlag(data, constants.DM_OPENS_ACTIVITY)) {
      id = data.id;
    }
  }
  return id;
}
export function isDMAppChannel(channel) {
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
          const tmp8Result = tmp8(6877);
          return tmp8Result.hasApplicationFlag(application, hasOwnProperty.DM_OPENS_ACTIVITY);
        }
      }
      return false;
    }
  }
  return false;
}
