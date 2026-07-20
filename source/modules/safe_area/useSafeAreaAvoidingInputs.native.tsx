// Module ID: 9817
// Function ID: 76162
// Name: _calculateScrollOffset
// Dependencies: []
// Exports: default

// Module 9817 (_calculateScrollOffset)
function _calculateScrollOffset() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _calculateScrollOffset = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/safe_area/useSafeAreaAvoidingInputs.native.tsx");

export default function useSafeAreaAvoidingInputs(insets) {
  insets = insets.insets;
  const arg1 = insets;
  const inputs = insets.inputs;
  const importDefault = inputs;
  const scrollViewRef = insets.scrollViewRef;
  const dependencyMap = scrollViewRef;
  const callback = React.useRef(inputs);
  const items = [inputs];
  const effect = React.useEffect(() => {
    closure_3.current = inputs;
  }, items);
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [insets, scrollViewRef];
  const onFocus = React.useCallback(callback(insets), items1);
  const React = onFocus;
  const items2 = [onFocus];
  const effect1 = React.useEffect(() => {
    const insets = setTimeout(onFocus, insets(scrollViewRef[5]).getKeyboardDuration());
    return () => clearTimeout(closure_0);
  }, items2);
  return { onFocus };
};
