// Module ID: 14560
// Function ID: 14561
// Name: useRequestGatewaySocket
// Dependencies: [19, 11300, 7757, 2]
// Exports: useRequestGatewaySocket

// Module 14560 (useRequestGatewaySocket)
import _modDef11300 from "module_11300" /* 11300 */;
import closure_3 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  importDefault = arg0;
  const canUIRequestGatewaySocket = _modDef11300.useCanUIRequestGatewaySocket();
  const items = [arg0, canUIRequestGatewaySocket];
  const effect = React.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      canUIRequestGatewaySocket(closure_1_2[2]).setRequestedBy(closure_0);
      return () => {
        closure_1_1(closure_1_2[2]).stopRequest(closure_0);
      };
    }
  }, items);
};
