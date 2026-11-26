// Module ID: 18483
// Function ID: 18484
// Name: ConjurePublishReviewDetails
// Dependencies: [19, 17, 21, 13356, 7167, 7172, 6935, 12270, 18208, 18484, 10078, 18486, 5043, 575, 5725, 7171, 12474, 1112, 4245, 18488, 18490, 7274, 7440, 5730, 5634, 18494, 18464, 18495, 5105, 6152, 7182, 6159, 2]
// Exports: default

// Module 18483 (ConjurePublishReviewDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import react_native2 from "react-native" /* 5105 */;
import Text_Text from "Text/Text" /* 5634 */;
import Pressables from "Pressables" /* 6152 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6935 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 7167 */;
import AppsLockIcon2 from "AppsLockIcon" /* 7171 */;
import AppsIcon from "AppsIcon" /* 7172 */;
import FormCheckbox from "FormCheckbox" /* 7182 */;
import ShieldIcon from "ShieldIcon" /* 10078 */;
import RobotIcon from "RobotIcon" /* 12270 */;
import ScreenIcon from "ScreenIcon" /* 13356 */;
import ActivitiesIcon from "ActivitiesIcon" /* 18208 */;
import BadgeIcon from "BadgeIcon" /* 18484 */;
import WindowTopIcon from "WindowTopIcon" /* 18486 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let tmp7;
const Badge_Badge = tmp7(6159);
function RowSection(rows) {
  let items;
  rows = rows.rows;
  const title = rows.title;
  let tmp2 = null;
  if (0 !== rows.length) {
    obj = { style: tmp.section, children: items };
    obj2 = { variant: "body-sm/medium", color: "text-subtle", accessibilityRole: "header", children: title };
    items = [React3(Text_Text.Text, obj2), rows];
    tmp2 = metroRequire(View, obj);
  }
  return tmp2;
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
  const obj3 = { variant: "body-sm/medium", color: "text-muted", children: intl.string(_modDef4245.RSyIc9) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  items[1] = React3(Text, obj3);
  return metroRequire(PressableOpacity, obj2);
}
function ContentRow(isNew) {
  let icon;
  let items;
  let label;
  let flag = isNew.isNew;
  ({ icon, label } = isNew);
  if (flag === undefined) {
    flag = false;
  }
  let trailing = isNew.trailing;
  if (trailing === undefined) {
    trailing = null;
  }
  const tmp2 = closure_9();
  obj = { style: tmp2.row, children: items };
  items = [, , , ];
  obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
  items[0] = React3(icon, obj2);
  const obj3 = { variant: "body-sm/medium", color: "text-strong", lineClamp: 1, style: tmp2.rowLabel, children: label };
  items[1] = React3(Text_Text.Text, obj3);
  let tmp5Result = null;
  const tmp3 = metroRequire;
  if (flag) {
    tmp5Result = tmp5(Badge_Badge.Badge, { type: "new" });
  }
  items[2] = tmp5Result;
  let tmp5Result2 = null;
  if (null != trailing) {
    const obj4 = { style: tmp2.rowTrailing, children: trailing };
    tmp5Result2 = tmp5(tmp4, obj4);
  }
  items[3] = tmp5Result2;
  return tmp3(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { screen_capture: ScreenIcon.ScreenIcon, connect_user_to_voice: VoiceNormalIcon.VoiceNormalIcon };
let obj2 = { app_channel: AppsIcon.AppsIcon };
obj2[ConjureProjectTypes.ConjureSupportedSurface.BOT] = RobotIcon.RobotIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = ActivitiesIcon.ActivitiesIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL] = VoiceNormalIcon.VoiceNormalIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = BadgeIcon.BadgeIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = ShieldIcon.ShieldIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.OVERLAY] = WindowTopIcon.WindowTopIcon;
let createStyles = createStyles_mod;
let obj3 = { section: obj4, row: obj5, rowLabel: { flexShrink: 1 }, rowTrailing: { marginStart: "auto" }, privateCheckbox: obj6, readOnlyIcon: size, readOnlyText: obj7 };
obj4 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.md };
obj7 = { gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj3);
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishReviewDetails.tsx");

export default function ConjurePublishReviewDetails(review) {
  let appChannelsPrivate;
  let devicePermissions;
  let identity;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items3;
  let nameError;
  let obj8;
  let tmp10Result;
  let tmp21;
  let tmp26;
  review = review.review;
  appChannelsPrivate = undefined;
  const onConjureIcon = review.onConjureIcon;
  const tmp = closure_9();
  ({ identity, appChannelsPrivate } = review);
  let tmp2 = null;
  if (null != appChannelsPrivate) {
    tmp2 = null;
    if (!appChannelsPrivate.shared) {
      tmp2 = appChannelsPrivate;
    }
  }
  appChannelsPrivate = tmp2;
  const includes = review.includes;
  let shared;
  const mapped = includes.map((icon) => {
    let tmpResult;
    if ("app_channel" === icon.icon) {
      if (icon.creates) {
        let AppsLockIcon;
        let isPrivate;
        if (appChannelsPrivate != null) {
          isPrivate = appChannelsPrivate.isPrivate;
        }
        if (true === isPrivate) {
          AppsLockIcon = AppsLockIcon2.AppsLockIcon;
        }
        obj = { icon: AppsLockIcon, label: null, isNew: null, trailing: tmpResult };
        ({ label: obj.label, isNew: obj.isNew } = icon);
        tmpResult = null;
        if (icon.creates) {
          tmpResult = null;
          if (null != appChannelsPrivate) {
            obj2 = { appChannelsPrivate: tmp9 };
            tmpResult = tmp(PrivateCheckbox, obj2);
          }
        }
        return React3(tmp2, obj, icon.key);
      }
    }
    AppsLockIcon = obj2[icon.icon];
  });
  if (appChannelsPrivate != null) {
    shared = appChannelsPrivate.shared;
  }
  let tmp5 = null;
  if (true === shared) {
    obj = { label: intl.string(appChannelsPrivate(4245).Td1mlg), checked: null, onToggle: null };
    const Checkbox = appChannelsPrivate(12474).Checkbox;
    intl = appChannelsPrivate(1112).intl;
    const tmp9 = appChannelsPrivate;
    ({ isPrivate: obj.checked, setPrivate: obj.onToggle } = appChannelsPrivate);
    tmp5 = closure_4(Checkbox, obj);
  }
  let tmp12 = null;
  if (review.managedCopy) {
    obj2 = { projectId: review.projectId };
    tmp12 = closure_4(appChannelsPrivate(18488), obj2);
  }
  const items = [tmp12, , , , , , , ];
  const obj3 = { children: null };
  if (review.editable) {
    const obj4 = {
      iconURL: identity.iconURL,
      size: 48,
      radius: 12,
      disabled: review.saving,
      onChange: identity.setIcon,
      onError(text) {
          if (null != text) {
            obj2 = { text, variant: "critical" };
            obj = appChannelsPrivate(dependencyMap[14]);
            obj.open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
          }
        },
      onConjure: onConjureIcon
    };
    const items1 = [closure_4(appChannelsPrivate(18490).ConjureAppIconTile, obj4), , ];
    const obj5 = { label: intl2.string(appChannelsPrivate(4245).knevPu), value: null, onChange: null, maxLength: appChannelsPrivate(6935).MAX_PROJECT_NAME_LENGTH, disabled: null, errorMessage: nameError };
    const TextInput = appChannelsPrivate(7274).TextInput;
    intl2 = appChannelsPrivate(1112).intl;
    ({ name: obj10.value, setName: obj10.onChange } = review);
    ({ saving: obj10.disabled, nameError } = review);
    items1[1] = closure_4(TextInput, obj5);
    const obj6 = { label: intl3.string(appChannelsPrivate(4245).ynaGa1), placeholder: intl4.string(appChannelsPrivate(4245)["I+3UTL"]), value: null, onChange: null, maxLength: appChannelsPrivate(6935).MAX_APP_DESCRIPTION_LENGTH, disabled: review.saving };
    const TextArea = tmp28(7440).TextArea;
    intl3 = tmp28(1112).intl;
    intl4 = tmp28(1112).intl;
    ({ description: obj11.value, setDescription: obj11.onChange } = identity);
    items1[2] = closure_4(TextArea, obj6);
    obj3.children = items1;
    tmp10Result = tmp10(tmp11, obj3);
    tmp26 = tmp28;
    tmp21 = tmp27;
  } else {
    let tmp16 = null;
    if (null != identity.iconURL) {
      const obj7 = { source: obj8, style: tmp.readOnlyIcon, resizeMode: "cover" };
      obj8 = { uri: identity.iconURL };
      tmp16 = closure_4(appChannelsPrivate(5730), obj7);
    }
    const items2 = [tmp16, ];
    tmp21 = closure_4;
    const obj13 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: review.name };
    const obj9 = { style: tmp.readOnlyText, children: items3 };
    items3 = [closure_4(appChannelsPrivate(5634).Text, obj13), ];
    let tmp21Result = null;
    const tmp20 = View;
    if ("" !== identity.description) {
      const obj14 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 3, children: identity.description };
      tmp21Result = tmp21(tmp22(5634).Text, obj14);
    }
    items3[1] = tmp21Result;
    items2[1] = closure_6(tmp20, obj9);
    obj3.children = items2;
    tmp10Result = tmp10(tmp11, obj3);
    tmp26 = tmp22;
  }
  items[1] = tmp10Result;
  let tmp21Result2 = null;
  if (null != review.placement) {
    const obj15 = { placement: null, disabled: null };
    ({ placement: obj12.placement, saving: obj12.disabled } = review);
    tmp21Result2 = tmp21(appChannelsPrivate(18494), obj15);
  }
  items[2] = tmp21Result2;
  let tmp33 = null;
  if (null != review.placement) {
    tmp33 = tmp5;
  }
  items[3] = tmp33;
  const obj16 = { title: intl5.string(appChannelsPrivate(4245).BqNMms), rows: mapped };
  intl5 = tmp26(1112).intl;
  items[4] = tmp21(RowSection, obj16);
  let tmp36 = null;
  const tmp34 = RowSection;
  if (null == review.placement) {
    tmp36 = tmp5;
  }
  const obj31 = { children: items };
  items[5] = tmp36;
  const obj32 = {
    title: intl6.string(appChannelsPrivate(4245).LnqeFd),
    rows: devicePermissions.map((item) => {
      let intl;
      obj = { icon: closure_1_7[item], label: intl.string(appChannelsPrivate(dependencyMap[26]).CONJURE_REVIEW_PERMISSION_LABELS[item]) };
      intl = appChannelsPrivate(dependencyMap[17]).intl;
      return closure_1_4(ContentRow, obj, item);
    })
  };
  intl6 = tmp26(1112).intl;
  devicePermissions = review.devicePermissions;
  items[6] = tmp21(tmp34, obj32);
  const obj33 = { remix: review.remix, disabled: review.saving };
  items[7] = tmp21(appChannelsPrivate(18495), obj33);
  return closure_6(closure_5, obj31);
};
