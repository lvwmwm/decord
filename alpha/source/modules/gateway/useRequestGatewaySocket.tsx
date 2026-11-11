// Module ID: 16923
// Function ID: 16924
// Name: useRequestGatewaySocket
// Dependencies: [19, 6984, 8792, 2]
// Exports: useRequestGatewaySocket

// Module 16923 (useRequestGatewaySocket)
import DiscordAppStateDefault from "DiscordAppState" /* 6984 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 8792 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const result = size.fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export function useRequestGatewaySocket(arg0) {
  let closure_0;
  importDefault = arg0;
  let obj = DiscordAppStateDefault;
  const canUIRequestGatewaySocket = obj.useCanUIRequestGatewaySocket();
  const items = [arg0, canUIRequestGatewaySocket];
  const effect = react.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      let obj = RequestGatewaySocketAll;
      obj.setRequestedBy(closure_0);
      return () => {
        const obj = canUIRequestGatewaySocket(dependencyMap[2]);
        obj.stopRequest(closure_1_0);
      };
    }
  }, items);
}
