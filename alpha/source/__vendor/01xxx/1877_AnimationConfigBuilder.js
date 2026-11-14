// Module ID: 1877
// Function ID: 1878
// Name: AnimationConfigBuilder
// Dependencies: [41, 42, 93, 95, 98, 1842, 1876]

// Module 1877 (AnimationConfigBuilder)
import _mod1842 from "module_1842" /* 1842 */;
import BaseAnimationBuilder from "BaseAnimationBuilder" /* 1876 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let value;

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
class AnimationConfigBuilder {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimationConfigBuilder);
    const obj = _getPrototypeOf(AnimationConfigBuilder);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(AnimationConfigBuilder, BaseAnimationBuilder.BaseAnimationBuilder);
const entry = {
  key: "easing",
  value: function easing(easingV) {
    this.easingV = easingV;
    return this;
  }
};
let items = [
  entry,
  {
    key: "rotate",
    value: function rotate(rotateV) {
      this.rotateV = rotateV;
      return this;
    }
  },
  {
    key: "springify",
    value: function springify(durationV) {
      const obj = { durationV, type: _mod1842.withSpring };
      return obj;
    }
  },
  {
    key: "dampingRatio",
    value: function dampingRatio(dampingRatioV) {
      this.dampingRatioV = dampingRatioV;
      return this;
    }
  },
  {
    key: "damping",
    value: function damping(dampingV) {
      this.dampingV = dampingV;
      return this;
    }
  },
  {
    key: "mass",
    value: function mass(massV) {
      this.massV = massV;
      return this;
    }
  },
  {
    key: "stiffness",
    value: function stiffness(stiffnessV) {
      this.stiffnessV = stiffnessV;
      return this;
    }
  },
  {
    key: "overshootClamping",
    value: function overshootClamping(overshootClampingV) {
      this.overshootClampingV = overshootClampingV;
      return this;
    }
  },
  {
    key: "restDisplacementThreshold",
    value: function restDisplacementThreshold(arg0) {
      return this;
    }
  },
  {
    key: "restSpeedThreshold",
    value: function restSpeedThreshold(arg0) {
      return this;
    }
  },
  {
    key: "energyThreshold",
    value: function energyThreshold(energyThresholdV) {
      this.energyThresholdV = energyThresholdV;
      return this;
    }
  },
  {
    key: "getAnimationAndConfig",
    value: function getAnimationAndConfig() {
      let dampingRatioV;
      let dampingV;
      let durationV;
      let easingV;
      let energyThresholdV;
      let massV;
      let overshootClampingV;
      let rotateV;
      let stiffnessV;
      let withTiming;
      const self = this;
      ({ easingV, durationV, rotateV } = this);
      if (this.type) {
        withTiming = self.type;
      } else {
        const tmp = require;
        withTiming = _mod1842.withTiming;
      }
      const obj = {};
      ({ dampingV, dampingRatioV, massV, stiffnessV, overshootClampingV, energyThresholdV } = self);
      if (withTiming === _mod1842.withTiming) {
        if (easingV) {
          obj.easing = easingV;
        }
      }
      const items = [{ variableName: "damping", value: dampingV }, { variableName: "dampingRatio", value: dampingRatioV }, { variableName: "mass", value: massV }, { variableName: "stiffness", value: stiffnessV }, { variableName: "overshootClamping", value: overshootClampingV }, { variableName: "energyThreshold", value: energyThresholdV }, { variableName: "duration", value: durationV }, { variableName: "rotate", value: rotateV }];
      const item = items.forEach((value) => {
        value = value.value;
        if (value) {
          obj[tmp] = value;
        }
      });
      const items1 = [withTiming, obj];
      return items1;
    }
  }
];
const entry1 = {
  key: "easing",
  value: function easing(arg0) {
    const instance = this.createInstance();
    return instance.easing(arg0);
  }
};
let items1 = [
  entry1,
  {
    key: "rotate",
    value: function rotate(arg0) {
      const instance = this.createInstance();
      return instance.rotate(arg0);
    }
  },
  {
    key: "springify",
    value: function springify(arg0) {
      const instance = this.createInstance();
      return instance.springify(arg0);
    }
  },
  {
    key: "dampingRatio",
    value: function dampingRatio(arg0) {
      const instance = this.createInstance();
      return instance.dampingRatio(arg0);
    }
  },
  {
    key: "damping",
    value: function damping(arg0) {
      const instance = this.createInstance();
      return instance.damping(arg0);
    }
  },
  {
    key: "mass",
    value: function mass(arg0) {
      const instance = this.createInstance();
      return instance.mass(arg0);
    }
  },
  {
    key: "stiffness",
    value: function stiffness(arg0) {
      const instance = this.createInstance();
      return instance.stiffness(arg0);
    }
  },
  {
    key: "overshootClamping",
    value: function overshootClamping(arg0) {
      const instance = this.createInstance();
      return instance.overshootClamping(arg0);
    }
  },
  {
    key: "restDisplacementThreshold",
    value: function restDisplacementThreshold(arg0) {
      return this.createInstance();
    }
  },
  {
    key: "restSpeedThreshold",
    value: function restSpeedThreshold(arg0) {
      return this.createInstance();
    }
  },
  {
    key: "energyThreshold",
    value: function energyThreshold(arg0) {
      const instance = this.createInstance();
      return instance.energyThreshold(arg0);
    }
  }
];
const importDefaultResultResult = _createClass(AnimationConfigBuilder, items, items1);
class ComplexAnimationBuilder {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ComplexAnimationBuilder);
    const obj = _getPrototypeOf(ComplexAnimationBuilder);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ComplexAnimationBuilder, importDefaultResultResult);
const entry2 = {
  key: "withInitialValues",
  value: function withInitialValues(initialValues) {
    this.initialValues = initialValues;
    return this;
  }
};
const items2 = [
  entry2,
  {
    key: "withTargetValues",
    value: function withTargetValues(targetValues) {
      this.targetValues = targetValues;
      return this;
    }
  }
];
const entry3 = {
  key: "withInitialValues",
  value: function withInitialValues(arg0) {
    const instance = this.createInstance();
    return instance.withInitialValues(arg0);
  }
};
const items3 = [
  entry3,
  {
    key: "withTargetValues",
    value: function withTargetValues(arg0) {
      const instance = this.createInstance();
      return instance.withTargetValues(arg0);
    }
  }
];
const AnimationConfigBuilder_export = importDefaultResultResult;
const ComplexAnimationBuilder_export = _createClass(ComplexAnimationBuilder, items2, items3);

export { AnimationConfigBuilder_export as AnimationConfigBuilder };
export { ComplexAnimationBuilder_export as ComplexAnimationBuilder };
