// Module ID: 9023
// Function ID: 71015
// Name: useConnectRetry
// Dependencies: [31, 2]
// Exports: useConnectRetry

// Module 9023 (useConnectRetry)
import result from "result";

const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useConnectRetry.tsx");

export const useConnectRetry = function useConnectRetry(navigation, PRE_CONNECT) {
  const React = navigation;
  let closure_1 = PRE_CONNECT;
  const items = [navigation, PRE_CONNECT];
  return React.useCallback(() => {
    const routes = navigation.getState().routes;
    const findIndexResult = routes.findIndex((name) => name.name === outer1_1);
    if (findIndexResult >= 0) {
      navigation.pop(routes.length - findIndexResult - 1);
    } else {
      navigation.popToTop();
    }
  }, items);
};
