// Module ID: 7637
// Function ID: 7638
// Name: SafetyToastsUtils
// Dependencies: [4992, 1385, 7632, 6179, 5197, 1113, 3223, 2801, 2667, 2]
// Exports: getSafetyToastTypeContent

// Module 7637 (SafetyToastsUtils)
import intl20 from "intl" /* 1113 */;
import _modDef2667 from "module_2667" /* 2667 */;
import _modDef2801 from "module_2801" /* 2801 */;
import _modDef3223 from "module_3223" /* 3223 */;
import UserUtilsDefault from "UserUtils" /* 5197 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6179 */;
import Constants from "Constants" /* 7632 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const SafetyToastType = Constants.SafetyToastType;
const result = size.fileFinishedImporting("modules/safety_common/SafetyToastsUtils.tsx");

export function getSafetyToastTypeContent(BLOCK_SUCCESS, id, channelId) {
  const user = UserStore.getUser(id);
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  const getName = NicknameUtilsDefault.getName;
  NicknameUtilsDefault;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  let name = getName(guild_id, id, user);
  if (name == null) {
    const tmp3Result = UserUtilsDefault;
    name = tmp3Result.getGlobalName(user);
  }
  if (SafetyToastType.IGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl19 = intl20.intl;
    const obj = { username: name };
    return intl19.formatToPlainString(intl20.t["+joqrP"], obj);
  } else if (SafetyToastType.UNIGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl18 = intl20.intl;
    const obj2 = { username: name };
    return intl18.formatToPlainString(intl20.t.THExKa, obj2);
  } else if (SafetyToastType.BLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl17 = intl20.intl;
    const obj3 = { username: name };
    return intl17.formatToPlainString(intl20.t.XXPrIs, obj3);
  } else if (SafetyToastType.UNBLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl16 = intl20.intl;
    const obj4 = { username: name };
    return intl16.formatToPlainString(intl20.t.uExcGX, obj4);
  } else if (SafetyToastType.MUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl15 = intl20.intl;
    const obj5 = { username: name };
    return intl15.formatToPlainString(intl20.t.X4NtYb, obj5);
  } else if (SafetyToastType.UNMUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl14 = intl20.intl;
    const obj6 = { username: name };
    return intl14.formatToPlainString(intl20.t.tRaBfY, obj6);
  } else if (SafetyToastType.REPORT_SUCCESS === BLOCK_SUCCESS) {
    const intl13 = intl20.intl;
    const obj7 = { username: name };
    return intl13.formatToPlainString(intl20.t.FOptFU, obj7);
  } else if (SafetyToastType.AGE_VERIFICATION_ERROR === BLOCK_SUCCESS) {
    const intl12 = intl20.intl;
    return intl12.string(intl20.t.c6kn6F);
  } else if (SafetyToastType.AGE_VERIFICATION_FAE_FAILED === BLOCK_SUCCESS) {
    const intl11 = intl20.intl;
    return intl11.string(_modDef3223["9F2y52"]);
  } else if (SafetyToastType.AGE_VERIFICATION_ID_FAILED === BLOCK_SUCCESS) {
    const intl10 = intl20.intl;
    return intl10.string(_modDef3223["40UKek"]);
  } else if (SafetyToastType.AGE_VERIFICATION_UNDERAGE === BLOCK_SUCCESS) {
    const intl9 = intl20.intl;
    return intl9.string(_modDef3223.XBGt7g);
  } else if (SafetyToastType.AGE_VERIFICATION_VERIFIED === BLOCK_SUCCESS) {
    const intl8 = intl20.intl;
    return intl8.string(intl20.t["7nKAXx"]);
  } else if (SafetyToastType.GENERIC_ERROR === BLOCK_SUCCESS) {
    const intl7 = intl20.intl;
    return intl7.string(intl20.t.zBpoc7);
  } else if (SafetyToastType.REPORT_TO_MOD_SUCCESS === BLOCK_SUCCESS) {
    const intl6 = intl20.intl;
    return intl6.string(_modDef2801.iBypeZ);
  } else if (SafetyToastType.SAFETY_FEEDBACK_SUCCESS === BLOCK_SUCCESS) {
    const intl5 = intl20.intl;
    return intl5.string(intl20.t.TcFR5k);
  } else if (SafetyToastType.EXISTING_USER_AGE_GATE_SUCCESS === BLOCK_SUCCESS) {
    const intl4 = intl20.intl;
    return intl4.string(intl20.t["susqq/"]);
  } else if (SafetyToastType.AGE_VERIFICATION_METHOD_UNAVAILABLE === BLOCK_SUCCESS) {
    const intl3 = intl20.intl;
    return intl3.string(_modDef3223.vVwFCK);
  } else if (SafetyToastType.FAMILY_CENTER_TEEN_SETTINGS_SAVE_ERROR === BLOCK_SUCCESS) {
    const intl2 = intl20.intl;
    return intl2.string(_modDef2667.fZG8IY);
  } else {
    const intl = intl20.intl;
    return intl.string(intl20.t["+c5xtT"]);
  }
}
