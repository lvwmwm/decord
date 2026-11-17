// Module ID: 14567
// Function ID: 14568
// Name: ConjureFirstShareReview
// Dependencies: [19, 17, 21, 10522, 7442, 7026, 12837, 14568, 14570, 10751, 7448, 5310, 575, 6009, 8111, 8112, 14432, 7629, 1113, 4133, 7869, 14572, 14563, 5923, 5372, 7438, 7744, 2]
// Exports: default

// Module 14567 (ConjureFirstShareReview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import react_native2 from "react-native" /* 5372 */;
import Text_Text from "Text/Text" /* 5923 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7026 */;
import Pressables from "Pressables" /* 7438 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 7442 */;
import GameControllerIcon from "GameControllerIcon" /* 7448 */;
import FormCheckbox from "FormCheckbox" /* 7744 */;
import ScreenIcon from "ScreenIcon" /* 10522 */;
import ShieldIcon from "ShieldIcon" /* 10751 */;
import RobotIcon from "RobotIcon" /* 12837 */;
import ActivitiesIcon from "ActivitiesIcon" /* 14568 */;
import BadgeIcon from "BadgeIcon" /* 14570 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj4;
let obj5;
let obj6;
let obj7;
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
function PrivateCheckbox(appChannelsPrivate) {
  let accessibilityRole;
  let accessibilityState;
  let intl;
  let items;
  appChannelsPrivate = appChannelsPrivate.appChannelsPrivate;
  const isPrivate = appChannelsPrivate.isPrivate;
  const setPrivate = appChannelsPrivate.setPrivate;
  const tmp = closure_9();
  obj = react_native2;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: isPrivate });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj2 = {
    style: tmp.privateCheckbox,
    accessibilityRole,
    accessibilityState,
    onPress() {
      return setPrivate(!isPrivate);
    },
    children: items
  };
  const PressableOpacity = Pressables.PressableOpacity;
  items = [React3(FormCheckbox.FormCheckbox, { checked: isPrivate }), ];
  const obj3 = { variant: "body-md/medium", color: "text-subtle", children: intl.string(_modDef4133.RSyIc9) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  items[1] = React3(Text, obj3);
  return metroRequire(PressableOpacity, obj2);
}
function ContentRow(trailing) {
  let icon;
  let items;
  let label;
  trailing = trailing.trailing;
  ({ icon, label } = trailing);
  if (trailing === undefined) {
    trailing = null;
  }
  const tmp2 = closure_9();
  obj = { style: tmp2.row, children: items };
  items = [, , ];
  obj2 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
  items[0] = React3(icon, obj2);
  const obj3 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, style: tmp2.rowLabel, children: label };
  items[1] = React3(Text_Text.Text, obj3);
  items[2] = trailing;
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
let obj3 = { sectionTitle: obj4, followingSection: obj5, row: obj6, rowLabel: { flex: 1 }, privateCheckbox: obj7 };
obj4 = { marginBottom: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj5 = { marginTop: -nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4 };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj3);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureFirstShareReview.tsx");

export default function ConjureFirstShareReview(review) {
  let appChannelsPrivate;
  let components;
  let devicePermissions;
  let identity;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let nameError;
  let tmp4;
  review = review.review;
  let AppsIcon;
  appChannelsPrivate = undefined;
  ({ identity, appChannelsPrivate } = review);
  let isPrivate;
  const onConjureIcon = review.onConjureIcon;
  if (appChannelsPrivate != null) {
    isPrivate = appChannelsPrivate.isPrivate;
  }
  if (true === isPrivate) {
    AppsIcon = AppsIcon(8111).AppsLockIcon;
    let tmp3 = dependencyMap;
    tmp4 = AppsIcon;
  } else {
    let tmp2 = AppsIcon;
    tmp3 = dependencyMap;
    AppsIcon = AppsIcon(8112).AppsIcon;
    tmp4 = AppsIcon;
  }
  let tmp8 = null;
  if (review.channelNames.length <= 1) {
    tmp8 = appChannelsPrivate;
  }
  appChannelsPrivate = tmp8;
  const channelNames = review.channelNames;
  const items = [
    ...channelNames.map((label) => {
      let tmpResult;
      obj = { icon: AppsIcon, label, trailing: tmpResult };
      tmpResult = null;
      const tmp2 = ContentRow;
      if (null != appChannelsPrivate) {
        obj2 = { appChannelsPrivate: tmp3 };
        tmpResult = tmp(PrivateCheckbox, obj2);
      }
      return React3(tmp2, obj, "channel:" + label);
    }),
    ...components.map((label) => {
      const surface = label.surface;
      obj = { icon: obj2[surface], label: label.label };
      return closure_1_4(ContentRow, obj, surface);
    })
  ];
  components = review.components;
  obj = {
    iconURL: identity.iconURL,
    size: 48,
    radius: 12,
    disabled: review.saving,
    onChange: identity.setIcon,
    onError(text) {
      if (null != text) {
        obj2 = { text, variant: "critical" };
        obj = appChannelsPrivate(dependencyMap[13]);
        obj.open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
      }
    },
    onConjure: onConjureIcon
  };
  const items1 = [closure_4(tmp4(14432).ConjureAppIconTile, obj), , , , , ];
  const obj4 = { label: intl.string(appChannelsPrivate(4133).knevPu), value: null, onChange: null, maxLength: tmp4(7026).MAX_PROJECT_NAME_LENGTH, disabled: null, errorMessage: nameError };
  const TextInput = tmp4(7629).TextInput;
  intl = tmp4(1113).intl;
  ({ name: obj2.value, setName: obj2.onChange } = review);
  ({ saving: obj2.disabled, nameError } = review);
  items1[1] = closure_4(TextInput, obj4);
  const obj6 = { label: intl2.string(appChannelsPrivate(4133).ynaGa1), placeholder: intl3.string(appChannelsPrivate(4133)["I+3UTL"]), value: null, onChange: null, maxLength: tmp4(7026).MAX_APP_DESCRIPTION_LENGTH, disabled: review.saving };
  const TextArea = tmp4(7869).TextArea;
  intl2 = tmp4(1113).intl;
  intl3 = tmp4(1113).intl;
  ({ description: obj3.value, setDescription: obj3.onChange } = identity);
  items1[2] = closure_4(TextArea, obj6);
  const obj7 = { title: intl4.string(appChannelsPrivate(4133).BqNMms), rows: items };
  intl4 = tmp4(1113).intl;
  items1[3] = closure_4(RowSection, obj7);
  let tmp11Result = null;
  const tmp10 = closure_5;
  const tmp13 = RowSection;
  const tmp9 = closure_6;
  if (review.channelNames.length > 1) {
    tmp11Result = null;
    if (null != appChannelsPrivate) {
      const obj13 = { label: intl5.string(appChannelsPrivate(4133).Td1mlg), checked: null, onToggle: null };
      const Checkbox = tmp4(14572).Checkbox;
      intl5 = tmp4(1113).intl;
      ({ isPrivate: obj5.checked, setPrivate: obj5.onToggle } = appChannelsPrivate);
      tmp11Result = tmp11(Checkbox, obj13);
    }
  }
  const obj14 = { children: items1 };
  items1[4] = tmp11Result;
  const obj15 = {
    title: intl6.string(appChannelsPrivate(4133).LnqeFd),
    following: items.length > 0,
    rows: devicePermissions.map((item) => {
      let intl;
      obj = { icon: closure_1_7[item], label: intl.string(AppsIcon(dependencyMap[22]).CONJURE_REVIEW_PERMISSION_LABELS[item]) };
      intl = AppsIcon(dependencyMap[18]).intl;
      return closure_1_4(ContentRow, obj, item);
    })
  };
  intl6 = tmp4(1113).intl;
  devicePermissions = review.devicePermissions;
  items1[5] = closure_4(tmp13, obj15);
  return tmp9(tmp10, obj14);
};
