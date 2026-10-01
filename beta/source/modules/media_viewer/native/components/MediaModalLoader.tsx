// Module ID: 12534
// Function ID: 12535
// Name: MediaModalLoader
// Dependencies: [32, 19, 17, 21, 4836, 576, 4832, 1115, 12535, 2]

// Module 12534 (MediaModalLoader)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let nativeEvent;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire, StyleSheet } = react_native);
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { loader: obj2, loaderIndicator: obj3, loaderText: { textAlign: "center" } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.7)" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginTop: nativeDefault.space.PX_12 };
let closure_9 = createStyles(obj);
let closure_10 = { None: 0, [0]: "None", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded", Error: 3, [3]: "Error" };
const memoResult = react.memo(function MediaModalLoader(onLoad) {
  let Text2;
  let _undefined;
  let c5;
  let closure_4;
  let description;
  let intl;
  let items1;
  let items3;
  let items4;
  let items5;
  let obj3;
  let onLoadStart;
  let style;
  let tmp28Result4;
  let tmp8;
  ({ style, onLoadStart } = onLoad);
  onLoad = onLoad.onLoad;
  const onError = onLoad.onError;
  let num = onLoad.index;
  const Component = onLoad.Component;
  if (num === undefined) {
    num = 0;
  }
  const source = onLoad.source;
  const merged = Object.assign(onLoad, Object.assign({ Component: 0, style: 0, onLoadStart: 0, onLoad: 0, onError: 0, index: 0, source: 0 }));
  let first;
  react = undefined;
  c5 = undefined;
  const tmp2 = closure_9();
  const tmp3 = react;
  const tmp5 = first(react.useState(closure_10.None), 2);
  first = tmp5[0];
  react = tmp5[1];
  [tmp8, c5] = first(react.useState(0), 2);
  const tmp7 = first(react.useState(0), 2);
  let closure_6 = react.useRef(null);
  const callback = react.useCallback(() => {
    const timerId = setTimeout(() => {
      let None;
      closure_1_4((arg0) => arg0 === None.None ? None.Loading : None.None);
    }, 1000);
    closure_6.current = timerId;
    return timerId;
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    _undefined(100 * nativeEvent.loaded / nativeEvent.total);
  }, []);
  const callback2 = react.useCallback(() => closure_4(closure_10.Loaded), []);
  const items = [first, onLoadStart, onError, onLoad];
  const callback3 = react.useCallback(() => closure_4(closure_10.Error), []);
  const effect = react.useEffect(() => {
    if (closure_10.Loading === first) {
      if (onLoadStart != null) {
        tmp9();
      }
    } else if (closure_10.Error === first) {
      if (onError != null) {
        tmp6();
      }
    } else if (closure_10.Loaded === first) {
      if (onLoad != null) {
        tmp3();
      }
    }
  }, items);
  const effect1 = react.useEffect(() => {
    let ref;
    return () => clearTimeout(ref.current);
  });
  const tmp4 = closure_10;
  if (first === closure_10.Error) {
    const obj2 = { style: items1, children: closure_7(Text2, obj3) };
    items1 = [tmp2.loader, style];
    obj3 = { style: tmp2.loaderText, variant: "heading-md/semibold", color: "text-overlay-light", children: intl.string(onLoadStart(onError[7]).t["+ITMYX"]) };
    Text2 = onLoadStart(onError[6]).Text;
    intl = onLoadStart(onError[7]).intl;
    tmp28Result4 = closure_7(c5, obj2);
  } else {
    const Fragment = tmp3.Fragment;
    const obj4 = { style, source, onLoadStart: callback, onProgress: callback1, onLoad: callback2, onError: callback3, accessibilityRole: "image", accessibilityLabel: description, loop: true };
    const merged1 = Object.assign(merged);
    description = source.description;
    const items2 = [closure_7(Component, obj4), , ];
    let tmp28Result3 = null;
    if (first === tmp4.Loading) {
      const obj5 = { style: items3, children: items5 };
      items3 = [tmp2.loader, style];
      let tmp28Result = null;
      const tmp33 = c5;
      if (null == source.videoURI) {
        const _Math = Math;
        const obj = { style: tmp2.loaderText, variant: "heading-md/semibold", color: "text-overlay-light", children: items4 };
        const Text = onLoadStart(onError[6]).Text;
        items4 = [Math.round(tmp8), "%"];
        tmp28Result = tmp28(Text, obj);
      }
      items5 = [tmp28Result, ];
      const obj6 = { color: "white", style: tmp2.loaderIndicator, size: "large" };
      items5[1] = closure_7(closure_6, obj6);
      tmp28Result3 = tmp28(tmp33, obj5);
    }
    const obj7 = { children: items2 };
    items2[1] = tmp28Result3;
    const obj8 = { style, index: num, source };
    items2[2] = closure_7(onLoad(onError[8]), obj8);
    tmp28Result4 = tmp28(Fragment, obj7);
  }
  return tmp28Result4;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalLoader.tsx");

export default memoResult;
