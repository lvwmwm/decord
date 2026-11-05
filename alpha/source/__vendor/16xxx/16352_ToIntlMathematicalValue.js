// Module ID: 16352
// Function ID: 16353
// Name: ToIntlMathematicalValue
// Dependencies: [1159, 16294, 16293]
// Exports: ToIntlMathematicalValue

// Module 16352 (ToIntlMathematicalValue)
import _mod16293 from "module_16293" /* 16293 */;
import _mod16294 from "module_16294" /* 16294 */;
import module_1159 from "module_1159" /* 1159 */;

const module_16294 = module_1159.__importDefault(_mod16294);

export function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod16293.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_16294.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_16294.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_16294.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_16294.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_16294.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_16294.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_16294.default(NaN);
      return _default6;
    }
  }
}
