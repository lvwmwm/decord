// Module ID: 13728
// Function ID: 105293
// Name: result
// Dependencies: [3805, 653, 13729, 3803, 620, 1313, 1282, 13730, 2]

// Module 13728 (result)
import { ExplicitContentFilterTypes as closure_2 } from "items";
import { AllFriendSourceFlags } from "ME";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";
import defineParentalControlledSetting from "defineParentalControlledSetting";

let obj = { comparator: require("shallowEqual") };
const result = defineParentalControlledSetting.defineParentalControlledSetting("textAndImages", "explicitContentSettings", require("explicitContentFromProto").explicitContentFromProto, require("explicitContentFromProto").explicitContentToProto, obj);
const result1 = defineParentalControlledSetting.defineParentalControlledSetting("textAndImages", "explicitContentFilter", (value) => {
  let NON_FRIENDS;
  if (null != value) {
    NON_FRIENDS = value.value;
  }
  if (null == NON_FRIENDS) {
    NON_FRIENDS = constants.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = require(1313) /* _callSuper */.UInt32Value;
  return UInt32Value.create({ value });
});
obj = { comparator: require("shallowEqual") };
const result2 = defineParentalControlledSetting.defineParentalControlledSetting("textAndImages", "goreContentSettings", require("explicitContentFromProto").goreContentFromProto, require("explicitContentFromProto").goreContentToProto, obj);
const result3 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "defaultMessageRequestRestricted", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = require(1313) /* _callSuper */.BoolValue;
  return BoolValue.create({ value });
});
const result4 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "defaultGuildsRestricted", (arg0) => null != arg0 && arg0, (arg0) => arg0);
const result5 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "defaultGuildsRestrictedV2", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = require(1313) /* _callSuper */.BoolValue;
  return BoolValue.create({ value });
});
const result6 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "friendSourceFlags", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  if (null == value) {
    value = AllFriendSourceFlags;
  }
  return value;
}, (value) => {
  const UInt32Value = require(1313) /* _callSuper */.UInt32Value;
  return UInt32Value.create({ value });
});
const result7 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "dropsOptedOut", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = require(1313) /* _callSuper */.BoolValue;
  return BoolValue.create({ value });
});
const result8 = defineParentalControlledSetting.defineParentalControlledSetting("privacy", "quests3PDataOptedOut", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = require(1313) /* _callSuper */.BoolValue;
  return BoolValue.create({ value });
});
const result9 = defineParentalControlledSetting.defineParentalControlledSetting("safetySettings", "spendingLimitSettings", (oneTimePurchaseLimit) => {
  oneTimePurchaseLimit = undefined;
  if (null != oneTimePurchaseLimit) {
    oneTimePurchaseLimit = oneTimePurchaseLimit.oneTimePurchaseLimit;
  }
  let tmp2 = null;
  if (null != oneTimePurchaseLimit) {
    const obj = {};
    const _Number = Number;
    obj.amount = Number(oneTimePurchaseLimit.amount);
    obj.currency = oneTimePurchaseLimit.currency;
    tmp2 = obj;
  }
  return tmp2;
}, (arg0) => {
  let amount;
  let currency;
  if (null == arg0) {
    const SpendingLimitSettings2 = require(1282) /* _callSuper */.SpendingLimitSettings;
    return SpendingLimitSettings2.create({});
  } else {
    ({ amount, currency } = arg0);
    const SpendingLimitSettings = require(1282) /* _callSuper */.SpendingLimitSettings;
    let obj = {};
    const SpendingLimit = require(1282) /* _callSuper */.SpendingLimit;
    obj = {};
    const _String = String;
    obj.amount = String(amount);
    obj.currency = currency;
    obj.oneTimePurchaseLimit = SpendingLimit.create(obj);
    return SpendingLimitSettings.create(obj);
  }
}, { comparator: require("spendingLimitEqual").spendingLimitEqual });
const obj1 = { comparator: require("spendingLimitEqual").spendingLimitEqual };
const result10 = require("defineParentalControlledSetting").fileFinishedImporting("modules/user_settings/family_center/ParentalControlledUserSettings.tsx");

export const ParentalControlledExplicitContent = result;
export const ParentalControlledLegacyExplicitContent = result1;
export const ParentalControlledGoreContent = result2;
export const ParentalControlledDefaultMessageRequestRestricted = result3;
export const ParentalControlledDefaultGuildsRestricted = result4;
export const ParentalControlledDefaultGuildsRestrictedV2 = result5;
export const ParentalControlledFriendSourceFlags = result6;
export const ParentalControlledDropsOptedOut = result7;
export const ParentalControlledQuests3PDataOptedOut = result8;
export const ParentalControlledSpendingLimit = result9;
