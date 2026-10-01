// Module ID: 17556
// Function ID: 17557
// Name: GuildRoleSubscriptionGroupDetailsModal
// Dependencies: [32, 19, 17, 17557, 14750, 1074, 21, 4836, 13442, 17552, 9271, 1115, 17558, 4832, 14762, 8053, 17561, 2]
// Exports: default

// Module 17556 (GuildRoleSubscriptionGroupDetailsModal)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Form from "Form" /* 8053 */;
import FormHeaderDefault from "FormHeader" /* 9271 */;
import FormStylesDefault from "FormStyles" /* 13442 */;
import FormSeparatorDefault from "FormSeparator" /* 14762 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 17552 */;
import FormImagePicker from "FormImagePicker" /* 17558 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17561 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17557 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
class Content {
  constructor(arg0) {
    let cover;
    let description;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let items1;
    let setCover;
    let setDescription;
    ({ cover, setCover, description, setDescription } = arg0);
    const tmp = closure_12();
    const tmp2 = FormStylesDefault();
    const obj = RoleSubscriptionSettingsDisabledContext;
    const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
    const obj2 = { children: items };
    const obj3 = { style: tmp2.header, children: intl.string(intl5.t["3S8gA7"]) };
    const tmp4 = FormHeaderDefault;
    intl = intl5.intl;
    items = [React4(tmp4, obj3), , , , ];
    const obj4 = { style: tmp.paddedContainer, children: items1 };
    const obj5 = { style: tmp.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width, previewShape: FormImagePicker.PreviewShape.SQUIRCLE, setImage: setCover, disabled: roleSubscriptionSettingsDisabled, standalone: true, size: 114 };
    const ImagePickerIcon = FormImagePicker.ImagePickerIcon;
    items1 = [React4(ImagePickerIcon, obj5), ];
    const obj6 = { style: tmp.coverDescription, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl5.t["0ng4rB"]) };
    const Text = Text_Text.Text;
    intl2 = intl5.intl;
    items1[1] = React4(Text, obj6);
    items[1] = authStore(View, obj4);
    const obj7 = { style: tmp.paddedContainer };
    items[2] = React4(FormSeparatorDefault, obj7);
    const obj8 = { style: tmp2.header, children: intl3.string(intl5.t["74JctW"]) };
    const tmp5 = FormHeaderDefault;
    intl3 = intl5.intl;
    items[3] = React4(tmp5, obj8);
    const obj9 = { style: tmp2.textInput, showTopContainer: false, multiline: true, maxLength: metroImportDefault, numberOfLines: 3, value: description, placeholder: intl4.string(intl5.t["3YHwoG"]), onChange: setDescription, disabled: roleSubscriptionSettingsDisabled };
    const FormInput = Form.FormInput;
    intl4 = intl5.intl;
    items[4] = React4(FormInput, obj9);
    return authStore(unpackModuleId, obj2);
  }
}
const View = react_native.View;
({ GuildRoleSubscriptionsTierScenes: metroRequire, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: metroImportDefault } = GuildRoleSubscriptionsConstants);
const UPLOAD_BANNER_SIZE = Constants.UPLOAD_BANNER_SIZE;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ coverPhoto: { height: 114, width: "100%" }, coverDescription: { marginTop: 16 }, paddedContainer: { paddingHorizontal: 16 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupDetailsModal.tsx");

export default function GuildRoleSubscriptionTierDetailsModal(arg0) {
  let first;
  let intl;
  let intl2;
  let obj2;
  let tmp2;
  let tmp3;
  let tmp5;
  [tmp2, tmp3] = RoleTierEditStore.useGroupCoverState();
  _slicedToArray(RoleTierEditStore.useGroupCoverState(), 2);
  [first, tmp5] = RoleTierEditStore.useGroupDescriptionState();
  const tmp6 = first.length > 0 && null != tmp2;
  const obj = { title: intl.string(intl5.t.EPOLQD), description: intl2.string(intl5.t["LeAm+L"]), canProceedToNextStep: tmp6, nextStep: metroRequire.DETAILS, children: React4(Content, obj2) };
  const tmp8 = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl5.intl;
  intl2 = intl5.intl;
  const merged = Object.assign(arg0);
  obj2 = { cover: tmp2, setCover: tmp3, description: first, setDescription: tmp5 };
  const merged1 = Object.assign(arg0);
  return React4(tmp8, obj);
};
export { Content };
