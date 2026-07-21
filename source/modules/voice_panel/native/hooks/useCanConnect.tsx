// Module ID: 15680
// Function ID: 119781
// Name: useCanConnect
// Dependencies: []
// Exports: default

// Module 15680 (useCanConnect)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const Permissions = arg1(dependencyMap[4]).Permissions;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default function useCanConnect(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_4, closure_3, closure_5];
  const items1 = [arg0];
  return arg1(dependencyMap[5]).useStateFromStoresObject(items, () => {
    const channel = channel.getChannel(arg0);
    const obj = {};
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = closure_4.can(constants.CONNECT, channel);
      }
      tmp = isPrivateResult;
    }
    obj.canConnect = tmp;
    let isChannelFullResult = null == channel;
    if (!isChannelFullResult) {
      isChannelFullResult = arg0(closure_1[6]).isChannelFull(channel, closure_5, closure_3);
      const obj3 = arg0(closure_1[6]);
    }
    obj.isAtMaxCapacity = isChannelFullResult;
    return obj;
  }, items1);
};
