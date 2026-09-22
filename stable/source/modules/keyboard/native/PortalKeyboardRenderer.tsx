// Module ID: 16870
// Function ID: 16871
// Name: PortalKeyboardRenderer
// Dependencies: [19, 1479, 21, 4347, 4504, 1609, 1363, 16871, 4505, 4495, 7324, 10218, 1481, 4508, 10451, 2]
// Exports: PortalKeyboardRenderer

// Module 16870 (PortalKeyboardRenderer)
import native from "native" /* 4347 */;
import PortalKeyboardUIStore3 from "PortalKeyboardUIStore" /* 4505 */;
import PortalKeyboardRendererComponentDefault from "PortalKeyboardRendererComponent" /* 16871 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1479 */;

require = fn;
function transitionGroupGetItemKey(id) {
  return id.id;
}
const jsx = fn(21).jsx;
let closure_6 = [];
function transitionGroupRenderItem(arg0, item, state, cleanUp) {
  let isAndroidResult = state === native.TransitionStates.YEETED;
  if (isAndroidResult) {
    const keyboardType = tmp(4504).getKeyboardType();
    isAndroidResult = keyboardType === tmp(1609).KeyboardTypes.SYSTEM;
    const tmpResult = tmp(4504);
  }
  if (isAndroidResult) {
    isAndroidResult = tmp(1363).isAndroid();
    const tmpResult2 = tmp(1363);
  }
  let tmp5 = null;
  if (!isAndroidResult) {
    const obj = { item, state, cleanUp };
    tmp5 = jsx(PortalKeyboardRendererComponentDefault, { item, state, cleanUp }, arg0);
  }
  return tmp5;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = function PortalKeyboardRenderer(portal) {
  let flag = portal.portal;
  if (flag === undefined) {
    flag = true;
  }
  dependencyMap = undefined;
  const id = noop.useId();
  let items = [id];
  const layoutEffect = noop.useLayoutEffect(() => PortalKeyboardUIStore3.registerPortalKeyboardRenderer(id), items);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    closure_0 = closure_4(() => {
      const PortalKeyboardUIStore = closure_0(4505).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      closure_0(4504);
      if (tmp6) {
        const result = closure_0(4505).closePortalKeyboardIfUnhandled();
        const tmpResult = closure_0(4505);
      }
    });
    return () => {
      closure_0();
      const result = id(4505).closePortalKeyboardIfUnhandled();
    };
  }, []);
  const layoutEffect2 = noop.useLayoutEffect(() => {
    function onNavigationStateChange() {
      const PortalKeyboardUIStore = rootNavigationRef(dependencyMap[8]).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      let tmp4 = null != field;
      if (tmp4) {
        tmp4 = field.channelId !== tmp(tmp2[10]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      }
      if (tmp4) {
        tmp4 = tmp(tmp2[11]).getFocusedChannelId() !== field.channelId;
        const tmpResult = tmp(tmp2[11]);
      }
      if (tmp4) {
        const keyboardType = tmp(tmp2[4]).getKeyboardType();
        if (keyboardType !== tmp(tmp2[5]).KeyboardTypes.SYSTEM) {
          const obj = { type: tmp(tmp2[5]).KeyboardTypes.SYSTEM };
          tmp(tmp2[12]).setKeyboardType(obj);
          const tmpResult5 = tmp(tmp2[12]);
        }
        const tmpResult4 = tmp(tmp2[4]);
        const result = tmp(tmp2[8]).closePortalKeyboardIfUnhandled();
        const tmpResult6 = tmp(tmp2[8]);
      }
    }
    if (obj.isAndroid()) {
      rootNavigationRef = rootNavigationRef(dependencyMap[9]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", onNavigationStateChange);
        return () => {
          rootNavigationRef.removeListener("state", onNavigationStateChange);
        };
      }
      let tmpResult = rootNavigationRef(dependencyMap[9]);
    }
  }, []);
  let PortalKeyboardUIStore = id(4505).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(4505).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("renderers");
  let tmp8 = 0 === field1.length;
  if (!tmp8) {
    tmp8 = field1[field1.length - 1] === id;
  }
  dependencyMap = tmp8;
  const items1 = [tmp8, field];
  const memo = noop.useMemo(() => {
    if (null != field) {
      if (closure_2) {
        const items = [tmp];
        let tmp3 = items;
      }
      return tmp3;
    }
    tmp3 = closure_6;
  }, items1);
  const tmp11 = jsx(id(4347).TransitionGroup, { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
  if (flag) {
    const obj3 = { children: tmp11 };
    let tmp10Result = tmp10(tmp5(4508).PortalKeyboard, obj3);
  } else {
    const obj4 = { value: true, children: tmp11 };
    tmp10Result = tmp10(tmp5(10451).PortalKeyboardInModalContext.Provider, obj4);
  }
  return tmp10Result;
};
