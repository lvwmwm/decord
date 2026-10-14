// Module ID: 11277
// Function ID: 11278
// Name: ConjureProjectList
// Dependencies: [19, 17, 1244, 10662, 21, 5096, 587, 558, 576, 1631, 1503, 504, 6951, 11276, 5060, 11278, 11308, 11310, 10686, 11322, 11327, 6897, 6214, 10615, 1126, 5092, 3849, 5384, 10684, 11355, 6269, 10685, 6064, 11357, 11359, 11360, 9251, 6184, 2]

// Module 11277 (ConjureProjectList)
import nativeDefault from "native" /* 587 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5060 */;
import ConjureUtils from "ConjureUtils" /* 6951 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10684 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11276 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 11278 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 11308 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 11327 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 11357 */;
import MentionsBadgeDefault from "MentionsBadge" /* 11359 */;
import ConjureHeaderIconButtonDefault from "ConjureHeaderIconButton" /* 11360 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10662 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5096 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ConjureCreateSheetDefault = ConjureCreateSheet;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
let closure_0, navigation, obj1;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroRequire;
let react = react_mod;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectList(guildId) {
  let closure_3;
  let settings;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp26;
  let tmp28;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  let tmp2 = L;
  let obj = guildId(L[8]);
  const cResult = obj.c(75);
  guildId = guildId.guildId;
  const bottom = navigation(L[9])().bottom;
  closure_11(0);
  let obj2 = guildId(L[10]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    const fn = function y() {
      return ConjureProjectStore.getOwnedProjects();
    };
    const items1 = [];
    cResult[0] = items;
    let num = 1;
    cResult[1] = fn;
    let num2 = 2;
    cResult[2] = items1;
    tmp6 = items;
    tmp7 = fn;
    tmp8 = items1;
  } else {
    [tmp6, tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(tmp2[11]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureProjectStore];
    cResult[3] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    class I {
      constructor() {
        return ConjureProjectStore.getSharedProjects(guildId);
      }
    }
    const items3 = [guildId];
    cResult[4] = guildId;
    cResult[5] = I;
    cResult[6] = items3;
    tmp13 = items3;
    tmp12 = I;
  } else {
    class I {
      constructor() {
        return ConjureProjectStore.getSharedProjects(guildId);
      }
    }
    tmp13 = cResult[6];
  }
  const tmpResult4 = tmp(tmp2[11]);
  const stateFromStoresArray1 = tmpResult4.useStateFromStoresArray(tmp10, tmp12, tmp13);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return ConjureProjectStore.getSharedProjects(guildId);
      }
    }
    const items4 = [ConjureProjectStore];
    const fn2 = function f() {
      return ConjureProjectStore.getProjectsFetchState();
    };
    const items5 = [];
    cResult[7] = items4;
    cResult[8] = fn2;
    cResult[9] = items5;
    tmp16 = items5;
    tmp15 = fn2;
    tmp14 = items4;
  } else {
    class I {
      constructor() {
        return ConjureProjectStore.getSharedProjects(guildId);
      }
    }
    tmp15 = cResult[8];
    tmp16 = cResult[9];
  }
  const tmpResult5 = tmp(tmp2[11]);
  const stateFromStores = tmpResult5.useStateFromStores(tmp14, tmp15, tmp16);
  if (cResult[10] === stateFromStoresArray) {
    class I {
      constructor() {
        return ConjureProjectStore.getSharedProjects(guildId);
      }
    }
    if (cResult[16] !== stateFromStoresArray1) {
      let tmp23;
      class I {
        constructor() {
          return ConjureProjectStore.getSharedProjects(guildId);
        }
      }
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(updated_at, updated_at2) {
            let num = 1;
            if (null != updated_at.updated_at) {
              let num2 = -1;
              if (null != updated_at2.updated_at) {
                updated_at = updated_at2.updated_at;
                num2 = updated_at.localeCompare(updated_at.updated_at);
              }
              num = num2;
            }
            return num;
          }
        }
        cResult[18] = B;
        tmp23 = B;
      } else {
        class B {
          constructor(updated_at, updated_at2) {
            let num = 1;
            if (null != updated_at.updated_at) {
              let num2 = -1;
              if (null != updated_at2.updated_at) {
                updated_at = updated_at2.updated_at;
                num2 = updated_at.localeCompare(updated_at.updated_at);
              }
              num = num2;
            }
            return num;
          }
        }
      }
      const substr = stateFromStoresArray1.slice();
      const sorted = substr.sort(tmp23);
      cResult[16] = stateFromStoresArray1;
      cResult[17] = sorted;
    } else {
      class B {
        constructor(updated_at, updated_at2) {
          let num = 1;
          if (null != updated_at.updated_at) {
            let num2 = -1;
            if (null != updated_at2.updated_at) {
              updated_at = updated_at2.updated_at;
              num2 = updated_at.localeCompare(updated_at.updated_at);
            }
            num = num2;
          }
          return num;
        }
      }
    }
    if (cResult[19] !== navigation) {
      class L {
        constructor(projectId) {
          const obj = { projectId };
          return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
        }
      }
      cResult[19] = navigation;
      cResult[20] = L;
    } else {
      class L {
        constructor(projectId) {
          const obj = { projectId };
          return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
        }
      }
    }
    L = tmp25;
    if (cResult[21] === guildId) {
      class L {
        constructor(projectId) {
          const obj = { projectId };
          return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
        }
      }
      react = tmp26;
      if (cResult[24] === guildId) {
        class L {
          constructor(projectId) {
            const obj = { projectId };
            return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
          }
        }
        let closure_4 = tmp28;
        if (cResult[27] === guildId) {
          class L {
            constructor(projectId) {
              const obj = { projectId };
              return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
            }
          }
          let closure_5 = tmp29;
          if (cResult[30] === guildId) {
            class L {
              constructor(projectId) {
                const obj = { projectId };
                return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
              }
            }
          }
          class Y {
            constructor(arg0) {
              closure_0 = guildId;
              tmp = guildId(closure_2[17]);
              obj = { project: guildId, guildId: closure_0, muted: null, removeTarget: null, openChat: null, onRemix: null, onOpenSettings: null };
              conjureProjectActions = tmp.conjureProjectActions;
              obj2 = guildId(closure_2[18]);
              obj.muted = obj2.isConjureProjectMuted(closure_1_7.settings, guildId.id);
              obj3 = guildId(closure_2[19]);
              obj.removeTarget = obj3.readConjureRemoveTarget(guildId);
              obj.openChat = function openChat() {
                return L(project.id);
              };
              obj.onRemix = function onRemix() {
                return closure_5(project);
              };
              obj.onOpenSettings = function onOpenSettings() {
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
              };
              result = conjureProjectActions(obj);
              obj4 = guildId(closure_2[21]);
              obj1 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
              result1 = obj4.showSimpleActionSheet(obj1);
              return;
            }
          }
          cResult[30] = guildId;
          cResult[31] = tmp25;
          cResult[32] = tmp29;
          cResult[33] = Y;
        }
        class K {
          constructor(project) {
            let obj2;
            const tmp = ActionSheetActionCreators;
            const showActionSheet = tmp.showActionSheet;
            const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: React4(ConjureRemixSheetDefault, obj2) };
            obj2 = { project, currentGuildId: guildId, onRemixed: tmp26 };
            showActionSheet(obj);
          }
        }
        cResult[27] = guildId;
        cResult[28] = tmp26;
        cResult[29] = K;
      }
      class U {
        constructor() {
          let obj2;
          const tmp = ActionSheetActionCreators;
          const showActionSheet = tmp.showActionSheet;
          const obj = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: React4(ConjureCreateSheetDefault, obj2) };
          obj2 = { guildId, onCreated: tmp26 };
          showActionSheet(obj);
        }
      }
      cResult[24] = guildId;
      cResult[25] = tmp26;
      cResult[26] = U;
      tmp28 = U;
    }
    const tmpResult6 = tmp(tmp2[13]);
    const projectOpenerResult = tmpResult6.projectOpener(guildId, tmp25);
    cResult[21] = guildId;
    cResult[22] = tmp25;
    cResult[23] = projectOpenerResult;
    tmp26 = projectOpenerResult;
  }
  if (cResult[13] !== guildId) {
    class L {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
      }
    }
    cResult[13] = guildId;
    class Y {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = guildId(closure_2[17]);
        obj = { project: guildId, guildId: closure_0, muted: null, removeTarget: null, openChat: null, onRemix: null, onOpenSettings: null };
        conjureProjectActions = tmp.conjureProjectActions;
        obj2 = guildId(closure_2[18]);
        obj.muted = obj2.isConjureProjectMuted(closure_1_7.settings, guildId.id);
        obj3 = guildId(closure_2[19]);
        obj.removeTarget = obj3.readConjureRemoveTarget(guildId);
        obj.openChat = function openChat() {
          return L(project.id);
        };
        obj.onRemix = function onRemix() {
          return closure_5(project);
        };
        obj.onOpenSettings = function onOpenSettings() {
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
        };
        result = conjureProjectActions(obj);
        obj4 = guildId(closure_2[21]);
        obj1 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
        result1 = obj4.showSimpleActionSheet(obj1);
        return;
      }
    }
    cResult[14] = tmp19;
    tmp18 = tmp19;
  } else {
    class L {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
      }
    }
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
      }
    }
    cResult[15] = M;
    class Y {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = guildId(closure_2[17]);
        obj = { project: guildId, guildId: closure_0, muted: null, removeTarget: null, openChat: null, onRemix: null, onOpenSettings: null };
        conjureProjectActions = tmp.conjureProjectActions;
        obj2 = guildId(closure_2[18]);
        obj.muted = obj2.isConjureProjectMuted(closure_1_7.settings, guildId.id);
        obj3 = guildId(closure_2[19]);
        obj.removeTarget = obj3.readConjureRemoveTarget(guildId);
        obj.openChat = function openChat() {
          return L(project.id);
        };
        obj.onRemix = function onRemix() {
          return closure_5(project);
        };
        obj.onOpenSettings = function onOpenSettings() {
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
        };
        result = conjureProjectActions(obj);
        obj4 = guildId(closure_2[21]);
        obj1 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
        result1 = obj4.showSimpleActionSheet(obj1);
        return;
      }
    }
  } else {
    class L {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
      }
    }
  }
  const found = stateFromStoresArray.filter(tmp18);
  const sorted1 = found.sort(tmp20);
  cResult[10] = stateFromStoresArray;
  cResult[11] = guildId;
  cResult[12] = sorted1;
}) : (function ConjureProjectList(guildId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let obj13;
  let tmp24;
  guildId = guildId.guildId;
  navigation = undefined;
  let stateFromStoresArray;
  let closure_8;
  let tmp = navigation;
  let tmp2 = stateFromStoresArray;
  const bottom = navigation(stateFromStoresArray[9])().bottom;
  let tmp3 = closure_11(0);
  let obj = guildId(stateFromStoresArray[10]);
  navigation = obj.useNavigation();
  let obj2 = guildId(stateFromStoresArray[11]);
  const items = [closure_8];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => closure_8.getOwnedProjects(), []);
  let obj3 = guildId(stateFromStoresArray[11]);
  const items1 = [closure_8];
  const items2 = [guildId];
  const stateFromStoresArray1 = obj3.useStateFromStoresArray(items1, () => ConjureProjectStore.getSharedProjects(guildId), items2);
  let obj4 = guildId(stateFromStoresArray[11]);
  const items3 = [closure_8];
  const stateFromStores = obj4.useStateFromStores(items3, () => closure_8.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = stateFromStoresArray1.useMemo(() => {
    const found = stateFromStoresArray.filter((item) => {
      const obj = guildId(stateFromStoresArray[12]);
      return obj.isConjureProjectInGuild(item, closure_1_0);
    });
    return found.sort((updated_at, updated_at2) => {
      let num = 1;
      if (null != updated_at.updated_at) {
        let num2 = -1;
        if (null != updated_at2.updated_at) {
          updated_at = updated_at2.updated_at;
          num2 = updated_at.localeCompare(updated_at.updated_at);
        }
        num = num2;
      }
      return num;
    });
  }, items4);
  const items5 = [stateFromStoresArray1];
  const memo1 = stateFromStoresArray1.useMemo(() => {
    const substr = stateFromStoresArray1.slice();
    return substr.sort((updated_at, updated_at2) => {
      let num = 1;
      if (null != updated_at.updated_at) {
        let num2 = -1;
        if (null != updated_at2.updated_at) {
          updated_at = updated_at2.updated_at;
          num2 = updated_at.localeCompare(updated_at.updated_at);
        }
        num = num2;
      }
      return num;
    });
  }, items5);
  const items6 = [navigation];
  const callback = stateFromStoresArray1.useCallback((projectId) => {
    const obj = { projectId };
    return navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
  }, items6);
  const items7 = [guildId, callback];
  const memo2 = stateFromStoresArray1.useMemo(() => {
    const obj = conjureStandaloneScenes;
    return obj.projectOpener(guildId, callback);
  }, items7);
  const items8 = [guildId, memo2];
  const callback1 = stateFromStoresArray1.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: React4(ConjureCreateSheetDefault, obj2) };
    obj2 = { guildId, onCreated: memo2 };
    showActionSheet(obj);
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = stateFromStoresArray1.useCallback((project) => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: React4(ConjureRemixSheetDefault, obj2) };
    obj2 = { project, currentGuildId: guildId, onRemixed: memo2 };
    showActionSheet(obj);
  }, items9);
  const items10 = [guildId, callback, callback2];
  closure_8 = stateFromStoresArray1.useCallback((project) => {
    let obj2;
    let obj3;
    guildId = project;
    let tmp = guildId(stateFromStoresArray[17]);
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
    obj2 = guildId(stateFromStoresArray[18]);
    obj3 = guildId(stateFromStoresArray[19]);
    const result = conjureProjectActions(obj);
    const obj4 = guildId(stateFromStoresArray[21]);
    const obj5 = { key: "VibegrationsProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
    const result1 = obj4.showSimpleActionSheet(obj5);
  }, items10);
  const items11 = [navigation, callback1];
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
            return closure_1_9(closure_1_0(closure_1_2[23]).PlusMediumIcon, { size: "md", color: color.tintColor });
          },
          accessibilityLabel: intl.string(guildId(stateFromStoresArray[24]).t.CumH4u)
        };
        const HeaderBackButton = guildId(stateFromStoresArray[22]).HeaderBackButton;
        intl = guildId(stateFromStoresArray[24]).intl;
        return closure_2_9(HeaderBackButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items11);
  let tmp16Result = null;
  const tmp14 = memo.length > 0 || memo1.length > 0;
  if (!tmp14) {
    let obj5 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      let tmp16Result2;
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj6 = { style: tmp3.listError, children: items12 };
          const obj7 = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp(tmp2[26]).DJAPMO) };
          const Text = tmp4(tmp2[25]).Text;
          intl = tmp4(tmp2[24]).intl;
          items12 = [closure_9(Text, obj7), ];
          const obj8 = {
            variant: "secondary",
            size: "sm",
            text: intl2.string(tmp(tmp2[26])["WFJ/vb"]),
            onPress() {
                      const obj = ConjureActionCreators;
                      return obj.listProjects(guildId);
                    }
          };
          const Button = tmp4(tmp2[27]).Button;
          intl2 = tmp4(tmp2[24]).intl;
          items12[1] = closure_9(Button, obj8);
          tmp16Result2 = closure_10(tmp17, obj6);
        } else {
          const obj9 = { style: tmp3.listError, children: items13 };
          const obj10 = { variant: "text-md/normal", color: "text-muted", children: intl7.string(tmp(tmp2[26])["9/5sLV"]) };
          const Text6 = tmp4(tmp2[25]).Text;
          intl7 = tmp4(tmp2[24]).intl;
          items13 = [closure_9(Text6, obj10), ];
          const obj11 = { variant: "primary", size: "sm", text: intl8.string(guildId(tmp2[24]).t.CumH4u), onPress: callback1 };
          const Button2 = tmp4(tmp2[27]).Button;
          intl8 = tmp4(tmp2[24]).intl;
          items13[1] = closure_9(Button2, obj11);
          tmp16Result2 = closure_10(tmp17, obj9);
        }
      }
      obj5.children = tmp16Result2;
      tmp16Result = tmp16(tmp17, obj5);
    }
    tmp16Result2 = tmp16(callback, {});
  }
  const obj12 = { style: tmp3.content, children: closure_10(tmp24, obj13) };
  obj13 = { contentContainerStyle: items14, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items15 };
  items14 = [tmp3.listContent, { paddingBottom: tmp(tmp2[6]).space.PX_8 + bottom }];
  items15 = [, , , ];
  ({ paddingBottom: tmp(tmp2[6]).space.PX_8 + bottom });
  items15[0] = closure_9(tmp(tmp2[29]), {});
  let tmp23Result = null;
  tmp24 = memo2;
  if (memo.length > 0) {
    const obj15 = { style: tmp3.section, children: items17 };
    const obj16 = { style: tmp3.sectionHeading, children: items16 };
    const obj17 = { variant: "heading-md/bold", color: "text-default", children: intl3.string(tmp(tmp2[26]).dWgSAa) };
    const Text2 = tmp4(tmp2[25]).Text;
    intl3 = tmp4(tmp2[24]).intl;
    items16 = [closure_9(Text2, obj17), ];
    const obj18 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(tmp(tmp2[26]).JQpNkh) };
    const Text3 = tmp4(tmp2[25]).Text;
    intl4 = tmp4(tmp2[24]).intl;
    items16[1] = closure_9(Text3, obj18);
    items17 = [closure_10(callback1, obj16), ];
    const obj19 = {
      hasIcons: true,
      children: memo.map((project) => {
          const obj = {
            project,
            onPress() {
              return callback(project.id);
            },
            onMore() {
              return closure_8(project);
            }
          };
          return closure_1_9(closure_1_12, obj, project.id);
        })
    };
    const TableRowGroup = tmp4(tmp2[30]).TableRowGroup;
    items17[1] = closure_9(TableRowGroup, obj19);
    tmp23Result = tmp23(tmp22, obj15);
  }
  items15[1] = tmp23Result;
  let tmp23Result2 = null;
  if (memo1.length > 0) {
    const obj20 = { style: tmp3.section, children: items19 };
    const obj21 = { style: tmp3.sectionHeading, children: items18 };
    const obj22 = { variant: "heading-md/bold", color: "text-default", children: intl5.string(tmp(tmp2[26])["wFi8+o"]) };
    const Text4 = tmp4(tmp2[25]).Text;
    intl5 = tmp4(tmp2[24]).intl;
    items18 = [closure_9(Text4, obj22), ];
    const obj23 = { variant: "text-sm/normal", color: "text-muted", children: intl6.string(tmp(tmp2[26]).dQ3U1J) };
    const Text5 = tmp4(tmp2[25]).Text;
    intl6 = tmp4(tmp2[24]).intl;
    items18[1] = closure_9(Text5, obj23);
    items19 = [closure_10(callback1, obj21), ];
    const obj24 = {
      hasIcons: true,
      children: memo1.map((project) => {
          const obj = {
            project,
            onPress() {
              return callback(project.id);
            },
            onMore() {
              return closure_8(project);
            }
          };
          return closure_1_9(closure_1_12, obj, project.id);
        })
    };
    const TableRowGroup2 = tmp4(tmp2[30]).TableRowGroup;
    items19[1] = closure_9(TableRowGroup2, obj24);
    tmp23Result2 = tmp23(tmp22, obj20);
  }
  items15[2] = tmp23Result2;
  items15[3] = tmp16Result;
  return closure_9(callback1, obj12);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectRow(project) {
  let date;
  let first;
  let getRelativeTimestamp;
  let intl4;
  let items2;
  let items3;
  let onMore;
  let onPress;
  let tmp12;
  let tmp8;
  let tmp9;
  const obj = project(576);
  const cResult = obj.c(35);
  project = project.project;
  ({ onPress, onMore } = project);
  const tmp4 = closure_11(0);
  const obj2 = project(10685);
  const conjureProjectBadge = obj2.useConjureProjectBadge(project.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== project.id) {
    const fn = function l() {
      return ConjureProjectStore.isProjectDeleting(project.id);
    };
    const items1 = [project.id];
    cResult[1] = project.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = project(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] !== project.updated_at) {
    let formatToPlainStringResult;
    if (null != project.updated_at) {
      const intl = tmp(1126).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj3 = { time: getRelativeTimestamp(date.getTime()) };
      const AXydi3 = _modDef3849.AXydi3;
      const _Date = Date;
      const self = this;
      const self2 = this;
      getRelativeTimestamp = project(6064).getRelativeTimestamp;
      project(6064);
      date = new Date(project.updated_at);
      formatToPlainStringResult = formatToPlainString(AXydi3, obj3);
    }
    cResult[4] = project.updated_at;
    cResult[5] = formatToPlainStringResult;
    tmp12 = formatToPlainStringResult;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    let tmp17;
    let tmp20;
    let tmp23;
    let tmp28Result;
    if (cResult[7] === tmp12) {
      tmp17 = cResult[8];
    }
    if (cResult[9] !== (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores)) {
      let stringResult;
      if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
        const intl3 = tmp(1126).intl;
        stringResult = intl3.string(_modDef3849.hfIuc7);
      }
      cResult[9] = null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores;
      cResult[10] = stringResult;
      tmp20 = stringResult;
    } else {
      tmp20 = cResult[10];
    }
    if (cResult[11] !== project) {
      const obj4 = { project, size: "list" };
      const tmp26 = closure_9(ConjureProjectIconDefault, obj4);
      cResult[11] = project;
      cResult[12] = tmp26;
      tmp23 = tmp26;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] === conjureProjectBadge) {
      if (cResult[14] === stateFromStores) {
        if (cResult[15] === onMore) {
          if (cResult[16] === (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores)) {
            let tmp27;
            if (cResult[17] === tmp4) {
              tmp27 = cResult[18];
            }
            if (cResult[19] === stateFromStores) {
              if (cResult[20] === onMore) {
                if (cResult[21] === onPress) {
                  if (cResult[22] === project.name) {
                    if (cResult[23] === tmp17) {
                      if (cResult[24] === tmp20) {
                        if (cResult[25] === tmp23) {
                          let tmp39;
                          if (cResult[26] === tmp27) {
                            tmp39 = cResult[27];
                          }
                          if (cResult[28] === conjureProjectBadge) {
                            if (cResult[29] === stateFromStores) {
                              let tmp42;
                              if (cResult[30] === tmp4) {
                                tmp42 = cResult[31];
                              }
                              if (cResult[32] === tmp42) {
                                let tmp46;
                                if (cResult[33] === tmp39) {
                                  tmp46 = cResult[34];
                                }
                                return tmp46;
                              }
                              const obj5 = { children: items2 };
                              items2 = [tmp39, tmp42];
                              const tmp49 = closure_10(closure_6, obj5);
                              cResult[32] = tmp42;
                              cResult[33] = tmp39;
                              cResult[34] = tmp49;
                              tmp46 = tmp49;
                            }
                          }
                          let tmp43 = null;
                          if (null != conjureProjectBadge) {
                            tmp43 = null;
                            if (!stateFromStores) {
                              const obj6 = { style: tmp4.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
                              tmp43 = closure_9(closure_6, obj6);
                            }
                          }
                          cResult[28] = conjureProjectBadge;
                          cResult[29] = stateFromStores;
                          cResult[30] = tmp4;
                          cResult[31] = tmp43;
                          tmp42 = tmp43;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj7 = { label: project.name, subLabel: tmp17, accessibilityHint: tmp20, disabled: stateFromStores, icon: tmp23, trailing: tmp27, onPress, onLongPress: onMore };
            const tmp41 = closure_9(project(6184).TableRow, obj7);
            cResult[19] = stateFromStores;
            cResult[20] = onMore;
            cResult[21] = onPress;
            cResult[22] = project.name;
            cResult[23] = tmp17;
            cResult[24] = tmp20;
            cResult[25] = tmp23;
            cResult[26] = tmp27;
            cResult[27] = tmp41;
            tmp39 = tmp41;
          }
        }
      }
    }
    if (stateFromStores) {
      tmp28Result = closure_9(closure_4, {});
    } else {
      let tmp30 = null;
      const obj8 = { style: tmp4.projectRowTrailing, children: items3 };
      const tmp28 = closure_10;
      const tmp29 = closure_6;
      if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
        const obj9 = { mentionsCount: conjureProjectBadge };
        tmp30 = closure_9(MentionsBadgeDefault, obj9);
      }
      items3 = [tmp30, ];
      const obj10 = { IconComponent: project(9251).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl4.string(project(1126).t["UKOtz+"]) };
      const tmp35 = ConjureHeaderIconButtonDefault;
      intl4 = tmp(1126).intl;
      items3[1] = closure_9(tmp35, obj10);
      tmp28Result = tmp28(tmp29, obj8);
    }
    cResult[13] = conjureProjectBadge;
    cResult[14] = stateFromStores;
    cResult[15] = onMore;
    cResult[16] = null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores;
    cResult[17] = tmp4;
    cResult[18] = tmp28Result;
    tmp27 = tmp28Result;
  }
  let stringResult1 = tmp12;
  if (stateFromStores) {
    const intl2 = tmp(1126).intl;
    stringResult1 = intl2.string(_modDef3849.Yh5pAc);
  }
  cResult[6] = stateFromStores;
  cResult[7] = tmp12;
  cResult[8] = stringResult1;
  tmp17 = stringResult1;
}) : (function ProjectRow(project) {
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
  const obj = project(10685);
  const conjureProjectBadge = obj.useConjureProjectBadge(project.id);
  const items = [ConjureProjectStore];
  const items1 = [project.id];
  const obj2 = project(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ConjureProjectStore.isProjectDeleting(project.id), items1);
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp2(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { time: getRelativeTimestamp(date.getTime()) };
    const AXydi3 = _modDef3849.AXydi3;
    const _Date = Date;
    const self = this;
    const self2 = this;
    getRelativeTimestamp = project(6064).getRelativeTimestamp;
    project(6064);
    date = new Date(project.updated_at);
    formatToPlainStringResult = formatToPlainString(AXydi3, obj3);
  }
  const obj4 = { label: project.name, subLabel: formatToPlainStringResult, accessibilityHint: stringResult, disabled: stateFromStores, icon: closure_9(ConjureProjectIconDefault, { project, size: "list" }), trailing: tmp12Result, onPress, onLongPress: onMore };
  const TableRow = tmp2(6184).TableRow;
  if (stateFromStores) {
    const intl2 = tmp2(1126).intl;
    formatToPlainStringResult = intl2.string(_modDef3849.Yh5pAc);
  }
  stringResult = undefined;
  if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
    const intl3 = tmp2(1126).intl;
    stringResult = intl3.string(_modDef3849.hfIuc7);
  }
  if (stateFromStores) {
    tmp12Result = tmp14(closure_4, {});
  } else {
    let tmp14Result3 = null;
    const obj5 = { style: tmp.projectRowTrailing, children: items2 };
    if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
      const obj6 = { mentionsCount: conjureProjectBadge };
      tmp14Result3 = tmp14(tmp18(11359), obj6);
    }
    items2 = [tmp14Result3, ];
    const obj7 = { IconComponent: project(9251).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl4.string(project(1126).t["UKOtz+"]) };
    const tmp18Result = ConjureHeaderIconButtonDefault;
    intl4 = tmp2(1126).intl;
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
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectList.tsx");

export default tmp4;
