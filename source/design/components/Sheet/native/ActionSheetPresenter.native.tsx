// Module ID: 13098
// Function ID: 101042
// Name: ActionSheetPresenter
// Dependencies: [57, 31, 27, 3823, 653, 33, 8604, 480, 4098, 4540, 5444, 4524, 566, 10393, 4477, 2]
// Exports: ActionSheetPresenter

// Module 13098 (ActionSheetPresenter)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { StyleSheet } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NOOP } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let closure_9 = importAllResult.forwardRef((sheetKey) => {
  let content;
  let impressionName;
  let impressionProperties;
  let zIndex;
  sheetKey = sheetKey.sheetKey;
  ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
  const tmp = callback(callback.useState("visible"), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  callback = callback.useRef(callback2);
  callback = callback.useCallback((current) => {
    _slicedToArray.current = current;
  }, []);
  let closure_5 = callback.useRef(callback2);
  const callback1 = callback.useCallback(() => {
    ref2.current();
  }, []);
  let obj = { type: sheetKey(480).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  first(8604)(obj);
  const imperativeHandle = callback.useImperativeHandle(arg1, () => ({
    componentDidEnter() {
      outer1_2("visible");
    },
    componentWillLeave(current) {
      outer1_2("exiting");
      outer1_5.current = current;
    },
    componentDidLeave() {
      outer1_2("exited");
      outer1_5.current = callback2;
    }
  }), []);
  const items = [sheetKey];
  callback2 = callback.useCallback(() => {
    first(table[8]).hideActionSheet(sheetKey);
  }, items);
  const items1 = [first, callback2, callback1, callback];
  const items2 = [callback2];
  const memo = callback.useMemo(() => ({ transitionState: first, close: callback2, onLeave: callback1, registerDismissHandler: callback }), items1);
  const callback3 = callback.useCallback(() => {
    if (null != ref.current) {
      ref.current();
    }
    callback2();
    return true;
  }, items2);
  first(4540)(callback3);
  obj = { value: memo, children: jsx(sheetKey(4524).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content }) };
  return jsx(first(5444).Provider, { value: memo, children: jsx(sheetKey(4524).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content }) });
});
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export const ActionSheetPresenter = function ActionSheetPresenter(appEntryKey) {
  appEntryKey = appEntryKey.appEntryKey;
  const items = [appEntryKey];
  const effect = importAllResult.useEffect(() => () => {
    const result = outer2_1(outer2_2[8]).resetActionSheetsForAppEntryKey(outer1_0);
  }, items);
  let obj = appEntryKey(566);
  const items1 = [_isNativeReflectConstruct];
  const mapped = (function filterStackForAppEntryKey(arr, appEntryKey) {
    let closure_0 = appEntryKey;
    return arr.filter((appEntryKey) => appEntryKey.appEntryKey === closure_0);
  })(obj.useStateFromStoresArray(items1, () => outer1_6.getStack(), []), appEntryKey).map((content) => outer1_8(outer1_9, { sheetKey: content.key, content: content.content, impressionName: content.impressionName, impressionProperties: content.impressionProperties, zIndex: content.zIndex }, content.key));
  obj = { style: StyleSheet.absoluteFill, component: appEntryKey(4477).TransitionGroupOverlayView, children: mapped };
  return jsx(appEntryKey(10393).TransitionGroup, { style: StyleSheet.absoluteFill, component: appEntryKey(4477).TransitionGroupOverlayView, children: mapped });
};
