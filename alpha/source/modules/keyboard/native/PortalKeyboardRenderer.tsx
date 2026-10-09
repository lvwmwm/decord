// Module ID: 17033
// Function ID: 17034
// Name: PortalKeyboardRenderer
// Dependencies: [19, 1499, 21, 4788, 4948, 1629, 1382, 17034, 558, 576, 4949, 4938, 6917, 6079, 1501, 4952, 9499, 2]

// Module 17033 (PortalKeyboardRenderer)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import native from "native" /* 4788 */;
import useKeyboardType from "useKeyboardType" /* 4948 */;
import PortalKeyboardUIStore3 from "PortalKeyboardUIStore" /* 4949 */;
import PortalKeyboardRendererComponentDefault from "PortalKeyboardRendererComponent" /* 17034 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1499 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
    isAndroidResult = keyboardType === tmp(1629).KeyboardTypes.SYSTEM;
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function PortalKeyboardRenderer(portal) {
  let id;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp6;
  let tmp7;
  let tmp9;
  let tmp = id;
  let tmp2 = dependencyMap;
  let obj = id(576);
  const cResult = obj.c(16);
  portal = portal.portal;
  let tmp4 = undefined === portal || portal;
  id = react.useId();
  if (cResult[0] !== id) {
    const fn = function s() {
      const obj = PortalKeyboardUIStore3;
      return obj.registerPortalKeyboardRenderer(id);
    };
    const items = [id];
    cResult[0] = id;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b() {
      let closure_0 = closure_4(function onKeyboardStoreChange() {
        const PortalKeyboardUIStore = closure_0(closure_1_2[10]).PortalKeyboardUIStore;
        const field = PortalKeyboardUIStore.getField("keyboard");
        closure_0(closure_1_2[4]);
        const tmp = closure_0;
        const tmp2 = closure_1_2;
        const tmp6 = null != field && tmp5 !== field.type;
        if (tmp6) {
          const tmpResult = tmp(tmp2[10]);
          const result = tmpResult.closePortalKeyboardIfUnhandled();
        }
      });
      return () => {
        closure_0();
        const obj = id(dependencyMap[10]);
        const result = obj.closePortalKeyboardIfUnhandled();
      };
    };
    const items1 = [];
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const layoutEffect1 = obj2.useLayoutEffect(tmp9, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function c() {
      let rootNavigationRef;
      const tmp = rootNavigationRef;
      const tmp2 = closure_2;
      let obj = rootNavigationRef(closure_2[6]);
      if (obj.isAndroid()) {
        let tmpResult = tmp(tmp2[11]);
        rootNavigationRef = tmpResult.getRootNavigationRef();
        if (null != rootNavigationRef) {
          function onNavigationStateChange() {
            const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
            const field = PortalKeyboardUIStore.getField("keyboard");
            let tmp4 = null != field && field.channelId !== tmp(tmp2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if (tmp4) {
              const tmpResult = rootNavigationRef(closure_1_2[13]);
              tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
            }
            if (tmp4) {
              const tmpResult4 = rootNavigationRef(closure_1_2[4]);
              const keyboardType = tmpResult4.getKeyboardType();
              if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
                const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
                const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
                rootNavigationRef(closure_1_2[14]);
                setKeyboardType(obj);
              }
              const tmpResult6 = rootNavigationRef(closure_1_2[10]);
              const result = tmpResult6.closePortalKeyboardIfUnhandled();
            }
          }
          rootNavigationRef.addListener("state", onNavigationStateChange);
          return () => {
            rootNavigationRef.removeListener("state", onNavigationStateChange);
          };
        }
      }
    };
    const items2 = [];
    cResult[5] = fn3;
    cResult[6] = items2;
    tmp13 = items2;
    tmp12 = fn3;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const layoutEffect2 = obj2.useLayoutEffect(tmp12, tmp13);
  let PortalKeyboardUIStore = tmp(4949).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = tmp(4949).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("renderers");
  const tmp16 = 0 === field1.length || field1[field1.length - 1] === id;
  if (cResult[7] === tmp16) {
    let tmp19;
    let tmp24;
    if (cResult[8] === field) {
      tmp17 = cResult[9];
    }
    if (cResult[10] !== tmp17) {
      const tmp23 = jsx(tmp(4788).TransitionGroup, { items: tmp17, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
      cResult[10] = tmp17;
      cResult[11] = tmp23;
      tmp19 = tmp23;
    } else {
      tmp19 = cResult[11];
    }
    if (tmp4) {
      let tmp27;
      if (cResult[12] !== tmp19) {
        const tmp29 = jsx(tmp(4952).PortalKeyboard, { children: tmp19 });
        cResult[12] = tmp19;
        cResult[13] = tmp29;
        tmp27 = tmp29;
      } else {
        tmp27 = cResult[13];
      }
      tmp24 = tmp27;
    } else if (cResult[14] !== tmp19) {
      const tmp26 = jsx(tmp(9499).PortalKeyboardInModalContext.Provider, { value: true, children: tmp19 });
      cResult[14] = tmp19;
      cResult[15] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[15];
    }
    return tmp24;
  }
  if (null != field) {
    let tmp18;
    if (tmp16) {
      const items3 = [field];
      tmp18 = items3;
    }
    cResult[7] = tmp16;
    cResult[8] = field;
    cResult[9] = tmp18;
    tmp17 = tmp18;
  }
  tmp18 = closure_6;
}) : (function PortalKeyboardRenderer(portal) {
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
      const PortalKeyboardUIStore = closure_0(closure_1_2[10]).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      closure_0(closure_1_2[4]);
      const tmp = closure_0;
      const tmp2 = closure_1_2;
      const tmp6 = null != field && tmp5 !== field.type;
      if (tmp6) {
        const tmpResult = tmp(tmp2[10]);
        const result = tmpResult.closePortalKeyboardIfUnhandled();
      }
    });
    return () => {
      closure_0();
      const obj = id(closure_2[10]);
      const result = obj.closePortalKeyboardIfUnhandled();
    };
  }, []);
  const layoutEffect2 = react.useLayoutEffect(() => {
    let rootNavigationRef;
    function onNavigationStateChange() {
      const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      let tmp4 = null != field && field.channelId !== tmp(tmp2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (tmp4) {
        const tmpResult = rootNavigationRef(closure_1_2[13]);
        tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
      }
      if (tmp4) {
        const tmpResult4 = rootNavigationRef(closure_1_2[4]);
        const keyboardType = tmpResult4.getKeyboardType();
        if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
          const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
          const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
          rootNavigationRef(closure_1_2[14]);
          setKeyboardType(obj);
        }
        const tmpResult6 = rootNavigationRef(closure_1_2[10]);
        const result = tmpResult6.closePortalKeyboardIfUnhandled();
      }
    }
    const tmp = rootNavigationRef;
    const tmp2 = closure_2;
    let obj = rootNavigationRef(closure_2[6]);
    if (obj.isAndroid()) {
      let tmpResult = tmp(tmp2[11]);
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
  let PortalKeyboardUIStore = id(4949).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(4949).PortalKeyboardUIStore;
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
  const tmp11 = jsx(tmp5(4788).TransitionGroup, { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
  if (flag) {
    const obj3 = { children: tmp11 };
    tmp10Result = tmp10(tmp5(4952).PortalKeyboard, obj3);
  } else {
    const obj4 = { value: true, children: tmp11 };
    tmp10Result = tmp10(tmp5(9499).PortalKeyboardInModalContext.Provider, obj4);
  }
  return tmp10Result;
});
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = tmp2;
