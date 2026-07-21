// Module ID: 13607
// Function ID: 103104
// Name: result
// Dependencies: []

// Module 13607 (result)
let closure_2 = require(dependencyMap[0]).ExplicitContentFilterTypes;
const AllFriendSourceFlags = require(dependencyMap[1]).AllFriendSourceFlags;
const _module = require(dependencyMap[2]);
let obj = { comparator: importDefault(dependencyMap[4]) };
const result = _module.defineParentalControlledSetting("textAndImages", "explicitContentSettings", require(dependencyMap[3]).explicitContentFromProto, require(dependencyMap[3]).explicitContentToProto, obj);
const _module1 = require(dependencyMap[2]);
const result1 = _module1.defineParentalControlledSetting("textAndImages", "explicitContentFilter", (value) => {
  let NON_FRIENDS;
  if (null != value) {
    NON_FRIENDS = value.value;
  }
  if (null == NON_FRIENDS) {
    NON_FRIENDS = constants.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = require(dependencyMap[5]).UInt32Value;
  return UInt32Value.create({ value });
});
const _module2 = require(dependencyMap[2]);
obj = { comparator: importDefault(dependencyMap[4]) };
const result2 = _module2.defineParentalControlledSetting("textAndImages", "goreContentSettings", require(dependencyMap[3]).goreContentFromProto, require(dependencyMap[3]).goreContentToProto, obj);
const _module3 = require(dependencyMap[2]);
const result3 = _module3.defineParentalControlledSetting("privacy", "defaultMessageRequestRestricted", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = require(dependencyMap[5]).BoolValue;
  return BoolValue.create({ value });
});
const _module4 = require(dependencyMap[2]);
const result4 = _module4.defineParentalControlledSetting("privacy", "defaultGuildsRestricted", (arg0) => null != arg0 && arg0, (arg0) => arg0);
const _module5 = require(dependencyMap[2]);
const result5 = _module5.defineParentalControlledSetting("privacy", "defaultGuildsRestrictedV2", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = require(dependencyMap[5]).BoolValue;
  return BoolValue.create({ value });
});
const _module6 = require(dependencyMap[2]);
const result6 = _module6.defineParentalControlledSetting("privacy", "friendSourceFlags", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  if (null == value) {
    value = AllFriendSourceFlags;
  }
  return value;
}, (value) => {
  const UInt32Value = require(dependencyMap[5]).UInt32Value;
  return UInt32Value.create({ value });
});
const _module7 = require(dependencyMap[2]);
const result7 = _module7.defineParentalControlledSetting("privacy", "dropsOptedOut", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = require(dependencyMap[5]).BoolValue;
  return BoolValue.create({ value });
});
const _module8 = require(dependencyMap[2]);
const result8 = _module8.defineParentalControlledSetting("privacy", "quests3PDataOptedOut", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = require(dependencyMap[5]).BoolValue;
  return BoolValue.create({ value });
});
const _module9 = require(dependencyMap[2]);
const result9 = _module9.defineParentalControlledSetting("safetySettings", "spendingLimitSettings", (oneTimePurchaseLimit) => {
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
    const SpendingLimitSettings2 = require(dependencyMap[6]).SpendingLimitSettings;
    return SpendingLimitSettings2.create({});
  } else {
    ({ amount, currency } = arg0);
    const SpendingLimitSettings = require(dependencyMap[6]).SpendingLimitSettings;
    let obj = {};
    const SpendingLimit = require(dependencyMap[6]).SpendingLimit;
    obj = {};
    const _String = String;
    obj.amount = String(amount);
    obj.currency = currency;
    obj.oneTimePurchaseLimit = SpendingLimit.create(obj);
    return SpendingLimitSettings.create(obj);
  }
}, { comparator: require(dependencyMap[7]).spendingLimitEqual });
const _module10 = require(dependencyMap[8]);
const result10 = _module10.fileFinishedImporting("modules/user_settings/family_center/ParentalControlledUserSettings.tsx");

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
