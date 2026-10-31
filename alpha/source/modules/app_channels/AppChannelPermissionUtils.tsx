// Module ID: 11645
// Function ID: 11646
// Name: AppChannelPermissionUtils
// Dependencies: [2038, 1072, 7420, 1084, 4953, 2]
// Exports: getAppChannelBotUserId, getAppChannelBotUserIdFromApplication, isAppChannelFloorPermission, useAppChannelBotUserId

// Module 11645 (AppChannelPermissionUtils)
import Constants from "Constants" /* 1072 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import AppChannelPermissions from "AppChannelPermissions" /* 4953 */;
import useAppChannelApplication from "useAppChannelApplication" /* 7420 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_channels/AppChannelPermissionUtils.tsx");

export function getAppChannelBotUserIdFromApplication(type, bot) {
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
export function getAppChannelBotUserId(c18) {
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
}
export function useAppChannelBotUserId(channel) {
  const obj = useAppChannelApplication;
  const appChannelApplication = obj.useAppChannelApplication(channel);
  let tmp2;
  if (null != channel) {
    let tmp4;
    if (channel.type === ChannelTypes.GUILD_APP) {
      if (null != channel.application_id) {
        let id;
        if (appChannelApplication != null) {
          const bot = appChannelApplication.bot;
          if (bot != null) {
            id = bot.id;
          }
        }
        if (id == null) {
          id = channel.application_id;
        }
        tmp4 = id;
      }
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
export function isAppChannelFloorPermission(appChannelBotUserId, id, arg2) {
  let hasItem = appChannelBotUserId === id;
  if (hasItem) {
    const obj = BigFlagUtilsAll;
    hasItem = obj.has(AppChannelPermissions.APP_CHANNEL_MINIMUM_BOT_PERMISSIONS, arg2);
  }
  return hasItem;
}
