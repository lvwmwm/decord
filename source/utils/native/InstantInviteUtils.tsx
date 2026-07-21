// Module ID: 8477
// Function ID: 67652
// Name: makeOption
// Dependencies: []
// Exports: getInviteChannelId, shouldRenderInvite, useShouldShowInviteInActionBar

// Module 8477 (makeOption)
import option from "module_0";
import option1 from "module_604800";
import option2 from "module_1209600";
import option3 from "module_2592000";
import option4 from "module_5184000";
import option5 from "module_86400";
import option6 from "module_43200";
import option7 from "module_21600";
import option8 from "module_28800";
import option9 from "module_3600";
import option10 from "module_1800";
import option11 from "module_0";
import option12 from "module_1";
import option13 from "module_5";
import option14 from "module_10";
import option15 from "module_25";
import option16 from "module_50";
import option17 from "module_100";

function makeOption(value, arg1, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = arg1;
  }
  const dependencyMap = tmp;
  const obj = { value };
  Object.defineProperty(obj, "label", { get: () => arg1(), set: undefined });
  Object.defineProperty(obj, "descriptiveLabel", { get: () => tmp(), set: undefined });
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_3, GUILD_VOCAL_CHANNELS_KEY: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
const items = [option, option4, option3, option2, option1, option5, option6, option7, option9, option10];
const items1 = [option11, option12, option13, option14, option15, option16, option17];
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("utils/native/InstantInviteUtils.tsx");

export const INVITE_OPTIONS_FOREVER = option;
export const INVITE_OPTIONS_7_DAYS = option1;
export const INVITE_OPTIONS_14_DAYS = option2;
export const INVITE_OPTIONS_30_DAYS = option3;
export const INVITE_OPTIONS_60_DAYS = option4;
export const INVITE_OPTIONS_1_DAY = option5;
export const INVITE_OPTIONS_12_HOURS = option6;
export const INVITE_OPTIONS_6_HOURS = option7;
export const INVITE_OPTIONS_8_HOURS = option8;
export const INVITE_OPTIONS_1_HOUR = option9;
export const INVITE_OPTIONS_30_MINUTES = option10;
export const MAX_AGE_OPTIONS = items;
export const INVITE_OPTIONS_UNLIMITED = option11;
export const INVITE_OPTIONS_ONCE = option12;
export const INVITE_OPTIONS_5_TIMES = option13;
export const INVITE_OPTIONS_10_TIMES = option14;
export const INVITE_OPTIONS_25_TIMES = option15;
export const INVITE_OPTIONS_50_TIMES = option16;
export const INVITE_OPTIONS_100_TIMES = option17;
export const MAX_USES_OPTIONS = items1;
export const getInviteChannelId = function getInviteChannelId(channelId, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    let id = null;
    if (null != channelId) {
      const obj = { channelId };
      const result = closure_6.canWithPartialContext(Permissions.CREATE_INSTANT_INVITE, obj);
      const combined = stateFromStores[closure_3].concat(stateFromStores[closure_4]);
      const found = combined.find((channel) => closure_6.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (result) {
        const channel = channel.getChannel(channelId);
        let parent_id = channelId;
        if (null != channel) {
          parent_id = channelId;
          if (channel.isThread()) {
            parent_id = channelId;
            if (null != channel.parent_id) {
              parent_id = channel.parent_id;
            }
          }
        }
        id = parent_id;
      } else {
        id = null;
        if (null != found) {
          id = found.channel.id;
        }
      }
      const obj2 = stateFromStores[closure_3];
    }
    return id;
  }
};
export const shouldRenderInvite = function shouldRenderInvite(channels, guild) {
  let vanityURLCode;
  if (null != guild) {
    vanityURLCode = guild.vanityURLCode;
  }
  let tmp2 = null == vanityURLCode;
  if (!tmp2) {
    tmp2 = !guild(dependencyMap[5]).canViewInviteModal(closure_6, guild);
    const obj = guild(dependencyMap[5]);
  }
  let tmp6 = !tmp2;
  if (tmp2) {
    let tmp7 = null != channels;
    if (tmp7) {
      let tmp9 = null != channels[closure_3].find((channel) => closure_6.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (!tmp9) {
        tmp9 = null != channels[closure_4].find((channel) => closure_6.can(constants.CREATE_INSTANT_INVITE, channel.channel));
        const arr2 = channels[closure_4];
      }
      tmp7 = tmp9;
      const arr = channels[closure_3];
    }
    tmp6 = tmp7;
  }
  return tmp6;
};
export const useShouldShowInviteInActionBar = function useShouldShowInviteInActionBar(id) {
  const arg1 = id;
  const items = [closure_5];
  const items1 = [id.id];
  const stateFromStoresObject = arg1(dependencyMap[6]).useStateFromStoresObject(items, () => channels.getChannels(arg0.id), items1);
  let vanityURLCode;
  if (null != id) {
    vanityURLCode = id.vanityURLCode;
  }
  let tmp3 = null == vanityURLCode;
  if (!tmp3) {
    tmp3 = !arg1(dependencyMap[5]).canViewInviteModal(closure_6, id);
    const obj2 = arg1(dependencyMap[5]);
  }
  let tmp7 = !tmp3;
  if (tmp3) {
    let tmp8 = null == stateFromStoresObject;
    if (!tmp8) {
      let tmp10 = null != stateFromStoresObject[closure_3].find((channel) => closure_6.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (!tmp10) {
        tmp10 = null != stateFromStoresObject[closure_4].find((channel) => closure_6.can(constants.CREATE_INSTANT_INVITE, channel.channel));
        const arr4 = stateFromStoresObject[closure_4];
      }
      tmp8 = tmp10;
      const arr3 = stateFromStoresObject[closure_3];
    }
    tmp7 = tmp8;
  }
  return tmp7;
};
