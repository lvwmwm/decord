// Module ID: 16538
// Function ID: 16539
// Name: VibegrationsStandaloneScreen
// Dependencies: [5, 32, 19, 17, 5118, 1231, 2112, 2074, 4509, 16539, 6718, 12904, 8699, 1085, 2058, 8704, 21, 558, 576, 16541, 587, 16543, 4854, 16545, 4568, 7850, 4890, 1112, 16138, 6658, 504, 16139, 1126, 3723, 7126, 9222, 16142, 16547, 7577, 5993, 1618, 1490, 6746, 16548, 16561, 16563, 12906, 16568, 6694, 10689, 16573, 16574, 4886, 5594, 8700, 16575, 4552, 4461, 6074, 16577, 4612, 1632, 16578, 16580, 8706, 16582, 8702, 8973, 16583, 16581, 1484, 9282, 16584, 16608, 16613, 14906, 4567, 16615, 2028, 16616, 16585, 8977, 16618, 8878, 6883, 15616, 6010, 7579, 16621, 9283, 16642, 6748, 16732, 6496, 2]

// Module 16538 (VibegrationsStandaloneScreen)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import intl12 from "intl" /* 1126 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import _modDef3723 from "module_3723" /* 3723 */;
import _modDef4461 from "module_4461" /* 4461 */;
import DateUtils from "DateUtils" /* 4552 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6010 */;
import VibegrationsUtils from "VibegrationsUtils" /* 6746 */;
import SettingsIcon from "SettingsIcon" /* 6883 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8700 */;
import UploadIcon from "UploadIcon" /* 8878 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 8977 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9222 */;
import UndoIcon from "UndoIcon" /* 14906 */;
import BugIcon from "BugIcon" /* 15616 */;
import MentionsBadgeDefault from "MentionsBadge" /* 16142 */;
import VibegrationsPublishBlockedSheetDefault from "VibegrationsPublishBlockedSheet" /* 16543 */;
import VibegrationsPublishNotesSheet from "VibegrationsPublishNotesSheet" /* 16545 */;
import VibegrationsHeaderIconButtonDefault from "VibegrationsHeaderIconButton" /* 16547 */;
import VibegrationsCreateSheet from "VibegrationsCreateSheet" /* 16548 */;
import VibegrationsRemixSheet from "VibegrationsRemixSheet" /* 16561 */;
import vibegrationsProjectActions2 from "vibegrationsProjectActions" /* 16563 */;
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet" /* 16568 */;
import VibegrationsChangelog from "VibegrationsChangelog" /* 16573 */;
import VibegrationsConnectToolSheet from "VibegrationsConnectToolSheet" /* 16613 */;
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet" /* 16615 */;
import VibegrationsRestorePointsSheet from "VibegrationsRestorePointsSheet" /* 16616 */;
import VibegrationsDebugSceneDefault from "VibegrationsDebugScene" /* 16732 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import vibegrationsDesignFeedbackStore from "vibegrationsDesignFeedbackStore" /* 16539 */;
import VibegrationsBuilderRouteStore from "VibegrationsBuilderRouteStore" /* 6718 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12904 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;
import Constants from "Constants" /* 1085 */;
import FramesConstants from "FramesConstants" /* 8704 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const VibegrationsPublishNotesSheetDefault = VibegrationsPublishNotesSheet;
const VibegrationsCreateSheetDefault = VibegrationsCreateSheet;
const VibegrationsRemixSheetDefault = VibegrationsRemixSheet;
const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;
const VibegrationsConnectToolSheetDefault = VibegrationsConnectToolSheet;
const VibegrationsVersionHistorySheetDefault = VibegrationsVersionHistorySheet;
const VibegrationsRestorePointsSheetDefault = VibegrationsRestorePointsSheet;
let c4, c5, guildId, importDefault, navigation, obj1;

let c9;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_22;
let closure_23;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const ExperimentalDirectSelectIcon2 = tmp(16541);
function projectOpener(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (arg1 === closure_0) {
      f145887(arg0);
    } else {
      const obj = guildId(navigation[27]);
      obj.transitionTo(vibegrationsControlActive.CHANNEL(arg1, constants.VIBEGRATIONS, arg0));
    }
  };
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, Keyboard: metroImportDefault, ScrollView: metroImportAll, View: c9 } = react_native);
({ enterVibegrationsDesignFeedback: closure_15, exitVibegrationsDesignFeedback: closure_16, useVibegrationsDesignFeedback: closure_17 } = vibegrationsDesignFeedbackStore);
({ closeConnection: closure_19, restoreSourceHistoryEntry: closure_20 } = VibegrationsConnectionStore);
({ Permissions: closure_22, Routes: closure_23 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ isLaunched: closure_25, MAIN_SURFACE: closure_26 } = FramesConstants);
({ jsx: closure_27, jsxs: closure_28, Fragment: closure_29 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
    const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
    const tmp7 = closure_27(ExperimentalDirectSelectIcon, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { color: nativeDefault.colors.TEXT_BRAND };
  const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
  return closure_27(ExperimentalDirectSelectIcon, obj);
});
let platform = {
  showPublishBlocked: VibegrationsPublishBlockedSheetDefault,
  openPublishNotes(arg0) {
    let applicationId;
    let initialDraft;
    let projectName;
    let publish;
    ({ guildId, applicationId, projectName, publish, initialDraft } = arg0);
    const showActionSheet = ActionSheetActionCreators.showActionSheet;
    const obj = { content: closure_27(VibegrationsPublishNotesSheetDefault, { guildId, applicationId, projectName, publish, initialDraft }), key: VibegrationsPublishNotesSheet.VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY };
    showActionSheet(obj);
  },
  showError(content) {
    const obj = ToastActionCreatorsDefault;
    const obj2 = { key: "VIBEGRATIONS_PUBLISH_FAILED", content };
    return obj.open(obj2);
  },
  openProfile(userId) {
    const obj = { userId };
    showUserProfileActionSheetDefault(obj);
  }
};
let closure_32 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, listContent: { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 }, section: { gap: nativeDefault.space.PX_8 }, projectRowTrailing: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, unreadPill: size, sectionHeading: { gap: nativeDefault.space.PX_4 }, changelog: { gap: nativeDefault.space.PX_16 }, changelogEntries: { gap: nativeDefault.space.PX_12 }, changelogItem: { gap: nativeDefault.space.PX_4 }, listError: { alignItems: "center", gap: nativeDefault.space.PX_12 }, headerActions: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, segments: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 }, panes: { flex: 1, overflow: "hidden" }, pane: { flex: 1 }, chatPane: { flex: 1, paddingBottom }, paneHidden: { display: "none" }, paneBackstage: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom });
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 });
  ({ paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 });
  ({ gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  size = { position: "absolute", left: 0, top: "50%", width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_4, borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function(project) {
  let date;
  let first;
  let getRelativeTimestamp;
  let intl4;
  let items2;
  let items3;
  let obj10;
  let onMore;
  let onPress;
  let tmp12;
  let tmp8;
  let tmp9;
  const obj = project(576);
  const cResult = obj.c(35);
  project = project.project;
  ({ onPress, onMore } = project);
  const tmp4 = closure_32(0);
  const obj2 = project(16138);
  const vibegrationsProjectUnreadStatus = obj2.useVibegrationsProjectUnreadStatus(project.id);
  let application_id = project.preview_application_id;
  if (application_id == null) {
    application_id = project.application_id;
  }
  const tmpResult = project(6658);
  const data = tmpResult.useApplication(application_id).data;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== project.id) {
    const fn = function n() {
      return VibegrationsProjectStore.isProjectDeleting(project.id);
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
  const tmpResult3 = project(504);
  const stateFromStores = tmpResult3.useStateFromStores(first, tmp8, tmp9);
  const tmp11 = vibegrationsProjectUnreadStatus === project(16139).VibegrationsReadStateFlags.NEEDS_INPUT && !stateFromStores;
  if (cResult[4] !== project.updated_at) {
    let formatToPlainStringResult;
    if (null != project.updated_at) {
      const intl = tmp(1126).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj3 = { time: getRelativeTimestamp(date.getTime()) };
      const oMDaqr = _modDef3723.oMDaqr;
      const _Date = Date;
      const self = this;
      const self2 = this;
      getRelativeTimestamp = project(7126).getRelativeTimestamp;
      project(7126);
      date = new Date(project.updated_at);
      formatToPlainStringResult = formatToPlainString(oMDaqr, obj3);
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
    if (cResult[7] === tmp12) {
      tmp17 = cResult[8];
    }
    if (cResult[9] !== tmp11) {
      let stringResult;
      if (tmp11) {
        const intl3 = tmp(1126).intl;
        stringResult = intl3.string(_modDef3723.V3e2Yd);
      }
      cResult[9] = tmp11;
      cResult[10] = stringResult;
      tmp20 = stringResult;
    } else {
      tmp20 = cResult[10];
    }
    let icon;
    if (data != null) {
      icon = data.icon;
    }
    if (cResult[11] === application_id) {
      let tmp24;
      let tmp29Result;
      if (cResult[12] === icon) {
        tmp24 = cResult[13];
      }
      if (cResult[14] === stateFromStores) {
        if (cResult[15] === tmp11) {
          if (cResult[16] === onMore) {
            let tmp28;
            if (cResult[17] === tmp4) {
              tmp28 = cResult[18];
            }
            if (cResult[19] === stateFromStores) {
              if (cResult[20] === onMore) {
                if (cResult[21] === onPress) {
                  if (cResult[22] === project.name) {
                    if (cResult[23] === tmp17) {
                      if (cResult[24] === tmp20) {
                        if (cResult[25] === tmp24) {
                          let tmp40;
                          if (cResult[26] === tmp28) {
                            tmp40 = cResult[27];
                          }
                          if (cResult[28] === stateFromStores) {
                            if (cResult[29] === tmp4) {
                              let tmp43;
                              if (cResult[30] === vibegrationsProjectUnreadStatus) {
                                tmp43 = cResult[31];
                              }
                              if (cResult[32] === tmp40) {
                                let tmp47;
                                if (cResult[33] === tmp43) {
                                  tmp47 = cResult[34];
                                }
                                return tmp47;
                              }
                              const obj4 = { children: items2 };
                              items2 = [tmp40, tmp43];
                              const tmp50 = closure_28(closure_9, obj4);
                              cResult[32] = tmp40;
                              cResult[33] = tmp43;
                              cResult[34] = tmp50;
                              tmp47 = tmp50;
                            }
                          }
                          let tmp44 = null;
                          if (null != vibegrationsProjectUnreadStatus) {
                            tmp44 = null;
                            if (!stateFromStores) {
                              const obj5 = { style: tmp4.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
                              tmp44 = closure_27(closure_9, obj5);
                            }
                          }
                          cResult[28] = stateFromStores;
                          cResult[29] = tmp4;
                          cResult[30] = vibegrationsProjectUnreadStatus;
                          cResult[31] = tmp44;
                          tmp43 = tmp44;
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj6 = { label: project.name, subLabel: tmp17, accessibilityHint: tmp20, disabled: stateFromStores, icon: tmp24, trailing: tmp28, onPress, onLongPress: onMore };
            const tmp42 = closure_27(project(5993).TableRow, obj6);
            cResult[19] = stateFromStores;
            cResult[20] = onMore;
            cResult[21] = onPress;
            cResult[22] = project.name;
            cResult[23] = tmp17;
            cResult[24] = tmp20;
            cResult[25] = tmp24;
            cResult[26] = tmp28;
            cResult[27] = tmp42;
            tmp40 = tmp42;
          }
        }
      }
      if (stateFromStores) {
        tmp29Result = closure_27(closure_6, {});
      } else {
        let tmp31 = null;
        const obj7 = { style: tmp4.projectRowTrailing, children: items3 };
        const tmp29 = closure_28;
        const tmp30 = closure_9;
        if (tmp11) {
          tmp31 = closure_27(MentionsBadgeDefault, { mentionsCount: 1 });
        }
        items3 = [tmp31, ];
        const obj8 = { IconComponent: project(7577).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl4.string(project(1126).t["UKOtz+"]) };
        const tmp36 = VibegrationsHeaderIconButtonDefault;
        intl4 = tmp(1126).intl;
        items3[1] = closure_27(tmp36, obj8);
        tmp29Result = tmp29(tmp30, obj7);
      }
      cResult[14] = stateFromStores;
      cResult[15] = tmp11;
      cResult[16] = onMore;
      cResult[17] = tmp4;
      cResult[18] = tmp29Result;
      tmp28 = tmp29Result;
    }
    const obj9 = { application: obj10 };
    obj10 = { id: application_id, icon };
    const tmp27 = closure_27(TableRowApplicationIconDefault, obj9);
    cResult[11] = application_id;
    cResult[12] = icon;
    cResult[13] = tmp27;
    tmp24 = tmp27;
  }
  let stringResult1 = tmp12;
  if (stateFromStores) {
    const intl2 = tmp(1126).intl;
    stringResult1 = intl2.string(_modDef3723.EwXXks);
  }
  cResult[6] = stateFromStores;
  cResult[7] = tmp12;
  cResult[8] = stringResult1;
  tmp17 = stringResult1;
}) : (function(project) {
  let date;
  let getRelativeTimestamp;
  let icon;
  let intl4;
  let items2;
  let obj4;
  let stringResult;
  let tmp12Result;
  let tmp19;
  project = project.project;
  const onMore = project.onMore;
  const onPress = project.onPress;
  const tmp = closure_32(0);
  const obj = project(16138);
  const vibegrationsProjectUnreadStatus = obj.useVibegrationsProjectUnreadStatus(project.id);
  let application_id = project.preview_application_id;
  if (application_id == null) {
    application_id = project.application_id;
  }
  const tmp2Result = project(6658);
  const data = tmp2Result.useApplication(application_id).data;
  const items = [VibegrationsProjectStore];
  const items1 = [project.id];
  const tmp2Result3 = project(504);
  const stateFromStores = tmp2Result3.useStateFromStores(items, () => VibegrationsProjectStore.isProjectDeleting(project.id), items1);
  const tmp6 = vibegrationsProjectUnreadStatus === tmp2(16139).VibegrationsReadStateFlags.NEEDS_INPUT && !stateFromStores;
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp2(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { time: getRelativeTimestamp(date.getTime()) };
    const oMDaqr = _modDef3723.oMDaqr;
    const _Date = Date;
    const self = this;
    const self2 = this;
    getRelativeTimestamp = project(7126).getRelativeTimestamp;
    project(7126);
    date = new Date(project.updated_at);
    formatToPlainStringResult = formatToPlainString(oMDaqr, obj2);
  }
  const obj3 = { label: project.name, subLabel: formatToPlainStringResult, accessibilityHint: stringResult, disabled: stateFromStores, icon: closure_27(tmp19, { application: obj4 }), trailing: tmp12Result, onPress, onLongPress: onMore };
  const TableRow = tmp2(5993).TableRow;
  if (stateFromStores) {
    const intl2 = tmp2(1126).intl;
    formatToPlainStringResult = intl2.string(_modDef3723.EwXXks);
  }
  stringResult = undefined;
  if (tmp6) {
    const intl3 = tmp2(1126).intl;
    stringResult = intl3.string(_modDef3723.V3e2Yd);
  }
  obj4 = { id: application_id, icon };
  icon = undefined;
  tmp19 = TableRowApplicationIconDefault;
  if (data != null) {
    icon = data.icon;
  }
  if (stateFromStores) {
    tmp12Result = tmp14(closure_6, {});
  } else {
    let tmp14Result3 = null;
    const obj5 = { style: tmp.projectRowTrailing, children: items2 };
    if (tmp6) {
      tmp14Result3 = tmp14(tmp18(16142), { mentionsCount: 1 });
    }
    items2 = [tmp14Result3, ];
    const obj6 = { IconComponent: project(7577).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: intl4.string(project(1126).t["UKOtz+"]) };
    const tmp18Result = VibegrationsHeaderIconButtonDefault;
    intl4 = tmp2(1126).intl;
    items2[1] = closure_27(tmp18Result, obj6);
    tmp12Result = tmp12(tmp13, obj5);
  }
  const children = [closure_27(TableRow, obj3), ];
  let tmp14Result4 = null;
  if (null != vibegrationsProjectUnreadStatus) {
    tmp14Result4 = null;
    if (!stateFromStores) {
      const obj7 = { style: tmp.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
      tmp14Result4 = tmp14(tmp13, obj7);
    }
  }
  children[1] = tmp14Result4;
  return closure_28(closure_9, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_1;
  let closure_4;
  let closure_5;
  let settings;
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
  let obj = guildId(navigation[18]);
  const cResult = obj.c(104);
  guildId = guildId.guildId;
  const bottom = require("useSafeAreaInsets")().bottom;
  importDefault = closure_32(0);
  const tmp4 = closure_32(0);
  let obj2 = guildId(navigation[41]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [VibegrationsProjectStore];
    const fn = function o() {
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
  const tmpResult = tmp(tmp2[30]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [VibegrationsProjectStore];
    cResult[3] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function _() {
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
  const tmpResult3 = tmp(tmp2[30]);
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
  const tmpResult4 = tmp(tmp2[30]);
  const stateFromStores = tmpResult4.useStateFromStores(tmp15, tmp16, tmp17);
  if (cResult[10] === stateFromStoresArray) {
    if (cResult[16] !== stateFromStoresArray1) {
      const _Symbol = Symbol;
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
        class A {
          constructor() {
            return VibegrationsProjectStore.getProjectsFetchState();
          }
        }
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
      class A {
        constructor() {
          return VibegrationsProjectStore.getProjectsFetchState();
        }
      }
      const sorted = obj7.sort(tmp26);
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
      class V {
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
      cResult[20] = V;
    } else {
      class V {
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
      class V {
        constructor(projectId) {
          const obj = { projectId };
          return navigation.push(constants.CHAT, obj);
        }
      }
      _slicedToArray = tmp29;
      if (cResult[24] === guildId) {
        class V {
          constructor(projectId) {
            const obj = { projectId };
            return navigation.push(constants.CHAT, obj);
          }
        }
        react = tmp30;
        if (cResult[27] === guildId) {
          class V {
            constructor(projectId) {
              const obj = { projectId };
              return navigation.push(constants.CHAT, obj);
            }
          }
          let closure_6 = tmp31;
          if (cResult[30] === guildId) {
            class V {
              constructor(projectId) {
                const obj = { projectId };
                return navigation.push(constants.CHAT, obj);
              }
            }
          }
          class J {
            constructor(arg0) {
              closure_0 = guildId;
              tmp = guildId(closure_2[45]);
              obj = { project: guildId, guildId: closure_0, muted: null, openChat: null, onRemix: null, onOpenSettings: null };
              vibegrationsProjectActions = tmp.vibegrationsProjectActions;
              obj2 = guildId(closure_2[46]);
              obj.muted = obj2.isVibegrationsProjectMuted(closure_1_11.settings, guildId.id);
              obj.openChat = function openChat() {
                return _asyncToGenerator(project.id);
              };
              obj.onRemix = function onRemix() {
                return closure_6(project);
              };
              obj.onOpenSettings = function onOpenSettings() {
                let guild_id;
                let obj2;
                let tmp2;
                let tmp3;
                const tmp = ActionSheetActionCreators;
                const showActionSheet = tmp.showActionSheet;
                const obj = { key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
                obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
                guild_id = project.guild_id;
                tmp2 = closure_27;
                tmp3 = VibegrationsSettingsSheetDefault;
                if (guild_id == null) {
                  guild_id = guildId;
                }
                return showActionSheet(obj);
              };
              result = vibegrationsProjectActions(obj);
              obj3 = guildId(closure_2[48]);
              obj1 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
              result1 = obj3.showSimpleActionSheet(obj1);
              return;
            }
          }
          cResult[30] = guildId;
          cResult[31] = tmp28;
          cResult[32] = tmp31;
          cResult[33] = J;
        }
        class U {
          constructor(project) {
            let obj2;
            const tmp = ActionSheetActionCreators;
            const showActionSheet = tmp.showActionSheet;
            const obj = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: closure_27(VibegrationsRemixSheetDefault, obj2) };
            obj2 = { project, currentGuildId: guildId, onRemixed: tmp29 };
            showActionSheet(obj);
          }
        }
        cResult[27] = guildId;
        cResult[28] = tmp29;
        cResult[29] = U;
      }
      class X {
        constructor() {
          let obj2;
          const tmp = ActionSheetActionCreators;
          const showActionSheet = tmp.showActionSheet;
          const obj = { key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY, content: closure_27(VibegrationsCreateSheetDefault, obj2) };
          obj2 = { guildId, onCreated: tmp29 };
          showActionSheet(obj);
        }
      }
      cResult[24] = guildId;
      cResult[25] = tmp29;
      cResult[26] = X;
      tmp30 = X;
    }
    V = tmp28;
    const fn3 = (arg0, arg1) => {
      if (arg1 === closure_0) {
        f145887(arg0);
      } else {
        const obj = guildId(navigation[27]);
        obj.transitionTo(vibegrationsControlActive.CHANNEL(arg1, constants.VIBEGRATIONS, arg0));
      }
    };
    cResult[21] = guildId;
    cResult[22] = tmp28;
    cResult[23] = fn3;
    tmp29 = fn3;
  }
  if (cResult[13] !== guildId) {
    class V {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
    cResult[13] = guildId;
    class J {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = guildId(closure_2[45]);
        obj = { project: guildId, guildId: closure_0, muted: null, openChat: null, onRemix: null, onOpenSettings: null };
        vibegrationsProjectActions = tmp.vibegrationsProjectActions;
        obj2 = guildId(closure_2[46]);
        obj.muted = obj2.isVibegrationsProjectMuted(closure_1_11.settings, guildId.id);
        obj.openChat = function openChat() {
          return _asyncToGenerator(project.id);
        };
        obj.onRemix = function onRemix() {
          return closure_6(project);
        };
        obj.onOpenSettings = function onOpenSettings() {
          let guild_id;
          let obj2;
          let tmp2;
          let tmp3;
          const tmp = ActionSheetActionCreators;
          const showActionSheet = tmp.showActionSheet;
          const obj = { key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
          obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
          guild_id = project.guild_id;
          tmp2 = closure_27;
          tmp3 = VibegrationsSettingsSheetDefault;
          if (guild_id == null) {
            guild_id = guildId;
          }
          return showActionSheet(obj);
        };
        result = vibegrationsProjectActions(obj);
        obj3 = guildId(closure_2[48]);
        obj1 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
        result1 = obj3.showSimpleActionSheet(obj1);
        return;
      }
    }
    cResult[14] = tmp22;
    tmp21 = tmp22;
  } else {
    class V {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
    cResult[15] = R;
    class J {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = guildId(closure_2[45]);
        obj = { project: guildId, guildId: closure_0, muted: null, openChat: null, onRemix: null, onOpenSettings: null };
        vibegrationsProjectActions = tmp.vibegrationsProjectActions;
        obj2 = guildId(closure_2[46]);
        obj.muted = obj2.isVibegrationsProjectMuted(closure_1_11.settings, guildId.id);
        obj.openChat = function openChat() {
          return _asyncToGenerator(project.id);
        };
        obj.onRemix = function onRemix() {
          return closure_6(project);
        };
        obj.onOpenSettings = function onOpenSettings() {
          let guild_id;
          let obj2;
          let tmp2;
          let tmp3;
          const tmp = ActionSheetActionCreators;
          const showActionSheet = tmp.showActionSheet;
          const obj = { key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY, content: tmp2(tmp3, obj2) };
          obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
          guild_id = project.guild_id;
          tmp2 = closure_27;
          tmp3 = VibegrationsSettingsSheetDefault;
          if (guild_id == null) {
            guild_id = guildId;
          }
          return showActionSheet(obj);
        };
        result = vibegrationsProjectActions(obj);
        obj3 = guildId(closure_2[48]);
        obj1 = { key: "VibegrationsProjectActions", header: { title: guildId.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
        result1 = obj3.showSimpleActionSheet(obj1);
        return;
      }
    }
  } else {
    class V {
      constructor(projectId) {
        const obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }
    }
  }
  const found = stateFromStoresArray.filter(tmp21);
  const sorted1 = found.sort(tmp23);
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
  let settings;
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
  let obj = guildId(navigation[41]);
  navigation = obj.useNavigation();
  let obj2 = guildId(navigation[30]);
  let items = [VibegrationsProjectStore];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => VibegrationsProjectStore.getOwnedProjects(), []);
  let obj3 = guildId(navigation[30]);
  let items1 = [VibegrationsProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = obj3.useStateFromStoresArray(items1, () => VibegrationsProjectStore.getSharedProjects(guildId), items2);
  let obj4 = guildId(navigation[30]);
  const items3 = [VibegrationsProjectStore];
  const stateFromStores = obj4.useStateFromStores(items3, () => VibegrationsProjectStore.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = callback.useMemo(() => {
    const found = stateFromStoresArray.filter((item) => {
      const obj = guildId(navigation[42]);
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
        f145887(arg0);
      } else {
        const obj = guildId(navigation[27]);
        obj.transitionTo(vibegrationsControlActive.CHANNEL(arg1, constants.VIBEGRATIONS, arg0));
      }
    };
  }, items7);
  const items8 = [guildId, memo2];
  const callback1 = callback.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY, content: closure_27(VibegrationsCreateSheetDefault, obj2) };
    obj2 = { guildId, onCreated: memo2 };
    showActionSheet(obj);
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = callback.useCallback((project) => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: closure_27(VibegrationsRemixSheetDefault, obj2) };
    obj2 = { project, currentGuildId: guildId, onRemixed: memo2 };
    showActionSheet(obj);
  }, items9);
  const items10 = [guildId, callback, callback2];
  let closure_9 = callback.useCallback((project) => {
    let obj2;
    guildId = project;
    let tmp = guildId(navigation[45]);
    let obj = {
      project,
      guildId,
      muted: obj2.isVibegrationsProjectMuted(settings.settings, project.id),
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
        tmp2 = closure_27;
        tmp3 = VibegrationsSettingsSheetDefault;
        if (guild_id == null) {
          guild_id = guildId;
        }
        return showActionSheet(obj);
      }
    };
    const vibegrationsProjectActions = tmp.vibegrationsProjectActions;
    obj2 = guildId(navigation[46]);
    const result = vibegrationsProjectActions(obj);
    const obj3 = guildId(navigation[48]);
    const obj4 = { key: "VibegrationsProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) };
    const result1 = obj3.showSimpleActionSheet(obj4);
  }, items10);
  const items11 = [navigation, callback1];
  const effect = callback.useEffect(() => {
    let onPress;
    let obj = {
      headerRight() {
        let intl;
        const obj = { IconComponent: guildId(navigation[49]).PlusLargeIcon, onPress, accessibilityLabel: intl.string(guildId(navigation[32]).t.CumH4u) };
        const tmp = closure_1(navigation[37]);
        intl = guildId(navigation[32]).intl;
        return closure_2_27(tmp, obj);
      }
    };
    navigation.setOptions(obj);
  }, items11);
  const obj5 = guildId(navigation[50]);
  let result = obj5.recentVibegrationsChangelog("mobile");
  let tmp15 = memo.length > 0;
  const callback3 = callback.useCallback(() => {
    const obj = guildId(navigation[22]);
    const obj2 = { content: closure_1_27(closure_1(navigation[51]), {}), key: guildId(navigation[51]).VIBEGRATIONS_CHANGELOG_SHEET_KEY };
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
          const obj8 = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp(tmp2[33])["IN/HRP"]) };
          let Text = tmp4(tmp2[52]).Text;
          intl = tmp4(tmp2[32]).intl;
          items12 = [closure_27(Text, obj8), ];
          const obj9 = {
            variant: "secondary",
            size: "sm",
            text: intl2.string(tmp(tmp2[33])["42EdIV"]),
            onPress() {
                      const obj = VibegrationsActionCreators;
                      return obj.listProjects(guildId);
                    }
          };
          const Button = tmp4(tmp2[53]).Button;
          intl2 = tmp4(tmp2[32]).intl;
          items12[1] = closure_27(Button, obj9);
          tmp17Result2 = closure_28(tmp18, obj7);
        } else {
          const obj10 = { style: tmp3.listError, children: items13 };
          const obj11 = { variant: "text-md/normal", color: "text-muted", children: intl10.string(tmp(tmp2[33])["vqy+in"]) };
          const Text8 = tmp4(tmp2[52]).Text;
          intl10 = tmp4(tmp2[32]).intl;
          items13 = [closure_27(Text8, obj11), ];
          const obj12 = { variant: "primary", size: "sm", text: intl11.string(guildId(tmp2[32]).t.CumH4u), onPress: callback1 };
          const Button3 = tmp4(tmp2[53]).Button;
          intl11 = tmp4(tmp2[32]).intl;
          items13[1] = closure_27(Button3, obj12);
          tmp17Result2 = closure_28(tmp18, obj10);
        }
      }
      obj6.children = tmp17Result2;
      tmp17Result = tmp17(tmp18, obj6);
    }
    tmp17Result2 = tmp17(memo2, {});
  }
  const obj13 = { style: tmp3.content, children: closure_28(tmp25, obj14) };
  obj14 = { contentContainerStyle: items14, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: items15 };
  items14 = [tmp3.listContent, { paddingBottom: tmp(tmp2[20]).space.PX_8 + bottom }];
  items15 = [, , , , ];
  ({ paddingBottom: tmp(tmp2[20]).space.PX_8 + bottom });
  items15[0] = closure_27(tmp(tmp2[55]), {});
  let tmp24Result = null;
  tmp25 = callback2;
  if (result.length > 0) {
    const obj16 = { style: tmp3.changelog, children: items17 };
    const obj17 = { style: tmp3.sectionHeading, children: items16 };
    const obj18 = { variant: "heading-md/bold", color: "text-default", children: intl3.string(tmp(tmp2[33]).x07mpp) };
    const Text2 = tmp4(tmp2[52]).Text;
    intl3 = tmp4(tmp2[32]).intl;
    items16 = [closure_27(Text2, obj18), ];
    const obj19 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(tmp(tmp2[33]).h5CwHI) };
    const Text3 = tmp4(tmp2[52]).Text;
    intl4 = tmp4(tmp2[32]).intl;
    items16[1] = closure_27(Text3, obj19);
    items17 = [closure_28(closure_9, obj17), , ];
    const obj20 = {
      style: tmp3.changelogEntries,
      children: result.map((children) => {
          let items1;
          const obj = { style: closure_1.changelogItem, children: items1 };
          const Text = Text_Text.Text;
          const items = [, ];
          const obj2 = DateUtils;
          items[0] = obj2.dateFormat(_modDef4461(children.date, "YYYY-MM-DD"), "LL");
          let combined = null;
          const obj3 = VibegrationsChangelog;
          const tmp2 = React4;
          if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
            const intl = tmp3(1126).intl;
            const _HermesInternal = HermesInternal;
            combined = " \u00B7 " + intl.string(_modDef3723["CLX+p/"]);
          }
          items[1] = combined;
          items1 = [closure_28(Text, { variant: "text-xs/bold", color: "text-muted", children: items }), ];
          const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: children.summary };
          items1[1] = closure_27(Text_Text.Text, obj4);
          return closure_28(tmp2, obj, "" + children.date + "-" + children.summary);
        })
    };
    items17[1] = closure_27(closure_9, obj20);
    let tmp22Result = null;
    const tmp4Result = guildId(tmp2[50]);
    if (tmp4Result.hasMoreVibegrationsChangelog("mobile")) {
      const obj21 = { variant: "secondary", size: "sm", text: intl5.string(tmp(tmp2[33]).YWxThz), onPress: callback3 };
      const Button2 = tmp4(tmp2[53]).Button;
      intl5 = tmp4(tmp2[32]).intl;
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
    const obj24 = { variant: "heading-md/bold", color: "text-default", children: intl6.string(tmp(tmp2[33]).Bo5fE3) };
    const Text4 = tmp4(tmp2[52]).Text;
    intl6 = tmp4(tmp2[32]).intl;
    items18 = [closure_27(Text4, obj24), ];
    const obj25 = { variant: "text-sm/normal", color: "text-muted", children: intl7.string(tmp(tmp2[33]).YnAFtT) };
    const Text5 = tmp4(tmp2[52]).Text;
    intl7 = tmp4(tmp2[32]).intl;
    items18[1] = closure_27(Text5, obj25);
    items19 = [closure_28(closure_9, obj23), ];
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
          return closure_1_27(closure_1_36, obj, project.id);
        })
    };
    const TableRowGroup = tmp4(tmp2[58]).TableRowGroup;
    items19[1] = closure_27(TableRowGroup, obj26);
    tmp24Result3 = tmp24(tmp23, obj22);
  }
  items15[2] = tmp24Result3;
  let tmp24Result4 = null;
  if (memo1.length > 0) {
    const obj27 = { style: tmp3.section, children: items21 };
    const obj28 = { style: tmp3.sectionHeading, children: items20 };
    const obj29 = { variant: "heading-md/bold", color: "text-default", children: intl8.string(tmp(tmp2[33]).jrCnUc) };
    const Text6 = tmp4(tmp2[52]).Text;
    intl8 = tmp4(tmp2[32]).intl;
    items20 = [closure_27(Text6, obj29), ];
    const obj30 = { variant: "text-sm/normal", color: "text-muted", children: intl9.string(tmp(tmp2[33])["1KEhDu"]) };
    const Text7 = tmp4(tmp2[52]).Text;
    intl9 = tmp4(tmp2[32]).intl;
    items20[1] = closure_27(Text7, obj30);
    items21 = [closure_28(closure_9, obj28), ];
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
          return closure_1_27(closure_1_36, obj, project.id);
        })
    };
    const TableRowGroup2 = tmp4(tmp2[58]).TableRowGroup;
    items21[1] = closure_27(TableRowGroup2, obj31);
    tmp24Result4 = tmp24(tmp23, obj27);
  }
  items15[3] = tmp24Result4;
  items15[4] = tmp17Result;
  return closure_27(closure_9, obj13);
});
const __initData = { code: "function VibegrationsStandaloneScreenTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let closure_39 = { code: "function VibegrationsStandaloneScreenTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let closure_40 = { code: "function VibegrationsStandaloneScreenTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
let closure_41 = { code: "function VibegrationsStandaloneScreenTsx4(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let closure_42 = { code: "function VibegrationsStandaloneScreenTsx5(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let __initData2 = { code: "function VibegrationsStandaloneScreenTsx6(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_44 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_4;
  let closure_5;
  let disabledReason;
  let fn;
  let modes;
  let onRemixed;
  let onRestore;
  let previewAppId;
  let projectGuildId;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp8;
  let tmp9;
  let tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[18]);
  const cResult = obj.c(246);
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let obj2 = guildId(navigation[41]);
  navigation = obj2.useNavigation();
  const bottom = projectId(navigation[40])().bottom;
  let tmp5 = ref(bottom);
  _slicedToArray = tmp5;
  let tmp6 = projectId(navigation[59])();
  react = tmp6;
  let tmp7 = _slicedToArray(react.useState(0), 2);
  [r10033, tmp8] = tmp7;
  let closure_6 = tmp8;
  if (cResult[0] !== bottom) {
    let obj3 = { onEnd: fn };
    fn = function h(height) {
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(closure_6);
      runOnJSResult(Math.max(0, height.height - bottom));
    };
    let obj4 = { runOnJS: tmp(tmp2[60]).runOnJS, setChatKeyboardCover: tmp8, safeAreaBottom: bottom };
    fn.__closure = obj4;
    let num = 5473330359402;
    fn.__workletHash = 5473330359402;
    fn.__initData = __initData;
    let items = [bottom];
    cResult[0] = bottom;
    cResult[1] = obj3;
    cResult[2] = items;
    tmp10 = items;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const tmpResult = tmp(tmp2[61]);
  tmpResult.useKeyboardHandler(tmp9, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [VibegrationsProjectStore];
    cResult[3] = items1;
    tmp13 = items1;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== projectId) {
    class I {
      constructor() {
        let project = VibegrationsProjectStore.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items2 = [projectId];
    cResult[4] = projectId;
    cResult[5] = I;
    cResult[6] = items2;
    tmp16 = items2;
    tmp15 = I;
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
    tmp16 = cResult[6];
  }
  const tmpResult6 = tmp(tmp2[30]);
  const stateFromStores = tmpResult6.useStateFromStores(tmp13, tmp15, tmp16);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        let project = VibegrationsProjectStore.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items3 = [VibegrationsProjectStore];
    cResult[7] = items3;
    tmp18 = items3;
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
  if (cResult[8] !== projectId) {
    class I {
      constructor() {
        let project = VibegrationsProjectStore.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items4 = [projectId];
    cResult[8] = projectId;
    cResult[9] = tmp21;
    cResult[10] = items4;
    tmp20 = items4;
    tmp19 = tmp21;
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
    tmp20 = cResult[10];
  }
  const tmpResult7 = tmp(tmp2[30]);
  const stateFromStoresObject = tmpResult7.useStateFromStoresObject(tmp18, tmp19, tmp20);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        let project = VibegrationsProjectStore.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items5 = [VibegrationsProjectStore];
    cResult[11] = items5;
    tmp23 = items5;
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
  if (cResult[12] !== guildId) {
    class I {
      constructor() {
        let project = VibegrationsProjectStore.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items6 = [guildId];
    cResult[12] = guildId;
    cResult[13] = tmp26;
    cResult[14] = items6;
    tmp25 = items6;
    tmp24 = tmp26;
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
    tmp25 = cResult[14];
  }
  const tmpResult8 = tmp(tmp2[30]);
  const stateFromStores1 = tmpResult8.useStateFromStores(tmp23, tmp24, tmp25);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        let project = VibegrationsProjectStore.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items7 = [VibegrationsProjectStore];
    cResult[15] = items7;
    tmp28 = items7;
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
  if (cResult[16] !== projectId) {
    class I {
      constructor() {
        let project = VibegrationsProjectStore.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items8 = [projectId];
    cResult[16] = projectId;
    cResult[17] = tmp31;
    cResult[18] = items8;
    tmp30 = items8;
    tmp29 = tmp31;
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
    tmp30 = cResult[18];
  }
  const tmpResult9 = tmp(tmp2[30]);
  const stateFromStores2 = tmpResult9.useStateFromStores(tmp28, tmp29, tmp30);
  if (stateFromStores2 != null) {
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
  if (stateFromStores != null) {
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
  if (undefined == null) {
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
  const useApplication = tmp(tmp2[29]).useApplication;
  tmp(tmp2[29]);
  if (previewAppId == null) {
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
  let application = useApplication(previewAppId);
  const data = application.data;
  if (stateFromStores2 != null) {
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
  if (stateFromStores2 != null) {
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
  if (cResult[19] === undefined) {
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
  let obj5 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: tmp36, installScope: tmp33, ownerAuthorizationRevoked: tmp37, mainCardOnly: true };
  cResult[19] = undefined;
  cResult[20] = previewAppId;
  cResult[21] = true === undefined;
  cResult[22] = true === undefined;
  cResult[23] = obj5;
}) : ((guildId) => {
  let Provider;
  let _undefined;
  let activeMode;
  let bfQ4Ki;
  let closure_4;
  let closure_43;
  let closure_5;
  let first;
  let fn;
  let has_activity;
  let intl2;
  let intl3;
  let intl4;
  let isResolving;
  let items35;
  let items36;
  let items37;
  let items39;
  let items40;
  let obj16;
  let obj19;
  let obj21;
  let obj24;
  let obj25;
  let previewAppId;
  let projectGuildId;
  let prop;
  let prop1;
  let prop2;
  let setMode;
  let str5;
  let str6;
  let tmp10;
  let tmp114;
  let tmp36;
  let tmp37;
  let tmp40;
  let tmp41;
  let tmp4Result6;
  let tmp91;
  let tmp98Result;
  let tmp98Result1;
  let widgetApplicationId;
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  navigation = undefined;
  previewAppId = undefined;
  let data;
  let isLoading;
  let availability;
  setMode = undefined;
  let result1;
  let c18;
  let paneHidden;
  let closure_20;
  let closure_21;
  let active;
  let vibegrationsControlActive;
  let guild_id;
  let closure_25;
  let c26;
  let callback1;
  let num;
  let activeIndex;
  let setActiveIndex;
  let closure_31;
  projectGuildId = undefined;
  let callback3;
  let memo3;
  let callback4;
  let callback5;
  let ref;
  let callback6;
  let callback7;
  let setting;
  let callback8;
  let callback9;
  __initData2 = undefined;
  let callback10;
  let callback11;
  let stateFromStores3;
  let preview;
  let isVibegrationsProjectMuted;
  let memo4;
  let tmp = guildId;
  let tmp2 = navigation;
  let obj = guildId(navigation[41]);
  navigation = obj.useNavigation();
  const tmp4 = projectId;
  const bottom = projectId(navigation[40])().bottom;
  let tmp5 = projectGuildId(bottom);
  _slicedToArray = tmp5;
  let tmp6 = projectId(navigation[59])();
  react = tmp6;
  let obj2 = react;
  let tmp7 = _slicedToArray;
  [first, tmp10] = react.useState(0);
  let closure_6 = tmp10;
  let obj3 = guildId(navigation[61]);
  let obj4 = { onEnd: fn };
  fn = function p(height) {
    const obj = ReanimatedRexport;
    const runOnJSResult = obj.runOnJS(closure_6);
    runOnJSResult(Math.max(0, height.height - bottom));
  };
  let obj5 = { runOnJS: guildId(navigation[60]).runOnJS, setChatKeyboardCover: tmp10, safeAreaBottom: bottom };
  fn.__closure = obj5;
  fn.__workletHash = 4855281653615;
  fn.__initData = callback8;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj6 = guildId(navigation[30]);
  const items1 = [closure_21];
  const items2 = [projectId];
  const stateFromStores = obj6.useStateFromStores(items1, () => {
    let project = VibegrationsProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items2);
  const items3 = [closure_21];
  const items4 = [projectId];
  const obj7 = guildId(navigation[30]);
  const stateFromStoresObject = obj7.useStateFromStoresObject(items3, () => {
    let name;
    let prop;
    const project = VibegrationsProjectStore.getProject(projectId);
    const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop };
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
    return obj;
  }, items4);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  const items5 = [closure_21];
  const items6 = [guildId];
  const obj8 = guildId(navigation[30]);
  const stateFromStores1 = obj8.useStateFromStores(items5, () => {
    const guildProjectsFetchState = VibegrationsProjectStore.getGuildProjectsFetchState(guildId);
    return "unattempted" === guildProjectsFetchState || "loading" === guildProjectsFetchState;
  }, items6);
  let obj9 = guildId(navigation[30]);
  const items7 = [closure_21];
  const items8 = [projectId];
  const stateFromStores2 = obj9.useStateFromStores(items7, () => {
    let integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
    if (integrationStatus == null) {
      integrationStatus = null;
    }
    return integrationStatus;
  }, items8);
  let preview_ready;
  const tmp12 = closure_21;
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
  const useApplication = tmp(tmp2[29]).useApplication;
  tmp(tmp2[29]);
  let application = useApplication(previewAppId);
  data = application.data;
  isLoading = application.isLoading;
  const obj10 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === has_activity, installScope: install_scope, ownerAuthorizationRevoked: true === prop, mainCardOnly: true };
  has_activity = undefined;
  const useVibegrationsPreviewMode = tmp(tmp2[62]).useVibegrationsPreviewMode;
  tmp(tmp2[62]);
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  prop = undefined;
  if (stateFromStores2 != null) {
    prop = stateFromStores2.owner_authorization_revoked;
  }
  let tmp25 = true === preview_ready;
  const vibegrationsPreviewMode = useVibegrationsPreviewMode(obj10);
  availability = vibegrationsPreviewMode.availability;
  ({ activeMode, setMode } = vibegrationsPreviewMode);
  ({ widgetApplicationId, isResolving } = vibegrationsPreviewMode);
  const obj11 = { installScope: install_scope, previewReady: tmp25, integrationInstalled: prop1, botPermissionsChanged: true === prop2 };
  prop1 = undefined;
  const requiresPermissionReview = tmp(tmp2[63]).requiresPermissionReview;
  tmp(tmp2[63]);
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
  let result = requiresPermissionReview(obj11);
  const items9 = [projectId];
  const effect = obj2.useEffect(() => {
    const obj = VibegrationsActionCreators;
    const project = obj.getProject(projectId);
    project.catch(() => {

    });
  }, items9);
  const tmp32 = null != previewAppId && null != tmp4(tmp2[64])(previewAppId);
  const tmpResult12 = tmp(tmp2[65]);
  result1 = tmpResult12.vibegrationsInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items10 = [result1, previewAppId, data, stateFromStores, projectId];
  const callback = obj2.useCallback(bottom(function*(arg0, value) {
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
        return { value: "IconComponent", done: "IconComponent" };
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
                const obj3 = application(navigation[29]);
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
            return { value: "IconComponent", done: "IconComponent" };
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
          applicationId: closure_131_10,
          application,
          guildId: closure_131_17,
          onClose() {
                let obj = c0(navigation[65]);
                const result = obj.repairVibegrationsGuildHints(closure_1_7, closure_1_17);
                const cleanupPromise = result.finally(() => {
                  const obj = application(closure_2_2[54]);
                  return obj.getProject(closure_1_1);
                });
                cleanupPromise.catch(() => {

                });
              }
        };
        const tmp11 = application3(navigation[66]);
        application3 = closure_131_13;
        const openVibegrationsAppInstallModal = tmp11.openVibegrationsAppInstallModal;
        if (closure_131_13 == null) {
          application3 = application2.getApplication(closure_131_10);
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
  }), items10);
  let tmp7Result = tmp7(obj2.useState(true), 2);
  [tmp36, tmp37] = tmp7Result;
  c18 = tmp37;
  let tmp38 = null;
  const useState = obj2.useState;
  if (null != stateFromStores2) {
    tmp38 = tmp25;
  }
  [tmp40, tmp41] = tmp7(useState(tmp38), 2);
  tmp7(useState(tmp38), 2);
  const tmp7Result4 = tmp7(obj2.useState(projectId), 2);
  if (tmp7Result4[0] !== projectId) {
    tmp7Result4[1](projectId);
    tmp37(true);
    tmp41(null);
  }
  let tmp46 = tmp25 && null != previewAppId && !isResolving;
  if (tmp46) {
    tmp46 = availability.modes.length > 0 || result;
  }
  paneHidden = tmp46 && !tmp36;
  let hasItem = tmp46 && tmp32 && !result;
  if (hasItem) {
    let modes = availability.modes;
    const str = "frame";
    hasItem = modes.includes("frame");
  }
  let tmp49 = hasItem && paneHidden;
  if (tmp49) {
    let str2 = "frame";
    tmp49 = "frame" === activeMode;
  }
  closure_20 = tmp49;
  closure_21 = tmp50;
  const tmpResult13 = tmp(tmp2[60]);
  class Ae {
    constructor() {
      let paddingBottom = 0;
      if (paneHidden) {
        paddingBottom = 0;
        if (!closure_21) {
          const _Math = Math;
          paddingBottom = Math.max(closure_5.get(), bottom);
        }
      }
      return { paddingBottom };
    }
  }
  Ae.__closure = { previewShowing: paneHidden, botFaceShowing: paneHidden && "bot" === activeMode, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Ae.__workletHash = 582914375147;
  Ae.__initData = callback9;
  const animatedStyle = tmpResult13.useAnimatedStyle(Ae);
  const tmpResult14 = tmp(tmp2[60]);
  class Te {
    constructor() {
      let items;
      num = 0;
      if (!paneHidden) {
        const _Math = Math;
        num = -Math.max(0, closure_5.get() - bottom);
      }
      const obj = { transform: items };
      items = [{ translateY: num }];
      return obj;
    }
  }
  Te.__closure = { previewShowing: paneHidden, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Te.__workletHash = 14133653716002;
  Te.__initData = __initData2;
  const animatedStyle1 = tmpResult14.useAnimatedStyle(Te);
  active = result1(projectId).active;
  const tmpResult15 = tmp(tmp2[67]);
  vibegrationsControlActive = tmpResult15.useVibegrationsControlActive(projectId);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let application_id;
  const tmp4Result = tmp4(tmp2[68]);
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const tmp4ResultResult = tmp4Result(guild_id, application_id);
  closure_25 = tmp4ResultResult;
  const items11 = [tmp4ResultResult, guild_id];
  const memo = obj2.useMemo(() => {
    let fn = null;
    if (null != closure_25) {
      fn = () => {
        const obj = guildId(navigation[27]);
        return obj.transitionTo(vibegrationsControlActive.CHANNEL(guild_id, closure_1_25));
      };
    }
    return fn;
  }, items11);
  let intl = tmp(tmp2[32]).intl;
  const string = intl.string;
  const tmp4Result4 = tmp4(tmp2[33]);
  if (vibegrationsControlActive) {
    bfQ4Ki = tmp4Result4.bfQ4Ki;
  } else {
    bfQ4Ki = active ? tmp4Result4.rfNEHn : tmp4Result4.lXcEa2;
  }
  const stringResult = string(bfQ4Ki);
  c26 = stringResult;
  const items12 = [active, projectId];
  callback1 = obj2.useCallback(() => {
    const tmp = active;
    if (tmp) {
      authStore3(projectId);
    } else {
      availability(projectId);
    }
  }, items12);
  const items13 = [availability.modes];
  const items14 = [availability.modes, setMode];
  const memo1 = obj2.useMemo(() => {
    let intl;
    let modes;
    let obj = { id: "chat", label: intl.string(_modDef3723.kWtsyP), page: null };
    intl = intl12.intl;
    const items = [
      obj,
      ...modes.map((id) => {
        let obj2;
        const obj = { id, label: obj2.getPreviewModeLabel(id), page: null };
        obj2 = guildId(navigation[69]);
        return obj;
      })
    ];
    modes = availability.modes;
    return items;
  }, items13);
  const first1 = availability.modes[0];
  let tmp65 = null != stateFromStores2;
  const callback2 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined(null == availability.modes[arg0 - 1]);
    if (null != availability.modes[arg0 - 1]) {
      setMode(availability.modes[arg0 - 1]);
    }
  }, items14);
  if (tmp65) {
    tmp65 = tmp25 !== tmp40;
  }
  if (tmp65) {
    const tmp66 = false === tmp40 && tmp25 && null != first1 && !result;
    if (tmp66) {
      setMode(first1);
      tmp37(false);
    }
    tmp41(tmp25);
  }
  const width = tmp4(tmp2[70])().width;
  const obj12 = { items: memo1, pageWidth: width - 2 * callback3, onSetActiveIndex: callback2 };
  const tmpResult16 = tmp(tmp2[71]);
  const segmentedControlState = tmpResult16.useSegmentedControlState(obj12);
  num = 0;
  if (!tmp36) {
    num = 0;
    if (null != activeMode) {
      const modes1 = availability.modes;
      num = 1 + modes1.indexOf(activeMode);
    }
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items15 = [num, activeIndex, setActiveIndex];
  const effect1 = obj2.useEffect(() => {
    if (activeIndex.get() !== num) {
      setActiveIndex(tmp, false);
    }
  }, items15);
  const items16 = [previewAppId];
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => {
    const obj = guildId(navigation[72]);
    return obj.leaveVibegrationsPreviewFrame(previewAppId);
  }) : undefined, items16);
  const items17 = [guildId, stateFromStores2, isLoading];
  const memo2 = obj2.useMemo(() => {
    platform = { guildId, platform, busy: null == stateFromStores2 || isLoading };
    return platform;
  }, items17);
  const tmp74 = tmp4(tmp2[73])(projectId, memo2);
  closure_31 = tmp74;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items18 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: callback1(VibegrationsSettingsSheetDefault, obj2), key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items18);
  const items19 = [guildId, navigation];
  memo3 = obj2.useMemo(() => {
    const f145887 = (projectId) => {
      const obj = { projectId };
      return closure_1_2.push(constants2.CHAT, obj);
    };
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f145887(arg0);
      } else {
        const obj = guildId(navigation[27]);
        obj.transitionTo(vibegrationsControlActive.CHANNEL(arg1, constants.VIBEGRATIONS, arg0));
      }
    };
  }, items19);
  const items20 = [guildId, memo3, stateFromStores];
  callback4 = obj2.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      const obj = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: callback1(VibegrationsRemixSheetDefault, obj2) };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo3 };
      showActionSheet(obj);
    }
  }, items20);
  const items21 = [projectId];
  callback5 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsConnectToolSheet.VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY, content: callback1(VibegrationsConnectToolSheetDefault, obj2) };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items21);
  ref = obj2.useRef(false);
  const items22 = [projectId];
  callback6 = obj2.useCallback((sha) => {
    let intl;
    if (!ref.current) {
      tmp.current = true;
      let obj = { key: "VIBEGRATIONS_VERSION_RESTORING", content: intl.string(_modDef3723.pGFXZ0), IconComponent: UndoIcon.UndoIcon };
      let open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl12.intl;
      open(obj);
      const promise = closure_20(projectId, sha.sha);
      const nextPromise = promise.then(() => {
        let intl;
        const obj = { key: "VIBEGRATIONS_VERSION_RESTORED", content: intl.string(projectId(navigation[33]).u8g2Od), IconComponent: guildId(navigation[75]).UndoIcon };
        const open = projectId(navigation[24]).open;
        projectId(navigation[24]);
        intl = guildId(navigation[32]).intl;
        open(obj);
      }, () => {
        const presentError = guildId(navigation[76]).presentError;
        guildId(navigation[76]);
        const intl = guildId(navigation[32]).intl;
        presentError(intl.string(projectId(navigation[33]).q6iZ84));
      });
      nextPromise.finally(() => {
        ref.current = false;
      });
    }
  }, items22);
  const items23 = [callback6, projectId];
  callback7 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsVersionHistorySheet.VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY, content: callback1(VibegrationsVersionHistorySheetDefault, obj2) };
    obj2 = { projectId, onRestore: callback6 };
    showActionSheet(obj);
  }, items23);
  const DeveloperMode = tmp(tmp2[78]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items24 = [navigation, projectId];
  callback8 = obj2.useCallback(() => {
    const obj = { projectId };
    return navigation.push(memo3.DEBUG, obj);
  }, items24);
  let install_scope1;
  const useCallback = obj2.useCallback;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  const items25 = [install_scope1, projectId];
  callback9 = useCallback(() => {
    let install_scope;
    let obj2;
    let tmp2;
    let tmp3;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: VibegrationsRestorePointsSheet.VIBEGRATIONS_RESTORE_POINTS_SHEET_KEY, content: tmp2(tmp3, obj2) };
    obj2 = { projectId, installScope: install_scope };
    install_scope = undefined;
    tmp2 = closure_27;
    tmp3 = VibegrationsRestorePointsSheetDefault;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    showActionSheet(obj);
  }, items25);
  const tmp85 = closure_25(tmp4(tmp2[80])(previewAppId, c26));
  __initData2 = tmp85;
  const items26 = [previewAppId];
  callback10 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartVibegrationsAppFramesDefault(tmp);
    }
  }, items26);
  const items27 = [navigation, projectId];
  callback11 = obj2.useCallback(() => {
    paneHidden(projectId);
    navigation.goBack();
  }, items27);
  const items28 = [tmp12];
  const items29 = [projectId];
  const tmpResult17 = tmp(tmp2[30]);
  stateFromStores3 = tmpResult17.useStateFromStores(items28, () => VibegrationsProjectStore.isProjectDeleting(projectId), items29);
  const items30 = [stateFromStores3, callback11];
  const effect3 = obj2.useEffect(() => {
    const tmp = stateFromStores3;
    if (tmp) {
      callback11();
    }
  }, items30);
  const modes2 = availability.modes;
  const obj13 = { projectId, refreshApplicationId: tmp91 };
  tmp91 = null;
  const tmp4Result5 = tmp4(tmp2[82]);
  if (modes2.includes("widget")) {
    tmp91 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp91 = widgetApplicationId;
    }
  }
  const tmp4Result2Result = tmp4Result5(obj13);
  preview = tmp4Result2Result;
  const tmpResult18 = tmp(tmp2[46]);
  isVibegrationsProjectMuted = tmpResult18.useIsVibegrationsProjectMuted(projectId);
  const items31 = [setting, guildId, isVibegrationsProjectMuted, callback11, callback5, callback8, callback4, callback3, callback9, callback7, callback10, tmp85, tmp4Result2Result, stateFromStores, tmp74];
  memo4 = obj2.useMemo(() => {
    let intl;
    let intl2;
    let str2;
    let tmp16;
    let tmp24;
    const items = [];
    if (null != disabledReason) {
      const push = items.push;
      const obj = {
        label: tmp.label,
        IconComponent: UploadIcon.UploadIcon,
        action() {
            if (null != disabledReason.disabledReason) {
              const obj3 = { key: "VIBEGRATIONS_PUBLISH_NEEDS_PERMISSIONS", content: disabledReason.disabledReason };
              const obj2 = projectId(navigation[24]);
              obj2.open(obj3);
            } else if (!disabledReason.disabled) {
              disabledReason.run("header");
            }
          }
      };
      push(obj);
    }
    let obj2 = { label: intl.string(_modDef3723.cWmjzs), IconComponent: SettingsIcon.SettingsIcon, action: callback3 };
    const push2 = items.push;
    intl = intl12.intl;
    push2(obj2);
    const tmp7 = setting;
    if (tmp7) {
      let obj3 = { label: intl2.string(_modDef3723.KampIf), IconComponent: BugIcon.BugIcon, action: callback8 };
      const push3 = items.push;
      intl2 = intl12.intl;
      push3(obj3);
    }
    if (null != stateFromStores) {
      const obj5 = { project: tmp15, guildId, muted: isVibegrationsProjectMuted, onRemix: callback4, onConnectTool: callback5, onVersionHistory: callback7, onRestorePoints: callback9, onRefresh: tmp16, onClose: callback11, preview };
      tmp16 = undefined;
      const vibegrationsProjectActions = vibegrationsProjectActions2.vibegrationsProjectActions;
      vibegrationsProjectActions2;
      if (closure_43) {
        tmp16 = callback10;
      }
      const result = vibegrationsProjectActions(obj5);
      const iter = result[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj9 = { label: null, IconComponent: null, variant: str2, action: tmp24.action };
        ({ label: obj4.label, IconComponent: obj4.IconComponent } = nextResult);
        str2 = undefined;
        tmp24 = nextResult;
        let push4 = items.push;
        if (true === nextResult.destructive) {
          str2 = "destructive";
        }
        let push4Result = push4(obj9);
        continue;
      }
    }
    return items;
  }, items31);
  const items32 = [vibegrationsControlActive, active, stringResult, tmp49, callback1, navigation, memo4, projectExists, projectName, stateFromStores1, tmp5];
  const effect4 = obj2.useEffect(() => {
    let accessibilityLabel;
    let disabled;
    let headerActions;
    let onPress;
    let tmp = projectName;
    if (projectName == null) {
      let tmp2 = guildId;
      let tmp3 = navigation;
      let intl = guildId(navigation[32]).intl;
      const tmp5 = projectExists;
      if (!tmp5) {
        let Xmvb23;
        const tmp6 = stateFromStores1;
        if (!tmp6) {
          let tmp7 = projectId;
          Xmvb23 = projectId(tmp3[33]).F2dRba;
        }
        tmp = tmp4(Xmvb23);
      }
      Xmvb23 = projectId(tmp3[33]).Xmvb23;
    }
    const title = tmp;
    let obj = {
      headerTitle() {
        const obj = { title };
        return onPress(NavigatorHeader2.NavigatorHeader, obj);
      },
      headerRight() {
        let obj3;
        let tmp = null;
        if (projectExists) {
          let obj = { style: headerActions.headerActions, children: items };
          let tmp7Result = null;
          const tmp2 = num;
          const tmp3 = projectName;
          if (closure_1_20) {
            let ExperimentalDirectSelectIcon;
            const tmp10 = projectId(navigation[37]);
            const tmp7 = callback1;
            const tmp9 = navigation;
            if (active) {
              ExperimentalDirectSelectIcon = setActiveIndex;
            } else {
              ExperimentalDirectSelectIcon = guildId(tmp9[19]).ExperimentalDirectSelectIcon;
            }
            const obj2 = { IconComponent: ExperimentalDirectSelectIcon, onPress, accessibilityLabel, accessibilityState: obj3, disabled };
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
                const obj = { ref, IconComponent: title(closure_1_2[38]).MoreHorizontalIcon, onPress, accessibilityLabel: intl.string(title(closure_1_2[32]).t["UKOtz+"]), accessibilityActions, onAccessibilityAction };
                const tmp = closure_1_1(closure_1_2[37]);
                intl = title(closure_1_2[32]).intl;
                return closure_1_27(tmp, obj);
              }
          };
          items[1] = callback1(guildId(navigation[87]).ContextMenu, obj4);
          tmp = tmp2(tmp3, obj);
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items32);
  const items33 = [guildId, projectId];
  const effect5 = obj2.useEffect(() => {
    let obj = VibegrationsActionCreators;
    const result = obj.setSelectedProjectForGuild(guildId, projectId);
    return () => {
      const obj = guildId(navigation[54]);
      return obj.setSelectedProjectForGuild(closure_1_0, null);
    };
  }, items33);
  const items34 = [projectId];
  const effect6 = obj2.useEffect(() => () => projectId(navigation[88])(closure_1_1), items34);
  if (projectExists) {
    const obj14 = { style: items35, children: items36 };
    items35 = [tmp5.contentBare, animatedStyle];
    let tmp105 = null;
    const View = tmp4(tmp2[60]).View;
    if (tmp46) {
      const obj15 = { style: tmp5.segments, children: callback1(tmp(tmp2[89]).SegmentedControl, obj16) };
      obj16 = { state: segmentedControlState, variant: "experimental_Small" };
      tmp105 = callback1(projectName, obj15);
    }
    items36 = [tmp105, ];
    let tmp110Result = null;
    const obj17 = { style: tmp5.panes, children: items37 };
    if (hasItem) {
      tmp110Result = null;
      if (null != previewAppId) {
        const obj18 = { style: tmp49 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: str5, accessibilityElementsHidden: !tmp49, importantForAccessibility: str6, children: callback1(tmp(tmp2[72]).PreviewFrame, obj19) };
        str5 = "none";
        if (tmp49) {
          str5 = "auto";
        }
        str6 = "no-hide-descendants";
        if (tmp49) {
          str6 = "auto";
        }
        obj19 = { applicationId: previewAppId, projectId, visible: tmp49, onOpenPublishedApp: memo };
        tmp110Result = tmp110(tmp108, obj18);
      }
    }
    items37 = [tmp110Result, , ];
    let tmp112Result = null;
    if (paneHidden) {
      tmp112Result = null;
      if (null != previewAppId) {
        tmp112Result = null;
        if (!tmp49) {
          const obj20 = { style: tmp5.pane, children: callback1(tmp4Result6, obj21) };
          obj21 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, widgetApplicationId, frameHostAvailable: tmp32, permissionsGate: tmp114 };
          tmp114 = null;
          tmp4Result6 = tmp4(tmp2[72]);
          if (result) {
            tmp114 = { onReviewPermissions: callback, loading: isLoading };
            const obj22 = { onReviewPermissions: callback, loading: isLoading };
          }
          tmp112Result = tmp112(tmp108, obj20);
        }
      }
    }
    items37[1] = tmp112Result;
    const items38 = [tmp5.chatPane, , ];
    const View2 = tmp4(tmp2[60]).View;
    if (paneHidden) {
      paneHidden = tmp5.paneHidden;
    }
    items38[1] = paneHidden;
    items38[2] = animatedStyle1;
    const obj23 = { style: items38, children: callback1(Provider, obj24) };
    obj24 = { value: memo2, children: callback1(tmp4(tmp2[90]), obj25) };
    Provider = tmp(tmp2[73]).VibegrationsPublishActionContext.Provider;
    obj25 = { projectId, transcriptTopInset: first, onRestoreVersion: callback6 };
    items37[2] = callback1(View2, obj23);
    items36[1] = num(projectName, obj17);
    tmp98Result1 = tmp104(View, obj14);
  } else {
    const obj26 = { style: items39, children: tmp98Result };
    items39 = [, ];
    ({ content: arr37[0], centered: arr37[1] } = tmp5);
    if (stateFromStores1) {
      tmp98Result = tmp98(closure_6, {});
    } else {
      const obj27 = { style: tmp5.listError, children: items40 };
      const obj28 = { variant: "heading-lg/semibold", color: "text-default", children: intl2.string(tmp4(tmp2[33]).F2dRba) };
      const Text = tmp(tmp2[52]).Text;
      intl2 = tmp(tmp2[32]).intl;
      items40 = [callback1(Text, obj28), , ];
      const obj29 = { variant: "text-md/normal", color: "text-muted", children: intl3.string(tmp4(tmp2[33]).GnEJ3o) };
      const Text2 = tmp(tmp2[52]).Text;
      intl3 = tmp(tmp2[32]).intl;
      items40[1] = callback1(Text2, obj29);
      const obj30 = {
        variant: "secondary",
        size: "sm",
        text: intl4.string(tmp4(tmp2[33])["42EdIV"]),
        onPress() {
              const obj = VibegrationsActionCreators;
              return obj.listProjects(guildId);
            }
      };
      const Button = tmp(tmp2[53]).Button;
      intl4 = tmp(tmp2[32]).intl;
      items40[2] = callback1(Button, obj30);
      tmp98Result = num(tmp99, obj27);
    }
    tmp98Result1 = tmp98(tmp99, obj26);
  }
  return tmp98Result1;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_45 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let openedProjectIdRef;
  let obj = projectId(openedProjectIdRef[18]);
  const cResult = obj.c(6);
  projectId = projectId.projectId;
  const sceneProjectId = projectId.sceneProjectId;
  openedProjectIdRef = projectId.openedProjectIdRef;
  const obj2 = projectId(openedProjectIdRef[41]);
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
  const fn = function t() {
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
  let obj = projectId(openedProjectIdRef[41]);
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
  let obj = guildId(stateFromStores[18]);
  const cResult = obj.c(56);
  guildId = guildId.guildId;
  let obj2 = guildId(stateFromStores[41]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [VibegrationsBuilderRouteStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function a() {
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
  const tmpResult = tmp(tmp2[30]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    const fn2 = function b() {
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
  const tmpResult5 = tmp(tmp2[30]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] !== guildId) {
    let obj3 = { guildId, location: "VibegrationsStandaloneScreen" };
    cResult[8] = guildId;
    cResult[9] = obj3;
    tmp15 = obj3;
  } else {
    tmp15 = cResult[9];
  }
  const tmpResult6 = tmp(tmp2[91]);
  const isVibegrationsGuildEnabled = tmpResult6.useIsVibegrationsGuildEnabled(tmp15);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildMemberStore];
    cResult[10] = items4;
    tmp17 = items4;
  } else {
    tmp17 = cResult[10];
  }
  if (cResult[11] !== guildId) {
    class P {
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
    cResult[13] = P;
    tmp20 = P;
    tmp19 = items5;
  } else {
    class P {
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
  const tmpResult7 = tmp(tmp2[30]);
  const stateFromStoresArray = tmpResult7.useStateFromStoresArray(tmp17, tmp20, tmp19);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
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
    class P {
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
    class R {
      constructor() {
        const guild = GuildStore.getGuild(guildId);
        const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
        return canResult;
      }
    }
    const items7 = [guildId];
    cResult[15] = guildId;
    cResult[16] = R;
    cResult[17] = items7;
    tmp25 = items7;
    tmp24 = R;
  } else {
    class R {
      constructor() {
        const guild = GuildStore.getGuild(guildId);
        const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
        return canResult;
      }
    }
    tmp25 = cResult[17];
  }
  const tmpResult8 = tmp(tmp2[30]);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp22, tmp24, tmp25);
  if (cResult[18] === guildId) {
    class R {
      constructor() {
        const guild = GuildStore.getGuild(guildId);
        const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
        return canResult;
      }
    }
    if (cResult[21] === stateFromStores2) {
      class R {
        constructor() {
          const guild = GuildStore.getGuild(guildId);
          const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
          return canResult;
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
  class B {
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
  cResult[20] = B;
}) : ((guildId) => {
  let intl;
  let obj9;
  let openedProjectIdRef;
  guildId = guildId.guildId;
  let stateFromStores;
  react = undefined;
  let obj = guildId(stateFromStores[41]);
  navigation = obj.useNavigation();
  let obj2 = guildId(stateFromStores[30]);
  let items = [VibegrationsBuilderRouteStore];
  const items1 = [guildId];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const routedProjectId = VibegrationsBuilderRouteStore.getRoutedProjectId(guildId);
    return routedProjectId;
  }, items1);
  let obj3 = guildId(stateFromStores[30]);
  const items2 = [GuildStore];
  const items3 = [guildId];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(guildId), items3);
  const obj4 = guildId(stateFromStores[91]);
  const isVibegrationsGuildEnabled = obj4.useIsVibegrationsGuildEnabled({ guildId, location: "VibegrationsStandaloneScreen" });
  const items4 = [GuildMemberStore];
  const items5 = [guildId];
  const obj5 = guildId(stateFromStores[30]);
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
  const obj6 = guildId(stateFromStores[30]);
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
      const obj = { title: intl.string(navigation(stateFromStores[33]).Xmvb23) };
      const NavigatorHeader = guildId(stateFromStores[86]).NavigatorHeader;
      intl = guildId(stateFromStores[32]).intl;
      return closure_1_27(NavigatorHeader, obj);
    },
    render() {
      let items;
      const obj = { children: items };
      const obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
      items = [closure_27(closure_45, obj2), ];
      const obj3 = { guildId };
      items[1] = closure_27(closure_37, obj3);
      return closure_28(set, obj);
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
      items[0] = closure_27(closure_45, obj2);
      const obj3 = { guildId, projectId };
      items[1] = closure_27(closure_44, obj3);
      return closure_28(set, obj);
    }
  };
  obj7[constants2.DEBUG] = {
    headerTitle() {
      let intl;
      const obj = { title: intl.string(navigation(stateFromStores[33]).KampIf) };
      const NavigatorHeader = guildId(stateFromStores[86]).NavigatorHeader;
      intl = guildId(stateFromStores[32]).intl;
      return closure_1_27(NavigatorHeader, obj);
    },
    render(projectId) {
      let items;
      projectId = projectId.projectId;
      const obj = { children: items };
      items = [, ];
      const obj2 = { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef };
      items[0] = closure_27(closure_45, obj2);
      items[1] = closure_27(VibegrationsDebugSceneDefault, { projectId });
      return closure_28(set, obj);
    }
  };
  obj9 = guildId(stateFromStores[86]);
  const obj10 = {
    screens: obj7,
    initialRouteStack: isVibegrationsGuildEnabled(react.useState(() => {
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
    headerBackTitle: intl.string(navigation(stateFromStores[33]).Xmvb23)
  };
  const Navigator = guildId(stateFromStores[93]).Navigator;
  intl = guildId(stateFromStores[32]).intl;
  return closure_27(Navigator, obj10);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default tmp8;
