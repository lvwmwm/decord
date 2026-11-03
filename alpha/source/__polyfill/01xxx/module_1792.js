// Module ID: 1792
// Function ID: 1793
// Dependencies: [41, 42, 93, 95, 98, 1656, 1784]

// Module 1792
import cssCallbacksRegistry2 from "cssCallbacksRegistry" /* 1656 */;
import CSSCallbackStore from "CSSCallbackStore" /* 1784 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class AnimationCallbacks {
  constructor(onMaskChange) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimationCallbacks);
    const items = [Object.values(cssCallbacksRegistry2.ANIMATION_CALLBACK_PROP_BY_EVENT_TYPE)];
    const obj = _getPrototypeOf(AnimationCallbacks);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.onMaskChange = onMaskChange;
    tmp3Result.eventMask = 0;
    return tmp3Result;
  }
}
_inherits(AnimationCallbacks, CSSCallbackStore.CSSCallbackStore);
const entry = {
  key: "getMask",
  value: function getMask() {
    return this.eventMask;
  }
};
let items = [
  entry,
  {
    key: "handleEvent",
    value: function handleEvent(animationName) {
      const obj = { animationName: animationName.name, elapsedTime: animationName.elapsedTime };
      this.invoke(cssCallbacksRegistry2.ANIMATION_CALLBACK_PROP_BY_EVENT_TYPE[animationName.type], obj);
    }
  },
  {
    key: "onPresenceChanged",
    value: function onPresenceChanged(arg0) {
      const obj = cssCallbacksRegistry2;
      this.eventMask = obj.getAnimationEventMaskFromProps(arg0);
      this.onMaskChange();
    }
  }
];
let closure_6 = _createClass(AnimationCallbacks, items);
class TransitionCallbacks {
  constructor(onMaskChange) {
    let constructResult;
    const self = this;
    _classCallCheck(this, TransitionCallbacks);
    const items = [Object.values(cssCallbacksRegistry2.TRANSITION_CALLBACK_PROP_BY_EVENT_TYPE)];
    const obj = _getPrototypeOf(TransitionCallbacks);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.onMaskChange = onMaskChange;
    tmp3Result.eventMask = 0;
    return tmp3Result;
  }
}
_inherits(TransitionCallbacks, CSSCallbackStore.CSSCallbackStore);
const entry1 = {
  key: "getMask",
  value: function getMask() {
    return this.eventMask;
  }
};
const items1 = [
  entry1,
  {
    key: "handleEvent",
    value: function handleEvent(name) {
      const obj = { propertyName: name.name, elapsedTime: name.elapsedTime };
      this.invoke(cssCallbacksRegistry2.TRANSITION_CALLBACK_PROP_BY_EVENT_TYPE[name.type], obj);
    }
  },
  {
    key: "onPresenceChanged",
    value: function onPresenceChanged(arg0) {
      const obj = cssCallbacksRegistry2;
      this.eventMask = obj.getTransitionEventMaskFromProps(arg0);
      this.onMaskChange();
    }
  }
];
let closure_7 = _createClass(TransitionCallbacks, items1);
class CSSCallbacksManager {
  constructor(viewTag) {
    const self = this;
    _classCallCheck(this, CSSCallbacksManager);
    this.viewTag = viewTag;
    function updateRegistration() {
      return self.updateRegistration();
    }
    this.animationCallbacks = new closure_6(updateRegistration);
    new closure_6(updateRegistration);
    this.transitionCallbacks = new closure_7(updateRegistration);
    new closure_7(updateRegistration);
  }
}
const entry2 = {
  key: "getAnimationEventMask",
  value: function getAnimationEventMask() {
    const animationCallbacks = this.animationCallbacks;
    return animationCallbacks.getMask();
  }
};
const items2 = [
  entry2,
  {
    key: "getTransitionEventMask",
    value: function getTransitionEventMask() {
      const transitionCallbacks = this.transitionCallbacks;
      return transitionCallbacks.getMask();
    }
  },
  {
    key: "syncAnimationCallbacks",
    value: function syncAnimationCallbacks(arg0) {
      let obj = arg0;
      const sync = this.animationCallbacks.sync;
      if (arg0 == null) {
        obj = {};
      }
      sync(obj);
    }
  },
  {
    key: "syncTransitionCallbacks",
    value: function syncTransitionCallbacks(arg0) {
      let obj = arg0;
      const sync = this.transitionCallbacks.sync;
      if (arg0 == null) {
        obj = {};
      }
      sync(obj);
    }
  },
  {
    key: "detach",
    value: function detach() {
      const animationCallbacks = this.animationCallbacks;
      animationCallbacks.detach();
      const transitionCallbacks = this.transitionCallbacks;
      transitionCallbacks.detach();
    }
  },
  {
    key: "retire",
    value: function retire() {
      const self = this;
      if (-1 !== this.viewTag) {
        const cssCallbacksRegistry = cssCallbacksRegistry2.cssCallbacksRegistry;
        cssCallbacksRegistry.retire(self.viewTag, self);
      }
    }
  },
  {
    key: "handleCSSEvent",
    value: function handleCSSEvent(nextResult) {
      const self = this;
      if (nextResult.type in cssCallbacksRegistry2.ANIMATION_CALLBACK_PROP_BY_EVENT_TYPE) {
        const animationCallbacks = self.animationCallbacks;
        animationCallbacks.handleEvent(nextResult);
      } else if (nextResult.type in cssCallbacksRegistry2.TRANSITION_CALLBACK_PROP_BY_EVENT_TYPE) {
        const transitionCallbacks = self.transitionCallbacks;
        transitionCallbacks.handleEvent(nextResult);
      }
    }
  },
  {
    key: "updateRegistration",
    value: function updateRegistration() {
      const self = this;
      if (-1 !== this.viewTag) {
        const animationEventMask = self.getAnimationEventMask();
        const tmp2 = animationEventMask | self.getTransitionEventMask();
        const cssCallbacksRegistry = cssCallbacksRegistry2.cssCallbacksRegistry;
        if (tmp2) {
          cssCallbacksRegistry.register(self.viewTag, self);
        } else {
          cssCallbacksRegistry.unregister(self.viewTag, self);
        }
      }
    }
  }
];

export default _createClass(CSSCallbacksManager, items2);
