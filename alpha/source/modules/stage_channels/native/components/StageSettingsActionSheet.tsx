// Module ID: 7694
// Function ID: 7695
// Name: StageSettingsActionSheet
// Dependencies: [19, 17, 6041, 2063, 4707, 2068, 5888, 1085, 21, 5090, 587, 5054, 558, 576, 504, 2072, 5954, 7478, 7084, 7695, 9648, 8555, 1126, 1200, 8536, 13409, 13410, 13411, 13412, 6885, 2]

// Module 7694 (StageSettingsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5888 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 7478 */;
import ReportModals from "ReportModals" /* 7695 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 9648 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import StageInstanceStore from "StageInstanceStore" /* 2068 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let closure_12;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
const STAGE_SETTINGS_SHEET_KEY = StageChannelsConstants.STAGE_SETTINGS_SHEET_KEY;
({ ChannelSettingsSections: c10, UserSettingsSections: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginTop: 8 }, icon: obj2, warning: obj3 };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_14 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function StageSettingsActionSheet(channelId) {
  let Icon;
  let first;
  let obj3;
  let stateFromStores;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp7;
  let tmp9;
  const tmp = channelId;
  let obj = channelId(stateFromStores[13]);
  const cResult = obj.c(59);
  channelId = channelId.channelId;
  const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function f() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(stateFromStores[14]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function y() {
      return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores);
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult5 = tmp(stateFromStores[14]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp9, tmp11);
  const tmpResult6 = tmp(stateFromStores[16]);
  const isStageSpeakingDisabledForCurrentUser = tmpResult6.useIsStageSpeakingDisabledForCurrentUser();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelRTCStore];
    cResult[6] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== channelId) {
    class A {
      constructor() {
        return ChannelRTCStore.getSelectedParticipant(channelId);
      }
    }
    const items3 = [channelId];
    cResult[7] = channelId;
    cResult[8] = A;
    cResult[9] = items3;
    tmp17 = items3;
    tmp16 = A;
  } else {
    class A {
      constructor() {
        return ChannelRTCStore.getSelectedParticipant(channelId);
      }
    }
    tmp17 = cResult[9];
  }
  const tmpResult7 = tmp(stateFromStores[14]);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp14, tmp16, tmp17);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return ChannelRTCStore.getSelectedParticipant(channelId);
      }
    }
    const items4 = [StageInstanceStore];
    cResult[10] = items4;
    tmp19 = items4;
  } else {
    class A {
      constructor() {
        return ChannelRTCStore.getSelectedParticipant(channelId);
      }
    }
  }
  if (cResult[11] !== channelId) {
    class D {
      constructor() {
        return StageInstanceStore.getStageInstanceByChannel(channelId);
      }
    }
    cResult[11] = channelId;
    cResult[12] = D;
    tmp20 = D;
  } else {
    class D {
      constructor() {
        return StageInstanceStore.getStageInstanceByChannel(channelId);
      }
    }
  }
  const tmpResult8 = tmp(stateFromStores[14]);
  const stateFromStores3 = tmpResult8.useStateFromStores(tmp19, tmp20);
  if (cResult[13] !== stateFromStores) {
    class V {
      constructor() {
        if (null == stateFromStores) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
        }
      }
    }
    const items5 = [stateFromStores];
    cResult[13] = stateFromStores;
    cResult[14] = V;
    cResult[15] = items5;
    tmp23 = items5;
    tmp22 = V;
  } else {
    class V {
      constructor() {
        if (null == stateFromStores) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
        }
      }
    }
    tmp23 = cResult[15];
  }
  const effect = react.useEffect(tmp22, tmp23);
  if (null == stateFromStores) {
    class V {
      constructor() {
        if (null == stateFromStores) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
        }
      }
    }
  } else {
    class V {
      constructor() {
        if (null == stateFromStores) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor() {
          if (null == stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
      }
      cResult[18] = tmp27;
    } else {
      class V {
        constructor() {
          if (null == stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
      }
    }
    if (cResult[19] !== stateFromStores) {
      class V {
        constructor() {
          if (null == stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
      }
      cResult[19] = stateFromStores;
      cResult[20] = tmp29;
    } else {
      class V {
        constructor() {
          if (null == stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
      }
    }
    if (cResult[21] !== stateFromStores) {
      class V {
        constructor() {
          if (null == stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
      }
      cResult[21] = stateFromStores;
      cResult[22] = tmp31;
    } else {
      class V {
        constructor() {
          if (null == stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
      }
    }
    if (cResult[23] !== onOpenRTCDebugOverlay) {
      class V {
        constructor() {
          if (null == stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
      }
      cResult[23] = onOpenRTCDebugOverlay;
      cResult[24] = tmp33;
    } else {
      class V {
        constructor() {
          if (null == stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
      }
    }
    if (cResult[25] === stateFromStores1) {
      class V {
        constructor() {
          if (null == stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
      }
    }
    let tmp36Result = null;
    if (stateFromStores1) {
      class V {
        constructor() {
          if (null == stateFromStores) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
      }
      if (null == stateFromStores2) {
        class V {
          constructor() {
            if (null == stateFromStores) {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
          }
        }
        if (!isStageSpeakingDisabledForCurrentUser) {
          let stringResult;
          class V {
            constructor() {
              if (null == stateFromStores) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
              }
            }
          }
          const FormRow = tmp(tmp2[21]).FormRow;
          if (null != stateFromStores3) {
            class V {
              constructor() {
                if (null == stateFromStores) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
                }
              }
            }
            stringResult = obj8.string(tmp(tmp2[22]).t["5BKP4y"]);
          } else {
            class V {
              constructor() {
                if (null == stateFromStores) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
                }
              }
            }
            stringResult = obj7.string(tmp(tmp2[22]).t.s8mM8A);
          }
          let obj2 = { label: stringResult, leading: tmp36(Icon, obj3), onPress: tmp25 };
          obj3 = { source: onOpenRTCDebugOverlay(tmp2[24]), color: tmp4.icon.color };
          Icon = tmp(tmp2[23]).Icon;
          tmp36Result = tmp36(FormRow, obj2);
        }
      }
    }
    cResult[25] = stateFromStores1;
    cResult[26] = tmp25;
    cResult[27] = stateFromStores2;
    cResult[28] = isStageSpeakingDisabledForCurrentUser;
    cResult[29] = stateFromStores3;
    cResult[30] = tmp4.icon.color;
    cResult[31] = tmp36Result;
  }
}) : (function StageSettingsActionSheet(channelId) {
  let FormLabel;
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let Icon5;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items6;
  let obj10;
  let obj12;
  let obj14;
  let obj17;
  let obj18;
  let obj8;
  channelId = channelId.channelId;
  const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
  let stateFromStores;
  const tmp = closure_14();
  let obj = channelId(stateFromStores[14]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(stateFromStores[14]);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores));
  let obj3 = channelId(stateFromStores[16]);
  const isStageSpeakingDisabledForCurrentUser = obj3.useIsStageSpeakingDisabledForCurrentUser();
  const items2 = [ChannelRTCStore];
  const items3 = [channelId];
  const obj4 = channelId(stateFromStores[14]);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipant(channelId), items3);
  const items4 = [StageInstanceStore];
  const items5 = [stateFromStores];
  const obj5 = channelId(stateFromStores[14]);
  const stateFromStores3 = obj5.useStateFromStores(items4, () => StageInstanceStore.getStageInstanceByChannel(channelId));
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
    }
  }, items5);
  let tmp11Result4 = null;
  if (null != stateFromStores) {
    let tmp11Result = null;
    const obj6 = { style: tmp.container, children: items6 };
    const ActionSheet = tmp2(tmp3[29]).ActionSheet;
    const tmp12 = closure_13;
    const tmp13 = View;
    if (stateFromStores1) {
      tmp11Result = null;
      if (null == stateFromStores2) {
        tmp11Result = null;
        if (!isStageSpeakingDisabledForCurrentUser) {
          let stringResult;
          const FormRow = tmp2(tmp3[21]).FormRow;
          if (null != stateFromStores3) {
            const intl2 = tmp2(tmp3[22]).intl;
            stringResult = intl2.string(tmp2(tmp3[22]).t["5BKP4y"]);
          } else {
            const intl = tmp2(tmp3[22]).intl;
            stringResult = intl.string(tmp2(tmp3[22]).t.s8mM8A);
          }
          const obj7 = {
            label: stringResult,
            leading: closure_12(Icon, obj8),
            onPress: function handleEditStagePress() {
                      if (null != stateFromStores) {
                        const obj = StageChannelActionCreatorExtras;
                        const result = obj.openStageChannelSettings(tmp);
                        const obj2 = ActionSheetActionCreatorsDefault;
                        obj2.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
                      }
                    }
          };
          obj8 = { source: onOpenRTCDebugOverlay(stateFromStores[24]), color: tmp.icon.color };
          Icon = tmp2(tmp3[23]).Icon;
          tmp11Result = tmp11(FormRow, obj7);
        }
      }
    }
    items6 = [tmp11Result, , , , ];
    const obj9 = {
      label: intl3.string(channelId(stateFromStores[22]).t.dsXapM),
      leading: closure_12(Icon2, obj10),
      onPress: function handleVoiceSettingsPress() {
          const obj = channelId(stateFromStores[18]);
          const obj2 = { screen: constants.VOICE };
          obj.openUserSettings(obj2);
          const obj3 = onOpenRTCDebugOverlay(stateFromStores[11]);
          obj3.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
        }
    };
    const FormRow2 = tmp2(tmp3[21]).FormRow;
    intl3 = tmp2(tmp3[22]).intl;
    obj10 = { source: onOpenRTCDebugOverlay(stateFromStores[25]), color: tmp.icon.color };
    Icon2 = tmp2(tmp3[23]).Icon;
    items6[1] = closure_12(FormRow2, obj9);
    const obj11 = {
      label: intl4.string(channelId(stateFromStores[22]).t.h850Ss),
      leading: closure_12(Icon3, obj12),
      onPress: function handleNotificationSettingsPress() {
          if (null != stateFromStores) {
            const obj = ChannelSettingsActionCreatorsDefault;
            obj.setSection(constants.NOTIFICATIONS);
            const obj2 = ChannelSettingsActionCreatorsDefault;
            obj2.open(tmp.id);
            const obj3 = ActionSheetActionCreatorsDefault;
            obj3.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
    };
    const FormRow3 = tmp2(tmp3[21]).FormRow;
    intl4 = tmp2(tmp3[22]).intl;
    obj12 = { source: onOpenRTCDebugOverlay(stateFromStores[26]), color: tmp.icon.color };
    Icon3 = tmp2(tmp3[23]).Icon;
    items6[2] = closure_12(FormRow3, obj11);
    let tmp11Result3 = null != onOpenRTCDebugOverlay;
    if (tmp11Result3) {
      const obj13 = {
        label: intl5.string(channelId(stateFromStores[22]).t.X8bCMe),
        leading: closure_12(Icon4, obj14),
        onPress: function handleRtcDebugPress() {
              if (onOpenRTCDebugOverlay != null) {
                tmp();
              }
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
      };
      const FormRow4 = tmp2(tmp3[21]).FormRow;
      intl5 = tmp2(tmp3[22]).intl;
      obj14 = { source: onOpenRTCDebugOverlay(stateFromStores[27]), color: tmp.icon.color };
      Icon4 = tmp2(tmp3[23]).Icon;
      tmp11Result3 = tmp11(FormRow4, obj13);
    }
    items6[3] = tmp11Result3;
    const obj15 = { keyboardShouldPersistTaps: "always", children: tmp12(tmp13, obj6) };
    const obj16 = {
      label: closure_12(FormLabel, obj17),
      leading: closure_12(Icon5, obj18),
      onPress: function handleReportStage() {
          if (null != stateFromStores) {
            const obj = ReportModals;
            const result = obj.showReportModalForStageChannel(tmp);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
    };
    const FormRow5 = tmp2(tmp3[21]).FormRow;
    obj17 = { text: intl6.string(channelId(stateFromStores[22]).t["+78Pfm"]), style: tmp.warning };
    FormLabel = tmp2(tmp3[21]).FormLabel;
    intl6 = tmp2(tmp3[22]).intl;
    obj18 = { color: onOpenRTCDebugOverlay(stateFromStores[10]).unsafe_rawColors.RED_400, source: onOpenRTCDebugOverlay(stateFromStores[28]) };
    Icon5 = tmp2(tmp3[23]).Icon;
    items6[4] = closure_12(FormRow5, obj16);
    tmp11Result4 = tmp11(ActionSheet, obj15);
  }
  return tmp11Result4;
});
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSettingsActionSheet.tsx");

export default tmp5;
