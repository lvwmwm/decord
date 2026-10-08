// Module ID: 10200
// Function ID: 10201
// Name: PremiumGiftCustomMessage
// Dependencies: [19, 17, 1391, 21, 5090, 587, 558, 576, 1126, 6763, 10040, 2]

// Module 10200 (PremiumGiftCustomMessage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import TextArea2 from "TextArea" /* 6763 */;
import NativeGiftContext from "NativeGiftContext" /* 10040 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const maxLength = PremiumConstants.CUSTOM_GIFT_MESSAGE_MAX_LENGTH;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftCustomMessage(arg0) {
  let customGiftMessage;
  let first;
  let onFocusMessage;
  let setCustomGiftMessage;
  let setMessagePosition;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(14);
  ({ onFocusMessage, setMessagePosition } = arg0);
  ({ customGiftMessage, setCustomGiftMessage } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl3.t.ZkOo1U);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== setCustomGiftMessage) {
    const fn = function v(arg0) {
      setCustomGiftMessage(arg0);
    };
    cResult[1] = setCustomGiftMessage;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const container = tmp4.container;
  if (cResult[3] !== setMessagePosition) {
    const fn2 = function y(nativeEvent) {
      return setMessagePosition(nativeEvent.nativeEvent.layout.y);
    };
    cResult[3] = setMessagePosition;
    cResult[4] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl3.t.B3miE8);
    cResult[5] = stringResult1;
    tmp9 = stringResult1;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === customGiftMessage) {
    if (cResult[7] === tmp7) {
      let tmp11;
      if (cResult[8] === onFocusMessage) {
        tmp11 = cResult[9];
      }
      if (cResult[10] === tmp4.container) {
        if (cResult[11] === tmp8) {
          let tmp13;
          if (cResult[12] === tmp11) {
            tmp13 = cResult[13];
          }
          return tmp13;
        }
      }
      const tmp16 = <View style={container} onLayout={tmp8}>{tmp11}</View>;
      cResult[10] = tmp4.container;
      cResult[11] = tmp8;
      cResult[12] = tmp11;
      cResult[13] = tmp16;
      tmp13 = tmp16;
    }
  }
  const tmp12 = jsx(TextArea2.TextArea, { label: tmp9, placeholder: first, value: customGiftMessage, onChange: tmp7, maxLength, onFocus: onFocusMessage });
  cResult[6] = customGiftMessage;
  cResult[7] = tmp7;
  cResult[8] = onFocusMessage;
  cResult[9] = tmp12;
  tmp11 = tmp12;
}) : (function GiftCustomMessage(arg0) {
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
});
let closure_7 = tmp3;
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGiftCustomMessage(arg0) {
  let customGiftMessage;
  let onFocusMessage;
  let setCustomGiftMessage;
  let setMessagePosition;
  const obj = react2;
  const cResult = obj.c(5);
  ({ onFocusMessage, setMessagePosition } = arg0);
  const obj2 = NativeGiftContext;
  const nativeGiftContext = obj2.useNativeGiftContext();
  ({ customGiftMessage, setCustomGiftMessage } = nativeGiftContext);
  if (cResult[0] === customGiftMessage) {
    if (cResult[1] === onFocusMessage) {
      if (cResult[2] === setCustomGiftMessage) {
        let tmp3;
        if (cResult[3] === setMessagePosition) {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const tmp4 = <closure_7 onFocusMessage={onFocusMessage} setMessagePosition={setMessagePosition} customGiftMessage={customGiftMessage} setCustomGiftMessage={setCustomGiftMessage} />;
  cResult[0] = customGiftMessage;
  cResult[1] = onFocusMessage;
  cResult[2] = setCustomGiftMessage;
  cResult[3] = setMessagePosition;
  cResult[4] = tmp4;
  tmp3 = tmp4;
}) : (function PremiumGiftCustomMessage(arg0) {
  let onFocusMessage;
  let setMessagePosition;
  ({ onFocusMessage, setMessagePosition } = arg0);
  const obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  return <closure_7 onFocusMessage={onFocusMessage} setMessagePosition={setMessagePosition} customGiftMessage={nativeGiftContext.customGiftMessage} setCustomGiftMessage={nativeGiftContext.setCustomGiftMessage} />;
}));
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftCustomMessage.tsx");

export default memoResult;
export const GiftCustomMessage = tmp3;
