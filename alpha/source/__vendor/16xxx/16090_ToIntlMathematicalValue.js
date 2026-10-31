// Module ID: 16090
// Function ID: 16091
// Name: ToIntlMathematicalValue
// Dependencies: [1159, 16032, 16031]
// Exports: ToIntlMathematicalValue

// Module 16090 (ToIntlMathematicalValue)
import _mod16031 from "module_16031" /* 16031 */;
import _mod16032 from "module_16032" /* 16032 */;
import module_1159 from "module_1159" /* 1159 */;

const module_16032 = module_1159.__importDefault(_mod16032);

export function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod16031.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_16032.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_16032.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_16032.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_16032.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_16032.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_16032.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_16032.default(NaN);
      return _default6;
    }
  }
}
