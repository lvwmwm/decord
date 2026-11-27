// Module ID: 18879
// Function ID: 18880
// Name: ConjureProjectList
// Dependencies: [5, 32, 19, 17, 1231, 6934, 21, 5043, 575, 1629, 1501, 18880, 18881, 18459, 18882, 18516, 5257, 18883, 11451, 5220, 18616, 7670, 18505, 7544, 7191, 7198, 13799, 1112, 5634, 4245, 5641, 7667, 18893, 6140, 6144, 14286, 7669, 504, 6950, 14294, 17947, 18621, 7745, 2]
// Exports: default

// Module 18879 (ConjureProjectList)
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import RootNavigationRef from "RootNavigationRef" /* 5220 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5257 */;
import Text_Text from "Text/Text" /* 5634 */;
import TableRowGroup2 from "TableRowGroup" /* 6140 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7667 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 11451 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 14294 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18459 */;
import ConjureHeaderIconButtonDefault from "ConjureHeaderIconButton" /* 18621 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 18883 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;
let closure_3, importDefault, navigation, projects;

let closure_12;
let metroImportAll;
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
  const tmp = closure_13(0);
  const obj = project(7669);
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
    const AXydi3 = _modDef4245.AXydi3;
    const _Date = Date;
    const self = this;
    const self2 = this;
    getRelativeTimestamp = project(6950).getRelativeTimestamp;
    project(6950);
    date = new Date(project.updated_at);
    formatToPlainStringResult = formatToPlainString(AXydi3, obj3);
  }
  const obj4 = { label: project.name, subLabel: formatToPlainStringResult, accessibilityHint: stringResult, disabled: stateFromStores, icon: closure_11(ConjureProjectIconDefault, { project, size: "list" }), trailing: tmp12Result, onPress, onLongPress: onMore };
  const TableRow = tmp2(6144).TableRow;
  if (stateFromStores) {
    const intl2 = tmp2(1112).intl;
    formatToPlainStringResult = intl2.string(_modDef4245.Yh5pAc);
  }
  stringResult = undefined;
  if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
    const intl3 = tmp2(1112).intl;
    stringResult = intl3.string(_modDef4245.hfIuc7);
  }
  if (stateFromStores) {
    tmp12Result = tmp14(closure_6, {});
  } else {
    let tmp14Result3 = null;
    const obj5 = { style: tmp.projectRowTrailing, children: items2 };
    if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
      const obj6 = { value: conjureProjectBadge };
      tmp14Result3 = tmp14(tmp18(17947), obj6);
    }
    items2 = [tmp14Result3, ];
    const obj7 = { IconComponent: project(7745).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl4.string(project(1112).t["UKOtz+"]) };
    const tmp18Result = ConjureHeaderIconButtonDefault;
    intl4 = tmp2(1112).intl;
    items2[1] = closure_11(tmp18Result, obj7);
    tmp12Result = tmp12(tmp13, obj5);
  }
  const children = [closure_11(TableRow, obj4), ];
  let tmp14Result4 = null;
  if (null != conjureProjectBadge) {
    tmp14Result4 = null;
    if (!stateFromStores) {
      const obj8 = { style: tmp.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
      tmp14Result4 = tmp14(tmp13, obj8);
    }
  }
  children[1] = tmp14Result4;
  return closure_12(closure_8, { children });
}
({ ActivityIndicator: metroRequire, ScrollView: metroImportDefault, View: metroImportAll } = react_native);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((paddingBottom) => {
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
  let obj12;
  let obj16;
  let obj17;
  let participating;
  let section;
  let shared;
  let tmp30;
  let tmp31;
  let tmp33Result;
  guildId = guildId.guildId;
  importDefault = undefined;
  navigation = undefined;
  let memo1;
  let tmp = importDefault;
  let tmp2 = navigation;
  const bottom = require("useSafeAreaInsets")().bottom;
  let tmp3 = closure_13(0);
  importDefault = tmp3;
  const tmp4 = guildId;
  let obj = guildId(navigation[10]);
  navigation = obj.useNavigation();
  ({ participating, shared, fetchState } = require("useConjureServerProjects")(guildId));
  const tmp6 = require("useConjureServerProjects")(guildId);
  const arr = require("useConjureOtherOwnProjects")(guildId);
  let items = [guildId];
  const callback = memo1.useCallback((arg0, project_list) => {
    let str = project_list;
    if (project_list === undefined) {
      str = "project_list";
    }
    const obj = conjureStandaloneScenes;
    const result = obj.pushServerProjectScreen(guildId, arg0, str);
  }, items);
  const items1 = [guildId, callback];
  const memo = memo1.useMemo(() => {
    const obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, (arg0) => callback(arg0, "create"));
  }, items1);
  const items2 = [guildId, callback];
  memo1 = memo1.useMemo(() => {
    const obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, (arg0) => callback(arg0, "remix"));
  }, items2);
  const tmp10 = memo(memo1.useState(false), 2);
  const disabled = tmp10[0];
  const onSubmittingChange = tmp10[1];
  const tmp12 = guildId(navigation[14]);
  const isConjureEligibleGuild = tmp12.isConjureEligibleGuild;
  let obj2 = guildId(navigation[15]);
  let result = isConjureEligibleGuild(obj2.useConjureEligibleGuilds("ConjureProjectList"), guildId);
  let c8 = result;
  const items3 = [guildId, memo];
  const callback1 = memo1.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: unpackModuleId(ConjureCreateSheetDefault, obj2) };
    obj2 = { guildId, onCreated: memo, onSubmittingChange };
    showActionSheet(obj);
  }, items3);
  const items4 = [guildId, memo1];
  const callback2 = memo1.useCallback((project) => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: unpackModuleId(ConjureRemixSheetDefault, obj2) };
    obj2 = { project, currentGuildId: guildId, onRemixed: memo1 };
    showActionSheet(obj);
  }, items4);
  let obj3 = { latest: null, route: "Array", loading: new Set() };
  const useRef = memo1.useRef;
  new Set();
  const ref = useRef(obj3);
  const effect = memo1.useEffect(() => {
    function forgetIfLeft() {
      let key;
      const obj = rootNavigationRef;
      if (rootNavigationRef != null) {
        const currentRoute = obj.getCurrentRoute();
        if (currentRoute != null) {
          key = currentRoute.key;
        }
      }
      if (key !== current.route) {
        current.latest = null;
      }
    }
    const current = ref.current;
    let obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.addListener("state", forgetIfLeft);
    }
    return () => {
      const obj = rootNavigationRef;
      if (rootNavigationRef != null) {
        obj.removeListener("state", forgetIfLeft);
      }
      current.latest = null;
    };
  }, []);
  const useCallback = memo1.useCallback;
  let closure_0 = callback((guildId) => {
    let closure_2;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, value) {
      let obj5;
      let obj8;
      let tmp3;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let tmp;
          let current;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              tmp = undefined;
              current = ref.current;
              current.latest = guildId.id;
              const obj9 = guildId(navigation[19]);
              const rootNavigationRef = obj9.getRootNavigationRef();
              let key;
              if (rootNavigationRef != null) {
                const currentRoute = rootNavigationRef.getCurrentRoute();
                if (currentRoute != null) {
                  key = currentRoute.key;
                }
              }
              current.route = key;
              const loading2 = current.loading;
              if (!loading2.has(guildId.id)) {
                const loading3 = current.loading;
                loading3.add(guildId.id);
                c4 = 1;
                const obj4 = {
                  project: guildId,
                  guildId,
                  muted: obj5.isConjureProjectMuted(settings.settings, guildId.id),
                  openChat() {
                              return closure_2_3(closure_0.id);
                            },
                  onRemix() {
                              return closure_2_10(closure_0);
                            },
                  onOpenSettings
                };
                const loadConjureProjectActions = guildId(navigation[20]).loadConjureProjectActions;
                guildId(navigation[20]);
                onOpenSettings = function onOpenSettings() {
                  let guild_id;
                  let obj2;
                  let tmp2;
                  let tmp3;
                  const tmp = closure_0(closure_2[16]);
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { key: closure_0(closure_2[22]).CONJURE_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
                  obj2 = { projectId: closure_0.id, guildId: guild_id, initialTab: "project", isPreview: true };
                  guild_id = closure_0.guild_id;
                  tmp2 = ref;
                  tmp3 = onOpenSettings(closure_2[22]);
                  if (guild_id == null) {
                    guild_id = closure_2_0;
                  }
                  return showActionSheet(obj);
                };
                c5 = 2;
                c6 = 1;
                obj5 = guildId(navigation[21]);
                const obj6 = { value: loadConjureProjectActions(obj4), done: false };
                return obj6;
              }
            }
          } else if (1 === tmp4) {
            c4 = 0;
            onOpenSettings = current.loading;
            onOpenSettings.delete(guildId.id);
            throw closure_3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            const loading = current.loading;
            loading.delete(guildId.id);
            c6 = 3;
            return { value, done: true };
          } else {
            tmp = value;
            c4 = 0;
            const loading4 = current.loading;
            loading4.delete(guildId.id);
            const isFocusedResult = current.latest === guildId.id && tmp.isFocused();
            if (isFocusedResult) {
              let obj = { key: "ConjureProjectActions", header: obj8, hasIcons: true, options: onOpenSettings };
              obj8 = { title: guildId.name };
              const showSimpleActionSheet = guildId(navigation[23]).showSimpleActionSheet;
              guildId(navigation[23]);
              onOpenSettings = tmp.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action }));
              const result = showSimpleActionSheet(obj);
            }
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp36) {
          closure_3 = tmp36;
          if (0 === c4) {
            c6 = 3;
            throw tmp36;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  const items5 = [guildId, navigation, callback, callback2];
  let closure_12 = useCallback(function() {
    return closure_0(...arguments);
  }, items5);
  const items6 = [disabled, navigation, callback1, result];
  const effect1 = memo1.useEffect(() => {
    let fn;
    let onPress;
    const setOptions = navigation.setOptions;
    if (first) {
      fn = () => ref(guildId(navigation[24]).HeaderSubmittingIndicator, {});
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
            return closure_1_11(closure_1_0(closure_1_2[26]).PlusMediumIcon, { size: "md", color: color.tintColor });
          },
          accessibilityLabel: intl.string(guildId(navigation[27]).t.CumH4u)
        };
        const HeaderBackButton = guildId(navigation[25]).HeaderBackButton;
        intl = guildId(navigation[27]).intl;
        return ref(HeaderBackButton, obj);
      };
    }
    setOptions({ headerRight: fn });
  }, items6);
  let tmp21Result4 = null;
  const tmp19 = participating.length > 0 || shared.length > 0;
  if (!tmp19) {
    let obj4 = { style: tmp3.centered, children: tmp33Result };
    let str = "error";
    if ("error" === fetchState) {
      let obj5 = { style: tmp3.listError, children: items7 };
      let obj6 = { variant: "body-md/normal", color: "text-muted", children: intl2.string(tmp(tmp2[29]).DJAPMO) };
      let Text = tmp4(tmp2[28]).Text;
      intl2 = tmp4(tmp2[27]).intl;
      items7 = [tmp21(Text, obj6), ];
      const obj7 = {
        variant: "secondary",
        size: "sm",
        text: intl3.string(tmp(tmp2[29])["WFJ/vb"]),
        onPress() {
              const obj = ConjureActionCreators;
              return obj.listProjects(guildId);
            }
      };
      const Button2 = tmp4(tmp2[30]).Button;
      intl3 = tmp4(tmp2[27]).intl;
      items7[1] = ref(Button2, obj7);
      tmp33Result = closure_12(tmp22, obj5);
    } else if ("success" !== fetchState) {
      tmp33Result = tmp21(disabled, {});
    } else {
      let prop;
      let obj8 = { style: tmp3.listError, children: items8 };
      const Text2 = tmp4(tmp2[28]).Text;
      const intl5 = tmp4(tmp2[27]).intl;
      const string = intl5.string;
      const tmp33 = closure_12;
      if (arr.length > 0) {
        prop = tmp(tmp2[29])["/I2lbz"];
      } else {
        prop = tmp(tmp2[29])["9/5sLV"];
      }
      let obj9 = { variant: "body-md/normal", color: "text-muted", children: string(prop) };
      items8 = [tmp21(Text2, obj9), ];
      let tmp21Result3 = null;
      if (result) {
        const obj10 = { variant: "primary", size: "sm", text: intl.string(tmp4(tmp2[27]).t.CumH4u), loading: disabled, disabled, onPress: callback1 };
        const Button = tmp4(tmp2[30]).Button;
        intl = tmp4(tmp2[27]).intl;
        tmp21Result3 = tmp21(Button, obj10);
      }
      items8[1] = tmp21Result3;
      tmp33Result = tmp33(tmp22, obj8);
    }
    tmp21Result4 = tmp21(tmp22, obj4);
  }
  const obj11 = { style: tmp3.content, children: tmp30(tmp31, obj12) };
  obj12 = { contentContainerStyle: items9, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items10 };
  items9 = [tmp3.listContent, ];
  tmp31 = onSubmittingChange;
  items9[1] = { paddingBottom: tmp(tmp2[8]).space.PX_8 + bottom };
  items10 = [, , , ];
  ({ paddingBottom: tmp(tmp2[8]).space.PX_8 + bottom });
  items10[0] = ref(tmp(tmp2[32]), {});
  const items11 = [{ key: "participating", title: null, projects: participating }, { key: "shared", title: tmp(tmp2[29]).YHDMK6, projects: shared }];
  ({ key: "shared", title: tmp(tmp2[29]).YHDMK6, projects: shared });
  items10[1] = items11.map((projects) => {
    let intl;
    let items;
    let tmp = null;
    if (projects.projects.length > 0) {
      let obj = { style: section.section, children: items };
      let tmp5 = null;
      const tmp2 = authStore2;
      const tmp3 = metroImportAll;
      if (null != projects.title) {
        const obj2 = { variant: "heading-sm/semibold", color: "text-default", accessibilityRole: "header", children: intl.string(projects.title) };
        const Text = Text_Text.Text;
        intl = intl6.intl;
        tmp5 = unpackModuleId(Text, obj2);
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
                return closure_2_12(project);
              }
            };
            return ref(closure_1_14, obj, project.id);
          })
      };
      projects = projects.projects;
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      items[1] = unpackModuleId(TableRowGroup, obj3);
      tmp = tmp2(tmp3, obj, projects.key);
    }
    return tmp;
  });
  items10[2] = tmp21Result4;
  let tmp28Result = null;
  const tmp29 = c8;
  tmp30 = closure_12;
  if (arr.length > 0) {
    const obj15 = { hasIcons: false, children: ref(TableRow, obj16) };
    let TableRowGroup = tmp4(tmp2[33]).TableRowGroup;
    obj16 = { label: intl4.formatToPlainString(tmp(tmp2[29]).vnoMFE, obj17), arrow: true, onPress: tmp4(tmp2[35]).showConjureProjectsSheet };
    TableRow = tmp4(tmp2[34]).TableRow;
    intl4 = tmp4(tmp2[27]).intl;
    obj17 = { count: arr.length };
    tmp28Result = tmp28(TableRowGroup, obj15);
  }
  items10[3] = tmp28Result;
  return ref(tmp29, obj11);
};
