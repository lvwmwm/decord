// Module ID: 6326
// Function ID: 6327
// Name: useStoreConnectionErrorAlert
// Dependencies: [19, 5672, 589, 4528, 1236, 2]
// Exports: default

// Module 6326 (useStoreConnectionErrorAlert)
import noop from "noop";
import updateProduct from "updateProduct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default function useStoreConnectionErrorAlert() {
  const items = [updateProduct];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => updateProduct.hasConnectionError());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      let obj = outer1_1(outer1_2[3]);
      obj = { title: null, body: null };
      const intl = stateFromStores(outer1_2[4]).intl;
      obj[0] = intl.string(stateFromStores(outer1_2[4]).t["U+H+kd"]);
      const intl2 = stateFromStores(outer1_2[4]).intl;
      obj[1] = intl2.string(stateFromStores(outer1_2[4]).t.Q9OYlM);
      obj.show(obj);
    }
  }, items1);
};
