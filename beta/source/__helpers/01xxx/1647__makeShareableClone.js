// Module ID: 1647
// Function ID: 1648
// Name: _makeShareableClone
// Dependencies: [32, 1648, 1649, 1641, 1650, 1651]
// Exports: _updatePropsJS

// Module 1647 (_makeShareableClone)
import _mod1648 from "module_1648" /* 1648 */;
import _mod1649 from "module_1649" /* 1649 */;
import _mod1650 from "module_1650" /* 1650 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
global._makeShareableClone = () => {
  const reanimatedError = new _mod1648.ReanimatedError("`_makeShareableClone` should never be called from React runtime.");
  throw reanimatedError;
};
global._scheduleHostFunctionOnJS = () => {
  const reanimatedError = new _mod1648.ReanimatedError("`_scheduleOnJS` should never be called from React runtime.");
  throw reanimatedError;
};
global._scheduleOnRuntime = () => {
  const reanimatedError = new _mod1648.ReanimatedError("`_scheduleOnRuntime` should never be called from React runtime.");
  throw reanimatedError;
};
function setNativeProps(arg0, arg1, arg2) {

}
function updatePropsDOM(arg0, arg1, arg2) {

}

export const createJSReanimatedModule = fn(1651).createJSReanimatedModule;
export const _updatePropsJS = (arg0, getAnimatableRef, arg2) => {
  dependencyMap = arg0;
  if (getAnimatableRef) {
    let animatableRef = getAnimatableRef;
    if (getAnimatableRef.getAnimatableRef) {
      animatableRef = getAnimatableRef.getAnimatableRef();
    }
    const _Object = Object;
    const keys = Object.keys(arg0);
    const items = [{}, {}];
    const first = _slicedToArray(keys.reduce((acc, item) => {
      let num = 0;
      if (typeof dependencyMap[item] === "function") {
        num = 1;
      }
      acc[num][item] = dependencyMap[item];
      return acc;
    }, items), 1)[0];
    if (typeof animatableRef.setNativeProps === "function") {
      if (typeof setNativeProps === "function") {
        if (arg2) {
          const obj = {};
          for (const key10106 in first) {
            if (!_mod1650.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST[key10106]) {
              continue;
            } else {
              obj[key10106] = first[key10106];
              continue;
            }
            continue;
          }
          setNativeProps = animatableRef.setNativeProps;
          if (setNativeProps != null) {
            setNativeProps(obj);
          }
        }
        const tmp27 = animatableRef.previousStyle || {};
        const obj2 = {};
        const merged = Object.assign(tmp27);
        const merged1 = Object.assign(first);
        animatableRef.previousStyle = obj2;
        const setNativeProps2 = animatableRef.setNativeProps;
        if (setNativeProps2 != null) {
          const obj3 = { style: obj2 };
          setNativeProps2(obj3);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      if (undefined !== _mod1649.createReactDOMStyle) {
        if (undefined !== animatableRef.style) {
          if (typeof updatePropsDOM === "function") {
            const tmp10 = animatableRef.previousStyle || {};
            const obj4 = {};
            const merged2 = Object.assign(tmp10);
            const merged3 = Object.assign(first);
            animatableRef.previousStyle = obj4;
            const reactDOMStyle = tmp36(1649).createReactDOMStyle(obj4);
            const _Array = Array;
            const tmp36Result = tmp36(1649);
            if (tmp18) {
              reactDOMStyle.transform = tmp36(1649).createTransformValue(reactDOMStyle.transform);
              const tmp36Result3 = tmp36(1649);
            }
            let tmp19 = undefined !== tmp36(1649).createTextShadowValue;
            if (tmp19) {
              tmp19 = reactDOMStyle.textShadowColor || reactDOMStyle.textShadowRadius || reactDOMStyle.textShadowOffset;
              const tmp20 = reactDOMStyle.textShadowColor || reactDOMStyle.textShadowRadius || reactDOMStyle.textShadowOffset;
            }
            if (tmp19) {
              ({ textShadowColor: obj6.textShadowColor, textShadowOffset: obj6.textShadowOffset, textShadowRadius: obj6.textShadowRadius } = reactDOMStyle);
              reactDOMStyle.textShadow = tmp36(1649).createTextShadowValue({ textShadowColor: null, textShadowOffset: null, textShadowRadius: null });
              const obj5 = { textShadowColor: null, textShadowOffset: null, textShadowRadius: null };
              const tmp36Result4 = tmp36(1649);
            }
            for (const key10094 in reactDOMStyle) {
              if (arg2) {
                if ("INPUT" === animatableRef.nodeName) {
                  if ("text" === key10094) {
                    animatableRef.value = reactDOMStyle[key10094];
                    continue;
                  }
                }
                let attr = animatableRef.setAttribute(key10094, reactDOMStyle[key10094]);
                continue;
              } else {
                animatableRef.style[key10094] = reactDOMStyle[key10094];
                continue;
              }
              continue;
            }
            tmp18 = Array.isArray(reactDOMStyle.transform) && undefined !== tmp36(1649).createTransformValue;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      const _Object2 = Object;
      if (Object.keys(animatableRef.props).length > 0) {
        const _Object3 = Object;
        const keys1 = Object.keys(animatableRef.props);
        const item = keys1.forEach((item) => {
          if (first[item]) {
            const _touchableNode = animatableRef._touchableNode;
            const attr = _touchableNode.setAttribute(item.replace(/[A-Z]/g, (str) => "-" + str.toLowerCase()), tmp[item]);
          }
        });
      } else {
        let str2 = "";
        if ("className" in animatableRef) {
          let className;
          if (animatableRef != null) {
            className = animatableRef.className;
          }
          str2 = className;
        }
        const logger = tmp36(1641).logger;
        const _HermesInternal = HermesInternal;
        logger.warn("It's not possible to manipulate the component " + str2);
      }
    }
  }
};
