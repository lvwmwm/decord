// Module ID: 16238
// Function ID: 16239
// Name: VibegrationsStandaloneScreen
// Dependencies: [32, 5, 19, 17, 5064, 2111, 2073, 4472, 16239, 16241, 12644, 8492, 1086, 2058, 8497, 21, 4837, 588, 1113, 558, 576, 6585, 504, 1127, 3718, 7059, 9000, 16242, 7364, 5916, 1619, 1491, 5371, 4801, 16243, 16255, 16257, 16262, 6617, 10455, 16267, 16268, 4833, 5282, 8493, 16269, 4515, 4424, 5997, 16271, 4570, 16272, 16274, 8500, 16276, 8495, 12444, 16277, 16275, 1485, 9060, 16278, 16303, 16304, 4531, 16305, 16307, 14626, 4530, 16308, 2027, 16309, 16279, 12448, 16311, 8671, 6799, 15329, 5933, 16314, 7366, 16315, 9061, 16336, 5373, 16408, 6421, 2]

// Module 16238 (VibegrationsStandaloneScreen)
import nativeDefault from "native" /* 588 */;
import router_utils from "router_utils" /* 1113 */;
import intl12 from "intl" /* 1127 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import _modDef3718 from "module_3718" /* 3718 */;
import _modDef4424 from "module_4424" /* 4424 */;
import DateUtils from "DateUtils" /* 4515 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4801 */;
import Text_Text from "Text/Text" /* 4833 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5371 */;
import NavigatorHeader2 from "NavigatorHeader" /* 5933 */;
import SettingsIcon from "SettingsIcon" /* 6799 */;
import VibegrationsProjectStore2 from "VibegrationsProjectStore" /* 8492 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8493 */;
import UploadIcon from "UploadIcon" /* 8671 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9000 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 12448 */;
import UndoIcon from "UndoIcon" /* 14626 */;
import BugIcon from "BugIcon" /* 15329 */;
import VibegrationsHeaderIconButtonDefault from "VibegrationsHeaderIconButton" /* 16242 */;
import VibegrationsCreateSheet from "VibegrationsCreateSheet" /* 16243 */;
import VibegrationsRemixSheet from "VibegrationsRemixSheet" /* 16255 */;
import vibegrationsProjectActions2 from "vibegrationsProjectActions" /* 16257 */;
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet" /* 16262 */;
import VibegrationsChangelog from "VibegrationsChangelog" /* 16267 */;
import VibegrationsPublishBlockedSheetDefault from "VibegrationsPublishBlockedSheet" /* 16303 */;
import vibegrationsPublishBlockedReason from "vibegrationsPublishBlockedReason" /* 16304 */;
import VibegrationsPublishNotesSheetDefault from "VibegrationsPublishNotesSheet" /* 16305 */;
import VibegrationsConnectToolSheet from "VibegrationsConnectToolSheet" /* 16307 */;
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet" /* 16308 */;
import VibegrationsRestorePointsSheet from "VibegrationsRestorePointsSheet" /* 16309 */;
import VibegrationsDebugSceneDefault from "VibegrationsDebugScene" /* 16408 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 5064 */;
import GuildMemberStore from "GuildMemberStore" /* 2111 */;
import GuildStore from "GuildStore" /* 2073 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import vibegrationsDesignFeedbackStore from "vibegrationsDesignFeedbackStore" /* 16239 */;
import VibegrationsBuilderRouteStore from "VibegrationsBuilderRouteStore" /* 16241 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12644 */;
import Constants from "Constants" /* 1086 */;
import FramesConstants from "FramesConstants" /* 8497 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const VibegrationsCreateSheetDefault = VibegrationsCreateSheet;
const VibegrationsRemixSheetDefault = VibegrationsRemixSheet;
const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;
const VibegrationsConnectToolSheetDefault = VibegrationsConnectToolSheet;
const VibegrationsVersionHistorySheetDefault = VibegrationsVersionHistorySheet;
const VibegrationsRestorePointsSheetDefault = VibegrationsRestorePointsSheet;
const VibegrationsProjectStore = VibegrationsProjectStore2;
let c4, c5, guildId, importDefault, navigation, obj1;

let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_24;
let closure_25;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function projectOpener(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (arg1 === closure_0) {
      f144472(arg0);
    } else {
      const obj = guildId(navigation[18]);
      obj.transitionTo(callback1.CHANNEL(arg1, constants.VIBEGRATIONS, arg0));
    }
  };
}
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, Keyboard: metroImportDefault, ScrollView: metroImportAll, View: c9 } = react_native);
({ enterVibegrationsDesignFeedback: closure_14, exitVibegrationsDesignFeedback: closure_15, useVibegrationsDesignFeedback: closure_16 } = vibegrationsDesignFeedbackStore);
({ closeConnection: closure_18, draftPatchNotes: closure_19, publishProject: closure_20, restoreSourceHistoryEntry: closure_21 } = VibegrationsConnectionStore);
const canPublishProject = VibegrationsProjectStore2.canPublishProject;
({ Permissions: closure_24, Routes: closure_25 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ isLaunched: closure_27, MAIN_SURFACE: closure_28 } = FramesConstants);
({ jsx: closure_29, jsxs: closure_30, Fragment: closure_31 } = Fragment);
let closure_32 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, listContent: { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 }, section: { gap: nativeDefault.space.PX_8 }, sectionHeading: { gap: nativeDefault.space.PX_4 }, changelog: { gap: nativeDefault.space.PX_16 }, changelogEntries: { gap: nativeDefault.space.PX_12 }, changelogItem: { gap: nativeDefault.space.PX_4 }, listError: { alignItems: "center", gap: nativeDefault.space.PX_12 }, headerActions: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, segments: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 }, panes: { flex: 1 }, pane: { flex: 1 }, paneHidden: { display: "none" }, paneBackstage: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom });
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 });
  ({ paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 });
  ({ gap: nativeDefault.space.PX_8 });
  ({ gap: nativeDefault.space.PX_4 });
  ({ gap: nativeDefault.space.PX_16 });
  ({ gap: nativeDefault.space.PX_12 });
  ({ gap: nativeDefault.space.PX_4 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_12 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 });
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
const constants2 = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function(project) {
  let date;
  let first;
  let getRelativeTimestamp;
  let intl3;
  let obj6;
  let onMore;
  let onPress;
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = project(576);
  const cResult = obj.c(22);
  project = project.project;
  ({ onPress, onMore } = project);
  let application_id = project.preview_application_id;
  if (application_id == null) {
    application_id = project.application_id;
  }
  const tmpResult = project(6585);
  const data = tmpResult.useApplication(application_id).data;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== project.id) {
    const fn = function o() {
      return VibegrationsProjectStore.isProjectDeleting(project.id);
    };
    const items1 = [project.id];
    cResult[1] = project.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult3 = project(504);
  const stateFromStores = tmpResult3.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== project.updated_at) {
    let formatToPlainStringResult;
    if (null != project.updated_at) {
      const intl = tmp(1127).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj2 = { time: getRelativeTimestamp(date.getTime()) };
      const oMDaqr = _modDef3718.oMDaqr;
      const _Date = Date;
      const self = this;
      const self2 = this;
      getRelativeTimestamp = project(7059).getRelativeTimestamp;
      project(7059);
      date = new Date(project.updated_at);
      formatToPlainStringResult = formatToPlainString(oMDaqr, obj2);
    }
    cResult[4] = project.updated_at;
    cResult[5] = formatToPlainStringResult;
    tmp9 = formatToPlainStringResult;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    let tmp14;
    if (cResult[7] === tmp9) {
      tmp14 = cResult[8];
    }
    let icon;
    if (data != null) {
      icon = data.icon;
    }
    if (cResult[9] === application_id) {
      let tmp18;
      let tmp23Result;
      if (cResult[10] === icon) {
        tmp18 = cResult[11];
      }
      if (cResult[12] === stateFromStores) {
        let tmp22;
        if (cResult[13] === onMore) {
          tmp22 = cResult[14];
        }
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === onPress) {
            if (cResult[17] === project.name) {
              if (cResult[18] === tmp14) {
                if (cResult[19] === tmp18) {
                  let tmp28;
                  if (cResult[20] === tmp22) {
                    tmp28 = cResult[21];
                  }
                  return tmp28;
                }
              }
            }
          }
        }
        const obj3 = { label: project.name, subLabel: tmp14, disabled: stateFromStores, icon: tmp18, trailing: tmp22, onPress };
        const tmp30 = closure_29(project(5916).TableRow, obj3);
        cResult[15] = stateFromStores;
        cResult[16] = onPress;
        cResult[17] = project.name;
        cResult[18] = tmp14;
        cResult[19] = tmp18;
        cResult[20] = tmp22;
        cResult[21] = tmp30;
        tmp28 = tmp30;
      }
      if (stateFromStores) {
        tmp23Result = tmp23(closure_6, {});
      } else {
        const obj4 = { IconComponent: project(7364).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl3.string(project(1127).t["UKOtz+"]) };
        const tmp25 = VibegrationsHeaderIconButtonDefault;
        intl3 = tmp(1127).intl;
        tmp23Result = tmp23(tmp25, obj4);
      }
      cResult[12] = stateFromStores;
      cResult[13] = onMore;
      cResult[14] = tmp23Result;
      tmp22 = tmp23Result;
    }
    const obj5 = { application: obj6 };
    obj6 = { id: application_id, icon };
    const tmp21 = closure_29(TableRowApplicationIconDefault, obj5);
    cResult[9] = application_id;
    cResult[10] = icon;
    cResult[11] = tmp21;
    tmp18 = tmp21;
  }
  let stringResult = tmp9;
  if (stateFromStores) {
    const intl2 = tmp(1127).intl;
    stringResult = intl2.string(_modDef3718.EwXXks);
  }
  cResult[6] = stateFromStores;
  cResult[7] = tmp9;
  cResult[8] = stringResult;
  tmp14 = stringResult;
}) : (function(project) {
  let date;
  let getRelativeTimestamp;
  let icon;
  let intl3;
  let obj5;
  let onMore;
  let onPress;
  let tmp12;
  let tmp9Result;
  project = project.project;
  let application_id = project.preview_application_id;
  ({ onPress, onMore } = project);
  if (application_id == null) {
    application_id = project.application_id;
  }
  const obj = project(6585);
  const data = obj.useApplication(application_id).data;
  const items = [VibegrationsProjectStore];
  const items1 = [project.id];
  const obj2 = project(504);
  const stateFromStores = obj2.useStateFromStores(items, () => VibegrationsProjectStore.isProjectDeleting(project.id), items1);
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp(1127).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { time: getRelativeTimestamp(date.getTime()) };
    const oMDaqr = _modDef3718.oMDaqr;
    const _Date = Date;
    const self = this;
    const self2 = this;
    getRelativeTimestamp = project(7059).getRelativeTimestamp;
    project(7059);
    date = new Date(project.updated_at);
    formatToPlainStringResult = formatToPlainString(oMDaqr, obj3);
  }
  const obj4 = { label: project.name, subLabel: formatToPlainStringResult, disabled: stateFromStores, icon: closure_29(tmp12, { application: obj5 }), trailing: tmp9Result, onPress };
  const TableRow = tmp(5916).TableRow;
  if (stateFromStores) {
    const intl2 = tmp(1127).intl;
    formatToPlainStringResult = intl2.string(_modDef3718.EwXXks);
  }
  obj5 = { id: application_id, icon };
  icon = undefined;
  tmp12 = TableRowApplicationIconDefault;
  if (data != null) {
    icon = data.icon;
  }
  if (stateFromStores) {
    tmp9Result = tmp9(closure_6, {});
  } else {
    const obj6 = { IconComponent: project(7364).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl3.string(project(1127).t["UKOtz+"]) };
    const tmp11Result = VibegrationsHeaderIconButtonDefault;
    intl3 = tmp(1127).intl;
    tmp9Result = tmp9(tmp11Result, obj6);
  }
  return closure_29(TableRow, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_1;
  let closure_4;
  let closure_5;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp21;
  let tmp29;
  let tmp30;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[20]);
  const cResult = obj.c(104);
  guildId = guildId.guildId;
  const bottom = require("useSafeAreaInsets")().bottom;
  importDefault = closure_32(0);
  const tmp4 = closure_32(0);
  let obj2 = guildId(navigation[31]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [VibegrationsProjectStore];
    const fn = function a() {
      return VibegrationsProjectStore.getOwnedProjects();
    };
    let items1 = [];
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
  const tmpResult = tmp(tmp2[22]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [VibegrationsProjectStore];
    cResult[3] = items2;
    tmp10 = items2;
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
    tmp13 = items3;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const tmpResult3 = tmp(tmp2[22]);
  const stateFromStoresArray1 = tmpResult3.useStateFromStoresArray(tmp10, tmp12, tmp13);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [VibegrationsProjectStore];
    class A {
      constructor() {
        return VibegrationsProjectStore.getProjectsFetchState();
      }
    }
    const items5 = [];
    cResult[7] = items4;
    cResult[8] = A;
    cResult[9] = items5;
    tmp17 = items5;
    tmp16 = A;
    tmp15 = items4;
  } else {
    tmp15 = cResult[7];
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  const tmpResult4 = tmp(tmp2[22]);
  const stateFromStores = tmpResult4.useStateFromStores(tmp15, tmp16, tmp17);
  if (cResult[10] === stateFromStoresArray) {
    if (cResult[16] !== stateFromStoresArray1) {
      const _Symbol = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
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
        cResult[18] = O;
        class A {
          constructor() {
            return VibegrationsProjectStore.getProjectsFetchState();
          }
        }
      } else {
        class O {
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
      class A {
        constructor() {
          return VibegrationsProjectStore.getProjectsFetchState();
        }
      }
      const sorted = obj7.sort(tmp26);
      cResult[16] = stateFromStoresArray1;
      cResult[17] = sorted;
    } else {
      class O {
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
      class B {
        constructor(projectId) {
          const obj = { projectId };
          return navigation.push(constants.CHAT, obj);
        }
      }
      cResult[19] = navigation;
      class A {
        constructor() {
          return VibegrationsProjectStore.getProjectsFetchState();
        }
      }
      cResult[20] = B;
    } else {
      class B {
        constructor(projectId) {
          const obj = { projectId };
          return navigation.push(constants.CHAT, obj);
        }
      }
    }
    class A {
      constructor() {
        return VibegrationsProjectStore.getProjectsFetchState();
      }
    }
    if (cResult[21] === guildId) {
      class B {
        constructor(projectId) {
          const obj = { projectId };
          return navigation.push(constants.CHAT, obj);
        }
      }
      _asyncToGenerator = tmp29;
      if (cResult[24] === guildId) {
        class B {
          constructor(projectId) {
            const obj = { projectId };
            return navigation.push(constants.CHAT, obj);
          }
        }
        react = tmp30;
        if (cResult[27] === guildId) {
          class B {
            constructor(projectId) {
              const obj = { projectId };
              return navigation.push(constants.CHAT, obj);
            }
          }
          let closure_6 = tmp31;
          if (cResult[30] === guildId) {
            class B {
              constructor(projectId) {
                const obj = { projectId };
                return navigation.push(constants.CHAT, obj);
              }
            }
          }
          class W {
            constructor(arg0) {
              closure_0 = guildId;
              obj = guildId(closure_2[36]);
              obj1 = {
                project: guildId,
                guildId: closure_0,
                openChat() {
                              return _slicedToArray(project.id);
                            },
                onRemix() {
                              return closure_6(project);
                            },
                onOpenSettings() {
                              let guild_id;
                              let obj2;
                              let tmp2;
                              let tmp3;
                              const tmp = ActionSheetActionCreators;
                              const showActionSheet = tmp.showActionSheet;
                              const obj = { key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
                              obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
                              guild_id = project.guild_id;
                              tmp2 = closure_29;
                              tmp3 = VibegrationsSettingsSheetDefault;
                              if (guild_id == null) {
                                guild_id = guildId;
                              }
                              return showActionSheet(obj);
                            }
              };
              result = obj.vibegrationsProjectActions(obj1);
              obj3 = guildId(closure_2[38]);
              obj5 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
              result1 = obj3.showSimpleActionSheet(obj5);
              return;
            }
          }
          cResult[30] = guildId;
          cResult[31] = tmp28;
          cResult[32] = tmp31;
          cResult[33] = W;
        }
        class U {
          constructor(project) {
            let obj2;
            const tmp = ActionSheetActionCreators;
            const showActionSheet = tmp.showActionSheet;
            const obj = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: closure_29(VibegrationsRemixSheetDefault, obj2) };
            obj2 = { project, currentGuildId: guildId, onRemixed: tmp29 };
            showActionSheet(obj);
          }
        }
        cResult[27] = guildId;
        cResult[28] = tmp29;
        cResult[29] = U;
      }
      class D {
        constructor() {
          let obj2;
          const tmp = ActionSheetActionCreators;
          const showActionSheet = tmp.showActionSheet;
          const obj = { key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY, content: closure_29(VibegrationsCreateSheetDefault, obj2) };
          obj2 = { guildId, onCreated: tmp29 };
          showActionSheet(obj);
        }
      }
      cResult[24] = guildId;
      cResult[25] = tmp29;
      cResult[26] = D;
      tmp30 = D;
    }
    B = tmp28;
    const fn3 = (arg0, arg1) => {
      if (arg1 === closure_0) {
        f144472(arg0);
      } else {
        const obj = guildId(navigation[18]);
        obj.transitionTo(callback1.CHANNEL(arg1, constants.VIBEGRATIONS, arg0));
      }
    };
    cResult[21] = guildId;
    cResult[22] = tmp28;
    cResult[23] = fn3;
    tmp29 = fn3;
  }
  if (cResult[13] !== guildId) {
    class B {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
    cResult[13] = guildId;
    class W {
      constructor(arg0) {
        closure_0 = guildId;
        obj = guildId(closure_2[36]);
        obj1 = {
          project: guildId,
          guildId: closure_0,
          openChat() {
                  return _slicedToArray(project.id);
                },
          onRemix() {
                  return closure_6(project);
                },
          onOpenSettings() {
                  let guild_id;
                  let obj2;
                  let tmp2;
                  let tmp3;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
                  obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
                  guild_id = project.guild_id;
                  tmp2 = closure_29;
                  tmp3 = VibegrationsSettingsSheetDefault;
                  if (guild_id == null) {
                    guild_id = guildId;
                  }
                  return showActionSheet(obj);
                }
        };
        result = obj.vibegrationsProjectActions(obj1);
        obj3 = guildId(closure_2[38]);
        obj5 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
        result1 = obj3.showSimpleActionSheet(obj5);
        return;
      }
    }
    cResult[14] = R;
    tmp21 = R;
  } else {
    class B {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
    cResult[15] = tmp23;
    class W {
      constructor(arg0) {
        closure_0 = guildId;
        obj = guildId(closure_2[36]);
        obj1 = {
          project: guildId,
          guildId: closure_0,
          openChat() {
                  return _slicedToArray(project.id);
                },
          onRemix() {
                  return closure_6(project);
                },
          onOpenSettings() {
                  let guild_id;
                  let obj2;
                  let tmp2;
                  let tmp3;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
                  obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
                  guild_id = project.guild_id;
                  tmp2 = closure_29;
                  tmp3 = VibegrationsSettingsSheetDefault;
                  if (guild_id == null) {
                    guild_id = guildId;
                  }
                  return showActionSheet(obj);
                }
        };
        result = obj.vibegrationsProjectActions(obj1);
        obj3 = guildId(closure_2[38]);
        obj5 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
        result1 = obj3.showSimpleActionSheet(obj5);
        return;
      }
    }
  } else {
    class B {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
  }
  const found = stateFromStoresArray.filter(tmp21);
  const sorted1 = found.sort(tmp22);
  cResult[10] = stateFromStoresArray;
  cResult[11] = guildId;
  cResult[12] = sorted1;
}) : ((guildId) => {
  let intl;
  let intl10;
  let intl11;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let obj14;
  let tmp25;
  guildId = guildId.guildId;
  importDefault = undefined;
  navigation = undefined;
  let callback;
  let tmp = importDefault;
  let tmp2 = navigation;
  const bottom = require("useSafeAreaInsets")().bottom;
  let tmp3 = closure_32(0);
  importDefault = tmp3;
  let obj = guildId(navigation[31]);
  navigation = obj.useNavigation();
  let obj2 = guildId(navigation[22]);
  let items = [VibegrationsProjectStore];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => VibegrationsProjectStore.getOwnedProjects(), []);
  let obj3 = guildId(navigation[22]);
  let items1 = [VibegrationsProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = obj3.useStateFromStoresArray(items1, () => VibegrationsProjectStore.getSharedProjects(guildId), items2);
  let obj4 = guildId(navigation[22]);
  const items3 = [VibegrationsProjectStore];
  const stateFromStores = obj4.useStateFromStores(items3, () => VibegrationsProjectStore.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = callback.useMemo(() => {
    const found = stateFromStoresArray.filter((item) => {
      const obj = guildId(navigation[32]);
      return obj.isVibegrationsProjectInGuild(item, closure_1_0);
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
  const memo1 = callback.useMemo(() => {
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
  callback = callback.useCallback((projectId) => {
    const obj = { projectId };
    return navigation.push(constants.CHAT, obj);
  }, items6);
  const items7 = [guildId, callback];
  const memo2 = callback.useMemo(() => {
    let closure_0 = guildId;
    closure_1 = callback;
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f144472(arg0);
      } else {
        const obj = guildId(navigation[18]);
        obj.transitionTo(callback1.CHANNEL(arg1, constants.VIBEGRATIONS, arg0));
      }
    };
  }, items7);
  const items8 = [guildId, memo2];
  const callback1 = callback.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY, content: closure_29(VibegrationsCreateSheetDefault, obj2) };
    obj2 = { guildId, onCreated: memo2 };
    showActionSheet(obj);
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = callback.useCallback((project) => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: closure_29(VibegrationsRemixSheetDefault, obj2) };
    obj2 = { project, currentGuildId: guildId, onRemixed: memo2 };
    showActionSheet(obj);
  }, items9);
  const items10 = [guildId, callback, callback2];
  let closure_9 = callback.useCallback((project) => {
    guildId = project;
    let obj = guildId(navigation[36]);
    let obj2 = {
      project,
      guildId,
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
        const obj = { key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
        obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
        guild_id = project.guild_id;
        tmp2 = closure_29;
        tmp3 = VibegrationsSettingsSheetDefault;
        if (guild_id == null) {
          guild_id = guildId;
        }
        return showActionSheet(obj);
      }
    };
    const result = obj.vibegrationsProjectActions(obj2);
    const obj3 = guildId(navigation[38]);
    const obj4 = { key: "VibegrationsProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
    const result1 = obj3.showSimpleActionSheet(obj4);
  }, items10);
  const items11 = [navigation, callback1];
  const effect = callback.useEffect(() => {
    let onPress;
    let obj = {
      headerRight() {
        let intl;
        const obj = { IconComponent: guildId(navigation[39]).PlusLargeIcon, onPress, accessibilityLabel: intl.string(guildId(navigation[23]).t.CumH4u) };
        const tmp = closure_1(navigation[27]);
        intl = guildId(navigation[23]).intl;
        return closure_2_29(tmp, obj);
      }
    };
    navigation.setOptions(obj);
  }, items11);
  const obj5 = guildId(navigation[40]);
  let result = obj5.recentVibegrationsChangelog("mobile");
  let tmp15 = memo.length > 0;
  const callback3 = callback.useCallback(() => {
    const obj = guildId(navigation[33]);
    const obj2 = { content: closure_1_29(closure_1(navigation[41]), {}), key: guildId(navigation[41]).VIBEGRATIONS_CHANGELOG_SHEET_KEY };
    obj.showActionSheet(obj2);
  }, []);
  if (!tmp15) {
    tmp15 = memo1.length > 0;
  }
  let tmp17Result = null;
  if (!tmp15) {
    const obj6 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      let tmp17Result2;
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj7 = { style: tmp3.listError, children: items12 };
          const obj8 = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp(tmp2[24])["IN/HRP"]) };
          let Text = tmp4(tmp2[42]).Text;
          intl = tmp4(tmp2[23]).intl;
          items12 = [closure_29(Text, obj8), ];
          const obj9 = {
            variant: "secondary",
            size: "sm",
            text: intl2.string(tmp(tmp2[24])["42EdIV"]),
            onPress() {
                      const obj = VibegrationsActionCreators;
                      return obj.listProjects(guildId);
                    }
          };
          const Button = tmp4(tmp2[43]).Button;
          intl2 = tmp4(tmp2[23]).intl;
          items12[1] = closure_29(Button, obj9);
          tmp17Result2 = closure_30(tmp18, obj7);
        } else {
          const obj10 = { style: tmp3.listError, children: items13 };
          const obj11 = { variant: "text-md/normal", color: "text-muted", children: intl10.string(tmp(tmp2[24])["vqy+in"]) };
          const Text8 = tmp4(tmp2[42]).Text;
          intl10 = tmp4(tmp2[23]).intl;
          items13 = [closure_29(Text8, obj11), ];
          const obj12 = { variant: "primary", size: "sm", text: intl11.string(guildId(tmp2[23]).t.CumH4u), onPress: callback1 };
          const Button3 = tmp4(tmp2[43]).Button;
          intl11 = tmp4(tmp2[23]).intl;
          items13[1] = closure_29(Button3, obj12);
          tmp17Result2 = closure_30(tmp18, obj10);
        }
      }
      obj6.children = tmp17Result2;
      tmp17Result = tmp17(tmp18, obj6);
    }
    tmp17Result2 = tmp17(memo2, {});
  }
  const obj13 = { style: tmp3.content, children: closure_30(tmp25, obj14) };
  obj14 = { contentContainerStyle: items14, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items15 };
  items14 = [tmp3.listContent, { paddingBottom: tmp(tmp2[17]).space.PX_8 + bottom }];
  items15 = [, , , , ];
  ({ paddingBottom: tmp(tmp2[17]).space.PX_8 + bottom });
  items15[0] = closure_29(tmp(tmp2[45]), {});
  let tmp24Result = null;
  tmp25 = callback2;
  if (result.length > 0) {
    const obj16 = { style: tmp3.changelog, children: items17 };
    const obj17 = { style: tmp3.sectionHeading, children: items16 };
    const obj18 = { variant: "heading-md/bold", color: "text-default", children: intl3.string(tmp(tmp2[24]).x07mpp) };
    const Text2 = tmp4(tmp2[42]).Text;
    intl3 = tmp4(tmp2[23]).intl;
    items16 = [closure_29(Text2, obj18), ];
    const obj19 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(tmp(tmp2[24]).h5CwHI) };
    const Text3 = tmp4(tmp2[42]).Text;
    intl4 = tmp4(tmp2[23]).intl;
    items16[1] = closure_29(Text3, obj19);
    items17 = [closure_30(closure_9, obj17), , ];
    const obj20 = {
      style: tmp3.changelogEntries,
      children: result.map((children) => {
          let items1;
          const obj = { style: closure_1.changelogItem, children: items1 };
          const Text = Text_Text.Text;
          const items = [, ];
          const obj2 = DateUtils;
          items[0] = obj2.dateFormat(_modDef4424(children.date, "YYYY-MM-DD"), "LL");
          let combined = null;
          const obj3 = VibegrationsChangelog;
          const tmp2 = React4;
          if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
            const intl = tmp3(1127).intl;
            const _HermesInternal = HermesInternal;
            combined = " \u00B7 " + intl.string(_modDef3718["CLX+p/"]);
          }
          items[1] = combined;
          items1 = [__initData(Text, { variant: "text-xs/bold", color: "text-muted", children: items }), ];
          const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: children.summary };
          items1[1] = closure_29(Text_Text.Text, obj4);
          return __initData(tmp2, obj, "" + children.date + "-" + children.summary);
        })
    };
    items17[1] = closure_29(closure_9, obj20);
    let tmp22Result = null;
    const tmp4Result = guildId(tmp2[40]);
    if (tmp4Result.hasMoreVibegrationsChangelog("mobile")) {
      const obj21 = { variant: "secondary", size: "sm", text: intl5.string(tmp(tmp2[24]).YWxThz), onPress: callback3 };
      const Button2 = tmp4(tmp2[43]).Button;
      intl5 = tmp4(tmp2[23]).intl;
      tmp22Result = tmp22(Button2, obj21);
    }
    items17[2] = tmp22Result;
    tmp24Result = tmp24(tmp23, obj16);
  }
  items15[1] = tmp24Result;
  let tmp24Result3 = null;
  if (memo.length > 0) {
    const obj22 = { style: tmp3.section, children: items19 };
    const obj23 = { style: tmp3.sectionHeading, children: items18 };
    const obj24 = { variant: "heading-md/bold", color: "text-default", children: intl6.string(tmp(tmp2[24]).Bo5fE3) };
    const Text4 = tmp4(tmp2[42]).Text;
    intl6 = tmp4(tmp2[23]).intl;
    items18 = [closure_29(Text4, obj24), ];
    const obj25 = { variant: "text-sm/normal", color: "text-muted", children: intl7.string(tmp(tmp2[24]).YnAFtT) };
    const Text5 = tmp4(tmp2[42]).Text;
    intl7 = tmp4(tmp2[23]).intl;
    items18[1] = closure_29(Text5, obj25);
    items19 = [closure_30(closure_9, obj23), ];
    const obj26 = {
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
          return closure_1_29(closure_1_36, obj, project.id);
        })
    };
    const TableRowGroup = tmp4(tmp2[48]).TableRowGroup;
    items19[1] = closure_29(TableRowGroup, obj26);
    tmp24Result3 = tmp24(tmp23, obj22);
  }
  items15[2] = tmp24Result3;
  let tmp24Result4 = null;
  if (memo1.length > 0) {
    const obj27 = { style: tmp3.section, children: items21 };
    const obj28 = { style: tmp3.sectionHeading, children: items20 };
    const obj29 = { variant: "heading-md/bold", color: "text-default", children: intl8.string(tmp(tmp2[24]).jrCnUc) };
    const Text6 = tmp4(tmp2[42]).Text;
    intl8 = tmp4(tmp2[23]).intl;
    items20 = [closure_29(Text6, obj29), ];
    const obj30 = { variant: "text-sm/normal", color: "text-muted", children: intl9.string(tmp(tmp2[24])["1KEhDu"]) };
    const Text7 = tmp4(tmp2[42]).Text;
    intl9 = tmp4(tmp2[23]).intl;
    items20[1] = closure_29(Text7, obj30);
    items21 = [closure_30(closure_9, obj28), ];
    const obj31 = {
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
          return closure_1_29(closure_1_36, obj, project.id);
        })
    };
    const TableRowGroup2 = tmp4(tmp2[48]).TableRowGroup;
    items21[1] = closure_29(TableRowGroup2, obj31);
    tmp24Result4 = tmp24(tmp23, obj27);
  }
  items15[3] = tmp24Result4;
  items15[4] = tmp17Result;
  return closure_29(closure_9, obj13);
});
const __initData = { code: "function VibegrationsStandaloneScreenTsx1(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:Math.max(keyboardHeight.get(),safeAreaBottom)};}" };
let closure_39 = { code: "function VibegrationsStandaloneScreenTsx2(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:Math.max(keyboardHeight.get(),safeAreaBottom)};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let modes;
  let onRemixed;
  let onRestore;
  let previewAppId;
  let projectGuildId;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[20]);
  const cResult = obj.c(240);
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let obj2 = guildId(navigation[31]);
  navigation = obj2.useNavigation();
  const bottom = projectId(navigation[30])().bottom;
  let tmp5 = ref(bottom);
  let closure_4 = tmp5;
  let tmp6 = projectId(navigation[49])();
  let closure_5 = tmp6;
  let obj3 = guildId(navigation[50]);
  const fn = function c() {
    const obj = { paddingBottom: Math.max(closure_5.get(), bottom) };
    return obj;
  };
  fn.__closure = { keyboardHeight: tmp6, safeAreaBottom: bottom };
  fn.__workletHash = 2974418984539;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = VibegrationsProjectStore;
    let items = [VibegrationsProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    class I {
      constructor() {
        let project = VibegrationsProjectStore.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = I;
    cResult[3] = items1;
    tmp11 = items1;
    tmp10 = I;
  } else {
    class I {
      constructor() {
        let project = VibegrationsProjectStore.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    tmp11 = cResult[3];
  }
  const tmpResult = tmp(tmp2[22]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        let project = VibegrationsProjectStore.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items2 = [VibegrationsProjectStore];
    cResult[4] = items2;
    tmp13 = items2;
  } else {
    class I {
      constructor() {
        let project = VibegrationsProjectStore.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
  }
  if (cResult[5] !== projectId) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
    const items3 = [projectId];
    cResult[5] = projectId;
    cResult[6] = X;
    cResult[7] = items3;
    tmp15 = items3;
    tmp14 = X;
  } else {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult5 = tmp(tmp2[22]);
  const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp13, tmp14, tmp15);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
    const items4 = [VibegrationsProjectStore];
    cResult[8] = items4;
    tmp17 = items4;
  } else {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
  }
  if (cResult[9] !== guildId) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
    const items5 = [guildId];
    cResult[9] = guildId;
    cResult[10] = tmp20;
    cResult[11] = items5;
    tmp19 = items5;
    tmp18 = tmp20;
  } else {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
    tmp19 = cResult[11];
  }
  const tmpResult6 = tmp(tmp2[22]);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp17, tmp18, tmp19);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
    const items6 = [VibegrationsProjectStore];
    cResult[12] = items6;
    tmp22 = items6;
  } else {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
  }
  if (cResult[13] !== projectId) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
    const items7 = [projectId];
    cResult[13] = projectId;
    cResult[14] = tmp25;
    cResult[15] = items7;
    tmp24 = items7;
    tmp23 = tmp25;
  } else {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
    tmp24 = cResult[15];
  }
  const tmpResult7 = tmp(tmp2[22]);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp22, tmp23, tmp24);
  if (stateFromStores2 != null) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
  }
  if (stateFromStores != null) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
  }
  if (undefined == null) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
  }
  const useApplication = tmp(tmp2[21]).useApplication;
  tmp(tmp2[21]);
  if (previewAppId == null) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
  }
  let application = useApplication(previewAppId);
  const data = application.data;
  if (stateFromStores2 != null) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
  }
  if (stateFromStores2 != null) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
  }
  if (cResult[16] === undefined) {
    class X {
      constructor() {
        let guild_id;
        let name;
        let prop;
        let tmp5;
        const project = VibegrationsProjectStore.getProject(projectId);
        const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = null;
        }
        guild_id = undefined;
        if (project != null) {
          guild_id = project.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        prop = undefined;
        if (project != null) {
          prop = project.preview_application_id;
        }
        if (prop == null) {
          prop = null;
        }
        tmp5 = null != project && canPublishProject(project);
        return obj;
      }
    }
  }
  let obj4 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: tmp30, installScope: tmp27, ownerAuthorizationRevoked: tmp31, mainCardOnly: true };
  cResult[16] = undefined;
  cResult[17] = previewAppId;
  cResult[18] = true === undefined;
  cResult[19] = true === undefined;
  cResult[20] = obj4;
}) : ((guildId) => {
  let _undefined;
  let _undefined2;
  let activeMode;
  let bfQ4Ki;
  let closure_4;
  let closure_5;
  let has_activity;
  let intl2;
  let intl3;
  let intl4;
  let isResolving;
  let items34;
  let items35;
  let items37;
  let items38;
  let obj14;
  let obj17;
  let obj19;
  let obj22;
  let previewAppId;
  let projectGuildId;
  let prop;
  let prop1;
  let prop2;
  let setMode;
  let str5;
  let str6;
  let tmp109;
  let tmp33;
  let tmp34;
  let tmp37;
  let tmp38;
  let tmp4Result6;
  let tmp86;
  let tmp92Result;
  let tmp92Result1;
  let widgetApplicationId;
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  navigation = undefined;
  previewAppId = undefined;
  let data;
  let availability;
  setMode = undefined;
  let c15;
  let result1;
  let onReviewPermissions;
  let c18;
  let closure_19;
  let active;
  let vibegrationsControlActive;
  let guild_id;
  let closure_23;
  let c24;
  let callback1;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let first1;
  let closure_30;
  let callback3;
  projectGuildId = undefined;
  let callback4;
  let memo2;
  let callback5;
  let callback6;
  let ref;
  let callback7;
  let callback8;
  let setting;
  let callback9;
  let callback10;
  let closure_43;
  let callback11;
  let callback12;
  let stateFromStores3;
  let preview;
  let memo3;
  let tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[31]);
  navigation = obj.useNavigation();
  const tmp4 = projectId;
  const bottom = projectId(navigation[30])().bottom;
  let tmp5 = projectGuildId(bottom);
  _asyncToGenerator = tmp5;
  let tmp6 = projectId(navigation[49])();
  react = tmp6;
  let obj2 = guildId(navigation[50]);
  let fn = function h() {
    const obj = { paddingBottom: Math.max(closure_5.get(), bottom) };
    return obj;
  };
  fn.__closure = { keyboardHeight: tmp6, safeAreaBottom: bottom };
  fn.__workletHash = 177035718488;
  fn.__initData = callback8;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = guildId(navigation[22]);
  let items = [guild_id];
  const items1 = [projectId];
  let tmp8 = guild_id;
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let project = VibegrationsProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  let obj4 = guildId(navigation[22]);
  const items2 = [guild_id];
  const items3 = [projectId];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
    let name;
    let prop;
    let tmp5;
    const project = VibegrationsProjectStore.getProject(projectId);
    const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop, canPublish: tmp5 };
    name = undefined;
    if (project != null) {
      name = project.name;
    }
    if (name == null) {
      name = null;
    }
    guild_id = undefined;
    if (project != null) {
      guild_id = project.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    prop = undefined;
    if (project != null) {
      prop = project.preview_application_id;
    }
    if (prop == null) {
      prop = null;
    }
    tmp5 = null != project && canPublishProject(project);
    return obj;
  }, items3);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  const canPublish = stateFromStoresObject.canPublish;
  let obj5 = guildId(navigation[22]);
  const items4 = [guild_id];
  const items5 = [guildId];
  const stateFromStores1 = obj5.useStateFromStores(items4, () => {
    const guildProjectsFetchState = VibegrationsProjectStore.getGuildProjectsFetchState(guildId);
    return "unattempted" === guildProjectsFetchState || "loading" === guildProjectsFetchState;
  }, items5);
  let obj6 = guildId(navigation[22]);
  const items6 = [guild_id];
  const items7 = [projectId];
  const stateFromStores2 = obj6.useStateFromStores(items6, () => {
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
  const useApplication = tmp(tmp2[21]).useApplication;
  tmp(tmp2[21]);
  let application = useApplication(previewAppId);
  data = application.data;
  const isLoading = application.isLoading;
  const obj7 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === has_activity, installScope: install_scope, ownerAuthorizationRevoked: true === prop, mainCardOnly: true };
  has_activity = undefined;
  const useVibegrationsPreviewMode = tmp(tmp2[51]).useVibegrationsPreviewMode;
  tmp(tmp2[51]);
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  prop = undefined;
  if (stateFromStores2 != null) {
    prop = stateFromStores2.owner_authorization_revoked;
  }
  let tmp21 = true === preview_ready;
  const vibegrationsPreviewMode = useVibegrationsPreviewMode(obj7);
  availability = vibegrationsPreviewMode.availability;
  ({ activeMode, setMode } = vibegrationsPreviewMode);
  ({ widgetApplicationId, isResolving } = vibegrationsPreviewMode);
  const obj8 = { installScope: install_scope, previewReady: tmp21, integrationInstalled: prop1, botPermissionsChanged: true === prop2 };
  prop1 = undefined;
  const requiresPermissionReview = tmp(tmp2[52]).requiresPermissionReview;
  tmp(tmp2[52]);
  if (stateFromStores2 != null) {
    prop1 = stateFromStores2.integration_installed;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  prop2 = undefined;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  let result = requiresPermissionReview(obj8);
  c15 = result;
  let obj9 = react;
  const items8 = [projectId];
  const effect = react.useEffect(() => {
    const obj = VibegrationsActionCreators;
    const project = obj.getProject(projectId);
    project.catch(() => {

    });
  }, items8);
  const tmp28 = null != previewAppId && null != tmp4(tmp2[53])(previewAppId);
  const tmpResult9 = tmp(tmp2[54]);
  result1 = tmpResult9.vibegrationsInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items9 = [result1, previewAppId, data, stateFromStores, projectId];
  onReviewPermissions = obj9.useCallback(_asyncToGenerator(async (arg0, value) => {
    let application;
    let application3;
    let closure_1;
    let closure_2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            navigation = tmp;
            const tmp6 = null != stateFromStores && null != previewAppId;
            if (tmp6) {
              if (null == data) {
                const obj3 = application(navigation[21]);
                application = obj3.fetchApplication(previewAppId);
                c4 = 1;
                c5 = 1;
                const obj5 = {
                  value: application.catch(() => {

                              }),
                  done: false
                };
                return obj5;
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
        const obj6 = {
          applicationId: closure_131_9,
          application,
          guildId: closure_131_16,
          onClose() {
                let obj = c0(navigation[54]);
                const result = obj.repairVibegrationsGuildHints(closure_1_6, closure_1_16);
                const cleanupPromise = result.finally(() => {
                  const obj = application(closure_2_2[44]);
                  return obj.getProject(closure_1_1);
                });
                cleanupPromise.catch(() => {

                });
              }
        };
        const tmp11 = application3(navigation[55]);
        application3 = closure_131_12;
        const openVibegrationsAppInstallModal = tmp11.openVibegrationsAppInstallModal;
        if (closure_131_12 == null) {
          application3 = application2.getApplication(closure_131_9);
        }
        application = application3;
        if (application3 == null) {
          application = null;
        }
        let result = openVibegrationsAppInstallModal(obj6);
      } catch (tmp27) {
        c5 = 3;
        throw tmp27;
      }
    }
  }), items9);
  [tmp33, tmp34] = bottom(obj9.useState(true), 2);
  c18 = tmp34;
  let tmp35 = null;
  const useState = obj9.useState;
  const tmp32 = bottom(obj9.useState(true), 2);
  if (null != stateFromStores2) {
    tmp35 = tmp21;
  }
  [tmp37, tmp38] = bottom(useState(tmp35), 2);
  bottom(useState(tmp35), 2);
  const tmp31Result3 = bottom(obj9.useState(projectId), 2);
  if (tmp31Result3[0] !== projectId) {
    tmp31Result3[1](projectId);
    tmp34(true);
    tmp38(null);
  }
  let tmp43 = tmp21 && null != previewAppId && !isResolving;
  if (tmp43) {
    tmp43 = availability.modes.length > 0 || result;
  }
  let paneHidden = tmp43 && !tmp33;
  let hasItem = tmp43 && tmp28 && !result;
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp46 = hasItem && paneHidden;
  if (tmp46) {
    let str2 = "frame";
    tmp46 = "frame" === activeMode;
  }
  closure_19 = tmp46;
  active = result1(projectId).active;
  const tmpResult10 = tmp(tmp2[56]);
  vibegrationsControlActive = tmpResult10.useVibegrationsControlActive(projectId);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let application_id;
  const tmp4Result = tmp4(tmp2[57]);
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const tmp4ResultResult = tmp4Result(guild_id, application_id);
  closure_23 = tmp4ResultResult;
  const items10 = [tmp4ResultResult, guild_id];
  const memo = obj9.useMemo(() => {
    let fn = null;
    if (null != closure_23) {
      fn = () => {
        const obj = guildId(navigation[18]);
        return obj.transitionTo(callback1.CHANNEL(guild_id, closure_1_23));
      };
    }
    return fn;
  }, items10);
  let intl = tmp(tmp2[23]).intl;
  const string = intl.string;
  const tmp4Result4 = tmp4(tmp2[24]);
  if (vibegrationsControlActive) {
    bfQ4Ki = tmp4Result4.bfQ4Ki;
  } else {
    bfQ4Ki = active ? tmp4Result4.rfNEHn : tmp4Result4.lXcEa2;
  }
  const stringResult = string(bfQ4Ki);
  c24 = stringResult;
  const items11 = [active, projectId];
  callback1 = obj9.useCallback(() => {
    const tmp = active;
    if (tmp) {
      _undefined(projectId);
    } else {
      authStore2(projectId);
    }
  }, items11);
  const items12 = [availability.modes];
  const items13 = [availability.modes, setMode];
  const memo1 = obj9.useMemo(() => {
    let intl;
    let modes;
    let obj = { id: "chat", label: intl.string(_modDef3718.kWtsyP), page: null };
    intl = intl12.intl;
    const items = [
      obj,
      ...modes.map((id) => {
        let obj2;
        const obj = { id, label: obj2.getPreviewModeLabel(id), page: null };
        obj2 = guildId(navigation[58]);
        return obj;
      })
    ];
    modes = availability.modes;
    return items;
  }, items12);
  const first = availability.modes[0];
  let tmp59 = null != stateFromStores2;
  const callback2 = obj9.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined2(null == availability.modes[arg0 - 1]);
    if (null != availability.modes[arg0 - 1]) {
      setMode(availability.modes[arg0 - 1]);
    }
  }, items13);
  if (tmp59) {
    tmp59 = tmp21 !== tmp37;
  }
  if (tmp59) {
    const tmp60 = false === tmp37 && tmp21 && null != first && !result;
    if (tmp60) {
      setMode(first);
      tmp34(false);
    }
    tmp38(tmp21);
  }
  const width = tmp4(tmp2[59])().width;
  const obj10 = { items: memo1, pageWidth: width - 2 * callback4, onSetActiveIndex: callback2 };
  const tmpResult11 = tmp(tmp2[60]);
  const segmentedControlState = tmpResult11.useSegmentedControlState(obj10);
  num2 = 0;
  if (!tmp33) {
    num2 = 0;
    if (null != activeMode) {
      const modes1 = availability.modes;
      num2 = 1 + modes1.indexOf(activeMode);
    }
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items14 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj9.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items14);
  const items15 = [previewAppId];
  const effect2 = obj9.useEffect(() => null != previewAppId ? (() => {
    const obj = guildId(navigation[61]);
    return obj.leaveVibegrationsPreviewFrame(previewAppId);
  }) : undefined, items15);
  const tmp31Result4 = bottom(obj9.useState(false), 2);
  first1 = tmp31Result4[0];
  closure_30 = tmp31Result4[1];
  const items16 = [guildId, onReviewPermissions, result, projectId, first1];
  callback3 = obj9.useCallback(() => {
    let obj5;
    const f151638 = function(ok) {
      if (true !== ok.ok) {
        const _Error = Error;
        const intl = guildId(navigation[23]).intl;
        const self = this;
        const self2 = this;
        const error = new Error(intl.string(projectId(navigation[24]).fNP6Cd));
        throw error;
      } else {
        const obj = guildId(navigation[44]);
        const result = obj.refreshPublishedProject(closure_1_1, { isPreview: false });
        result.catch(() => {

        });
      }
    };
    const f151639 = () => {

    };
    const f151640 = () => closure_1_30(false);
    let tmp = first1;
    if (!tmp) {
      let obj = VibegrationsProjectStore;
      const tmp2 = projectId;
      const project = VibegrationsProjectStore.getProject(projectId);
      if (null != project) {
        const integrationStatus = obj.getIntegrationStatus(tmp2);
        let preview_ready;
        if (integrationStatus != null) {
          preview_ready = integrationStatus.preview_ready;
        }
        if (true === preview_ready) {
          const tmp11 = c15;
          if (tmp11) {
            const promise9 = callback();
            promise9.catch(() => {

            });
          } else {
            closure_30(true);
            if ("user" !== project.install_scope) {
              const promise5 = closure_19(tmp2);
              promise5.catch(() => {

              });
              const promise6 = active(tmp2);
              const nextPromise = promise6.then(f151638);
              const catchPromise2 = nextPromise.catch(f151639);
              catchPromise2.finally(f151640);
              const showActionSheet = ActionSheetActionCreators.showActionSheet;
              guild_id = project.guild_id;
              ActionSheetActionCreators;
              const tmp21 = require;
              const tmp24 = closure_29;
              const tmp26 = VibegrationsPublishNotesSheetDefault;
              if (guild_id == null) {
                guild_id = guildId;
              }
              const obj2 = { content: tmp24(tmp26, obj5), key: tmp21(16305).VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY };
              obj5 = { guildId: guild_id, applicationId: null, projectName: null, publish: nextPromise, initialDraft: promise5 };
              ({ application_id: obj3.applicationId, name: obj3.projectName } = project);
              showActionSheet(obj2);
            } else {
              const promise = active(tmp2);
              const nextPromise1 = promise.then(f151638);
              const catchPromise3 = nextPromise1.catch(f151639);
              catchPromise3.finally(f151640);
              const nextPromise2 = nextPromise1.then(() => {
                let intl;
                const obj = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: intl.string(projectId(navigation[24]).wA0o0L) };
                const open = projectId(navigation[64]).open;
                projectId(navigation[64]);
                intl = guildId(navigation[23]).intl;
                open(obj);
              });
              nextPromise2.catch((error) => {
                let message;
                const open = projectId(navigation[64]).open;
                projectId(navigation[64]);
                const tmp = projectId;
                if (error instanceof Error) {
                  message = error.message;
                } else {
                  const intl = guildId(tmp2[23]).intl;
                  message = intl.string(tmp(tmp2[24]).fNP6Cd);
                }
                open({ key: "VIBEGRATIONS_PUBLISH_FAILED", content: message });
              });
            }
          }
        } else {
          const tmp8 = VibegrationsPublishBlockedSheetDefault;
          tmp8(vibegrationsPublishBlockedReason.VibegrationsPublishBlockedReason.NO_PREVIEW);
        }
      }
    }
  }, items16);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items17 = [projectId, projectGuildId];
  callback4 = obj9.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: first1(VibegrationsSettingsSheetDefault, obj2), key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items17);
  const items18 = [guildId, navigation];
  memo2 = obj9.useMemo(() => {
    const f144472 = (projectId) => {
      const obj = { projectId };
      return closure_1_2.push(constants2.CHAT, obj);
    };
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f144472(arg0);
      } else {
        const obj = guildId(navigation[18]);
        obj.transitionTo(callback1.CHANNEL(arg1, constants.VIBEGRATIONS, arg0));
      }
    };
  }, items18);
  const items19 = [guildId, memo2, stateFromStores];
  callback5 = obj9.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      const obj = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: first1(VibegrationsRemixSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo2 };
      showActionSheet(obj);
    }
  }, items19);
  const items20 = [projectId];
  callback6 = obj9.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsConnectToolSheet.VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY, content: first1(VibegrationsConnectToolSheetDefault, obj2) };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items20);
  ref = obj9.useRef(false);
  const items21 = [projectId];
  callback7 = obj9.useCallback((sha) => {
    let intl;
    if (!ref.current) {
      tmp.current = true;
      let obj = { key: "VIBEGRATIONS_VERSION_RESTORING", content: intl.string(_modDef3718.pGFXZ0), IconComponent: UndoIcon.UndoIcon };
      let open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl12.intl;
      open(obj);
      const promise = vibegrationsControlActive(projectId, sha.sha);
      const nextPromise = promise.then(() => {
        let intl;
        const obj = { key: "VIBEGRATIONS_VERSION_RESTORED", content: intl.string(projectId(navigation[24]).u8g2Od), IconComponent: guildId(navigation[67]).UndoIcon };
        const open = projectId(navigation[64]).open;
        projectId(navigation[64]);
        intl = guildId(navigation[23]).intl;
        open(obj);
      }, () => {
        const presentError = guildId(navigation[68]).presentError;
        guildId(navigation[68]);
        const intl = guildId(navigation[23]).intl;
        presentError(intl.string(projectId(navigation[24]).q6iZ84));
      });
      nextPromise.finally(() => {
        ref.current = false;
      });
    }
  }, items21);
  const items22 = [callback7, projectId];
  callback8 = obj9.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsVersionHistorySheet.VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY, content: first1(VibegrationsVersionHistorySheetDefault, obj2) };
    obj2 = { projectId, onRestore: callback7 };
    showActionSheet(obj);
  }, items22);
  const DeveloperMode = tmp(tmp2[70]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items23 = [navigation, projectId];
  callback9 = obj9.useCallback(() => {
    const obj = { projectId };
    return navigation.push(memo2.DEBUG, obj);
  }, items23);
  let install_scope1;
  const useCallback = obj9.useCallback;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  const items24 = [install_scope1, projectId];
  callback10 = useCallback(() => {
    let install_scope;
    let obj2;
    let tmp2;
    let tmp3;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsRestorePointsSheet.VIBEGRATIONS_RESTORE_POINTS_SHEET_KEY, content: tmp2(tmp3, obj2) };
    obj2 = { projectId, installScope: install_scope };
    install_scope = undefined;
    tmp2 = closure_29;
    tmp3 = VibegrationsRestorePointsSheetDefault;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    showActionSheet(obj);
  }, items24);
  const tmp80 = activeIndex(tmp4(tmp2[72])(previewAppId, setActiveIndex));
  closure_43 = tmp80;
  const items25 = [previewAppId];
  callback11 = obj9.useCallback(() => {
    if (null != previewAppId) {
      restartVibegrationsAppFramesDefault(tmp);
    }
  }, items25);
  const items26 = [navigation, projectId];
  callback12 = obj9.useCallback(() => {
    authStore4(projectId);
    navigation.goBack();
  }, items26);
  const items27 = [tmp8];
  const items28 = [projectId];
  const tmpResult12 = tmp(tmp2[22]);
  stateFromStores3 = tmpResult12.useStateFromStores(items27, () => VibegrationsProjectStore.isProjectDeleting(projectId), items28);
  const items29 = [stateFromStores3, callback12];
  const effect3 = obj9.useEffect(() => {
    const tmp = stateFromStores3;
    if (tmp) {
      callback12();
    }
  }, items29);
  const modes2 = availability.modes;
  const obj11 = { projectId, refreshApplicationId: tmp86 };
  tmp86 = null;
  const tmp4Result5 = tmp4(tmp2[74]);
  if (modes2.includes("widget")) {
    tmp86 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp86 = widgetApplicationId;
    }
  }
  const tmp4Result2Result = tmp4Result5(obj11);
  preview = tmp4Result2Result;
  const items30 = [canPublish, setting, guildId, callback12, callback6, callback9, callback5, callback4, callback10, callback8, callback3, callback11, tmp80, tmp4Result2Result, stateFromStores];
  memo3 = obj9.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let str2;
    let tmp21;
    let tmp29;
    const items = [];
    const tmp = canPublish;
    if (tmp) {
      const push = items.push;
      const obj = { label: intl.string(_modDef3718["5gU57O"]), IconComponent: UploadIcon.UploadIcon, action: callback3 };
      intl = intl12.intl;
      push(obj);
    }
    const push2 = items.push;
    const obj2 = { label: intl2.string(_modDef3718.cWmjzs), IconComponent: SettingsIcon.SettingsIcon, action: callback4 };
    intl2 = intl12.intl;
    push2(obj2);
    const tmp11 = setting;
    if (tmp11) {
      const push3 = items.push;
      const obj3 = { label: intl3.string(_modDef3718.KampIf), IconComponent: BugIcon.BugIcon, action: callback9 };
      intl3 = intl12.intl;
      push3(obj3);
    }
    if (null != stateFromStores) {
      const obj5 = { project: tmp20, guildId, onRemix: callback5, onConnectTool: callback6, onVersionHistory: callback8, onRestorePoints: callback10, onRefresh: tmp21, onClose: callback12, preview };
      tmp21 = undefined;
      const vibegrationsProjectActions = vibegrationsProjectActions2.vibegrationsProjectActions;
      vibegrationsProjectActions2;
      if (closure_43) {
        tmp21 = callback11;
      }
      const result = vibegrationsProjectActions(obj5);
      const iter = result[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj9 = { label: null, IconComponent: null, variant: str2, action: tmp29.action };
        ({ label: obj4.label, IconComponent: obj4.IconComponent } = nextResult);
        str2 = undefined;
        tmp29 = nextResult;
        let push4 = items.push;
        if (true === nextResult.destructive) {
          str2 = "destructive";
        }
        let push4Result = push4(obj9);
        continue;
      }
    }
    return items;
  }, items30);
  const items31 = [vibegrationsControlActive, active, stringResult, tmp46, callback1, navigation, memo3, projectExists, projectName, stateFromStores1, tmp5];
  const effect4 = obj9.useEffect(() => {
    let accessibilityLabel;
    let disabled;
    let headerActions;
    let onPress;
    let tmp = projectName;
    if (projectName == null) {
      let tmp2 = guildId;
      let tmp3 = navigation;
      let intl = guildId(navigation[23]).intl;
      const tmp5 = projectExists;
      if (!tmp5) {
        let Xmvb23;
        const tmp6 = stateFromStores1;
        if (!tmp6) {
          let tmp7 = projectId;
          Xmvb23 = projectId(tmp3[24]).F2dRba;
        }
        tmp = tmp4(Xmvb23);
      }
      let tmp8 = projectId;
      Xmvb23 = projectId(tmp3[24]).Xmvb23;
    }
    const title = tmp;
    let obj = {
      headerTitle() {
        const obj = { title };
        return closure_29(NavigatorHeader2.NavigatorHeader, obj);
      },
      headerRight() {
        let obj3;
        let tmp = null;
        if (projectExists) {
          let obj = { style: headerActions.headerActions, children: items };
          let tmp7Result = null;
          const tmp2 = closure_30;
          const tmp3 = previewAppId;
          if (closure_1_19) {
            let VibegrationsSelectModeActiveIcon;
            const tmp10 = projectId(navigation[27]);
            const tmp7 = first1;
            const tmp8 = projectId;
            if (active) {
              VibegrationsSelectModeActiveIcon = guildId(tmp9[79]).VibegrationsSelectModeActiveIcon;
            } else {
              VibegrationsSelectModeActiveIcon = tmp8(tmp9[79]);
            }
            const obj2 = { IconComponent: VibegrationsSelectModeActiveIcon, onPress, accessibilityLabel, accessibilityState: obj3, disabled };
            obj3 = { selected: active };
            tmp7Result = tmp7(tmp10, obj2);
          }
          items = [tmp7Result, ];
          const obj4 = {
            items,
            align: "below",
            children(arg0) {
                let accessibilityActions;
                let intl;
                let onAccessibilityAction;
                ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                const obj = { ref, IconComponent: title(closure_1_2[28]).MoreHorizontalIcon, onPress, accessibilityLabel: intl.string(title(closure_1_2[23]).t["UKOtz+"]), accessibilityActions, onAccessibilityAction };
                const tmp = closure_1_1(closure_1_2[27]);
                intl = title(closure_1_2[23]).intl;
                return closure_1_29(tmp, obj);
              }
          };
          items[1] = first1(guildId(navigation[80]).ContextMenu, obj4);
          tmp = tmp2(tmp3, obj);
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items31);
  const items32 = [guildId, projectId];
  const effect5 = obj9.useEffect(() => {
    let obj = VibegrationsActionCreators;
    const result = obj.setSelectedProjectForGuild(guildId, projectId);
    return () => {
      const obj = guildId(navigation[44]);
      return obj.setSelectedProjectForGuild(closure_1_0, null);
    };
  }, items32);
  const items33 = [projectId];
  const effect6 = obj9.useEffect(() => () => projectId(navigation[81])(closure_1_1), items33);
  if (projectExists) {
    if (paneHidden) {
      let contentBare;
      if ("bot" === activeMode) {
        contentBare = tmp5.contentBare;
      }
      let tmp100 = null;
      const obj12 = { style: contentBare, children: items34 };
      if (tmp43) {
        const obj13 = { style: tmp5.segments, children: first1(tmp(tmp2[82]).SegmentedControl, obj14) };
        obj14 = { state: segmentedControlState, variant: "experimental_Small" };
        tmp100 = first1(previewAppId, obj13);
      }
      items34 = [tmp100, ];
      let tmp105Result = null;
      const obj15 = { style: tmp5.panes, children: items35 };
      if (hasItem) {
        tmp105Result = null;
        if (null != previewAppId) {
          const obj16 = { style: tmp46 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: str5, accessibilityElementsHidden: !tmp46, importantForAccessibility: str6, children: first1(tmp(tmp2[61]).PreviewFrame, obj17) };
          str5 = "none";
          if (tmp46) {
            str5 = "auto";
          }
          str6 = "no-hide-descendants";
          if (tmp46) {
            str6 = "auto";
          }
          obj17 = { applicationId: previewAppId, projectId, visible: tmp46, onOpenPublishedApp: memo };
          tmp105Result = tmp105(tmp103, obj16);
        }
      }
      items35 = [tmp105Result, , ];
      let tmp107Result = null;
      if (paneHidden) {
        tmp107Result = null;
        if (null != previewAppId) {
          tmp107Result = null;
          if (!tmp46) {
            const obj18 = { style: tmp5.pane, children: first1(tmp4Result6, obj19) };
            obj19 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, widgetApplicationId, frameHostAvailable: tmp28, permissionsGate: tmp109 };
            tmp109 = null;
            tmp4Result6 = tmp4(tmp2[61]);
            if (result) {
              tmp109 = { onReviewPermissions, loading: isLoading };
              const obj20 = { onReviewPermissions, loading: isLoading };
            }
            tmp107Result = tmp107(tmp103, obj18);
          }
        }
      }
      items35[1] = tmp107Result;
      const items36 = [tmp5.pane, ];
      if (paneHidden) {
        paneHidden = tmp5.paneHidden;
      }
      items36[1] = paneHidden;
      const obj21 = { style: items36, children: first1(tmp4(tmp2[83]), obj22) };
      obj22 = { projectId };
      items35[2] = first1(previewAppId, obj21);
      items34[1] = closure_30(previewAppId, obj15);
      tmp92Result1 = tmp98(tmp99, obj12);
    }
    contentBare = [tmp5.contentBare, animatedStyle];
  } else {
    const obj23 = { style: items37, children: tmp92Result };
    items37 = [, ];
    ({ content: arr36[0], centered: arr36[1] } = tmp5);
    if (stateFromStores1) {
      tmp92Result = tmp92(stateFromStores, {});
    } else {
      const obj24 = { style: tmp5.listError, children: items38 };
      const obj25 = { variant: "heading-lg/semibold", color: "text-default", children: intl2.string(tmp4(tmp2[24]).F2dRba) };
      const Text = tmp(tmp2[42]).Text;
      intl2 = tmp(tmp2[23]).intl;
      items38 = [first1(Text, obj25), , ];
      const obj26 = { variant: "text-md/normal", color: "text-muted", children: intl3.string(tmp4(tmp2[24]).GnEJ3o) };
      const Text2 = tmp(tmp2[42]).Text;
      intl3 = tmp(tmp2[23]).intl;
      items38[1] = first1(Text2, obj26);
      const obj27 = {
        variant: "secondary",
        size: "sm",
        text: intl4.string(tmp4(tmp2[24])["42EdIV"]),
        onPress() {
              const obj = VibegrationsActionCreators;
              return obj.listProjects(guildId);
            }
      };
      const Button = tmp(tmp2[43]).Button;
      intl4 = tmp(tmp2[23]).intl;
      items38[2] = first1(Button, obj27);
      tmp92Result = closure_30(tmp93, obj24);
    }
    tmp92Result1 = tmp92(tmp93, obj23);
  }
  return tmp92Result1;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_41 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let openedProjectIdRef;
  let obj = projectId(openedProjectIdRef[20]);
  const cResult = obj.c(6);
  projectId = projectId.projectId;
  const sceneProjectId = projectId.sceneProjectId;
  openedProjectIdRef = projectId.openedProjectIdRef;
  const obj2 = projectId(openedProjectIdRef[31]);
  navigation = obj2.useNavigation();
  if (cResult[0] === navigation) {
    if (cResult[1] === openedProjectIdRef) {
      if (cResult[2] === projectId) {
        let tmp3;
        let tmp4;
        if (cResult[3] === sceneProjectId) {
          tmp3 = cResult[4];
          tmp4 = cResult[5];
        }
        const effect = react.useEffect(tmp3, tmp4);
        return null;
      }
    }
  }
  const fn = function n() {
    const tmp2 = null != projectId && tmp !== openedProjectIdRef.current;
    if (tmp2) {
      openedProjectIdRef.current = projectId;
      if (projectId !== sceneProjectId) {
        const obj = { projectId };
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
  let obj = projectId(openedProjectIdRef[31]);
  navigation = obj.useNavigation();
  const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
  const effect = react.useEffect(() => {
    const tmp2 = null != projectId && tmp !== openedProjectIdRef.current;
    if (tmp2) {
      openedProjectIdRef.current = projectId;
      if (projectId !== sceneProjectId) {
        const obj = { projectId };
        navigation.push(constants.CHAT, obj);
      }
    }
  }, items);
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let openedProjectIdRef;
  let stateFromStores;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp24;
  let tmp25;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  const tmp2 = stateFromStores;
  let obj = guildId(stateFromStores[20]);
  const cResult = obj.c(56);
  guildId = guildId.guildId;
  let obj2 = guildId(stateFromStores[31]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [VibegrationsBuilderRouteStore];
    cResult[0] = items;
    first = items;
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
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(tmp2[22]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[4] = items2;
    tmp10 = items2;
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
    tmp13 = items3;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult5 = tmp(tmp2[22]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] !== guildId) {
    let obj3 = { guildId, location: "VibegrationsStandaloneScreen" };
    cResult[8] = guildId;
    cResult[9] = obj3;
    tmp15 = obj3;
  } else {
    tmp15 = cResult[9];
  }
  const tmpResult6 = tmp(tmp2[84]);
  const isVibegrationsGuildEnabled = tmpResult6.useIsVibegrationsGuildEnabled(tmp15);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildMemberStore];
    cResult[10] = items4;
    tmp17 = items4;
  } else {
    tmp17 = cResult[10];
  }
  if (cResult[11] !== guildId) {
    class C {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
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
    tmp20 = C;
    tmp19 = items5;
  } else {
    class C {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
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
  const tmpResult7 = tmp(tmp2[22]);
  const stateFromStoresArray = tmpResult7.useStateFromStoresArray(tmp17, tmp20, tmp19);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
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
    tmp22 = items6;
  } else {
    class C {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
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
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
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
    tmp25 = items7;
    tmp24 = tmp26;
  } else {
    class C {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
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
  const tmpResult8 = tmp(tmp2[22]);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp22, tmp24, tmp25);
  if (cResult[18] === guildId) {
    class C {
      constructor() {
        const selfMember = GuildMemberStore.getSelfMember(guildId);
        let roles;
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
          const selfMember = GuildMemberStore.getSelfMember(guildId);
          let roles;
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
  class N {
    constructor() {
      const tmp = isVibegrationsGuildEnabled;
      if (tmp) {
        const obj = VibegrationsActionCreators;
        obj.listProjects(guildId);
      }
    }
  }
  cResult[18] = guildId;
  cResult[19] = isVibegrationsGuildEnabled;
  cResult[20] = N;
}) : ((guildId) => {
  let intl;
  let obj9;
  let openedProjectIdRef;
  guildId = guildId.guildId;
  let stateFromStores;
  react = undefined;
  let obj = guildId(stateFromStores[31]);
  navigation = obj.useNavigation();
  let obj2 = guildId(stateFromStores[22]);
  let items = [VibegrationsBuilderRouteStore];
  const items1 = [guildId];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const routedProjectId = VibegrationsBuilderRouteStore.getRoutedProjectId(guildId);
    return routedProjectId;
  }, items1);
  let obj3 = guildId(stateFromStores[22]);
  const items2 = [GuildStore];
  const items3 = [guildId];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(guildId), items3);
  const obj4 = guildId(stateFromStores[84]);
  const isVibegrationsGuildEnabled = obj4.useIsVibegrationsGuildEnabled({ guildId, location: "VibegrationsStandaloneScreen" });
  const items4 = [GuildMemberStore];
  const items5 = [guildId];
  const obj5 = guildId(stateFromStores[22]);
  const stateFromStoresArray = obj5.useStateFromStoresArray(items4, () => {
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
  const items6 = [GuildStore, PermissionStore];
  const items7 = [guildId];
  const items8 = [isVibegrationsGuildEnabled, guildId, stateFromStoresArray, ];
  const obj6 = guildId(stateFromStores[22]);
  items8[3] = obj6.useStateFromStores(items6, () => {
    const guild = GuildStore.getGuild(guildId);
    const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
    return canResult;
  }, items7);
  const effect = react.useEffect(() => {
    const tmp = isVibegrationsGuildEnabled;
    if (tmp) {
      const obj = VibegrationsActionCreators;
      obj.listProjects(guildId);
    }
  }, items8);
  const items9 = [stateFromStores1, isVibegrationsGuildEnabled, navigation];
  const effect1 = react.useEffect(() => {
    const tmp = null == stateFromStores1 || isVibegrationsGuildEnabled;
    if (!tmp) {
      navigation.goBack();
    }
  }, items9);
  react = react.useRef(stateFromStores);
  const obj7 = {};
  const PROJECTS = constants2.PROJECTS;
  const obj8 = {
    headerLeft: obj9.getHeaderCloseButton(() => navigation.goBack()),
    headerTitle() {
      let intl;
      const obj = { title: intl.string(navigation(stateFromStores[24]).Xmvb23) };
      const NavigatorHeader = guildId(stateFromStores[78]).NavigatorHeader;
      intl = guildId(stateFromStores[23]).intl;
      return closure_1_29(NavigatorHeader, obj);
    },
    render() {
      let items;
      const obj = { children: items };
      const obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
      items = [closure_29(closure_41, obj2), ];
      const obj3 = { guildId };
      items[1] = closure_29(closure_37, obj3);
      return __initData(closure_31, obj);
    }
  };
  obj7[PROJECTS] = obj8;
  obj7[constants2.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      const obj = { children: items };
      items = [, ];
      const obj2 = { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef };
      items[0] = closure_29(closure_41, obj2);
      const obj3 = { guildId, projectId };
      items[1] = closure_29(closure_40, obj3);
      return __initData(closure_31, obj);
    }
  };
  obj7[constants2.DEBUG] = {
    headerTitle() {
      let intl;
      const obj = { title: intl.string(navigation(stateFromStores[24]).KampIf) };
      const NavigatorHeader = guildId(stateFromStores[78]).NavigatorHeader;
      intl = guildId(stateFromStores[23]).intl;
      return closure_1_29(NavigatorHeader, obj);
    },
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      const obj = { children: items };
      items = [, ];
      const obj2 = { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef };
      items[0] = closure_29(closure_41, obj2);
      items[1] = closure_29(VibegrationsDebugSceneDefault, { projectId });
      return __initData(closure_31, obj);
    }
  };
  obj9 = guildId(stateFromStores[78]);
  const obj10 = {
    screens: obj7,
    initialRouteStack: stateFromStores1(react.useState(() => {
      let obj3;
      const items = [];
      const obj = { name: constants.PROJECTS };
      items[0] = obj;
      if (null != stateFromStores) {
        const obj2 = { name: tmp.CHAT, params: obj3 };
        obj3 = { projectId: tmp2 };
        items.push(obj2);
      }
      return items;
    }), 1)[0],
    headerBackTitle: intl.string(navigation(stateFromStores[24]).Xmvb23)
  };
  const Navigator = guildId(stateFromStores[86]).Navigator;
  intl = guildId(stateFromStores[23]).intl;
  return closure_29(Navigator, obj10);
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default tmp8;
