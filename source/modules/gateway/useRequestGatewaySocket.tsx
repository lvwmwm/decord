// Module ID: 13993
// Function ID: 13994
// Name: useRequestGatewaySocket
// Dependencies: [19, 10540, 675, 2]
// Exports: useRequestGatewaySocket

// Module 13993 (useRequestGatewaySocket)
import _modDef10540 from "module_10540" /* 10540 */;
import closure_3 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  importDefault = arg0;
  const canUIRequestGatewaySocket = _modDef10540.useCanUIRequestGatewaySocket();
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
