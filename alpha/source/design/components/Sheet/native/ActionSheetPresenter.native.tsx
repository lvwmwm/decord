// Module ID: 15157
// Function ID: 15158
// Name: ActionSheetPresenter
// Dependencies: [32, 19, 17, 5038, 1072, 21, 5838, 1264, 5037, 5832, 5382, 5827, 504, 13221, 5775, 2]
// Exports: ActionSheetPresenter

// Module 15157 (ActionSheetPresenter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5038 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const StyleSheet = react_native.StyleSheet;
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
function TrackedWrapperInner(sheetKey) {
  let closure_2;
  let content;
  let impressionName;
  let impressionProperties;
  let ref;
  let transitionState;
  let zIndex;
  sheetKey = sheetKey.sheetKey;
  transitionState = undefined;
  dependencyMap = undefined;
  let registerDismissHandler;
  let callback2;
  ({ content, impressionName, impressionProperties, zIndex, ref } = sheetKey);
  [transitionState, dependencyMap] = registerDismissHandler.useState("visible");
  _slicedToArray = registerDismissHandler.useRef(callback2);
  registerDismissHandler = registerDismissHandler.useCallback((current) => {
    ref.current = current;
  }, []);
  const ref2 = registerDismissHandler.useRef(callback2);
  const callback1 = registerDismissHandler.useCallback(() => {
    ref2.current();
  }, []);
  let obj = { type: sheetKey(1264).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  const tmp5 = transitionState(5838);
  tmp5(obj);
  const imperativeHandle = registerDismissHandler.useImperativeHandle(ref, () => ({
    componentDidEnter() {
      closure_1_2("visible");
    },
    componentWillLeave(current) {
      closure_1_2("exiting");
      ref2.current = current;
    },
    componentDidLeave() {
      closure_1_2("exited");
      ref2.current = callback2;
    }
  }), []);
  const items = [sheetKey];
  callback2 = registerDismissHandler.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(sheetKey);
  }, items);
  const items1 = [transitionState, callback2, callback1, registerDismissHandler];
  const items2 = [callback2];
  const memo = registerDismissHandler.useMemo(() => ({ transitionState, close: callback2, onLeave: callback1, registerDismissHandler }), items1);
  const callback3 = registerDismissHandler.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
    callback2();
    return true;
  }, items2);
  transitionState(5832)(callback3);
  const Provider = transitionState(5382).Provider;
  return <Provider value={memo}>{null}</Provider>;
}
let result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export function ActionSheetPresenter(appEntryKey) {
  let stack;
  appEntryKey = appEntryKey.appEntryKey;
  const items = [appEntryKey];
  const effect = react.useEffect(() => () => {
    const obj = ActionSheetActionCreatorsDefault;
    const result = obj.resetActionSheetsForAppEntryKey(appEntryKey);
  }, items);
  let obj = appEntryKey(504);
  const items1 = [ActionSheetStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => stack.getStack(), []);
  const found = stateFromStoresArray.filter((appEntryKey) => appEntryKey.appEntryKey === appEntryKey);
  const mapped = found.map((content) => <TrackedWrapperInner key={arg0.key} sheetKey={arg0.key} content={arg0.content} impressionName={arg0.impressionName} impressionProperties={arg0.impressionProperties} zIndex={arg0.zIndex} />);
  const TransitionGroup = appEntryKey(13221).TransitionGroup;
  return <TransitionGroup style={StyleSheet.absoluteFill} component={appEntryKey(5775).TransitionGroupOverlayView}>{mapped}</TransitionGroup>;
}
