// Module ID: 15207
// Function ID: 15208
// Name: ToIntlMathematicalValue
// Dependencies: [1174, 15149, 15148]
// Exports: ToIntlMathematicalValue

// Module 15207 (ToIntlMathematicalValue)
import _mod15148 from "module_15148" /* 15148 */;
import _mod15149 from "module_15149" /* 15149 */;
import module_1174 from "module_1174" /* 1174 */;

const module_15149 = module_1174.__importDefault(_mod15149);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod15148.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_15149.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_15149.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_15149.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_15149.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_15149.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_15149.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_15149.default(NaN);
      return _default6;
    }
  }
};
