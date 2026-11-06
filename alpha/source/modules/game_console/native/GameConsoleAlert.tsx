// Module ID: 12160
// Function ID: 12161
// Name: GameConsoleAlert
// Dependencies: [19, 17, 5921, 21, 5170, 504, 5781, 2]
// Exports: SelfDismissibleAlertBody

// Module 12160 (GameConsoleAlert)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5921 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ errorCodeText: { marginTop: 16 }, alertBody: { marginTop: 0 }, container: { flex: 1 }, body: { marginTop: 16 } });
const result = size.fileFinishedImporting("modules/game_console/native/GameConsoleAlert.tsx");

export function SelfDismissibleAlertBody(errorCodeMessage) {
  let body;
  let dismissCallback;
  let items2;
  let items3;
  let items4;
  let remoteSessionId;
  ({ body, dismissCallback } = errorCodeMessage);
  errorCodeMessage = errorCodeMessage.errorCodeMessage;
  let stateFromStores;
  const tmp = closure_7();
  const items = [GameConsoleStore];
  const obj = dismissCallback(stateFromStores[5]);
  stateFromStores = obj.useStateFromStores(items, () => remoteSessionId.getRemoteSessionId());
  const items1 = [stateFromStores, dismissCallback];
  const effect = react.useEffect(() => {
    if (null != stateFromStores) {
      dismissCallback();
    }
  }, items1);
  let tmp6 = body;
  if (null != errorCodeMessage) {
    const obj3 = { maxFontSizeMultiplier: 1, variant: "body-md/normal", style: items2, children: body };
    items2 = [, ];
    const obj2 = { style: tmp.container, children: items3 };
    ({ body: arr3[0], alertBody: arr3[1] } = tmp);
    items3 = [closure_5(tmp2(stateFromStores[6]).Text, obj3), ];
    const obj4 = { maxFontSizeMultiplier: 1, variant: "body-md/normal", style: items4, children: errorCodeMessage };
    items4 = [, ];
    ({ body: arr5[0], errorCodeText: arr5[1] } = tmp);
    items3[1] = closure_5(dismissCallback(stateFromStores[6]).Text, obj4);
    tmp6 = closure_6(View, obj2);
  }
  return tmp6;
}
