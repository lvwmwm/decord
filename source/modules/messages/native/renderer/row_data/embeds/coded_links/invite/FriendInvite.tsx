// Module ID: 12287
// Function ID: 95773
// Name: createFriendInvite
// Dependencies: [27, 3767, 6979, 7633, 1212, 3969, 1392, 2]
// Exports: createFriendInvite

// Module 12287 (createFriendInvite)
import { Image } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { InviteTypes } from "InviteSendStates";

const result = require("InviteSendStates").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/FriendInvite.tsx");

export const createFriendInvite = function createFriendInvite(inviter) {
  let acceptLabelDisabledBackgroundColor;
  let acceptLabelDisabledColor;
  let acceptLabelGreenBackgroundColor;
  let acceptLabelGreenColor;
  let baseColors;
  let colors;
  ({ colors, baseColors } = importDefault(7633)(arg3));
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (arg1) {
    let str = string(t.eQyu1F);
  } else {
    str = string(t.PYJHW6);
  }
  let str2 = "";
  if (null != inviter.inviter) {
    str2 = inviter.inviter.username;
  }
  let str3 = "";
  if (null != inviter.inviter) {
    let obj = importDefault(3969);
    str3 = obj.getUserTag(inviter.inviter);
  }
  let isFriendResult = null != inviter.inviter;
  if (isFriendResult) {
    inviter = inviter.inviter;
    let id;
    if (null != inviter) {
      id = inviter.id;
    }
    isFriendResult = friend.isFriend(id);
  }
  let str4 = "";
  if (null != inviter.inviter) {
    str4 = Image.resolveAssetSource(importDefault(1392).getUserAvatarSource(inviter.inviter)).uri;
    const obj2 = importDefault(1392);
  }
  const inviter2 = inviter.inviter;
  let id1;
  if (null != inviter2) {
    id1 = inviter2.id;
  }
  if (id1 === arg2) {
    ({ acceptLabelDisabledColor, acceptLabelDisabledBackgroundColor } = colors);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl3.string(require(1212) /* getSystemLocale */.t.ib7Ng1);
    let flag = false;
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const string2 = intl2.string;
    const t2 = require(1212) /* getSystemLocale */.t;
    if (isFriendResult) {
      stringResult = string2(t2.xhxnPn);
      flag = true;
      acceptLabelDisabledColor = acceptLabelGreenColor;
      acceptLabelDisabledBackgroundColor = acceptLabelGreenBackgroundColor;
    } else {
      stringResult = string2(t2.ib7Ng1);
      acceptLabelDisabledColor = acceptLabelGreenColor;
      acceptLabelDisabledBackgroundColor = acceptLabelGreenBackgroundColor;
      flag = true;
    }
  }
  obj = {};
  const merged = Object.assign(baseColors);
  obj["thumbnailCornerRadius"] = 25;
  let formatted;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  obj["headerText"] = formatted;
  obj["headerColor"] = colors.headerColor;
  obj["acceptLabelText"] = stringResult;
  obj["channelIcon"] = undefined;
  obj["titleText"] = str2;
  obj["titleColor"] = colors.titleColor;
  let tmp18;
  if (null != str4) {
    tmp18 = str4;
  }
  obj["thumbnailUrl"] = tmp18;
  obj["subtitle"] = str3;
  let subtitleColor;
  if ("" !== str3) {
    subtitleColor = colors.subtitleColor;
  }
  obj["subtitleColor"] = subtitleColor;
  obj["acceptLabelBackgroundColor"] = acceptLabelDisabledBackgroundColor;
  obj["acceptLabelBorderColor"] = undefined;
  obj["acceptLabelColor"] = acceptLabelDisabledColor;
  obj["embedCanBeTapped"] = false;
  obj["canBeAccepted"] = flag;
  const channel = inviter.channel;
  let name;
  if (null != channel) {
    name = channel.name;
  }
  let tmp21;
  if (null != name) {
    tmp21 = name;
  }
  obj["channelName"] = tmp21;
  let FRIEND = inviter.type;
  if (null == FRIEND) {
    FRIEND = InviteTypes.FRIEND;
  }
  obj["type"] = FRIEND;
  return obj;
};
