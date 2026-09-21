// Module ID: 16979
// Function ID: 16980
// Name: PortalKeyboardRenderer
// Dependencies: [19, 1484, 21, 4471, 4627, 1614, 1368, 16980, 558, 568, 4628, 4617, 7468, 12341, 1486, 4631, 10498, 2]

// Module 16979 (PortalKeyboardRenderer)
import native from "native" /* 4471 */;
import PortalKeyboardUIStore3 from "PortalKeyboardUIStore" /* 4628 */;
import PortalKeyboardRendererComponentDefault from "PortalKeyboardRendererComponent" /* 16980 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1484 */;

require = fn;
function transitionGroupGetItemKey(id) {
  return id.id;
}
const jsx = fn(21).jsx;
let closure_6 = [];
function transitionGroupRenderItem(arg0, item, state, cleanUp) {
  let isAndroidResult = state === native.TransitionStates.YEETED;
  if (isAndroidResult) {
    const keyboardType = tmp(4627).getKeyboardType();
    isAndroidResult = keyboardType === tmp(1614).KeyboardTypes.SYSTEM;
    const tmpResult = tmp(4627);
  }
  if (isAndroidResult) {
    isAndroidResult = tmp(1368).isAndroid();
    const tmpResult2 = tmp(1368);
  }
  let tmp5 = null;
  if (!isAndroidResult) {
    const obj = { item, state, cleanUp };
    tmp5 = jsx(PortalKeyboardRendererComponentDefault, { item, state, cleanUp }, arg0);
  }
  return tmp5;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = ReactCompilerGating.isReactCompilerEnabled() ? ((portal) => {
  const cResult = id(568).c(16);
  portal = portal.portal;
  id = noop.useId();
  if (cResult[0] !== id) {
    const fn = function s() {
      return PortalKeyboardUIStore3.registerPortalKeyboardRenderer(id);
    };
    const items = [id];
    cResult[0] = id;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b() {
      closure_0 = closure_4(() => {
        const PortalKeyboardUIStore = closure_0(4628).PortalKeyboardUIStore;
        const field = PortalKeyboardUIStore.getField("keyboard");
        closure_0(4627);
        if (tmp6) {
          const result = closure_0(4628).closePortalKeyboardIfUnhandled();
          const tmpResult = closure_0(4628);
        }
      });
      return () => {
        closure_0();
        const result = id(4628).closePortalKeyboardIfUnhandled();
      };
    };
    const items1 = [];
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp9 = items1;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const layoutEffect1 = obj2.useLayoutEffect(tmp8, tmp9);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
              const PortalKeyboardUIStore = rootNavigationRef(dependencyMap[10]).PortalKeyboardUIStore;
              const field = PortalKeyboardUIStore.getField("keyboard");
              let tmp4 = null != field;
              if (tmp4) {
                tmp4 = field.channelId !== tmp(tmp2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
              }
              if (tmp4) {
                tmp4 = tmp(tmp2[13]).getFocusedChannelId() !== field.channelId;
                const tmpResult = tmp(tmp2[13]);
              }
              if (tmp4) {
                const keyboardType = tmp(tmp2[4]).getKeyboardType();
                if (keyboardType !== tmp(tmp2[5]).KeyboardTypes.SYSTEM) {
                  const obj = { type: tmp(tmp2[5]).KeyboardTypes.SYSTEM };
                  tmp(tmp2[14]).setKeyboardType(obj);
                  const tmpResult5 = tmp(tmp2[14]);
                }
                const tmpResult4 = tmp(tmp2[4]);
                const result = tmp(tmp2[10]).closePortalKeyboardIfUnhandled();
                const tmpResult6 = tmp(tmp2[10]);
              }
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
    const items2 = [];
    cResult[5] = K;
    cResult[6] = items2;
    let tmp12 = items2;
    const tmp11 = K;
  } else {
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
              const PortalKeyboardUIStore = rootNavigationRef(dependencyMap[10]).PortalKeyboardUIStore;
              const field = PortalKeyboardUIStore.getField("keyboard");
              let tmp4 = null != field;
              if (tmp4) {
                tmp4 = field.channelId !== tmp(tmp2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
              }
              if (tmp4) {
                tmp4 = tmp(tmp2[13]).getFocusedChannelId() !== field.channelId;
                const tmpResult = tmp(tmp2[13]);
              }
              if (tmp4) {
                const keyboardType = tmp(tmp2[4]).getKeyboardType();
                if (keyboardType !== tmp(tmp2[5]).KeyboardTypes.SYSTEM) {
                  const obj = { type: tmp(tmp2[5]).KeyboardTypes.SYSTEM };
                  tmp(tmp2[14]).setKeyboardType(obj);
                  const tmpResult5 = tmp(tmp2[14]);
                }
                const tmpResult4 = tmp(tmp2[4]);
                const result = tmp(tmp2[10]).closePortalKeyboardIfUnhandled();
                const tmpResult6 = tmp(tmp2[10]);
              }
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
    tmp12 = cResult[6];
  }
  const layoutEffect2 = obj2.useLayoutEffect(tmp11, tmp12);
  let PortalKeyboardUIStore = tmp(4628).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = tmp(4628).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("renderers");
  let tmp15 = 0 === field1.length;
  if (!tmp15) {
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
              const PortalKeyboardUIStore = rootNavigationRef(dependencyMap[10]).PortalKeyboardUIStore;
              const field = PortalKeyboardUIStore.getField("keyboard");
              let tmp4 = null != field;
              if (tmp4) {
                tmp4 = field.channelId !== tmp(tmp2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
              }
              if (tmp4) {
                tmp4 = tmp(tmp2[13]).getFocusedChannelId() !== field.channelId;
                const tmpResult = tmp(tmp2[13]);
              }
              if (tmp4) {
                const keyboardType = tmp(tmp2[4]).getKeyboardType();
                if (keyboardType !== tmp(tmp2[5]).KeyboardTypes.SYSTEM) {
                  const obj = { type: tmp(tmp2[5]).KeyboardTypes.SYSTEM };
                  tmp(tmp2[14]).setKeyboardType(obj);
                  const tmpResult5 = tmp(tmp2[14]);
                }
                const tmpResult4 = tmp(tmp2[4]);
                const result = tmp(tmp2[10]).closePortalKeyboardIfUnhandled();
                const tmpResult6 = tmp(tmp2[10]);
              }
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
    tmp15 = field1[field1.length - 1] === id;
  }
  if (cResult[7] === tmp15) {
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
              const PortalKeyboardUIStore = rootNavigationRef(dependencyMap[10]).PortalKeyboardUIStore;
              const field = PortalKeyboardUIStore.getField("keyboard");
              let tmp4 = null != field;
              if (tmp4) {
                tmp4 = field.channelId !== tmp(tmp2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
              }
              if (tmp4) {
                tmp4 = tmp(tmp2[13]).getFocusedChannelId() !== field.channelId;
                const tmpResult = tmp(tmp2[13]);
              }
              if (tmp4) {
                const keyboardType = tmp(tmp2[4]).getKeyboardType();
                if (keyboardType !== tmp(tmp2[5]).KeyboardTypes.SYSTEM) {
                  const obj = { type: tmp(tmp2[5]).KeyboardTypes.SYSTEM };
                  tmp(tmp2[14]).setKeyboardType(obj);
                  const tmpResult5 = tmp(tmp2[14]);
                }
                const tmpResult4 = tmp(tmp2[4]);
                const result = tmp(tmp2[10]).closePortalKeyboardIfUnhandled();
                const tmpResult6 = tmp(tmp2[10]);
              }
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
  }
  if (null == field) {
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
              const PortalKeyboardUIStore = rootNavigationRef(dependencyMap[10]).PortalKeyboardUIStore;
              const field = PortalKeyboardUIStore.getField("keyboard");
              let tmp4 = null != field;
              if (tmp4) {
                tmp4 = field.channelId !== tmp(tmp2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
              }
              if (tmp4) {
                tmp4 = tmp(tmp2[13]).getFocusedChannelId() !== field.channelId;
                const tmpResult = tmp(tmp2[13]);
              }
              if (tmp4) {
                const keyboardType = tmp(tmp2[4]).getKeyboardType();
                if (keyboardType !== tmp(tmp2[5]).KeyboardTypes.SYSTEM) {
                  const obj = { type: tmp(tmp2[5]).KeyboardTypes.SYSTEM };
                  tmp(tmp2[14]).setKeyboardType(obj);
                  const tmpResult5 = tmp(tmp2[14]);
                }
                const tmpResult4 = tmp(tmp2[4]);
                const result = tmp(tmp2[10]).closePortalKeyboardIfUnhandled();
                const tmpResult6 = tmp(tmp2[10]);
              }
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
    cResult[7] = tmp15;
    cResult[8] = field;
    cResult[9] = tmp16;
  } else {
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
              const PortalKeyboardUIStore = rootNavigationRef(dependencyMap[10]).PortalKeyboardUIStore;
              const field = PortalKeyboardUIStore.getField("keyboard");
              let tmp4 = null != field;
              if (tmp4) {
                tmp4 = field.channelId !== tmp(tmp2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
              }
              if (tmp4) {
                tmp4 = tmp(tmp2[13]).getFocusedChannelId() !== field.channelId;
                const tmpResult = tmp(tmp2[13]);
              }
              if (tmp4) {
                const keyboardType = tmp(tmp2[4]).getKeyboardType();
                if (keyboardType !== tmp(tmp2[5]).KeyboardTypes.SYSTEM) {
                  const obj = { type: tmp(tmp2[5]).KeyboardTypes.SYSTEM };
                  tmp(tmp2[14]).setKeyboardType(obj);
                  const tmpResult5 = tmp(tmp2[14]);
                }
                const tmpResult4 = tmp(tmp2[4]);
                const result = tmp(tmp2[10]).closePortalKeyboardIfUnhandled();
                const tmpResult6 = tmp(tmp2[10]);
              }
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
  }
  const items3 = [field];
}) : ((portal) => {
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
      const PortalKeyboardUIStore = closure_0(4628).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      closure_0(4627);
      if (tmp6) {
        const result = closure_0(4628).closePortalKeyboardIfUnhandled();
        const tmpResult = closure_0(4628);
      }
    });
    return () => {
      closure_0();
      const result = id(4628).closePortalKeyboardIfUnhandled();
    };
  }, []);
  const layoutEffect2 = noop.useLayoutEffect(() => {
    function onNavigationStateChange() {
      const PortalKeyboardUIStore = rootNavigationRef(dependencyMap[10]).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      let tmp4 = null != field;
      if (tmp4) {
        tmp4 = field.channelId !== tmp(tmp2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      }
      if (tmp4) {
        tmp4 = tmp(tmp2[13]).getFocusedChannelId() !== field.channelId;
        const tmpResult = tmp(tmp2[13]);
      }
      if (tmp4) {
        const keyboardType = tmp(tmp2[4]).getKeyboardType();
        if (keyboardType !== tmp(tmp2[5]).KeyboardTypes.SYSTEM) {
          const obj = { type: tmp(tmp2[5]).KeyboardTypes.SYSTEM };
          tmp(tmp2[14]).setKeyboardType(obj);
          const tmpResult5 = tmp(tmp2[14]);
        }
        const tmpResult4 = tmp(tmp2[4]);
        const result = tmp(tmp2[10]).closePortalKeyboardIfUnhandled();
        const tmpResult6 = tmp(tmp2[10]);
      }
    }
    if (obj.isAndroid()) {
      rootNavigationRef = rootNavigationRef(dependencyMap[11]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", onNavigationStateChange);
        return () => {
          rootNavigationRef.removeListener("state", onNavigationStateChange);
        };
      }
      let tmpResult = rootNavigationRef(dependencyMap[11]);
    }
  }, []);
  let PortalKeyboardUIStore = id(4628).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(4628).PortalKeyboardUIStore;
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
  const tmp11 = jsx(id(4471).TransitionGroup, { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
  if (flag) {
    const obj3 = { children: tmp11 };
    let tmp10Result = tmp10(tmp5(4631).PortalKeyboard, obj3);
  } else {
    const obj4 = { value: true, children: tmp11 };
    tmp10Result = tmp10(tmp5(10498).PortalKeyboardInModalContext.Provider, obj4);
  }
  return tmp10Result;
});
