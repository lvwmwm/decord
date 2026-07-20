// Module ID: 12597
// Function ID: 96849
// Name: OngoingCallStatusLabel
// Dependencies: []
// Exports: default

// Module 12597 (OngoingCallStatusLabel)
importAll(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
let closure_4 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/voice_calls/native/components/OngoingCallStatusLabel.tsx");

export default function OngoingCallStatusLabel(useAllAloneText) {
  let channel;
  let style;
  let voiceState;
  let flag = useAllAloneText.useAllAloneText;
  ({ style, channel, voiceState } = useAllAloneText);
  if (flag === undefined) {
    flag = true;
  }
  const children = function useOngoingCallStatus(channel, voiceState, flag) {
    if (flag === undefined) {
      flag = true;
    }
    let id;
    id = id.getId();
    const items = [closure_4, closure_3];
    const items1 = [id, channel];
    const stateFromStores = channel(id[5]).useStateFromStores(items, () => {
      if (null == arg0) {
        return false;
      } else {
        const _Object = Object;
        const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(arg0.id));
        const call = call.getCall(arg0.id);
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
    const intl = channel(id[6]).intl;
    let stringResult = intl.string(channel(id[6]).t.1zFMqU);
    if (channel(id[7]).CallStates.DISCONNECTING !== voiceState) {
      if (channel(id[7]).CallStates.CONNECTED !== voiceState) {
        if (channel(id[7]).CallStates.RINGING === voiceState) {
          const intl2 = channel(id[6]).intl;
          stringResult = intl2.string(channel(id[6]).t.Xuzre8);
        } else if (channel(id[7]).CallStates.DISCONNECTED === voiceState) {
          const intl5 = channel(id[6]).intl;
          stringResult = intl5.string(channel(id[6]).t.w//7ET);
        }
        return stringResult;
      }
    }
    if (!stateFromStores) {
      const intl3 = channel(id[6]).intl;
      let stringResult1 = intl3.string(channel(id[6]).t.NGg/fm);
    }
    const intl4 = channel(id[6]).intl;
    stringResult1 = intl4.string(channel(id[6]).t.xNeSms);
  }(channel, voiceState, flag);
  return jsx(arg1(dependencyMap[8]).LegacyText, { style, children });
};
