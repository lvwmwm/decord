// Module ID: 13119
// Function ID: 13120
// Name: ConjureProjectList
// Dependencies: [19, 17, 1231, 6964, 21, 5141, 575, 1627, 1499, 13120, 13123, 12223, 5381, 13124, 10978, 12357, 11008, 12348, 12263, 7484, 7131, 11621, 1113, 5747, 3995, 5754, 11005, 13139, 7186, 7101, 13141, 11007, 504, 6980, 12258, 13149, 12370, 9888, 2]
// Exports: default

// Module 13119 (ConjureProjectList)
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5381 */;
import Text_Text from "Text/Text" /* 5747 */;
import TableRowGroup2 from "TableRowGroup" /* 7186 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10978 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11005 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 12223 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 12258 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12263 */;
import ConjureHeaderIconButtonDefault from "ConjureHeaderIconButton" /* 12370 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 13124 */;
import openConjureProjectsSheet from "openConjureProjectsSheet" /* 13141 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6964 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;
let importDefault, navigation, projects;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroRequire;
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
  const tmp = closure_11(0);
  const obj = project(11007);
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
    const AXydi3 = _modDef3995.AXydi3;
    const _Date = Date;
    const self = this;
    const self2 = this;
    getRelativeTimestamp = project(6980).getRelativeTimestamp;
    project(6980);
    date = new Date(project.updated_at);
    formatToPlainStringResult = formatToPlainString(AXydi3, obj3);
  }
  const obj4 = { label: project.name, subLabel: formatToPlainStringResult, accessibilityHint: stringResult, disabled: stateFromStores, icon: closure_9(ConjureProjectIconDefault, { project, size: "list" }), trailing: tmp12Result, onPress, onLongPress: onMore };
  const TableRow = tmp2(7101).TableRow;
  if (stateFromStores) {
    const intl2 = tmp2(1113).intl;
    formatToPlainStringResult = intl2.string(_modDef3995.Yh5pAc);
  }
  stringResult = undefined;
  if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
    const intl3 = tmp2(1113).intl;
    stringResult = intl3.string(_modDef3995.hfIuc7);
  }
  if (stateFromStores) {
    tmp12Result = tmp14(closure_4, {});
  } else {
    let tmp14Result3 = null;
    const obj5 = { style: tmp.projectRowTrailing, children: items2 };
    if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
      const obj6 = { value: conjureProjectBadge };
      tmp14Result3 = tmp14(tmp18(13149), obj6);
    }
    items2 = [tmp14Result3, ];
    const obj7 = { IconComponent: project(9888).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl4.string(project(1113).t["UKOtz+"]) };
    const tmp18Result = ConjureHeaderIconButtonDefault;
    intl4 = tmp2(1113).intl;
    items2[1] = closure_9(tmp18Result, obj7);
    tmp12Result = tmp12(tmp13, obj5);
  }
  const children = [closure_9(TableRow, obj4), ];
  let tmp14Result4 = null;
  if (null != conjureProjectBadge) {
    tmp14Result4 = null;
    if (!stateFromStores) {
      const obj8 = { style: tmp.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
      tmp14Result4 = tmp14(tmp13, obj8);
    }
  }
  children[1] = tmp14Result4;
  return closure_10(closure_6, { children });
}
({ ActivityIndicator: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((paddingBottom) => {
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
  let tmp23;
  let tmp24;
  let tmp26Result;
  guildId = guildId.guildId;
  importDefault = undefined;
  navigation = undefined;
  let callback;
  let tmp = importDefault;
  let tmp2 = navigation;
  const bottom = require("useSafeAreaInsets")().bottom;
  let tmp3 = closure_11(0);
  importDefault = tmp3;
  let obj = guildId(navigation[8]);
  navigation = obj.useNavigation();
  ({ mine, shared, fetchState } = require("useConjureServerProjects")(guildId));
  const tmp6 = require("useConjureServerProjects")(guildId);
  const arr = require("useConjureOtherOwnProjects")(guildId);
  let items = [navigation];
  callback = callback.useCallback((projectId) => {
    let str = arg1;
    if (arg1 === undefined) {
      str = "project_list";
    }
    const obj = { projectId, entryPoint: str };
    navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
  }, items);
  const items1 = [guildId, callback];
  const memo = callback.useMemo(() => {
    const obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, (arg0) => callback(arg0, "create"));
  }, items1);
  const items2 = [guildId, callback];
  const memo1 = callback.useMemo(() => {
    const obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, (arg0) => callback(arg0, "remix"));
  }, items2);
  const items3 = [guildId, memo];
  const callback1 = callback.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: React4(ConjureCreateSheetDefault, obj2) };
    obj2 = { guildId, onCreated: memo };
    showActionSheet(obj);
  }, items3);
  const items4 = [guildId, memo1];
  const callback2 = callback.useCallback((project) => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: React4(ConjureRemixSheetDefault, obj2) };
    obj2 = { project, currentGuildId: guildId, onRemixed: memo1 };
    showActionSheet(obj);
  }, items4);
  const items5 = [guildId, callback, callback2];
  let closure_8 = callback.useCallback((project) => {
    let obj2;
    let obj3;
    guildId = project;
    let tmp = guildId(navigation[15]);
    let obj = {
      project,
      guildId,
      muted: obj2.isConjureProjectMuted(callback2.settings, project.id),
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
        tmp2 = React4;
        tmp3 = ConjureSettingsSheetDefault;
        if (guild_id == null) {
          guild_id = guildId;
        }
        return showActionSheet(obj);
      }
    };
    const conjureProjectActions = tmp.conjureProjectActions;
    obj2 = guildId(navigation[16]);
    obj3 = guildId(navigation[17]);
    const result = conjureProjectActions(obj);
    const obj4 = guildId(navigation[19]);
    const obj5 = { key: "ConjureProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
    const result1 = obj4.showSimpleActionSheet(obj5);
  }, items5);
  const items6 = [navigation, callback1];
  const effect = callback.useEffect(() => {
    let onPress;
    let obj = {
      headerRight(arg0) {
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
            return closure_1_9(closure_1_0(closure_1_2[21]).PlusMediumIcon, { size: "md", color: color.tintColor });
          },
          accessibilityLabel: intl.string(guildId(navigation[22]).t.CumH4u)
        };
        const HeaderBackButton = guildId(navigation[20]).HeaderBackButton;
        intl = guildId(navigation[22]).intl;
        return closure_2_9(HeaderBackButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items6);
  let tmp15Result2 = null;
  const tmp13 = mine.length > 0 || shared.length > 0;
  if (!tmp13) {
    let obj2 = { style: tmp3.centered, children: tmp26Result };
    let str = "error";
    if ("error" === fetchState) {
      let obj3 = { style: tmp3.listError, children: items7 };
      let obj4 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp(tmp2[24]).DJAPMO) };
      let Text = tmp4(tmp2[23]).Text;
      intl2 = tmp4(tmp2[22]).intl;
      items7 = [closure_9(Text, obj4), ];
      let obj5 = {
        variant: "secondary",
        size: "sm",
        text: intl3.string(tmp(tmp2[24])["WFJ/vb"]),
        onPress() {
              const obj = ConjureActionCreators;
              return obj.listProjects(guildId);
            }
      };
      const Button2 = tmp4(tmp2[25]).Button;
      intl3 = tmp4(tmp2[22]).intl;
      items7[1] = closure_9(Button2, obj5);
      tmp26Result = closure_10(tmp16, obj3);
    } else if ("success" !== fetchState) {
      tmp26Result = tmp15(memo, {});
    } else {
      let prop;
      const obj6 = { style: tmp3.listError, children: items8 };
      const Text2 = tmp4(tmp2[23]).Text;
      const intl5 = tmp4(tmp2[22]).intl;
      const string = intl5.string;
      const tmp26 = closure_10;
      if (arr.length > 0) {
        prop = tmp(tmp2[24])["/I2lbz"];
      } else {
        prop = tmp(tmp2[24])["9/5sLV"];
      }
      const obj7 = { variant: "text-md/normal", color: "text-muted", children: string(prop) };
      items8 = [closure_9(Text2, obj7), ];
      const obj8 = { variant: "primary", size: "sm", text: intl.string(guildId(tmp2[22]).t.CumH4u), onPress: callback1 };
      const Button = tmp4(tmp2[25]).Button;
      intl = tmp4(tmp2[22]).intl;
      items8[1] = closure_9(Button, obj8);
      tmp26Result = tmp26(tmp16, obj6);
    }
    tmp15Result2 = tmp15(tmp16, obj2);
  }
  const obj9 = { style: tmp3.content, children: tmp23(tmp24, obj10) };
  obj10 = { contentContainerStyle: items9, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items10 };
  items9 = [tmp3.listContent, { paddingBottom: tmp(tmp2[6]).space.PX_8 + bottom }];
  items10 = [, , , ];
  ({ paddingBottom: tmp(tmp2[6]).space.PX_8 + bottom });
  items10[0] = closure_9(tmp(tmp2[27]), {});
  const items11 = [{ key: "mine", title: tmp(tmp2[24])["8LfMqp"], projects: mine }, ];
  ({ key: "mine", title: tmp(tmp2[24])["8LfMqp"], projects: mine });
  items11[1] = { key: "shared", title: tmp(tmp2[24]).YHDMK6, projects: shared };
  ({ key: "shared", title: tmp(tmp2[24]).YHDMK6, projects: shared });
  items10[1] = items11.map((projects) => {
    let intl;
    let items;
    let tmp = null;
    if (projects.projects.length > 0) {
      let obj = { style: section.section, children: items };
      const obj2 = { variant: "heading-md/semibold", color: "text-default", accessibilityRole: "header", children: intl.string(projects.title) };
      const Text = Text_Text.Text;
      intl = intl6.intl;
      items = [React4(Text, obj2), ];
      const obj3 = {
        hasIcons: true,
        children: projects.map((project) => {
            const obj = {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_2_8(project);
              }
            };
            return closure_1_9(closure_1_12, obj, project.id);
          })
      };
      projects = projects.projects;
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      items[1] = React4(TableRowGroup, obj3);
      tmp = authStore(metroRequire, obj, projects.key);
    }
    return tmp;
  });
  items10[2] = tmp15Result2;
  let tmp21Result = null;
  const tmp22 = callback1;
  tmp23 = closure_10;
  tmp24 = memo1;
  if (arr.length > 0) {
    const obj14 = { hasIcons: false, children: closure_9(TableRow, obj15) };
    let TableRowGroup = tmp4(tmp2[28]).TableRowGroup;
    obj15 = {
      label: intl4.formatToPlainString(tmp(tmp2[24]).vnoMFE, obj16),
      arrow: true,
      onPress() {
          const obj = openConjureProjectsSheet;
          return obj.openConjureProjectsSheetForGuild(guildId);
        }
    };
    TableRow = tmp4(tmp2[29]).TableRow;
    intl4 = tmp4(tmp2[22]).intl;
    obj16 = { count: arr.length };
    tmp21Result = tmp21(TableRowGroup, obj14);
  }
  items10[3] = tmp21Result;
  return closure_9(tmp22, obj9);
};
