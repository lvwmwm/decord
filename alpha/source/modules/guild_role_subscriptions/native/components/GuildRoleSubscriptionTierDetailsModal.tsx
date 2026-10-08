// Module ID: 18297
// Function ID: 18298
// Name: GuildRoleSubscriptionTierDetailsModal
// Dependencies: [32, 19, 15300, 1085, 21, 558, 576, 13950, 18277, 15322, 15307, 18254, 1126, 8654, 18260, 8555, 1200, 18298, 18261, 2]

// Module 18297 (GuildRoleSubscriptionTierDetailsModal)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1200 */;
import FormStylesDefault from "FormStyles" /* 13950 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15322 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 18261 */;
import EditStateContextProvider from "EditStateContextProvider" /* 18277 */;
import FormPriceTierDefault from "FormPriceTier" /* 18298 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15300 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
let tmp4;
let unpackModuleId;
const intl8 = tmp(1126);
const FormHeaderDefault = tmp4(8654);
const GuildRoleSubscriptionsHooks = tmp(15307);
const RoleSubscriptionSettingsDisabledContext = tmp(18254);
const FormImagePicker = tmp(18260);
const FormImagePickerDefault = tmp4(18260);
({ GuildRoleSubscriptionsTierScenes: hasOwnProperty, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: metroRequire, MAX_SUBSCRIPTION_TIER_NAME_LENGTH: metroImportDefault } = GuildRoleSubscriptionsConstants);
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function Content() {
  let editStateId;
  let guildId;
  let tmp10;
  let tmp13;
  let tmp17;
  let tmp22;
  let tmp9;
  const tmp = require;
  let obj = react2;
  const cResult = obj.c(47);
  const tmp4 = importDefault;
  const tmp5 = FormStylesDefault();
  let obj2 = EditStateContextProvider;
  const editStateContext = obj2.useEditStateContext();
  ({ guildId, editStateId } = editStateContext);
  let obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [r10026, r10027] = _slicedToArray(obj3.useName(editStateId), 2);
  const tmp7 = _slicedToArray(obj3.useName(editStateId), 2);
  let obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp9, tmp10] = _slicedToArray(obj4.useImage(editStateId), 2);
  _require = tmp10;
  const tmp8 = _slicedToArray(obj4.useImage(editStateId), 2);
  let obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [r10040, r10041] = _slicedToArray(obj5.usePriceTier(editStateId), 2);
  const tmp11 = _slicedToArray(obj5.usePriceTier(editStateId), 2);
  const obj6 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [r10047, r10048] = _slicedToArray(obj6.useDescription(editStateId), 2);
  const tmp12 = _slicedToArray(obj6.useDescription(editStateId), 2);
  if (cResult[0] !== tmp9) {
    let tmp14 = null;
    if (null != tmp9) {
      tmp14 = { uri: tmp9 };
      const obj7 = { uri: tmp9 };
    }
    cResult[0] = tmp9;
    cResult[1] = tmp14;
    tmp13 = tmp14;
  } else {
    tmp13 = cResult[1];
  }
  const tmpResult = GuildRoleSubscriptionsHooks;
  const subscriptionListing = tmpResult.useSubscriptionListing(editStateId);
  if (subscriptionListing != null) {
    const published = subscriptionListing.published;
  }
  const tmpResult2 = RoleSubscriptionSettingsDisabledContext;
  const roleSubscriptionSettingsDisabled = tmpResult2.useRoleSubscriptionSettingsDisabled();
  const header = tmp5.header;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl8.intl;
    const stringResult = intl.string(intl8.t["6XpbbR"]);
    cResult[2] = stringResult;
    tmp17 = stringResult;
  } else {
    tmp17 = cResult[2];
  }
  if (cResult[3] !== tmp5.header) {
    const obj8 = { style: header, children: tmp17 };
    const tmp21 = React4(FormHeaderDefault, obj8);
    cResult[3] = tmp5.header;
    cResult[4] = tmp21;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl8.intl;
    const stringResult1 = intl2.string(intl8.t.pNZfgG);
    cResult[5] = stringResult1;
    tmp22 = stringResult1;
  } else {
    tmp22 = cResult[5];
  }
  if (cResult[6] !== tmp10) {
    class B {
      constructor(arg0) {
        return closure_0(arg0.uri);
      }
    }
    cResult[6] = tmp10;
    cResult[7] = B;
  } else {
    class B {
      constructor(arg0) {
        return closure_0(arg0.uri);
      }
    }
  }
  if (cResult[8] === tmp13) {
    class B {
      constructor(arg0) {
        return closure_0(arg0.uri);
      }
    }
  }
  const obj9 = { description: tmp22, image: tmp13, imageUploadSize: UPLOAD_MEDIUM_SIZE, previewShape: FormImagePicker.PreviewShape.CIRCLE, setImage: tmp24, disabled: roleSubscriptionSettingsDisabled };
  const tmp4Result = FormImagePickerDefault;
  cResult[8] = tmp13;
  cResult[9] = roleSubscriptionSettingsDisabled;
  cResult[10] = tmp24;
  cResult[11] = React4(tmp4Result, obj9);
  const tmp26 = React4(tmp4Result, obj9);
}) : (function Content() {
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
  intl = tmp4(1126).intl;
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
  intl2 = tmp4(1126).intl;
  items[1] = React4(tmpResult6, obj8);
  const obj9 = { style: tmp3.header, children: intl3.string(intl8.t.rJ6Oad) };
  const tmpResult7 = FormHeaderDefault;
  intl3 = tmp4(1126).intl;
  items[2] = React4(tmpResult7, obj9);
  const obj10 = { style: tmp3.textInput, showTopContainer: false, multiline: false, maxLength: metroImportDefault, value: tmp7, placeholder: intl4.string(intl8.t["i4/g+E"]), onChange: tmp8, autoFocus: true, clearButtonVisibility: native.ClearButtonVisibility.WITH_CONTENT, disabled: roleSubscriptionSettingsDisabled };
  const FormInput = tmp4(8555).FormInput;
  intl4 = tmp4(1126).intl;
  items[3] = React4(FormInput, obj10);
  const obj11 = { style: tmp3.header, children: intl5.string(intl8.t["74JctW"]) };
  const tmpResult8 = FormHeaderDefault;
  intl5 = tmp4(1126).intl;
  items[4] = React4(tmpResult8, obj11);
  const obj12 = { style: tmp3.textInput, showTopContainer: false, multiline: true, maxLength: metroRequire, numberOfLines: 3, value: tmp15, placeholder: intl6.string(intl8.t["3YHwoG"]), onChange: tmp16, disabled: roleSubscriptionSettingsDisabled };
  const FormInput2 = tmp4(8555).FormInput;
  intl6 = tmp4(1126).intl;
  items[5] = React4(FormInput2, obj12);
  const obj13 = { style: tmp3.header, children: intl7.string(intl8.t.CrRVAx) };
  const tmpResult9 = FormHeaderDefault;
  intl7 = tmp4(1126).intl;
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
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierDetailsTab() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = React4(closure_12, {});
    cResult[0] = tmp5;
    first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function GuildRoleSubscriptionTierDetailsTab() {
  return React4(closure_12, {});
}));
const map1 = memoResult;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierDetailsModal(arg0) {
  let tmp10;
  let tmp13;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(6);
  const obj2 = EditStateContextProvider;
  const editStateId = obj2.useEditStateContext().editStateId;
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj3.useName(editStateId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj4.useImage(editStateId), 1)[0];
  const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj5.usePriceTier(editStateId), 1)[0];
  let tmp6 = first.length > 0;
  const obj6 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first3 = _slicedToArray(obj6.useDescription(editStateId), 1)[0];
  if (tmp6) {
    tmp6 = null != first2;
  }
  if (tmp6) {
    tmp6 = first3.length > 0;
  }
  if (tmp6) {
    tmp6 = null != first1;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl8.t.o3pHas);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl8.t.oOOME5);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp10 = stringResult1;
    tmp9 = stringResult;
  } else {
    [tmp9, tmp10] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = React4(map1, {});
    cResult[2] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === tmp6) {
    let tmp17;
    if (cResult[4] === arg0) {
      tmp17 = cResult[5];
    }
    return tmp17;
  }
  const obj7 = { title: tmp9, description: tmp10, canProceedToNextStep: tmp6, nextStep: hasOwnProperty.CHANNEL_BENEFITS, children: tmp13 };
  const tmp18 = GuildRoleSubscriptionTierEditStepDefault;
  const merged = Object.assign(arg0);
  const tmp20 = React4(tmp18, obj7);
  cResult[3] = tmp6;
  cResult[4] = arg0;
  cResult[5] = tmp20;
  tmp17 = tmp20;
}) : (function GuildRoleSubscriptionTierDetailsModal(arg0) {
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
  intl = tmp(1126).intl;
  intl2 = tmp(1126).intl;
  const merged = Object.assign(arg0);
  return React4(tmp8, obj6);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx");

export default tmp6;
export const GuildRoleSubscriptionTierDetailsTab = memoResult;
