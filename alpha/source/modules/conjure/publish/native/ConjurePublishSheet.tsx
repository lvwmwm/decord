// Module ID: 12192
// Function ID: 12193
// Name: ConjurePublishSheet
// Dependencies: [5, 19, 17, 6808, 21, 9514, 8609, 6809, 12193, 12195, 12197, 10992, 5004, 587, 5699, 5246, 558, 576, 11803, 504, 12199, 6008, 5616, 1125, 3863, 7334, 12205, 12210, 7044, 7216, 5270, 6919, 12214, 5280, 8613, 8614, 7331, 5640, 2]
// Exports: default

// Module 12192 (ConjurePublishSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5246 */;
import useChannelNameDefault from "useChannelName" /* 5640 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8609 */;
import ScreenIcon from "ScreenIcon" /* 9514 */;
import ShieldIcon from "ShieldIcon" /* 10992 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 11803 */;
import RobotIcon from "RobotIcon" /* 12193 */;
import ActivitiesIcon from "ActivitiesIcon" /* 12195 */;
import BadgeIcon from "BadgeIcon" /* 12197 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let _require, c1, c4, closure_2, dependencyMap, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj12;
let obj13;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp;
const Text_Text = tmp(5270);
const AppsIcon2 = tmp(8614);
function showCriticalToast(text) {
  obj = ToastActionCreatorsDefault;
  obj2 = { text, variant: "critical" };
  obj.open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
}
function hidePublishSheet() {
  obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(ConjurePublishSheet_str);
}
function PublishSheetBody(entryPoint) {
  let UserIcon;
  let components;
  let current;
  let devicePermissions;
  let disabled;
  let editable;
  let identity;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl9;
  let items10;
  let items11;
  let items4;
  let items5;
  let items6;
  let items8;
  let items9;
  let mapped;
  let nameError;
  let obj21;
  let obj4;
  let project;
  let publish;
  let sharing;
  let tmp14Result;
  let tmp16Result;
  ({ project, publish } = entryPoint);
  entryPoint = entryPoint.entryPoint;
  dependencyMap = undefined;
  react = undefined;
  let closure_5;
  obj = function _handlePublish() {
    let ref;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let v2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (!ref.current) {
              ref.current = true;
              c3 = 2;
              c1 = 3;
              c4 = 1;
              const obj4 = { value: closure_2_2.save(), done: false };
              return obj4;
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_3.current = false;
            throw closure_2;
          } else if (2 === c1) {
            const intl = tmp(closure_2[23]).intl;
            closure_1_14(intl.string(c1(closure_2[24]).Fi7boI));
            c3 = 0;
            closure_128_3.current = false;
            c4 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_3.current = false;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_3.current = false;
            if (value) {
              if (closure_128_5.current) {
                closure_1_15();
                const appChannelsPrivate = closure_128_2.appChannelsPrivate;
                let isPrivate;
                const run = closure_128_0.run;
                const tmp11 = closure_128_1;
                if (appChannelsPrivate != null) {
                  isPrivate = appChannelsPrivate.isPrivate;
                }
                run(tmp11, true === isPrivate);
              }
            } else {
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp32) {
          closure_2 = tmp32;
          if (0 === c3) {
            c4 = 3;
            throw tmp32;
          } else if (1 === tmp34) {
            c1 = 1;
          } else {
            c1 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_13();
  const tmp3 = dependencyMap;
  const tmp4 = entryPoint(12199)(project, publish);
  dependencyMap = tmp4;
  entryPoint(6008)(() => true, tmp4.saving);
  obj = react;
  let closure_3 = react.useRef(false);
  const context = react.useContext(entryPoint(5616));
  let transitionState;
  if (context != null) {
    transitionState = context.transitionState;
  }
  let tmp8 = null == transitionState;
  if (!tmp8) {
    tmp8 = "visible" === transitionState;
  }
  react = tmp8;
  closure_5 = obj.useRef(tmp8);
  const items = [tmp8];
  const layoutEffect = obj.useLayoutEffect(() => {
    closure_5.current = current;
    return () => {
      closure_1_5.current = false;
    };
  }, items);
  ({ editable, identity, sharing } = tmp4);
  if (tmp4.initial) {
    let items2;
    if (tmp4.initialChannelNames.length > 0) {
      obj2 = { channelNames: tmp4.initialChannelNames, appChannelsPrivate: tmp10, disabled: tmp4.saving };
      const items1 = [closure_7(closure_21, obj2, "app-channels")];
      items2 = items1;
    } else {
      items2 = [];
    }
    mapped = items2;
  } else {
    const channels = tmp4.channels;
    mapped = channels.map((channel) => {
      obj = { channel };
      return closure_1_7(closure_1_22, obj, channel.id);
    });
  }
  const items3 = [
    ...mapped,
    ...components.map((label) => {
      const surface = label.surface;
      obj = { icon: obj2[surface], label: label.label };
      return closure_1_7(closure_1_20, obj, surface);
    })
  ];
  components = tmp4.components;
  let obj3 = { startExpanded: editable, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl.string(tmp2(3863).NEPcoi), children: tmp16(tmp17, obj4) };
  const ActionSheet = publish(7334).ActionSheet;
  intl = publish(1125).intl;
  obj4 = { style: tmp.content, children: items4 };
  if (editable) {
    const obj5 = {
      iconURL: identity.iconURL,
      size: 48,
      radius: 12,
      disabled: tmp4.saving,
      onChange: identity.setIcon,
      onError(text) {
          if (null != text) {
            obj2 = { text, variant: "critical" };
            obj = entryPoint(closure_2[14]);
            obj.open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
          }
        }
    };
    tmp14Result = tmp14(tmp15(12205).ConjureAppIconTile, obj5);
  } else {
    const obj6 = { project, size: "dialog" };
    tmp14Result = tmp14(tmp2(12210), obj6);
  }
  items4 = [tmp14Result, , , , , ];
  if (editable) {
    const obj7 = { label: intl2.string(entryPoint(3863).knevPu), value: null, onChange: null, maxLength: publish(6809).MAX_PROJECT_NAME_LENGTH, disabled: null, errorMessage: nameError };
    const TextInput = tmp15(7044).TextInput;
    intl2 = tmp15(1125).intl;
    ({ name: obj10.value, setName: obj10.onChange } = tmp4);
    ({ saving: obj10.disabled, nameError } = tmp4);
    const obj8 = { children: items5 };
    items5 = [closure_7(TextInput, obj7), ];
    const obj9 = { label: intl3.string(entryPoint(3863).ynaGa1), placeholder: intl4.string(entryPoint(3863)["I+3UTL"]), value: null, onChange: null, maxLength: publish(6809).MAX_APP_DESCRIPTION_LENGTH, disabled: tmp4.saving };
    const TextArea = tmp15(7216).TextArea;
    intl3 = tmp15(1125).intl;
    intl4 = tmp15(1125).intl;
    ({ description: obj12.value, setDescription: obj12.onChange } = identity);
    items5[1] = closure_7(TextArea, obj9);
    tmp16Result = tmp16(closure_8, obj8);
  } else {
    const obj11 = { style: tmp.nameGroup, children: items6 };
    const obj13 = { variant: "heading-lg/semibold", color: "text-strong", lineClamp: 1, children: tmp4.displayName };
    items6 = [closure_7(tmp15(5270).Text, obj13), ];
    let tmp14Result4 = null;
    if ("" !== tmp4.description) {
      const obj14 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 2, children: tmp4.description };
      tmp14Result4 = tmp14(tmp15(5270).Text, obj14);
    }
    items6[1] = tmp14Result4;
    tmp16Result = tmp16(tmp17, obj11);
  }
  items4[1] = tmp16Result;
  const obj15 = { title: intl5.string(entryPoint(3863).BqNMms), rows: items3 };
  intl5 = tmp15(1125).intl;
  items4[2] = closure_7(closure_19, obj15);
  const obj16 = {
    title: intl6.string(entryPoint(3863).LnqeFd),
    following: items3.length > 0,
    rows: devicePermissions.map((item) => {
      let intl;
      obj = { icon: closure_1_11[item], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[item]) };
      intl = publish(closure_2[23]).intl;
      return closure_1_7(closure_1_20, obj, item);
    })
  };
  intl6 = tmp15(1125).intl;
  devicePermissions = tmp4.devicePermissions;
  items4[3] = closure_7(closure_19, obj16);
  let tmp16Result2 = null;
  if (null != sharing) {
    let tmp14Result5;
    const obj17 = { title: intl7.string(entryPoint(3863).esTM8y) };
    intl7 = tmp15(1125).intl;
    const items7 = [closure_7(closure_18, obj17), ];
    const obj18 = { style: tmp.sharingRow, children: items8 };
    if (null != sharing.guild) {
      const obj19 = { guild: sharing.guild, size: publish(6919).GuildIconSizes.SMALL_36 };
      const tmp2Result = entryPoint(6919);
      tmp14Result5 = tmp14(tmp2Result, obj19);
    } else {
      const obj20 = { style: tmp.onlyMeIcon, children: closure_7(UserIcon, obj21) };
      obj21 = { size: "xs", color: entryPoint(587).colors.ICON_DEFAULT };
      UserIcon = tmp15(12214).UserIcon;
      tmp14Result5 = tmp14(tmp17, obj20);
    }
    items8 = [tmp14Result5, ];
    const guild = sharing.guild;
    let name;
    const obj22 = { style: tmp.rowText, children: items9 };
    const Text = tmp15(5270).Text;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      const intl8 = tmp15(1125).intl;
      name = intl8.string(tmp2(3863)["37xgkF"]);
    }
    const obj23 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: name };
    items9 = [closure_7(Text, obj23), ];
    let tmp14Result6 = null;
    if (null != sharing.caption) {
      const obj24 = { variant: "text-xs/normal", color: "text-subtle", children: sharing.caption };
      tmp14Result6 = tmp14(tmp15(5270).Text, obj24);
    }
    const obj25 = { children: items7 };
    items9[1] = tmp14Result6;
    items8[1] = closure_9(closure_5, obj22);
    items7[1] = closure_9(closure_5, obj18);
    tmp16Result2 = tmp16(tmp17, obj25);
  }
  items4[4] = tmp16Result2;
  const obj26 = { style: tmp.footer, children: items10 };
  items10 = [, ];
  const obj27 = { variant: "text-sm/normal", color: "text-subtle", children: tmp4.note };
  items10[0] = closure_7(publish(5270).Text, obj27);
  const obj28 = { style: tmp.actions, children: items11 };
  const obj55 = { variant: "secondary", size: "md", grow: true, text: intl9.string(publish(1125).t["ETE/oC"]), disabled: tmp4.saving, onPress: hidePublishSheet };
  const Button = tmp15(5280).Button;
  intl9 = tmp15(1125).intl;
  items11 = [closure_7(Button, obj55), ];
  const obj56 = {
    variant: "primary",
    size: "md",
    grow: true,
    text: publish.label,
    disabled,
    loading: tmp4.saving,
    onPress: function handlePublish() {
      return obj(...arguments);
    }
  };
  disabled = publish.disabled;
  const Button2 = tmp15(5280).Button;
  if (!disabled) {
    disabled = null != tmp4.nameError;
  }
  items11[1] = closure_7(Button2, obj56);
  items10[1] = closure_9(closure_5, obj28);
  items4[5] = closure_9(closure_5, obj26);
  return closure_7(ActionSheet, obj3);
}
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const ConjurePublishSheet_str = "ConjurePublishSheet";
let obj = { screen_capture: ScreenIcon.ScreenIcon, connect_user_to_voice: VoiceNormalIcon.VoiceNormalIcon };
let obj2 = {};
obj2[ConjureProjectTypes.ConjureSupportedSurface.BOT] = RobotIcon.RobotIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY] = ActivitiesIcon.ActivitiesIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET] = BadgeIcon.BadgeIcon;
obj2[ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD] = ShieldIcon.ShieldIcon;
let createStyles = createStyles_mod;
let obj3 = { content: obj4, nameGroup: obj5, sectionTitle: obj6, followingSection: obj7, row: obj8, sharingRow: obj9, onlyMeIcon: obj10, rowText: { flex: 1 }, appChannelsPrivate: obj11, footer: obj12, actions: obj13 };
obj4 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj5 = { gap: nativeDefault.space.PX_8 };
obj6 = { marginBottom: nativeDefault.space.PX_4 };
obj7 = { marginTop: -nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4 };
obj10 = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj11 = { marginTop: nativeDefault.space.PX_12 };
obj12 = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj13 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishSheet(projectId) {
  let closure_1;
  let first;
  let tmp11;
  let tmp12;
  let tmp7;
  let tmp8;
  let tmp = projectId;
  obj = projectId(576);
  const cResult = obj.c(11);
  projectId = projectId.projectId;
  const entryPoint = projectId.entryPoint;
  const tmp4 = useConjurePublishActionDefault(projectId, projectId.publishOptions);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function s() {
      return ConjureProjectStore.getProject(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  importDefault = tmp10;
  if (cResult[4] !== (null == tmp4 || null == stateFromStores)) {
    const fn2 = function x() {
      const tmp = closure_1;
      if (tmp) {
        obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(ConjurePublishSheet_str);
      }
    };
    const items2 = [null == tmp4 || null == stateFromStores];
    cResult[4] = null == tmp4 || null == stateFromStores;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp12 = items2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  const effect = react.useEffect(tmp11, tmp12);
  if (cResult[7] === entryPoint) {
    if (cResult[8] === stateFromStores) {
      let tmp14;
      if (cResult[9] === tmp4) {
        tmp14 = cResult[10];
      }
      return tmp14;
    }
  }
  let tmp15 = null;
  if (null != tmp4) {
    tmp15 = null;
    if (null != stateFromStores) {
      obj2 = { project: stateFromStores, publish: tmp4, entryPoint };
      tmp15 = closure_7(PublishSheetBody, obj2);
    }
  }
  cResult[7] = entryPoint;
  cResult[8] = stateFromStores;
  cResult[9] = tmp4;
  cResult[10] = tmp15;
  tmp14 = tmp15;
}) : (function ConjurePublishSheet(projectId) {
  let closure_1;
  let entryPoint;
  let publishOptions;
  projectId = projectId.projectId;
  ({ publishOptions, entryPoint } = projectId);
  let tmp = useConjurePublishActionDefault(projectId, publishOptions);
  obj = projectId(504);
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  importDefault = tmp3;
  const items2 = [tmp3];
  const effect = react.useEffect(() => {
    const tmp = closure_1;
    if (tmp) {
      obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjurePublishSheet_str);
    }
  }, items2);
  let tmp5 = null;
  if (null != tmp) {
    tmp5 = null;
    if (null != stateFromStores) {
      obj2 = { project: stateFromStores, publish: tmp, entryPoint };
      tmp5 = closure_7(PublishSheetBody, obj2);
    }
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function SectionTitle(title) {
  obj = react2;
  const cResult = obj.c(3);
  title = title.title;
  const tmp4 = closure_13();
  if (cResult[0] === tmp4.sectionTitle) {
    let tmp5;
    if (cResult[1] === title) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  obj2 = { variant: "text-sm/semibold", color: "text-subtle", accessibilityRole: "header", style: tmp4.sectionTitle, children: title };
  const tmp6 = metroImportDefault(Text_Text.Text, obj2);
  cResult[0] = tmp4.sectionTitle;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function SectionTitle(title) {
  title = title.title;
  obj = { variant: "text-sm/semibold", color: "text-subtle", accessibilityRole: "header", style: closure_13().sectionTitle, children: title };
  return metroImportDefault(Text_Text.Text, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function RowSection(arg0) {
  let following;
  let items;
  let rows;
  let title;
  obj = react2;
  const cResult = obj.c(6);
  ({ title, rows, following } = arg0);
  let followingSection = undefined !== following && following;
  if (0 === rows.length) {
    return null;
  } else {
    let tmp3;
    if (followingSection) {
      followingSection = tmp2.followingSection;
    }
    if (cResult[0] !== title) {
      obj2 = { title };
      const tmp6 = metroImportDefault(closure_18, obj2);
      cResult[0] = title;
      cResult[1] = tmp6;
      tmp3 = tmp6;
    } else {
      tmp3 = cResult[1];
    }
    if (cResult[2] === rows) {
      if (cResult[3] === followingSection) {
        let tmp7;
        if (cResult[4] === tmp3) {
          tmp7 = cResult[5];
        }
        return tmp7;
      }
    }
    const obj3 = { style: followingSection, children: items };
    items = [tmp3, rows];
    const tmp10 = React4(View, obj3);
    cResult[2] = rows;
    cResult[3] = followingSection;
    cResult[4] = tmp3;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
}) : (function RowSection(title) {
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
    const tmp3 = React4;
    const tmp4 = View;
    if (following) {
      following = tmp.followingSection;
    }
    obj = { style: following, children: items };
    obj2 = { title };
    items = [metroImportDefault(closure_18, obj2), rows];
    tmp3Result = tmp3(tmp4, obj);
  }
  return tmp3Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContentRow(arg0) {
  let icon;
  let items;
  let label;
  let tmp5;
  let tmp9;
  obj = react2;
  const cResult = obj.c(8);
  ({ icon, label } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== icon) {
    obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const tmp8 = metroImportDefault(icon, obj2);
    cResult[0] = icon;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== label) {
    const obj3 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: label };
    const tmp11 = metroImportDefault(Text_Text.Text, obj3);
    cResult[2] = label;
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.row) {
    if (cResult[5] === tmp5) {
      let tmp12;
      if (cResult[6] === tmp9) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  const obj4 = { style: tmp4.row, children: items };
  items = [tmp5, tmp9];
  const tmp13 = React4(View, obj4);
  cResult[4] = tmp4.row;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : (function ContentRow(arg0) {
  let icon;
  let items;
  let label;
  ({ icon, label } = arg0);
  obj = { style: closure_13().row, children: items };
  items = [, ];
  obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
  items[0] = metroImportDefault(icon, obj2);
  items[1] = metroImportDefault(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: label });
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppChannelList(arg0) {
  let AppsIcon;
  let TableSwitchRow;
  let appChannelsPrivate;
  let channelNames;
  let disabled;
  let intl;
  let items;
  let obj4;
  let obj5;
  let obj6;
  let row;
  let tmp7;
  obj = require("react");
  const cResult = obj.c(16);
  ({ channelNames, appChannelsPrivate, disabled } = arg0);
  const tmp4 = closure_13();
  _require = tmp4;
  let isPrivate;
  if (appChannelsPrivate != null) {
    isPrivate = appChannelsPrivate.isPrivate;
  }
  if (true === isPrivate) {
    AppsIcon = tmp(8613).AppsLockIcon;
  } else {
    AppsIcon = tmp(8614).AppsIcon;
  }
  if (cResult[0] === AppsIcon) {
    if (cResult[1] === channelNames) {
      if (cResult[2] === tmp4) {
        tmp7 = cResult[3];
      }
      if (cResult[7] === appChannelsPrivate) {
        if (cResult[8] === channelNames.length) {
          if (cResult[9] === disabled) {
            if (cResult[10] === true === isPrivate) {
              let tmp10;
              if (cResult[11] === tmp4) {
                tmp10 = cResult[12];
              }
              if (cResult[13] === tmp7) {
                let tmp15;
                if (cResult[14] === tmp10) {
                  tmp15 = cResult[15];
                }
                return tmp15;
              }
              obj2 = { children: items };
              items = [tmp7, tmp10];
              const tmp18 = closure_9(View, obj2);
              cResult[13] = tmp7;
              cResult[14] = tmp10;
              cResult[15] = tmp18;
              tmp15 = tmp18;
            }
          }
        }
      }
      let tmp12Result = null;
      if (null != appChannelsPrivate) {
        let obj3 = { style: tmp4.appChannelsPrivate, children: closure_7(TableSwitchRow, obj4) };
        TableSwitchRow = tmp(7331).TableSwitchRow;
        let str = "text-muted";
        const Text = tmp(5270).Text;
        const tmp13 = View;
        if (true === isPrivate) {
          str = "text-default";
        }
        obj4 = { start: true, end: true, label: closure_7(Text, obj5), value: true === isPrivate, disabled, onValueChange: appChannelsPrivate.setPrivate };
        obj5 = { variant: "text-md/medium", color: str, children: intl.formatToPlainString(AppsIcon(3863).Td1mlg, obj6) };
        intl = tmp(1125).intl;
        obj6 = { count: channelNames.length };
        tmp12Result = tmp12(tmp13, obj3);
      }
      cResult[7] = appChannelsPrivate;
      cResult[8] = channelNames.length;
      cResult[9] = disabled;
      cResult[10] = true === isPrivate;
      cResult[11] = tmp4;
      cResult[12] = tmp12Result;
      tmp10 = tmp12Result;
    }
  }
  if (cResult[4] === AppsIcon) {
    let tmp8;
    if (cResult[5] === tmp4) {
      tmp8 = cResult[6];
    }
    const mapped = channelNames.map(tmp8);
    cResult[0] = AppsIcon;
    cResult[1] = channelNames;
    cResult[2] = tmp4;
    cResult[3] = mapped;
    tmp7 = mapped;
  }
  const fn = function o(children) {
    let items;
    obj = { style: row.row, children: items };
    items = [, ];
    obj2 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
    items[0] = metroImportDefault(AppsIcon, obj2);
    const obj3 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children };
    items[1] = metroImportDefault(Text_Text.Text, obj3);
    return React4(View, obj, children);
  };
  cResult[4] = AppsIcon;
  cResult[5] = tmp4;
  cResult[6] = fn;
  tmp8 = fn;
}) : (function AppChannelList(disabled) {
  let TableSwitchRow;
  let appChannelsPrivate;
  let channelNames;
  let intl;
  let obj3;
  let obj4;
  let tmp7;
  ({ channelNames, appChannelsPrivate } = disabled);
  let AppsIcon;
  disabled = disabled.disabled;
  const tmp = closure_13();
  const row = tmp;
  let isPrivate;
  if (appChannelsPrivate != null) {
    isPrivate = appChannelsPrivate.isPrivate;
  }
  if (true === isPrivate) {
    AppsIcon = tmp4(8613).AppsLockIcon;
    tmp7 = tmp4;
  } else {
    AppsIcon = tmp4(8614).AppsIcon;
    tmp7 = tmp4;
  }
  const children = [
    channelNames.map((children) => {
      let items;
      obj = { style: row.row, children: items };
      items = [, ];
      obj2 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
      items[0] = metroImportDefault(AppsIcon, obj2);
      const obj3 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children };
      items[1] = metroImportDefault(Text_Text.Text, obj3);
      return React4(View, obj, children);
    }),

  ];
  let tmp11Result = null;
  const tmp8 = closure_9;
  if (null != appChannelsPrivate) {
    obj = { style: tmp.appChannelsPrivate, children: closure_7(TableSwitchRow, obj2) };
    TableSwitchRow = tmp7(7331).TableSwitchRow;
    let str = "text-muted";
    const Text = tmp7(5270).Text;
    if (true === isPrivate) {
      str = "text-default";
    }
    obj2 = { start: true, end: true, label: closure_7(Text, obj3), value: true === isPrivate, disabled, onValueChange: appChannelsPrivate.setPrivate };
    obj3 = { variant: "text-md/medium", color: str, children: intl.formatToPlainString(AppsIcon(3863).Td1mlg, obj4) };
    intl = tmp7(1125).intl;
    obj4 = { count: channelNames.length };
    tmp11Result = tmp11(tmp9, obj);
  }
  children[1] = tmp11Result;
  return tmp8(View, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelRow(channel) {
  let tmp4;
  obj = react2;
  const cResult = obj.c(2);
  let str = useChannelNameDefault(channel.channel);
  if (str == null) {
    str = "";
  }
  if (cResult[0] !== str) {
    obj2 = { icon: AppsIcon2.AppsIcon, label: str };
    const tmp7 = metroImportDefault(closure_20, obj2);
    cResult[0] = str;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ChannelRow(channel) {
  let str;
  obj = { icon: AppsIcon2.AppsIcon, label: str };
  str = useChannelNameDefault(channel.channel);
  const tmp = metroImportDefault;
  const tmp2 = closure_20;
  if (str == null) {
    str = "";
  }
  return tmp(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishSheet.tsx");

export default function showConjurePublishSheet(arg0) {
  obj = { key: ConjurePublishSheet_str, content: metroImportDefault(closure_16, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = {};
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};
