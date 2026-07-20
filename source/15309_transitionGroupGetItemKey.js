// Module ID: 15309
// Function ID: 116489
// Name: transitionGroupGetItemKey
// Dependencies: [57, 31, 1455, 33, 3989, 10867, 8170, 10868, 4961, 11184, 11299, 5219, 2, 31, 1552]
// Exports: PortalKeyboardRenderer

// Module 15309 (transitionGroupGetItemKey)
import _slicedToArray from "_slicedToArray";
import module_31 from "module_31";
import { jsx } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import DRAG_HANDLE from "DRAG_HANDLE";

function transitionGroupGetItemKey(id) {
  return id.id;
}
let closure_6 = [];
function transitionGroupRenderItem(arg0, item, state, cleanUp) {
  let isAndroidResult = state === item(dependencyMap[3]).TransitionStates.YEETED;
  if (isAndroidResult) {
    let obj = item(dependencyMap[4]);
    const keyboardType = obj.getKeyboardType();
    isAndroidResult = keyboardType === item(dependencyMap[5]).KeyboardTypes.SYSTEM;
  }
  if (isAndroidResult) {
    isAndroidResult = item(dependencyMap[6]).isAndroid();
    const obj2 = item(dependencyMap[6]);
  }
  let tmp7 = null;
  if (!isAndroidResult) {
    obj = { item, state, cleanUp };
    tmp7 = jsx(importDefault(dependencyMap[7]), obj, arg0);
  }
  return tmp7;
}
const result = DRAG_HANDLE.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = function PortalKeyboardRenderer(portal) {
  let flag = portal.portal;
  if (flag === undefined) {
    flag = true;
  }
  let arg1;
  let importDefault;
  let dependencyMap;
  const id = React.useId();
  arg1 = id;
  const items = [id];
  const layoutEffect = React.useLayoutEffect(() => id(tmp6[8]).registerPortalKeyboardRenderer(id), items);
  const layoutEffect1 = React.useLayoutEffect(() => {
    let closure_0 = callback(() => {
      const PortalKeyboardUIStore = callback(closure_2[8]).PortalKeyboardUIStore;
      const field = PortalKeyboardUIStore.getField("keyboard");
      callback(closure_2[4]);
      if (tmp4) {
        const result = callback(closure_2[8]).closePortalKeyboardIfUnhandled();
        const obj = callback(closure_2[8]);
      }
    });
    return () => {
      callback();
      const result = callback(closure_2[8]).closePortalKeyboardIfUnhandled();
    };
  }, []);
  const layoutEffect2 = React.useLayoutEffect(() => {
    function onNavigationStateChange(nativeEvent) {
      const PortalKeyboardUIStore = rootNavigationRef(closure_2[8]).PortalKeyboardUIStore;
      const field = PortalKeyboardUIStore.getField("keyboard");
      let tmp2 = null != field;
      if (tmp2) {
        tmp2 = field.channelId !== rootNavigationRef(closure_2[10]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      }
      if (tmp2) {
        let obj = rootNavigationRef(closure_2[11]);
        tmp2 = obj.getFocusedChannelId() !== field.channelId;
      }
      if (tmp2) {
        const keyboardType = rootNavigationRef(closure_2[4]).getKeyboardType();
        if (keyboardType !== rootNavigationRef(closure_2[5]).KeyboardTypes.SYSTEM) {
          obj = { type: rootNavigationRef(closure_2[5]).KeyboardTypes.SYSTEM };
          rootNavigationRef(closure_2[12]).setKeyboardType(obj);
          const obj3 = rootNavigationRef(closure_2[12]);
        }
        const obj2 = rootNavigationRef(closure_2[4]);
        const result = rootNavigationRef(closure_2[8]).closePortalKeyboardIfUnhandled();
        const obj5 = rootNavigationRef(closure_2[8]);
      }
    }
    const field = onNavigationStateChange;
    if (obj.isAndroid()) {
      const rootNavigationRef = id(tmp6[9]).getRootNavigationRef();
      const id = rootNavigationRef;
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", onNavigationStateChange);
        return () => {
          rootNavigationRef.removeListener("state", onNavigationStateChange);
        };
      }
      const obj2 = id(tmp6[9]);
    }
  }, []);
  const PortalKeyboardUIStore = arg1(dependencyMap[8]).PortalKeyboardUIStore;
  const field = PortalKeyboardUIStore.useField("keyboard");
  importDefault = field;
  const PortalKeyboardUIStore2 = arg1(dependencyMap[8]).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("renderers");
  let tmp6 = 0 === field1.length;
  if (!tmp6) {
    tmp6 = field1[field1.length - 1] === id;
  }
  dependencyMap = tmp6;
  const items1 = [tmp6, field];
  const memo = React.useMemo(() => {
    if (null != field) {
      if (tmp6) {
        const items = [field];
        let tmp2 = items;
      }
      return tmp2;
    }
    tmp2 = closure_6;
  }, items1);
  if (flag) {
    let Fragment = arg1(dependencyMap[13]).PortalKeyboard;
  } else {
    Fragment = React.Fragment;
  }
  let obj = { children: jsx(arg1(dependencyMap[3]).TransitionGroup, obj) };
  obj = { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem };
  return <></>;
};
