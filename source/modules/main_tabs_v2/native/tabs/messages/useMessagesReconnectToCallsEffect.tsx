// Module ID: 14963
// Function ID: 114015
// Name: useMessagesReconnectToCallsEffect
// Dependencies: [57, 31, 4808, 1348, 5601, 686, 2]
// Exports: default

// Module 14963 (useMessagesReconnectToCallsEffect)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx");

export default function useMessagesReconnectToCallsEffect() {
  const effect = React.useEffect(() => {
    function isGatewayConnectedListener() {
      const isConnectedResult = outer2_4.isConnected();
      if (closure_0 !== isConnectedResult) {
        closure_0 = isConnectedResult;
        if (isConnectedResult) {
          const tmp4 = outer2_2(outer2_6.getSortedChannels(), 2);
          let num2 = 0;
          const first = tmp4[0];
          let arr = tmp4[1];
          const items = [];
          const _Math = Math;
          if (0 < Math.min(20, arr.length)) {
            do {
              let tmp8 = outer2_5;
              let channel = outer2_5.getChannel(arr[num2].channelId);
              let tmp9 = null != channel && channel.isGroupDM();
              if (tmp9) {
                arr = items.push(arr[num2].channelId);
              }
              num2 = num2 + 1;
              let _Math2 = Math;
            } while (num2 < Math.min(20, arr.length));
          }
          const obj = { type: "CALL_CONNECT_MULTIPLE", channelIds: items };
          outer2_0(outer2_1[5]).dispatch(obj);
          const obj2 = outer2_0(outer2_1[5]);
        }
      }
    }
    let closure_0 = outer1_4.isConnected();
    outer1_4.addChangeListener(isGatewayConnectedListener);
    return () => {
      outer2_4.removeChangeListener(isGatewayConnectedListener);
    };
  }, []);
};
