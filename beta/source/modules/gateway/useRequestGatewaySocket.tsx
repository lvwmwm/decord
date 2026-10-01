// Module ID: 14121
// Function ID: 14122
// Name: useRequestGatewaySocket
// Dependencies: [19, 10704, 7176, 2]
// Exports: useRequestGatewaySocket

// Module 14121 (useRequestGatewaySocket)
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7176 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10704 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const result = size.fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
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
};
