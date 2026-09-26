// Module ID: 14871
// Function ID: 14872
// Name: useRequestGatewaySocket
// Dependencies: [19, 11592, 8031, 2]
// Exports: useRequestGatewaySocket

// Module 14871 (useRequestGatewaySocket)
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 8031 */;
import DiscordAppStateDefault from "DiscordAppState" /* 11592 */;
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
