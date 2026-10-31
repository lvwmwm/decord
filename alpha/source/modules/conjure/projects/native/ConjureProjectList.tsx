// Module ID: 12980
// Function ID: 12981
// Name: ConjureProjectList
// Dependencies: [19, 17, 1231, 6844, 21, 5014, 575, 1625, 1497, 504, 7419, 12071, 12086, 5258, 12981, 10848, 12555, 10878, 12548, 12468, 7364, 7005, 11483, 1113, 5624, 3868, 5634, 10875, 12996, 7060, 10877, 6860, 6975, 12463, 12998, 12568, 9756, 2]
// Exports: default

// Module 12980 (ConjureProjectList)
import nativeDefault from "native" /* 575 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10848 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10875 */;
import ConjureActivity from "ConjureActivity" /* 12071 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 12086 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 12463 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12468 */;
import ConjureHeaderIconButtonDefault from "ConjureHeaderIconButton" /* 12568 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 12981 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;
let navigation;

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
  const obj = project(10877);
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
    const AXydi3 = _modDef3868.AXydi3;
    const _Date = Date;
    const self = this;
    const self2 = this;
    getRelativeTimestamp = project(6860).getRelativeTimestamp;
    project(6860);
    date = new Date(project.updated_at);
    formatToPlainStringResult = formatToPlainString(AXydi3, obj3);
  }
  const obj4 = { label: project.name, subLabel: formatToPlainStringResult, accessibilityHint: stringResult, disabled: stateFromStores, icon: closure_9(ConjureProjectIconDefault, { project, size: "list" }), trailing: tmp12Result, onPress, onLongPress: onMore };
  const TableRow = tmp2(6975).TableRow;
  if (stateFromStores) {
    const intl2 = tmp2(1113).intl;
    formatToPlainStringResult = intl2.string(_modDef3868.Yh5pAc);
  }
  stringResult = undefined;
  if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
    const intl3 = tmp2(1113).intl;
    stringResult = intl3.string(_modDef3868.hfIuc7);
  }
  if (stateFromStores) {
    tmp12Result = tmp14(closure_4, {});
  } else {
    let tmp14Result3 = null;
    const obj5 = { style: tmp.projectRowTrailing, children: items2 };
    if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
      const obj6 = { mentionsCount: conjureProjectBadge };
      tmp14Result3 = tmp14(tmp18(12998), obj6);
    }
    items2 = [tmp14Result3, ];
    const obj7 = { IconComponent: project(9756).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl4.string(project(1113).t["UKOtz+"]) };
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
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, listContent: { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 }, section: { gap: nativeDefault.space.PX_8 }, projectRowTrailing: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, unreadPill: size, sectionHeading: { gap: nativeDefault.space.PX_4 }, listError: { alignItems: "center", gap: nativeDefault.space.PX_12 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom });
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 });
  ({ paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 });
  ({ gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  size = { position: "absolute", left: 0, top: "50%", width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_4, borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  ({ gap: nativeDefault.space.PX_4 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_12 });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectList.tsx");

export default function ConjureProjectList(guildId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let obj13;
  let tmp25;
  guildId = guildId.guildId;
  navigation = undefined;
  let stateFromStoresArray;
  let callback2;
  let tmp = navigation;
  let tmp2 = stateFromStoresArray;
  const bottom = navigation(stateFromStoresArray[7])().bottom;
  let tmp3 = closure_11(0);
  let obj = guildId(stateFromStoresArray[8]);
  navigation = obj.useNavigation();
  let obj2 = guildId(stateFromStoresArray[9]);
  const items = [callback2];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => callback2.getOwnedProjects(), []);
  let obj3 = guildId(stateFromStoresArray[9]);
  const items1 = [callback2];
  const items2 = [guildId];
  const stateFromStoresArray1 = obj3.useStateFromStoresArray(items1, () => ConjureProjectStore.getSharedProjects(guildId), items2);
  let obj4 = guildId(stateFromStoresArray[9]);
  const items3 = [callback2];
  const stateFromStores = obj4.useStateFromStores(items3, () => callback2.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = stateFromStoresArray1.useMemo(() => {
    const found = stateFromStoresArray.filter((item) => {
      const obj = guildId(stateFromStoresArray[10]);
      return obj.isConjureProjectInGuild(item, closure_1_0);
    });
    return found.sort(ConjureActivity.compareConjureProjectsByUpdatedAt);
  }, items4);
  const items5 = [stateFromStoresArray1];
  const memo1 = stateFromStoresArray1.useMemo(() => {
    const substr = stateFromStoresArray1.slice();
    return substr.sort(ConjureActivity.compareConjureProjectsByUpdatedAt);
  }, items5);
  const items6 = [navigation];
  const callback = stateFromStoresArray1.useCallback((projectId) => {
    let str = arg1;
    if (arg1 === undefined) {
      str = "project_list";
    }
    const obj = { projectId, entryPoint: str };
    navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
  }, items6);
  const items7 = [guildId, callback];
  const memo2 = stateFromStoresArray1.useMemo(() => {
    const obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, (arg0) => callback(arg0, "create"));
  }, items7);
  const items8 = [guildId, callback];
  const memo3 = stateFromStoresArray1.useMemo(() => {
    const obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, (arg0) => callback(arg0, "remix"));
  }, items8);
  const items9 = [guildId, memo2];
  const callback1 = stateFromStoresArray1.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: React4(ConjureCreateSheetDefault, obj2) };
    obj2 = { guildId, onCreated: memo2 };
    showActionSheet(obj);
  }, items9);
  const items10 = [guildId, memo3];
  callback2 = stateFromStoresArray1.useCallback((project) => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: React4(ConjureRemixSheetDefault, obj2) };
    obj2 = { project, currentGuildId: guildId, onRemixed: memo3 };
    showActionSheet(obj);
  }, items10);
  const items11 = [guildId, callback, callback2];
  let closure_9 = stateFromStoresArray1.useCallback((project) => {
    let obj2;
    let obj3;
    guildId = project;
    let tmp = guildId(stateFromStoresArray[16]);
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
        tmp2 = React4;
        tmp3 = ConjureSettingsSheetDefault;
        if (guild_id == null) {
          guild_id = guildId;
        }
        return showActionSheet(obj);
      }
    };
    const conjureProjectActions = tmp.conjureProjectActions;
    obj2 = guildId(stateFromStoresArray[17]);
    obj3 = guildId(stateFromStoresArray[18]);
    const result = conjureProjectActions(obj);
    const obj4 = guildId(stateFromStoresArray[20]);
    const obj5 = { key: "ConjureProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
    const result1 = obj4.showSimpleActionSheet(obj5);
  }, items11);
  const items12 = [navigation, callback1];
  const effect = stateFromStoresArray1.useEffect(() => {
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
            return closure_1_9(closure_1_0(closure_1_2[22]).PlusMediumIcon, { size: "md", color: color.tintColor });
          },
          accessibilityLabel: intl.string(guildId(stateFromStoresArray[23]).t.CumH4u)
        };
        const HeaderBackButton = guildId(stateFromStoresArray[21]).HeaderBackButton;
        intl = guildId(stateFromStoresArray[23]).intl;
        return closure_9(HeaderBackButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items12);
  let tmp17Result = null;
  const tmp15 = memo.length > 0 || memo1.length > 0;
  if (!tmp15) {
    let obj5 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      let tmp17Result2;
      let str = "loading";
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj6 = { style: tmp3.listError, children: items13 };
          const obj7 = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp(tmp2[25]).DJAPMO) };
          const Text = tmp4(tmp2[24]).Text;
          intl = tmp4(tmp2[23]).intl;
          items13 = [closure_9(Text, obj7), ];
          const obj8 = {
            variant: "secondary",
            size: "sm",
            text: intl2.string(tmp(tmp2[25])["WFJ/vb"]),
            onPress() {
                      const obj = ConjureActionCreators;
                      return obj.listProjects(guildId);
                    }
          };
          const Button = tmp4(tmp2[26]).Button;
          intl2 = tmp4(tmp2[23]).intl;
          items13[1] = closure_9(Button, obj8);
          tmp17Result2 = closure_10(tmp18, obj6);
        } else {
          const obj9 = { style: tmp3.listError, children: items14 };
          const obj10 = { variant: "text-md/normal", color: "text-muted", children: intl7.string(tmp(tmp2[25])["9/5sLV"]) };
          const Text6 = tmp4(tmp2[24]).Text;
          intl7 = tmp4(tmp2[23]).intl;
          items14 = [closure_9(Text6, obj10), ];
          const obj11 = { variant: "primary", size: "sm", text: intl8.string(guildId(tmp2[23]).t.CumH4u), onPress: callback1 };
          const Button2 = tmp4(tmp2[26]).Button;
          intl8 = tmp4(tmp2[23]).intl;
          items14[1] = closure_9(Button2, obj11);
          tmp17Result2 = closure_10(tmp18, obj9);
        }
      }
      obj5.children = tmp17Result2;
      tmp17Result = tmp17(tmp18, obj5);
    }
    tmp17Result2 = tmp17(callback, {});
  }
  const obj12 = { style: tmp3.content, children: closure_10(tmp25, obj13) };
  obj13 = { contentContainerStyle: items15, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items16 };
  items15 = [tmp3.listContent, { paddingBottom: tmp(tmp2[6]).space.PX_8 + bottom }];
  items16 = [, , , ];
  ({ paddingBottom: tmp(tmp2[6]).space.PX_8 + bottom });
  items16[0] = closure_9(tmp(tmp2[28]), {});
  let tmp24Result = null;
  tmp25 = memo2;
  if (memo.length > 0) {
    const obj15 = { style: tmp3.section, children: items18 };
    const obj16 = { style: tmp3.sectionHeading, children: items17 };
    const obj17 = { variant: "heading-md/bold", color: "text-default", children: intl3.string(tmp(tmp2[25]).dWgSAa) };
    const Text2 = tmp4(tmp2[24]).Text;
    intl3 = tmp4(tmp2[23]).intl;
    items17 = [closure_9(Text2, obj17), ];
    const obj18 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(tmp(tmp2[25]).JQpNkh) };
    const Text3 = tmp4(tmp2[24]).Text;
    intl4 = tmp4(tmp2[23]).intl;
    items17[1] = closure_9(Text3, obj18);
    items18 = [closure_10(memo3, obj16), ];
    const obj19 = {
      hasIcons: true,
      children: memo.map((project) => {
          const obj = {
            project,
            onPress() {
              return callback(project.id);
            },
            onMore() {
              return closure_9(project);
            }
          };
          return closure_9(ProjectRow, obj, project.id);
        })
    };
    const TableRowGroup = tmp4(tmp2[29]).TableRowGroup;
    items18[1] = closure_9(TableRowGroup, obj19);
    tmp24Result = tmp24(tmp23, obj15);
  }
  items16[1] = tmp24Result;
  let tmp24Result2 = null;
  if (memo1.length > 0) {
    const obj20 = { style: tmp3.section, children: items20 };
    const obj21 = { style: tmp3.sectionHeading, children: items19 };
    const obj22 = { variant: "heading-md/bold", color: "text-default", children: intl5.string(tmp(tmp2[25])["wFi8+o"]) };
    const Text4 = tmp4(tmp2[24]).Text;
    intl5 = tmp4(tmp2[23]).intl;
    items19 = [closure_9(Text4, obj22), ];
    const obj23 = { variant: "text-sm/normal", color: "text-muted", children: intl6.string(tmp(tmp2[25]).dQ3U1J) };
    const Text5 = tmp4(tmp2[24]).Text;
    intl6 = tmp4(tmp2[23]).intl;
    items19[1] = closure_9(Text5, obj23);
    items20 = [closure_10(memo3, obj21), ];
    const obj24 = {
      hasIcons: true,
      children: memo1.map((project) => {
          const obj = {
            project,
            onPress() {
              return callback(project.id);
            },
            onMore() {
              return closure_9(project);
            }
          };
          return closure_9(ProjectRow, obj, project.id);
        })
    };
    const TableRowGroup2 = tmp4(tmp2[29]).TableRowGroup;
    items20[1] = closure_9(TableRowGroup2, obj24);
    tmp24Result2 = tmp24(tmp23, obj20);
  }
  items16[2] = tmp24Result2;
  items16[3] = tmp17Result;
  return closure_9(memo3, obj12);
};
