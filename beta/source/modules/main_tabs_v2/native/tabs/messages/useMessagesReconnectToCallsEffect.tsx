// Module ID: 15682
// Function ID: 15683
// Name: useMessagesReconnectToCallsEffect
// Dependencies: [32, 19, 5589, 2045, 6639, 573, 2]
// Exports: default

// Module 15682 (useMessagesReconnectToCallsEffect)
import DispatcherDefault from "Dispatcher" /* 573 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 6639 */;
import size from "module_2" /* 2 */;

let channel;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx");

export default function useMessagesReconnectToCallsEffect() {
  let sortedChannels;
  const effect = react.useEffect(() => {
    let isConnectedResult;
    function isGatewayConnectedListener() {
      let arr;
      let closure_0 = GatewayConnectionStore.isConnected();
      if (closure_0 !== closure_0) {
        if (closure_0) {
          [r10011, arr] = sortedChannels.getSortedChannels();
          const items = [];
          const _Math = Math;
          let num3 = 0;
          _slicedToArray(sortedChannels.getSortedChannels(), 2);
          if (0 < Math.min(20, arr.length)) {
            do {
              channel = channel.getChannel(arr[num3].channelId);
              let isGroupDMResult = null != channel;
              if (isGroupDMResult) {
                isGroupDMResult = channel.isGroupDM();
              }
              if (isGroupDMResult) {
                let arr2 = items.push(arr[num3].channelId);
              }
              num3 = num3 + 1;
              let _Math2 = Math;
            } while (num3 < Math.min(20, arr.length));
          }
          const obj = { type: "CALL_CONNECT_MULTIPLE", channelIds: items };
          const obj2 = DispatcherDefault;
          obj2.dispatch(obj);
        }
      }
    }
    let closure_0 = closure_4.isConnected();
    closure_4.addChangeListener(isGatewayConnectedListener);
    return () => {
      GatewayConnectionStore.removeChangeListener(isGatewayConnectedListener);
    };
  }, []);
};
