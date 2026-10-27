// Module ID: 15547
// Function ID: 15548
// Name: ToIntlMathematicalValue
// Dependencies: [1171, 15489, 15488]
// Exports: ToIntlMathematicalValue

// Module 15547 (ToIntlMathematicalValue)
import _mod15488 from "module_15488" /* 15488 */;
import _mod15489 from "module_15489" /* 15489 */;
import module_1171 from "module_1171" /* 1171 */;

const module_15489 = module_1171.__importDefault(_mod15489);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod15488.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_15489.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_15489.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_15489.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_15489.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_15489.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_15489.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_15489.default(NaN);
      return _default6;
    }
  }
};
