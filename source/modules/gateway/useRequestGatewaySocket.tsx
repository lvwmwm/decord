// Module ID: 14214
// Function ID: 14215
// Name: useRequestGatewaySocket
// Dependencies: [19, 10937, 675, 2]
// Exports: useRequestGatewaySocket

// Module 14214 (useRequestGatewaySocket)
import _modDef10937 from "module_10937" /* 10937 */;
import closure_3 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  importDefault = arg0;
  const canUIRequestGatewaySocket = _modDef10937.useCanUIRequestGatewaySocket();
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
