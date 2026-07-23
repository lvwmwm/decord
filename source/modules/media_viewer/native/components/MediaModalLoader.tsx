// Module ID: 12248
// Function ID: 95615
// Dependencies: [57, 31, 27, 33, 4130, 689, 4126, 1212, 12249, 2]

// Module 12248
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = {};
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj["flex"] = 1;
obj["alignItems"] = "center";
obj["justifyContent"] = "center";
obj["backgroundColor"] = "rgba(0, 0, 0, 0.7)";
obj.loader = obj;
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.loaderIndicator = _createForOfIteratorHelperLoose;
obj.loaderText = { textAlign: "center" };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { None: 0, [0]: "None", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded", Error: 3, [3]: "Error" };
const memoResult = importAllResult.memo(function MediaModalLoader(onLoad) {
  let c5;
  let onLoadStart;
  let style;
  let tmp7;
  ({ style, onLoadStart } = onLoad);
  onLoad = onLoad.onLoad;
  const onError = onLoad.onError;
  let num = onLoad.index;
  if (num === undefined) {
    num = 0;
  }
  const source = onLoad.source;
  let obj = { Component: 0, style: 0, onLoadStart: 0, onLoad: 0, onError: 0, index: 0, source: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(onLoad, obj);
  let first;
  let importAllResult;
  c5 = undefined;
  let closure_6;
  const tmp3 = callback3();
  const tmp4 = first(importAllResult.useState(closure_10.None), 2);
  first = tmp4[0];
  importAllResult = tmp4[1];
  [tmp7, c5] = first(importAllResult.useState(0), 2);
  closure_6 = importAllResult.useRef(null);
  const callback = importAllResult.useCallback(() => {
    const timerId = setTimeout(() => {
      outer1_4((arg0) => {
        if (arg0 === outer3_10.None) {
          let None = outer3_10.Loading;
        } else {
          None = outer3_10.None;
        }
        return None;
      });
    }, 1000);
    closure_6.current = timerId;
    return timerId;
  }, []);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    _undefined(100 * nativeEvent.loaded / nativeEvent.total);
  }, []);
  const callback2 = importAllResult.useCallback(() => callback(outer1_10.Loaded), []);
  const items = [first, onLoadStart, onError, onLoad];
  callback3 = importAllResult.useCallback(() => callback(outer1_10.Error), []);
  const effect = importAllResult.useEffect(() => {
    if (outer1_10.Loading === first) {
      if (null != onLoadStart) {
        onLoadStart();
      }
    } else if (outer1_10.Error === tmp) {
      if (null != onError) {
        onError();
      }
    } else if (outer1_10.Loaded === tmp) {
      if (null != onLoad) {
        onLoad();
      }
    }
  }, items);
  const effect1 = importAllResult.useEffect(() => () => clearTimeout(outer1_6.current));
  if (first === closure_10.Error) {
    obj = {};
    const items1 = [tmp3.loader, style];
    obj.style = items1;
    obj = { style: tmp3.loaderText, variant: "heading-md/semibold", color: "text-overlay-light" };
    const intl = onLoadStart(onError[7]).intl;
    obj.children = intl.string(onLoadStart(onError[7]).t["+ITMYX"]);
    obj.children = callback(onLoadStart(onError[6]).Text, obj);
    let tmp32Result = callback(c5, obj);
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
    const items2 = [callback(onLoad.Component, obj2), , ];
    let tmp38Result = null;
    if (first === closure_10.Loading) {
      const obj3 = {};
      const items3 = [tmp3.loader, style];
      obj3.style = items3;
      let tmp21 = null;
      if (null == source.videoURI) {
        const obj4 = { style: tmp3.loaderText, variant: "heading-md/semibold", color: "text-overlay-light" };
        const _Math = Math;
        const items4 = [Math.round(tmp7), "%"];
        obj4.children = items4;
        tmp21 = callback2(onLoadStart(onError[6]).Text, obj4);
      }
      const items5 = [tmp21, ];
      const obj5 = { color: "white", style: tmp3.loaderIndicator, size: "large" };
      items5[1] = callback(closure_6, obj5);
      obj3.children = items5;
      tmp38Result = callback2(c5, obj3);
      const tmp38 = callback2;
      const tmp39 = c5;
    }
    items2[1] = tmp38Result;
    const obj6 = { style, index: num, source };
    items2[2] = callback(onLoad(onError[8]), obj6);
    obj1.children = items2;
    tmp32Result = callback2(importAllResult.Fragment, obj1);
    const tmp32 = callback2;
    const tmp34 = callback;
  }
  return tmp32Result;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/media_viewer/native/components/MediaModalLoader.tsx");

export default memoResult;
