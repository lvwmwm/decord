// Module ID: 8960
// Function ID: 8961
// Name: useGlobalStatusIndicatorState
// Dependencies: [2045, 4859, 8961, 1074, 8848, 8962, 504, 8959, 8957, 4692, 5043, 8963, 8964, 2]
// Exports: useGlobalStatusIndicatorState

// Module 8960 (useGlobalStatusIndicatorState)
import Constants from "Constants" /* 1074 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 8959 */;
import ConnectivityConstants from "ConnectivityConstants" /* 8961 */;
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 8962 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import size from "module_2" /* 2 */;

let importDefault;

let tmp4;
const useMyCurrentStageChannelDefault = tmp4(8964);
const RTC_PANEL_HEIGHT = ConnectivityConstants.RTC_PANEL_HEIGHT;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const result = size.fileFinishedImporting("modules/connectivity/native/useGlobalStatusIndicatorState.tsx");

export const useGlobalStatusIndicatorState = function useGlobalStatusIndicatorState(flag) {
  let closure_1;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  importDefault = undefined;
  const obj = stateFromStores(8848);
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
  const obj4 = stateFromStores(8957);
  let num = obj4.useGetStageRTCPanelHeight(stateFromStores);
  stateFromStores(4692);
  let tmp12 = null != tmp5;
  if (tmp12) {
    let channelId = tmp5.channelId;
    const getVoiceChannelKey = stateFromStores(5043).getVoiceChannelKey;
    stateFromStores(5043);
    if (channelId == null) {
      channelId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp12 = getVoiceChannelKey(channelId) !== tmp11;
  }
  const tmpResult2 = stateFromStores(8963);
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
};
