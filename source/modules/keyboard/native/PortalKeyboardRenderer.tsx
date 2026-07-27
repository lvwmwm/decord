// Module ID: 15514
// Function ID: 119263
// Name: transitionGroupGetItemKey
// Dependencies: [31, 1452, 33, 4477, 3997, 1555, 477, 15515, 3998, 3983, 5604, 10192, 1454, 4001, 9330, 2]
// Exports: PortalKeyboardRenderer

// Module 15514 (transitionGroupGetItemKey)
import result from "result";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { jsx } from "jsxProd";

const require = arg1;
function transitionGroupGetItemKey(id) {
  return id.id;
}
let closure_6 = [];
function transitionGroupRenderItem(arg0, item, state, cleanUp) {
  let isAndroidResult = state === require(4477) /* _createForOfIteratorHelperLoose */.TransitionStates.YEETED;
  if (isAndroidResult) {
    let obj = require(3997) /* getKeyboardContextForType */;
    const keyboardType = obj.getKeyboardType();
    isAndroidResult = keyboardType === require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM;
  }
  if (isAndroidResult) {
    isAndroidResult = require(477) /* set */.isAndroid();
    const obj2 = require(477) /* set */;
  }
  let tmp7 = null;
  if (!isAndroidResult) {
    obj = { item, state, cleanUp };
    tmp7 = jsx(importDefault(15515), { item, state, cleanUp }, arg0);
  }
  return tmp7;
}
let result = require("jsxProd").fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = function PortalKeyboardRenderer(portal) {
  let flag = portal.portal;
  if (flag === undefined) {
    flag = true;
  }
  let id;
  let field;
  let dependencyMap;
  id = React.useId();
  let items = [id];
  const layoutEffect = React.useLayoutEffect(() => id(_undefined[8]).registerPortalKeyboardRenderer(id), items);
  const layoutEffect1 = React.useLayoutEffect(() => {
    let closure_0 = outer1_4(() => {
      const PortalKeyboardUIStore = id(3998).PortalKeyboardUIStore;
      const field = PortalKeyboardUIStore.getField("keyboard");
      id(3997);
      if (tmp4) {
        const result = id(3998).closePortalKeyboardIfUnhandled();
        const obj = id(3998);
      }
    });
    return () => {
      callback();
      const result = id(3998).closePortalKeyboardIfUnhandled();
    };
  }, []);
  const layoutEffect2 = React.useLayoutEffect(() => {
    function onNavigationStateChange(nativeEvent) {
      const PortalKeyboardUIStore = id(3998).PortalKeyboardUIStore;
      const field = PortalKeyboardUIStore.getField("keyboard");
      let tmp2 = null != field;
      if (tmp2) {
        tmp2 = field.channelId !== id(5604).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      }
      if (tmp2) {
        let obj = id(10192);
        tmp2 = obj.getFocusedChannelId() !== field.channelId;
      }
      if (tmp2) {
        const keyboardType = id(3997).getKeyboardType();
        if (keyboardType !== id(1555).KeyboardTypes.SYSTEM) {
          obj = { type: id(1555).KeyboardTypes.SYSTEM };
          id(1454).setKeyboardType(obj);
          const obj3 = id(1454);
        }
        const obj2 = id(3997);
        const result = id(3998).closePortalKeyboardIfUnhandled();
        const obj5 = id(3998);
      }
    }
    if (obj.isAndroid()) {
      const rootNavigationRef = id(_undefined[9]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", onNavigationStateChange);
        return () => {
          rootNavigationRef.removeListener("state", onNavigationStateChange);
        };
      }
      let obj2 = id(_undefined[9]);
    }
  }, []);
  let PortalKeyboardUIStore = id(3998).PortalKeyboardUIStore;
  field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(3998).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("renderers");
  let tmp6 = 0 === field1.length;
  if (!tmp6) {
    tmp6 = field1[field1.length - 1] === id;
  }
  dependencyMap = tmp6;
  const items1 = [tmp6, field];
  const memo = React.useMemo(() => {
    if (null != field) {
      if (c2) {
        const items = [field];
        let tmp2 = items;
      }
      return tmp2;
    }
    tmp2 = outer1_6;
  }, items1);
  let obj = { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem };
  const tmp8 = jsx(id(4477).TransitionGroup, { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
  if (flag) {
    obj = { children: tmp8 };
    let tmp9Result = tmp9(tmp10(4001).PortalKeyboard, obj);
  } else {
    obj = { value: true, children: tmp8 };
    tmp9Result = tmp9(tmp10(9330).PortalKeyboardInModalContext.Provider, obj);
  }
  return tmp9Result;
};
