// Module ID: 7853
// Function ID: 7854
// Name: SafetyToastsUtils
// Dependencies: [2045, 1372, 7847, 4988, 4678, 1115, 3039, 2619, 2]
// Exports: getSafetyToastTypeContent

// Module 7853 (SafetyToastsUtils)
import intl19 from "intl" /* 1115 */;
import _modDef2619 from "module_2619" /* 2619 */;
import _modDef3039 from "module_3039" /* 3039 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import Constants from "Constants" /* 7847 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const SafetyToastType = Constants.SafetyToastType;
const result = size.fileFinishedImporting("modules/safety_common/SafetyToastsUtils.tsx");

export const getSafetyToastTypeContent = function getSafetyToastTypeContent(BLOCK_SUCCESS, id, channelId) {
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
    const intl18 = intl19.intl;
    const obj = { username: name };
    return intl18.formatToPlainString(intl19.t["+joqrP"], obj);
  } else if (SafetyToastType.UNIGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl17 = intl19.intl;
    const obj2 = { username: name };
    return intl17.formatToPlainString(intl19.t.THExKa, obj2);
  } else if (SafetyToastType.BLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl16 = intl19.intl;
    const obj3 = { username: name };
    return intl16.formatToPlainString(intl19.t.XXPrIs, obj3);
  } else if (SafetyToastType.UNBLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl15 = intl19.intl;
    const obj4 = { username: name };
    return intl15.formatToPlainString(intl19.t.uExcGX, obj4);
  } else if (SafetyToastType.MUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl14 = intl19.intl;
    const obj5 = { username: name };
    return intl14.formatToPlainString(intl19.t.X4NtYb, obj5);
  } else if (SafetyToastType.UNMUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl13 = intl19.intl;
    const obj6 = { username: name };
    return intl13.formatToPlainString(intl19.t.tRaBfY, obj6);
  } else if (SafetyToastType.REPORT_SUCCESS === BLOCK_SUCCESS) {
    const intl12 = intl19.intl;
    const obj7 = { username: name };
    return intl12.formatToPlainString(intl19.t.FOptFU, obj7);
  } else if (SafetyToastType.TIGGER_PAWTECT_ERROR === BLOCK_SUCCESS) {
    const intl11 = intl19.intl;
    return intl11.string(intl19.t.c6kn6F);
  } else if (SafetyToastType.AGE_VERIFICATION_FAE_FAILED === BLOCK_SUCCESS) {
    const intl10 = intl19.intl;
    return intl10.string(_modDef3039["9F2y52"]);
  } else if (SafetyToastType.AGE_VERIFICATION_ID_FAILED === BLOCK_SUCCESS) {
    const intl9 = intl19.intl;
    return intl9.string(_modDef3039["40UKek"]);
  } else if (SafetyToastType.AGE_VERIFICATION_UNDERAGE === BLOCK_SUCCESS) {
    const intl8 = intl19.intl;
    return intl8.string(_modDef3039.XBGt7g);
  } else if (SafetyToastType.TIGGER_PAWTECT_VERIFIED === BLOCK_SUCCESS) {
    const intl7 = intl19.intl;
    return intl7.string(intl19.t["7nKAXx"]);
  } else if (SafetyToastType.GENERIC_ERROR === BLOCK_SUCCESS) {
    const intl6 = intl19.intl;
    return intl6.string(intl19.t.zBpoc7);
  } else if (SafetyToastType.REPORT_TO_MOD_SUCCESS === BLOCK_SUCCESS) {
    const intl5 = intl19.intl;
    return intl5.string(_modDef2619.iBypeZ);
  } else if (SafetyToastType.SAFETY_FEEDBACK_SUCCESS === BLOCK_SUCCESS) {
    const intl4 = intl19.intl;
    return intl4.string(intl19.t.TcFR5k);
  } else if (SafetyToastType.EXISTING_USER_AGE_GATE_SUCCESS === BLOCK_SUCCESS) {
    const intl3 = intl19.intl;
    return intl3.string(intl19.t["susqq/"]);
  } else if (SafetyToastType.AGE_VERIFICATION_METHOD_UNAVAILABLE === BLOCK_SUCCESS) {
    const intl2 = intl19.intl;
    return intl2.string(_modDef3039.vVwFCK);
  } else {
    const intl = intl19.intl;
    return intl.string(intl19.t["+c5xtT"]);
  }
};
