// Module ID: 16643
// Function ID: 16644
// Name: PortalKeyboardRenderer
// Dependencies: [19, 1486, 21, 4595, 4753, 1616, 1369, 16644, 558, 576, 4754, 4743, 6736, 11839, 1488, 4757, 9939, 2]

// Module 16643 (PortalKeyboardRenderer)
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import native from "native" /* 4595 */;
import useKeyboardType from "useKeyboardType" /* 4753 */;
import PortalKeyboardUIStore3 from "PortalKeyboardUIStore" /* 4754 */;
import PortalKeyboardRendererComponentDefault from "PortalKeyboardRendererComponent" /* 16644 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1486 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, portal;

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
    isAndroidResult = keyboardType === tmp(1616).KeyboardTypes.SYSTEM;
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((portal) => {
  let id;
  let tmp10;
  let tmp12;
  let tmp13;
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
      let closure_0 = closure_4(() => {
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
    class K {
      constructor() {
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
      }
    }
    const items2 = [];
    cResult[5] = K;
    cResult[6] = items2;
    tmp13 = items2;
    tmp12 = K;
  } else {
    class K {
      constructor() {
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
      }
    }
    tmp13 = cResult[6];
  }
  const layoutEffect2 = obj2.useLayoutEffect(tmp12, tmp13);
  let PortalKeyboardUIStore = tmp(4754).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = tmp(4754).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("renderers");
  let tmp16 = 0 === field1.length;
  if (!tmp16) {
    class K {
      constructor() {
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
      }
    }
    tmp16 = field1[field1.length - 1] === id;
  }
  if (cResult[7] === tmp16) {
    let tmp23;
    class K {
      constructor() {
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
      }
    }
    if (cResult[10] !== tmp17) {
      class K {
        constructor() {
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
        }
      }
      cResult[10] = tmp17;
      cResult[11] = jsx(tmp(4595).TransitionGroup, { items: tmp17, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
      const tmp22 = jsx(tmp(4595).TransitionGroup, { items: tmp17, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
    } else {
      class K {
        constructor() {
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
        }
      }
    }
    if (tmp4) {
      class K {
        constructor() {
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
        }
      }
      tmp23 = tmp24;
    } else {
      class K {
        constructor() {
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
        }
      }
    }
    return tmp23;
  }
  if (null != field) {
    class K {
      constructor() {
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
      }
    }
    cResult[7] = tmp16;
    cResult[8] = field;
    cResult[9] = tmp18;
  }
}) : ((portal) => {
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
  let PortalKeyboardUIStore = id(4754).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(4754).PortalKeyboardUIStore;
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
  const tmp11 = jsx(tmp5(4595).TransitionGroup, { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
  if (flag) {
    const obj3 = { children: tmp11 };
    tmp10Result = tmp10(tmp5(4757).PortalKeyboard, obj3);
  } else {
    const obj4 = { value: true, children: tmp11 };
    tmp10Result = tmp10(tmp5(9939).PortalKeyboardInModalContext.Provider, obj4);
  }
  return tmp10Result;
});
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = tmp2;
