// Module ID: 8808
// Function ID: 69420
// Name: GiftCustomMessage
// Dependencies: []

// Module 8808 (GiftCustomMessage)
class GiftCustomMessage {
  constructor(arg0) {
    ({ setMessagePosition: closure_0, setCustomGiftMessage } = global);
    dependencyMap = setCustomGiftMessage;
    ({ onFocusMessage, customGiftMessage } = global);
    tmp = closure_6();
    intl = arg1(dependencyMap[6]).intl;
    items = [];
    items[0] = setCustomGiftMessage;
    stringResult = intl.string(arg1(dependencyMap[6]).t.ZkOo1U);
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
    intl2 = arg1(dependencyMap[6]).intl;
    obj.label = intl2.string(arg1(dependencyMap[6]).t.B3miE8);
    obj.placeholder = stringResult;
    obj.value = customGiftMessage;
    obj.onChange = callback;
    obj.maxLength = closure_4;
    obj.onFocus = onFocusMessage;
    obj.children = jsx(arg1(dependencyMap[7]).TextArea, obj);
    return jsx(View, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).CUSTOM_GIFT_MESSAGE_MAX_LENGTH;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = {};
obj = { marginTop: importDefault(dependencyMap[5]).space.PX_24, marginHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
let closure_6 = arg1(dependencyMap[4]).createStyles(obj);
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((arg0) => {
  let onFocusMessage;
  let setMessagePosition;
  ({ onFocusMessage, setMessagePosition } = arg0);
  let obj = arg1(dependencyMap[8]);
  const nativeGiftContext = obj.useNativeGiftContext();
  obj = { onFocusMessage, setMessagePosition, customGiftMessage: nativeGiftContext.customGiftMessage, setCustomGiftMessage: nativeGiftContext.setCustomGiftMessage };
  return <GiftCustomMessage {...obj} />;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomMessage.tsx");

export default memoResult;
export { GiftCustomMessage };
