// Module ID: 9446
// Function ID: 9447
// Name: useConnectRetry
// Dependencies: [19, 2]
// Exports: useConnectRetry

// Module 9446 (useConnectRetry)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useConnectRetry.tsx");

export const useConnectRetry = function useConnectRetry(navigation, PRE_CONNECT) {
  closure_1 = PRE_CONNECT;
  const items = [navigation, PRE_CONNECT];
  return noop.useCallback(() => {
    const routes = navigation.getState().routes;
    const findIndexResult = routes.findIndex((name) => name.name === PRE_CONNECT);
    if (findIndexResult >= 0) {
      arr.pop(routes.length - findIndexResult - 1);
    } else {
      arr.popToTop();
    }
  }, items);
};
