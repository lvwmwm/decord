// Module ID: 12776
// Function ID: 99399
// Name: OngoingCallStatusLabel
// Dependencies: [31, 1194, 4809, 4146, 33, 566, 1212, 12775, 1273, 2]
// Exports: default

// Module 12776 (OngoingCallStatusLabel)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_calls/native/components/OngoingCallStatusLabel.tsx");

export default function OngoingCallStatusLabel(useAllAloneText) {
  let channel;
  let style;
  let voiceState;
  let flag = useAllAloneText.useAllAloneText;
  ({ style, channel, voiceState } = useAllAloneText);
  if (flag === undefined) {
    flag = true;
  }
  const children = (function useOngoingCallStatus(channel, voiceState, flag) {
    let closure_0 = channel;
    if (flag === undefined) {
      flag = true;
    }
    let id;
    id = outer1_2.getId();
    const items = [outer1_4, outer1_3];
    const items1 = [id, channel];
    const stateFromStores = outer1_0(outer1_1[5]).useStateFromStores(items, () => {
      if (null == user) {
        return false;
      } else {
        const _Object = Object;
        const values = Object.values(outer2_4.getVoiceStatesForChannel(user.id));
        const call = outer2_3.getCall(user.id);
        let tmp = null != call;
        if (tmp) {
          tmp = call.ringing.length > 0;
        }
        let tmp2 = !tmp;
        if (!tmp) {
          tmp2 = 1 === values.length;
        }
        if (tmp2) {
          tmp2 = values[0].userId === id;
        }
        return tmp2;
      }
    }, items1);
    const intl = outer1_0(outer1_1[6]).intl;
    let stringResult = intl.string(outer1_0(outer1_1[6]).t["1zFMqU"]);
    if (outer1_0(outer1_1[7]).CallStates.DISCONNECTING !== voiceState) {
      if (outer1_0(outer1_1[7]).CallStates.CONNECTED !== voiceState) {
        if (outer1_0(outer1_1[7]).CallStates.RINGING === voiceState) {
          const intl2 = outer1_0(outer1_1[6]).intl;
          stringResult = intl2.string(outer1_0(outer1_1[6]).t.Xuzre8);
        } else if (outer1_0(outer1_1[7]).CallStates.DISCONNECTED === voiceState) {
          const intl5 = outer1_0(outer1_1[6]).intl;
          stringResult = intl5.string(outer1_0(outer1_1[6]).t["w//7ET"]);
        }
        return stringResult;
      }
    }
    if (!stateFromStores) {
      const intl3 = outer1_0(outer1_1[6]).intl;
      let stringResult1 = intl3.string(outer1_0(outer1_1[6]).t["NGg/fm"]);
    }
    const intl4 = outer1_0(outer1_1[6]).intl;
    stringResult1 = intl4.string(outer1_0(outer1_1[6]).t.xNeSms);
  })(channel, voiceState, flag);
  return jsx(require(1273) /* Button */.LegacyText, { style, children });
};
