// Module ID: 9045
// Function ID: 71056
// Name: SelfDismissibleAlertBody
// Dependencies: [31, 27, 4144, 33, 4130, 566, 4126, 2]
// Exports: SelfDismissibleAlertBody

// Module 9045 (SelfDismissibleAlertBody)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ errorCodeText: { marginTop: 16 }, alertBody: { marginTop: 0 }, container: { flex: 1 }, body: { marginTop: 16 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_console/native/GameConsoleAlert.tsx");

export const SelfDismissibleAlertBody = function SelfDismissibleAlertBody(errorCodeMessage) {
  let body;
  let dismissCallback;
  ({ body, dismissCallback } = errorCodeMessage);
  errorCodeMessage = errorCodeMessage.errorCodeMessage;
  const tmp = callback3();
  let obj = dismissCallback(stateFromStores[5]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.getRemoteSessionId());
  const items1 = [stateFromStores, dismissCallback];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      dismissCallback();
    }
  }, items1);
  let tmp4 = body;
  if (null != errorCodeMessage) {
    obj = { style: tmp.container };
    obj = { maxFontSizeMultiplier: 1, variant: "text-md/normal" };
    const items2 = [, ];
    ({ body: arr3[0], alertBody: arr3[1] } = tmp);
    obj.style = items2;
    obj.children = body;
    const items3 = [callback(dismissCallback(stateFromStores[6]).Text, obj), ];
    const obj1 = { maxFontSizeMultiplier: 1, variant: "text-md/normal" };
    const items4 = [, ];
    ({ body: arr5[0], errorCodeText: arr5[1] } = tmp);
    obj1.style = items4;
    obj1.children = errorCodeMessage;
    items3[1] = callback(dismissCallback(stateFromStores[6]).Text, obj1);
    obj.children = items3;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
};
