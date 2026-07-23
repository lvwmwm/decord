// Module ID: 13482
// Function ID: 103810
// Name: useRequestGatewaySocket
// Dependencies: [31, 9456, 652, 2]
// Exports: useRequestGatewaySocket

// Module 13482 (useRequestGatewaySocket)
import result from "result";

const result = require("addToken").fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  const importDefault = arg0;
  const canUIRequestGatewaySocket = importDefault(9456).useCanUIRequestGatewaySocket();
  const items = [arg0, canUIRequestGatewaySocket];
  const effect = React.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      canUIRequestGatewaySocket(outer1_2[2]).setRequestedBy(closure_0);
      return () => {
        canUIRequestGatewaySocket(outer2_2[2]).stopRequest(outer1_0);
      };
    }
  }, items);
};
