// Module ID: 18647
// Function ID: 18648
// Name: ConjureHomeScreen
// Dependencies: [19, 17, 6531, 21, 5004, 587, 558, 576, 1503, 12355, 504, 11788, 11785, 5270, 1125, 3863, 5280, 2]

// Module 18647 (ConjureHomeScreen)
import nativeDefault from "native" /* 587 */;
import _modDef3863 from "module_3863" /* 3863 */;
import ConjureStandaloneScreenDefault from "ConjureStandaloneScreen" /* 11785 */;
import reactDefault from "react" /* 11788 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6531 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const ConjureHomeScreen_str = "ConjureHomeScreen";
let createStyles = createStyles_mod;
let obj = { container: obj2, centered: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_24 };
let closure_10 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeScreen(navigation) {
  let connectedOrOverlay;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj5;
  let projectId;
  let requestId;
  let tmp6;
  const obj = navigation(576);
  const cResult = obj.c(17);
  navigation = navigation.navigation;
  const route = navigation.route;
  const tmp4 = closure_10();
  ({ projectId, requestId } = route.params);
  const obj2 = navigation(1503);
  const isFocused = obj2.useIsFocused();
  if (cResult[0] !== navigation) {
    const fn = function n() {
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
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = navigation(12355);
  const conjureForMeGuildId = tmpResult.useConjureForMeGuildId(ConjureHomeScreen_str);
  if (cResult[2] === isFocused) {
    if (cResult[3] === projectId) {
      let tmp8;
      let tmp11;
      let tmp10;
      let tmp19;
      if (cResult[4] === requestId) {
        tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GatewayConnectionStore];
        class B {
          constructor() {
            return connectedOrOverlay.isConnectedOrOverlay();
          }
        }
        cResult[6] = items;
        cResult[7] = B;
        tmp11 = B;
        tmp10 = items;
      } else {
        tmp10 = cResult[6];
        tmp11 = cResult[7];
      }
      const tmpResult2 = navigation(504);
      const stateFromStores = tmpResult2.useStateFromStores(tmp10, tmp11);
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp8) {
          if (cResult[10] === stateFromStores) {
            if (cResult[11] === tmp4.centered) {
              let tmp14;
              if (cResult[12] === conjureForMeGuildId) {
                tmp14 = cResult[13];
              }
              if (cResult[14] === tmp4.container) {
                let tmp26;
                if (cResult[15] === tmp14) {
                  tmp26 = cResult[16];
                }
                return tmp26;
              }
              class B {
                constructor() {
                  return connectedOrOverlay.isConnectedOrOverlay();
                }
              }
              const obj3 = { style: tmp4.container, children: tmp14 };
              const tmp28 = closure_7(closure_5, obj3);
              cResult[14] = tmp4.container;
              cResult[15] = tmp14;
              cResult[16] = tmp28;
              tmp26 = tmp28;
            }
          }
        }
      }
      if (null != conjureForMeGuildId) {
        const obj4 = { value: null, children: closure_7(ConjureStandaloneScreenDefault, obj5) };
        class B {
          constructor() {
            return connectedOrOverlay.isConnectedOrOverlay();
          }
        }
        const Provider = reactDefault.Provider;
        obj5 = { guildId: conjureForMeGuildId, onClose: tmp6 };
        tmp19 = closure_7(Provider, obj4);
      } else if (stateFromStores) {
        const obj6 = { style: null, children: items1 };
        class B {
          constructor() {
            return connectedOrOverlay.isConnectedOrOverlay();
          }
        }
        const obj7 = { variant: "heading-lg/semibold", color: "text-default", children: intl.string(_modDef3863["c+8IMp"]) };
        const Text = tmp(5270).Text;
        intl = tmp(1125).intl;
        items1 = [closure_7(Text, obj7), , ];
        const obj8 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(_modDef3863["5PqGKy"]) };
        const Text2 = tmp(5270).Text;
        intl2 = tmp(1125).intl;
        items1[1] = closure_7(Text2, obj8);
        const obj9 = { variant: "secondary", size: "sm", text: intl3.string(navigation(1125).t["13/7kX"]), onPress: tmp6 };
        const Button = tmp(5280).Button;
        intl3 = tmp(1125).intl;
        items1[2] = closure_7(Button, obj9);
        tmp19 = closure_8(closure_5, obj6);
      } else {
        const obj10 = { style: null, children: closure_7(closure_4, {}) };
        class B {
          constructor() {
            return connectedOrOverlay.isConnectedOrOverlay();
          }
        }
        tmp19 = closure_7(closure_5, obj10);
      }
      cResult[8] = tmp6;
      cResult[9] = tmp8;
      cResult[10] = stateFromStores;
      cResult[11] = tmp4.centered;
      cResult[12] = conjureForMeGuildId;
      cResult[13] = tmp19;
      tmp14 = tmp19;
    }
  }
  const obj11 = { routeFocused: isFocused, projectId, requestId };
  cResult[2] = isFocused;
  cResult[3] = projectId;
  cResult[4] = requestId;
  cResult[5] = obj11;
  tmp8 = obj11;
}) : (function ConjureHomeScreen(navigation) {
  let connectedOrOverlay;
  let intl;
  let intl2;
  let intl3;
  let obj5;
  let tmp10Result;
  navigation = navigation.navigation;
  const route = navigation.route;
  const tmp = closure_10();
  const params = route.params;
  const projectId = params.projectId;
  const requestId = params.requestId;
  const obj = navigation(requestId[8]);
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
  const obj2 = navigation(requestId[9]);
  const conjureForMeGuildId = obj2.useConjureForMeGuildId(ConjureHomeScreen_str);
  const items1 = [isFocused, projectId, requestId];
  const memo = isFocused.useMemo(() => ({ routeFocused: isFocused, projectId, requestId }), items1);
  navigation(requestId[10]);
  [][0] = GatewayConnectionStore;
  const obj3 = { style: tmp.container, children: tmp10Result };
  if (null != conjureForMeGuildId) {
    const obj4 = { value: memo, children: closure_7(projectId(requestId[12]), obj5) };
    const Provider = projectId(tmp3[11]).Provider;
    obj5 = { guildId: conjureForMeGuildId, onClose: callback };
    tmp10Result = tmp10(Provider, obj4);
  } else {
    const obj6 = { style: null, children: null };
    if (tmp9) {
      obj6.style = tmp.centered;
      const obj7 = { variant: "heading-lg/semibold", color: "text-default", children: intl.string(projectId(requestId[15])["c+8IMp"]) };
      const Text = tmp2(tmp3[13]).Text;
      intl = tmp2(tmp3[14]).intl;
      const items2 = [closure_7(Text, obj7), , ];
      const obj8 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(projectId(requestId[15])["5PqGKy"]) };
      const Text2 = tmp2(tmp3[13]).Text;
      intl2 = tmp2(tmp3[14]).intl;
      items2[1] = closure_7(Text2, obj8);
      const obj9 = { variant: "secondary", size: "sm", text: intl3.string(navigation(requestId[14]).t["13/7kX"]), onPress: callback };
      const Button = tmp2(tmp3[16]).Button;
      intl3 = tmp2(tmp3[14]).intl;
      items2[2] = closure_7(Button, obj9);
      obj6.children = items2;
      tmp10Result = closure_8(tmp11, obj6);
    } else {
      obj6.style = tmp.centered;
      obj6.children = closure_7(closure_4, {});
      tmp10Result = tmp10(tmp11, obj6);
    }
  }
  return closure_7(closure_5, obj3);
});
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeScreen.tsx");

export default tmp5;
