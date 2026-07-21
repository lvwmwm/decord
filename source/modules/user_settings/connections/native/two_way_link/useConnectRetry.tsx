// Module ID: 8976
// Function ID: 70735
// Name: useConnectRetry
// Dependencies: []
// Exports: useConnectRetry

// Module 8976 (useConnectRetry)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useConnectRetry.tsx");

export const useConnectRetry = function useConnectRetry(navigation, PRE_CONNECT) {
  const React = navigation;
  const items = [navigation, PRE_CONNECT];
  return React.useCallback((self) => {
    const routes = self.getState().routes;
    const findIndexResult = routes.findIndex((name) => name.name === closure_1);
    if (findIndexResult >= 0) {
      self.pop(routes.length - findIndexResult - 1);
    } else {
      self.popToTop();
    }
  }, items);
};
