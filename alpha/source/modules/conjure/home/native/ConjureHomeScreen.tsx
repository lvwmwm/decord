// Module ID: 18941
// Function ID: 18942
// Name: ConjureHomeScreen
// Dependencies: [32, 19, 17, 6562, 21, 5009, 575, 1499, 12561, 504, 12035, 12032, 5619, 1114, 3865, 5629, 2]
// Exports: default

// Module 18941 (ConjureHomeScreen)
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6562 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, centered: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_24 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeScreen.tsx");

export default function ConjureHomeScreen(navigation) {
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
  const tmp = closure_10();
  const params = route.params;
  const projectId = params.projectId;
  let num = params.requestId;
  const tmp2 = navigation;
  const tmp3 = num;
  const focusComposer = params.focusComposer;
  const obj = navigation(num[7]);
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
  const obj3 = navigation(num[8]);
  const conjureForMeGuildId = obj3.useConjureForMeGuildId("ConjureHomeScreen");
  const items1 = [isFocused, projectId, num];
  const memo = num.useMemo(() => ({ routeFocused: isFocused, projectId, requestId: num }), items1);
  const items2 = [ref];
  let tmp9;
  const obj4 = navigation(num[9]);
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
    const Provider = projectId(tmp3[10]).Provider;
    obj7 = { guildId: conjureForMeGuildId, onClose: callback, focusRequest: tmp23 };
    tmp23 = null;
    tmp22 = projectId(tmp3[11]);
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
      const obj9 = { variant: "heading-lg/semibold", color: "text-default", children: intl.string(projectId(tmp3[14])["c+8IMp"]) };
      const Text = tmp2(tmp3[12]).Text;
      intl = tmp2(tmp3[13]).intl;
      const items5 = [closure_8(Text, obj9), , ];
      const obj10 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(projectId(tmp3[14])["5PqGKy"]) };
      const Text2 = tmp2(tmp3[12]).Text;
      intl2 = tmp2(tmp3[13]).intl;
      items5[1] = closure_8(Text2, obj10);
      const obj11 = { variant: "secondary", size: "sm", text: intl3.string(tmp2(tmp3[13]).t["13/7kX"]), onPress: callback };
      const Button = tmp2(tmp3[15]).Button;
      intl3 = tmp2(tmp3[13]).intl;
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
};
