// Module ID: 10023
// Function ID: 77458
// Name: DCDChatList
// Dependencies: [31, 4122, 33, 4130, 1324, 5217, 10024, 10025, 566, 9441, 2]

// Module 10023 (DCDChatList)
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function DCDChatList() {
  let obj = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */;
  const memo = importAllResult.useMemo(() => {
    const Gesture = outer1_0(outer1_2[5]).Gesture;
    const NativeResult = Gesture.Native();
    return Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
  }, []);
  obj = { gesture: memo };
  obj = { style: callback3().chatList, floatingChatInputEnabled: obj.useMobileVisualRefreshConfig({ location: "DCDChatList" }).chatInputFloating };
  const tmp = callback3();
  obj.children = callback(require(10025) /* TTIFirstContentfulPaint */.TTIFirstContentfulPaint, { label: "chat_list_android" });
  obj.children = callback(importDefault(10024), obj);
  return callback(require(5217) /* Directions */.GestureDetector, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ chatList: { flex: 1 } });
const forwardRefResult = importAllResult.forwardRef((children) => {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.roleStyle);
  obj = {};
  const merged = Object.assign(children);
  obj["roleStyle"] = stateFromStores;
  obj["ref"] = arg1;
  const items1 = [callback(DCDChatList, {}), children.children];
  obj["children"] = items1;
  return callback2(importDefault(9441), obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default forwardRefResult;
