// Module ID: 13369
// Function ID: 101664
// Name: ThemedStatusBar
// Dependencies: []
// Exports: default

// Module 13369 (ThemedStatusBar)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  const isModalOpen = arg1(dependencyMap[5]).useIsModalOpen();
  const obj2 = arg1(dependencyMap[5]);
  const items1 = [closure_3];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => callback(closure_2[6]).isThemeDark(theme.theme));
  const obj3 = arg1(dependencyMap[4]);
  const globalStatusIndicatorState = arg1(dependencyMap[7]).useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    obj = { barStyle: "light-content" };
    return jsx(importDefault(dependencyMap[8]), obj);
  } else if (isModalOpen) {
    let str2 = "dark-content";
    if (stateFromStores1) {
      str2 = "light-content";
    }
    let str = str2;
  } else {
    if (!globalStatusIndicatorState.isVisible) {
      str = "dark-content";
    }
    str = "light-content";
  }
};
