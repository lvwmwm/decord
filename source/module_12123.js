// Module ID: 12123
// Function ID: 93403
// Dependencies: []

// Module 12123
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ View: closure_5, ActivityIndicator: closure_6 } = tmp2);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["flex"] = 1;
obj["alignItems"] = "center";
obj["justifyContent"] = "center";
obj["backgroundColor"] = "rgba(0, 0, 0, 0.7)";
obj.loader = obj;
obj1 = { marginTop: importDefault(dependencyMap[5]).space.PX_12 };
obj.loaderIndicator = obj1;
obj.loaderText = { textAlign: "center" };
let closure_9 = obj1.createStyles(obj);
let closure_10 = { None: 0, [0]: "None", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded", Error: 3, [3]: "Error" };
const tmp3 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function MediaModalLoader(onLoad) {
  let onLoadStart;
  let style;
  let tmp7;
  ({ style, onLoadStart } = onLoad);
  const arg1 = onLoadStart;
  onLoad = onLoad.onLoad;
  const importDefault = onLoad;
  const onError = onLoad.onError;
  const dependencyMap = onError;
  let num = onLoad.index;
  if (num === undefined) {
    num = 0;
  }
  const source = onLoad.source;
  let obj = { fontSize: 1091658877, lineHeight: 151597, fontFamily: 6258, textAlign: 6144, marginTop: -180289280, alignItems: 1375732285, paddingHorizontal: 1685947892 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(onLoad, obj);
  let callback;
  let React;
  let closure_5;
  let closure_6;
  const tmp3 = callback4();
  const tmp4 = callback(React.useState(closure_10.None), 2);
  const first = tmp4[0];
  callback = first;
  React = tmp4[1];
  [tmp7, closure_5] = callback(React.useState(0), 2);
  closure_6 = React.useRef(null);
  callback = React.useCallback(() => {
    const timerId = setTimeout(() => {
      callback((arg0) => {
        if (arg0 === closure_10.None) {
          let None = closure_10.Loading;
        } else {
          None = closure_10.None;
        }
        return None;
      });
    }, 1000);
    closure_6.current = timerId;
    return timerId;
  }, []);
  const callback1 = React.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    _undefined(100 * nativeEvent.loaded / nativeEvent.total);
  }, []);
  const callback2 = React.useCallback(() => callback(closure_10.Loaded), []);
  const items = [first, onLoadStart, onError, onLoad];
  const callback3 = React.useCallback(() => callback(closure_10.Error), []);
  const effect = React.useEffect(() => {
    if (closure_10.Loading === first) {
      if (null != onLoadStart) {
        onLoadStart();
      }
    } else if (closure_10.Error === tmp) {
      if (null != onError) {
        onError();
      }
    } else if (closure_10.Loaded === tmp) {
      if (null != onLoad) {
        onLoad();
      }
    }
  }, items);
  const effect1 = React.useEffect(() => () => clearTimeout(ref.current));
  if (first === closure_10.Error) {
    obj = {};
    const items1 = [tmp3.loader, style];
    obj.style = items1;
    obj = { style: tmp3.loaderText };
    const intl = arg1(dependencyMap[7]).intl;
    obj.children = intl.string(arg1(dependencyMap[7]).t.+ITMYX);
    obj.children = callback2(arg1(dependencyMap[6]).Text, obj);
    let tmp32Result = callback2(closure_5, obj);
  } else {
    const obj1 = {};
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2["style"] = style;
    obj2["source"] = source;
    obj2["onLoadStart"] = callback;
    obj2["onProgress"] = callback1;
    obj2["onLoad"] = callback2;
    obj2["onError"] = callback3;
    obj2["accessibilityRole"] = "image";
    const description = source.description;
    let tmp14;
    if (null != description) {
      tmp14 = description;
    }
    obj2["accessibilityLabel"] = tmp14;
    obj2["loop"] = true;
    const items2 = [callback2(onLoad.Component, obj2), , ];
    let tmp38Result = null;
    if (first === closure_10.Loading) {
      const obj3 = {};
      const items3 = [tmp3.loader, style];
      obj3.style = items3;
      let tmp21 = null;
      if (null == source.videoURI) {
        const obj4 = { style: tmp3.loaderText };
        const _Math = Math;
        const items4 = [Math.round(tmp7), "%"];
        obj4.children = items4;
        tmp21 = callback3(arg1(dependencyMap[6]).Text, obj4);
      }
      const items5 = [tmp21, ];
      const obj5 = { style: tmp3.loaderIndicator };
      items5[1] = callback2(closure_6, obj5);
      obj3.children = items5;
      tmp38Result = callback3(closure_5, obj3);
      const tmp38 = callback3;
      const tmp39 = closure_5;
    }
    items2[1] = tmp38Result;
    const obj6 = { style, index: num, source };
    items2[2] = callback2(importDefault(dependencyMap[8]), obj6);
    obj1.children = items2;
    tmp32Result = callback3(React.Fragment, obj1);
    const tmp32 = callback3;
    const tmp34 = callback2;
  }
  return tmp32Result;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/media_viewer/native/components/MediaModalLoader.tsx");

export default memoResult;
