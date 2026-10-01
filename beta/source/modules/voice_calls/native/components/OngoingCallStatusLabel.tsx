// Module ID: 13340
// Function ID: 13341
// Name: OngoingCallStatusLabel
// Dependencies: [19, 502, 5590, 4855, 21, 504, 1115, 13339, 1177, 2]
// Exports: default

// Module 13340 (OngoingCallStatusLabel)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5590 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_calls/native/components/OngoingCallStatusLabel.tsx");

export default function OngoingCallStatusLabel(style) {
  let channel;
  let useAllAloneText;
  let voiceState;
  ({ channel, voiceState, useAllAloneText } = style);
  style = style.style;
  if (useAllAloneText === undefined) {
    useAllAloneText = true;
  }
  if (useAllAloneText === undefined) {
    useAllAloneText = true;
  }
  const id = AuthenticationStore.getId();
  const tmp2 = channel;
  const tmp3 = id;
  const items = [VoiceStateStore, CallStore];
  const items1 = [id, channel];
  const obj = channel(id[5]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null == channel) {
      return false;
    } else {
      const _Object = Object;
      const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(tmp.id));
      const call = CallStore.getCall(tmp.id);
      return !(null != call && call.ringing.length > 0) && 1 === values.length && values[0].userId === id;
    }
  }, items1);
  const intl = channel(id[6]).intl;
  let stringResult = intl.string(channel(id[6]).t["1zFMqU"]);
  if (channel(id[7]).CallStates.DISCONNECTING !== voiceState) {
    if (tmp2(tmp3[7]).CallStates.CONNECTED !== voiceState) {
      if (tmp2(tmp3[7]).CallStates.RINGING === voiceState) {
        const intl2 = tmp2(tmp3[6]).intl;
        stringResult = intl2.string(tmp2(tmp3[6]).t.Xuzre8);
      } else if (tmp2(tmp3[7]).CallStates.DISCONNECTED === voiceState) {
        const intl5 = tmp2(tmp3[6]).intl;
        stringResult = intl5.string(tmp2(tmp3[6]).t["w//7ET"]);
      }
    }
    return jsx(tmp2(tmp3[8]).LegacyText, { style, children: stringResult });
  }
  if (stateFromStores) {
    let stringResult1;
    if (useAllAloneText) {
      const intl4 = tmp2(tmp3[6]).intl;
      stringResult1 = intl4.string(tmp2(tmp3[6]).t.xNeSms);
    }
    stringResult = stringResult1;
  }
  const intl3 = tmp2(tmp3[6]).intl;
  stringResult1 = intl3.string(tmp2(tmp3[6]).t["NGg/fm"]);
};
