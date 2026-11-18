// Module ID: 18701
// Function ID: 18702
// Name: ConjureProjectList
// Dependencies: [32, 19, 17, 1231, 6529, 21, 4823, 575, 1630, 1502, 18702, 18703, 18296, 5037, 18704, 12244, 18419, 6847, 12312, 18317, 7462, 7006, 7013, 13635, 1113, 5414, 4121, 5421, 6844, 18717, 7259, 6956, 13708, 6846, 504, 6546, 13716, 17788, 18431, 6933, 2]
// Exports: default

// Module 18701 (ConjureProjectList)
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5037 */;
import Text_Text from "Text/Text" /* 5414 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6844 */;
import TableRowGroup2 from "TableRowGroup" /* 7259 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 12244 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 13716 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18296 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 18317 */;
import ConjureHeaderIconButtonDefault from "ConjureHeaderIconButton" /* 18431 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 18704 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6529 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;
let importDefault, navigation, projects;

let c10;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function ProjectRow(project) {
  let date;
  let getRelativeTimestamp;
  let intl4;
  let items2;
  let stringResult;
  let tmp12Result;
  project = project.project;
  const onMore = project.onMore;
  const onPress = project.onPress;
  const tmp = closure_12(0);
  const obj = project(6846);
  const conjureProjectBadge = obj.useConjureProjectBadge(project.id);
  const items = [ConjureProjectStore];
  const items1 = [project.id];
  const obj2 = project(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ConjureProjectStore.isProjectDeleting(project.id), items1);
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp2(1113).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { time: getRelativeTimestamp(date.getTime()) };
    const AXydi3 = _modDef4121.AXydi3;
    const _Date = Date;
    const self = this;
    const self2 = this;
    getRelativeTimestamp = project(6546).getRelativeTimestamp;
    project(6546);
    date = new Date(project.updated_at);
    formatToPlainStringResult = formatToPlainString(AXydi3, obj3);
  }
  const obj4 = { label: project.name, subLabel: formatToPlainStringResult, accessibilityHint: stringResult, disabled: stateFromStores, icon: closure_10(ConjureProjectIconDefault, { project, size: "list" }), trailing: tmp12Result, onPress, onLongPress: onMore };
  const TableRow = tmp2(6956).TableRow;
  if (stateFromStores) {
    const intl2 = tmp2(1113).intl;
    formatToPlainStringResult = intl2.string(_modDef4121.Yh5pAc);
  }
  stringResult = undefined;
  if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
    const intl3 = tmp2(1113).intl;
    stringResult = intl3.string(_modDef4121.hfIuc7);
  }
  if (stateFromStores) {
    tmp12Result = tmp14(closure_5, {});
  } else {
    let tmp14Result3 = null;
    const obj5 = { style: tmp.projectRowTrailing, children: items2 };
    if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
      const obj6 = { value: conjureProjectBadge };
      tmp14Result3 = tmp14(tmp18(17788), obj6);
    }
    items2 = [tmp14Result3, ];
    const obj7 = { IconComponent: project(6933).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl4.string(project(1113).t["UKOtz+"]) };
    const tmp18Result = ConjureHeaderIconButtonDefault;
    intl4 = tmp2(1113).intl;
    items2[1] = closure_10(tmp18Result, obj7);
    tmp12Result = tmp12(tmp13, obj5);
  }
  const children = [closure_10(TableRow, obj4), ];
  let tmp14Result4 = null;
  if (null != conjureProjectBadge) {
    tmp14Result4 = null;
    if (!stateFromStores) {
      const obj8 = { style: tmp.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
      tmp14Result4 = tmp14(tmp13, obj8);
    }
  }
  children[1] = tmp14Result4;
  return closure_11(closure_7, { children });
}
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, listContent: { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 }, section: { gap: nativeDefault.space.PX_8 }, projectRowTrailing: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, unreadPill: size, listError: { alignItems: "center", gap: nativeDefault.space.PX_12 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom });
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 });
  ({ paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 });
  ({ gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  size = { position: "absolute", left: 0, top: "50%", width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_4, borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  ({ alignItems: "center", gap: nativeDefault.space.PX_12 });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectList.tsx");

export default function ConjureProjectList(guildId) {
  let TableRow;
  let fetchState;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items7;
  let items8;
  let items9;
  let mine;
  let obj10;
  let obj15;
  let obj16;
  let section;
  let shared;
  let tmp25;
  let tmp26;
  let tmp28Result;
  guildId = guildId.guildId;
  importDefault = undefined;
  navigation = undefined;
  let memo;
  let tmp = importDefault;
  let tmp2 = navigation;
  const bottom = require("useSafeAreaInsets")().bottom;
  let tmp3 = closure_12(0);
  importDefault = tmp3;
  let obj = guildId(navigation[9]);
  navigation = obj.useNavigation();
  ({ mine, shared, fetchState } = require("useConjureServerProjects")(guildId));
  const tmp6 = require("useConjureServerProjects")(guildId);
  const arr = require("useConjureOtherOwnProjects")(guildId);
  let items = [navigation];
  const callback = memo.useCallback((projectId) => {
    let str = arg1;
    if (arg1 === undefined) {
      str = "project_list";
    }
    const obj = { projectId, entryPoint: str };
    navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
  }, items);
  const items1 = [guildId, callback];
  memo = memo.useMemo(() => {
    const obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, (arg0) => callback(arg0, "create"));
  }, items1);
  const items2 = [guildId, callback];
  const memo1 = memo.useMemo(() => {
    const obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, (arg0) => callback(arg0, "remix"));
  }, items2);
  const tmp10 = callback(memo.useState(false), 2);
  const disabled = tmp10[0];
  const onSubmittingChange = tmp10[1];
  const items3 = [guildId, memo];
  const callback1 = memo.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: authStore(ConjureCreateSheetDefault, obj2) };
    obj2 = { guildId, onCreated: memo, onSubmittingChange };
    showActionSheet(obj);
  }, items3);
  const items4 = [guildId, memo1];
  const callback2 = memo.useCallback((project) => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: authStore(ConjureRemixSheetDefault, obj2) };
    obj2 = { project, currentGuildId: guildId, onRemixed: memo1 };
    showActionSheet(obj);
  }, items4);
  const items5 = [guildId, callback, callback2];
  let closure_10 = memo.useCallback((project) => {
    let obj2;
    let obj3;
    guildId = project;
    let tmp = guildId(navigation[16]);
    let obj = {
      project,
      guildId,
      muted: obj2.isConjureProjectMuted(callback1.settings, project.id),
      removeTarget: obj3.readConjureRemoveTarget(project),
      openChat() {
        return callback(project.id);
      },
      onRemix() {
        return callback2(project);
      },
      onOpenSettings() {
        let guild_id;
        let obj2;
        let tmp2;
        let tmp3;
        const tmp = ActionSheetActionCreators;
        const showActionSheet = tmp.showActionSheet;
        const obj = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
        obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
        guild_id = project.guild_id;
        tmp2 = authStore;
        tmp3 = ConjureSettingsSheetDefault;
        if (guild_id == null) {
          guild_id = guildId;
        }
        return showActionSheet(obj);
      }
    };
    const conjureProjectActions = tmp.conjureProjectActions;
    obj2 = guildId(navigation[17]);
    obj3 = guildId(navigation[18]);
    const result = conjureProjectActions(obj);
    const obj4 = guildId(navigation[20]);
    const obj5 = { key: "ConjureProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
    const result1 = obj4.showSimpleActionSheet(obj5);
  }, items5);
  const items6 = [disabled, navigation, callback1];
  const effect = memo.useEffect(() => {
    let onPress;
    let obj = {
      headerRight: first ? (() => closure_1_10(guildId(navigation[21]).HeaderSubmittingIndicator, {})) : ((arg0) => {
        let intl;
        let pressColor;
        let pressOpacity;
        let tintColor;
        ({ tintColor, pressColor, pressOpacity } = arg0);
        const obj = {
          tintColor,
          pressColor,
          pressOpacity,
          onPress,
          displayMode: "minimal",
          backImage(color) {
            return closure_1_10(closure_1_0(closure_1_2[23]).PlusMediumIcon, { size: "md", color: color.tintColor });
          },
          accessibilityLabel: intl.string(guildId(navigation[24]).t.CumH4u)
        };
        const HeaderBackButton = guildId(navigation[22]).HeaderBackButton;
        intl = guildId(navigation[24]).intl;
        return closure_10(HeaderBackButton, obj);
      })
    };
    navigation.setOptions(obj);
  }, items6);
  let tmp17Result2 = null;
  const tmp15 = mine.length > 0 || shared.length > 0;
  if (!tmp15) {
    let obj2 = { style: tmp3.centered, children: tmp28Result };
    let str = "error";
    if ("error" === fetchState) {
      let obj3 = { style: tmp3.listError, children: items7 };
      let obj4 = { variant: "body-md/normal", color: "text-muted", children: intl2.string(tmp(tmp2[26]).DJAPMO) };
      let Text = tmp4(tmp2[25]).Text;
      intl2 = tmp4(tmp2[24]).intl;
      items7 = [closure_10(Text, obj4), ];
      let obj5 = {
        variant: "secondary",
        size: "sm",
        text: intl3.string(tmp(tmp2[26])["WFJ/vb"]),
        onPress() {
              const obj = ConjureActionCreators;
              return obj.listProjects(guildId);
            }
      };
      const Button2 = tmp4(tmp2[27]).Button;
      intl3 = tmp4(tmp2[24]).intl;
      items7[1] = closure_10(Button2, obj5);
      tmp28Result = closure_11(tmp18, obj3);
    } else if ("success" !== fetchState) {
      tmp28Result = tmp17(memo1, {});
    } else {
      let prop;
      const obj6 = { style: tmp3.listError, children: items8 };
      const Text2 = tmp4(tmp2[25]).Text;
      const intl5 = tmp4(tmp2[24]).intl;
      const string = intl5.string;
      const tmp28 = closure_11;
      if (arr.length > 0) {
        prop = tmp(tmp2[26])["/I2lbz"];
      } else {
        prop = tmp(tmp2[26])["9/5sLV"];
      }
      const obj7 = { variant: "body-md/normal", color: "text-muted", children: string(prop) };
      items8 = [closure_10(Text2, obj7), ];
      const obj8 = { variant: "primary", size: "sm", text: intl.string(guildId(tmp2[24]).t.CumH4u), loading: disabled, disabled, onPress: callback1 };
      const Button = tmp4(tmp2[27]).Button;
      intl = tmp4(tmp2[24]).intl;
      items8[1] = closure_10(Button, obj8);
      tmp28Result = tmp28(tmp18, obj6);
    }
    tmp17Result2 = tmp17(tmp18, obj2);
  }
  const obj9 = { style: tmp3.content, children: tmp25(tmp26, obj10) };
  obj10 = { contentContainerStyle: items9, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items10 };
  items9 = [tmp3.listContent, { paddingBottom: tmp(tmp2[7]).space.PX_8 + bottom }];
  items10 = [, , , ];
  ({ paddingBottom: tmp(tmp2[7]).space.PX_8 + bottom });
  items10[0] = closure_10(tmp(tmp2[29]), {});
  const items11 = [{ key: "mine", title: tmp(tmp2[26])["8LfMqp"], projects: mine }, ];
  ({ key: "mine", title: tmp(tmp2[26])["8LfMqp"], projects: mine });
  items11[1] = { key: "shared", title: tmp(tmp2[26]).YHDMK6, projects: shared };
  ({ key: "shared", title: tmp(tmp2[26]).YHDMK6, projects: shared });
  items10[1] = items11.map((projects) => {
    let intl;
    let items;
    let tmp = null;
    if (projects.projects.length > 0) {
      let obj = { style: section.section, children: items };
      const obj2 = { variant: "heading-sm/semibold", color: "text-default", accessibilityRole: "header", children: intl.string(projects.title) };
      const Text = Text_Text.Text;
      intl = intl6.intl;
      items = [authStore(Text, obj2), ];
      const obj3 = {
        hasIcons: true,
        children: projects.map((project) => {
            const obj = {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_2_10(project);
              }
            };
            return closure_1_10(closure_1_13, obj, project.id);
          })
      };
      projects = projects.projects;
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      items[1] = authStore(TableRowGroup, obj3);
      tmp = unpackModuleId(metroImportDefault, obj, projects.key);
    }
    return tmp;
  });
  items10[2] = tmp17Result2;
  let tmp23Result = null;
  const tmp24 = onSubmittingChange;
  tmp25 = closure_11;
  tmp26 = disabled;
  if (arr.length > 0) {
    const obj14 = { hasIcons: false, children: closure_10(TableRow, obj15) };
    let TableRowGroup = tmp4(tmp2[30]).TableRowGroup;
    obj15 = { label: intl4.formatToPlainString(tmp(tmp2[26]).vnoMFE, obj16), arrow: true, onPress: guildId(tmp2[32]).showConjureProjectsSheet };
    TableRow = tmp4(tmp2[31]).TableRow;
    intl4 = tmp4(tmp2[24]).intl;
    obj16 = { count: arr.length };
    tmp23Result = tmp23(TableRowGroup, obj14);
  }
  items10[3] = tmp23Result;
  return closure_10(tmp24, obj9);
};
