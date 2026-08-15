// Module ID: 6554
// Function ID: 6555
// Name: getSafetyToastTypeContent
// Dependencies: [1391, 1922, 5430, 4796, 4219, 1236, 2853, 2435, 2]
// Exports: getSafetyToastTypeContent

// Module 6554 (getSafetyToastTypeContent)
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyToastType } from "SafetyToastType";

const require = arg1;
const result = require("SafetyToastType").fileFinishedImporting("modules/safety_common/SafetyToastsUtils.tsx");

export const getSafetyToastTypeContent = function getSafetyToastTypeContent(BLOCK_SUCCESS, closure_0, c1) {
  user = user.getUser(closure_0);
  channel = channel.getChannel(c1);
  let obj = importDefault(4796);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  let name = obj.getName(guild_id, id, user);
  if (name == null) {
    name = tmp3(4219).getGlobalName(user);
    const tmp3Result = tmp3(4219);
  }
  if (SafetyToastType.IGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl18 = require(1236) /* getSystemLocale */.intl;
    obj = { username: null };
    obj[0] = name;
    return intl18.formatToPlainString(require(1236) /* getSystemLocale */.t["+joqrP"], obj);
  } else if (tmp8.UNIGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl17 = require(1236) /* getSystemLocale */.intl;
    obj = { username: null };
    obj[0] = name;
    return intl17.formatToPlainString(require(1236) /* getSystemLocale */.t.THExKa, obj);
  } else if (tmp8.BLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl16 = require(1236) /* getSystemLocale */.intl;
    const obj1 = { username: null };
    obj1[0] = name;
    return intl16.formatToPlainString(require(1236) /* getSystemLocale */.t.XXPrIs, obj1);
  } else if (tmp8.UNBLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl15 = require(1236) /* getSystemLocale */.intl;
    const obj2 = { username: null };
    obj2[0] = name;
    return intl15.formatToPlainString(require(1236) /* getSystemLocale */.t.uExcGX, obj2);
  } else if (tmp8.MUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl14 = require(1236) /* getSystemLocale */.intl;
    const obj3 = { username: null };
    obj3[0] = name;
    return intl14.formatToPlainString(require(1236) /* getSystemLocale */.t.X4NtYb, obj3);
  } else if (tmp8.UNMUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl13 = require(1236) /* getSystemLocale */.intl;
    const obj4 = { username: null };
    obj4[0] = name;
    return intl13.formatToPlainString(require(1236) /* getSystemLocale */.t.tRaBfY, obj4);
  } else if (tmp8.REPORT_SUCCESS === BLOCK_SUCCESS) {
    const intl12 = require(1236) /* getSystemLocale */.intl;
    const obj5 = { username: null };
    obj5[0] = name;
    return intl12.formatToPlainString(require(1236) /* getSystemLocale */.t.FOptFU, obj5);
  } else if (tmp8.TIGGER_PAWTECT_ERROR === BLOCK_SUCCESS) {
    const intl11 = require(1236) /* getSystemLocale */.intl;
    return intl11.string(require(1236) /* getSystemLocale */.t.c6kn6F);
  } else if (tmp8.AGE_VERIFICATION_FAE_FAILED === BLOCK_SUCCESS) {
    const intl10 = require(1236) /* getSystemLocale */.intl;
    return intl10.string(tmp3(2853)["9F2y52"]);
  } else if (tmp8.AGE_VERIFICATION_ID_FAILED === BLOCK_SUCCESS) {
    const intl9 = require(1236) /* getSystemLocale */.intl;
    return intl9.string(tmp3(2853)["40UKek"]);
  } else if (tmp8.AGE_VERIFICATION_UNDERAGE === BLOCK_SUCCESS) {
    const intl8 = require(1236) /* getSystemLocale */.intl;
    return intl8.string(tmp3(2853).XBGt7g);
  } else if (tmp8.TIGGER_PAWTECT_VERIFIED === BLOCK_SUCCESS) {
    const intl7 = require(1236) /* getSystemLocale */.intl;
    return intl7.string(require(1236) /* getSystemLocale */.t["7nKAXx"]);
  } else if (tmp8.GENERIC_ERROR === BLOCK_SUCCESS) {
    const intl6 = require(1236) /* getSystemLocale */.intl;
    return intl6.string(require(1236) /* getSystemLocale */.t.zBpoc7);
  } else if (tmp8.REPORT_TO_MOD_SUCCESS === BLOCK_SUCCESS) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    return intl5.string(tmp3(2435).iBypeZ);
  } else if (tmp8.SAFETY_FEEDBACK_SUCCESS === BLOCK_SUCCESS) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    return intl4.string(require(1236) /* getSystemLocale */.t.TcFR5k);
  } else if (tmp8.EXISTING_USER_AGE_GATE_SUCCESS === BLOCK_SUCCESS) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t["susqq/"]);
  } else if (tmp8.AGE_VERIFICATION_METHOD_UNAVAILABLE === BLOCK_SUCCESS) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(tmp3(2853).vVwFCK);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+c5xtT"]);
  }
};
