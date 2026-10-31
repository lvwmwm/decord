// Module ID: 16407
// Function ID: 16408
// Name: useRequestGatewaySocket
// Dependencies: [19, 6872, 10212, 2]
// Exports: useRequestGatewaySocket

// Module 16407 (useRequestGatewaySocket)
import DiscordAppStateDefault from "DiscordAppState" /* 6872 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 10212 */;
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
