// Module ID: 6853
// Function ID: 6854
// Name: SafetyToastsUtils
// Dependencies: [5092, 1385, 6847, 6288, 5309, 1113, 3273, 2819, 2685, 2]
// Exports: getSafetyToastTypeContent

// Module 6853 (SafetyToastsUtils)
import intl21 from "intl" /* 1113 */;
import _modDef2685 from "module_2685" /* 2685 */;
import _modDef2819 from "module_2819" /* 2819 */;
import _modDef3273 from "module_3273" /* 3273 */;
import UserUtilsDefault from "UserUtils" /* 5309 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6288 */;
import Constants from "Constants" /* 6847 */;
import ChannelStore from "ChannelStore" /* 5092 */;
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
    const intl20 = intl21.intl;
    const obj = { username: name };
    return intl20.formatToPlainString(intl21.t["+joqrP"], obj);
  } else if (SafetyToastType.UNIGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl19 = intl21.intl;
    const obj2 = { username: name };
    return intl19.formatToPlainString(intl21.t.THExKa, obj2);
  } else if (SafetyToastType.BLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl18 = intl21.intl;
    const obj3 = { username: name };
    return intl18.formatToPlainString(intl21.t.XXPrIs, obj3);
  } else if (SafetyToastType.UNBLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl17 = intl21.intl;
    const obj4 = { username: name };
    return intl17.formatToPlainString(intl21.t.uExcGX, obj4);
  } else if (SafetyToastType.MUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl16 = intl21.intl;
    const obj5 = { username: name };
    return intl16.formatToPlainString(intl21.t.X4NtYb, obj5);
  } else if (SafetyToastType.UNMUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl15 = intl21.intl;
    const obj6 = { username: name };
    return intl15.formatToPlainString(intl21.t.tRaBfY, obj6);
  } else if (SafetyToastType.REPORT_SUCCESS === BLOCK_SUCCESS) {
    const intl14 = intl21.intl;
    const obj7 = { username: name };
    return intl14.formatToPlainString(intl21.t.FOptFU, obj7);
  } else if (SafetyToastType.AGE_VERIFICATION_ERROR === BLOCK_SUCCESS) {
    const intl13 = intl21.intl;
    return intl13.string(intl21.t.c6kn6F);
  } else if (SafetyToastType.AGE_VERIFICATION_FAE_FAILED === BLOCK_SUCCESS) {
    const intl12 = intl21.intl;
    return intl12.string(_modDef3273["9F2y52"]);
  } else if (SafetyToastType.AGE_VERIFICATION_ID_FAILED === BLOCK_SUCCESS) {
    const intl11 = intl21.intl;
    return intl11.string(_modDef3273["40UKek"]);
  } else if (SafetyToastType.AGE_VERIFICATION_UNDERAGE === BLOCK_SUCCESS) {
    const intl10 = intl21.intl;
    return intl10.string(_modDef3273.XBGt7g);
  } else if (SafetyToastType.AGE_VERIFICATION_VERIFIED === BLOCK_SUCCESS) {
    const intl9 = intl21.intl;
    return intl9.string(intl21.t["7nKAXx"]);
  } else if (SafetyToastType.GENERIC_ERROR === BLOCK_SUCCESS) {
    const intl8 = intl21.intl;
    return intl8.string(intl21.t.zBpoc7);
  } else if (SafetyToastType.REPORT_TO_MOD_SUCCESS === BLOCK_SUCCESS) {
    const intl7 = intl21.intl;
    return intl7.string(_modDef2819.iBypeZ);
  } else if (SafetyToastType.SAFETY_FEEDBACK_SUCCESS === BLOCK_SUCCESS) {
    const intl6 = intl21.intl;
    return intl6.string(intl21.t.TcFR5k);
  } else if (SafetyToastType.EXISTING_USER_AGE_GATE_SUCCESS === BLOCK_SUCCESS) {
    const intl5 = intl21.intl;
    return intl5.string(intl21.t["susqq/"]);
  } else if (SafetyToastType.AGE_VERIFICATION_METHOD_UNAVAILABLE === BLOCK_SUCCESS) {
    const intl4 = intl21.intl;
    return intl4.string(_modDef3273.vVwFCK);
  } else if (SafetyToastType.FAMILY_CENTER_TEEN_SETTINGS_SAVE_ERROR === BLOCK_SUCCESS) {
    const intl3 = intl21.intl;
    return intl3.string(_modDef2685.fZG8IY);
  } else if (SafetyToastType.FAMILY_CENTER_TEEN_SETTINGS_LOAD_ERROR === BLOCK_SUCCESS) {
    const intl2 = intl21.intl;
    return intl2.string(_modDef2685.onKDuP);
  } else {
    const intl = intl21.intl;
    return intl.string(intl21.t["+c5xtT"]);
  }
}
