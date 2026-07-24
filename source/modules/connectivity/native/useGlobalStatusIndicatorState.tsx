// Module ID: 10660
// Function ID: 83095
// Name: useGlobalStatusIndicatorState
// Dependencies: [1348, 4202, 10661, 653, 10572, 8973, 566, 10659, 10657, 3981, 4341, 10662, 10663, 2]
// Exports: useGlobalStatusIndicatorState

// Module 10660 (useGlobalStatusIndicatorState)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { RTC_PANEL_HEIGHT } from "RTC_PANEL_HEIGHT";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";

const require = arg1;
const result = require("RTC_PANEL_HEIGHT").fileFinishedImporting("modules/connectivity/native/useGlobalStatusIndicatorState.tsx");

export const useGlobalStatusIndicatorState = function useGlobalStatusIndicatorState(flag) {
  let hasPipParticipant;
  let voicePanelEnabled;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let importDefault;
  let obj = stateFromStores(10572);
  hasPipParticipant = obj.useHasPipParticipant({ isActivityViewFocused: false });
  const tmp2 = importDefault(8973)();
  const items = [closure_4];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_4.getChannelId());
  const tmp4 = importDefault(10659)();
  importDefault = tmp4;
  const obj2 = stateFromStores(566);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [stateFromStores, tmp4];
  const stateFromStores1 = stateFromStores(566).useStateFromStores(items1, () => {
    const channel = outer1_3.getChannel(stateFromStores);
    let isGuildStageVoiceResult;
    if (null != channel) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = !c1;
    }
    return isGuildStageVoiceResult;
  }, items2);
  const obj3 = stateFromStores(566);
  let num = stateFromStores(10657).useGetStageRTCPanelHeight(stateFromStores);
  stateFromStores(3981);
  let tmp9 = null != tmp2;
  if (tmp9) {
    let channelId = tmp2.channelId;
    if (null == channelId) {
      channelId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp9 = stateFromStores(4341).getVoiceChannelKey(channelId) !== tmp8;
    const obj5 = stateFromStores(4341);
  }
  obj = {};
  const obj4 = stateFromStores(10657);
  obj.voicePanelEnabled = stateFromStores(10662).useIsVoicePanelShowing();
  obj.isRemoteVisible = tmp9;
  obj.isVoiceChannelSelected = null != stateFromStores;
  obj.hasPipParticipant = hasPipParticipant;
  obj.showWhenParticipantOnScreen = flag;
  obj.isConnectedToStageChannel = null != importDefault(10663)();
  obj.isInvitedToSpeak = tmp4;
  ({ voicePanelEnabled, hasPipParticipant } = obj);
  if (!voicePanelEnabled) {
    let tmp16 = !obj.isRemoteVisible;
    if (tmp16) {
      tmp16 = !tmp14 || !tmp15;
      const tmp17 = !tmp14 || !tmp15;
    }
    if (tmp16) {
      let tmp18 = !tmp12;
      if (!tmp18) {
        if (hasPipParticipant) {
          hasPipParticipant = !tmp13;
        }
        tmp18 = hasPipParticipant;
      }
      tmp16 = tmp18;
    }
    voicePanelEnabled = tmp16;
  }
  let tmp19 = !voicePanelEnabled;
  if (!tmp19) {
    num = 0;
    if (tmp19) {
      num = RTC_PANEL_HEIGHT;
    }
  }
  obj = { height: num, isVisible: tmp19 };
  if (tmp19) {
    tmp19 = tmp6;
  }
  if (tmp19) {
    tmp19 = !stateFromStores1;
  }
  obj.isCustomBackground = tmp19;
  return obj;
};
