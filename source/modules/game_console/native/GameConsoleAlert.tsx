// Module ID: 9037
// Function ID: 71002
// Name: SelfDismissibleAlertBody
// Dependencies: []
// Exports: SelfDismissibleAlertBody

// Module 9037 (SelfDismissibleAlertBody)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles({ errorCodeText: { marginTop: 16 }, alertBody: { marginTop: 0 }, container: { flex: 1 }, body: { marginTop: 16 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/game_console/native/GameConsoleAlert.tsx");

export const SelfDismissibleAlertBody = function SelfDismissibleAlertBody(errorCodeMessage) {
  let body;
  let dismissCallback;
  ({ body, dismissCallback } = errorCodeMessage);
  const arg1 = dismissCallback;
  errorCodeMessage = errorCodeMessage.errorCodeMessage;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => remoteSessionId.getRemoteSessionId());
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores, dismissCallback];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      dismissCallback();
    }
  }, items1);
  let tmp4 = body;
  if (null != errorCodeMessage) {
    obj = { style: tmp.container };
    obj = { <string:1558859557>: "Reflect", <string:996770733>: "container" };
    const items2 = [, ];
    ({ body: arr3[0], alertBody: arr3[1] } = tmp);
    obj.style = items2;
    obj.children = body;
    const items3 = [callback(arg1(dependencyMap[6]).Text, obj), ];
    const obj1 = { <string:1558859557>: "Reflect", <string:996770733>: "container" };
    const items4 = [, ];
    ({ body: arr5[0], errorCodeText: arr5[1] } = tmp);
    obj1.style = items4;
    obj1.children = errorCodeMessage;
    items3[1] = callback(arg1(dependencyMap[6]).Text, obj1);
    obj.children = items3;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
};
