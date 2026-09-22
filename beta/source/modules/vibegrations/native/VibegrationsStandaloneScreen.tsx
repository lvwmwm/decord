// Module ID: 16938
// Function ID: 16939
// Name: VibegrationsStandaloneScreen
// Dependencies: [32, 5, 19, 17, 4985, 2109, 2067, 4399, 16939, 16941, 13364, 9307, 1078, 2052, 9312, 21, 4758, 580, 1105, 558, 568, 7410, 1119, 3682, 7882, 1401, 16942, 8180, 5822, 1616, 1488, 504, 5276, 4725, 16943, 16950, 16952, 16957, 7442, 11257, 16959, 16960, 4754, 5188, 9308, 16961, 4442, 4352, 5903, 7224, 16963, 16965, 9314, 16967, 9310, 13182, 16966, 1482, 9868, 16968, 16989, 16990, 4458, 16991, 16993, 16994, 15365, 4457, 16995, 2023, 16996, 16969, 13186, 16998, 9483, 15828, 7624, 16041, 5839, 17001, 8182, 17002, 9869, 17023, 5278, 17066, 7246, 2]

// Module 16938 (VibegrationsStandaloneScreen)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import _modDef3682 from "module_3682" /* 3682 */;
import _modDef4352 from "module_4352" /* 4352 */;
import DateUtils from "DateUtils" /* 4442 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4725 */;
import Text_Text from "Text/Text" /* 4754 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5276 */;
import TableRow from "TableRow" /* 5822 */;
import NavigatorHeader from "NavigatorHeader" /* 5839 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7410 */;
import SettingsIcon from "SettingsIcon" /* 7624 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 8180 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 9308 */;
import UploadIcon from "UploadIcon" /* 9483 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 13186 */;
import UndoIcon from "UndoIcon" /* 15365 */;
import WrenchIcon from "WrenchIcon" /* 15828 */;
import BugIcon from "BugIcon" /* 16041 */;
import VibegrationsHeaderIconButtonDefault from "VibegrationsHeaderIconButton" /* 16942 */;
import VibegrationsCreateSheet from "VibegrationsCreateSheet" /* 16943 */;
import VibegrationsRemixSheet from "VibegrationsRemixSheet" /* 16950 */;
import vibegrationsProjectActions from "vibegrationsProjectActions" /* 16952 */;
import VibegrationsProjectSettingsSheet from "VibegrationsProjectSettingsSheet" /* 16957 */;
import VibegrationsPublishBlockedSheetDefault from "VibegrationsPublishBlockedSheet" /* 16989 */;
import vibegrationsPublishBlockedReason from "vibegrationsPublishBlockedReason" /* 16990 */;
import VibegrationsPublishNotesSheetDefault from "VibegrationsPublishNotesSheet" /* 16991 */;
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet" /* 16993 */;
import VibegrationsConnectToolSheet from "VibegrationsConnectToolSheet" /* 16994 */;
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet" /* 16995 */;
import VibegrationsRestorePointsSheet from "VibegrationsRestorePointsSheet" /* 16996 */;
import VibegrationsDebugSceneDefault from "VibegrationsDebugScene" /* 17066 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4985 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import VibegrationsBuilderRouteStore from "VibegrationsBuilderRouteStore" /* 16941 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 13364 */;
import VibegrationsProjectStore_mod from "VibegrationsProjectStore" /* 9307 */;

const VibegrationsCreateSheetDefault = VibegrationsCreateSheet;
const VibegrationsRemixSheetDefault = VibegrationsRemixSheet;
const VibegrationsProjectSettingsSheetDefault = VibegrationsProjectSettingsSheet;
const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;
const VibegrationsConnectToolSheetDefault = VibegrationsConnectToolSheet;
const VibegrationsVersionHistorySheetDefault = VibegrationsVersionHistorySheet;
const VibegrationsRestorePointsSheetDefault = VibegrationsRestorePointsSheet;

require = fn;
function remixedOpener(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (arg1 === closure_0) {
      f144908(arg0);
    } else {
      guildId(navigation[18]).transitionTo(callback3.CHANNEL(arg1, projectGuildId.VIBEGRATIONS, arg0));
      const obj = guildId(navigation[18]);
    }
  };
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Image: closure_7, Keyboard: closure_8, ScrollView: closure_9, View: c10 } = get_ActivityIndicator);
const vibegrationsDesignFeedbackStore = fn(16939);
({ enterVibegrationsDesignFeedback: closure_15, exitVibegrationsDesignFeedback: closure_16, useVibegrationsDesignFeedback: closure_17 } = vibegrationsDesignFeedbackStore);
let VibegrationsConnectionStore = fn(13364);
({ closeConnection: closure_19, draftPatchNotes: closure_20, publishProject: closure_21, restoreSourceHistoryEntry: closure_22 } = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
let VibegrationsProjectStore = fn(9307);
({ canPublishProject: closure_24, isProjectOwner: closure_25 } = VibegrationsProjectStore);
let VibegrationsProjectStore = VibegrationsProjectStore_mod;
const Constants = fn(1078);
({ Permissions: closure_27, Routes: closure_28 } = Constants);
const StaticChannelRoute = fn(2052).StaticChannelRoute;
const FramesConstants = fn(9312);
({ isLaunched: closure_30, MAIN_SURFACE: items } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_32, jsxs: closure_33, Fragment: closure_34 } = jsxProd);
const createStyles = fn(4758);
let closure_35 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: null, centered: null, listContent: null, section: null, sectionHeading: null, changelog: null, changelogEntries: null, changelogItem: null, appIcon: null, listError: null, headerActions: null, segments: null, panes: null, pane: null, paneHidden: null, paneBackstage: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.contentBare = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj4 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listContent = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  const obj5 = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  obj.section = { gap: nativeDefault.space.PX_8 };
  const obj6 = { gap: nativeDefault.space.PX_8 };
  obj.sectionHeading = { gap: nativeDefault.space.PX_4 };
  const obj7 = { gap: nativeDefault.space.PX_4 };
  obj.changelog = { gap: nativeDefault.space.PX_16 };
  const obj8 = { gap: nativeDefault.space.PX_16 };
  obj.changelogEntries = { gap: nativeDefault.space.PX_12 };
  const obj9 = { gap: nativeDefault.space.PX_12 };
  obj.changelogItem = { gap: nativeDefault.space.PX_4 };
  const size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.sm };
  obj.appIcon = size;
  const obj10 = { gap: nativeDefault.space.PX_4 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  const obj11 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  obj.headerActions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.segments = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 };
  obj.panes = { flex: 1 };
  obj.pane = { flex: 1 };
  obj.paneHidden = { display: "none" };
  obj.paneBackstage = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 };
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
const constants2 = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
let ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ project, onPress, onMore } = arg0);
  const tmp4 = closure_35(0);
  let application_id = project.preview_application_id;
  if (application_id == null) {
    application_id = project.application_id;
  }
  const data = ApplicationActionCreators.useApplication(application_id).data;
  if (cResult[0] !== project.updated_at) {
    let formatToPlainStringResult;
    if (null != project.updated_at) {
      const intl = tmp(1119).intl;
      const obj2 = { time: null };
      const _Date = Date;
      const date = new Date(project.updated_at);
      obj2.time = tmp(7882).getRelativeTimestamp(date.getTime());
      formatToPlainStringResult = intl.formatToPlainString(_modDef3682.oMDaqr, obj2);
      const tmpResult2 = tmp(7882);
    }
    cResult[0] = project.updated_at;
    cResult[1] = formatToPlainStringResult;
    let tmp5 = formatToPlainStringResult;
  } else {
    tmp5 = cResult[1];
  }
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  if (cResult[2] === icon) {
    if (cResult[3] === application_id) {
      let tmp13 = cResult[4];
    }
    if (cResult[5] === tmp4.appIcon) {
      if (cResult[6] === tmp13) {
        let tmp17 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1119).intl;
        const stringResult = intl2.string(tmp(1119).t["UKOtz+"]);
        cResult[8] = stringResult;
        let tmp22 = stringResult;
      } else {
        tmp22 = cResult[8];
      }
      if (cResult[9] !== onMore) {
        const obj3 = { IconComponent: tmp(8180).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: tmp22 };
        const tmp28 = __initData5(VibegrationsHeaderIconButtonDefault, obj3);
        cResult[9] = onMore;
        cResult[10] = tmp28;
        let tmp24 = tmp28;
      } else {
        tmp24 = cResult[10];
      }
      if (cResult[11] === tmp5) {
        if (cResult[12] === onPress) {
          if (cResult[13] === project.name) {
            if (cResult[14] === tmp17) {
              if (cResult[15] === tmp24) {
                let tmp29 = cResult[16];
              }
              return tmp29;
            }
          }
        }
      }
      const obj4 = { label: project.name, subLabel: tmp5, icon: tmp17, trailing: tmp24, onPress };
      const tmp31 = __initData5(tmp(5822).TableRow, obj4);
      cResult[11] = tmp5;
      cResult[12] = onPress;
      cResult[13] = project.name;
      cResult[14] = tmp17;
      cResult[15] = tmp24;
      cResult[16] = tmp31;
      tmp29 = tmp31;
    }
    const obj5 = { accessibilityIgnoresInvertColors: true, source: tmp13, style: tmp4.appIcon };
    const tmp20 = __initData5(React5, obj5);
    cResult[5] = tmp4.appIcon;
    cResult[6] = tmp13;
    cResult[7] = tmp20;
    tmp17 = tmp20;
  }
  const tmpResult = ApplicationActionCreators;
  const obj7 = { id: application_id, icon: null, size: 64 };
  let icon1;
  if (data != null) {
    icon1 = data.icon;
  }
  obj7.icon = icon1;
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource(obj7);
  let icon2;
  if (data != null) {
    icon2 = data.icon;
  }
  cResult[2] = icon2;
  cResult[3] = application_id;
  cResult[4] = applicationIconSource;
  tmp13 = applicationIconSource;
}) : ((project) => {
  project = project.project;
  ({ onPress, onMore } = project);
  let application_id = project.preview_application_id;
  if (application_id == null) {
    application_id = project.application_id;
  }
  const tmp = closure_35(0);
  const data = ApplicationActionCreators.useApplication(application_id).data;
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp2(1119).intl;
    const obj2 = { time: null };
    const _Date = Date;
    const date = new Date(project.updated_at);
    obj2.time = tmp2(7882).getRelativeTimestamp(date.getTime());
    formatToPlainStringResult = intl.formatToPlainString(_modDef3682.oMDaqr, obj2);
    const tmp2Result = tmp2(7882);
  }
  const obj3 = { label: project.name, subLabel: formatToPlainStringResult, icon: null, trailing: null, onPress: null };
  const tmp11 = React5;
  const obj4 = { id: application_id, icon: null, size: 64 };
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  obj4.icon = icon;
  obj3.icon = __initData5(tmp11, { accessibilityIgnoresInvertColors: true, source: AvatarUtilsDefault.getApplicationIconSource(obj4), style: tmp.appIcon });
  const obj7 = { IconComponent: null, onPress: null, accessibilityLabel: null };
  const obj5 = { accessibilityIgnoresInvertColors: true, source: AvatarUtilsDefault.getApplicationIconSource(obj4), style: tmp.appIcon };
  obj7.IconComponent = MoreHorizontalIcon.MoreHorizontalIcon;
  obj7.onPress = onMore;
  const intl2 = tmp2(1119).intl;
  obj7.accessibilityLabel = intl2.string(util.t["UKOtz+"]);
  obj3.trailing = __initData5(VibegrationsHeaderIconButtonDefault, obj7);
  obj3.onPress = onPress;
  return __initData5(TableRow.TableRow, obj3);
});
ReactCompilerGating = fn(558);
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(navigation[20]).c(104);
  guildId = guildId.guildId;
  const bottom = require("useSafeAreaInsets")().bottom;
  let obj = guildId(navigation[20]);
  importDefault = closure_35(0);
  const tmp4 = closure_35(0);
  navigation = guildId(navigation[30]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [VibegrationsProjectStore];
    const fn = function a() {
      return VibegrationsProjectStore.getOwnedProjects();
    };
    let items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp6 = items;
    tmp7 = fn;
    tmp8 = items1;
  } else {
    [tmp6, tmp7, tmp8] = cResult;
  }
  let obj2 = guildId(navigation[30]);
  const stateFromStoresArray = guildId(navigation[31]).useStateFromStoresArray(tmp6, tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [VibegrationsProjectStore];
    cResult[3] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function b() {
      return VibegrationsProjectStore.getSharedProjects(guildId);
    };
    const items3 = [guildId];
    cResult[4] = guildId;
    cResult[5] = fn2;
    cResult[6] = items3;
    let tmp13 = items3;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const tmpResult = guildId(navigation[31]);
  const stateFromStoresArray1 = guildId(navigation[31]).useStateFromStoresArray(tmp10, tmp12, tmp13);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [VibegrationsProjectStore];
    class P {
      constructor() {
        return closure_1_26.getProjectsFetchState();
      }
    }
    const items5 = [];
    cResult[7] = items4;
    cResult[8] = P;
    cResult[9] = items5;
    let tmp17 = items5;
    let tmp16 = P;
    let tmp15 = items4;
  } else {
    tmp15 = cResult[7];
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  const tmpResult3 = guildId(navigation[31]);
  const stateFromStores = guildId(navigation[31]).useStateFromStores(tmp15, tmp16, tmp17);
  if (cResult[10] === stateFromStoresArray) {
    if (cResult[11] === guildId) {
      if (cResult[16] !== stateFromStoresArray1) {
        const _Symbol = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function w(updated_at, updated_at2) {
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
          };
          cResult[18] = fn3;
          class P {
            constructor() {
              return closure_1_26.getProjectsFetchState();
            }
          }
        } else {
          const tmp25 = cResult[18];
        }
        class P {
          constructor() {
            return closure_1_26.getProjectsFetchState();
          }
        }
        const sorted = obj7.sort(tmp25);
        cResult[16] = stateFromStoresArray1;
        cResult[17] = sorted;
      } else {
        if (cResult[19] !== navigation) {
          class G {
            constructor(arg0) {
              obj = { projectId: guildId };
              return closure_2.push(closure_37.CHAT, obj);
            }
          }
          cResult[19] = navigation;
          class P {
            constructor() {
              return closure_1_26.getProjectsFetchState();
            }
          }
          class B {
            constructor() {
              obj = closure_0(closure_2[33]);
              obj1 = { key: closure_0(closure_2[34]).VIBEGRATIONS_CREATE_SHEET_KEY, content: null };
              obj4 = { guildId, onCreated: closure_3 };
              obj1.content = jsx(closure_1(closure_2[34]), obj4);
              showActionSheetResult = obj.showActionSheet(obj1);
              return;
            }
          }
        } else {
          class G {
            constructor(arg0) {
              obj = { projectId: guildId };
              return closure_2.push(closure_37.CHAT, obj);
            }
          }
        }
        onCreated = tmp28;
        class P {
          constructor() {
            return closure_1_26.getProjectsFetchState();
          }
        }
        class B {
          constructor() {
            obj = closure_0(closure_2[33]);
            obj1 = { key: closure_0(closure_2[34]).VIBEGRATIONS_CREATE_SHEET_KEY, content: null };
            obj4 = { guildId, onCreated: closure_3 };
            obj1.content = jsx(closure_1(closure_2[34]), obj4);
            showActionSheetResult = obj.showActionSheet(obj1);
            return;
          }
        }
        cResult[21] = guildId;
        cResult[22] = tmp28;
        cResult[23] = B;
      }
    }
  }
  if (cResult[13] !== guildId) {
    class G {
      constructor(arg0) {
        obj = { projectId: guildId };
        return closure_2.push(closure_37.CHAT, obj);
      }
    }
    cResult[13] = guildId;
    class P {
      constructor() {
        return closure_1_26.getProjectsFetchState();
      }
    }
    class B {
      constructor() {
        obj = closure_0(closure_2[33]);
        obj1 = { key: closure_0(closure_2[34]).VIBEGRATIONS_CREATE_SHEET_KEY, content: null };
        obj4 = { guildId, onCreated: closure_3 };
        obj1.content = jsx(closure_1(closure_2[34]), obj4);
        showActionSheetResult = obj.showActionSheet(obj1);
        return;
      }
    }
    let found = R;
  } else {
    class G {
      constructor(arg0) {
        obj = { projectId: guildId };
        return closure_2.push(closure_37.CHAT, obj);
      }
    }
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor(arg0) {
        obj = { projectId: guildId };
        return closure_2.push(closure_37.CHAT, obj);
      }
    }
    cResult[15] = tmp22;
    class P {
      constructor() {
        return closure_1_26.getProjectsFetchState();
      }
    }
  } else {
    class G {
      constructor(arg0) {
        obj = { projectId: guildId };
        return closure_2.push(closure_37.CHAT, obj);
      }
    }
  }
  found = stateFromStoresArray.filter(found);
  const sorted1 = found.sort(tmp21);
  cResult[10] = stateFromStoresArray;
  cResult[11] = guildId;
  cResult[12] = sorted1;
}) : ((guildId) => {
  guildId = guildId.guildId;
  importDefault = undefined;
  let navigation;
  onCreated = undefined;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_35(0);
  importDefault = tmp3;
  navigation = guildId(navigation[30]).useNavigation();
  let obj = guildId(navigation[30]);
  let items = [VibegrationsProjectStore];
  const stateFromStoresArray = guildId(navigation[31]).useStateFromStoresArray(items, () => VibegrationsProjectStore.getOwnedProjects(), []);
  let obj2 = guildId(navigation[31]);
  let items1 = [VibegrationsProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = guildId(navigation[31]).useStateFromStoresArray(items1, () => VibegrationsProjectStore.getSharedProjects(guildId), items2);
  let obj3 = guildId(navigation[31]);
  const items3 = [VibegrationsProjectStore];
  const stateFromStores = guildId(navigation[31]).useStateFromStores(items3, () => VibegrationsProjectStore.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = onCreated.useMemo(() => {
    const found = stateFromStoresArray.filter((item) => guildId(navigation[32]).isVibegrationsProjectInGuild(item, closure_1_0));
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
  const memo1 = onCreated.useMemo(() => {
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
  onCreated = onCreated.useCallback((projectId) => navigation.push(constants.CHAT, { projectId }), items6);
  const items7 = [guildId, onCreated];
  const callback1 = onCreated.useCallback(() => {
    const obj2 = { key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY, content: __initData5(VibegrationsCreateSheetDefault, { guildId, onCreated }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items7);
  const items8 = [guildId, onCreated];
  const memo2 = onCreated.useMemo(() => {
    closure_0 = guildId;
    closure_1 = callback;
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f144908(arg0);
      } else {
        guildId(navigation[18]).transitionTo(callback3.CHANNEL(arg1, projectGuildId.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[18]);
      }
    };
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = onCreated.useCallback((project) => {
    const obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: __initData5(VibegrationsRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items9);
  const items10 = [guildId, onCreated, callback2];
  closure_9 = onCreated.useCallback((project) => {
    guildId = project;
    const result = guildId(navigation[36]).vibegrationsProjectActions({
      project,
      guildId,
      openChat() {
        return callback(project.id);
      },
      onRemix() {
        return callback2(closure_0);
      },
      onOpenSettings() {
        const obj2 = { key: VibegrationsProjectSettingsSheet.VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY, content: null };
        const obj3 = { projectId: project.id, guildId: null };
        let guild_id = project.guild_id;
        const obj = ActionSheetActionCreators;
        const tmp = __initData5;
        if (guild_id == null) {
          guild_id = guildId;
        }
        obj3.guildId = guild_id;
        obj2.content = tmp(VibegrationsProjectSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      }
    });
    let obj = guildId(navigation[36]);
    let obj2 = {
      project,
      guildId,
      openChat() {
        return callback(project.id);
      },
      onRemix() {
        return callback2(closure_0);
      },
      onOpenSettings() {
        const obj2 = { key: VibegrationsProjectSettingsSheet.VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY, content: null };
        const obj3 = { projectId: project.id, guildId: null };
        let guild_id = project.guild_id;
        const obj = ActionSheetActionCreators;
        const tmp = __initData5;
        if (guild_id == null) {
          guild_id = guildId;
        }
        obj3.guildId = guild_id;
        obj2.content = tmp(VibegrationsProjectSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      }
    };
    let obj3 = guildId(navigation[38]);
    const result1 = obj3.showSimpleActionSheet({ key: "VibegrationsProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) });
  }, items10);
  const items11 = [navigation, callback1];
  const effect = onCreated.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { IconComponent: guildId(navigation[39]).PlusLargeIcon, onPress, accessibilityLabel: null };
        const intl = guildId(navigation[22]).intl;
        obj.accessibilityLabel = intl.string(guildId(navigation[22]).t.CumH4u);
        return closure_2_32(closure_1(navigation[26]), obj);
      }
    });
  }, items11);
  const obj4 = guildId(navigation[31]);
  let result = guildId(navigation[40]).recentVibegrationsChangelog("mobile");
  let tmp15 = memo.length > 0;
  const callback3 = onCreated.useCallback(() => {
    const obj = guildId(navigation[33]);
    obj.showActionSheet({ content: closure_1_32(closure_1(navigation[41]), {}), key: guildId(navigation[41]).VIBEGRATIONS_CHANGELOG_SHEET_KEY });
  }, []);
  if (!tmp15) {
    tmp15 = memo1.length > 0;
  }
  if (tmp15) {
    const obj6 = { style: tmp3.content, children: null };
    const obj7 = { contentContainerStyle: null, scrollIndicatorInsets: null, keyboardShouldPersistTaps: "handled", children: null };
    const items12 = [tmp3.listContent, ];
    const obj8 = { paddingBottom: tmp(tmp2[17]).space.PX_8 + bottom };
    items12[1] = obj8;
    obj7.contentContainerStyle = items12;
    const obj9 = { bottom };
    obj7.scrollIndicatorInsets = obj9;
    const items13 = [closure_32(tmp(tmp2[45]), {}), , , , ];
    let tmp24Result = null;
    if (result.length > 0) {
      const obj10 = { style: tmp3.changelog, children: null };
      const obj11 = { style: tmp3.sectionHeading, children: null };
      const obj12 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl3 = tmp4(tmp2[22]).intl;
      obj12.children = intl3.string(tmp(tmp2[23]).x07mpp);
      const items14 = [tmp22(tmp4(tmp2[42]).Text, obj12), ];
      const obj13 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[22]).intl;
      obj13.children = intl4.string(tmp(tmp2[23]).h5CwHI);
      items14[1] = tmp22(tmp4(tmp2[42]).Text, obj13);
      obj11.children = items14;
      const items15 = [tmp24(tmp23, obj11), , ];
      const obj14 = {
        style: tmp3.changelogEntries,
        children: result.map((children) => {
              const obj = { style: closure_1.changelogItem, children: null };
              const items = [DateUtils.dateFormat(_modDef4352(children.date, "YYYY-MM-DD"), "LL"), ];
              const tmp2 = v65535;
              let combined = null;
              if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
                const intl = tmp3(1119).intl;
                const _HermesInternal = HermesInternal;
                combined = " \u00B7 " + intl.string(_modDef3682["CLX+p/"]);
              }
              items[1] = combined;
              const items1 = [__initData6(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }), __initData5(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: children.summary })];
              obj.children = items1;
              return __initData6(tmp2, obj, "" + children.date + "-" + children.summary);
            })
      };
      items15[1] = tmp22(tmp23, obj14);
      let tmp22Result = null;
      if (tmp4Result.hasMoreVibegrationsChangelog("mobile")) {
        const obj15 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = tmp4(tmp2[22]).intl;
        obj15.text = intl5.string(tmp(tmp2[23]).YWxThz);
        obj15.onPress = callback3;
        tmp22Result = tmp22(tmp4(tmp2[43]).Button, obj15);
      }
      items15[2] = tmp22Result;
      obj10.children = items15;
      tmp24Result = tmp24(tmp23, obj10);
      tmp4Result = tmp4(tmp2[40]);
    }
    items13[1] = tmp24Result;
    let tmp24Result3 = null;
    if (memo.length > 0) {
      const obj16 = { style: tmp3.section, children: null };
      const obj17 = { style: tmp3.sectionHeading, children: null };
      const obj18 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl6 = tmp4(tmp2[22]).intl;
      obj18.children = intl6.string(tmp(tmp2[23]).Bo5fE3);
      const items16 = [tmp22(tmp4(tmp2[42]).Text, obj18), ];
      const obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl7 = tmp4(tmp2[22]).intl;
      obj19.children = intl7.string(tmp(tmp2[23]).YnAFtT);
      items16[1] = tmp22(tmp4(tmp2[42]).Text, obj19);
      obj17.children = items16;
      const items17 = [tmp24(tmp23, obj17), ];
      const obj20 = {
        hasIcons: true,
        children: memo.map((project) => closure_1_32(closure_1_39, {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_9(closure_0);
              }
            }, project.id))
      };
      items17[1] = tmp22(tmp4(tmp2[48]).TableRowGroup, obj20);
      obj16.children = items17;
      tmp24Result3 = tmp24(tmp23, obj16);
    }
    items13[2] = tmp24Result3;
    let tmp24Result4 = null;
    if (memo1.length > 0) {
      const obj21 = { style: tmp3.section, children: null };
      const obj22 = { style: tmp3.sectionHeading, children: null };
      const obj23 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl8 = tmp4(tmp2[22]).intl;
      obj23.children = intl8.string(tmp(tmp2[23]).jrCnUc);
      const items18 = [tmp22(tmp4(tmp2[42]).Text, obj23), ];
      const obj24 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl9 = tmp4(tmp2[22]).intl;
      obj24.children = intl9.string(tmp(tmp2[23])["1KEhDu"]);
      items18[1] = tmp22(tmp4(tmp2[42]).Text, obj24);
      obj22.children = items18;
      const items19 = [tmp24(tmp23, obj22), ];
      const obj25 = {
        hasIcons: true,
        children: memo1.map((project) => closure_1_32(closure_1_39, {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_9(closure_0);
              }
            }, project.id))
      };
      items19[1] = tmp22(tmp4(tmp2[48]).TableRowGroup, obj25);
      obj21.children = items19;
      tmp24Result4 = tmp24(tmp23, obj21);
    }
    items13[3] = tmp24Result4;
    items13[4] = null;
    obj7.children = items13;
    obj6.children = closure_33(closure_9, obj7);
    return closure_32(closure_10, obj6);
  } else {
    const obj26 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj27 = { style: tmp3.listError, children: null };
          const obj28 = { variant: "text-md/normal", color: "text-muted", children: null };
          let intl = tmp4(tmp2[22]).intl;
          obj28.children = intl.string(tmp(tmp2[23])["IN/HRP"]);
          const items20 = [tmp16(tmp4(tmp2[42]).Text, obj28), ];
          const obj29 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl2 = tmp4(tmp2[22]).intl;
          obj29.text = intl2.string(tmp(tmp2[23])["42EdIV"]);
          obj29.onPress = function onPress() {
            return VibegrationsActionCreators.listProjects(guildId);
          };
          items20[1] = tmp16(tmp4(tmp2[43]).Button, obj29);
          obj27.children = items20;
          let tmp16Result2 = closure_33(tmp17, obj27);
        } else {
          const obj30 = { style: tmp3.listError, children: null };
          const obj31 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl10 = tmp4(tmp2[22]).intl;
          obj31.children = intl10.string(tmp(tmp2[23])["vqy+in"]);
          const items21 = [tmp16(tmp4(tmp2[42]).Text, obj31), ];
          const obj32 = { variant: "primary", size: "sm", text: null, onPress: null };
          const intl11 = tmp4(tmp2[22]).intl;
          obj32.text = intl11.string(tmp4(tmp2[22]).t.CumH4u);
          obj32.onPress = callback1;
          items21[1] = tmp16(tmp4(tmp2[43]).Button, obj32);
          obj30.children = items21;
          tmp16Result2 = closure_33(tmp17, obj30);
        }
      }
      obj26.children = tmp16Result2;
      tmp16(tmp17, obj26);
    }
    tmp16Result2 = tmp16(callback1, {});
  }
});
ReactCompilerGating = fn(558);
let closure_41 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(navigation[20]).c(236);
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let obj = guildId(navigation[20]);
  navigation = guildId(navigation[30]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  let obj2 = guildId(navigation[30]);
  closure_3 = closure_35(projectId(navigation[49])(first).insets.bottom);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [VibegrationsProjectStore];
    cResult[1] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== projectId) {
    const fn = function f() {
      let project = VibegrationsProjectStore.getProject(projectId);
      if (project == null) {
        project = null;
      }
      return project;
    };
    const items1 = [projectId];
    cResult[2] = projectId;
    cResult[3] = fn;
    cResult[4] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  let tmp6 = closure_35(projectId(navigation[49])(first).insets.bottom);
  const stateFromStores = guildId(navigation[31]).useStateFromStores(tmp7, tmp9, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [VibegrationsProjectStore];
    cResult[5] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== projectId) {
    const fn2 = function k() {
      const project = VibegrationsProjectStore.getProject(projectId);
      const obj = { projectExists: null != project, projectName: null, projectGuildId: null, previewAppId: null, isOwner: null, canPublish: null };
      let name;
      if (project != null) {
        name = project.name;
      }
      if (name == null) {
        name = null;
      }
      obj.projectName = name;
      let guild_id;
      if (project != null) {
        guild_id = project.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      obj.projectGuildId = guild_id;
      let prop;
      if (project != null) {
        prop = project.preview_application_id;
      }
      if (prop == null) {
        prop = null;
      }
      obj.previewAppId = prop;
      let tmp5 = null != project;
      if (tmp5) {
        tmp5 = closure_2_25(project);
      }
      obj.isOwner = tmp5;
      let tmp7 = null != project;
      if (tmp7) {
        tmp7 = closure_2_24(project);
      }
      obj.canPublish = tmp7;
      return obj;
    };
    const items3 = [projectId];
    cResult[6] = projectId;
    cResult[7] = fn2;
    cResult[8] = items3;
    let tmp15 = items3;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[7];
    tmp15 = cResult[8];
  }
  const tmpResult = guildId(navigation[31]);
  const stateFromStoresObject = guildId(navigation[31]).useStateFromStoresObject(tmp12, tmp14, tmp15);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  ({ isOwner, canPublish } = stateFromStoresObject);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [VibegrationsProjectStore];
    cResult[9] = items4;
    let tmp17 = items4;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] !== guildId) {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
    const items5 = [guildId];
    cResult[10] = guildId;
    cResult[11] = items5;
    cResult[12] = J;
    let tmp20 = J;
    const tmp19 = items5;
  } else {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
    tmp20 = cResult[12];
  }
  const tmpResult5 = guildId(navigation[31]);
  const stateFromStores1 = guildId(navigation[31]).useStateFromStores(tmp17, tmp20, tmp19);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
    const items6 = [VibegrationsProjectStore];
    cResult[13] = items6;
    let tmp22 = items6;
  } else {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
  }
  if (cResult[14] !== projectId) {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
    const items7 = [projectId];
    cResult[14] = projectId;
    cResult[15] = tmp25;
    cResult[16] = items7;
    let tmp24 = items7;
    const tmp23 = tmp25;
  } else {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
    tmp24 = cResult[16];
  }
  const tmpResult6 = guildId(navigation[31]);
  const stateFromStores2 = guildId(navigation[31]).useStateFromStores(tmp22, tmp23, tmp24);
  if (stateFromStores2 != null) {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
  }
  if (stateFromStores != null) {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
  }
  if (undefined == null) {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
  }
  const tmpResult7 = guildId(navigation[31]);
  if (previewAppId == null) {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
  }
  let application = guildId(navigation[21]).useApplication(previewAppId);
  const data = application.data;
  if (stateFromStores2 != null) {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
  }
  if (stateFromStores2 != null) {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
  }
  if (cResult[17] === undefined) {
    class J {
      constructor() {
        guildProjectsFetchState = closure_26.getGuildProjectsFetchState(guildId);
        tmp2 = "unattempted" === guildProjectsFetchState;
        if (!tmp2) {
          str = "loading";
          tmp2 = "loading" === guildProjectsFetchState;
        }
        return tmp2;
      }
    }
  }
  cResult[17] = undefined;
  cResult[18] = previewAppId;
  cResult[19] = true === undefined;
  cResult[20] = true === undefined;
  cResult[21] = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === undefined, installScope: undefined, ownerAuthorizationRevoked: true === undefined, mainCardOnly: true };
}) : ((guildId) => {
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let navigation;
  previewAppId = undefined;
  let data;
  let availability;
  setMode = undefined;
  c14 = undefined;
  let result1;
  let onReviewPermissions;
  c17 = undefined;
  closure_18 = undefined;
  let active;
  let vibegrationsControlActive;
  c21 = undefined;
  let callback1;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let first1;
  closure_27 = undefined;
  let callback3;
  projectGuildId = undefined;
  let callback4;
  let stateFromStores3;
  let callback5;
  let memo1;
  let callback6;
  let callback7;
  let ref;
  let callback8;
  let callback9;
  let setting;
  let callback10;
  let callback11;
  closure_42 = undefined;
  let callback12;
  let callback13;
  let preview;
  let memo2;
  navigation = guildId(navigation[30]).useNavigation();
  let tmp5 = callback7(projectId(navigation[49])({ includeKeyboardHeight: true }).insets.bottom);
  onCreated = tmp5;
  let obj = guildId(navigation[30]);
  let items = [first1];
  const items1 = [projectId];
  const stateFromStores = guildId(navigation[31]).useStateFromStores(items, () => {
    let project = VibegrationsProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  let obj2 = guildId(navigation[31]);
  const items2 = [first1];
  const items3 = [projectId];
  const stateFromStoresObject = guildId(navigation[31]).useStateFromStoresObject(items2, () => {
    const project = VibegrationsProjectStore.getProject(projectId);
    const obj = { projectExists: null != project, projectName: null, projectGuildId: null, previewAppId: null, isOwner: null, canPublish: null };
    let name;
    if (project != null) {
      name = project.name;
    }
    if (name == null) {
      name = null;
    }
    obj.projectName = name;
    let guild_id;
    if (project != null) {
      guild_id = project.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj.projectGuildId = guild_id;
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    if (prop == null) {
      prop = null;
    }
    obj.previewAppId = prop;
    let tmp5 = null != project;
    if (tmp5) {
      tmp5 = closure_2_25(project);
    }
    obj.isOwner = tmp5;
    let tmp7 = null != project;
    if (tmp7) {
      tmp7 = closure_2_24(project);
    }
    obj.canPublish = tmp7;
    return obj;
  }, items3);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  const isOwner = stateFromStoresObject.isOwner;
  const canPublish = stateFromStoresObject.canPublish;
  let obj3 = guildId(navigation[31]);
  const items4 = [first1];
  const items5 = [guildId];
  const stateFromStores1 = guildId(navigation[31]).useStateFromStores(items4, () => {
    const guildProjectsFetchState = VibegrationsProjectStore.getGuildProjectsFetchState(guildId);
    let tmp2 = "unattempted" === guildProjectsFetchState;
    if (!tmp2) {
      tmp2 = "loading" === guildProjectsFetchState;
    }
    return tmp2;
  }, items5);
  let obj4 = guildId(navigation[31]);
  const items6 = [first1];
  const items7 = [projectId];
  const stateFromStores2 = guildId(navigation[31]).useStateFromStores(items6, () => {
    let integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
    if (integrationStatus == null) {
      integrationStatus = null;
    }
    return integrationStatus;
  }, items7);
  let preview_ready;
  if (stateFromStores2 != null) {
    preview_ready = stateFromStores2.preview_ready;
  }
  let install_scope;
  if (stateFromStores != null) {
    install_scope = stateFromStores.install_scope;
  }
  if (install_scope == null) {
    install_scope = null;
  }
  let obj5 = guildId(navigation[31]);
  let application = guildId(navigation[21]).useApplication(previewAppId);
  data = application.data;
  const tmpResult = guildId(navigation[21]);
  let obj6 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: null, installScope: null, ownerAuthorizationRevoked: null, mainCardOnly: true };
  let has_activity;
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  obj6.declaredActivity = true === has_activity;
  obj6.installScope = install_scope;
  let prop;
  if (stateFromStores2 != null) {
    prop = stateFromStores2.owner_authorization_revoked;
  }
  obj6.ownerAuthorizationRevoked = true === prop;
  const vibegrationsPreviewMode = guildId(navigation[50]).useVibegrationsPreviewMode(obj6);
  availability = vibegrationsPreviewMode.availability;
  ({ activeMode, setMode } = vibegrationsPreviewMode);
  ({ widgetApplicationId, isResolving } = vibegrationsPreviewMode);
  const tmpResult7 = guildId(navigation[50]);
  let obj7 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null, botPermissionsChanged: null };
  let prop1;
  if (stateFromStores2 != null) {
    prop1 = stateFromStores2.integration_installed;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  obj7.integrationInstalled = prop1;
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  obj7.botPermissionsChanged = true === prop2;
  let result = guildId(navigation[51]).requiresPermissionReview(obj7);
  c14 = result;
  const items8 = [projectId];
  const effect = projectExists.useEffect(() => {
    const project = VibegrationsActionCreators.getProject(projectId);
    project.catch(() => {

    });
  }, items8);
  let tmp22 = null != previewAppId && null != projectId(navigation[52])(previewAppId);
  const tmpResult8 = guildId(navigation[51]);
  result1 = guildId(navigation[53]).vibegrationsInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items9 = [result1, previewAppId, data, stateFromStores, projectId];
  onReviewPermissions = obj11.useCallback(stateFromStores(function*(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_3 = tmp2;
            let tmp7 = null != stateFromStores;
            if (tmp7) {
              tmp7 = null != previewAppId;
            }
            if (tmp7) {
              if (null == data) {
                application = application(tmp2[21]).fetchApplication(previewAppId);
                c4 = 1;
                c5 = 1;
                const obj6 = {
                  value: application.catch(() => {

                              }),
                  done: false
                };
                return obj6;
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj = { value, done: true };
          return obj;
        }
        const obj7 = { applicationId: closure_131_7, application: null, guildId: null, onClose: null };
        let application3 = closure_131_11;
        if (closure_131_11 == null) {
          application3 = application2.getApplication(closure_131_7);
        }
        application = application3;
        if (application3 == null) {
          application = null;
        }
        obj7.application = application;
        obj7.guildId = closure_131_15;
        obj7.onClose = function onClose() {
          const result = c0(16967).repairVibegrationsGuildHints(closure_1_4, closure_1_15);
          const obj = c0(16967);
          result.finally(() => application(9308).getProject(closure_1_1)).catch(() => {

          });
        };
        let result = application3(tmp2[54]).openVibegrationsAppInstallModal(obj7);
        const obj2 = application3(tmp2[54]);
      } catch (tmp27) {
        c5 = tmp;
        throw tmp27;
      }
    }
  }), items9);
  const tmpResult9 = guildId(navigation[53]);
  [tmp27, tmp28] = onCreated(projectExists.useState(true), 2);
  c17 = tmp28;
  let tmp29 = null;
  if (null != stateFromStores2) {
    tmp29 = tmp16;
  }
  const tmp26 = onCreated(projectExists.useState(true), 2);
  [tmp31, tmp32] = onCreated(projectExists.useState(tmp29), 2);
  const tmp25Result3 = onCreated(projectExists.useState(projectId), 2);
  if (tmp25Result3[0] !== projectId) {
    tmp25Result3[1](projectId);
    tmp28(true);
    tmp32(null);
  }
  let tmp37 = tmp16;
  if (true === preview_ready) {
    tmp37 = null != previewAppId;
  }
  if (tmp37) {
    tmp37 = !isResolving;
  }
  if (tmp37) {
    tmp37 = availability.modes.length > 0 || result;
    const tmp38 = availability.modes.length > 0 || result;
  }
  let paneHidden = tmp37;
  if (tmp37) {
    paneHidden = !tmp27;
  }
  let hasItem = tmp37;
  if (tmp37) {
    hasItem = tmp22;
  }
  if (hasItem) {
    hasItem = !result;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp40 = hasItem;
  if (hasItem) {
    tmp40 = paneHidden;
  }
  if (tmp40) {
    tmp40 = "frame" === activeMode;
  }
  closure_18 = tmp40;
  active = c17(projectId).active;
  const tmp25Result = onCreated(projectExists.useState(tmp29), 2);
  vibegrationsControlActive = guildId(navigation[55]).useVibegrationsControlActive(projectId);
  let intl = tmp(tmp2[22]).intl;
  const tmp4Result = projectId(navigation[23]);
  if (vibegrationsControlActive) {
    let bfQ4Ki = tmp4Result.bfQ4Ki;
  } else {
    bfQ4Ki = active ? tmp4Result.rfNEHn : tmp4Result.lXcEa2;
  }
  const stringResult = intl.string(bfQ4Ki);
  c21 = stringResult;
  const items10 = [active, projectId];
  callback1 = obj11.useCallback(() => {
    if (active) {
      value2(projectId);
    } else {
      closure_2_15(projectId);
    }
  }, items10);
  const items11 = [availability.modes];
  const items12 = [availability.modes, setMode];
  const memo = obj11.useMemo(() => {
    let obj = { id: "chat", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3682.kWtsyP);
    const items = [
      obj,
      ...modes.map((id) => {
        const obj = { id, label: guildId(navigation[56]).getPreviewModeLabel(id), page: null };
        return obj;
      })
    ];
    modes = availability.modes;
    return items;
  }, items11);
  const first = availability.modes[0];
  let tmp48 = null != stateFromStores2;
  const callback2 = obj11.useCallback((arg0) => {
    closure_2_8.dismiss();
    _undefined(null == availability.modes[arg0 - 1]);
    if (null != availability.modes[arg0 - 1]) {
      setMode(tmp2);
    }
  }, items12);
  if (tmp48) {
    tmp48 = tmp16 !== tmp31;
  }
  if (tmp48) {
    if (tmp49) {
      setMode(first);
      tmp28(false);
    }
    tmp32(tmp16);
    tmp49 = false === tmp31 && tmp16 && null != first && !result;
  }
  const tmpResult10 = guildId(navigation[55]);
  const tmpResult11 = guildId(navigation[58]);
  const segmentedControlState = tmpResult11.useSegmentedControlState({ items: memo, pageWidth: projectId(navigation[57])().width - 2 * ref, onSetActiveIndex: callback2 });
  num2 = 0;
  if (!tmp27) {
    num2 = 0;
    if (null != activeMode) {
      const modes1 = availability.modes;
      num2 = 1 + modes1.indexOf(activeMode);
    }
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items13 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj11.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items13);
  const items14 = [previewAppId];
  const effect2 = obj11.useEffect(() => null != previewAppId ? (() => guildId(navigation[59]).leaveVibegrationsPreviewFrame(previewAppId)) : undefined, items14);
  const tmp25Result4 = onCreated(projectExists.useState(false), 2);
  first1 = tmp25Result4[0];
  closure_27 = tmp25Result4[1];
  const items15 = [guildId, onReviewPermissions, result, projectId, first1];
  callback3 = obj11.useCallback(() => {
    if (!first1) {
      const project = VibegrationsProjectStore.getProject(projectId);
      if (null != project) {
        const integrationStatus = obj.getIntegrationStatus(tmp);
        let preview_ready;
        if (integrationStatus != null) {
          preview_ready = integrationStatus.preview_ready;
        }
        if (true === preview_ready) {
          if (c14) {
            callback().catch(() => {

            });
            const promise9 = callback();
          } else {
            closure_27(true);
            if ("user" !== project.install_scope) {
              const promise5 = closure_2_20(tmp);
              promise5.catch(() => {

              });
              const nextPromise = guild(tmp).then((ok) => {
                if (true !== ok.ok) {
                  const _Error = Error;
                  const intl = guildId(navigation[22]).intl;
                  const error = new Error(intl.string(projectId(navigation[23]).fNP6Cd));
                  throw error;
                } else {
                  const result = guildId(navigation[44]).refreshPublishedProject(closure_1_1, { isPreview: false });
                  result.catch(() => {

                  });
                }
              });
              const promise6 = guild(tmp);
              nextPromise.catch(() => {

              }).finally(() => closure_1_27(false));
              const catchPromise2 = nextPromise.catch(() => {

              });
              const tmp20 = require;
              let guild_id = project.guild_id;
              let obj2 = ActionSheetActionCreators;
              const tmp22 = __initData5;
              if (guild_id == null) {
                guild_id = guildId;
              }
              const obj3 = { content: null, key: null };
              const obj6 = { guildId: guild_id, applicationId: null, projectName: null, publish: null, initialDraft: null };
              ({ application_id: obj4.applicationId, name: obj4.projectName } = project);
              obj6.publish = nextPromise;
              obj6.initialDraft = promise5;
              obj3.content = tmp22(VibegrationsPublishNotesSheetDefault, obj6);
              obj3.key = tmp20(16991).VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY;
              obj2.showActionSheet(obj3);
            } else {
              const nextPromise1 = guild(tmp).then((ok) => {
                if (true !== ok.ok) {
                  const _Error = Error;
                  const intl = guildId(navigation[22]).intl;
                  const error = new Error(intl.string(projectId(navigation[23]).fNP6Cd));
                  throw error;
                } else {
                  const result = guildId(navigation[44]).refreshPublishedProject(closure_1_1, { isPreview: false });
                  result.catch(() => {

                  });
                }
              });
              const promise = guild(tmp);
              nextPromise1.catch(() => {

              }).finally(() => closure_1_27(false));
              const catchPromise3 = nextPromise1.catch(() => {

              });
              nextPromise1.then(() => {
                const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                const intl = guildId(1119).intl;
                obj2.content = intl.string(projectId(3682).wA0o0L);
                projectId(4458).open(obj2);
              }).catch((error) => {
                if (error instanceof Error) {
                  let message = error.message;
                } else {
                  const intl = guildId(1119).intl;
                  message = intl.string(projectId(3682).fNP6Cd);
                }
                projectId(4458).open({ key: "VIBEGRATIONS_PUBLISH_FAILED", content: message });
              });
              const nextPromise2 = nextPromise1.then(() => {
                const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                const intl = guildId(1119).intl;
                obj2.content = intl.string(projectId(3682).wA0o0L);
                projectId(4458).open(obj2);
              });
            }
          }
        } else {
          VibegrationsPublishBlockedSheetDefault(vibegrationsPublishBlockedReason.VibegrationsPublishBlockedReason.NO_PREVIEW);
        }
      }
      obj = VibegrationsProjectStore;
    }
  }, items15);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items16 = [projectId, projectGuildId];
  callback4 = obj11.useCallback(() => {
    const obj2 = { content: __initData5(VibegrationsProjectSettingsSheetDefault, { projectId, guildId: projectGuildId }), key: VibegrationsProjectSettingsSheet.VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items16);
  const obj8 = { items: memo, pageWidth: projectId(navigation[57])().width - 2 * ref, onSetActiveIndex: callback2 };
  const items17 = [num2];
  const items18 = [projectId];
  stateFromStores3 = guildId(navigation[31]).useStateFromStores(items17, () => null != VibegrationsConnectionStore.getSettings(projectId), items18);
  const items19 = [projectId];
  callback5 = obj11.useCallback(() => {
    const obj2 = { content: __initData5(VibegrationsSettingsSheetDefault, { projectId, isPreview: true }), key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items19);
  const items20 = [guildId, navigation];
  memo1 = obj11.useMemo(() => {
    closure_0 = guildId;
    const f144908 = (projectId) => navigation.push(callback8.CHAT, { projectId });
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f144908(arg0);
      } else {
        guildId(navigation[18]).transitionTo(callback3.CHANNEL(arg1, projectGuildId.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[18]);
      }
    };
  }, items20);
  const items21 = [guildId, memo1, stateFromStores];
  callback6 = obj11.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId: guildId, onRemixed: memo1 };
      obj2.content = __initData5(VibegrationsRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items21);
  const items22 = [projectId];
  callback7 = obj11.useCallback(() => {
    const obj2 = { key: VibegrationsConnectToolSheet.VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY, content: __initData5(VibegrationsConnectToolSheetDefault, { projectId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items22);
  ref = obj11.useRef(false);
  const items23 = [projectId];
  callback8 = obj11.useCallback((sha) => {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { key: "VIBEGRATIONS_VERSION_RESTORING", content: null, IconComponent: null };
      let intl = util.intl;
      obj2.content = intl.string(_modDef3682.pGFXZ0);
      obj2.IconComponent = UndoIcon.UndoIcon;
      ToastActionCreatorsDefault.open(obj2);
      const promise = closure_2_22(projectId, sha.sha);
      closure_2_22(projectId, sha.sha).then(() => {
        const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
        const intl = guildId(1119).intl;
        obj2.content = intl.string(projectId(3682).u8g2Od);
        obj2.IconComponent = guildId(15365).UndoIcon;
        projectId(4458).open(obj2);
      }, () => {
        const intl = guildId(1119).intl;
        guildId(4457).presentError(intl.string(projectId(3682).q6iZ84));
      }).finally(() => {
        ref.current = false;
      });
      const nextPromise = closure_2_22(projectId, sha.sha).then(() => {
        const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
        const intl = guildId(1119).intl;
        obj2.content = intl.string(projectId(3682).u8g2Od);
        obj2.IconComponent = guildId(15365).UndoIcon;
        projectId(4458).open(obj2);
      }, () => {
        const intl = guildId(1119).intl;
        guildId(4457).presentError(intl.string(projectId(3682).q6iZ84));
      });
    }
  }, items23);
  const items24 = [callback8, projectId];
  callback9 = obj11.useCallback(() => {
    const obj2 = { key: VibegrationsVersionHistorySheet.VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY, content: __initData5(VibegrationsVersionHistorySheetDefault, { projectId, onRestore: callback8 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items24);
  const DeveloperMode = tmp(tmp2[69]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items25 = [navigation, projectId];
  callback10 = obj11.useCallback(() => navigation.push(constants.DEBUG, { projectId }), items25);
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  const items26 = [install_scope1, projectId];
  callback11 = obj11.useCallback(() => {
    const obj2 = { key: VibegrationsRestorePointsSheet.VIBEGRATIONS_RESTORE_POINTS_SHEET_KEY, content: null };
    const obj3 = { projectId, installScope: null };
    let install_scope;
    const obj = ActionSheetActionCreators;
    const tmp = __initData5;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    obj3.installScope = install_scope;
    obj2.content = tmp(VibegrationsRestorePointsSheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items26);
  const tmp71 = callback4(projectId(navigation[71])(previewAppId, stateFromStores3));
  closure_42 = tmp71;
  const items27 = [previewAppId];
  callback12 = obj11.useCallback(() => {
    if (null != previewAppId) {
      restartVibegrationsAppFramesDefault(tmp);
    }
  }, items27);
  const items28 = [navigation, projectId];
  callback13 = obj11.useCallback(() => {
    closure_2_19(projectId);
    navigation.goBack();
  }, items28);
  const obj9 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult12 = guildId(navigation[31]);
  let tmp75 = null;
  if (modes2.includes("widget")) {
    tmp75 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp75 = widgetApplicationId;
    }
  }
  obj9.refreshApplicationId = tmp75;
  const tmp4Result1Result = projectId(navigation[73])(obj9);
  preview = tmp4Result1Result;
  const items29 = [canPublish, setting, guildId, callback13, callback5, callback7, callback10, callback4, callback6, callback11, callback9, callback3, callback12, stateFromStores3, isOwner, tmp71, tmp4Result1Result, stateFromStores];
  memo2 = obj11.useMemo(() => {
    const items = [];
    if (canPublish) {
      const obj = { label: null, IconComponent: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(_modDef3682["5gU57O"]);
      obj.IconComponent = UploadIcon.UploadIcon;
      obj.action = callback3;
      items.push(obj);
    }
    if (stateFromStores3) {
      const obj2 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(_modDef3682.gTMvzD);
      obj2.IconComponent = WrenchIcon.WrenchIcon;
      obj2.action = callback5;
      items.push(obj2);
    }
    if (isOwner) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(_modDef3682["xhcY+n"]);
      obj3.IconComponent = SettingsIcon.SettingsIcon;
      obj3.action = callback4;
      items.push(obj3);
    }
    if (setting) {
      const obj4 = { label: null, IconComponent: null, action: null };
      const intl4 = util.intl;
      obj4.label = intl4.string(_modDef3682.KampIf);
      obj4.IconComponent = BugIcon.BugIcon;
      obj4.action = callback10;
      items.push(obj4);
    }
    if (null != stateFromStores) {
      const obj7 = { project: tmp33, guildId, onRemix: callback6, onConnectTool: callback7, onVersionHistory: callback9, onRestorePoints: callback11, onRefresh: null, onClose: null, preview: null };
      let tmp34;
      if (closure_42) {
        tmp34 = callback12;
      }
      obj7.onRefresh = tmp34;
      obj7.onClose = callback13;
      obj7.preview = preview;
      const result = vibegrationsProjectActions.vibegrationsProjectActions(obj7);
      const iter = result[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj12 = { label: null, IconComponent: null, variant: null, action: null };
        ({ label: obj5.label, IconComponent: obj5.IconComponent } = nextResult);
        let str2;
        let tmp42 = nextResult;
        if (true === nextResult.destructive) {
          str2 = "destructive";
        }
        obj12.variant = str2;
        obj12.action = tmp42.action;
        let arr9 = items.push(obj12);
        continue;
      }
    }
    return items;
  }, items29);
  const items30 = [vibegrationsControlActive, active, stringResult, tmp40, callback1, navigation, memo2, projectExists, projectName, stateFromStores1, tmp5];
  const effect3 = obj11.useEffect(() => {
    if (projectName != null) {
      const title = projectName;
      let obj = {
        headerTitle() {
            return __initData5(NavigatorHeader.NavigatorHeader, { title });
          },
        headerRight() {
            let tmp = null;
            if (projectExists) {
              let obj = { style: headerActions.headerActions, children: null };
              if (!closure_1_18) {
                items = [null, ];
                const obj2 = {
                  items,
                  align: "below",
                  children(arg0) {
                        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                        const obj = { ref, IconComponent: title(8180).MoreHorizontalIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
                        const intl = title(1119).intl;
                        obj.accessibilityLabel = intl.string(title(1119).t["UKOtz+"]);
                        obj.accessibilityActions = accessibilityActions;
                        obj.onAccessibilityAction = onAccessibilityAction;
                        return closure_1_32(closure_1_1(16942), obj);
                      }
                };
                items[1] = callback5(guildId(navigation[80]).ContextMenu, obj2);
                obj.children = items;
                tmp = tmp2(tmp3, obj);
              } else {
                let obj3 = navigation;
                if (active) {
                  let VibegrationsSelectModeActiveIcon = guildId(obj3[79]).VibegrationsSelectModeActiveIcon;
                } else {
                  VibegrationsSelectModeActiveIcon = tmp8(obj3[79]);
                }
                obj3 = { IconComponent: VibegrationsSelectModeActiveIcon, onPress, accessibilityLabel, accessibilityState: null, disabled: null };
                const obj4 = { selected: active };
                obj3.accessibilityState = obj4;
                obj3.disabled = disabled;
                callback5(projectId(navigation[26]), obj3);
                tmp8 = projectId;
                const tmp9 = projectId(navigation[26]);
              }
            }
            return tmp;
          }
      };
      navigation.setOptions(obj);
    } else {
      let tmp2 = navigation;
      if (!projectExists) {
        if (!stateFromStores1) {
          let Xmvb23 = projectId(tmp2[23]).F2dRba;
        }
        tmp3(Xmvb23);
      }
      tmp2 = projectId(tmp2[23]);
      Xmvb23 = tmp2.Xmvb23;
    }
  }, items30);
  const items31 = [guildId, projectId];
  const effect4 = obj11.useEffect(() => {
    const result = VibegrationsActionCreators.setSelectedProjectForGuild(guildId, projectId);
    return () => guildId(navigation[44]).setSelectedProjectForGuild(closure_1_0, null);
  }, items31);
  const items32 = [projectId];
  const effect5 = obj11.useEffect(() => () => projectId(navigation[81])(closure_1_1), items32);
  if (projectExists) {
    if (paneHidden) {
      if ("bot" === activeMode) {
        let content = tmp5.contentBare;
      }
      const obj10 = { style: content, children: null };
      let tmp89 = null;
      if (tmp37) {
        let obj12 = { style: tmp5.segments, children: null };
        const obj13 = { state: segmentedControlState, variant: "experimental_Small" };
        obj12.children = callback5(tmp(tmp2[82]).SegmentedControl, obj13);
        tmp89 = callback5(tmp88, obj12);
      }
      const items33 = [tmp89, ];
      const obj14 = { style: tmp5.panes, children: null };
      let tmp92Result = null;
      if (hasItem) {
        tmp92Result = null;
        if (null != previewAppId) {
          const obj15 = { style: tmp40 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
          let str5 = "none";
          if (tmp40) {
            str5 = "auto";
          }
          obj15.pointerEvents = str5;
          obj15.accessibilityElementsHidden = !tmp40;
          let str6 = "no-hide-descendants";
          if (tmp40) {
            str6 = "auto";
          }
          obj15.importantForAccessibility = str6;
          const obj16 = { applicationId: previewAppId, projectId, visible: tmp40 };
          obj15.children = callback5(tmp(tmp2[59]).PreviewFrame, obj16);
          tmp92Result = tmp92(tmp88, obj15);
        }
      }
      const items34 = [tmp92Result, , ];
      let tmp94Result = null;
      if (paneHidden) {
        tmp94Result = null;
        if (null != previewAppId) {
          tmp94Result = null;
          if (!tmp40) {
            const obj17 = { style: tmp5.pane, children: null };
            const obj18 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, widgetApplicationId, frameHostAvailable: tmp22, permissionsGate: null };
            let tmp96 = null;
            if (result) {
              const obj19 = { onReviewPermissions, loading: application.isLoading };
              tmp96 = obj19;
            }
            obj18.permissionsGate = tmp96;
            obj17.children = callback5(tmp4(tmp2[59]), obj18);
            tmp94Result = tmp94(tmp88, obj17);
            const tmp4Result4 = tmp4(tmp2[59]);
          }
        }
      }
      items34[1] = tmp94Result;
      const items35 = [tmp5.pane, ];
      if (paneHidden) {
        paneHidden = tmp5.paneHidden;
      }
      const obj20 = { style: null, children: null };
      items35[1] = paneHidden;
      obj20.style = items35;
      const obj21 = { projectId };
      obj20.children = callback5(tmp4(tmp2[83]), obj21);
      items34[2] = callback5(tmp88, obj20);
      obj14.children = items34;
      items33[1] = tmp87(tmp88, obj14);
      obj10.children = items33;
      let tmp81Result1 = tmp87(tmp88, obj10);
    }
    content = tmp5.content;
  } else {
    const obj22 = { style: null, children: null };
    const items36 = [, ];
    ({ content: arr35[0], centered: arr35[1] } = tmp5);
    obj22.style = items36;
    if (stateFromStores1) {
      let tmp81Result = tmp81(projectName, {});
    } else {
      const obj23 = { style: tmp5.listError, children: null };
      const obj24 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl2 = tmp(tmp2[22]).intl;
      obj24.children = intl2.string(tmp4(tmp2[23]).F2dRba);
      const items37 = [tmp81(tmp(tmp2[42]).Text, obj24), , ];
      const obj25 = { variant: "text-md/normal", color: "text-muted", children: null };
      let intl3 = tmp(tmp2[22]).intl;
      obj25.children = intl3.string(tmp4(tmp2[23]).GnEJ3o);
      items37[1] = tmp81(tmp(tmp2[42]).Text, obj25);
      const obj26 = { variant: "secondary", size: "sm", text: null, onPress: null };
      let intl4 = tmp(tmp2[22]).intl;
      obj26.text = intl4.string(tmp4(tmp2[23])["42EdIV"]);
      obj26.onPress = function onPress() {
        return VibegrationsActionCreators.listProjects(guildId);
      };
      items37[2] = tmp81(tmp(tmp2[43]).Button, obj26);
      obj23.children = items37;
      tmp81Result = memo1(tmp82, obj23);
    }
    obj22.children = tmp81Result;
    tmp81Result1 = tmp81(tmp82, obj22);
  }
  return tmp81Result1;
});
ReactCompilerGating = fn(558);
let closure_42 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(openedProjectIdRef[20]).c(6);
  projectId = projectId.projectId;
  const sceneProjectId = projectId.sceneProjectId;
  openedProjectIdRef = projectId.openedProjectIdRef;
  let obj = projectId(openedProjectIdRef[20]);
  const navigation = projectId(openedProjectIdRef[30]).useNavigation();
  if (cResult[0] === navigation) {
    if (cResult[1] === openedProjectIdRef) {
      if (cResult[2] === projectId) {
        if (cResult[3] === sceneProjectId) {
          let tmp3 = cResult[4];
          let tmp4 = cResult[5];
        }
        const effect = noop.useEffect(tmp3, tmp4);
        return null;
      }
    }
  }
  const fn = function n() {
    let tmp2 = null != projectId;
    if (tmp2) {
      tmp2 = tmp !== openedProjectIdRef.current;
    }
    if (tmp2) {
      openedProjectIdRef.current = tmp;
      if (tmp !== sceneProjectId) {
        const obj = { projectId: tmp };
        navigation.push(constants.CHAT, obj);
      }
    }
  };
  const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
  cResult[0] = navigation;
  cResult[1] = openedProjectIdRef;
  cResult[2] = projectId;
  cResult[3] = sceneProjectId;
  cResult[4] = fn;
  cResult[5] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((projectId) => {
  projectId = projectId.projectId;
  const sceneProjectId = projectId.sceneProjectId;
  const openedProjectIdRef = projectId.openedProjectIdRef;
  const navigation = projectId(openedProjectIdRef[30]).useNavigation();
  const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
  const effect = noop.useEffect(() => {
    let tmp2 = null != projectId;
    if (tmp2) {
      tmp2 = tmp !== openedProjectIdRef.current;
    }
    if (tmp2) {
      openedProjectIdRef.current = tmp;
      if (tmp !== sceneProjectId) {
        const obj = { projectId: tmp };
        navigation.push(constants.CHAT, obj);
      }
    }
  }, items);
  return null;
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(stateFromStores[20]).c(56);
  guildId = guildId.guildId;
  let obj = guildId(stateFromStores[20]);
  const navigation = guildId(stateFromStores[30]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [VibegrationsBuilderRouteStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      const routedProjectId = VibegrationsBuilderRouteStore.getRoutedProjectId(guildId);
      return routedProjectId;
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj2 = guildId(stateFromStores[30]);
  stateFromStores = guildId(stateFromStores[31]).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    const fn2 = function _() {
      return GuildStore.getGuild(guildId);
    };
    const items3 = [guildId];
    cResult[5] = guildId;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp13 = items3;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult = guildId(stateFromStores[31]);
  const stateFromStores1 = guildId(stateFromStores[31]).useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] !== guildId) {
    let obj3 = { guildId, location: "VibegrationsStandaloneScreen" };
    cResult[8] = guildId;
    cResult[9] = obj3;
    let tmp15 = obj3;
  } else {
    tmp15 = cResult[9];
  }
  const tmpResult5 = guildId(stateFromStores[31]);
  const isVibegrationsGuildEnabled = guildId(stateFromStores[84]).useIsVibegrationsGuildEnabled(tmp15);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildMemberStore];
    cResult[10] = items4;
    let tmp17 = items4;
  } else {
    tmp17 = cResult[10];
  }
  if (cResult[11] !== guildId) {
    class C {
      constructor() {
        selfMember = closure_12.getSelfMember(guildId);
        roles = undefined;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    const items5 = [guildId];
    cResult[11] = guildId;
    cResult[12] = items5;
    cResult[13] = C;
    let tmp20 = C;
    const tmp19 = items5;
  } else {
    class C {
      constructor() {
        selfMember = closure_12.getSelfMember(guildId);
        roles = undefined;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    tmp20 = cResult[13];
  }
  const tmpResult6 = guildId(stateFromStores[84]);
  const stateFromStoresArray = guildId(stateFromStores[31]).useStateFromStoresArray(tmp17, tmp20, tmp19);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        selfMember = closure_12.getSelfMember(guildId);
        roles = undefined;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    const items6 = [GuildStore, PermissionStore];
    cResult[14] = items6;
    const tmp22 = items6;
  } else {
    class C {
      constructor() {
        selfMember = closure_12.getSelfMember(guildId);
        roles = undefined;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
  }
  if (cResult[15] !== guildId) {
    class C {
      constructor() {
        selfMember = closure_12.getSelfMember(guildId);
        roles = undefined;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    const items7 = [guildId];
    cResult[15] = guildId;
    cResult[16] = tmp26;
    cResult[17] = items7;
    let tmp25 = items7;
    const tmp24 = tmp26;
  } else {
    class C {
      constructor() {
        selfMember = closure_12.getSelfMember(guildId);
        roles = undefined;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    tmp25 = cResult[17];
  }
  const tmpResult7 = guildId(stateFromStores[31]);
  const stateFromStores2 = guildId(stateFromStores[31]).useStateFromStores(tmp22, tmp24, tmp25);
  if (cResult[18] === guildId) {
    class C {
      constructor() {
        selfMember = closure_12.getSelfMember(guildId);
        roles = undefined;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        return roles;
      }
    }
    if (cResult[21] === stateFromStores2) {
      class C {
        constructor() {
          selfMember = closure_12.getSelfMember(guildId);
          roles = undefined;
          if (selfMember != null) {
            roles = selfMember.roles;
          }
          if (roles == null) {
            roles = [];
          }
          return roles;
        }
      }
    }
    const items8 = [isVibegrationsGuildEnabled, guildId, stateFromStoresArray, stateFromStores2];
    cResult[21] = stateFromStores2;
    cResult[22] = stateFromStoresArray;
    cResult[23] = guildId;
    cResult[24] = isVibegrationsGuildEnabled;
    cResult[25] = items8;
  }
  class H {
    constructor() {
      if (closure_4) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[44]);
        tmp3 = guildId;
        listProjectsResult = obj.listProjects(guildId);
      }
      return;
    }
  }
  cResult[18] = guildId;
  cResult[19] = isVibegrationsGuildEnabled;
  cResult[20] = H;
}) : ((guildId) => {
  guildId = guildId.guildId;
  let stateFromStores;
  noop = undefined;
  const navigation = guildId(stateFromStores[30]).useNavigation();
  let obj = guildId(stateFromStores[30]);
  let items = [VibegrationsBuilderRouteStore];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[31]).useStateFromStores(items, () => {
    const routedProjectId = VibegrationsBuilderRouteStore.getRoutedProjectId(guildId);
    return routedProjectId;
  }, items1);
  let obj2 = guildId(stateFromStores[31]);
  const items2 = [GuildStore];
  const items3 = [guildId];
  const stateFromStores1 = guildId(stateFromStores[31]).useStateFromStores(items2, () => GuildStore.getGuild(guildId), items3);
  let obj3 = guildId(stateFromStores[31]);
  const isVibegrationsGuildEnabled = guildId(stateFromStores[84]).useIsVibegrationsGuildEnabled({ guildId, location: "VibegrationsStandaloneScreen" });
  const obj4 = guildId(stateFromStores[84]);
  const items4 = [GuildMemberStore];
  const items5 = [guildId];
  const stateFromStoresArray = guildId(stateFromStores[31]).useStateFromStoresArray(items4, () => {
    const selfMember = GuildMemberStore.getSelfMember(guildId);
    let roles;
    if (selfMember != null) {
      roles = selfMember.roles;
    }
    if (roles == null) {
      roles = [];
    }
    return roles;
  }, items5);
  const obj5 = guildId(stateFromStores[31]);
  const items6 = [GuildStore, PermissionStore];
  const items7 = [guildId];
  const items8 = [
    isVibegrationsGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(stateFromStores[31]).useStateFromStores(items6, () => {
      guild = GuildStore.getGuild(guildId);
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(constants.MANAGE_GUILD, guild);
      }
      return canResult;
    }, items7)
  ];
  const effect = noop.useEffect(() => {
    if (isVibegrationsGuildEnabled) {
      VibegrationsActionCreators.listProjects(guildId);
    }
  }, items8);
  const items9 = [stateFromStores1, isVibegrationsGuildEnabled, navigation];
  const effect1 = noop.useEffect(() => {
    if (!tmp) {
      navigation.goBack();
    }
  }, items9);
  noop = noop.useRef(stateFromStores);
  const obj7 = {};
  const obj8 = { headerLeft: null, headerTitle: null, render: null };
  const obj6 = guildId(stateFromStores[31]);
  obj8.headerLeft = guildId(stateFromStores[78]).getHeaderCloseButton(() => navigation.goBack());
  obj8.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(stateFromStores[22]).intl;
    obj.title = intl.string(navigation(stateFromStores[23]).Xmvb23);
    return closure_1_32(guildId(stateFromStores[78]).NavigatorHeader, obj);
  };
  obj8.render = function render() {
    const obj = { children: null };
    const obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
    const items = [__initData5(closure_42, obj2), __initData5(closure_40, { guildId })];
    obj.children = items;
    return __initData6(__initData7, obj);
  };
  obj7[constants2.PROJECTS] = obj8;
  obj7[constants2.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      projectId = projectId.projectId;
      const obj = { children: null };
      const items = [__initData5(closure_42, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }), __initData5(closure_41, { guildId, projectId })];
      obj.children = items;
      return __initData6(__initData7, obj);
    }
  };
  obj7[constants2.DEBUG] = {
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(stateFromStores[22]).intl;
      obj.title = intl.string(navigation(stateFromStores[23]).KampIf);
      return closure_1_32(guildId(stateFromStores[78]).NavigatorHeader, obj);
    },
    render(projectId) {
      projectId = projectId.projectId;
      const obj = { children: null };
      const items = [__initData5(closure_42, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }), __initData5(VibegrationsDebugSceneDefault, { projectId })];
      obj.children = items;
      return __initData6(__initData7, obj);
    }
  };
  const obj10 = {
    screens: obj7,
    initialRouteStack: stateFromStores1(noop.useState(() => {
      const items = [{ name: constants.PROJECTS }];
      if (null != stateFromStores) {
        const obj2 = { name: tmp.CHAT, params: null };
        const obj3 = { projectId: tmp2 };
        obj2.params = obj3;
        items.push(obj2);
      }
      return items;
    }), 1)[0],
    headerBackTitle: null
  };
  let intl = guildId(stateFromStores[22]).intl;
  obj10.headerBackTitle = intl.string(navigation(stateFromStores[23]).Xmvb23);
  return closure_32(guildId(stateFromStores[86]).Navigator, obj10);
});
