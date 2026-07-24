// Module ID: 8855
// Function ID: 69699
// Name: GiftCustomMessage
// Dependencies: [31, 27, 1851, 33, 4130, 689, 1212, 7645, 8848, 2]

// Module 8855 (GiftCustomMessage)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { CUSTOM_GIFT_MESSAGE_MAX_LENGTH as closure_4 } from "GuildFeatures";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
class GiftCustomMessage {
  constructor(arg0) {
    ({ setMessagePosition, setCustomGiftMessage } = global);
    ({ onFocusMessage, customGiftMessage } = global);
    tmp = c6();
    intl = require("getSystemLocale").intl;
    items = [];
    items[0] = setCustomGiftMessage;
    stringResult = intl.string(require("getSystemLocale").t.ZkOo1U);
    obj = {
      style: tmp.container,
      onLayout(nativeEvent) {
            return callback(nativeEvent.nativeEvent.layout.y);
          }
    };
    callback = defineProperty.useCallback((arg0) => {
      setCustomGiftMessage(arg0);
    }, items);
    obj = {};
    intl2 = require("getSystemLocale").intl;
    obj.label = intl2.string(require("getSystemLocale").t.B3miE8);
    obj.placeholder = stringResult;
    obj.value = customGiftMessage;
    obj.onChange = callback;
    obj.maxLength = c4;
    obj.onFocus = onFocusMessage;
    obj.children = jsx(require("TextArea").TextArea, obj);
    return jsx(View, obj);
  }
}
let obj = {};
obj = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.container = obj;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let onFocusMessage;
  let setMessagePosition;
  ({ onFocusMessage, setMessagePosition } = arg0);
  let obj = require(8848) /* importDefaultResult1 */;
  const nativeGiftContext = obj.useNativeGiftContext();
  obj = { onFocusMessage, setMessagePosition, customGiftMessage: nativeGiftContext.customGiftMessage, setCustomGiftMessage: nativeGiftContext.setCustomGiftMessage };
  return <GiftCustomMessage onFocusMessage={onFocusMessage} setMessagePosition={setMessagePosition} customGiftMessage={nativeGiftContext.customGiftMessage} setCustomGiftMessage={nativeGiftContext.setCustomGiftMessage} />;
});
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomMessage.tsx");

export default memoResult;
export { GiftCustomMessage };
