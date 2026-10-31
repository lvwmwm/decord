// Module ID: 19980
// Function ID: 19981
// Name: GuildRoleSubscriptionTierDetailsModal
// Dependencies: [32, 19, 17, 17183, 1072, 21, 19943, 19953, 17203, 17190, 19938, 7060, 1113, 19944, 7082, 7253, 19981, 19945, 2]
// Exports: default

// Module 19980 (GuildRoleSubscriptionTierDetailsModal)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl8 from "intl" /* 1113 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 17190 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17203 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 19938 */;
import FormStylesDefault from "FormStyles" /* 19943 */;
import FormImagePicker from "FormImagePicker" /* 19944 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19945 */;
import EditStateContextProvider from "EditStateContextProvider" /* 19953 */;
import FormPriceTierDefault from "FormPriceTier" /* 19981 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17183 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const FormImagePickerDefault = FormImagePicker;

let c10;
let metroImportAll;
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
  let items;
  let items1;
  let obj14;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp7;
  let tmp8;
  let tmpResult2;
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
  const obj7 = { style: tmp3.container, children: items1 };
  const obj8 = { children: items };
  const obj9 = { title: intl.string(intl8.t["6XpbbR"]) };
  const TableRowGroupTitle = tmp4(7060).TableRowGroupTitle;
  intl = tmp4(1113).intl;
  items = [authStore(TableRowGroupTitle, obj9), ];
  const obj10 = {
    description: intl2.string(intl8.t.pNZfgG),
    image: tmp17,
    imageUploadSize: UPLOAD_MEDIUM_SIZE,
    previewShape: FormImagePicker.PreviewShape.CIRCLE,
    setImage(uri) {
      return closure_1_0(uri.uri);
    },
    disabled: roleSubscriptionSettingsDisabled
  };
  const tmpResult = FormImagePickerDefault;
  intl2 = tmp4(1113).intl;
  items[1] = authStore(tmpResult, obj10);
  items1 = [unpackModuleId(View, obj8), , , ];
  const obj11 = { label: intl3.string(intl8.t.rJ6Oad), maxLength: metroImportAll, value: tmp7, placeholder: intl4.string(intl8.t["i4/g+E"]), onChange: tmp8, returnKeyType: "done", clearable: true, disabled: roleSubscriptionSettingsDisabled };
  const TextInput = tmp4(7082).TextInput;
  intl3 = tmp4(1113).intl;
  intl4 = tmp4(1113).intl;
  items1[1] = authStore(TextInput, obj11);
  const obj12 = { label: intl5.string(intl8.t["74JctW"]), maxLength: metroImportDefault, value: tmp15, placeholder: intl6.string(intl8.t["3YHwoG"]), onChange: tmp16, disabled: roleSubscriptionSettingsDisabled };
  const TextArea = tmp4(7253).TextArea;
  intl5 = tmp4(1113).intl;
  intl6 = tmp4(1113).intl;
  items1[2] = authStore(TextArea, obj12);
  const obj13 = { title: intl7.string(intl8.t.CrRVAx), hasIcons: false, children: authStore(tmpResult2, obj14) };
  const TableRowGroup = tmp4(7060).TableRowGroup;
  intl7 = tmp4(1113).intl;
  const tmp22 = unpackModuleId;
  const tmp23 = View;
  tmpResult2 = FormPriceTierDefault;
  if (!tmp20) {
    tmp20 = roleSubscriptionSettingsDisabled;
  }
  obj14 = { disabled: tmp20, guildId, price: tmp12, onChange: tmp13 };
  items1[3] = authStore(TableRowGroup, obj13);
  return tmp22(tmp23, obj7);
}
const View = react_native.View;
({ GuildRoleSubscriptionsTierScenes: metroRequire, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: metroImportDefault, MAX_SUBSCRIPTION_TIER_NAME_LENGTH: metroImportAll } = GuildRoleSubscriptionsConstants);
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const memoResult = react.memo(function GuildRoleSubscriptionTierDetailsTab() {
  return authStore(Content, {});
});
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
  const obj6 = { title: intl.string(intl8.t.o3pHas), description: intl2.string(intl8.t.oOOME5), canProceedToNextStep: tmp5, nextStep: metroRequire.CHANNEL_BENEFITS, children: authStore(map1, {}) };
  const tmp8 = GuildRoleSubscriptionTierEditStepDefault;
  intl = tmp(1113).intl;
  intl2 = tmp(1113).intl;
  const merged = Object.assign(arg0);
  return authStore(tmp8, obj6);
};
export const GuildRoleSubscriptionTierDetailsTab = memoResult;
