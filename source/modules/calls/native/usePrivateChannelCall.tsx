// Module ID: 12029
// Function ID: 92962
// Name: usePrivateChannelCall
// Dependencies: []
// Exports: default

// Module 12029 (usePrivateChannelCall)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/calls/native/usePrivateChannelCall.tsx");

export default function usePrivateChannelCall(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_5];
  const items1 = [arg1, arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const channel = authStore.getChannel(authStore.getDMFromUserId(arg0));
    if (null != channel) {
      if (channel.isPrivate()) {
        let obj = {};
        ({ text: obj2.text, accessibilityHint: obj2.accessibilityHint, inCall: obj2.inCall } = arg1(arg2[5])(channel, arg1));
        return obj;
      }
    }
    obj = {};
    const intl = arg0(arg2[4]).intl;
    const string = intl.string;
    const t = arg0(arg2[4]).t;
    if (arg1) {
      let stringResult = string(t.7AWk50);
    } else {
      stringResult = string(t.EZgS+9);
    }
    obj.text = stringResult;
    const intl2 = arg0(arg2[4]).intl;
    const string2 = intl2.string;
    const t2 = arg0(arg2[4]).t;
    if (arg1) {
      let string2Result = string2(t2.oCqlGG);
    } else {
      string2Result = string2(t2.focH1t);
    }
    obj.accessibilityHint = string2Result;
    obj.inCall = false;
    return obj;
  }, items1);
  obj = { text: stateFromStoresObject.text, inCall: stateFromStoresObject.inCall, accessibilityHint: stateFromStoresObject.accessibilityHint, handlePress: React.useCallback(callback(tmp), items2) };
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [arg0, arg1, arg2];
  return obj;
};
