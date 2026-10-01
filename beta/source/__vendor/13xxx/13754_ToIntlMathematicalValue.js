// Module ID: 13754
// Function ID: 13755
// Name: ToIntlMathematicalValue
// Dependencies: [1161, 13696, 13695]
// Exports: ToIntlMathematicalValue

// Module 13754 (ToIntlMathematicalValue)
import _mod13695 from "module_13695" /* 13695 */;
import _mod13696 from "module_13696" /* 13696 */;
import module_1161 from "module_1161" /* 1161 */;

const module_13696 = module_1161.__importDefault(_mod13696);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod13695.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_13696.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_13696.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_13696.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_13696.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_13696.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_13696.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_13696.default(NaN);
      return _default6;
    }
  }
};
