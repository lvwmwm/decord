// Module ID: 15698
// Function ID: 15699
// Name: ToIntlMathematicalValue
// Dependencies: [1158, 15640, 15639]
// Exports: ToIntlMathematicalValue

// Module 15698 (ToIntlMathematicalValue)
import ToString from "ToString" /* 15639 */;
import _mod15640 from "module_15640" /* 15640 */;
import module_1158 from "module_1158" /* 1158 */;

const module_15640 = module_1158.__importDefault(_mod15640);

export function ToIntlMathematicalValue(isFinite) {
  const ToPrimitiveResult = ToString.ToPrimitive(isFinite, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_15640.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_15640.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_15640.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_15640.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_15640.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_15640.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_15640.default(NaN);
      return _default6;
    }
  }
}
