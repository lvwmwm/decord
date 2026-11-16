// Module ID: 17041
// Function ID: 17042
// Name: useRequestGatewaySocket
// Dependencies: [19, 7047, 8858, 2]
// Exports: useRequestGatewaySocket

// Module 17041 (useRequestGatewaySocket)
import DiscordAppStateDefault from "DiscordAppState" /* 7047 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 8858 */;
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
