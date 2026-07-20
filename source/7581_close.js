// Module ID: 7581
// Function ID: 60703
// Name: close
// Dependencies: []
// Exports: default

// Module 7581 (close)
function close() {
  importDefault(dependencyMap[11]).hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const STAGE_SETTINGS_SHEET_KEY = arg1(dependencyMap[6]).STAGE_SETTINGS_SHEET_KEY;
({ ChannelSettingsSections: closure_10, UserSettingsSections: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = { container: { marginTop: 8 } };
obj = { color: importDefault(dependencyMap[10]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.icon = obj;
const tmp3 = arg1(dependencyMap[8]);
obj.warning = { color: importDefault(dependencyMap[10]).unsafe_rawColors.RED_400 };
let closure_14 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[10]).unsafe_rawColors.RED_400 };
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/stage_channels/native/components/StageSettingsActionSheet.tsx");

export default function StageSettingsActionSheet(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
  const importDefault = onOpenRTCDebugOverlay;
  const tmp = callback2();
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[12]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_7.can(channelId(stateFromStores[13]).MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores));
  let obj2 = arg1(dependencyMap[14]);
  const isStageSpeakingDisabledForCurrentUser = obj2.useIsStageSpeakingDisabledForCurrentUser();
  let obj3 = arg1(dependencyMap[12]);
  const items2 = [closure_5];
  const items3 = [channelId];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => selectedParticipant.getSelectedParticipant(channelId), items3);
  let obj4 = arg1(dependencyMap[12]);
  const items4 = [closure_8];
  const items5 = [stateFromStores];
  const stateFromStores3 = obj4.useStateFromStores(items4, () => stageInstanceByChannel.getStageInstanceByChannel(channelId));
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      callback();
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
            const intl2 = arg1(dependencyMap[17]).intl;
            let stringResult = intl2.string(arg1(dependencyMap[17]).t.5BKP4y);
          } else {
            const intl = arg1(dependencyMap[17]).intl;
            stringResult = intl.string(arg1(dependencyMap[17]).t.s8mM8A);
          }
          obj1.label = stringResult;
          obj2 = { source: importDefault(dependencyMap[19]), color: tmp.icon.color };
          obj1.leading = callback(arg1(dependencyMap[18]).Icon, obj2);
          obj1.onPress = function onPress() {
            if (null != stateFromStores) {
              const result = channelId(stateFromStores[20]).openStageChannelSettings(stateFromStores);
              callback();
              const obj = channelId(stateFromStores[20]);
            }
          };
          callback(arg1(dependencyMap[16]).FormRow, obj1);
          const tmp15 = callback;
        }
      }
    }
    const items6 = [tmp14, , , , ];
    obj3 = {};
    const intl3 = arg1(dependencyMap[17]).intl;
    obj3.label = intl3.string(arg1(dependencyMap[17]).t.NiTd0e);
    obj4 = { source: importDefault(dependencyMap[21]), color: tmp.icon.color };
    obj3.leading = callback(arg1(dependencyMap[18]).Icon, obj4);
    obj3.onPress = function onPress() {
      let obj = channelId(stateFromStores[22]);
      obj = { screen: constants2.VOICE };
      obj.openUserSettings(obj);
      callback();
    };
    items6[1] = callback(arg1(dependencyMap[16]).FormRow, obj3);
    const obj5 = {};
    const intl4 = arg1(dependencyMap[17]).intl;
    obj5.label = intl4.string(arg1(dependencyMap[17]).t.h850Ss);
    const obj6 = { source: importDefault(dependencyMap[23]), color: tmp.icon.color };
    obj5.leading = callback(arg1(dependencyMap[18]).Icon, obj6);
    obj5.onPress = function onPress() {
      if (null != stateFromStores) {
        onOpenRTCDebugOverlay(stateFromStores[24]).setSection(constants.NOTIFICATIONS);
        const obj = onOpenRTCDebugOverlay(stateFromStores[24]);
        onOpenRTCDebugOverlay(stateFromStores[24]).open(stateFromStores.id);
        callback();
        const obj2 = onOpenRTCDebugOverlay(stateFromStores[24]);
      }
    };
    items6[2] = callback(arg1(dependencyMap[16]).FormRow, obj5);
    let tmp32 = null != onOpenRTCDebugOverlay;
    if (tmp32) {
      const obj7 = {};
      const intl5 = arg1(dependencyMap[17]).intl;
      obj7.label = intl5.string(arg1(dependencyMap[17]).t.X8bCMe);
      const obj8 = { source: importDefault(dependencyMap[25]), color: tmp.icon.color };
      obj7.leading = callback(arg1(dependencyMap[18]).Icon, obj8);
      obj7.onPress = function onPress() {
        if (null != onOpenRTCDebugOverlay) {
          onOpenRTCDebugOverlay();
        }
        callback();
      };
      tmp32 = callback(arg1(dependencyMap[16]).FormRow, obj7);
    }
    items6[3] = tmp32;
    const obj9 = {};
    const obj10 = {};
    const intl6 = arg1(dependencyMap[17]).intl;
    obj10.text = intl6.string(arg1(dependencyMap[17]).t.+78Pfm);
    obj10.style = tmp.warning;
    obj9.label = callback(arg1(dependencyMap[16]).FormLabel, obj10);
    const obj11 = { color: importDefault(dependencyMap[10]).unsafe_rawColors.RED_400, source: importDefault(dependencyMap[26]) };
    obj9.leading = callback(arg1(dependencyMap[18]).Icon, obj11);
    obj9.onPress = function onPress() {
      if (null != stateFromStores) {
        const result = channelId(stateFromStores[27]).showReportModalForStageChannel(stateFromStores);
        callback();
        const obj = channelId(stateFromStores[27]);
      }
    };
    items6[4] = callback(arg1(dependencyMap[16]).FormRow, obj9);
    obj.children = items6;
    obj.children = closure_13(View, obj);
    tmp9Result = callback(arg1(dependencyMap[15]).ActionSheet, obj);
    const tmp12 = closure_13;
    const tmp13 = View;
    const tmp9 = callback;
  }
  return tmp9Result;
};
