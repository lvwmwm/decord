// Module ID: 12578
// Function ID: 12579
// Name: ChatInputCharCounter
// Dependencies: [32, 19, 1376, 1078, 1378, 21, 4758, 558, 568, 4418, 504, 9416, 9425, 4458, 1119, 5341, 4754, 8938, 2]

// Module 12578 (ChatInputCharCounter)
import util from "util" /* 1119 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const UpsellTypes = fn(1078).UpsellTypes;
const PremiumUpsellTypes = fn(1378).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4758);
let closure_10 = createStyles.createStyles({ container: { alignItems: "center", paddingBottom: 6 } });
const ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsLocations, ref) => {
  const cResult = analyticsLocations(568).c(12);
  analyticsLocations = analyticsLocations.analyticsLocations;
  closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function v() {
      return stateFromStores(dependencyMap[9]).canUseIncreasedMessageLength(currentUser.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = analyticsLocations(568);
  const stateFromStores = analyticsLocations(504).useStateFromStores(tmp5, tmp6);
  let obj3 = noop;
  let tmpResult = analyticsLocations(504);
  [r10036, dependencyMap] = maxLength(noop.useState(0), 2);
  const tmp10 = stateFromStores(9416)();
  maxLength = tmp10;
  if (cResult[2] !== tmp10) {
    class E {
      constructor() {
        obj = {
          onMessageLengthChanged(arg0) {
                  closure_1_2(Math.max(0, arg0 - maxLength));
                }
        };
        return obj;
      }
    }
    cResult[2] = tmp10;
    cResult[3] = E;
    const tmp11 = E;
  } else {
    class E {
      constructor() {
        obj = {
          onMessageLengthChanged(arg0) {
                  closure_1_2(Math.max(0, arg0 - maxLength));
                }
        };
        return obj;
      }
    }
  }
  const imperativeHandle = obj3.useImperativeHandle(ref, tmp11);
  if (cResult[4] === analyticsLocations) {
    class E {
      constructor() {
        obj = {
          onMessageLengthChanged(arg0) {
                  closure_1_2(Math.max(0, arg0 - maxLength));
                }
        };
        return obj;
      }
    }
  }
  class C {
    constructor() {
      tmp = closure_1;
      tmp2 = closure_2;
      if (closure_1) {
        tmpResult = tmp(tmp2[13]);
        obj1 = { content: null, key: "premium-message-length-info-toast" };
        tmp7 = closure_0;
        tmp8 = closure_2;
        intl = closure_0(closure_2[14]).intl;
        tmp9 = closure_2;
        obj7 = { maxLength: null };
        tmp10 = closure_3;
        obj7.maxLength = closure_3;
        obj1.content = intl.formatToPlainString(closure_0(closure_2[14]).t.vcvHa0, obj7);
        openResult = tmpResult.open(obj1);
      } else {
        tmpResult1 = tmp(tmp2[12]);
        obj8 = { initialUpsellKey: null, analyticsLocations: null, analyticsProperties: null };
        tmp3 = UpsellTypes;
        obj8.initialUpsellKey = UpsellTypes.LONGER_MESSAGE;
        tmp4 = analyticsLocations;
        obj8.analyticsLocations = analyticsLocations;
        obj9 = { type: null };
        tmp5 = PremiumUpsellTypes;
        obj9.type = PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL;
        obj8.analyticsProperties = obj9;
        result = tmpResult1.handleShowUpsellAlert(obj8);
      }
      return;
    }
  }
  cResult[4] = analyticsLocations;
  cResult[5] = stateFromStores;
  cResult[6] = tmp10;
  cResult[7] = C;
}) : ((analyticsLocations, ref) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  dependencyMap = undefined;
  maxLength = undefined;
  const tmp = closure_10();
  const items = [UserStore];
  const stateFromStores = analyticsLocations(504).useStateFromStores(items, () => stateFromStores(_undefined[9]).canUseIncreasedMessageLength(currentUser.getCurrentUser()));
  let obj = analyticsLocations(504);
  [tmp6, c2] = maxLength(noop.useState(0), 2);
  const tmp7 = stateFromStores(9416)();
  maxLength = tmp7;
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    onMessageLengthChanged(arg0) {
      _undefined(Math.max(0, arg0 - maxLength));
    }
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp7];
  let tmp10 = null;
  if (tmp6 > 0) {
    let obj2 = { onPress: tmp9, style: tmp.container, children: null };
    let obj3 = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xs/medium", children: null };
    const _HermesInternal = HermesInternal;
    obj3.children = "-" + tmp6;
    const items2 = [closure_8(tmp2(4754).Text, obj3), closure_8(tmp2(8938).NitroWheelIcon, { size: "sm" })];
    obj2.children = items2;
    tmp10 = closure_9(tmp2(5341).PressableOpacity, obj2);
  }
  return tmp10;
}));
forwardRefResult.displayName = "ChatInputCharCounter";
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default noop.memo(forwardRefResult);
