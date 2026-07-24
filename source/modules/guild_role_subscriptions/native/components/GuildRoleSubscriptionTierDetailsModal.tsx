// Module ID: 16511
// Function ID: 128612
// Name: Content
// Dependencies: [57, 31, 14144, 653, 33, 12957, 16483, 14166, 14151, 16466, 8521, 1212, 16472, 7636, 1273, 16512, 16475, 2]
// Exports: default

// Module 16511 (Content)
import _slicedToArray from "_slicedToArray";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";
import { UPLOAD_MEDIUM_SIZE } from "ME";
import jsxProd from "jsxProd";
import importAllResult from "result";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
function Content() {
  let require;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  const tmp = importDefault(12957)();
  let obj = require(16483) /* useEditStateContext */;
  const editStateContext = obj.useEditStateContext();
  const editStateId = editStateContext.editStateId;
  let obj1 = importAll(14166);
  [tmp4, tmp5] = callback(obj1.useName(editStateId), 2);
  let obj2 = importAll(14166);
  const tmp3 = callback(obj1.useName(editStateId), 2);
  [tmp7, require] = callback(obj2.useImage(editStateId), 2);
  let obj3 = importAll(14166);
  const tmp6 = callback(obj2.useImage(editStateId), 2);
  [tmp9, tmp10] = callback(obj3.usePriceTier(editStateId), 2);
  let obj4 = importAll(14166);
  const tmp8 = callback(obj3.usePriceTier(editStateId), 2);
  let tmp14 = null;
  [tmp12, tmp13] = callback(obj4.useDescription(editStateId), 2);
  if (null != tmp7) {
    obj = { uri: tmp7 };
    tmp14 = obj;
  }
  let obj6 = require(14151) /* _createForOfIteratorHelperLoose */;
  const subscriptionListing = obj6.useSubscriptionListing(editStateId);
  let published;
  if (null != subscriptionListing) {
    published = subscriptionListing.published;
  }
  let tmp17 = true === published;
  let obj7 = require(16466) /* useRoleSubscriptionSettingsDisabled */;
  const roleSubscriptionSettingsDisabled = obj7.useRoleSubscriptionSettingsDisabled();
  obj = {};
  obj1 = { style: tmp.header };
  const tmp11 = callback(obj4.useDescription(editStateId), 2);
  const tmp19 = closure_11;
  const tmp20 = closure_10;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t["6XpbbR"]);
  const items = [callback2(importDefault(8521), obj1), , , , , , , ];
  obj2 = {};
  const tmp21 = importDefault(8521);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.description = intl2.string(require(1212) /* getSystemLocale */.t.pNZfgG);
  obj2.image = tmp14;
  obj2.imageUploadSize = UPLOAD_MEDIUM_SIZE;
  obj2.previewShape = require(16472) /* pickImage */.PreviewShape.CIRCLE;
  obj2.setImage = function setImage(uri) {
    return callback(uri.uri);
  };
  obj2.disabled = roleSubscriptionSettingsDisabled;
  items[1] = callback2(importDefault(16472), obj2);
  obj3 = { style: tmp.header };
  const tmp22 = importDefault(16472);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl3.string(require(1212) /* getSystemLocale */.t.rJ6Oad);
  items[2] = callback2(importDefault(8521), obj3);
  obj4 = { style: tmp.textInput, showTopContainer: false, multiline: false, maxLength: closure_7, value: tmp4 };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj4.placeholder = intl4.string(require(1212) /* getSystemLocale */.t["i4/g+E"]);
  obj4.onChange = tmp5;
  obj4.autoFocus = true;
  obj4.clearButtonVisibility = require(1273) /* Button */.ClearButtonVisibility.WITH_CONTENT;
  obj4.disabled = roleSubscriptionSettingsDisabled;
  items[3] = callback2(require(7636) /* Form */.FormInput, obj4);
  const obj5 = { style: tmp.header };
  const tmp23 = importDefault(8521);
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl5.string(require(1212) /* getSystemLocale */.t["74JctW"]);
  items[4] = callback2(importDefault(8521), obj5);
  obj6 = { style: tmp.textInput, showTopContainer: false, multiline: true, maxLength: closure_6, numberOfLines: 3, value: tmp12 };
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj6.placeholder = intl6.string(require(1212) /* getSystemLocale */.t["3YHwoG"]);
  obj6.onChange = tmp13;
  obj6.disabled = roleSubscriptionSettingsDisabled;
  items[5] = callback2(require(7636) /* Form */.FormInput, obj6);
  obj7 = { style: tmp.header };
  const tmp24 = importDefault(8521);
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj7.children = intl7.string(require(1212) /* getSystemLocale */.t.CrRVAx);
  items[6] = callback2(importDefault(8521), obj7);
  const obj8 = {};
  const tmp25 = importDefault(8521);
  const tmp26 = callback2;
  if (!tmp17) {
    tmp17 = roleSubscriptionSettingsDisabled;
  }
  obj8.disabled = tmp17;
  obj8.guildId = editStateContext.guildId;
  let tmp28 = null;
  if (null != tmp9) {
    tmp28 = tmp9;
  }
  obj8.price = tmp28;
  obj8.onChange = tmp10;
  items[7] = tmp26(importDefault(16512), obj8);
  obj.children = items;
  return tmp19(tmp20, obj);
}
({ GuildRoleSubscriptionsTierScenes: closure_5, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: closure_6, MAX_SUBSCRIPTION_TIER_NAME_LENGTH: closure_7 } = MAX_SUBSCRIPTION_TIERS);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
const memoResult = require("result").memo(() => callback2(Content, {}));
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx");

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  let obj = require(16483) /* useEditStateContext */;
  const editStateId = obj.useEditStateContext().editStateId;
  const obj2 = importAll(14166);
  const obj3 = importAll(14166);
  const obj4 = importAll(14166);
  let tmp = callback(obj2.useName(editStateId), 1)[0].length > 0;
  if (tmp) {
    tmp = null != callback(obj4.usePriceTier(editStateId), 1)[0];
  }
  if (tmp) {
    tmp = callback(obj5.useDescription(editStateId), 1)[0].length > 0;
  }
  if (tmp) {
    tmp = null != callback(obj3.useImage(editStateId), 1)[0];
  }
  obj = {};
  obj5 = importAll(14166);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.o3pHas);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t.oOOME5);
  obj.canProceedToNextStep = tmp;
  obj.nextStep = constants.CHANNEL_BENEFITS;
  obj.scrollable = false;
  const merged = Object.assign(arg0);
  obj["children"] = callback2(closure_12, {});
  return callback2(importDefault(16475), obj);
};
export const GuildRoleSubscriptionTierDetailsTab = memoResult;
