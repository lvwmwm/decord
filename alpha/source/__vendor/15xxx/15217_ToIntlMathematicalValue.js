// Module ID: 15217
// Function ID: 15218
// Name: ToIntlMathematicalValue
// Dependencies: [1174, 15159, 15158]
// Exports: ToIntlMathematicalValue

// Module 15217 (ToIntlMathematicalValue)
import _mod15158 from "module_15158" /* 15158 */;
import _mod15159 from "module_15159" /* 15159 */;
import module_1174 from "module_1174" /* 1174 */;

const module_15159 = module_1174.__importDefault(_mod15159);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod15158.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_15159.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_15159.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_15159.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_15159.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_15159.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_15159.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_15159.default(NaN);
      return _default6;
    }
  }
};
