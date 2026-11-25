// Module ID: 10225
// Function ID: 10226
// Name: useGlobalStatusIndicatorState
// Dependencies: [4861, 5820, 10226, 1071, 9984, 10227, 504, 10224, 10222, 5188, 8407, 10228, 10230, 2]
// Exports: useGlobalStatusIndicatorState

// Module 10225 (useGlobalStatusIndicatorState)
import Constants from "Constants" /* 1071 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 10224 */;
import ConnectivityConstants from "ConnectivityConstants" /* 10226 */;
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 10227 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5820 */;
import size from "module_2" /* 2 */;

let importDefault;

let tmp4;
const useMyCurrentStageChannelDefault = tmp4(10230);
const RTC_PANEL_HEIGHT = ConnectivityConstants.RTC_PANEL_HEIGHT;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const result = size.fileFinishedImporting("modules/connectivity/native/useGlobalStatusIndicatorState.tsx");

export function useGlobalStatusIndicatorState(flag) {
  let closure_1;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  importDefault = undefined;
  const obj = stateFromStores(9984);
  let hasPipParticipant = obj.useHasPipParticipant({ isActivityViewFocused: false });
  const tmp5 = useVoiceStateForRemoteSessionDefault();
  const items = [RTCConnectionStore];
  const obj2 = stateFromStores(504);
  stateFromStores = obj2.useStateFromStores(items, () => channelId.getChannelId());
  const tmp7 = useIsInvitedToSpeakDefault();
  importDefault = tmp7;
  const items1 = [ChannelStore];
  const items2 = [stateFromStores, tmp7];
  const obj3 = stateFromStores(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(stateFromStores);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = !closure_1;
    }
    return isGuildStageVoiceResult;
  }, items2);
  const obj4 = stateFromStores(10222);
  let num = obj4.useGetStageRTCPanelHeight(stateFromStores);
  stateFromStores(5188);
  let tmp12 = null != tmp5;
  if (tmp12) {
    let channelId = tmp5.channelId;
    const getVoiceChannelKey = stateFromStores(8407).getVoiceChannelKey;
    stateFromStores(8407);
    if (channelId == null) {
      channelId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp12 = getVoiceChannelKey(channelId) !== tmp11;
  }
  const tmpResult2 = stateFromStores(10228);
  let isVoicePanelShowing = tmpResult2.useIsVoicePanelShowing();
  const tmp15 = null != useMyCurrentStageChannelDefault();
  if (!isVoicePanelShowing) {
    let tmp16 = !tmp12;
    if (tmp16) {
      let tmp17 = !tmp15;
      if (tmp15) {
        tmp17 = !tmp7;
      }
      tmp16 = tmp17;
    }
    if (tmp16) {
      let tmp18 = !tmp9;
      if (null != stateFromStores) {
        if (hasPipParticipant) {
          hasPipParticipant = !flag;
        }
        tmp18 = hasPipParticipant;
      }
      tmp16 = tmp18;
    }
    isVoicePanelShowing = tmp16;
  }
  let tmp19 = !isVoicePanelShowing;
  if (isVoicePanelShowing) {
    num = 0;
    if (!isVoicePanelShowing) {
      num = RTC_PANEL_HEIGHT;
    }
  }
  const obj5 = { height: num, isVisible: tmp19, isCustomBackground: tmp19 };
  if (!isVoicePanelShowing) {
    tmp19 = tmp9;
  }
  if (tmp19) {
    tmp19 = !stateFromStores1;
  }
  return obj5;
}
