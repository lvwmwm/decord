// Module ID: 1648
// Function ID: 1649
// Name: _updatePropsJS
// Dependencies: [32, 1649, 1650, 1642, 1651, 1652]
// Exports: _updatePropsJS

// Module 1648 (_updatePropsJS)
import ReanimatedError from "ReanimatedError" /* 1649 */;
import _mod1650 from "module_1650" /* 1650 */;
import PropsAllowlists from "PropsAllowlists" /* 1651 */;
import _mod1652 from "module_1652" /* 1652 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

global._makeShareableClone = () => {
  const reanimatedError = new ReanimatedError.ReanimatedError("`_makeShareableClone` should never be called from React runtime.");
  throw reanimatedError;
};
global._scheduleHostFunctionOnJS = () => {
  const reanimatedError = new ReanimatedError.ReanimatedError("`_scheduleOnJS` should never be called from React runtime.");
  throw reanimatedError;
};
global._scheduleOnRuntime = () => {
  const reanimatedError = new ReanimatedError.ReanimatedError("`_scheduleOnRuntime` should never be called from React runtime.");
  throw reanimatedError;
};
function setNativeProps(arg0, arg1, arg2) {

}
function updatePropsDOM(arg0, arg1, arg2) {

}

export const createJSReanimatedModule = _mod1652.createJSReanimatedModule;
export const _updatePropsJS = (arg0, getAnimatableRef, arg2) => {
  let closure_0 = arg0;
  const tmp = getAnimatableRef;
  if (tmp) {
    let animatableRef = getAnimatableRef;
    if (getAnimatableRef.getAnimatableRef) {
      animatableRef = getAnimatableRef.getAnimatableRef();
    }
    const _Object = Object;
    const keys = Object.keys(arg0);
    const items = [{}, {}];
    let num = 1;
    const first = _slicedToArray(keys.reduce((acc, item) => {
      let num = 0;
      if (typeof closure_0[item] === "function") {
        num = 1;
      }
      acc[num][item] = closure_0[item];
      return acc;
    }, items), 1)[0];
    if (typeof animatableRef.setNativeProps === "function") {
      if (typeof setNativeProps === "function") {
        if (arg2) {
          const obj = {};
          for (const key10106 in first) {
            if (!PropsAllowlists.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST[key10106]) {
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
        const obj2 = {};
        const tmp28 = animatableRef.previousStyle || {};
        const merged = Object.assign(tmp28);
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
      if (undefined !== _mod1650.createReactDOMStyle) {
        if (undefined !== animatableRef.style) {
          if (typeof updatePropsDOM === "function") {
            const obj4 = {};
            const tmp11 = animatableRef.previousStyle || {};
            const merged2 = Object.assign(tmp11);
            const merged3 = Object.assign(first);
            animatableRef.previousStyle = obj4;
            const tmp37Result = _mod1650;
            const reactDOMStyle = tmp37Result.createReactDOMStyle(obj4);
            const _Array = Array;
            const tmp19 = Array.isArray(reactDOMStyle.transform) && undefined !== _mod1650.createTransformValue;
            if (tmp19) {
              const tmp37Result3 = _mod1650;
              reactDOMStyle.transform = tmp37Result3.createTransformValue(reactDOMStyle.transform);
            }
            let tmp20 = undefined !== tmp37(1650).createTextShadowValue;
            if (tmp20) {
              tmp20 = reactDOMStyle.textShadowColor || reactDOMStyle.textShadowRadius || reactDOMStyle.textShadowOffset;
            }
            if (tmp20) {
              const obj5 = { textShadowColor: null, textShadowOffset: null, textShadowRadius: null };
              ({ textShadowColor: obj6.textShadowColor, textShadowOffset: obj6.textShadowOffset, textShadowRadius: obj6.textShadowRadius } = reactDOMStyle);
              const tmp37Result4 = _mod1650;
              reactDOMStyle.textShadow = tmp37Result4.createTextShadowValue(obj5);
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
        const logger = tmp37(1642).logger;
        const _HermesInternal = HermesInternal;
        logger.warn("It's not possible to manipulate the component " + str2);
      }
    }
  }
};
