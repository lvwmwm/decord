// Module ID: 8055
// Function ID: 8056
// Name: utils/InstantInviteUtils
// Dependencies: [4762, 4843, 4845, 1071, 1112, 7589, 504, 2]
// Exports: getInviteChannelId, shouldRenderInvite, useShouldShowInviteInActionBar

// Module 8055 (utils/InstantInviteUtils)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import canViewInviteModal from "canViewInviteModal" /* 7589 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
const f92109 = () => f44323();
const f92110 = () => f44324();
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: c3, GUILD_VOCAL_CHANNELS_KEY: closure_4 } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
const Permissions = Constants.Permissions;
const f44298 = () => {
  const intl = f44298(f44299[4]).intl;
  return intl.string(f44298(f44299[4]).t.PqEzn8);
};
const f44299 = () => {
  const intl = f44298(f44299[4]).intl;
  return intl.string(f44298(f44299[4]).t["5u4A6V"]);
};
let obj = { value: 0 };
Object.defineProperty(obj, "label", { get: f92109, set: undefined });
Object.defineProperty(obj, "descriptiveLabel", { get: f92110, set: undefined });
const fn = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t["k2UNz+"], { days: 7 });
};
let obj2 = { value: 604800 };
Object.defineProperty(obj2, "label", { get: f92109, set: undefined });
Object.defineProperty(obj2, "descriptiveLabel", { get: f92110, set: undefined });
const fn2 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t["k2UNz+"], { days: 14 });
};
const obj3 = { value: 1209600 };
Object.defineProperty(obj3, "label", { get: f92109, set: undefined });
Object.defineProperty(obj3, "descriptiveLabel", { get: f92110, set: undefined });
const fn3 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t["k2UNz+"], { days: 30 });
};
const obj4 = { value: 2592000 };
Object.defineProperty(obj4, "label", { get: f92109, set: undefined });
Object.defineProperty(obj4, "descriptiveLabel", { get: f92110, set: undefined });
const fn4 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t["k2UNz+"], { days: 60 });
};
const obj5 = { value: 5184000 };
Object.defineProperty(obj5, "label", { get: f92109, set: undefined });
Object.defineProperty(obj5, "descriptiveLabel", { get: f92110, set: undefined });
const fn5 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t["k2UNz+"], { days: 1 });
};
const obj6 = { value: 86400 };
Object.defineProperty(obj6, "label", { get: f92109, set: undefined });
Object.defineProperty(obj6, "descriptiveLabel", { get: f92110, set: undefined });
const fn6 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t.xCjYxK, { hours: 12 });
};
const obj7 = { value: 43200 };
Object.defineProperty(obj7, "label", { get: f92109, set: undefined });
Object.defineProperty(obj7, "descriptiveLabel", { get: f92110, set: undefined });
const fn7 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t.xCjYxK, { hours: 6 });
};
const obj8 = { value: 21600 };
Object.defineProperty(obj8, "label", { get: f92109, set: undefined });
Object.defineProperty(obj8, "descriptiveLabel", { get: f92110, set: undefined });
const fn8 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t.xCjYxK, { hours: 8 });
};
const obj9 = { value: 28800 };
Object.defineProperty(obj9, "label", { get: f92109, set: undefined });
Object.defineProperty(obj9, "descriptiveLabel", { get: f92110, set: undefined });
const fn9 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t.xCjYxK, { hours: 1 });
};
const obj10 = { value: 3600 };
Object.defineProperty(obj10, "label", { get: f92109, set: undefined });
Object.defineProperty(obj10, "descriptiveLabel", { get: f92110, set: undefined });
const f44309 = () => {
  const intl = f44309(f44310[4]).intl;
  return intl.formatToPlainString(f44309(f44310[4]).t.opVZ9q, { mins: 30 });
};
const f44310 = () => {
  const intl = f44309(f44310[4]).intl;
  return intl.formatToPlainString(f44309(f44310[4]).t.iXLF9W, { minutes: 30 });
};
const obj11 = { value: 1800 };
Object.defineProperty(obj11, "label", { get: f92109, set: undefined });
Object.defineProperty(obj11, "descriptiveLabel", { get: f92110, set: undefined });
let items = [obj, obj5, obj4, obj3, obj2, obj6, obj7, obj8, obj10, obj11];
const f44311 = () => {
  const intl = f44311(f44312[4]).intl;
  return intl.formatToPlainString(f44311(f44312[4]).t["r/IcuP"], { maxUses: 0 });
};
const f44312 = () => {
  const intl = f44311(f44312[4]).intl;
  return intl.formatToPlainString(f44311(f44312[4]).t.gPl14C, { maxUses: 0 });
};
const obj12 = { value: 0 };
Object.defineProperty(obj12, "label", { get: f92109, set: undefined });
Object.defineProperty(obj12, "descriptiveLabel", { get: f92110, set: undefined });
const f44313 = () => "1";
const f44314 = () => {
  const intl = f44313(f44314[4]).intl;
  return intl.formatToPlainString(f44313(f44314[4]).t.gPl14C, { maxUses: 1 });
};
const obj13 = { value: 1 };
Object.defineProperty(obj13, "label", { get: f92109, set: undefined });
Object.defineProperty(obj13, "descriptiveLabel", { get: f92110, set: undefined });
const f44315 = () => "5";
const f44316 = () => {
  const intl = f44315(f44316[4]).intl;
  return intl.formatToPlainString(f44315(f44316[4]).t.gPl14C, { maxUses: 5 });
};
const obj14 = { value: 5 };
Object.defineProperty(obj14, "label", { get: f92109, set: undefined });
Object.defineProperty(obj14, "descriptiveLabel", { get: f92110, set: undefined });
const f44317 = () => "10";
const f44318 = () => {
  const intl = f44317(f44318[4]).intl;
  return intl.formatToPlainString(f44317(f44318[4]).t.gPl14C, { maxUses: 10 });
};
const obj15 = { value: 10 };
Object.defineProperty(obj15, "label", { get: f92109, set: undefined });
Object.defineProperty(obj15, "descriptiveLabel", { get: f92110, set: undefined });
const f44319 = () => "25";
const f44320 = () => {
  const intl = f44319(f44320[4]).intl;
  return intl.formatToPlainString(f44319(f44320[4]).t.gPl14C, { maxUses: 25 });
};
const obj16 = { value: 25 };
Object.defineProperty(obj16, "label", { get: f92109, set: undefined });
Object.defineProperty(obj16, "descriptiveLabel", { get: f92110, set: undefined });
const f44321 = () => "50";
const f44322 = () => {
  const intl = f44321(f44322[4]).intl;
  return intl.formatToPlainString(f44321(f44322[4]).t.gPl14C, { maxUses: 50 });
};
const obj17 = { value: 50 };
Object.defineProperty(obj17, "label", { get: f92109, set: undefined });
Object.defineProperty(obj17, "descriptiveLabel", { get: f92110, set: undefined });
const f44323 = () => "100";
const f44324 = () => {
  const intl = f44323(f44324[4]).intl;
  return intl.formatToPlainString(f44323(f44324[4]).t.gPl14C, { maxUses: 100 });
};
const obj18 = { value: 100 };
Object.defineProperty(obj18, "label", { get: f92109, set: undefined });
Object.defineProperty(obj18, "descriptiveLabel", { get: f92110, set: undefined });
let items1 = [obj12, obj13, obj14, obj15, obj16, obj17, obj18];
let result = size.fileFinishedImporting("utils/native/InstantInviteUtils.tsx");

export const INVITE_OPTIONS_FOREVER = obj;
export const INVITE_OPTIONS_7_DAYS = obj2;
export const INVITE_OPTIONS_14_DAYS = obj3;
export const INVITE_OPTIONS_30_DAYS = obj4;
export const INVITE_OPTIONS_60_DAYS = obj5;
export const INVITE_OPTIONS_1_DAY = obj6;
export const INVITE_OPTIONS_12_HOURS = obj7;
export const INVITE_OPTIONS_6_HOURS = obj8;
export const INVITE_OPTIONS_8_HOURS = obj9;
export const INVITE_OPTIONS_1_HOUR = obj10;
export const INVITE_OPTIONS_30_MINUTES = obj11;
export const MAX_AGE_OPTIONS = items;
export const INVITE_OPTIONS_UNLIMITED = obj12;
export const INVITE_OPTIONS_ONCE = obj13;
export const INVITE_OPTIONS_5_TIMES = obj14;
export const INVITE_OPTIONS_10_TIMES = obj15;
export const INVITE_OPTIONS_25_TIMES = obj16;
export const INVITE_OPTIONS_50_TIMES = obj17;
export const INVITE_OPTIONS_100_TIMES = obj18;
export const MAX_USES_OPTIONS = items1;
export function getInviteChannelId(channelId, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    let id = null;
    if (null != channelId) {
      const obj = { channelId };
      const obj2 = stateFromStores[_false];
      const result = PermissionStore.canWithPartialContext(Permissions.CREATE_INSTANT_INVITE, obj);
      const combined = obj2.concat(stateFromStores[React3]);
      const found = combined.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (result) {
        const channel = ChannelStore.getChannel(channelId);
        let isThreadResult;
        if (channel != null) {
          isThreadResult = channel.isThread();
        }
        let parent_id = channelId;
        if (isThreadResult) {
          parent_id = channelId;
          if (null != channel.parent_id) {
            parent_id = channel.parent_id;
          }
        }
        id = parent_id;
      } else {
        id = null;
        if (null != found) {
          id = found.channel.id;
        }
      }
    }
    return id;
  }
}
export function shouldRenderInvite(channels, guild) {
  let vanityURLCode;
  if (guild != null) {
    vanityURLCode = guild.vanityURLCode;
  }
  let tmp2 = null == vanityURLCode;
  if (!tmp2) {
    const obj = canViewInviteModal;
    tmp2 = !obj.canViewInviteModal(PermissionStore, guild);
  }
  let tmp6 = !tmp2;
  if (tmp2) {
    let tmp8 = null != channels;
    if (tmp8) {
      const arr = channels[_false];
      let tmp10 = null != arr.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (!tmp10) {
        const arr2 = channels[React3];
        tmp10 = null != arr2.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      }
      tmp8 = tmp10;
    }
    tmp6 = tmp8;
  }
  return tmp6;
}
export function useShouldShowInviteInActionBar(id) {
  _require = id;
  const items = [GuildChannelStore];
  const items1 = [id.id];
  const obj = require("get initialized");
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => GuildChannelStore.getChannels(id.id), items1);
  let vanityURLCode;
  const tmp = _require;
  if (id != null) {
    vanityURLCode = id.vanityURLCode;
  }
  let tmp5 = null == vanityURLCode;
  if (!tmp5) {
    const tmpResult = tmp(7589);
    tmp5 = !tmpResult.canViewInviteModal(PermissionStore, id);
  }
  let tmp7 = !tmp5;
  if (tmp5) {
    let tmp8 = null == stateFromStoresObject;
    if (!tmp8) {
      const arr3 = stateFromStoresObject[closure_3];
      let tmp10 = null != arr3.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (!tmp10) {
        const arr4 = stateFromStoresObject[closure_4];
        tmp10 = null != arr4.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      }
      tmp8 = tmp10;
    }
    tmp7 = tmp8;
  }
  return tmp7;
}
