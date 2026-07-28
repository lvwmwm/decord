// Module ID: 10663
// Function ID: 82908
// Name: useGlobalStatusIndicatorState
// Dependencies: [1348, 4237, 10664, 653, 10498, 8905, 566, 10662, 10660, 4016, 4376, 10665, 10666, 2]
// Exports: useGlobalStatusIndicatorState

// Module 10663 (useGlobalStatusIndicatorState)
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
  let obj = stateFromStores(10498);
  hasPipParticipant = obj.useHasPipParticipant({ isActivityViewFocused: false });
  const tmp2 = importDefault(8905)();
  const items = [closure_4];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_4.getChannelId());
  const tmp4 = importDefault(10662)();
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
  let num = stateFromStores(10660).useGetStageRTCPanelHeight(stateFromStores);
  stateFromStores(4016);
  let tmp9 = null != tmp2;
  if (tmp9) {
    let channelId = tmp2.channelId;
    if (null == channelId) {
      channelId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp9 = stateFromStores(4376).getVoiceChannelKey(channelId) !== tmp8;
    const obj5 = stateFromStores(4376);
  }
  obj = {};
  const obj4 = stateFromStores(10660);
  obj.voicePanelEnabled = stateFromStores(10665).useIsVoicePanelShowing();
  obj.isRemoteVisible = tmp9;
  obj.isVoiceChannelSelected = null != stateFromStores;
  obj.hasPipParticipant = hasPipParticipant;
  obj.showWhenParticipantOnScreen = flag;
  obj.isConnectedToStageChannel = null != importDefault(10666)();
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
