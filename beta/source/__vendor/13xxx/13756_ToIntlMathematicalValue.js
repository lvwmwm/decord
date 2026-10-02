// Module ID: 13756
// Function ID: 13757
// Name: ToIntlMathematicalValue
// Dependencies: [1173, 13698, 13697]
// Exports: ToIntlMathematicalValue

// Module 13756 (ToIntlMathematicalValue)
import _mod13697 from "module_13697" /* 13697 */;
import _mod13698 from "module_13698" /* 13698 */;
import module_1173 from "module_1173" /* 1173 */;

const module_13698 = module_1173.__importDefault(_mod13698);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod13697.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const self13 = this;
    const self14 = this;
    const _default = new module_13698.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const self11 = this;
    const self12 = this;
    const _default1 = new module_13698.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const self9 = this;
    const self10 = this;
    const _default2 = new module_13698.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const self7 = this;
    const self8 = this;
    const _default3 = new module_13698.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const self5 = this;
    const self6 = this;
    const _default4 = new module_13698.default(0);
    return _default4;
  } else {
    try {
      const self = this;
      const self2 = this;
      const _default5 = new module_13698.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const self3 = this;
      const self4 = this;
      const _default6 = new module_13698.default(NaN);
      return _default6;
    }
  }
};
