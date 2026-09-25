// Module ID: 14097
// Function ID: 14098
// Name: useRequestGatewaySocket
// Dependencies: [19, 10691, 7171, 2]
// Exports: useRequestGatewaySocket

// Module 14097 (useRequestGatewaySocket)
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7171 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10691 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  importDefault = arg0;
  const canUIRequestGatewaySocket = DiscordAppStateDefault.useCanUIRequestGatewaySocket();
  const items = [arg0, canUIRequestGatewaySocket];
  const effect = noop.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      RequestGatewaySocketAll.setRequestedBy(closure_0);
      return () => {
        canUIRequestGatewaySocket(dependencyMap[2]).stopRequest(closure_1_0);
      };
    }
  }, items);
};
