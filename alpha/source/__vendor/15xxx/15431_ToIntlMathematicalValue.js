// Module ID: 15431
// Function ID: 15432
// Name: ToIntlMathematicalValue
// Dependencies: [1159, 15373, 15372]
// Exports: ToIntlMathematicalValue

// Module 15431 (ToIntlMathematicalValue)
import ToString from "ToString" /* 15372 */;
import _mod15373 from "module_15373" /* 15373 */;
import module_1159 from "module_1159" /* 1159 */;

const module_15373 = module_1159.__importDefault(_mod15373);

export function ToIntlMathematicalValue(isFinite) {
  const ToPrimitiveResult = ToString.ToPrimitive(isFinite, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_15373.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_15373.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_15373.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_15373.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_15373.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_15373.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_15373.default(NaN);
      return _default6;
    }
  }
}
