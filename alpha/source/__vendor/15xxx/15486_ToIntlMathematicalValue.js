// Module ID: 15486
// Function ID: 15487
// Name: ToIntlMathematicalValue
// Dependencies: [1174, 15428, 15427]
// Exports: ToIntlMathematicalValue

// Module 15486 (ToIntlMathematicalValue)
import _mod15427 from "module_15427" /* 15427 */;
import _mod15428 from "module_15428" /* 15428 */;
import module_1174 from "module_1174" /* 1174 */;

const module_15428 = module_1174.__importDefault(_mod15428);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod15427.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_15428.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_15428.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_15428.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_15428.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_15428.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_15428.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_15428.default(NaN);
      return _default6;
    }
  }
};
