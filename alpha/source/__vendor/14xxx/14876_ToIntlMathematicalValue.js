// Module ID: 14876
// Function ID: 14877
// Name: ToIntlMathematicalValue
// Dependencies: [1172, 14818, 14817]
// Exports: ToIntlMathematicalValue

// Module 14876 (ToIntlMathematicalValue)
import _mod14817 from "module_14817" /* 14817 */;
import _mod14818 from "module_14818" /* 14818 */;
import module_1172 from "module_1172" /* 1172 */;

const module_14818 = module_1172.__importDefault(_mod14818);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod14817.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_14818.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_14818.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_14818.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_14818.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_14818.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_14818.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_14818.default(NaN);
      return _default6;
    }
  }
};
