// Module ID: 12246
// Function ID: 12247
// Name: ConjurePublishSheet
// Dependencies: [5, 19, 17, 6831, 21, 9546, 8631, 6832, 12247, 12249, 12251, 11027, 5005, 587, 5701, 5247, 558, 576, 11857, 504, 12253, 6010, 5617, 8635, 8636, 1125, 3864, 7358, 12259, 12264, 7068, 7240, 5271, 6943, 12268, 5281, 7355, 5641, 2]
// Exports: default

// Module 12246 (ConjurePublishSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5247 */;
import useChannelNameDefault from "useChannelName" /* 5641 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6832 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7355 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8631 */;
import ScreenIcon from "ScreenIcon" /* 9546 */;
import ShieldIcon from "ShieldIcon" /* 11027 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 11857 */;
import RobotIcon from "RobotIcon" /* 12247 */;
import ActivitiesIcon from "ActivitiesIcon" /* 12249 */;
import BadgeIcon from "BadgeIcon" /* 12251 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let c1, c4, closure_2, dependencyMap, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj12;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp;
let tmp2;
const intl10 = tmp2(1125);
const Text_Text = tmp(5271);
const AppsIcon2 = tmp(8636);
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
  let appChannelsPrivate;
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
  let items2;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let items9;
  let mapped;
  let nameError;
  let obj21;
  let obj3;
  let project;
  let publish;
  let sharing;
  let tmp12;
  let tmp15Result;
  let tmp16Result;
  ({ project, publish } = entryPoint);
  entryPoint = entryPoint.entryPoint;
  dependencyMap = undefined;
  react = undefined;
  let closure_5;
  let AppsIcon;
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
          return { value: "IconComponent", done: "IconComponent" };
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
            const intl = tmp(closure_2[25]).intl;
            closure_1_14(intl.string(c1(closure_2[26]).Fi7boI));
            c3 = 0;
            closure_128_3.current = false;
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
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
              return { value: "IconComponent", done: "IconComponent" };
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
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
  const tmp4 = entryPoint(12253)(project, publish);
  dependencyMap = tmp4;
  entryPoint(6010)(() => true, tmp4.saving);
  obj = react;
  let closure_3 = react.useRef(false);
  const context = react.useContext(entryPoint(5617));
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
  ({ editable, identity, sharing, appChannelsPrivate } = tmp4);
  let isPrivate;
  const initial = tmp4.initial;
  if (appChannelsPrivate != null) {
    isPrivate = appChannelsPrivate.isPrivate;
  }
  if (true === isPrivate) {
    AppsIcon = publish(8635).AppsLockIcon;
    tmp12 = publish;
  } else {
    let tmp11 = publish;
    AppsIcon = publish(8636).AppsIcon;
    tmp12 = publish;
  }
  if (initial) {
    const initialChannelNames = tmp4.initialChannelNames;
    mapped = initialChannelNames.map((label) => {
      obj = { icon: AppsIcon, label };
      return metroImportDefault(closure_20, obj, "channel:" + label);
    });
  } else {
    const channels = tmp4.channels;
    mapped = channels.map((channel) => {
      obj = { channel };
      return obj(closure_1_22, obj, channel.id);
    });
  }
  const items1 = [
    ...mapped,
    ...components.map((label) => {
      const surface = label.surface;
      obj = { icon: obj2[surface], label: label.label };
      return obj(closure_1_20, obj, surface);
    })
  ];
  components = tmp4.components;
  obj2 = { startExpanded: editable, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl.string(tmp2(3864).NEPcoi), children: tmp16(tmp17, obj3) };
  const ActionSheet = tmp12(7358).ActionSheet;
  intl = tmp12(1125).intl;
  obj3 = { style: tmp.content, children: items2 };
  if (editable) {
    let obj4 = {
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
    tmp15Result = tmp15(tmp12(12259).ConjureAppIconTile, obj4);
  } else {
    const obj5 = { project, size: "dialog" };
    tmp15Result = tmp15(tmp2(12264), obj5);
  }
  items2 = [tmp15Result, , , , , , ];
  if (editable) {
    const obj6 = { label: intl2.string(entryPoint(3864).knevPu), value: null, onChange: null, maxLength: tmp12(6832).MAX_PROJECT_NAME_LENGTH, disabled: null, errorMessage: nameError };
    const TextInput = tmp12(7068).TextInput;
    intl2 = tmp12(1125).intl;
    ({ name: obj9.value, setName: obj9.onChange } = tmp4);
    ({ saving: obj9.disabled, nameError } = tmp4);
    const obj7 = { children: items3 };
    items3 = [tmp15(TextInput, obj6), ];
    const obj8 = { label: intl3.string(entryPoint(3864).ynaGa1), placeholder: intl4.string(entryPoint(3864)["I+3UTL"]), value: null, onChange: null, maxLength: tmp12(6832).MAX_APP_DESCRIPTION_LENGTH, disabled: tmp4.saving };
    const TextArea = tmp12(7240).TextArea;
    intl3 = tmp12(1125).intl;
    intl4 = tmp12(1125).intl;
    ({ description: obj11.value, setDescription: obj11.onChange } = identity);
    items3[1] = obj(TextArea, obj8);
    tmp16Result = tmp16(closure_8, obj7);
  } else {
    const obj10 = { style: tmp.nameGroup, children: items4 };
    const obj12 = { variant: "heading-lg/semibold", color: "text-strong", lineClamp: 1, children: tmp4.displayName };
    items4 = [tmp15(tmp12(5271).Text, obj12), ];
    let tmp15Result6 = null;
    if ("" !== tmp4.description) {
      const obj13 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 2, children: tmp4.description };
      tmp15Result6 = tmp15(tmp12(5271).Text, obj13);
    }
    items4[1] = tmp15Result6;
    tmp16Result = tmp16(tmp17, obj10);
  }
  items2[1] = tmp16Result;
  const obj14 = { title: intl5.string(entryPoint(3864).BqNMms), rows: items1 };
  intl5 = tmp12(1125).intl;
  items2[2] = obj(closure_19, obj14);
  let tmp15Result7 = null;
  const tmp22 = closure_19;
  if (null != appChannelsPrivate) {
    const obj15 = { channelCount: tmp4.initialChannelNames.length, appChannelsPrivate, disabled: tmp4.saving };
    tmp15Result7 = tmp15(closure_21, obj15);
  }
  items2[3] = tmp15Result7;
  const obj16 = {
    title: intl6.string(entryPoint(3864).LnqeFd),
    following: items1.length > 0 && null == appChannelsPrivate,
    rows: devicePermissions.map((item) => {
      let intl;
      obj = { icon: closure_1_11[item], label: intl.string(publish(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[item]) };
      intl = publish(closure_2[25]).intl;
      return obj(closure_1_20, obj, item);
    })
  };
  intl6 = tmp12(1125).intl;
  devicePermissions = tmp4.devicePermissions;
  items2[4] = obj(tmp22, obj16);
  let tmp16Result2 = null;
  if (null != sharing) {
    let tmp15Result8;
    const obj17 = { title: intl7.string(entryPoint(3864).esTM8y) };
    intl7 = tmp12(1125).intl;
    const items5 = [tmp15(closure_18, obj17), ];
    const obj18 = { style: tmp.sharingRow, children: items6 };
    if (null != sharing.guild) {
      const obj19 = { guild: sharing.guild, size: tmp12(6943).GuildIconSizes.SMALL_36 };
      const tmp2Result = entryPoint(6943);
      tmp15Result8 = tmp15(tmp2Result, obj19);
    } else {
      const obj20 = { style: tmp.onlyMeIcon, children: obj(UserIcon, obj21) };
      obj21 = { size: "xs", color: entryPoint(587).colors.ICON_DEFAULT };
      UserIcon = tmp12(12268).UserIcon;
      tmp15Result8 = tmp15(tmp17, obj20);
    }
    items6 = [tmp15Result8, ];
    const guild = sharing.guild;
    let name;
    const obj22 = { style: tmp.rowText, children: items7 };
    const Text = tmp12(5271).Text;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      const intl8 = tmp12(1125).intl;
      name = intl8.string(tmp2(3864)["37xgkF"]);
    }
    const obj23 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: name };
    items7 = [tmp15(Text, obj23), ];
    let tmp15Result9 = null;
    if (null != sharing.caption) {
      const obj24 = { variant: "text-xs/normal", color: "text-subtle", children: sharing.caption };
      tmp15Result9 = tmp15(tmp12(5271).Text, obj24);
    }
    const obj25 = { children: items5 };
    items7[1] = tmp15Result9;
    items6[1] = closure_9(closure_5, obj22);
    items5[1] = closure_9(closure_5, obj18);
    tmp16Result2 = tmp16(tmp17, obj25);
  }
  items2[5] = tmp16Result2;
  let tmp15Result10 = null;
  const obj26 = { style: tmp.footer, children: items8 };
  if (null != tmp4.note) {
    const obj27 = { variant: "text-sm/normal", color: "text-subtle", children: tmp4.note };
    tmp15Result10 = tmp15(tmp12(5271).Text, obj27);
  }
  items8 = [tmp15Result10, ];
  const obj28 = { style: tmp.actions, children: items9 };
  const obj55 = { variant: "secondary", size: "md", grow: true, text: intl9.string(tmp12(1125).t["ETE/oC"]), disabled: tmp4.saving, onPress: hidePublishSheet };
  const Button = tmp12(5281).Button;
  intl9 = tmp12(1125).intl;
  items9 = [tmp15(Button, obj55), ];
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
  const Button2 = tmp12(5281).Button;
  if (!disabled) {
    disabled = null != tmp4.nameError;
  }
  items9[1] = obj(Button2, obj56);
  items8[1] = closure_9(closure_5, obj28);
  items2[6] = closure_9(closure_5, obj26);
  return obj(ActionSheet, obj2);
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
let obj3 = { content: obj4, nameGroup: obj5, sectionTitle: obj6, followingSection: obj7, row: obj8, sharingRow: obj9, onlyMeIcon: obj10, rowText: { flex: 1 }, footer: obj11, actions: obj12 };
obj4 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj5 = { gap: nativeDefault.space.PX_8 };
obj6 = { marginBottom: nativeDefault.space.PX_4 };
obj7 = { marginTop: -nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_4 };
obj10 = { padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj11 = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj12 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
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
    class C {
      constructor() {
        const tmp = closure_1;
        if (tmp) {
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(ConjurePublishSheet_str);
        }
      }
    }
    const items2 = [null == tmp4 || null == stateFromStores];
    cResult[4] = null == tmp4 || null == stateFromStores;
    cResult[5] = C;
    cResult[6] = items2;
    tmp12 = items2;
    tmp11 = C;
  } else {
    class C {
      constructor() {
        const tmp = closure_1;
        if (tmp) {
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(ConjurePublishSheet_str);
        }
      }
    }
    tmp12 = cResult[6];
  }
  const effect = react.useEffect(tmp11, tmp12);
  if (cResult[7] === entryPoint) {
    class C {
      constructor() {
        const tmp = closure_1;
        if (tmp) {
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(ConjurePublishSheet_str);
        }
      }
    }
  }
  let tmp14 = null;
  if (null != tmp4) {
    class C {
      constructor() {
        const tmp = closure_1;
        if (tmp) {
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(ConjurePublishSheet_str);
        }
      }
    }
    if (null != stateFromStores) {
      class C {
        constructor() {
          const tmp = closure_1;
          if (tmp) {
            obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjurePublishSheet_str);
          }
        }
      }
      obj2 = { project: stateFromStores, publish: tmp4, entryPoint };
      tmp14 = closure_7(PublishSheetBody, obj2);
    }
  }
  cResult[7] = entryPoint;
  cResult[8] = stateFromStores;
  cResult[9] = tmp4;
  cResult[10] = tmp14;
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
    obj2 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
    const tmp8 = metroImportDefault(icon, obj2);
    cResult[0] = icon;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== label) {
    const obj3 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: label };
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
  obj2 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
  items[0] = metroImportDefault(icon, obj2);
  items[1] = metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: label });
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppChannelsPrivateSection(arg0) {
  let appChannelsPrivate;
  let channelCount;
  let disabled;
  let tmp4;
  obj = react2;
  const cResult = obj.c(10);
  ({ channelCount, appChannelsPrivate, disabled } = arg0);
  const isPrivate = appChannelsPrivate.isPrivate;
  let str = "text-muted";
  if (isPrivate) {
    str = "text-default";
  }
  if (cResult[0] !== channelCount) {
    const intl = tmp(1125).intl;
    obj2 = { count: channelCount };
    const formatToPlainStringResult = intl.formatToPlainString(_modDef3864.Td1mlg, obj2);
    cResult[0] = channelCount;
    cResult[1] = formatToPlainStringResult;
    tmp4 = formatToPlainStringResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === str) {
    let tmp7;
    if (cResult[3] === tmp4) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === appChannelsPrivate.setPrivate) {
      if (cResult[6] === disabled) {
        if (cResult[7] === isPrivate) {
          let tmp9;
          if (cResult[8] === tmp7) {
            tmp9 = cResult[9];
          }
          return tmp9;
        }
      }
    }
    const obj3 = { start: true, end: true, label: tmp7, value: isPrivate, disabled, onValueChange: appChannelsPrivate.setPrivate };
    const tmp11 = metroImportDefault(TableSwitchRow2.TableSwitchRow, obj3);
    cResult[5] = appChannelsPrivate.setPrivate;
    cResult[6] = disabled;
    cResult[7] = isPrivate;
    cResult[8] = tmp7;
    cResult[9] = tmp11;
    tmp9 = tmp11;
  }
  const tmp8 = metroImportDefault(Text_Text.Text, { variant: "text-md/medium", color: str, children: tmp4 });
  cResult[2] = str;
  cResult[3] = tmp4;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function AppChannelsPrivateSection(appChannelsPrivate) {
  let channelCount;
  let disabled;
  let intl;
  appChannelsPrivate = appChannelsPrivate.appChannelsPrivate;
  const isPrivate = appChannelsPrivate.isPrivate;
  ({ channelCount, disabled } = appChannelsPrivate);
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  let str = "text-muted";
  const Text = Text_Text.Text;
  if (isPrivate) {
    str = "text-default";
  }
  obj = { start: true, end: true, label: metroImportDefault(Text, obj2), value: isPrivate, disabled, onValueChange: appChannelsPrivate.setPrivate };
  obj2 = { variant: "text-md/medium", color: str, children: intl.formatToPlainString(_modDef3864.Td1mlg, { count: channelCount }) };
  intl = intl10.intl;
  return metroImportDefault(TableSwitchRow, obj);
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
