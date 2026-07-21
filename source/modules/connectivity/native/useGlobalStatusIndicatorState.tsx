// Module ID: 10620
// Function ID: 82829
// Name: useGlobalStatusIndicatorState
// Dependencies: []
// Exports: useGlobalStatusIndicatorState

// Module 10620 (useGlobalStatusIndicatorState)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const RTC_PANEL_HEIGHT = arg1(dependencyMap[2]).RTC_PANEL_HEIGHT;
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[3]).EMPTY_STRING_SNOWFLAKE_ID;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/connectivity/native/useGlobalStatusIndicatorState.tsx");

export const useGlobalStatusIndicatorState = function useGlobalStatusIndicatorState(flag) {
  let hasPipParticipant;
  let voicePanelEnabled;
  if (flag === undefined) {
    flag = false;
  }
  let arg1;
  let importDefault;
  let obj = arg1(dependencyMap[4]);
  hasPipParticipant = obj.useHasPipParticipant({ isActivityViewFocused: false });
  const tmp2 = importDefault(dependencyMap[5])();
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => channelId.getChannelId());
  arg1 = stateFromStores;
  const tmp4 = importDefault(dependencyMap[7])();
  importDefault = tmp4;
  const obj2 = arg1(dependencyMap[6]);
  const items1 = [closure_3];
  const items2 = [stateFromStores, tmp4];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items1, () => {
    const channel = channel.getChannel(stateFromStores);
    let isGuildStageVoiceResult;
    if (null != channel) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = !tmp4;
    }
    return isGuildStageVoiceResult;
  }, items2);
  const obj3 = arg1(dependencyMap[6]);
  let num = arg1(dependencyMap[8]).useGetStageRTCPanelHeight(stateFromStores);
  arg1(dependencyMap[9]);
  let tmp9 = null != tmp2;
  if (tmp9) {
    let channelId = tmp2.channelId;
    if (null == channelId) {
      channelId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp9 = arg1(dependencyMap[10]).getVoiceChannelKey(channelId) !== tmp8;
    const obj5 = arg1(dependencyMap[10]);
  }
  obj = {};
  const obj4 = arg1(dependencyMap[8]);
  obj.voicePanelEnabled = arg1(dependencyMap[11]).useIsVoicePanelShowing();
  obj.isRemoteVisible = tmp9;
  obj.isVoiceChannelSelected = null != stateFromStores;
  obj.hasPipParticipant = hasPipParticipant;
  obj.showWhenParticipantOnScreen = flag;
  obj.isConnectedToStageChannel = null != importDefault(dependencyMap[12])();
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
