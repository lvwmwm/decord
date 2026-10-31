// Module ID: 19941
// Function ID: 19942
// Name: GuildRoleSubscriptionGroupDetailsModal
// Dependencies: [32, 19, 17, 19942, 17183, 1072, 21, 5014, 575, 19943, 19938, 7060, 1113, 19944, 5624, 17195, 7253, 19945, 2]
// Exports: default

// Module 19941 (GuildRoleSubscriptionGroupDetailsModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import TableRowGroup from "TableRowGroup" /* 7060 */;
import TextArea2 from "TextArea" /* 7253 */;
import FormSeparatorDefault from "FormSeparator" /* 17195 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 19938 */;
import FormStylesDefault from "FormStyles" /* 19943 */;
import FormImagePicker from "FormImagePicker" /* 19944 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 19945 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19942 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17183 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
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
    const tmp = closure_11();
    const tmp2 = FormStylesDefault();
    const obj = RoleSubscriptionSettingsDisabledContext;
    const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
    const obj2 = { style: tmp2.container, children: items1 };
    const obj3 = { children: items };
    const obj4 = { title: intl.string(intl5.t["3S8gA7"]) };
    const TableRowGroupTitle = TableRowGroup.TableRowGroupTitle;
    intl = intl5.intl;
    items = [React4(TableRowGroupTitle, obj4), , ];
    const obj5 = { style: tmp.coverPhoto, image: cover, imageUploadSize: UPLOAD_BANNER_SIZE.width, previewShape: FormImagePicker.PreviewShape.SQUIRCLE, setImage: setCover, disabled: roleSubscriptionSettingsDisabled, standalone: true, size: 114 };
    const ImagePickerIcon = FormImagePicker.ImagePickerIcon;
    items[1] = React4(ImagePickerIcon, obj5);
    const obj6 = { style: tmp.coverDescription, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl5.t["0ng4rB"]) };
    const Text = Text_Text.Text;
    intl2 = intl5.intl;
    items[2] = React4(Text, obj6);
    items1 = [authStore(View, obj3), React4(FormSeparatorDefault, { withoutMargins: true }), ];
    const obj7 = { label: intl3.string(intl5.t["74JctW"]), maxLength: metroImportDefault, value: description, placeholder: intl4.string(intl5.t["3YHwoG"]), onChange: setDescription, disabled: roleSubscriptionSettingsDisabled };
    const TextArea = TextArea2.TextArea;
    intl3 = intl5.intl;
    intl4 = intl5.intl;
    items1[2] = React4(TextArea, obj7);
    return authStore(View, obj2);
  }
}
const View = react_native.View;
({ GuildRoleSubscriptionsTierScenes: metroRequire, MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH: metroImportDefault } = GuildRoleSubscriptionsConstants);
const UPLOAD_BANNER_SIZE = Constants.UPLOAD_BANNER_SIZE;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { coverPhoto: { height: 114, width: "100%" }, coverDescription: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_16 };
const unpackModuleId = createStyles.createStyles(obj);
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
