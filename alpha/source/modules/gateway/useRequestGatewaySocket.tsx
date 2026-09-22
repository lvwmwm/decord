// Module ID: 14846
// Function ID: 14847
// Name: useRequestGatewaySocket
// Dependencies: [19, 11567, 8002, 2]
// Exports: useRequestGatewaySocket

// Module 14846 (useRequestGatewaySocket)
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 8002 */;
import DiscordAppStateDefault from "DiscordAppState" /* 11567 */;
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
