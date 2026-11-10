// Module ID: 12577
// Function ID: 12578
// Name: PortalKeyboardRenderer
// Dependencies: [19, 1495, 21, 5201, 5327, 1625, 1377, 12578, 5328, 5317, 7463, 6931, 1497, 5331, 10167, 2]
// Exports: PortalKeyboardRenderer

// Module 12577 (PortalKeyboardRenderer)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import native from "native" /* 5201 */;
import useKeyboardType from "useKeyboardType" /* 5327 */;
import PortalKeyboardUIStore3 from "PortalKeyboardUIStore" /* 5328 */;
import PortalKeyboardRendererComponentDefault from "PortalKeyboardRendererComponent" /* 12578 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1495 */;
import size from "module_2" /* 2 */;

let dependencyMap;

function transitionGroupGetItemKey(id) {
  return id.id;
}
const jsx = Fragment.jsx;
let closure_6 = [];
function transitionGroupRenderItem(arg0, item, state, cleanUp) {
  let isAndroidResult = state === native.TransitionStates.YEETED;
  if (isAndroidResult) {
    const tmpResult = useKeyboardType;
    const keyboardType = tmpResult.getKeyboardType();
    isAndroidResult = keyboardType === tmp(1625).KeyboardTypes.SYSTEM;
  }
  if (isAndroidResult) {
    const tmpResult2 = PlatformUtils;
    isAndroidResult = tmpResult2.isAndroid();
  }
  let tmp5 = null;
  if (!isAndroidResult) {
    tmp5 = jsx(PortalKeyboardRendererComponentDefault, { item, state, cleanUp }, arg0);
  }
  return tmp5;
}
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export function PortalKeyboardRenderer(portal) {
  let closure_2;
  let tmp10Result;
  let flag = portal.portal;
  if (flag === undefined) {
    flag = true;
  }
  dependencyMap = undefined;
  let obj = react;
  const id = react.useId();
  let items = [id];
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = PortalKeyboardUIStore3;
    return obj.registerPortalKeyboardRenderer(id);
  }, items);
  const layoutEffect1 = react.useLayoutEffect(() => {
    let closure_0 = closure_4(function onKeyboardStoreChange() {
      const PortalKeyboardUIStore = closure_0(closure_1_2[8]).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      closure_0(closure_1_2[4]);
      const tmp = closure_0;
      const tmp2 = closure_1_2;
      const tmp6 = null != field && tmp5 !== field.type;
      if (tmp6) {
        const tmpResult = tmp(tmp2[8]);
        const result = tmpResult.closePortalKeyboardIfUnhandled();
      }
    });
    return () => {
      closure_0();
      const obj = id(closure_2[8]);
      const result = obj.closePortalKeyboardIfUnhandled();
    };
  }, []);
  const layoutEffect2 = react.useLayoutEffect(() => {
    let rootNavigationRef;
    function onNavigationStateChange() {
      const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[8]).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      let tmp4 = null != field && field.channelId !== tmp(tmp2[10]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (tmp4) {
        const tmpResult = rootNavigationRef(closure_1_2[11]);
        tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
      }
      if (tmp4) {
        const tmpResult4 = rootNavigationRef(closure_1_2[4]);
        const keyboardType = tmpResult4.getKeyboardType();
        if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
          const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
          const setKeyboardType = rootNavigationRef(closure_1_2[12]).setKeyboardType;
          rootNavigationRef(closure_1_2[12]);
          setKeyboardType(obj);
        }
        const tmpResult6 = rootNavigationRef(closure_1_2[8]);
        const result = tmpResult6.closePortalKeyboardIfUnhandled();
      }
    }
    const tmp = rootNavigationRef;
    const tmp2 = closure_2;
    let obj = rootNavigationRef(closure_2[6]);
    if (obj.isAndroid()) {
      let tmpResult = tmp(tmp2[9]);
      rootNavigationRef = tmpResult.getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", onNavigationStateChange);
        return () => {
          rootNavigationRef.removeListener("state", onNavigationStateChange);
        };
      }
    }
  }, []);
  const tmp5 = id;
  let tmp6 = dependencyMap;
  let PortalKeyboardUIStore = id(5328).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(5328).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("renderers");
  const tmp8 = 0 === field1.length || field1[field1.length - 1] === id;
  dependencyMap = tmp8;
  const items1 = [tmp8, field];
  const memo = obj.useMemo(() => {
    if (null != field) {
      let tmp3;
      const tmp2 = closure_2;
      if (tmp2) {
        const items = [tmp];
        tmp3 = items;
      }
      return tmp3;
    }
    tmp3 = closure_6;
  }, items1);
  const tmp11 = jsx(tmp5(5201).TransitionGroup, { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
  if (flag) {
    const obj3 = { children: tmp11 };
    tmp10Result = tmp10(tmp5(5331).PortalKeyboard, obj3);
  } else {
    const obj4 = { value: true, children: tmp11 };
    tmp10Result = tmp10(tmp5(10167).PortalKeyboardInModalContext.Provider, obj4);
  }
  return tmp10Result;
}
