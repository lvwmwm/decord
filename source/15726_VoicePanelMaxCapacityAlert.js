// Module ID: 15726
// Function ID: 120216
// Name: VoicePanelMaxCapacityAlert
// Dependencies: []
// Exports: default

// Module 15726 (VoicePanelMaxCapacityAlert)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx");

export default function VoicePanelMaxCapacityAlert(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = channel.getChannel(channelId);
    let userLimit;
    if (null != channel) {
      userLimit = channel.userLimit;
    }
    let num = 0;
    if (null != userLimit) {
      num = userLimit;
    }
    return num;
  }, items1);
  const obj2 = arg1(dependencyMap[4]);
  obj = { header: jsx(importDefault(dependencyMap[6]), {}) };
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.hHbsQj);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.content = intl2.formatToPlainString(arg1(dependencyMap[7]).t.387SQH, { count: stateFromStores });
  obj = { variant: "secondary" };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj.text = intl3.string(arg1(dependencyMap[7]).t.NX+WJN);
  obj.onPress = arg1(dependencyMap[4]).useDismissModalCallback();
  obj.actions = jsx(arg1(dependencyMap[4]).AlertActionButton, obj);
  return jsx(arg1(dependencyMap[5]).AlertModal, obj);
};
export const VOICE_PANEL_MAX_CAPACITY_KEY = "voice-panel-max-capacity";
