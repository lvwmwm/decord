// Module ID: 1666
// Function ID: 18474
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1654, 1653]

// Module 1666 (_isNativeReflectConstruct)
import BaseAnimationBuilder from "BaseAnimationBuilder";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}

export const ComplexAnimationBuilder = ((BaseAnimationBuilder) => {
  class ComplexAnimationBuilder {
    constructor() {
      self = this;
      tmp = outer1_2(this, ComplexAnimationBuilder);
      obj = outer1_5(ComplexAnimationBuilder);
      tmp2 = outer1_4;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ComplexAnimationBuilder, BaseAnimationBuilder);
  let obj = {
    key: "easing",
    value: function easing(easingV) {
      this.easingV = easingV;
      return this;
    }
  };
  let items = [obj, , , , , , , , , , , ];
  obj = {
    key: "rotate",
    value: function rotate(rotateV) {
      this.rotateV = rotateV;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "springify",
    value: function springify(durationV) {
      this.durationV = durationV;
      this.type = ComplexAnimationBuilder(outer1_1[5]).withSpring;
      return this;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "dampingRatio",
    value: function dampingRatio(dampingRatioV) {
      this.dampingRatioV = dampingRatioV;
      return this;
    }
  };
  items[4] = {
    key: "damping",
    value: function damping(dampingV) {
      this.dampingV = dampingV;
      return this;
    }
  };
  items[5] = {
    key: "mass",
    value: function mass(massV) {
      this.massV = massV;
      return this;
    }
  };
  items[6] = {
    key: "stiffness",
    value: function stiffness(stiffnessV) {
      this.stiffnessV = stiffnessV;
      return this;
    }
  };
  items[7] = {
    key: "overshootClamping",
    value: function overshootClamping(overshootClampingV) {
      this.overshootClampingV = overshootClampingV;
      return this;
    }
  };
  items[8] = {
    key: "restDisplacementThreshold",
    value: function restDisplacementThreshold(restDisplacementThresholdV) {
      this.restDisplacementThresholdV = restDisplacementThresholdV;
      return this;
    }
  };
  items[9] = {
    key: "restSpeedThreshold",
    value: function restSpeedThreshold(restSpeedThresholdV) {
      this.restSpeedThresholdV = restSpeedThresholdV;
      return this;
    }
  };
  items[10] = {
    key: "withInitialValues",
    value: function withInitialValues(initialValues) {
      this.initialValues = initialValues;
      return this;
    }
  };
  items[11] = {
    key: "getAnimationAndConfig",
    value: function getAnimationAndConfig() {
      let dampingRatioV;
      let dampingV;
      let durationV;
      let easingV;
      let massV;
      let overshootClampingV;
      let restDisplacementThresholdV;
      let restSpeedThresholdV;
      let rotateV;
      let stiffnessV;
      const self = this;
      function maybeSetConfigValue(easingV, easing) {
        if (easingV) {
          obj[easing] = easingV;
        }
      }
      ({ durationV, easingV, rotateV } = this);
      if (this.type) {
        let withTiming = self.type;
      } else {
        withTiming = ComplexAnimationBuilder(outer1_1[5]).withTiming;
      }
      const obj = {};
      ({ dampingV, dampingRatioV, massV, stiffnessV, overshootClampingV, restDisplacementThresholdV, restSpeedThresholdV } = self);
      if (withTiming === ComplexAnimationBuilder(outer1_1[5]).withTiming) {
        maybeSetConfigValue(easingV, "easing");
      }
      const items = [{ variableName: "damping", value: dampingV }, { variableName: "dampingRatio", value: dampingRatioV }, { variableName: "mass", value: massV }, { variableName: "stiffness", value: stiffnessV }, { variableName: "overshootClamping", value: overshootClampingV }, { variableName: "restDisplacementThreshold", value: restDisplacementThresholdV }, { variableName: "restSpeedThreshold", value: restSpeedThresholdV }, { variableName: "duration", value: durationV }, { variableName: "rotate", value: rotateV }];
      const item = items.forEach((value) => {
        maybeSetConfigValue(value.value, value.variableName);
      });
      const items1 = [withTiming, obj];
      return items1;
    }
  };
  let items1 = [
    {
      key: "easing",
      value: function easing(arg0) {
        const instance = this.createInstance();
        return instance.easing(arg0);
      }
    },
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
        const instance = this.createInstance();
        return instance.restDisplacementThreshold(arg0);
      }
    },
    {
      key: "restSpeedThreshold",
      value: function restSpeedThreshold(arg0) {
        const instance = this.createInstance();
        return instance.restSpeedThreshold(arg0);
      }
    },
    {
      key: "withInitialValues",
      value: function withInitialValues(arg0) {
        const instance = this.createInstance();
        return instance.withInitialValues(arg0);
      }
    }
  ];
  return callback(ComplexAnimationBuilder, items, items1);
})(require("BaseAnimationBuilder").BaseAnimationBuilder);
