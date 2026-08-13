// Module ID: 11344
// Function ID: 11345
// Name: DCDChatList
// Dependencies: [19, 4334, 21, 4342, 1367, 5467, 11345, 11346, 589, 10983, 2]

// Module 11344 (DCDChatList)
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
  obj[2] = callback(require(11346) /* TTIFirstContentfulPaint */.TTIFirstContentfulPaint, { label: "chat_list_android" });
  obj[1] = callback(importDefault(11345), obj);
  return callback(require(5467) /* LegacyBaseButton */.GestureDetector, obj);
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
  return callback2(importDefault(10983), obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default forwardRefResult;
