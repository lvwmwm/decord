// Module ID: 16292
// Function ID: 16293
// Name: PortalKeyboardRenderer
// Dependencies: [19, 1481, 21, 4540, 4703, 1611, 1364, 16293, 4704, 4693, 6642, 9549, 1483, 4707, 9783, 2]
// Exports: PortalKeyboardRenderer

// Module 16292 (PortalKeyboardRenderer)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import native from "native" /* 4540 */;
import useKeyboardType from "useKeyboardType" /* 4703 */;
import PortalKeyboardUIStore3 from "PortalKeyboardUIStore" /* 4704 */;
import PortalKeyboardRendererComponentDefault from "PortalKeyboardRendererComponent" /* 16293 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1481 */;
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
    isAndroidResult = keyboardType === tmp(1611).KeyboardTypes.SYSTEM;
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

export const PortalKeyboardRenderer = function PortalKeyboardRenderer(portal) {
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
    let closure_0 = closure_4(() => {
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
  let PortalKeyboardUIStore = id(4704).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(4704).PortalKeyboardUIStore;
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
  const tmp11 = jsx(tmp5(4540).TransitionGroup, { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
  if (flag) {
    const obj3 = { children: tmp11 };
    tmp10Result = tmp10(tmp5(4707).PortalKeyboard, obj3);
  } else {
    const obj4 = { value: true, children: tmp11 };
    tmp10Result = tmp10(tmp5(9783).PortalKeyboardInModalContext.Provider, obj4);
  }
  return tmp10Result;
};
