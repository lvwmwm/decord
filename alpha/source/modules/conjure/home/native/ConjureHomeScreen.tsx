// Module ID: 18990
// Function ID: 18991
// Name: ConjureHomeScreen
// Dependencies: [32, 19, 17, 6568, 21, 5014, 575, 1498, 12596, 504, 12073, 12070, 5624, 1113, 3868, 5634, 2]
// Exports: default

// Module 18990 (ConjureHomeScreen)
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6568 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  let connectedOrOverlay;
  let ref;
  const route = navigation.route;
  const tmp = closure_10();
  const params = route.params;
  const projectId = params.projectId;
  let num = params.requestId;
  const entryPoint = params.entryPoint;
  const tmp2 = navigation;
  const tmp3 = num;
  const focusComposer = params.focusComposer;
  const obj = navigation(num[7]);
  const isFocused = obj.useIsFocused();
  const items = [navigation];
  const callback = isFocused.useCallback(() => {
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
  const items1 = [isFocused, projectId, num, entryPoint];
  const memo = isFocused.useMemo(() => ({ routeFocused: isFocused, projectId, requestId: num, entryPoint }), items1);
  const items2 = [connectedOrOverlay];
  let tmp9;
  const obj4 = navigation(num[9]);
  const stateFromStores = obj4.useStateFromStores(items2, () => connectedOrOverlay.isConnectedOrOverlay());
  if (true === focusComposer) {
    if (num == null) {
      num = 0;
    }
    tmp9 = num;
  }
  num = tmp9;
  const tmp11 = entryPoint(isFocused.useState(), 2);
  first = tmp11[0];
  connectedOrOverlay = tmp11[1];
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
          connectedOrOverlay(num);
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
            connectedOrOverlay(num);
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
    const obj6 = { value: memo, children: ref(tmp22, obj7) };
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
      const items5 = [ref(Text, obj9), , ];
      const obj10 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(projectId(tmp3[14])["5PqGKy"]) };
      const Text2 = tmp2(tmp3[12]).Text;
      intl2 = tmp2(tmp3[13]).intl;
      items5[1] = ref(Text2, obj10);
      const obj11 = { variant: "secondary", size: "sm", text: intl3.string(tmp2(tmp3[13]).t["13/7kX"]), onPress: callback };
      const Button = tmp2(tmp3[15]).Button;
      intl3 = tmp2(tmp3[13]).intl;
      items5[2] = ref(Button, obj11);
      obj8.children = items5;
      tmp15Result = closure_9(tmp16, obj8);
    } else {
      obj8.style = tmp.centered;
      obj8.children = ref(num, {});
      tmp15Result = tmp15(tmp16, obj8);
    }
  }
  return ref(first, obj5);
};
