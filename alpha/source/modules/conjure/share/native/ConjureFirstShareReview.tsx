// Module ID: 18431
// Function ID: 18432
// Name: ConjureFirstShareReview
// Dependencies: [19, 17, 21, 9782, 6915, 6501, 12108, 18043, 18432, 10010, 6921, 4792, 575, 5474, 7585, 18325, 18327, 7102, 1113, 4089, 7342, 18428, 5383, 2]
// Exports: default

// Module 18431 (ConjureFirstShareReview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import _modDef4089 from "module_4089" /* 4089 */;
import Text_Text from "Text/Text" /* 5383 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5474 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6501 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 6915 */;
import GameControllerIcon from "GameControllerIcon" /* 6921 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7102 */;
import AppsIcon from "AppsIcon" /* 7585 */;
import ScreenIcon from "ScreenIcon" /* 9782 */;
import ShieldIcon from "ShieldIcon" /* 10010 */;
import RobotIcon from "RobotIcon" /* 12108 */;
import ActivitiesIcon from "ActivitiesIcon" /* 18043 */;
import ConjureManagedCopyStatusDefault from "ConjureManagedCopyStatus" /* 18325 */;
import ConjureAppIdentity from "ConjureAppIdentity" /* 18327 */;
import useConjureFirstShareReview from "useConjureFirstShareReview" /* 18428 */;
import BadgeIcon from "BadgeIcon" /* 18432 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj4;
let obj5;
let obj6;
function SectionTitle(title) {
  title = title.title;
  obj = { variant: "body-sm/semibold", color: "text-subtle", accessibilityRole: "header", style: closure_9().sectionTitle, children: title };
  return React3(Text_Text.Text, obj);
}
function RowSection(title) {
  let following;
  let items;
  let rows;
  ({ rows, following } = title);
  title = title.title;
  if (following === undefined) {
    following = false;
  }
  let tmp3Result = null;
  if (0 !== rows.length) {
    const tmp3 = metroRequire;
    const tmp4 = View;
    if (following) {
      following = tmp.followingSection;
    }
    obj = { style: following, children: items };
    obj2 = { title };
    items = [React3(SectionTitle, obj2), rows];
    tmp3Result = tmp3(tmp4, obj);
  }
  return tmp3Result;
}
function ContentRow(arg0) {
  let icon;
  let items;
  let label;
  ({ icon, label } = arg0);
  const tmp = closure_9();
  obj = { style: tmp.row, children: items };
  items = [, ];
  obj2 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
  items[0] = React3(icon, obj2);
  const obj3 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, style: tmp.rowLabel, children: label };
  items[1] = React3(Text_Text.Text, obj3);
  return metroRequire(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { screen_capture: ScreenIcon.ScreenIcon, connect_user_to_voice: VoiceNormalIcon.VoiceNormalIcon };
let obj2 = {};
obj2[ConjureProjectTypes.ConjureSupportedSurface.BOT] = RobotIcon.RobotIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = ActivitiesIcon.ActivitiesIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = VoiceNormalIcon.VoiceNormalIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = BadgeIcon.BadgeIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = ShieldIcon.ShieldIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = GameControllerIcon.GameControllerIcon;
let createStyles = createStyles_mod;
let obj3 = { sectionTitle: obj4, followingSection: obj5, row: obj6, rowLabel: { flex: 1 } };
obj4 = { marginBottom: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj5 = { marginTop: -nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj3);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureFirstShareReview.tsx");

export default function ConjureFirstShareReview(review) {
  let channelNames;
  let components;
  let devicePermissions;
  let identity;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let nameError;
  let tmp8;
  let tmp9;
  let tmpResult;
  review = review.review;
  ({ identity, channelNames } = review);
  const onConjureIcon = review.onConjureIcon;
  const items = [
    ...channelNames.map((label) => {
      obj = { icon: AppsIcon.AppsIcon, label };
      return closure_1_4(ContentRow, obj, "channel:" + label);
    }),
    ...components.map((label) => {
      const surface = label.surface;
      obj = { icon: obj2[surface], label: label.label };
      return closure_1_4(ContentRow, obj, surface);
    })
  ];
  components = review.components;
  if (review.managedCopy) {
    const obj3 = { projectId: review.projectId };
    tmpResult = tmp3(ConjureManagedCopyStatusDefault, obj3);
    tmp8 = importDefault;
    tmp9 = tmp3;
  } else {
    obj = {
      iconURL: identity.iconURL,
      size: 48,
      radius: 12,
      disabled: review.saving,
      onChange: identity.setIcon,
      onError(text) {
          if (null != text) {
            obj2 = { text, variant: "critical" };
            obj = ToastActionCreatorsDefault;
            obj.open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
          }
        },
      onConjure: onConjureIcon
    };
    const items1 = [React3(ConjureAppIdentity.ConjureAppIconTile, obj), , ];
    const obj5 = { label: intl.string(_modDef4089.knevPu), value: null, onChange: null, maxLength: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH, disabled: null, errorMessage: nameError };
    const TextInput = TextInput_TextInput.TextInput;
    intl = intl6.intl;
    ({ name: obj2.value, setName: obj2.onChange } = review);
    ({ saving: obj2.disabled, nameError } = review);
    const obj6 = { children: items1 };
    items1[1] = React3(TextInput, obj5);
    const obj7 = { label: intl2.string(_modDef4089.ynaGa1), placeholder: intl3.string(_modDef4089["I+3UTL"]), value: null, onChange: null, maxLength: ConjureProjectTypes.MAX_APP_DESCRIPTION_LENGTH, disabled: review.saving };
    const TextArea = tmp4(7342).TextArea;
    intl2 = tmp4(1113).intl;
    intl3 = tmp4(1113).intl;
    ({ description: obj4.value, setDescription: obj4.onChange } = identity);
    items1[2] = React3(TextArea, obj7);
    tmp8 = tmp6;
    tmp9 = tmp3;
    tmpResult = tmp(tmp2, obj6);
  }
  const obj8 = { children: items2 };
  items2 = [tmpResult, , ];
  const obj15 = { title: intl4.string(tmp8(4089).BqNMms), rows: items };
  intl4 = intl6.intl;
  items2[1] = tmp9(RowSection, obj15);
  const obj16 = {
    title: intl5.string(tmp8(4089).LnqeFd),
    following: items.length > 0,
    rows: devicePermissions.map((item) => {
      let intl;
      obj = { icon: closure_1_7[item], label: intl.string(useConjureFirstShareReview.CONJURE_REVIEW_PERMISSION_LABELS[item]) };
      intl = intl6.intl;
      return closure_1_4(ContentRow, obj, item);
    })
  };
  intl5 = intl6.intl;
  devicePermissions = review.devicePermissions;
  items2[2] = tmp9(RowSection, obj16);
  return metroRequire(hasOwnProperty, obj8);
};
