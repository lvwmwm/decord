// Module ID: 17614
// Function ID: 17615
// Name: VoicePanelMaxCapacityAlert
// Dependencies: [19, 2045, 21, 558, 568, 565, 5116, 17612, 1119, 5116, 2]

// Module 17614 (VoicePanelMaxCapacityAlert)
import VoicePanelLockedIconDefault from "VoicePanelLockedIcon" /* 17612 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(568).c(14);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      const channel = ChannelStore.getChannel(channelId);
      let num;
      if (channel != null) {
        num = channel.userLimit;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = channelId(568);
  const stateFromStores = channelId(565).useStateFromStores(first, tmp6, tmp7);
  const tmpResult = channelId(565);
  const dismissModalCallback = channelId(5116).useDismissModalCallback();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = jsx(VoicePanelLockedIconDefault, {});
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.hHbsQj);
    cResult[4] = tmp14;
    cResult[5] = stringResult;
    let tmp11 = stringResult;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  if (cResult[6] !== stateFromStores) {
    const intl2 = tmp(1119).intl;
    const obj2 = { count: stateFromStores };
    const formatToPlainStringResult = intl2.formatToPlainString(tmp(1119).t["387SQH"], obj2);
    cResult[6] = stateFromStores;
    cResult[7] = formatToPlainStringResult;
    let tmp16 = formatToPlainStringResult;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1119).intl;
    const stringResult1 = intl3.string(tmp(1119).t["NX+WJN"]);
    cResult[8] = stringResult1;
    let tmp18 = stringResult1;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] !== dismissModalCallback) {
    const obj3 = { variant: "secondary", text: tmp18, onPress: dismissModalCallback };
    const tmp22 = jsx(tmp(5116).AlertActionButton, { variant: "secondary", text: tmp18, onPress: dismissModalCallback });
    cResult[9] = dismissModalCallback;
    cResult[10] = tmp22;
    let tmp20 = tmp22;
  } else {
    tmp20 = cResult[10];
  }
  if (cResult[11] === tmp16) {
    if (cResult[12] === tmp20) {
      let tmp23 = cResult[13];
    }
    return tmp23;
  }
  const tmp24 = jsx(channelId(5116).AlertModal, { header: tmp10, title: tmp11, content: tmp16, actions: tmp20 });
  cResult[11] = tmp16;
  cResult[12] = tmp20;
  cResult[13] = tmp24;
  tmp23 = tmp24;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(565).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let num;
    if (channel != null) {
      num = channel.userLimit;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items1);
  const obj = channelId(565);
  const obj2 = channelId(5116);
  const obj3 = { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null };
  const intl = channelId(1119).intl;
  obj3.title = intl.string(channelId(1119).t.hHbsQj);
  const intl2 = channelId(1119).intl;
  obj3.content = intl2.formatToPlainString(channelId(1119).t["387SQH"], { count: stateFromStores });
  const obj4 = { variant: "secondary", text: null, onPress: null };
  const intl3 = channelId(1119).intl;
  obj4.text = intl3.string(channelId(1119).t["NX+WJN"]);
  obj4.onPress = channelId(5116).useDismissModalCallback();
  obj3.actions = jsx(channelId(5116).AlertActionButton, { variant: "secondary", text: null, onPress: null });
  return jsx(channelId(5116).AlertModal, { header: jsx(VoicePanelLockedIconDefault, {}), title: null, content: null, actions: null });
});
export const VOICE_PANEL_MAX_CAPACITY_KEY = "voice-panel-max-capacity";
