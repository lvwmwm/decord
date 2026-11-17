// Module ID: 9594
// Function ID: 9595
// Name: useStoreConnectionErrorAlert
// Dependencies: [19, 9311, 504, 6266, 1113, 2]
// Exports: default

// Module 9594 (useStoreConnectionErrorAlert)
import intl3 from "intl" /* 1113 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6266 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 9311 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default function useStoreConnectionErrorAlert() {
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [IAPStore];
  stateFromStores = obj.useStateFromStores(items, () => IAPStore.hasConnectionError());
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    let intl;
    let intl2;
    const tmp = stateFromStores;
    if (tmp) {
      const obj = { title: intl.string(intl3.t["U+H+kd"]), body: intl2.string(intl3.t.Q9OYlM) };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = intl3.intl;
      intl2 = intl3.intl;
      show(obj);
    }
  }, items1);
};
