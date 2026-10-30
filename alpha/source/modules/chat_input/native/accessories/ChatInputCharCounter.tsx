// Module ID: 13949
// Function ID: 13950
// Name: ChatInputCharCounter
// Dependencies: [32, 19, 1384, 1072, 1386, 21, 5009, 575, 504, 2048, 9754, 9764, 5707, 1114, 6974, 5619, 9506, 2]

// Module 13949 (ChatInputCharCounter)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9764 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
({ MAX_MESSAGE_LENGTH: metroRequire, UpsellTypes: metroImportDefault } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { container: obj2 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const unpackModuleId = createStyles.createStyles(obj);
class ChatCounter {
  constructor(ref) {
    let analyticsLocations;
    let c3;
    let c6;
    let currentUser;
    let first;
    let items2;
    let items3;
    let items4;
    let items5;
    let items6;
    let maxLength;
    let style;
    let tmp11;
    let tmp16Result;
    ({ style, analyticsLocations } = ref);
    first = undefined;
    currentUser = undefined;
    c6 = undefined;
    ref = ref.ref;
    let tmp = closure_11();
    let obj = analyticsLocations(504);
    const items = [currentUser];
    const stateFromStores = obj.useStateFromStores(items, () => {
      const obj = stateFromStores(maxLength[9]);
      return obj.canUseIncreasedMessageLength(currentUser.getCurrentUser());
    });
    const tmp5 = stateFromStores(9754)();
    dependencyMap = tmp5;
    let result = tmp5 / 10;
    _slicedToArray = result;
    [first, currentUser] = first.useState(tmp7 - 1);
    [tmp11, c6] = _slicedToArray(first.useState(false), 2);
    const tmp10 = _slicedToArray(first.useState(false), 2);
    const imperativeHandle = first.useImperativeHandle(ref, () => ({
      onMessageLengthChanged(length) {
        currentUser(Math.max(-closure_1_3 - 1, length - maxLength));
        closure_1_6(length > c6);
      }
    }));
    const items1 = [analyticsLocations, stateFromStores, tmp5, first];
    const callback = first.useCallback(() => {
      let intl;
      let intl2;
      let obj4;
      let obj6;
      const tmp = stateFromStores;
      if (tmp) {
        if (first > 0) {
          const obj2 = { text: intl.string(intl3.t.YSRIqa) };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl3.intl;
          open("premium-message-length-info-toast", obj2);
        } else {
          const obj3 = { text: intl2.formatToPlainString(intl3.t.vcvHa0, obj4) };
          const open2 = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl2 = intl3.intl;
          obj4 = { maxLength };
          open2("premium-message-length-info-toast", obj3);
        }
      } else {
        const obj5 = { initialUpsellKey: metroImportDefault.LONGER_MESSAGE, analyticsLocations, analyticsProperties: obj6 };
        obj6 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
        const obj = PremiumUpsellUtilsDefault;
        const result = obj.handleShowUpsellAlert(obj5);
      }
    }, items1);
    if (first > 0) {
      const tmp19 = closure_10;
      let obj2 = { onPress: callback, style: items2, children: items3 };
      items2 = [tmp.container, style];
      const PressableOpacity3 = tmp2(6974).PressableOpacity;
      let obj3 = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xxs/semibold", children: "-" + first };
      const _HermesInternal = HermesInternal;
      const Text = tmp2(5619).Text;
      items3 = [closure_9(Text, obj3), ];
      let tmp20Result = null;
      const tmp20 = closure_9;
      if (!stateFromStores) {
        tmp20Result = tmp20(tmp2(9506).NitroWheelIcon, { size: "xs", color: "icon-muted" });
      }
      items3[1] = tmp20Result;
      tmp16Result = tmp19(PressableOpacity3, obj2);
    } else if (first >= -result) {
      let obj4 = { onPress: callback, style: items4, children: items5 };
      items4 = [tmp.container, style];
      const PressableOpacity2 = tmp2(6974).PressableOpacity;
      let obj5 = { color: "text-default", lineClamp: 1, variant: "text-xxs/semibold", children: -first };
      items5 = [closure_9(tmp2(5619).Text, obj5), ];
      let tmp17Result = null;
      const tmp16 = closure_10;
      const tmp17 = closure_9;
      if (tmp11) {
        tmp17Result = tmp17(tmp2(9506).NitroWheelIcon, { size: "xs", color: "icon-muted" });
      }
      items5[1] = tmp17Result;
      tmp16Result = tmp16(PressableOpacity2, obj4);
    } else {
      tmp16Result = null;
      if (tmp11) {
        let obj6 = { onPress: callback, style: items6, children: closure_9(tmp2(9506).NitroWheelIcon, { size: "xs", color: "icon-muted" }) };
        items6 = [tmp.container, style];
        const PressableOpacity = tmp2(6974).PressableOpacity;
        tmp16Result = closure_9(PressableOpacity, obj6);
      }
    }
    return tmp16Result;
  }
}
ChatCounter.displayName = "ChatInputCharCounter";
const memoResult = react.memo(ChatCounter);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default memoResult;
