// Module ID: 333
// Function ID: 4949
// Name: configureNext
// Dependencies: []

// Module 333 (configureNext)
function configureNext(duration) {
  let fn = arg2;
  const global = arg1;
  if (!importDefault(dependencyMap[1]).isDisableAnimations) {
    if (closure_4) {
      const callback = false;
      function onAnimationComplete() {
        if (!closure_1) {
          closure_1 = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_2);
          if (null != arg1) {
            arg1();
          }
        }
      }
      duration = duration.duration;
      let num = 0;
      if (null != duration) {
        num = duration;
      }
      const importDefault = setTimeout(onAnimationComplete, num + 17);
      const fabricUIManager = callback(dependencyMap[2]).getFabricUIManager();
      if (null != fabricUIManager) {
        if (fabricUIManager.configureNextLayoutAnimation) {
          let tmp14 = null == global;
          let obj2 = global;
          if (!tmp14) {
            const nativeFabricUIManager = global.nativeFabricUIManager;
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
      let configureNextLayoutAnimation = null != callback(dependencyMap[3]).default;
      if (configureNextLayoutAnimation) {
        configureNextLayoutAnimation = callback(dependencyMap[3]).default.configureNextLayoutAnimation;
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
        const result1 = callback(dependencyMap[3]).default.configureNextLayoutAnimation(duration, fn2, fn3);
        const _default = callback(dependencyMap[3]).default;
      }
      const obj = callback(dependencyMap[2]);
    }
  }
}
function createLayoutAnimation(duration, easeInEaseOut, opacity) {
  let obj = { duration, create: obj, update: obj, delete: obj1 };
  obj = { type: easeInEaseOut, property: opacity };
  obj = { type: easeInEaseOut };
  return obj;
}
let closure_4 = importAll(dependencyMap[0]).isLayoutAnimationEnabled();
let obj = { easeInEaseOut: require("module_300"), linear: require("module_500"), spring: { duration: 700, create: { animated: true, variant: true }, update: { useNativeDriver: true, interactionStart: true }, delete: { animated: true, variant: true } } };
obj = {
  configureNext,
  create: createLayoutAnimation,
  Types: Object.freeze({ 0: "go", 9223372036854775807: "next", 9223372036854775807: "previous", 0: "search", 0: "send", -9223372036854775808: "postal-address-region" }),
  Properties: Object.freeze({}),
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
