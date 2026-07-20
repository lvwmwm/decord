// Module ID: 6641
// Function ID: 51003
// Name: useStoreConnectionErrorAlert
// Dependencies: []
// Exports: default

// Module 6641 (useStoreConnectionErrorAlert)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium/native/useStoreConnectionErrorAlert.tsx");

export default function useStoreConnectionErrorAlert() {
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => closure_4.hasConnectionError());
  const arg1 = stateFromStores;
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      let obj = callback(closure_2[3]);
      obj = {};
      const intl = stateFromStores(closure_2[4]).intl;
      obj.title = intl.string(stateFromStores(closure_2[4]).t.U+H+kd);
      const intl2 = stateFromStores(closure_2[4]).intl;
      obj.body = intl2.string(stateFromStores(closure_2[4]).t.Q9OYlM);
      obj.show(obj);
    }
  }, items1);
};
