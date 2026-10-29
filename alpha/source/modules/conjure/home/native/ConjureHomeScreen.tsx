// Module ID: 18881
// Function ID: 18882
// Name: ConjureHomeScreen
// Dependencies: [32, 19, 17, 6555, 21, 5005, 587, 558, 576, 1504, 12409, 504, 11842, 11839, 5271, 1125, 3864, 5281, 2]

// Module 18881 (ConjureHomeScreen)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6555 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3, tmp6, tmp7;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const ConjureHomeScreen_str = "ConjureHomeScreen";
let createStyles = createStyles_mod;
let obj = { container: obj2, centered: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_24 };
let closure_11 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeScreen(navigation) {
  let connectedOrOverlay;
  let first;
  let focusComposer;
  let projectId;
  let ref;
  let requestId;
  const tmp = navigation;
  const tmp2 = first;
  const obj = navigation(first[8]);
  const cResult = obj.c(27);
  navigation = navigation.navigation;
  const route = navigation.route;
  const tmp4 = closure_11();
  ({ projectId, requestId, focusComposer } = route.params);
  const obj2 = navigation(first[9]);
  const isFocused = obj2.useIsFocused();
  if (cResult[0] !== navigation) {
    const fn = function l() {
      let goBackResult;
      if (navigation.canGoBack()) {
        goBackResult = navigation.goBack();
      } else {
        goBackResult = navigation.navigate("main");
      }
      return goBackResult;
    };
    cResult[0] = navigation;
    cResult[1] = fn;
  }
  const tmpResult = tmp(tmp2[10]);
  const conjureForMeGuildId = tmpResult.useConjureForMeGuildId(ConjureHomeScreen_str);
  if (cResult[2] === isFocused) {
    if (cResult[3] === projectId) {
      let tmp11;
      let tmp10;
      let tmp20;
      let tmp19;
      const _Symbol = Symbol;
      const str = "react.memo_cache_sentinel";
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GatewayConnectionStore];
        class T {
          constructor() {
            return connectedOrOverlay.isConnectedOrOverlay();
          }
        }
        cResult[6] = items;
        cResult[7] = T;
        tmp11 = T;
        tmp10 = items;
      } else {
        tmp10 = cResult[6];
        tmp11 = cResult[7];
      }
      const tmpResult2 = tmp(tmp2[11]);
      const stateFromStores = tmpResult2.useStateFromStores(tmp10, tmp11);
      let tmp14;
      if (true === focusComposer) {
        if (requestId == null) {
          requestId = 0;
        }
        tmp14 = requestId;
      }
      requestId = tmp14;
      [first, _slicedToArray] = react.useState();
      const obj6 = react;
      react = react.useRef(false);
      if (cResult[8] !== navigation) {
        class A {
          constructor() {
            return navigation.addListener("transitionEnd", (data) => {
              if (!data.data.closing) {
                ref.current = true;
              }
            });
          }
        }
        const items1 = [navigation];
        class T {
          constructor() {
            return connectedOrOverlay.isConnectedOrOverlay();
          }
        }
        cResult[8] = navigation;
        cResult[9] = A;
        cResult[10] = items1;
        tmp20 = items1;
        tmp19 = A;
      } else {
        class A {
          constructor() {
            return navigation.addListener("transitionEnd", (data) => {
              if (!data.data.closing) {
                ref.current = true;
              }
            });
          }
        }
        tmp20 = cResult[10];
      }
      const effect = obj6.useEffect(tmp19, tmp20);
      if (cResult[11] === tmp14) {
        class A {
          constructor() {
            return navigation.addListener("transitionEnd", (data) => {
              if (!data.data.closing) {
                ref.current = true;
              }
            });
          }
        }
      }
      class O {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_2;
            if (closure_2 !== tmp) {
              ready = function ready() {
                ref.current = true;
                closure_3(closure_1);
              };
              tmp3 = closure_4;
              if (closure_4.current) {
                tmp4 = ready;
                if (ready.isFocused()) {
                  tmp7 = globalThis;
                  _requestAnimationFrame = requestAnimationFrame;
                  closure_1 = requestAnimationFrame(ready);
                  return () => cancelAnimationFrame(closure_1);
                }
              }
              tmp5 = globalThis;
              _setTimeout = setTimeout;
              num = 1000;
              closure_2 = setTimeout(ready, 1000);
              tmp6 = ready;
              str = "transitionEnd";
              closure_3 = ready.addListener("transitionEnd", (data) => {
                if (!data.data.closing) {
                  if (typeof ready === "function") {
                    ref.current = true;
                    closure_3(requestId);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
              });
              return () => {
                clearTimeout(closure_2);
                closure_3();
              };
            }
          }
          return;
        }
      }
      const items2 = [tmp14, first, navigation];
      cResult[11] = tmp14;
      cResult[12] = navigation;
      cResult[13] = first;
      cResult[14] = O;
      cResult[15] = items2;
    }
  }
  const obj3 = { routeFocused: null, projectId, requestId };
  cResult[2] = isFocused;
  cResult[3] = projectId;
  cResult[4] = requestId;
  cResult[5] = obj3;
}) : (function ConjureHomeScreen(navigation) {
  let intl;
  let intl2;
  let intl3;
  let obj7;
  let tmp15Result;
  let tmp22;
  let tmp23;
  navigation = navigation.navigation;
  let first;
  let closure_6;
  let ref;
  const route = navigation.route;
  const tmp = closure_11();
  const params = route.params;
  const projectId = params.projectId;
  let num = params.requestId;
  const tmp2 = navigation;
  const tmp3 = num;
  const focusComposer = params.focusComposer;
  const obj = navigation(num[9]);
  const isFocused = obj.useIsFocused();
  const items = [navigation];
  const callback = num.useCallback(() => {
    let goBackResult;
    if (navigation.canGoBack()) {
      goBackResult = navigation.goBack();
    } else {
      goBackResult = navigation.navigate("main");
    }
    return goBackResult;
  }, items);
  const obj3 = navigation(num[10]);
  const conjureForMeGuildId = obj3.useConjureForMeGuildId(ConjureHomeScreen_str);
  const items1 = [isFocused, projectId, num];
  const memo = num.useMemo(() => ({ routeFocused: isFocused, projectId, requestId: num }), items1);
  const items2 = [ref];
  let tmp9;
  const obj4 = navigation(num[11]);
  const stateFromStores = obj4.useStateFromStores(items2, () => ref.isConnectedOrOverlay());
  if (true === focusComposer) {
    if (num == null) {
      num = 0;
    }
    tmp9 = num;
  }
  num = tmp9;
  const tmp11 = isFocused(num.useState(), 2);
  first = tmp11[0];
  closure_6 = tmp11[1];
  ref = obj2.useRef(false);
  const items3 = [navigation];
  const effect = obj2.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      ref.current = true;
    }
  }), items3);
  const items4 = [tmp9, first, navigation];
  const effect1 = obj2.useEffect(() => {
    let closure_0;
    let closure_1;
    if (null != num) {
      if (first !== tmp) {
        function ready() {
          ref.current = true;
          closure_1_6(num);
        }
        if (ref.current) {
          if (navigation.isFocused()) {
            const _requestAnimationFrame = requestAnimationFrame;
            navigation = requestAnimationFrame(ready);
            return () => cancelAnimationFrame(closure_0);
          }
        }
        const _setTimeout = setTimeout;
        num = 1000;
        const timeout = setTimeout(ready, 1000);
        let closure_2 = navigation.addListener("transitionEnd", (data) => {
          if (!data.data.closing) {
            ref.current = true;
            closure_1_6(num);
          }
        });
        return () => {
          clearTimeout(closure_1);
          closure_2();
        };
      }
    }
  }, items4);
  const obj5 = { style: tmp.container, children: tmp15Result };
  if (null != conjureForMeGuildId) {
    const obj6 = { value: memo, children: closure_8(tmp22, obj7) };
    const Provider = projectId(tmp3[12]).Provider;
    obj7 = { guildId: conjureForMeGuildId, onClose: callback, focusRequest: tmp23 };
    tmp23 = null;
    tmp22 = projectId(tmp3[13]);
    if (null != tmp9) {
      tmp23 = null;
      if (first === tmp9) {
        tmp23 = tmp9;
      }
    }
    tmp15Result = tmp15(Provider, obj6);
  } else {
    const obj8 = { style: null, children: null };
    if (stateFromStores) {
      obj8.style = tmp.centered;
      const obj9 = { variant: "heading-lg/semibold", color: "text-default", children: intl.string(projectId(tmp3[16])["c+8IMp"]) };
      const Text = tmp2(tmp3[14]).Text;
      intl = tmp2(tmp3[15]).intl;
      const items5 = [closure_8(Text, obj9), , ];
      const obj10 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(projectId(tmp3[16])["5PqGKy"]) };
      const Text2 = tmp2(tmp3[14]).Text;
      intl2 = tmp2(tmp3[15]).intl;
      items5[1] = closure_8(Text2, obj10);
      const obj11 = { variant: "secondary", size: "sm", text: intl3.string(tmp2(tmp3[15]).t["13/7kX"]), onPress: callback };
      const Button = tmp2(tmp3[17]).Button;
      intl3 = tmp2(tmp3[15]).intl;
      items5[2] = closure_8(Button, obj11);
      obj8.children = items5;
      tmp15Result = closure_9(tmp16, obj8);
    } else {
      obj8.style = tmp.centered;
      obj8.children = closure_8(first, {});
      tmp15Result = tmp15(tmp16, obj8);
    }
  }
  return closure_8(closure_6, obj5);
});
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeScreen.tsx");

export default tmp5;
