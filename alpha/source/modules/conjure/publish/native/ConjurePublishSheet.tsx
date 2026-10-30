// Module ID: 12407
// Function ID: 12408
// Name: ConjurePublishSheet
// Dependencies: [5, 19, 17, 6838, 21, 9565, 8665, 6839, 12408, 12410, 12412, 11255, 5009, 575, 5707, 5253, 12400, 504, 12414, 6017, 5586, 8669, 8670, 1114, 3865, 7360, 12420, 12425, 7076, 7247, 5619, 6951, 12431, 5629, 7363, 5647, 2]
// Exports: default

// Module 12407 (ConjurePublishSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6839 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7363 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8665 */;
import AppsIcon2 from "AppsIcon" /* 8670 */;
import ScreenIcon from "ScreenIcon" /* 9565 */;
import ShieldIcon from "ShieldIcon" /* 11255 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12400 */;
import RobotIcon from "RobotIcon" /* 12408 */;
import ActivitiesIcon from "ActivitiesIcon" /* 12410 */;
import BadgeIcon from "BadgeIcon" /* 12412 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
let tmp2;
const intl10 = tmp2(1114);
function showCriticalToast(text) {
  obj = ToastActionCreatorsDefault;
  obj2 = { text, variant: "critical" };
  obj.open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
}
function hidePublishSheet() {
  obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(ConjurePublishSheet_str);
}
function ConjurePublishSheet(projectId) {
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
          return { value: "HermesInternal", done: null };
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
            return { value: "HermesInternal", done: null };
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
              return { value: "HermesInternal", done: null };
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
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
  const tmp4 = entryPoint(12414)(project, publish);
  dependencyMap = tmp4;
  entryPoint(6017)(() => true, tmp4.saving);
  obj = react;
  let closure_3 = react.useRef(false);
  const context = react.useContext(entryPoint(5586));
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
    AppsIcon = publish(8669).AppsLockIcon;
    tmp12 = publish;
  } else {
    let tmp11 = publish;
    AppsIcon = publish(8670).AppsIcon;
    tmp12 = publish;
  }
  if (initial) {
    const initialChannelNames = tmp4.initialChannelNames;
    mapped = initialChannelNames.map((label) => {
      obj = { icon: AppsIcon, label };
      return metroImportDefault(ContentRow, obj, "channel:" + label);
    });
  } else {
    const channels = tmp4.channels;
    mapped = channels.map((channel) => {
      obj = { channel };
      return obj(ChannelRow, obj, channel.id);
    });
  }
  const items1 = [
    ...mapped,
    ...components.map((label) => {
      const surface = label.surface;
      obj = { icon: obj2[surface], label: label.label };
      return obj(ContentRow, obj, surface);
    })
  ];
  components = tmp4.components;
  obj2 = { startExpanded: editable, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl.string(tmp2(3865).NEPcoi), children: tmp16(tmp17, obj3) };
  const ActionSheet = tmp12(7360).ActionSheet;
  intl = tmp12(1114).intl;
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
    tmp15Result = tmp15(tmp12(12420).ConjureAppIconTile, obj4);
  } else {
    const obj5 = { project, size: "dialog" };
    tmp15Result = tmp15(tmp2(12425), obj5);
  }
  items2 = [tmp15Result, , , , , , ];
  if (editable) {
    const obj6 = { label: intl2.string(entryPoint(3865).knevPu), value: null, onChange: null, maxLength: tmp12(6839).MAX_PROJECT_NAME_LENGTH, disabled: null, errorMessage: nameError };
    const TextInput = tmp12(7076).TextInput;
    intl2 = tmp12(1114).intl;
    ({ name: obj9.value, setName: obj9.onChange } = tmp4);
    ({ saving: obj9.disabled, nameError } = tmp4);
    const obj7 = { children: items3 };
    items3 = [tmp15(TextInput, obj6), ];
    const obj8 = { label: intl3.string(entryPoint(3865).ynaGa1), placeholder: intl4.string(entryPoint(3865)["I+3UTL"]), value: null, onChange: null, maxLength: tmp12(6839).MAX_APP_DESCRIPTION_LENGTH, disabled: tmp4.saving };
    const TextArea = tmp12(7247).TextArea;
    intl3 = tmp12(1114).intl;
    intl4 = tmp12(1114).intl;
    ({ description: obj11.value, setDescription: obj11.onChange } = identity);
    items3[1] = obj(TextArea, obj8);
    tmp16Result = tmp16(closure_8, obj7);
  } else {
    const obj10 = { style: tmp.nameGroup, children: items4 };
    const obj12 = { variant: "heading-lg/semibold", color: "text-strong", lineClamp: 1, children: tmp4.displayName };
    items4 = [tmp15(tmp12(5619).Text, obj12), ];
    let tmp15Result6 = null;
    if ("" !== tmp4.description) {
      const obj13 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 2, children: tmp4.description };
      tmp15Result6 = tmp15(tmp12(5619).Text, obj13);
    }
    items4[1] = tmp15Result6;
    tmp16Result = tmp16(tmp17, obj10);
  }
  items2[1] = tmp16Result;
  const obj14 = { title: intl5.string(entryPoint(3865).BqNMms), rows: items1 };
  intl5 = tmp12(1114).intl;
  items2[2] = obj(RowSection, obj14);
  let tmp15Result7 = null;
  const tmp22 = RowSection;
  if (null != appChannelsPrivate) {
    const obj15 = { channelCount: tmp4.initialChannelNames.length, appChannelsPrivate, disabled: tmp4.saving };
    tmp15Result7 = tmp15(AppChannelsPrivateSection, obj15);
  }
  items2[3] = tmp15Result7;
  const obj16 = {
    title: intl6.string(entryPoint(3865).LnqeFd),
    following: items1.length > 0 && null == appChannelsPrivate,
    rows: devicePermissions.map((item) => {
      let intl;
      obj = { icon: closure_1_11[item], label: intl.string(publish(closure_2[18]).CONJURE_PUBLISH_PERMISSION_LABELS[item]) };
      intl = publish(closure_2[23]).intl;
      return obj(ContentRow, obj, item);
    })
  };
  intl6 = tmp12(1114).intl;
  devicePermissions = tmp4.devicePermissions;
  items2[4] = obj(tmp22, obj16);
  let tmp16Result2 = null;
  if (null != sharing) {
    let tmp15Result8;
    const obj17 = { title: intl7.string(entryPoint(3865).esTM8y) };
    intl7 = tmp12(1114).intl;
    const items5 = [tmp15(SectionTitle, obj17), ];
    const obj18 = { style: tmp.sharingRow, children: items6 };
    if (null != sharing.guild) {
      const obj19 = { guild: sharing.guild, size: tmp12(6951).GuildIconSizes.SMALL_36 };
      const tmp2Result = entryPoint(6951);
      tmp15Result8 = tmp15(tmp2Result, obj19);
    } else {
      const obj20 = { style: tmp.onlyMeIcon, children: obj(UserIcon, obj21) };
      obj21 = { size: "xs", color: entryPoint(575).colors.ICON_DEFAULT };
      UserIcon = tmp12(12431).UserIcon;
      tmp15Result8 = tmp15(tmp17, obj20);
    }
    items6 = [tmp15Result8, ];
    const guild = sharing.guild;
    let name;
    const obj22 = { style: tmp.rowText, children: items7 };
    const Text = tmp12(5619).Text;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      const intl8 = tmp12(1114).intl;
      name = intl8.string(tmp2(3865)["37xgkF"]);
    }
    const obj23 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: name };
    items7 = [tmp15(Text, obj23), ];
    let tmp15Result9 = null;
    if (null != sharing.caption) {
      const obj24 = { variant: "text-xs/normal", color: "text-subtle", children: sharing.caption };
      tmp15Result9 = tmp15(tmp12(5619).Text, obj24);
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
    tmp15Result10 = tmp15(tmp12(5619).Text, obj27);
  }
  items8 = [tmp15Result10, ];
  const obj28 = { style: tmp.actions, children: items9 };
  const obj55 = { variant: "secondary", size: "md", grow: true, text: intl9.string(tmp12(1114).t["ETE/oC"]), disabled: tmp4.saving, onPress: hidePublishSheet };
  const Button = tmp12(5629).Button;
  intl9 = tmp12(1114).intl;
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
  const Button2 = tmp12(5629).Button;
  if (!disabled) {
    disabled = null != tmp4.nameError;
  }
  items9[1] = obj(Button2, obj56);
  items8[1] = closure_9(closure_5, obj28);
  items2[6] = closure_9(closure_5, obj26);
  return obj(ActionSheet, obj2);
}
function SectionTitle(title) {
  title = title.title;
  obj = { variant: "text-sm/semibold", color: "text-subtle", accessibilityRole: "header", style: closure_13().sectionTitle, children: title };
  return metroImportDefault(Text_Text.Text, obj);
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
    const tmp3 = React4;
    const tmp4 = View;
    if (following) {
      following = tmp.followingSection;
    }
    obj = { style: following, children: items };
    obj2 = { title };
    items = [metroImportDefault(SectionTitle, obj2), rows];
    tmp3Result = tmp3(tmp4, obj);
  }
  return tmp3Result;
}
function ContentRow(arg0) {
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
}
function AppChannelsPrivateSection(appChannelsPrivate) {
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
  obj2 = { variant: "text-md/medium", color: str, children: intl.formatToPlainString(_modDef3865.Td1mlg, { count: channelCount }) };
  intl = intl10.intl;
  return metroImportDefault(TableSwitchRow, obj);
}
function ChannelRow(channel) {
  let str;
  obj = { icon: AppsIcon2.AppsIcon, label: str };
  str = useChannelNameDefault(channel.channel);
  const tmp = metroImportDefault;
  const tmp2 = ContentRow;
  if (str == null) {
    str = "";
  }
  return tmp(tmp2, obj);
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
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishSheet.tsx");

export default function showConjurePublishSheet(arg0) {
  obj = { key: ConjurePublishSheet_str, content: metroImportDefault(ConjurePublishSheet, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = {};
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};
