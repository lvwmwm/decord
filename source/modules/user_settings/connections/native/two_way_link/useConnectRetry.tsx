// Module ID: 9165
// Function ID: 9166
// Name: useConnectRetry
// Dependencies: [19, 2]
// Exports: useConnectRetry

// Module 9165 (useConnectRetry)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useConnectRetry.tsx");

export const useConnectRetry = function useConnectRetry(navigation, PRE_CONNECT) {
  const React = navigation;
  let closure_1 = PRE_CONNECT;
  const items = [navigation, PRE_CONNECT];
  return React.useCallback(() => {
    let arr = navigation;
    const routes = navigation.getState().routes;
    const findIndexResult = routes.findIndex((name) => name.name === closure_1);
    if (findIndexResult >= 0) {
      arr = arr.pop(routes.length - findIndexResult - 1);
    } else {
      arr.popToTop();
    }
  }, items);
};
