// Module ID: 6652
// Function ID: 51100
// Name: useStoreConnectionErrorAlert
// Dependencies: [31, 5621, 566, 4470, 1212, 2]
// Exports: default

// Module 6652 (useStoreConnectionErrorAlert)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default function useStoreConnectionErrorAlert() {
  const items = [_isNativeReflectConstruct];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_4.hasConnectionError());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      let obj = outer1_1(outer1_2[3]);
      obj = {};
      const intl = stateFromStores(outer1_2[4]).intl;
      obj.title = intl.string(stateFromStores(outer1_2[4]).t["U+H+kd"]);
      const intl2 = stateFromStores(outer1_2[4]).intl;
      obj.body = intl2.string(stateFromStores(outer1_2[4]).t.Q9OYlM);
      obj.show(obj);
    }
  }, items1);
};
