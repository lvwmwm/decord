// Module ID: 11073
// Function ID: 11074
// Name: DCDChatList
// Dependencies: [19, 4662, 21, 4661, 1367, 6377, 11074, 11075, 589, 10474, 2]

// Module 11073 (DCDChatList)
import importAllResult from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function DCDChatList() {
  let obj = require(1367) /* useIsMobileVisualRefreshExperimentEnabled */;
  const memo = importAllResult.useMemo(() => {
    const Gesture = callback(table[5]).Gesture;
    const NativeResult = Gesture.Native();
    return Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
  }, []);
  obj = { gesture: memo, children: null };
  obj = { style: callback3().chatList, floatingChatInputEnabled: obj.useMobileVisualRefreshConfig({ location: "DCDChatList" }).chatInputFloating, children: null };
  const tmp = callback3();
  obj[2] = callback(require(11075) /* TTIFirstContentfulPaint */.TTIFirstContentfulPaint, { label: "chat_list_android" });
  obj[1] = callback(importDefault(11074), obj);
  return callback(require(6377) /* LegacyBaseButton */.GestureDetector, obj);
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
  return callback2(importDefault(10474), obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default forwardRefResult;
