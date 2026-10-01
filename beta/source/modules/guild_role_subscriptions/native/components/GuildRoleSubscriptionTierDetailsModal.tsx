// Module ID: 17597
// Function ID: 17598
// Name: GuildRoleSubscriptionTierDetailsModal
// Dependencies: [32, 19, 14750, 1074, 21, 13442, 17569, 14772, 14757, 17552, 9271, 1115, 17558, 8053, 1177, 17598, 17561, 2]
// Exports: default

// Module 17597 (GuildRoleSubscriptionTierDetailsModal)
import Constants from "Constants" /* 1074 */;
import intl8 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import FormHeaderDefault from "FormHeader" /* 9271 */;
import FormStylesDefault from "FormStyles" /* 13442 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 14757 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14772 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 17552 */;
import FormImagePicker from "FormImagePicker" /* 17558 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17561 */;
import EditStateContextProvider from "EditStateContextProvider" /* 17569 */;
import FormPriceTierDefault from "FormPriceTier" /* 17598 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const FormImagePickerDefault = FormImagePicker;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function Content() {
  let closure_129_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp7;
  let tmp8;
  const tmp3 = FormStylesDefault();
  const obj = EditStateContextProvider;
  const editStateContext = obj.useEditStateContext();
  const editStateId = editStateContext.editStateId;
  const guildId = editStateContext.guildId;
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp7, tmp8] = obj2.useName(editStateId);
  _slicedToArray(obj2.useName(editStateId), 2);
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp10, closure_129_0] = obj3.useImage(editStateId);
  _slicedToArray(obj3.useImage(editStateId), 2);
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp12, tmp13] = obj4.usePriceTier(editStateId);
  _slicedToArray(obj4.usePriceTier(editStateId), 2);
  const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let tmp17 = null;
  [tmp15, tmp16] = obj5.useDescription(editStateId);
  _slicedToArray(obj5.useDescription(editStateId), 2);
  if (null != tmp10) {
    tmp17 = { uri: tmp10 };
    const obj6 = { uri: tmp10 };
  }
  const tmp4Result = GuildRoleSubscriptionsHooks;
  const subscriptionListing = tmp4Result.useSubscriptionListing(editStateId);
  let published;
  if (subscriptionListing != null) {
    published = subscriptionListing.published;
  }
  let tmp20 = true === published;
  const tmp4Result2 = RoleSubscriptionSettingsDisabledContext;
  const roleSubscriptionSettingsDisabled = tmp4Result2.useRoleSubscriptionSettingsDisabled();
  const obj7 = { style: tmp3.header, children: intl.string(intl8.t["6XpbbR"]) };
  const tmpResult = FormHeaderDefault;
  intl = tmp4(1115).intl;
  const items = [React4(tmpResult, obj7), , , , , , , ];
  const obj8 = {
    description: intl2.string(intl8.t.pNZfgG),
    image: tmp17,
    imageUploadSize: UPLOAD_MEDIUM_SIZE,
    previewShape: FormImagePicker.PreviewShape.CIRCLE,
    setImage(uri) {
      return closure_1_0(uri.uri);
    },
    disabled: roleSubscriptionSettingsDisabled
  };
  const tmpResult6 = FormImagePickerDefault;
  intl2 = tmp4(1115).intl;
  items[1] = React4(tmpResult6, obj8);
  const obj9 = { style: tmp3.header, children: intl3.string(intl8.t.rJ6Oad) };
  const tmpResult7 = FormHeaderDefault;
  intl3 = tmp4(1115).intl;
  items[2] = React4(tmpResult7, obj9);
  const obj10 = { style: tmp3.textInput, showTopContainer: false, multiline: false, maxLength: metroImportDefault, value: tmp7, placeholder: intl4.string(intl8.t["i4/g+E"]), onChange: tmp8, autoFocus: true, clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT, disabled: roleSubscriptionSettingsDisabled };
  const FormInput = tmp4(8053).FormInput;
  intl4 = tmp4(1115).intl;
  items[3] = React4(FormInput, obj10);
  const obj11 = { style: tmp3.header, children: intl5.string(intl8.t["74JctW"]) };
  const tmpResult8 = FormHeaderDefault;
  intl5 = tmp4(1115).intl;
  items[4] = React4(tmpResult8, obj11);
  const obj12 = { style: tmp3.textInput, showTopContainer: false, multiline: true, maxLength: metroRequire, numberOfLines: 3, value: tmp15, placeholder: intl6.string(intl8.t["3YHwoG"]), onChange: tmp16, disabled: roleSubscriptionSettingsDisabled };
  const FormInput2 = tmp4(8053).FormInput;
  intl6 = tmp4(1115).intl;
  items[5] = React4(FormInput2, obj12);
  const obj13 = { style: tmp3.header, children: intl7.string(intl8.t.CrRVAx) };
  const tmpResult9 = FormHeaderDefault;
  intl7 = tmp4(1115).intl;
  items[6] = React4(tmpResult9, obj13);
  const tmp22 = unpackModuleId;
  const tmp23 = authStore;
  const tmp24 = React4;
  const tmpResult10 = FormPriceTierDefault;
  if (!tmp20) {
    tmp20 = roleSubscriptionSettingsDisabled;
  }
  const obj14 = { disabled: tmp20, guildId, price: tmp12, onChange: tmp13 };
  const obj15 = { children: items };
  items[7] = tmp24(tmpResult10, obj14);
  return tmp22(tmp23, obj15);
}
({ GuildRoleSubscriptionsTierScenes: hasOwnProperty, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: metroRequire, MAX_SUBSCRIPTION_TIER_NAME_LENGTH: metroImportDefault } = GuildRoleSubscriptionsConstants);
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
const memoResult = react.memo(() => React4(Content, {}));
const map1 = memoResult;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx");

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  let intl;
  let intl2;
  const obj = EditStateContextProvider;
  const editStateId = obj.useEditStateContext().editStateId;
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj2.useName(editStateId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj3.useImage(editStateId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj4.usePriceTier(editStateId), 1)[0];
  let tmp5 = first.length > 0;
  const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first3 = _slicedToArray(obj5.useDescription(editStateId), 1)[0];
  if (tmp5) {
    tmp5 = null != first2;
  }
  if (tmp5) {
    tmp5 = first3.length > 0;
  }
  if (tmp5) {
    tmp5 = null != first1;
  }
  const obj6 = { title: intl.string(intl8.t.o3pHas), description: intl2.string(intl8.t.oOOME5), canProceedToNextStep: tmp5, nextStep: hasOwnProperty.CHANNEL_BENEFITS, children: React4(map1, {}) };
  const tmp8 = GuildRoleSubscriptionTierEditStepDefault;
  intl = tmp(1115).intl;
  intl2 = tmp(1115).intl;
  const merged = Object.assign(arg0);
  return React4(tmp8, obj6);
};
export const GuildRoleSubscriptionTierDetailsTab = memoResult;
