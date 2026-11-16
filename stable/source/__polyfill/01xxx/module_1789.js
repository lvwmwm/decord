// Module ID: 1789
// Function ID: 1790
// Dependencies: [41, 42, 1662, 1660, 1755]

// Module 1789
import _createClassDefault from "_createClass" /* 42 */;
import cssKeyframesRegistry2 from "cssKeyframesRegistry" /* 1660 */;
import _mod1662 from "module_1662" /* 1662 */;
import _mod1755 from "module_1755" /* 1755 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let set;

class CSSAnimationsManager {
  constructor(shadowNodeWrapper, viewTag, compoundComponentName) {
    _classCallCheck(this, CSSAnimationsManager);
    this.attachedAnimations = [];
    this.appliedEventMask = 0;
    this.shadowNodeWrapper = shadowNodeWrapper;
    this.viewTag = viewTag;
    this.compoundComponentName = compoundComponentName;
  }
}
const entry = {
  key: "hasAttachedAnimations",
  value: function hasAttachedAnimations() {
    return this.attachedAnimations.length > 0;
  }
};
let items = [
  entry,
  {
    key: "update",
    value: function update(arg0) {
      let num = arg1;
      if (arg1 === undefined) {
        num = 0;
      }
      const self = this;
      const tmp = arg0;
      if (tmp) {
        const processAnimationsResult = self.processAnimations(arg0);
        const result = self.registerKeyframesUsage(processAnimationsResult);
        const animationUpdates = self.getAnimationUpdates(processAnimationsResult);
        if (animationUpdates) {
          if (animationUpdates.animationNames) {
            if (0 === animationUpdates.animationNames.length) {
              self.detach();
            }
          }
          self.attachedAnimations = processAnimationsResult;
          self.apply(animationUpdates, num);
        } else if (num !== self.appliedEventMask) {
          self.apply({}, num);
        }
      } else {
        self.detach();
      }
    }
  },
  {
    key: "unmountCleanup",
    value: function unmountCleanup() {
      const result = this.unregisterKeyframesUsage();
    }
  },
  {
    key: "apply",
    value: function apply(arg0, appliedEventMask) {
      let compoundComponentName;
      let shadowNodeWrapper;
      this.appliedEventMask = appliedEventMask;
      const obj = { eventMask: appliedEventMask };
      const applyCSSAnimations = _mod1662.applyCSSAnimations;
      ({ shadowNodeWrapper, compoundComponentName } = this);
      _mod1662;
      const merged = Object.assign(arg0);
      applyCSSAnimations(shadowNodeWrapper, compoundComponentName, obj);
    }
  },
  {
    key: "detach",
    value: function detach() {
      const self = this;
      if (this.hasAttachedAnimations()) {
        const obj = _mod1662;
        const result = obj.unregisterCSSAnimations(self.viewTag);
        const result1 = self.unregisterKeyframesUsage();
        self.attachedAnimations = [];
        self.appliedEventMask = 0;
      }
    }
  },
  {
    key: "registerKeyframesUsage",
    value: function registerKeyframesUsage(processAnimationsResult) {
      const self = this;
      set = new Set();
      const item = processAnimationsResult.forEach((keyframesRule) => {
        keyframesRule = keyframesRule.keyframesRule;
        const cssKeyframesRegistry = cssKeyframesRegistry2.cssKeyframesRegistry;
        cssKeyframesRegistry.add(keyframesRule, self.viewTag, self.compoundComponentName);
        set.add(keyframesRule.name);
      });
      const attachedAnimations = this.attachedAnimations;
      const item1 = attachedAnimations.forEach((keyframesRule) => {
        const name = keyframesRule.keyframesRule.name;
        if (!set.has(name)) {
          const cssKeyframesRegistry = cssKeyframesRegistry2.cssKeyframesRegistry;
          cssKeyframesRegistry.remove(name, self.viewTag, self.compoundComponentName);
        }
      });
    }
  },
  {
    key: "unregisterKeyframesUsage",
    value: function unregisterKeyframesUsage() {
      const self = this;
      const attachedAnimations = this.attachedAnimations;
      const item = attachedAnimations.forEach((keyframesRule) => {
        const name = keyframesRule.keyframesRule.name;
        const cssKeyframesRegistry = cssKeyframesRegistry2.cssKeyframesRegistry;
        cssKeyframesRegistry.remove(name, self.viewTag, self.compoundComponentName);
      });
    }
  },
  {
    key: "processAnimations",
    value: function processAnimations(arg0) {
      let obj = _mod1755;
      const singleCSSAnimationProperties = obj.createSingleCSSAnimationProperties(arg0);
      return singleCSSAnimationProperties.map(function(animationName) {
        let tmpResult;
        animationName = animationName.animationName;
        let tmp3 = animationName;
        if (!(animationName instanceof cssKeyframesRegistry2.CSSKeyframesRuleImpl)) {
          const _JSON = JSON;
          const json = JSON.stringify(animationName);
          const cssKeyframesRegistry = tmp(tmp2[3]).cssKeyframesRegistry;
          let cSSKeyframesRuleImpl = cssKeyframesRegistry.get(json);
          if (cSSKeyframesRuleImpl == null) {
            const self = this;
            const self2 = this;
            cSSKeyframesRuleImpl = new tmp(tmp2[3]).CSSKeyframesRuleImpl(animationName, json);
          }
          tmp3 = cSSKeyframesRuleImpl;
        }
        const obj = { normalizedSettings: tmpResult.normalizeSingleCSSAnimationSettings(animationName), keyframesRule: tmp3 };
        tmpResult = _mod1755;
        return obj;
      });
    }
  },
  {
    key: "buildAnimationsMap",
    value: function buildAnimationsMap(attachedAnimations) {
      return attachedAnimations.reduceRight((acc, keyframesRule) => {
        const name = keyframesRule.keyframesRule.name;
        if (acc[name]) {
          const arr2 = acc[name];
          arr2.push(keyframesRule);
        } else {
          const items = [keyframesRule];
          acc[name] = items;
        }
        return acc;
      }, {});
    }
  },
  {
    key: "getAnimationUpdates",
    value: function getAnimationUpdates(processAnimationsResult) {
      const self = this;
      const newAnimationSettings = {};
      const obj2 = {};
      let c3 = this.attachedAnimations.length !== processAnimationsResult.length;
      let c4 = false;
      let c5 = false;
      let closure_0 = this.buildAnimationsMap(this.attachedAnimations);
      const item = processAnimationsResult.forEach((item, index) => {
        let keyframesRule;
        let normalizedSettings;
        let obj;
        ({ keyframesRule, normalizedSettings } = item);
        let arr2;
        if (closure_0[keyframesRule.name] != null) {
          arr2 = arr.pop();
        }
        if (arr2) {
          const tmp3 = c3;
          if (!tmp3) {
            c3 = self.attachedAnimations[index].keyframesRule.name !== keyframesRule.name;
          }
          obj = _mod1755;
          const animationSettingsUpdates = obj.getAnimationSettingsUpdates(arr2.normalizedSettings, normalizedSettings);
          const _Object = Object;
          if (Object.keys(animationSettingsUpdates).length > 0) {
            c5 = true;
            obj2[index] = animationSettingsUpdates;
          }
        } else {
          c4 = true;
          c3 = true;
          obj[index] = normalizedSettings;
        }
      });
      const obj3 = {};
      const tmp2 = c3;
      if (tmp2) {
        obj3.animationNames = processAnimationsResult.map((keyframesRule) => keyframesRule.keyframesRule.name);
      }
      let tmp3 = c4;
      if (tmp3) {
        obj3.newAnimationSettings = newAnimationSettings;
      }
      const tmp4 = c5;
      if (tmp4) {
        obj3.settingsUpdates = obj2;
      }
      const tmp5 = c4;
      if (!tmp5) {
        let tmp8;
        const tmp6 = c5;
        if (!tmp6) {
          tmp8 = null;
        }
        return tmp8;
      }
      tmp8 = obj3;
    }
  }
];

export default _createClassDefault(CSSAnimationsManager, items);
