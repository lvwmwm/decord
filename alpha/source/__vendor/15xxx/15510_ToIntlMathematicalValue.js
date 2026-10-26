// Module ID: 15510
// Function ID: 15511
// Name: ToIntlMathematicalValue
// Dependencies: [1174, 15452, 15451]
// Exports: ToIntlMathematicalValue

// Module 15510 (ToIntlMathematicalValue)
import _mod15451 from "module_15451" /* 15451 */;
import _mod15452 from "module_15452" /* 15452 */;
import module_1174 from "module_1174" /* 1174 */;

const module_15452 = module_1174.__importDefault(_mod15452);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod15451.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_15452.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_15452.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_15452.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_15452.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_15452.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_15452.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_15452.default(NaN);
      return _default6;
    }
  }
};
