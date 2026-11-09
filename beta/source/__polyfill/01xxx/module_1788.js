// Module ID: 1788
// Function ID: 1789
// Dependencies: [32, 41, 42, 1665, 1789, 1790, 1791, 1758, 1662, 1792]

// Module 1788
import _createClassDefault from "_createClass" /* 42 */;
import _mod1662 from "module_1662" /* 1662 */;
import _mod1665 from "module_1665" /* 1665 */;
import _mod1758 from "module_1758" /* 1758 */;
import _modDef1789 from "module_1789" /* 1789 */;
import _modDef1790 from "module_1790" /* 1790 */;
import _modDef1791 from "module_1791" /* 1791 */;
import _modDef1792 from "module_1792" /* 1792 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class CSSManager {
  constructor(_getViewInfoResult, name) {
    let reactViewName;
    let shadowNodeWrapper;
    let viewTag;
    ({ shadowNodeWrapper, viewTag, reactViewName } = _getViewInfoResult);
    if (reactViewName === undefined) {
      reactViewName = "RCTView";
    }
    let str = name;
    if (name === undefined) {
      str = "";
    }
    _classCallCheck(this, CSSManager);
    this.cssCallbacksManager = null;
    this.hadTransitionLastUpdate = false;
    this.viewTag = viewTag;
    const obj = _mod1665;
    const compoundComponentName = obj.getCompoundComponentName(reactViewName, str);
    const obj2 = _mod1665;
    this.propsBuilder = obj2.getPropsBuilder(compoundComponentName);
    this.cssAnimationsManager = new _modDef1789(shadowNodeWrapper, viewTag, compoundComponentName);
    new _modDef1789(shadowNodeWrapper, viewTag, compoundComponentName);
    this.cssTransitionsManager = new _modDef1790(shadowNodeWrapper, viewTag);
    new _modDef1790(shadowNodeWrapper, viewTag);
    this.cssPseudoStylesManager = new _modDef1791(shadowNodeWrapper, viewTag, this.propsBuilder, compoundComponentName);
    new _modDef1791(shadowNodeWrapper, viewTag, this.propsBuilder, compoundComponentName);
  }
}
const entry = {
  key: "update",
  value: function update(iter) {
    let buildResult;
    let tmp4;
    let tmp5;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const self = this;
    const obj2 = _mod1758;
    const tmp3 = _slicedToArray(obj2.filterCSSAndStyleProperties(iter), 4);
    [tmp4, tmp5] = tmp3;
    let tmp8 = null !== tmp4;
    const cssAnimationsManager = this.cssAnimationsManager;
    const tmp6 = tmp3[2];
    const tmp7 = tmp3[3];
    const result = cssAnimationsManager.hasAttachedAnimations();
    const obj3 = _mod1758;
    const tmp11 = _slicedToArray(obj3.splitCSSCallbacks(obj), 2);
    this.syncCallbacks(tmp11[0], tmp11[1]);
    if (!tmp8) {
      if (null === tmp5) {
        const cssTransitionsManager = self.cssTransitionsManager;
        let tmp17 = buildResult;
        if (tmp17) {
          if (!tmp8) {
            tmp8 = result;
          }
          if (!tmp8) {
            let IS_ANDROID = tmp(1665).IS_ANDROID;
            if (IS_ANDROID) {
              IS_ANDROID = null !== tmp5 || tmp15;
            }
            tmp8 = IS_ANDROID;
          }
          tmp17 = tmp8;
        }
        if (tmp17) {
          const tmpResult = _mod1662;
          tmpResult.setViewStyle(self.viewTag, buildResult);
        }
        const cssAnimationsManager2 = self.cssAnimationsManager;
        cssAnimationsManager2.update(tmp4, tmp13);
        const cssPseudoStylesManager = self.cssPseudoStylesManager;
        cssPseudoStylesManager.update(tmp6, tmp5);
        self.hadTransitionLastUpdate = null !== tmp5;
      }
    }
    const propsBuilder = self.propsBuilder;
    buildResult = propsBuilder.build(tmp7);
  }
};
const items = [
  entry,
  {
    key: "unmountCleanup",
    value: function unmountCleanup() {
      const self = this;
      if (this.cssCallbacksManager != null) {
        this.cssCallbacksManager.retire();
      }
      const cssAnimationsManager = self.cssAnimationsManager;
      cssAnimationsManager.unmountCleanup();
      const cssTransitionsManager = self.cssTransitionsManager;
      cssTransitionsManager.unmountCleanup();
      const cssPseudoStylesManager = self.cssPseudoStylesManager;
      cssPseudoStylesManager.unmountCleanup();
    }
  },
  {
    key: "syncCallbacks",
    value: function syncCallbacks(arg0, arg1) {
      const self = this;
      if (!this.cssCallbacksManager) {
        if (!arg0) {
          if (!arg1) {
            return { animationEventMask: 0, transitionEventMask: 0 };
          }
        }
        const self2 = this;
        const self3 = this;
        self.cssCallbacksManager = new _modDef1792(self.viewTag);
        const tmp3 = new _modDef1792(self.viewTag);
      }
      const cssCallbacksManager = self.cssCallbacksManager;
      const result = cssCallbacksManager.syncAnimationCallbacks(arg0);
      const cssCallbacksManager2 = self.cssCallbacksManager;
      const result1 = cssCallbacksManager2.syncTransitionCallbacks(arg1);
      const obj = { animationEventMask: cssCallbacksManager3.getAnimationEventMask(), transitionEventMask: cssCallbacksManager4.getTransitionEventMask() };
      return obj;
    }
  }
];

export default _createClassDefault(CSSManager, items);
