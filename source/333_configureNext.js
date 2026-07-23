// Module ID: 333
// Function ID: 4949
// Name: configureNext
// Dependencies: [79, 262, 49, 46]

// Module 333 (configureNext)
const require = arg1;
function configureNext(duration) {
  let fn = arg2;
  const _global = arg1;
  if (!importDefault(262).isDisableAnimations) {
    if (closure_4) {
      const _require = false;
      function onAnimationComplete() {
        if (!c1) {
          c1 = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_2);
          if (null != callback) {
            callback();
          }
        }
      }
      duration = duration.duration;
      let num = 0;
      if (null != duration) {
        num = duration;
      }
      importDefault = setTimeout(onAnimationComplete, num + 17);
      const fabricUIManager = _require(49).getFabricUIManager();
      if (null != fabricUIManager) {
        if (fabricUIManager.configureNextLayoutAnimation) {
          let tmp14 = null == _global;
          let obj2 = _global;
          if (!tmp14) {
            const nativeFabricUIManager = _global.nativeFabricUIManager;
            tmp14 = null == nativeFabricUIManager;
            obj2 = nativeFabricUIManager;
          }
          if (!tmp14) {
            if (null == fn) {
              fn = () => {

              };
            }
            const result = obj2.configureNextLayoutAnimation(duration, onAnimationComplete, fn);
          }
        }
      }
      let configureNextLayoutAnimation = null != _require(46).default;
      if (configureNextLayoutAnimation) {
        configureNextLayoutAnimation = _require(46).default.configureNextLayoutAnimation;
      }
      if (configureNextLayoutAnimation) {
        let fn2 = onAnimationComplete;
        if (null == onAnimationComplete) {
          fn2 = () => {

          };
        }
        let fn3 = fn;
        if (null == fn) {
          fn3 = () => {

          };
        }
        const result1 = _require(46).default.configureNextLayoutAnimation(duration, fn2, fn3);
        const _default = _require(46).default;
      }
      const obj = _require(49);
    }
  }
}
function createLayoutAnimation(duration, easeInEaseOut, opacity) {
  obj = { duration, create: obj, update: obj, delete: obj1 };
  obj = { type: easeInEaseOut, property: opacity };
  obj = { type: easeInEaseOut };
  return obj;
}
let closure_4 = require("javaScriptFlagGetter").isLayoutAnimationEnabled();
let obj = { easeInEaseOut: require("module_300"), linear: require("module_500"), spring: { duration: 700, create: { type: "linear", property: "opacity" }, update: { type: "spring", springDamping: 0.4 }, delete: { type: "linear", property: "opacity" } } };
obj = {
  configureNext,
  create: createLayoutAnimation,
  Types: Object.freeze({ spring: "spring", linear: "linear", easeInEaseOut: "easeInEaseOut", easeIn: "easeIn", easeOut: "easeOut", keyboard: "keyboard" }),
  Properties: Object.freeze({ opacity: "opacity", scaleX: "scaleX", scaleY: "scaleY", scaleXY: "scaleXY" }),
  checkConfig() {
    console.error("LayoutAnimation.checkConfig(...) has been disabled.");
  },
  Presets: obj,
  easeInEaseOut: configureNext.bind(null, obj.easeInEaseOut),
  linear: configureNext.bind(null, obj.linear),
  spring: configureNext.bind(null, obj.spring),
  setEnabled: function setLayoutAnimationEnabled(arg0) {

  }
};

export default obj;
