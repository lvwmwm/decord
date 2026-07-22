// Module ID: 12142
// Function ID: 93548
// Name: computeClosePosition
// Dependencies: []
// Exports: default

// Module 12142 (computeClosePosition)
function computeClosePosition(arg0, height) {
  if (null != arg2) {
    let obj = importDefault(dependencyMap[3])(arg0, height, arg2);
  } else {
    obj = { height };
  }
  return (height + obj.height) / 2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const NOOP = arg1(dependencyMap[2]).NOOP;
let closure_6 = { code: "function useMediaViewerClosePositionTsx1(){const{index}=this.__closure;return index.get();}" };
let closure_7 = { code: "function useMediaViewerClosePositionTsx2(index){const{runOnJS,setClosePosition}=this.__closure;runOnJS(setClosePosition)(index);}" };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/media_viewer/native/useMediaViewerClosePosition.tsx");

export default function useMediaViewerClosePosition(index) {
  index = index.index;
  const arg1 = index;
  const sources = index.sources;
  const importDefault = sources;
  let onClose = index.onClose;
  if (onClose === undefined) {
    onClose = closure_5;
  }
  const windowHeight = index.windowHeight;
  const dependencyMap = windowHeight;
  const windowWidth = index.windowWidth;
  let callback = windowWidth;
  let React;
  closure_5 = undefined;
  let closure_6;
  const tmp = importDefault(dependencyMap[4])(onClose);
  React = tmp;
  const tmp2 = callback(React.useState(() => callback2(windowWidth, windowHeight, sources[closure_0.get(closure_0)])), 2);
  closure_5 = tmp2[1];
  const items = [tmp, sources, windowHeight, windowWidth];
  callback = React.useCallback((arg0) => {
    if (null == sources[arg0]) {
      tmp();
    }
    callback(callback2(windowWidth, windowHeight, sources[arg0]));
  }, items);
  closure_6 = callback;
  let obj = arg1(dependencyMap[5]);
  const fn = function h() {
    return index.get();
  };
  fn.__closure = { index };
  fn.__workletHash = 5031282724746;
  fn.__initData = closure_6;
  const fn2 = function f(arg0) {
    index(windowHeight[5]).runOnJS(callback)(arg0);
  };
  obj = { runOnJS: arg1(dependencyMap[5]).runOnJS, setClosePosition: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 2709880768438;
  fn2.__initData = closure_7;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items1 = [callback, index];
  const effect = React.useEffect(() => {
    callback(index.get());
  }, items1);
  return tmp2[0];
};
