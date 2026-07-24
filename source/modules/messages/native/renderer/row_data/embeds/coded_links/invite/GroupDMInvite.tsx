// Module ID: 12313
// Function ID: 96010
// Name: createGroupDMInvite
// Dependencies: [1348, 3767, 1849, 6978, 7722, 9516, 1212, 11979, 1395, 4320, 2]
// Exports: createGroupDMInvite

// Module 12313 (createGroupDMInvite)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { InviteTypes } from "InviteSendStates";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GroupDMInvite.tsx");

export const createGroupDMInvite = function createGroupDMInvite(invite, arg1, closure_2) {
  let acceptLabelGreenBackgroundColor;
  let acceptLabelGreenColor;
  let baseColors;
  let channel;
  let colors;
  let recipients_;
  ({ colors, baseColors } = importDefault(7722)(closure_2));
  const tmp = importDefault(7722)(closure_2);
  ({ channel, recipients_ } = importDefault(9516)(invite));
  let id;
  if (null != channel) {
    id = channel.id;
  }
  channel = channel.getChannel(id);
  let flag = false;
  if (null != channel) {
    flag = true;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (arg1) {
    let str = string(t.qmtuXE);
  } else {
    str = string(t["3p3/BK"]);
  }
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const string2 = intl2.string;
  const t2 = require(1212) /* getSystemLocale */.t;
  if (flag) {
    string2(t2.cEnaWx);
  } else {
    string2(t2.XpeFYr);
  }
  let formatToPlainStringResult;
  if (recipients_.length > 0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let obj = { count: recipients_.length };
    formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.zRl6XR, obj);
  }
  let channelIconSource = null;
  if (null != channel) {
    channelIconSource = require(11979) /* getChannelIconURL */.getChannelIconSource(channel);
    const obj2 = require(11979) /* getChannelIconURL */;
  }
  let uri = null;
  if (null != channelIconSource) {
    uri = require(1395) /* ensureAvatarSource */.ensureAvatarSource(channelIconSource).uri;
    const obj3 = require(1395) /* ensureAvatarSource */;
  }
  let channelName = null;
  if (flag) {
    channelName = null;
    if (null != channel) {
      channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_5, closure_4);
      const obj4 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    }
  }
  if (!channelName) {
    const channel2 = invite.channel;
    let name;
    if (null != channel2) {
      name = channel2.name;
    }
    channelName = name;
  }
  if (!channelName) {
    const mapped = recipients_.map((username) => username.username);
    channelName = mapped.join(", ");
  }
  if (!channelName) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    channelName = intl4.string(require(1212) /* getSystemLocale */.t.LJpTRF);
  }
  if (flag) {
    ({ acceptLabelDisabledColor: acceptLabelGreenColor, acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor } = colors);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl6.string(require(1212) /* getSystemLocale */.t.cEnaWx);
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl5 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl5.string(require(1212) /* getSystemLocale */.t.XpeFYr);
  }
  obj = {};
  const merged = Object.assign(baseColors);
  let formatted;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  obj["headerText"] = formatted;
  obj["headerColor"] = colors.headerColor;
  obj["acceptLabelText"] = stringResult;
  obj["onlineText"] = undefined;
  obj["memberText"] = formatToPlainStringResult;
  obj["channelIcon"] = undefined;
  obj["titleText"] = channelName;
  obj["titleColor"] = colors.titleColor;
  let tmp32;
  if (null != uri) {
    tmp32 = uri;
  }
  obj["thumbnailUrl"] = tmp32;
  obj["thumbnailText"] = undefined;
  obj["subtitle"] = "";
  obj["subtitleColor"] = undefined;
  obj["acceptLabelBackgroundColor"] = acceptLabelGreenBackgroundColor;
  obj["acceptLabelBorderColor"] = undefined;
  obj["acceptLabelColor"] = acceptLabelGreenColor;
  obj["embedCanBeTapped"] = true;
  obj["canBeAccepted"] = !flag;
  let channelName1 = channelName;
  if (flag) {
    channelName1 = channelName;
    if (null != channel) {
      channelName1 = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_5, closure_4);
      const obj7 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    }
  }
  obj["channelName"] = channelName1;
  let GROUP_DM = invite.type;
  if (null == GROUP_DM) {
    GROUP_DM = InviteTypes.GROUP_DM;
  }
  obj["type"] = GROUP_DM;
  return obj;
};
