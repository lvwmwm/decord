// Module ID: 1592
// Function ID: 17763
// Name: _makeShareableClone
// Dependencies: [57, 1593, 1594, 1586, 1595, 1596]
// Exports: _updatePropsJS

// Module 1592 (_makeShareableClone)
import _slicedToArray from "_slicedToArray";

const require = arg1;
global._makeShareableClone = () => {
  const reanimatedError = new require(1593) /* processStack */.ReanimatedError("`_makeShareableClone` should never be called from React runtime.");
  throw reanimatedError;
};
global._scheduleHostFunctionOnJS = () => {
  const reanimatedError = new require(1593) /* processStack */.ReanimatedError("`_scheduleOnJS` should never be called from React runtime.");
  throw reanimatedError;
};
global._scheduleOnRuntime = () => {
  const reanimatedError = new require(1593) /* processStack */.ReanimatedError("`_scheduleOnRuntime` should never be called from React runtime.");
  throw reanimatedError;
};
function setNativeProps(setNativeProps, obj) {
  if (arg2) {
    obj = {};
    for (const key10008 in arg1) {
      let tmp6 = key10008;
      let tmp7 = require;
      let tmp8 = dependencyMap;
      if (!require(1595).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST[key10008]) {
        continue;
      } else {
        obj[key10008] = arg1[key10008];
        continue;
      }
      continue;
    }
    if (null != setNativeProps.setNativeProps) {
      setNativeProps.setNativeProps(obj);
    }
  }
  const merged = Object.assign({}, setNativeProps.previousStyle ? setNativeProps.previousStyle : {}, obj);
  setNativeProps.previousStyle = merged;
  if (null != setNativeProps.setNativeProps) {
    obj = { style: merged };
    setNativeProps.setNativeProps(obj);
  }
}
function updatePropsDOM(animatableRef, first, closure_1) {
  const merged = Object.assign({}, animatableRef.previousStyle ? animatableRef.previousStyle : {}, first);
  animatableRef.previousStyle = merged;
  let obj = require(1594);
  const reactDOMStyle = obj.createReactDOMStyle(merged);
  let isArray = Array.isArray(reactDOMStyle.transform);
  if (isArray) {
    isArray = undefined !== require(1594).createTransformValue;
  }
  if (isArray) {
    reactDOMStyle.transform = require(1594).createTransformValue(reactDOMStyle.transform);
    const obj2 = require(1594);
  }
  let tmp8 = undefined !== require(1594).createTextShadowValue;
  if (tmp8) {
    tmp8 = reactDOMStyle.textShadowColor || reactDOMStyle.textShadowRadius || reactDOMStyle.textShadowOffset;
    const tmp9 = reactDOMStyle.textShadowColor || reactDOMStyle.textShadowRadius || reactDOMStyle.textShadowOffset;
  }
  if (tmp8) {
    obj = {};
    ({ textShadowColor: obj4.textShadowColor, textShadowOffset: obj4.textShadowOffset, textShadowRadius: obj4.textShadowRadius } = reactDOMStyle);
    reactDOMStyle.textShadow = require(1594).createTextShadowValue(obj);
    const obj3 = require(1594);
  }
  for (const key10055 in reactDOMStyle) {
    let tmp13 = key10055;
    if (arg2) {
      if ("INPUT" === arg0.nodeName) {
        if ("text" === key10055) {
          arg0.value = reactDOMStyle[key10055];
          continue;
        }
      }
      let attr = arg0.setAttribute(key10055, reactDOMStyle[key10055]);
      continue;
    } else {
      arg0.style[key10055] = reactDOMStyle[key10055];
      continue;
    }
    continue;
  }
}

export const createJSReanimatedModule = require("module_1596").createJSReanimatedModule;
export const _updatePropsJS = function _updatePropsJS(closure_0, closure_02, closure_1) {
  const _require = closure_0;
  if (closure_02) {
    let animatableRef = closure_02;
    if (closure_02.getAnimatableRef) {
      animatableRef = closure_02.getAnimatableRef();
    }
    const _Object = Object;
    const keys = Object.keys(closure_0);
    const items = [{}, {}];
    first = first(keys.reduce((arg0, arg1) => {
      let num = 0;
      if ("function" === typeof table[arg1]) {
        num = 1;
      }
      arg0[num][arg1] = table[arg1];
      return arg0;
    }, items), 1)[0];
    if ("function" === typeof animatableRef.setNativeProps) {
      setNativeProps(animatableRef, first, closure_1);
    } else {
      if (undefined !== _require(animatableRef[2]).createReactDOMStyle) {
        if (undefined !== animatableRef.style) {
          updatePropsDOM(animatableRef, first, closure_1);
        }
      }
      const _Object2 = Object;
      if (Object.keys(animatableRef.props).length > 0) {
        const _Object3 = Object;
        const keys1 = Object.keys(animatableRef.props);
        const item = keys1.forEach((str) => {
          if (first[str]) {
            const _touchableNode = animatableRef._touchableNode;
            const attr = _touchableNode.setAttribute(str.replace(/[A-Z]/g, (str) => "-" + str.toLowerCase()), first[str]);
          }
        });
      } else {
        let str3 = "";
        if ("className" in animatableRef) {
          let className;
          if (null != animatableRef) {
            className = animatableRef.className;
          }
          str3 = className;
        }
        const logger = _require(animatableRef[3]).logger;
        const _HermesInternal = HermesInternal;
        logger.warn("It's not possible to manipulate the component " + str3);
      }
    }
  }
};
