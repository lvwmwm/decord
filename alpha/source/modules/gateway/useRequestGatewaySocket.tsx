// Module ID: 15718
// Function ID: 15719
// Name: useRequestGatewaySocket
// Dependencies: [19, 6530, 8334, 2]
// Exports: useRequestGatewaySocket

// Module 15718 (useRequestGatewaySocket)
import DiscordAppStateDefault from "DiscordAppState" /* 6530 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 8334 */;
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
