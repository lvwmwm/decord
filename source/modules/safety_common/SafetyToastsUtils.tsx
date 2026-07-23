// Module ID: 7489
// Function ID: 60110
// Name: getSafetyToastTypeContent
// Dependencies: [1348, 1849, 7483, 4319, 3969, 1212, 2298, 2]
// Exports: getSafetyToastTypeContent

// Module 7489 (getSafetyToastTypeContent)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { SafetyToastType } from "SafetyToastType";

const require = arg1;
const result = require("SafetyToastType").fileFinishedImporting("modules/safety_common/SafetyToastsUtils.tsx");

export const getSafetyToastTypeContent = function getSafetyToastTypeContent(BLOCK_SUCCESS, id, channelId) {
  user = user.getUser(id);
  channel = channel.getChannel(channelId);
  let obj = importDefault(4319);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  id = undefined;
  if (null != channel) {
    id = channel.id;
  }
  let name = obj.getName(guild_id, id, user);
  if (null == name) {
    let obj1 = importDefault(3969);
    name = obj1.getGlobalName(user);
  }
  if (SafetyToastType.IGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl14 = require(1212) /* getSystemLocale */.intl;
    obj = { username: name };
    return intl14.formatToPlainString(require(1212) /* getSystemLocale */.t["+joqrP"], obj);
  } else if (SafetyToastType.UNIGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl13 = require(1212) /* getSystemLocale */.intl;
    obj = { username: name };
    return intl13.formatToPlainString(require(1212) /* getSystemLocale */.t.THExKa, obj);
  } else if (SafetyToastType.BLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl12 = require(1212) /* getSystemLocale */.intl;
    obj1 = { username: name };
    return intl12.formatToPlainString(require(1212) /* getSystemLocale */.t.XXPrIs, obj1);
  } else if (SafetyToastType.UNBLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl11 = require(1212) /* getSystemLocale */.intl;
    const obj2 = { username: name };
    return intl11.formatToPlainString(require(1212) /* getSystemLocale */.t.uExcGX, obj2);
  } else if (SafetyToastType.MUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl10 = require(1212) /* getSystemLocale */.intl;
    const obj3 = { username: name };
    return intl10.formatToPlainString(require(1212) /* getSystemLocale */.t.X4NtYb, obj3);
  } else if (SafetyToastType.UNMUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    const obj4 = { username: name };
    return intl9.formatToPlainString(require(1212) /* getSystemLocale */.t.tRaBfY, obj4);
  } else if (SafetyToastType.REPORT_SUCCESS === BLOCK_SUCCESS) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    const obj5 = { username: name };
    return intl8.formatToPlainString(require(1212) /* getSystemLocale */.t.FOptFU, obj5);
  } else if (SafetyToastType.TIGGER_PAWTECT_ERROR === BLOCK_SUCCESS) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.c6kn6F);
  } else if (SafetyToastType.TIGGER_PAWTECT_VERIFIED === BLOCK_SUCCESS) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t["7nKAXx"]);
  } else if (SafetyToastType.GENERIC_ERROR === BLOCK_SUCCESS) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.zBpoc7);
  } else if (SafetyToastType.REPORT_TO_MOD_SUCCESS === BLOCK_SUCCESS) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(importDefault(2298).iBypeZ);
  } else if (SafetyToastType.SAFETY_FEEDBACK_SUCCESS === BLOCK_SUCCESS) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.TcFR5k);
  } else if (SafetyToastType.EXISTING_USER_AGE_GATE_SUCCESS === BLOCK_SUCCESS) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["susqq/"]);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["+c5xtT"]);
  }
};
