// Module ID: 10733
// Function ID: 10734
// Name: AppChannelPermissionUtils
// Dependencies: [5437, 1085, 558, 576, 6942, 1097, 4716, 2]
// Exports: getAppChannelBotUserId, getAppChannelBotUserIdFromApplication, isAppChannelFloorPermission

// Module 10733 (AppChannelPermissionUtils)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import AppChannelPermissions from "AppChannelPermissions" /* 4716 */;
import useAppChannelApplication from "useAppChannelApplication" /* 6942 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelBotUserId(type) {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = useAppChannelApplication;
  const appChannelApplication = obj2.useAppChannelApplication(type);
  if (cResult[0] === appChannelApplication) {
    let tmp3;
    if (cResult[1] === type) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  let tmp4;
  if (null != type) {
    let tmp6;
    if (type.type === ChannelTypes.GUILD_APP) {
      if (null != type.application_id) {
        let id;
        if (appChannelApplication != null) {
          const bot = appChannelApplication.bot;
          if (bot != null) {
            id = bot.id;
          }
        }
        if (id == null) {
          id = type.application_id;
        }
        tmp6 = id;
      }
    }
    tmp4 = tmp6;
  }
  cResult[0] = appChannelApplication;
  cResult[1] = type;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function useAppChannelBotUserId(type) {
  const obj = useAppChannelApplication;
  const appChannelApplication = obj.useAppChannelApplication(type);
  let tmp2;
  if (null != type) {
    let tmp4;
    if (type.type === ChannelTypes.GUILD_APP) {
      if (null != type.application_id) {
        let id;
        if (appChannelApplication != null) {
          const bot = appChannelApplication.bot;
          if (bot != null) {
            id = bot.id;
          }
        }
        if (id == null) {
          id = type.application_id;
        }
        tmp4 = id;
      }
    }
    tmp2 = tmp4;
  }
  return tmp2;
});
function getAppChannelBotUserIdFromApplication(type, bot) {
  if (type.type === ChannelTypes.GUILD_APP) {
    if (null != type.application_id) {
      let id;
      if (bot != null) {
        bot = bot.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      if (id == null) {
        id = type.application_id;
      }
      return id;
    }
  }
}
const result = size.fileFinishedImporting("modules/app_channels/AppChannelPermissionUtils.tsx");

export { getAppChannelBotUserIdFromApplication };
export const getAppChannelBotUserId = function getAppChannelBotUserId(c18) {
  const application = ApplicationStore.getApplication(c18.application_id);
  let tmp2;
  if (c18.type === ChannelTypes.GUILD_APP) {
    if (null != c18.application_id) {
      let id;
      if (application != null) {
        const bot = application.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      if (id == null) {
        id = c18.application_id;
      }
      tmp2 = id;
    }
  }
  return tmp2;
};
export const useAppChannelBotUserId = tmp2;
export const isAppChannelFloorPermission = function isAppChannelFloorPermission(appChannelBotUserId, id, arg2) {
  let hasItem = appChannelBotUserId === id;
  if (hasItem) {
    const obj = BigFlagUtilsAll;
    hasItem = obj.has(AppChannelPermissions.APP_CHANNEL_MINIMUM_BOT_PERMISSIONS, arg2);
  }
  return hasItem;
};
