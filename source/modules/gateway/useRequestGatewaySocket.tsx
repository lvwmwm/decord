// Module ID: 13832
// Function ID: 13833
// Name: useRequestGatewaySocket
// Dependencies: [19, 10475, 675, 2]
// Exports: useRequestGatewaySocket

// Module 13832 (useRequestGatewaySocket)
import noop from "noop";

const result = require("setRequestedBy").fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  const importDefault = arg0;
  const canUIRequestGatewaySocket = importDefault(10475).useCanUIRequestGatewaySocket();
  const items = [arg0, canUIRequestGatewaySocket];
  const effect = React.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      canUIRequestGatewaySocket(outer1_2[2]).setRequestedBy(closure_0);
      return () => {
        outer1_1(outer1_2[2]).stopRequest(closure_0);
      };
    }
  }, items);
};
