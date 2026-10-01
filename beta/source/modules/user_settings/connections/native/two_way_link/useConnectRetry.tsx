// Module ID: 8556
// Function ID: 8557
// Name: react
// Dependencies: [19, 2]
// Exports: useConnectRetry

// Module 8556 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useConnectRetry.tsx");

export const useConnectRetry = function useConnectRetry(navigation, PRE_CONNECT) {
  let closure_0 = navigation;
  let closure_1 = PRE_CONNECT;
  const items = [navigation, PRE_CONNECT];
  return react.useCallback(() => {
    const routes = state.getState().routes;
    const findIndexResult = routes.findIndex((name) => name.name === closure_1_1);
    if (findIndexResult >= 0) {
      state.pop(routes.length - findIndexResult - 1);
    } else {
      state.popToTop();
    }
  }, items);
};
