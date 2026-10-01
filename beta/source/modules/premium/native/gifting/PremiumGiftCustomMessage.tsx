// Module ID: 10318
// Function ID: 10319
// Name: PremiumGiftCustomMessage
// Dependencies: [19, 17, 1374, 21, 4836, 576, 1115, 6506, 10162, 2]

// Module 10318 (PremiumGiftCustomMessage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import TextArea2 from "TextArea" /* 6506 */;
import NativeGiftContext from "NativeGiftContext" /* 10162 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
class GiftCustomMessage {
  constructor(arg0) {
    let closure_129_0;
    let customGiftMessage;
    let intl2;
    let onFocusMessage;
    let setCustomGiftMessage;
    ({ setMessagePosition: closure_129_0, setCustomGiftMessage } = arg0);
    ({ onFocusMessage, customGiftMessage } = arg0);
    const tmp = closure_6();
    const intl = intl3.intl;
    const items = [setCustomGiftMessage];
    const stringResult = intl.string(intl3.t.ZkOo1U);
    const callback = react.useCallback((arg0) => {
      setCustomGiftMessage(arg0);
    }, items);
    ({ label: intl2.string(intl3.t.B3miE8), placeholder: stringResult, value: customGiftMessage, onChange: callback, maxLength, onFocus: onFocusMessage });
    const TextArea = TextArea2.TextArea;
    intl2 = intl3.intl;
    return <View style={tmp.container} onLayout={function onLayout(nativeEvent) {
      return closure_1_0(nativeEvent.nativeEvent.layout.y);
    }}>{null}</View>;
  }
}
const View = react_native.View;
const React3 = PremiumConstants.CUSTOM_GIFT_MESSAGE_MAX_LENGTH;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
const metroRequire = createStyles.createStyles(obj);
const memoResult = react.memo((arg0) => {
  let onFocusMessage;
  let setMessagePosition;
  ({ onFocusMessage, setMessagePosition } = arg0);
  const obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  return <GiftCustomMessage onFocusMessage={onFocusMessage} setMessagePosition={setMessagePosition} customGiftMessage={nativeGiftContext.customGiftMessage} setCustomGiftMessage={nativeGiftContext.setCustomGiftMessage} />;
});
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomMessage.tsx");

export default memoResult;
export { GiftCustomMessage };
