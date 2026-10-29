// Module ID: 16009
// Function ID: 16010
// Name: ToIntlMathematicalValue
// Dependencies: [1171, 15951, 15950]
// Exports: ToIntlMathematicalValue

// Module 16009 (ToIntlMathematicalValue)
import _mod15950 from "module_15950" /* 15950 */;
import _mod15951 from "module_15951" /* 15951 */;
import module_1171 from "module_1171" /* 1171 */;

const module_15951 = module_1171.__importDefault(_mod15951);

export function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod15950.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_15951.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_15951.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_15951.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_15951.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_15951.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_15951.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_15951.default(NaN);
      return _default6;
    }
  }
}
