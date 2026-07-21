// Module ID: 12925
// Function ID: 98530
// Name: ActionSheetPresenter
// Dependencies: []
// Exports: ActionSheetPresenter

// Module 12925 (ActionSheetPresenter)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const StyleSheet = arg1(dependencyMap[2]).StyleSheet;
let closure_6 = importDefault(dependencyMap[3]);
const NOOP = arg1(dependencyMap[4]).NOOP;
const jsx = arg1(dependencyMap[5]).jsx;
let closure_9 = importAllResult.forwardRef((sheetKey) => {
  let content;
  let impressionName;
  let impressionProperties;
  let zIndex;
  sheetKey = sheetKey.sheetKey;
  const arg1 = sheetKey;
  ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
  const tmp = callback(importAllResult.useState("visible"), 2);
  const first = tmp[0];
  const importDefault = first;
  let closure_2 = tmp[1];
  let callback = importAllResult.useRef(NOOP);
  callback = importAllResult.useCallback((current) => {
    closure_3.current = current;
  }, []);
  let closure_5 = importAllResult.useRef(NOOP);
  const callback1 = importAllResult.useCallback(() => {
    ref2.current();
  }, []);
  let closure_6 = callback1;
  let obj = { type: arg1(closure_2[7]).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  importDefault(closure_2[6])(obj);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    componentDidEnter() {
      callback("visible");
    },
    componentWillLeave(current) {
      callback("exiting");
      closure_5.current = current;
    },
    componentDidLeave() {
      callback("exited");
      closure_5.current = closure_7;
    }
  }), []);
  const items = [sheetKey];
  const callback2 = importAllResult.useCallback(() => {
    first(closure_2[8]).hideActionSheet(sheetKey);
  }, items);
  const NOOP = callback2;
  const items1 = [first, callback2, callback1, callback];
  const items2 = [callback2];
  const memo = importAllResult.useMemo(() => ({ transitionState: first, close: callback2, onLeave: callback1, registerDismissHandler: callback }), items1);
  const callback3 = importAllResult.useCallback(() => {
    if (null != ref.current) {
      ref.current();
    }
    callback2();
    return true;
  }, items2);
  importDefault(closure_2[9])(callback3);
  obj = { value: memo, children: jsx(arg1(closure_2[11]).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content }) };
  return jsx(importDefault(closure_2[10]).Provider, obj);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export const ActionSheetPresenter = function ActionSheetPresenter(appEntryKey) {
  appEntryKey = appEntryKey.appEntryKey;
  const arg1 = appEntryKey;
  const items = [appEntryKey];
  const effect = importAllResult.useEffect(() => () => {
    const result = callback(closure_2[8]).resetActionSheetsForAppEntryKey(closure_0);
  }, items);
  let obj = arg1(dependencyMap[12]);
  const items1 = [closure_6];
  const mapped = function filterStackForAppEntryKey(arr, appEntryKey) {
    return arr.filter((appEntryKey) => appEntryKey.appEntryKey === arg1);
  }(obj.useStateFromStoresArray(items1, () => stack.getStack(), []), appEntryKey).map((content) => callback(closure_9, { sheetKey: content.key, content: content.content, impressionName: content.impressionName, impressionProperties: content.impressionProperties, zIndex: content.zIndex }, content.key));
  obj = { style: StyleSheet.absoluteFill, component: arg1(dependencyMap[14]).TransitionGroupOverlayView, children: mapped };
  return jsx(arg1(dependencyMap[13]).TransitionGroup, obj);
};
