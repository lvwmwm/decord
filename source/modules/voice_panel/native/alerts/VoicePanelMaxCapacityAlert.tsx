// Module ID: 15914
// Function ID: 122943
// Name: VoicePanelMaxCapacityAlert
// Dependencies: [31, 1348, 33, 624, 4475, 4475, 15912, 1212, 2]
// Exports: default

// Module 15914 (VoicePanelMaxCapacityAlert)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelMaxCapacityAlert.tsx");

export default function VoicePanelMaxCapacityAlert(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(624);
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = outer1_3.getChannel(channelId);
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
  const obj2 = channelId(4475);
  obj = { header: jsx(importDefault(15912), {}) };
  const intl = channelId(1212).intl;
  obj.title = intl.string(channelId(1212).t.hHbsQj);
  const intl2 = channelId(1212).intl;
  obj.content = intl2.formatToPlainString(channelId(1212).t["387SQH"], { count: stateFromStores });
  obj = { variant: "secondary" };
  const intl3 = channelId(1212).intl;
  obj.text = intl3.string(channelId(1212).t["NX+WJN"]);
  obj.onPress = channelId(4475).useDismissModalCallback();
  obj.actions = jsx(channelId(4475).AlertActionButton, { variant: "secondary" });
  return jsx(channelId(4475).AlertModal, { variant: "secondary" });
};
export const VOICE_PANEL_MAX_CAPACITY_KEY = "voice-panel-max-capacity";
