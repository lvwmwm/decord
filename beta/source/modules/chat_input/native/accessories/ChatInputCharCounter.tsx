// Module ID: 11922
// Function ID: 11923
// Name: ChatInputCharCounter
// Dependencies: [32, 19, 1372, 1074, 1374, 21, 4836, 504, 4488, 8605, 8614, 4528, 1115, 5435, 4832, 8122, 2]

// Module 11922 (ChatInputCharCounter)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8614 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let analyticsLocations, dependencyMap;

let c9;
let metroImportAll;
let _slicedToArray = _slicedToArray_mod;
const UpsellTypes = Constants.UpsellTypes;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { alignItems: "center", paddingBottom: 6 } });
const forwardRefResult = react.forwardRef((analyticsLocations, ref) => {
  let _undefined;
  let c2;
  let currentUser;
  let items2;
  let maxLength;
  let tmp6;
  analyticsLocations = analyticsLocations.analyticsLocations;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_10();
  let obj = analyticsLocations(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = stateFromStores(c2[8]);
    return obj.canUseIncreasedMessageLength(currentUser.getCurrentUser());
  });
  [tmp6, c2] = _slicedToArray(react.useState(0), 2);
  const tmp5 = _slicedToArray(react.useState(0), 2);
  const tmp7 = stateFromStores(8605)();
  _slicedToArray = tmp7;
  const imperativeHandle = react.useImperativeHandle(ref, () => ({
    onMessageLengthChanged(length) {
      _undefined(Math.max(0, length - maxLength));
    }
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp7];
  let tmp10 = null;
  if (tmp6 > 0) {
    let obj2 = { onPress: tmp9, style: tmp.container, children: items2 };
    const PressableOpacity = tmp2(5435).PressableOpacity;
    let obj3 = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xs/medium", children: "-" + tmp6 };
    const _HermesInternal = HermesInternal;
    const Text = tmp2(4832).Text;
    items2 = [closure_8(Text, obj3), closure_8(tmp2(8122).NitroWheelIcon, { size: "sm" })];
    tmp10 = closure_9(PressableOpacity, obj2);
  }
  return tmp10;
});
forwardRefResult.displayName = "ChatInputCharCounter";
const memoResult = react.memo(forwardRefResult);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default memoResult;
