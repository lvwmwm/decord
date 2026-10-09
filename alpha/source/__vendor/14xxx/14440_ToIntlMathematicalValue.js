// Module ID: 14440
// Function ID: 14441
// Name: ToIntlMathematicalValue
// Dependencies: [1172, 14382, 14381]
// Exports: ToIntlMathematicalValue

// Module 14440 (ToIntlMathematicalValue)
import _mod14381 from "module_14381" /* 14381 */;
import _mod14382 from "module_14382" /* 14382 */;
import module_1172 from "module_1172" /* 1172 */;

const module_14382 = module_1172.__importDefault(_mod14382);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod14381.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_14382.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_14382.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_14382.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_14382.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_14382.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_14382.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_14382.default(NaN);
      return _default6;
    }
  }
};
