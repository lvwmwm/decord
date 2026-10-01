// Module ID: 8081
// Function ID: 8082
// Name: StageSettingsActionSheet
// Dependencies: [19, 17, 4852, 2045, 4469, 2050, 5726, 1074, 21, 4836, 576, 4800, 504, 2053, 5734, 6618, 8053, 1115, 1177, 8082, 7842, 8083, 6800, 8084, 8085, 8087, 8088, 8089, 2]
// Exports: default

// Module 8081 (StageSettingsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2053 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5726 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 7842 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8085 */;
import ReportModals from "ReportModals" /* 8089 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSettingsActionSheet.tsx");

export default function StageSettingsActionSheet(channelId) {
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
  let obj = channelId(stateFromStores[12]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(stateFromStores[12]);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores));
  let obj3 = channelId(stateFromStores[14]);
  const isStageSpeakingDisabledForCurrentUser = obj3.useIsStageSpeakingDisabledForCurrentUser();
  const items2 = [ChannelRTCStore];
  const items3 = [channelId];
  const obj4 = channelId(stateFromStores[12]);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipant(channelId), items3);
  const items4 = [StageInstanceStore];
  const items5 = [stateFromStores];
  const obj5 = channelId(stateFromStores[12]);
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
    const ActionSheet = tmp2(tmp3[15]).ActionSheet;
    const tmp12 = closure_13;
    const tmp13 = View;
    if (stateFromStores1) {
      tmp11Result = null;
      if (null == stateFromStores2) {
        tmp11Result = null;
        if (!isStageSpeakingDisabledForCurrentUser) {
          let stringResult;
          const FormRow = tmp2(tmp3[16]).FormRow;
          if (null != stateFromStores3) {
            const intl2 = tmp2(tmp3[17]).intl;
            stringResult = intl2.string(tmp2(tmp3[17]).t["5BKP4y"]);
          } else {
            const intl = tmp2(tmp3[17]).intl;
            stringResult = intl.string(tmp2(tmp3[17]).t.s8mM8A);
          }
          const obj7 = {
            label: stringResult,
            leading: closure_12(Icon, obj8),
            onPress() {
                      if (null != stateFromStores) {
                        const obj = StageChannelActionCreatorExtras;
                        const result = obj.openStageChannelSettings(tmp);
                        const obj2 = ActionSheetActionCreatorsDefault;
                        obj2.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
                      }
                    }
          };
          obj8 = { source: onOpenRTCDebugOverlay(stateFromStores[19]), color: tmp.icon.color };
          Icon = tmp2(tmp3[18]).Icon;
          tmp11Result = tmp11(FormRow, obj7);
        }
      }
    }
    items6 = [tmp11Result, , , , ];
    const obj9 = {
      label: intl3.string(channelId(stateFromStores[17]).t.dsXapM),
      leading: closure_12(Icon2, obj10),
      onPress() {
          const obj = channelId(stateFromStores[22]);
          const obj2 = { screen: constants.VOICE };
          obj.openUserSettings(obj2);
          const obj3 = onOpenRTCDebugOverlay(stateFromStores[11]);
          obj3.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
        }
    };
    const FormRow2 = tmp2(tmp3[16]).FormRow;
    intl3 = tmp2(tmp3[17]).intl;
    obj10 = { source: onOpenRTCDebugOverlay(stateFromStores[21]), color: tmp.icon.color };
    Icon2 = tmp2(tmp3[18]).Icon;
    items6[1] = closure_12(FormRow2, obj9);
    const obj11 = {
      label: intl4.string(channelId(stateFromStores[17]).t.h850Ss),
      leading: closure_12(Icon3, obj12),
      onPress() {
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
    const FormRow3 = tmp2(tmp3[16]).FormRow;
    intl4 = tmp2(tmp3[17]).intl;
    obj12 = { source: onOpenRTCDebugOverlay(stateFromStores[23]), color: tmp.icon.color };
    Icon3 = tmp2(tmp3[18]).Icon;
    items6[2] = closure_12(FormRow3, obj11);
    let tmp11Result3 = null != onOpenRTCDebugOverlay;
    if (tmp11Result3) {
      const obj13 = {
        label: intl5.string(channelId(stateFromStores[17]).t.X8bCMe),
        leading: closure_12(Icon4, obj14),
        onPress() {
              if (onOpenRTCDebugOverlay != null) {
                tmp();
              }
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
      };
      const FormRow4 = tmp2(tmp3[16]).FormRow;
      intl5 = tmp2(tmp3[17]).intl;
      obj14 = { source: onOpenRTCDebugOverlay(stateFromStores[25]), color: tmp.icon.color };
      Icon4 = tmp2(tmp3[18]).Icon;
      tmp11Result3 = tmp11(FormRow4, obj13);
    }
    items6[3] = tmp11Result3;
    const obj15 = { keyboardShouldPersistTaps: "always", children: tmp12(tmp13, obj6) };
    const obj16 = {
      label: closure_12(FormLabel, obj17),
      leading: closure_12(Icon5, obj18),
      onPress() {
          if (null != stateFromStores) {
            const obj = ReportModals;
            const result = obj.showReportModalForStageChannel(tmp);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
        }
    };
    const FormRow5 = tmp2(tmp3[16]).FormRow;
    obj17 = { text: intl6.string(channelId(stateFromStores[17]).t["+78Pfm"]), style: tmp.warning };
    FormLabel = tmp2(tmp3[16]).FormLabel;
    intl6 = tmp2(tmp3[17]).intl;
    obj18 = { color: onOpenRTCDebugOverlay(stateFromStores[10]).unsafe_rawColors.RED_400, source: onOpenRTCDebugOverlay(stateFromStores[26]) };
    Icon5 = tmp2(tmp3[18]).Icon;
    items6[4] = closure_12(FormRow5, obj16);
    tmp11Result4 = tmp11(ActionSheet, obj15);
  }
  return tmp11Result4;
};
