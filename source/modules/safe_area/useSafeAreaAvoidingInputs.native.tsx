// Module ID: 9830
// Function ID: 76243
// Name: _calculateScrollOffset
// Dependencies: [5, 31, 1450, 689, 9831, 5161, 2]
// Exports: default

// Module 9830 (_calculateScrollOffset)
import getKeyboardDuration from "getKeyboardDuration";
import result from "result";

const require = arg1;
function _calculateScrollOffset() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("useWindowDimensions").fileFinishedImporting("modules/safe_area/useSafeAreaAvoidingInputs.native.tsx");

export default function useSafeAreaAvoidingInputs(insets) {
  insets = insets.insets;
  const inputs = insets.inputs;
  const scrollViewRef = insets.scrollViewRef;
  const callback = onFocus.useRef(inputs);
  const items = [inputs];
  const effect = onFocus.useEffect(() => {
    getKeyboardDuration.current = inputs;
  }, items);
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [insets, scrollViewRef];
  onFocus = onFocus.useCallback(callback(insets), items1);
  const items2 = [onFocus];
  const effect1 = onFocus.useEffect(() => {
    const timeout = setTimeout(onFocus, insets(scrollViewRef[5]).getKeyboardDuration());
    return () => clearTimeout(closure_0);
  }, items2);
  return { onFocus };
};
