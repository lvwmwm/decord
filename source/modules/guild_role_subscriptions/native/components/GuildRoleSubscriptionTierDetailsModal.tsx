// Module ID: 16331
// Function ID: 126011
// Name: Content
// Dependencies: []
// Exports: default

// Module 16331 (Content)
function Content() {
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  const tmp = importDefault(dependencyMap[5])();
  let obj = arg1(dependencyMap[6]);
  const editStateContext = obj.useEditStateContext();
  const editStateId = editStateContext.editStateId;
  let obj1 = importAll(dependencyMap[7]);
  [tmp4, tmp5] = callback(obj1.useName(editStateId), 2);
  let obj2 = importAll(dependencyMap[7]);
  const tmp3 = callback(obj1.useName(editStateId), 2);
  [tmp7, closure_0] = callback(obj2.useImage(editStateId), 2);
  let obj3 = importAll(dependencyMap[7]);
  const tmp6 = callback(obj2.useImage(editStateId), 2);
  [tmp9, tmp10] = callback(obj3.usePriceTier(editStateId), 2);
  let obj4 = importAll(dependencyMap[7]);
  const tmp8 = callback(obj3.usePriceTier(editStateId), 2);
  let tmp14 = null;
  [tmp12, tmp13] = callback(obj4.useDescription(editStateId), 2);
  if (null != tmp7) {
    obj = { uri: tmp7 };
    tmp14 = obj;
  }
  let obj6 = arg1(dependencyMap[8]);
  const subscriptionListing = obj6.useSubscriptionListing(editStateId);
  let published;
  if (null != subscriptionListing) {
    published = subscriptionListing.published;
  }
  let tmp17 = true === published;
  let obj7 = arg1(dependencyMap[9]);
  const roleSubscriptionSettingsDisabled = obj7.useRoleSubscriptionSettingsDisabled();
  obj = {};
  obj1 = { style: tmp.header };
  const tmp11 = callback(obj4.useDescription(editStateId), 2);
  const tmp19 = closure_11;
  const tmp20 = closure_10;
  const intl = arg1(dependencyMap[11]).intl;
  obj1.children = intl.string(arg1(dependencyMap[11]).t.6XpbbR);
  const items = [callback2(importDefault(dependencyMap[10]), obj1), , , , , , , ];
  obj2 = {};
  const tmp21 = importDefault(dependencyMap[10]);
  const intl2 = arg1(dependencyMap[11]).intl;
  obj2.description = intl2.string(arg1(dependencyMap[11]).t.pNZfgG);
  obj2.image = tmp14;
  obj2.imageUploadSize = UPLOAD_MEDIUM_SIZE;
  obj2.previewShape = arg1(dependencyMap[12]).PreviewShape.CIRCLE;
  obj2.setImage = function setImage(uri) {
    return callback(uri.uri);
  };
  obj2.disabled = roleSubscriptionSettingsDisabled;
  items[1] = callback2(importDefault(dependencyMap[12]), obj2);
  obj3 = { style: tmp.header };
  const tmp22 = importDefault(dependencyMap[12]);
  const intl3 = arg1(dependencyMap[11]).intl;
  obj3.children = intl3.string(arg1(dependencyMap[11]).t.rJ6Oad);
  items[2] = callback2(importDefault(dependencyMap[10]), obj3);
  obj4 = { "Null": "postal-address-country", "Null": "password", "Null": "email", style: tmp.textInput, maxLength: closure_7, value: tmp4 };
  const intl4 = arg1(dependencyMap[11]).intl;
  obj4.placeholder = intl4.string(arg1(dependencyMap[11]).t.i4/g+E);
  obj4.onChange = tmp5;
  obj4.autoFocus = true;
  obj4.clearButtonVisibility = arg1(dependencyMap[14]).ClearButtonVisibility.WITH_CONTENT;
  obj4.disabled = roleSubscriptionSettingsDisabled;
  items[3] = callback2(arg1(dependencyMap[13]).FormInput, obj4);
  const obj5 = { style: tmp.header };
  const tmp23 = importDefault(dependencyMap[10]);
  const intl5 = arg1(dependencyMap[11]).intl;
  obj5.children = intl5.string(arg1(dependencyMap[11]).t.74JctW);
  items[4] = callback2(importDefault(dependencyMap[10]), obj5);
  obj6 = { "Null": null, "Null": "text-sm/medium", "Null": "text-default", "Null": true, "Null": "no-hide-descendants", style: tmp.textInput, maxLength: closure_6, value: tmp12 };
  const intl6 = arg1(dependencyMap[11]).intl;
  obj6.placeholder = intl6.string(arg1(dependencyMap[11]).t.3YHwoG);
  obj6.onChange = tmp13;
  obj6.disabled = roleSubscriptionSettingsDisabled;
  items[5] = callback2(arg1(dependencyMap[13]).FormInput, obj6);
  obj7 = { style: tmp.header };
  const tmp24 = importDefault(dependencyMap[10]);
  const intl7 = arg1(dependencyMap[11]).intl;
  obj7.children = intl7.string(arg1(dependencyMap[11]).t.CrRVAx);
  items[6] = callback2(importDefault(dependencyMap[10]), obj7);
  const obj8 = {};
  const tmp25 = importDefault(dependencyMap[10]);
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
  items[7] = tmp26(importDefault(dependencyMap[15]), obj8);
  obj.children = items;
  return tmp19(tmp20, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ GuildRoleSubscriptionsTierScenes: closure_5, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: closure_6, MAX_SUBSCRIPTION_TIER_NAME_LENGTH: closure_7 } = arg1(dependencyMap[2]));
const UPLOAD_MEDIUM_SIZE = arg1(dependencyMap[3]).UPLOAD_MEDIUM_SIZE;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[4]));
const memoResult = importAllResult.memo(() => callback2(Content, {}));
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx");

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  let obj = arg1(dependencyMap[6]);
  const editStateId = obj.useEditStateContext().editStateId;
  const obj2 = importAll(dependencyMap[7]);
  const obj3 = importAll(dependencyMap[7]);
  const obj4 = importAll(dependencyMap[7]);
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
  const obj5 = importAll(dependencyMap[7]);
  const intl = arg1(dependencyMap[11]).intl;
  obj.title = intl.string(arg1(dependencyMap[11]).t.o3pHas);
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.description = intl2.string(arg1(dependencyMap[11]).t.oOOME5);
  obj.canProceedToNextStep = tmp;
  obj.nextStep = constants.CHANNEL_BENEFITS;
  obj.scrollable = false;
  const merged = Object.assign(arg0);
  obj["children"] = callback2(memoResult, {});
  return callback2(importDefault(dependencyMap[16]), obj);
};
export const GuildRoleSubscriptionTierDetailsTab = memoResult;
