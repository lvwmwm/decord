// Module ID: 13519
// Function ID: 13520
// Name: FriendInvite
// Dependencies: [17, 4409, 7983, 8208, 1119, 4603, 1401, 2]
// Exports: createFriendInvite

// Module 13519 (FriendInvite)
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1119 */;
import Constants from "Constants" /* 7983 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8208 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/FriendInvite.tsx");

export const createFriendInvite = function createFriendInvite(inviter, arg1, arg2, arg3) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(arg3));
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (arg1) {
    let str = string(t.eQyu1F);
    let tmp5 = tmp4;
  } else {
    str = string(t.PYJHW6);
    tmp5 = tmp4;
  }
  let str2 = "";
  if (null != inviter.inviter) {
    str2 = inviter.inviter.username;
  }
  let str3 = "";
  if (null != inviter.inviter) {
    str3 = tmp(4603).getUserTag(inviter.inviter);
    const tmpResult = tmp(4603);
  }
  let isFriendResult = null != inviter.inviter;
  if (isFriendResult) {
    inviter = inviter.inviter;
    let id;
    if (inviter != null) {
      id = inviter.id;
    }
    isFriendResult = RelationshipStore.isFriend(id);
  }
  let str4 = "";
  if (null != inviter.inviter) {
    str4 = Image.resolveAssetSource(tmp(1401).getUserAvatarSource(inviter.inviter)).uri;
    const tmpResult2 = tmp(1401);
  }
  const inviter2 = inviter.inviter;
  let id1;
  if (inviter2 != null) {
    id1 = inviter2.id;
  }
  if (id1 === arg2) {
    ({ acceptLabelDisabledColor, acceptLabelDisabledBackgroundColor } = colors);
    const intl3 = tmp5(1119).intl;
    let stringResult = intl3.string(tmp5(1119).t.ib7Ng1);
    let flag = false;
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl2 = tmp5(1119).intl;
    const string2 = intl2.string;
    const t2 = tmp5(1119).t;
    if (isFriendResult) {
      stringResult = string2(t2.xhxnPn);
      flag = true;
      acceptLabelDisabledBackgroundColor = acceptLabelGreenBackgroundColor;
      acceptLabelDisabledColor = acceptLabelGreenColor;
    } else {
      stringResult = string2(t2.ib7Ng1);
      flag = true;
      acceptLabelDisabledBackgroundColor = acceptLabelGreenBackgroundColor;
      acceptLabelDisabledColor = acceptLabelGreenColor;
    }
  }
  const obj = {};
  const merged = Object.assign(baseColors);
  obj.thumbnailCornerRadius = 25;
  let formatted;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  obj.headerText = formatted;
  obj.headerColor = colors.headerColor;
  obj.acceptLabelText = stringResult;
  obj.channelIcon = undefined;
  obj.titleText = str2;
  obj.titleColor = colors.titleColor;
  let tmp14;
  if (null != str4) {
    tmp14 = str4;
  }
  obj.thumbnailUrl = tmp14;
  obj.subtitle = str3;
  let subtitleColor;
  if ("" !== str3) {
    subtitleColor = colors.subtitleColor;
  }
  obj.subtitleColor = subtitleColor;
  obj.acceptLabelBackgroundColor = acceptLabelDisabledBackgroundColor;
  obj.acceptLabelBorderColor = undefined;
  obj.acceptLabelColor = acceptLabelDisabledColor;
  obj.embedCanBeTapped = false;
  obj.canBeAccepted = flag;
  const channel = inviter.channel;
  let name;
  if (channel != null) {
    name = channel.name;
  }
  obj.channelName = name;
  let FRIEND = inviter.type;
  if (FRIEND == null) {
    FRIEND = InviteTypes.FRIEND;
  }
  obj.type = FRIEND;
  return obj;
};
