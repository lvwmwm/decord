// Module ID: 18268
// Function ID: 18269
// Name: ConjurePublishReviewDetails
// Dependencies: [19, 17, 21, 9904, 7034, 7704, 6622, 12172, 17996, 18269, 10133, 18271, 4913, 575, 5595, 7703, 18273, 18275, 7221, 1112, 4190, 7461, 5600, 5504, 14724, 18252, 18279, 4975, 7030, 7336, 7061, 2]
// Exports: default

// Module 18268 (ConjurePublishReviewDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import react_native2 from "react-native" /* 4975 */;
import Text_Text from "Text/Text" /* 5504 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6622 */;
import Pressables from "Pressables" /* 7030 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 7034 */;
import FormCheckbox from "FormCheckbox" /* 7336 */;
import AppsLockIcon2 from "AppsLockIcon" /* 7703 */;
import AppsIcon from "AppsIcon" /* 7704 */;
import ScreenIcon from "ScreenIcon" /* 9904 */;
import ShieldIcon from "ShieldIcon" /* 10133 */;
import RobotIcon from "RobotIcon" /* 12172 */;
import ActivitiesIcon from "ActivitiesIcon" /* 17996 */;
import BadgeIcon from "BadgeIcon" /* 18269 */;
import WindowTopIcon from "WindowTopIcon" /* 18271 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
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
const Badge_Badge = tmp7(7061);
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
  const obj3 = { variant: "body-sm/medium", color: "text-muted", children: intl.string(_modDef4190.RSyIc9) };
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
  let obj7;
  let tmp15;
  let tmp16;
  let tmp4Result;
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
  let tmp6 = null;
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
  if (review.managedCopy) {
    const tmp9 = dependencyMap;
    obj = { projectId: review.projectId };
    tmp6 = closure_4(appChannelsPrivate(18273), obj);
  }
  const items = [tmp6, , , , , ];
  obj2 = { children: null };
  if (review.editable) {
    const obj3 = {
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
    const items1 = [closure_4(appChannelsPrivate(18275).ConjureAppIconTile, obj3), , ];
    const obj4 = { label: intl.string(appChannelsPrivate(4190).knevPu), value: null, onChange: null, maxLength: appChannelsPrivate(6622).MAX_PROJECT_NAME_LENGTH, disabled: null, errorMessage: nameError };
    const TextInput = appChannelsPrivate(7221).TextInput;
    intl = appChannelsPrivate(1112).intl;
    ({ name: obj9.value, setName: obj9.onChange } = review);
    ({ saving: obj9.disabled, nameError } = review);
    items1[1] = closure_4(TextInput, obj4);
    const obj5 = { label: intl2.string(appChannelsPrivate(4190).ynaGa1), placeholder: intl3.string(appChannelsPrivate(4190)["I+3UTL"]), value: null, onChange: null, maxLength: appChannelsPrivate(6622).MAX_APP_DESCRIPTION_LENGTH, disabled: review.saving };
    const TextArea = tmp21(7461).TextArea;
    intl2 = tmp21(1112).intl;
    intl3 = tmp21(1112).intl;
    ({ description: obj10.value, setDescription: obj10.onChange } = identity);
    items1[2] = closure_4(TextArea, obj5);
    obj2.children = items1;
    tmp4Result = tmp4(tmp5, obj2);
    tmp16 = tmp21;
    tmp15 = tmp20;
  } else {
    let tmp10 = null;
    if (null != identity.iconURL) {
      const obj6 = { source: obj7, style: tmp.readOnlyIcon, resizeMode: "cover" };
      obj7 = { uri: identity.iconURL };
      tmp10 = closure_4(appChannelsPrivate(5600), obj6);
    }
    const items2 = [tmp10, ];
    tmp15 = closure_4;
    tmp16 = appChannelsPrivate;
    const obj11 = { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: review.name };
    const obj8 = { style: tmp.readOnlyText, children: items3 };
    items3 = [closure_4(appChannelsPrivate(5504).Text, obj11), ];
    let tmp15Result = null;
    const tmp14 = View;
    if ("" !== identity.description) {
      const obj13 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 3, children: identity.description };
      tmp15Result = tmp15(tmp16(5504).Text, obj13);
    }
    items3[1] = tmp15Result;
    items2[1] = closure_6(tmp14, obj8);
    obj2.children = items2;
    tmp4Result = tmp4(tmp5, obj2);
  }
  items[1] = tmp4Result;
  const obj14 = { title: intl4.string(appChannelsPrivate(4190).BqNMms), rows: mapped };
  intl4 = tmp16(1112).intl;
  items[2] = tmp15(RowSection, obj14);
  let shared;
  const tmp24 = RowSection;
  if (appChannelsPrivate != null) {
    shared = appChannelsPrivate.shared;
  }
  let tmp15Result2 = null;
  if (true === shared) {
    const obj15 = { label: intl5.string(appChannelsPrivate(4190).Td1mlg), checked: null, onToggle: null };
    const Checkbox = tmp16(14724).Checkbox;
    intl5 = tmp16(1112).intl;
    ({ isPrivate: obj12.checked, setPrivate: obj12.onToggle } = appChannelsPrivate);
    tmp15Result2 = tmp15(Checkbox, obj15);
  }
  const obj29 = { children: items };
  items[3] = tmp15Result2;
  const obj30 = {
    title: intl6.string(appChannelsPrivate(4190).LnqeFd),
    rows: devicePermissions.map((item) => {
      let intl;
      obj = { icon: closure_1_7[item], label: intl.string(appChannelsPrivate(dependencyMap[25]).CONJURE_REVIEW_PERMISSION_LABELS[item]) };
      intl = appChannelsPrivate(dependencyMap[19]).intl;
      return closure_1_4(ContentRow, obj, item);
    })
  };
  intl6 = tmp16(1112).intl;
  devicePermissions = review.devicePermissions;
  items[4] = tmp15(tmp24, obj30);
  const obj31 = { remix: review.remix, disabled: review.saving };
  items[5] = tmp15(appChannelsPrivate(18279), obj31);
  return closure_6(closure_5, obj29);
};
