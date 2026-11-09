// Module ID: 1694
// Function ID: 1695
// Name: _updatePropsJS
// Dependencies: [32, 1695, 1665, 1696]
// Exports: _updatePropsJS

// Module 1694 (_updatePropsJS)
import _mod1695 from "module_1695" /* 1695 */;
import _mod1696 from "module_1696" /* 1696 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function setNativeProps(arg0, arg1, arg2) {

}
function updatePropsDOM(arg0, arg1, arg2) {

}

export const createJSReanimatedModule = _mod1696.createJSReanimatedModule;
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
          setNativeProps = animatableRef.setNativeProps;
          if (setNativeProps != null) {
            setNativeProps(first);
          }
        }
        const obj = {};
        const tmp27 = animatableRef.previousStyle || {};
        const merged = Object.assign(tmp27);
        const merged1 = Object.assign(first);
        animatableRef.previousStyle = obj;
        const setNativeProps2 = animatableRef.setNativeProps;
        if (setNativeProps2 != null) {
          const obj2 = { style: obj };
          setNativeProps2(obj2);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      if (undefined !== _mod1695.createReactDOMStyle) {
        if (undefined !== animatableRef.style) {
          if (typeof updatePropsDOM === "function") {
            const obj3 = {};
            const tmp11 = animatableRef.previousStyle || {};
            const merged2 = Object.assign(tmp11);
            const merged3 = Object.assign(first);
            animatableRef.previousStyle = obj3;
            const tmp36Result = _mod1695;
            const reactDOMStyle = tmp36Result.createReactDOMStyle(obj3);
            const _Array = Array;
            const tmp19 = Array.isArray(reactDOMStyle.transform) && undefined !== _mod1695.createTransformValue;
            if (tmp19) {
              const tmp36Result3 = _mod1695;
              reactDOMStyle.transform = tmp36Result3.createTransformValue(reactDOMStyle.transform);
            }
            let tmp20 = undefined !== tmp36(1695).createTextShadowValue;
            if (tmp20) {
              tmp20 = reactDOMStyle.textShadowColor || reactDOMStyle.textShadowRadius || reactDOMStyle.textShadowOffset;
            }
            if (tmp20) {
              const obj4 = { textShadowColor: null, textShadowOffset: null, textShadowRadius: null };
              ({ textShadowColor: obj6.textShadowColor, textShadowOffset: obj6.textShadowOffset, textShadowRadius: obj6.textShadowRadius } = reactDOMStyle);
              const tmp36Result4 = _mod1695;
              reactDOMStyle.textShadow = tmp36Result4.createTextShadowValue(obj4);
            }
            for (const key10095 in reactDOMStyle) {
              if (arg2) {
                if ("INPUT" === animatableRef.nodeName) {
                  if ("text" === key10095) {
                    animatableRef.value = reactDOMStyle[key10095];
                    continue;
                  }
                }
                let attr = animatableRef.setAttribute(key10095, reactDOMStyle[key10095]);
                continue;
              } else {
                animatableRef.style[key10095] = reactDOMStyle[key10095];
                continue;
              }
              continue;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      if (animatableRef.props) {
        const _Object2 = Object;
        if (Object.keys(animatableRef.props).length > 0) {
          const _Object3 = Object;
          const keys1 = Object.keys(animatableRef.props);
          const item = keys1.forEach((item) => {
            if (item in first) {
              const _touchableNode = animatableRef._touchableNode;
              const attr = _touchableNode.setAttribute(item.replace(/[A-Z]/g, (str) => "-" + str.toLowerCase()), tmp[item]);
            }
          });
        }
      }
      let str2 = "";
      if ("className" in animatableRef) {
        let className;
        if (animatableRef != null) {
          className = animatableRef.className;
        }
        str2 = className;
      }
      const logger = tmp36(1665).logger;
      const _HermesInternal = HermesInternal;
      logger.warn("It's not possible to manipulate the component " + str2);
    }
  }
};
