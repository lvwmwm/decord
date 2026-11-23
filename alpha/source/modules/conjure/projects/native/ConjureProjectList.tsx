// Module ID: 18648
// Function ID: 18649
// Name: ConjureProjectList
// Dependencies: [32, 19, 17, 1230, 6621, 21, 4913, 575, 1628, 1500, 18649, 18650, 18242, 18651, 18295, 5127, 18652, 12298, 18390, 6936, 12394, 18284, 7551, 7095, 7102, 13707, 1112, 5504, 4190, 5511, 6933, 18662, 7348, 7045, 13779, 6935, 504, 6638, 13787, 17734, 18395, 7022, 2]
// Exports: default

// Module 18648 (ConjureProjectList)
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5127 */;
import Text_Text from "Text/Text" /* 5504 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6933 */;
import TableRowGroup2 from "TableRowGroup" /* 7348 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 12298 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 13787 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18242 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 18284 */;
import ConjureHeaderIconButtonDefault from "ConjureHeaderIconButton" /* 18395 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 18652 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
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
  const obj = project(6935);
  const conjureProjectBadge = obj.useConjureProjectBadge(project.id);
  const items = [ConjureProjectStore];
  const items1 = [project.id];
  const obj2 = project(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ConjureProjectStore.isProjectDeleting(project.id), items1);
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp2(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { time: getRelativeTimestamp(date.getTime()) };
    const AXydi3 = _modDef4190.AXydi3;
    const _Date = Date;
    const self = this;
    const self2 = this;
    getRelativeTimestamp = project(6638).getRelativeTimestamp;
    project(6638);
    date = new Date(project.updated_at);
    formatToPlainStringResult = formatToPlainString(AXydi3, obj3);
  }
  const obj4 = { label: project.name, subLabel: formatToPlainStringResult, accessibilityHint: stringResult, disabled: stateFromStores, icon: closure_10(ConjureProjectIconDefault, { project, size: "list" }), trailing: tmp12Result, onPress, onLongPress: onMore };
  const TableRow = tmp2(7045).TableRow;
  if (stateFromStores) {
    const intl2 = tmp2(1112).intl;
    formatToPlainStringResult = intl2.string(_modDef4190.Yh5pAc);
  }
  stringResult = undefined;
  if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
    const intl3 = tmp2(1112).intl;
    stringResult = intl3.string(_modDef4190.hfIuc7);
  }
  if (stateFromStores) {
    tmp12Result = tmp14(closure_5, {});
  } else {
    let tmp14Result3 = null;
    const obj5 = { style: tmp.projectRowTrailing, children: items2 };
    if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
      const obj6 = { value: conjureProjectBadge };
      tmp14Result3 = tmp14(tmp18(17734), obj6);
    }
    items2 = [tmp14Result3, ];
    const obj7 = { IconComponent: project(7022).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl4.string(project(1112).t["UKOtz+"]) };
    const tmp18Result = ConjureHeaderIconButtonDefault;
    intl4 = tmp2(1112).intl;
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
  let obj11;
  let obj15;
  let obj16;
  let participating;
  let section;
  let settings;
  let shared;
  let tmp28;
  let tmp29;
  let tmp31Result;
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
  ({ participating, shared, fetchState } = require("useConjureServerProjects")(guildId));
  const tmp6 = require("useConjureServerProjects")(guildId);
  const arr = require("useConjureOtherOwnProjects")(guildId);
  let items = [guildId];
  const callback = memo.useCallback((arg0, project_list) => {
    let str = project_list;
    if (project_list === undefined) {
      str = "project_list";
    }
    const obj = conjureStandaloneScenes;
    const result = obj.pushServerProjectScreen(guildId, arg0, str);
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
  const isConjureEligibleGuild = guildId(navigation[13]).isConjureEligibleGuild;
  guildId(navigation[13]);
  let obj2 = guildId(navigation[14]);
  let result = isConjureEligibleGuild(obj2.useConjureEligibleGuilds("ConjureProjectList"), guildId);
  let c8 = result;
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
  let closure_11 = memo.useCallback((project) => {
    let obj2;
    let obj3;
    guildId = project;
    let tmp = guildId(navigation[18]);
    let obj = {
      project,
      guildId,
      muted: obj2.isConjureProjectMuted(settings.settings, project.id),
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
    obj2 = guildId(navigation[19]);
    obj3 = guildId(navigation[20]);
    const result = conjureProjectActions(obj);
    const obj4 = guildId(navigation[22]);
    const obj5 = { key: "ConjureProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
    const result1 = obj4.showSimpleActionSheet(obj5);
  }, items5);
  const items6 = [disabled, navigation, callback1, result];
  const effect = memo.useEffect(() => {
    let fn;
    let onPress;
    const setOptions = navigation.setOptions;
    if (first) {
      fn = () => callback2(guildId(navigation[23]).HeaderSubmittingIndicator, {});
    } else if (c8) {
      fn = (arg0) => {
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
            return closure_1_10(closure_1_0(closure_1_2[25]).PlusMediumIcon, { size: "md", color: color.tintColor });
          },
          accessibilityLabel: intl.string(guildId(navigation[26]).t.CumH4u)
        };
        const HeaderBackButton = guildId(navigation[24]).HeaderBackButton;
        intl = guildId(navigation[26]).intl;
        return callback2(HeaderBackButton, obj);
      };
    }
    setOptions({ headerRight: fn });
  }, items6);
  let tmp19Result4 = null;
  const tmp17 = participating.length > 0 || shared.length > 0;
  if (!tmp17) {
    let obj3 = { style: tmp3.centered, children: tmp31Result };
    let str = "error";
    if ("error" === fetchState) {
      let obj4 = { style: tmp3.listError, children: items7 };
      let obj5 = { variant: "body-md/normal", color: "text-muted", children: intl2.string(tmp(tmp2[28]).DJAPMO) };
      let Text = tmp4(tmp2[27]).Text;
      intl2 = tmp4(tmp2[26]).intl;
      items7 = [callback2(Text, obj5), ];
      const obj6 = {
        variant: "secondary",
        size: "sm",
        text: intl3.string(tmp(tmp2[28])["WFJ/vb"]),
        onPress() {
              const obj = ConjureActionCreators;
              return obj.listProjects(guildId);
            }
      };
      const Button2 = tmp4(tmp2[29]).Button;
      intl3 = tmp4(tmp2[26]).intl;
      items7[1] = callback2(Button2, obj6);
      tmp31Result = closure_11(tmp20, obj4);
    } else if ("success" !== fetchState) {
      tmp31Result = tmp19(memo1, {});
    } else {
      let prop;
      const obj7 = { style: tmp3.listError, children: items8 };
      const Text2 = tmp4(tmp2[27]).Text;
      const intl5 = tmp4(tmp2[26]).intl;
      const string = intl5.string;
      const tmp31 = closure_11;
      if (arr.length > 0) {
        prop = tmp(tmp2[28])["/I2lbz"];
      } else {
        prop = tmp(tmp2[28])["9/5sLV"];
      }
      const obj8 = { variant: "body-md/normal", color: "text-muted", children: string(prop) };
      items8 = [callback2(Text2, obj8), ];
      let tmp19Result3 = null;
      if (result) {
        const obj9 = { variant: "primary", size: "sm", text: intl.string(guildId(tmp2[26]).t.CumH4u), loading: disabled, disabled, onPress: callback1 };
        const Button = tmp4(tmp2[29]).Button;
        intl = tmp4(tmp2[26]).intl;
        tmp19Result3 = tmp19(Button, obj9);
      }
      items8[1] = tmp19Result3;
      tmp31Result = tmp31(tmp20, obj7);
    }
    tmp19Result4 = tmp19(tmp20, obj3);
  }
  const obj10 = { style: tmp3.content, children: tmp28(tmp29, obj11) };
  obj11 = { contentContainerStyle: items9, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items10 };
  items9 = [tmp3.listContent, { paddingBottom: tmp(tmp2[7]).space.PX_8 + bottom }];
  items10 = [, , , ];
  ({ paddingBottom: tmp(tmp2[7]).space.PX_8 + bottom });
  items10[0] = callback2(tmp(tmp2[31]), {});
  const items11 = [{ key: "participating", title: null, projects: participating }, { key: "shared", title: tmp(tmp2[28]).YHDMK6, projects: shared }];
  ({ key: "shared", title: tmp(tmp2[28]).YHDMK6, projects: shared });
  items10[1] = items11.map((projects) => {
    let intl;
    let items;
    let tmp = null;
    if (projects.projects.length > 0) {
      let obj = { style: section.section, children: items };
      let tmp5 = null;
      const tmp2 = unpackModuleId;
      const tmp3 = metroImportDefault;
      if (null != projects.title) {
        const obj2 = { variant: "heading-sm/semibold", color: "text-default", accessibilityRole: "header", children: intl.string(projects.title) };
        const Text = Text_Text.Text;
        intl = intl6.intl;
        tmp5 = authStore(Text, obj2);
      }
      items = [tmp5, ];
      const obj3 = {
        hasIcons: true,
        children: projects.map((project) => {
            const obj = {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_2_11(project);
              }
            };
            return callback2(closure_1_13, obj, project.id);
          })
      };
      projects = projects.projects;
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      items[1] = authStore(TableRowGroup, obj3);
      tmp = tmp2(tmp3, obj, projects.key);
    }
    return tmp;
  });
  items10[2] = tmp19Result4;
  let tmp26Result = null;
  const tmp27 = onSubmittingChange;
  tmp28 = closure_11;
  tmp29 = disabled;
  if (arr.length > 0) {
    const obj14 = { hasIcons: false, children: callback2(TableRow, obj15) };
    let TableRowGroup = tmp4(tmp2[32]).TableRowGroup;
    obj15 = { label: intl4.formatToPlainString(tmp(tmp2[28]).vnoMFE, obj16), arrow: true, onPress: guildId(tmp2[34]).showConjureProjectsSheet };
    TableRow = tmp4(tmp2[33]).TableRow;
    intl4 = tmp4(tmp2[26]).intl;
    obj16 = { count: arr.length };
    tmp26Result = tmp26(TableRowGroup, obj14);
  }
  items10[3] = tmp26Result;
  return callback2(tmp27, obj10);
};
