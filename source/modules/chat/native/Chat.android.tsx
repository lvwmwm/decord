// Module ID: 10046
// Function ID: 10047
// Name: DCDChatList
// Dependencies: [19, 4181, 21, 4189, 1348, 5273, 10047, 10048, 589, 9466, 2]

// Module 10046 (DCDChatList)
import importAllResult from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function DCDChatList() {
  let obj = require(1348) /* useIsMobileVisualRefreshExperimentEnabled */;
  const memo = importAllResult.useMemo(() => {
    const Gesture = callback(table[5]).Gesture;
    const NativeResult = Gesture.Native();
    return Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
  }, []);
  obj = { gesture: memo, children: null };
  obj = { style: callback3().chatList, floatingChatInputEnabled: obj.useMobileVisualRefreshConfig({ location: "DCDChatList" }).chatInputFloating, children: null };
  const tmp = callback3();
  obj[2] = callback(require(10048) /* TTIFirstContentfulPaint */.TTIFirstContentfulPaint, { label: "chat_list_android" });
  obj[1] = callback(importDefault(10047), obj);
  return callback(require(5273) /* Directions */.GestureDetector, obj);
}
let c3 = importAllResult;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ chatList: { flex: 1 } });
const forwardRefResult = importAllResult.forwardRef((children, ref) => {
  let obj = require(589) /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  obj = {};
  const merged = Object.assign(children);
  obj.roleStyle = stateFromStores;
  obj.ref = ref;
  const items1 = [callback(DCDChatList, {}), children.children];
  obj.children = items1;
  return callback2(importDefault(9466), obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default forwardRefResult;
