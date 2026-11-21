// Module ID: 15504
// Function ID: 15505
// Name: ToIntlMathematicalValue
// Dependencies: [1158, 15446, 15445]
// Exports: ToIntlMathematicalValue

// Module 15504 (ToIntlMathematicalValue)
import ToString from "ToString" /* 15445 */;
import _mod15446 from "module_15446" /* 15446 */;
import module_1158 from "module_1158" /* 1158 */;

const module_15446 = module_1158.__importDefault(_mod15446);

export function ToIntlMathematicalValue(isFinite) {
  const ToPrimitiveResult = ToString.ToPrimitive(isFinite, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_15446.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_15446.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_15446.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_15446.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_15446.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_15446.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_15446.default(NaN);
      return _default6;
    }
  }
}
