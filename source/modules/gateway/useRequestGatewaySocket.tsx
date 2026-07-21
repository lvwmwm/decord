// Module ID: 13361
// Function ID: 101621
// Name: useRequestGatewaySocket
// Dependencies: []
// Exports: useRequestGatewaySocket

// Module 13361 (useRequestGatewaySocket)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/gateway/useRequestGatewaySocket.tsx");

export const useRequestGatewaySocket = function useRequestGatewaySocket(arg0) {
  const importDefault = arg0;
  const canUIRequestGatewaySocket = importDefault(dependencyMap[1]).useCanUIRequestGatewaySocket();
  const importAll = canUIRequestGatewaySocket;
  const items = [arg0, canUIRequestGatewaySocket];
  const effect = React.useEffect(() => {
    if (canUIRequestGatewaySocket) {
      canUIRequestGatewaySocket(closure_2[2]).setRequestedBy(arg0);
      return () => {
        callback(closure_2[2]).stopRequest(closure_0);
      };
    }
  }, items);
};
