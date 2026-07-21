// Module ID: 14789
// Function ID: 111449
// Name: useMessagesReconnectToCallsEffect
// Dependencies: []
// Exports: default

// Module 14789 (useMessagesReconnectToCallsEffect)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx");

export default function useMessagesReconnectToCallsEffect() {
  const effect = React.useEffect(() => {
    function isGatewayConnectedListener() {
      const isConnectedResult = closure_4.isConnected();
      if (callback !== isConnectedResult) {
        const callback = isConnectedResult;
        if (isConnectedResult) {
          const tmp4 = callback2(sortedChannels.getSortedChannels(), 2);
          let num2 = 0;
          const first = tmp4[0];
          let arr = tmp4[1];
          const items = [];
          const _Math = Math;
          if (0 < Math.min(20, arr.length)) {
            do {
              let tmp8 = closure_5;
              let channel = closure_5.getChannel(arr[num2].channelId);
              let tmp9 = null != channel && channel.isGroupDM();
              if (tmp9) {
                arr = items.push(arr[num2].channelId);
              }
              num2 = num2 + 1;
              let _Math2 = Math;
            } while (num2 < Math.min(20, arr.length));
          }
          const obj = { type: "CALL_CONNECT_MULTIPLE", channelIds: items };
          callback(isGatewayConnectedListener[5]).dispatch(obj);
          const obj2 = callback(isGatewayConnectedListener[5]);
        }
      }
    }
    let closure_0 = closure_4.isConnected();
    closure_4.addChangeListener(isGatewayConnectedListener);
    return () => {
      closure_4.removeChangeListener(isGatewayConnectedListener);
    };
  }, []);
};
