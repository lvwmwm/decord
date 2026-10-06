// Module ID: 11816
// Function ID: 11817
// Name: ChatInputCharCounter
// Dependencies: [32, 19, 1378, 1086, 1380, 21, 4837, 558, 576, 4491, 504, 8602, 8611, 4531, 1127, 5436, 4833, 8119, 2]

// Module 11816 (ChatInputCharCounter)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8611 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1378 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let analyticsLocations, dependencyMap, maxLength;

let c9;
let metroImportAll;
const UpsellTypes = Constants.UpsellTypes;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { alignItems: "center", paddingBottom: 6 } });
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsLocations, ref) => {
  let currentUser;
  let tmp11;
  let tmp5;
  let tmp6;
  let obj = analyticsLocations(576);
  const cResult = obj.c(12);
  const tmp = analyticsLocations;
  analyticsLocations = analyticsLocations.analyticsLocations;
  closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function v() {
      const obj = stateFromStores(dependencyMap[9]);
      return obj.canUseIncreasedMessageLength(currentUser.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  let obj3 = react;
  [r10036, dependencyMap] = maxLength(react.useState(0), 2);
  const tmp9 = maxLength(react.useState(0), 2);
  const tmp10 = stateFromStores(8602)();
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
    tmp11 = E;
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
      let intl;
      let obj2;
      let obj4;
      if (stateFromStores) {
        const obj = { content: intl.formatToPlainString(intl2.t.vcvHa0, obj2), key: "premium-message-length-info-toast" };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl2.intl;
        obj2 = { maxLength };
        open(obj);
      } else {
        const obj3 = { initialUpsellKey: UpsellTypes.LONGER_MESSAGE, analyticsLocations, analyticsProperties: obj4 };
        obj4 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
        const tmpResult2 = PremiumUpsellUtilsDefault;
        const result = tmpResult2.handleShowUpsellAlert(obj3);
      }
    }
  }
  cResult[4] = analyticsLocations;
  cResult[5] = stateFromStores;
  cResult[6] = tmp10;
  cResult[7] = C;
}) : ((analyticsLocations, ref) => {
  let _undefined;
  let c2;
  let currentUser;
  let items2;
  let tmp6;
  analyticsLocations = analyticsLocations.analyticsLocations;
  dependencyMap = undefined;
  maxLength = undefined;
  const tmp = closure_10();
  let obj = analyticsLocations(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = stateFromStores(c2[9]);
    return obj.canUseIncreasedMessageLength(currentUser.getCurrentUser());
  });
  [tmp6, c2] = maxLength(react.useState(0), 2);
  const tmp5 = maxLength(react.useState(0), 2);
  const tmp7 = stateFromStores(8602)();
  maxLength = tmp7;
  const imperativeHandle = react.useImperativeHandle(ref, () => ({
    onMessageLengthChanged(arg0) {
      _undefined(Math.max(0, arg0 - maxLength));
    }
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp7];
  let tmp10 = null;
  if (tmp6 > 0) {
    let obj2 = { onPress: tmp9, style: tmp.container, children: items2 };
    const PressableOpacity = tmp2(5436).PressableOpacity;
    let obj3 = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xs/medium", children: "-" + tmp6 };
    const _HermesInternal = HermesInternal;
    const Text = tmp2(4833).Text;
    items2 = [closure_8(Text, obj3), closure_8(tmp2(8119).NitroWheelIcon, { size: "sm" })];
    tmp10 = closure_9(PressableOpacity, obj2);
  }
  return tmp10;
}));
forwardRefResult.displayName = "ChatInputCharCounter";
const memoResult = react.memo(forwardRefResult);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default memoResult;
