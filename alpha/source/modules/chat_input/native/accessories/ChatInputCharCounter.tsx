// Module ID: 12778
// Function ID: 12779
// Name: ChatInputCharCounter
// Dependencies: [32, 19, 1372, 1074, 1374, 21, 4829, 504, 4483, 9499, 9508, 4523, 1115, 5427, 4825, 9020, 2]

// Module 12778 (ChatInputCharCounter)
import util from "util" /* 1115 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const UpsellTypes = fn(1074).UpsellTypes;
const PremiumUpsellTypes = fn(1374).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
let closure_10 = createStyles.createStyles({ container: { alignItems: "center", paddingBottom: 6 } });
const forwardRefResult = noop.forwardRef((analyticsLocations, ref) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  dependencyMap = undefined;
  const tmp = closure_10();
  const items = [UserStore];
  const stateFromStores = analyticsLocations(504).useStateFromStores(items, () => stateFromStores(_undefined[8]).canUseIncreasedMessageLength(currentUser.getCurrentUser()));
  let obj = analyticsLocations(504);
  [tmp6, c2] = noop.useState(0);
  const tmp7 = stateFromStores(9499)();
  _slicedToArray = tmp7;
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    onMessageLengthChanged(length) {
      _undefined(Math.max(0, length - maxLength));
    }
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp7];
  let tmp10 = null;
  if (tmp6 > 0) {
    let obj2 = { onPress: tmp9, style: tmp.container, children: null };
    let obj3 = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xs/medium", children: null };
    const _HermesInternal = HermesInternal;
    obj3.children = "-" + tmp6;
    const items2 = [closure_8(tmp2(4825).Text, obj3), closure_8(tmp2(9020).NitroWheelIcon, { size: "sm" })];
    obj2.children = items2;
    tmp10 = closure_9(tmp2(5427).PressableOpacity, obj2);
  }
  return tmp10;
});
forwardRefResult.displayName = "ChatInputCharCounter";
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default noop.memo(forwardRefResult);
