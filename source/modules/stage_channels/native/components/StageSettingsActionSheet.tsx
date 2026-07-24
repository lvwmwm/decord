// Module ID: 7681
// Function ID: 61060
// Name: close
// Dependencies: [31, 27, 4143, 1348, 3758, 1353, 4947, 653, 33, 4130, 689, 4098, 566, 1356, 4955, 5498, 7636, 1212, 1273, 7682, 7558, 7683, 5796, 7684, 7685, 7687, 7688, 7689, 2]
// Exports: default

// Module 7681 (close)
import result from "result";
import { View } from "_submitHamReportForFirstDM";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { STAGE_SETTINGS_SHEET_KEY } from "MAX_STAGE_TOPIC_LENGTH";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function close() {
  importDefault(4098).hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
}
({ ChannelSettingsSections: closure_10, UserSettingsSections: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginTop: 8 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.icon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.warning = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/components/StageSettingsActionSheet.tsx");

export default function StageSettingsActionSheet(channelId) {
  channelId = channelId.channelId;
  const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channelId(stateFromStores[12]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(channelId));
  let obj1 = channelId(stateFromStores[12]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.can(channelId(stateFromStores[13]).MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores));
  let obj2 = channelId(stateFromStores[14]);
  const isStageSpeakingDisabledForCurrentUser = obj2.useIsStageSpeakingDisabledForCurrentUser();
  let obj3 = channelId(stateFromStores[12]);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [channelId];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => outer1_5.getSelectedParticipant(channelId), items3);
  let obj4 = channelId(stateFromStores[12]);
  const items4 = [closure_8];
  const items5 = [stateFromStores];
  const stateFromStores3 = obj4.useStateFromStores(items4, () => outer1_8.getStageInstanceByChannel(channelId));
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      outer1_15();
    }
  }, items5);
  let tmp9Result = null;
  if (null != stateFromStores) {
    obj = { keyboardShouldPersistTaps: "always" };
    obj = { style: tmp.container };
    let tmp14 = null;
    if (stateFromStores1) {
      tmp14 = null;
      if (null == stateFromStores2) {
        tmp14 = null;
        if (!isStageSpeakingDisabledForCurrentUser) {
          obj1 = {};
          if (null != stateFromStores3) {
            const intl2 = channelId(stateFromStores[17]).intl;
            let stringResult = intl2.string(channelId(stateFromStores[17]).t["5BKP4y"]);
          } else {
            const intl = channelId(stateFromStores[17]).intl;
            stringResult = intl.string(channelId(stateFromStores[17]).t.s8mM8A);
          }
          obj1.label = stringResult;
          obj2 = { source: onOpenRTCDebugOverlay(stateFromStores[19]), color: tmp.icon.color };
          obj1.leading = callback(channelId(stateFromStores[18]).Icon, obj2);
          obj1.onPress = function onPress() {
            if (null != stateFromStores) {
              const result = channelId(stateFromStores[20]).openStageChannelSettings(stateFromStores);
              outer1_15();
              const obj = channelId(stateFromStores[20]);
            }
          };
          callback(channelId(stateFromStores[16]).FormRow, obj1);
          const tmp15 = callback;
        }
      }
    }
    const items6 = [tmp14, , , , ];
    obj3 = {};
    const intl3 = channelId(stateFromStores[17]).intl;
    obj3.label = intl3.string(channelId(stateFromStores[17]).t.NiTd0e);
    obj4 = { source: onOpenRTCDebugOverlay(stateFromStores[21]), color: tmp.icon.color };
    obj3.leading = callback(channelId(stateFromStores[18]).Icon, obj4);
    obj3.onPress = function onPress() {
      let obj = channelId(stateFromStores[22]);
      obj = { screen: outer1_11.VOICE };
      obj.openUserSettings(obj);
      outer1_15();
    };
    items6[1] = callback(channelId(stateFromStores[16]).FormRow, obj3);
    const obj5 = {};
    const intl4 = channelId(stateFromStores[17]).intl;
    obj5.label = intl4.string(channelId(stateFromStores[17]).t.h850Ss);
    const obj6 = { source: onOpenRTCDebugOverlay(stateFromStores[23]), color: tmp.icon.color };
    obj5.leading = callback(channelId(stateFromStores[18]).Icon, obj6);
    obj5.onPress = function onPress() {
      if (null != stateFromStores) {
        onOpenRTCDebugOverlay(stateFromStores[24]).setSection(outer1_10.NOTIFICATIONS);
        const obj = onOpenRTCDebugOverlay(stateFromStores[24]);
        onOpenRTCDebugOverlay(stateFromStores[24]).open(stateFromStores.id);
        outer1_15();
        const obj2 = onOpenRTCDebugOverlay(stateFromStores[24]);
      }
    };
    items6[2] = callback(channelId(stateFromStores[16]).FormRow, obj5);
    let tmp32 = null != onOpenRTCDebugOverlay;
    if (tmp32) {
      const obj7 = {};
      const intl5 = channelId(stateFromStores[17]).intl;
      obj7.label = intl5.string(channelId(stateFromStores[17]).t.X8bCMe);
      const obj8 = { source: onOpenRTCDebugOverlay(stateFromStores[25]), color: tmp.icon.color };
      obj7.leading = callback(channelId(stateFromStores[18]).Icon, obj8);
      obj7.onPress = function onPress() {
        if (null != onOpenRTCDebugOverlay) {
          onOpenRTCDebugOverlay();
        }
        outer1_15();
      };
      tmp32 = callback(channelId(stateFromStores[16]).FormRow, obj7);
    }
    items6[3] = tmp32;
    const obj9 = {};
    const obj10 = {};
    const intl6 = channelId(stateFromStores[17]).intl;
    obj10.text = intl6.string(channelId(stateFromStores[17]).t["+78Pfm"]);
    obj10.style = tmp.warning;
    obj9.label = callback(channelId(stateFromStores[16]).FormLabel, obj10);
    const obj11 = { color: onOpenRTCDebugOverlay(stateFromStores[10]).unsafe_rawColors.RED_400, source: onOpenRTCDebugOverlay(stateFromStores[26]) };
    obj9.leading = callback(channelId(stateFromStores[18]).Icon, obj11);
    obj9.onPress = function onPress() {
      if (null != stateFromStores) {
        const result = channelId(stateFromStores[27]).showReportModalForStageChannel(stateFromStores);
        outer1_15();
        const obj = channelId(stateFromStores[27]);
      }
    };
    items6[4] = callback(channelId(stateFromStores[16]).FormRow, obj9);
    obj.children = items6;
    obj.children = closure_13(View, obj);
    tmp9Result = callback(channelId(stateFromStores[15]).ActionSheet, obj);
    const tmp12 = closure_13;
    const tmp13 = View;
    const tmp9 = callback;
  }
  return tmp9Result;
};
