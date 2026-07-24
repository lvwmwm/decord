// Module ID: 15491
// Function ID: 119086
// Name: transitionGroupGetItemKey
// Dependencies: [31, 1452, 33, 4476, 3996, 1555, 477, 15492, 3997, 3982, 5604, 10259, 1454, 4000, 2]
// Exports: PortalKeyboardRenderer

// Module 15491 (transitionGroupGetItemKey)
import result from "result";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { jsx } from "jsxProd";

const require = arg1;
function transitionGroupGetItemKey(id) {
  return id.id;
}
let closure_6 = [];
function transitionGroupRenderItem(arg0, item, state, cleanUp) {
  let isAndroidResult = state === require(4476) /* _createForOfIteratorHelperLoose */.TransitionStates.YEETED;
  if (isAndroidResult) {
    let obj = require(3996) /* getKeyboardContextForType */;
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
    tmp7 = jsx(importDefault(15492), { item, state, cleanUp }, arg0);
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
      const PortalKeyboardUIStore = id(3997).PortalKeyboardUIStore;
      const field = PortalKeyboardUIStore.getField("keyboard");
      id(3996);
      if (tmp4) {
        const result = id(3997).closePortalKeyboardIfUnhandled();
        const obj = id(3997);
      }
    });
    return () => {
      callback();
      const result = id(3997).closePortalKeyboardIfUnhandled();
    };
  }, []);
  const layoutEffect2 = React.useLayoutEffect(() => {
    function onNavigationStateChange(nativeEvent) {
      const PortalKeyboardUIStore = id(3997).PortalKeyboardUIStore;
      const field = PortalKeyboardUIStore.getField("keyboard");
      let tmp2 = null != field;
      if (tmp2) {
        tmp2 = field.channelId !== id(5604).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      }
      if (tmp2) {
        let obj = id(10259);
        tmp2 = obj.getFocusedChannelId() !== field.channelId;
      }
      if (tmp2) {
        const keyboardType = id(3996).getKeyboardType();
        if (keyboardType !== id(1555).KeyboardTypes.SYSTEM) {
          obj = { type: id(1555).KeyboardTypes.SYSTEM };
          id(1454).setKeyboardType(obj);
          const obj3 = id(1454);
        }
        const obj2 = id(3996);
        const result = id(3997).closePortalKeyboardIfUnhandled();
        const obj5 = id(3997);
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
  let PortalKeyboardUIStore = id(3997).PortalKeyboardUIStore;
  field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(3997).PortalKeyboardUIStore;
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
  if (flag) {
    let Fragment = id(4000).PortalKeyboard;
  } else {
    Fragment = React.Fragment;
  }
  obj = { children: jsx(id(4476).TransitionGroup, obj) };
  obj = { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem };
  return <></>;
};
