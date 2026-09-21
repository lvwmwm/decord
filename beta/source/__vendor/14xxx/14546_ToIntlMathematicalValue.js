// Module ID: 14546
// Function ID: 14547
// Name: ToIntlMathematicalValue
// Dependencies: [1165, 14488, 14487]
// Exports: ToIntlMathematicalValue

// Module 14546 (ToIntlMathematicalValue)
import _mod14487 from "module_14487" /* 14487 */;
import digitsToString2 from "digitsToString" /* 14488 */;
import e from "e" /* 1165 */;

const digitsToString = e.__importDefault(digitsToString2);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod14487.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const _default = new digitsToString.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const _default1 = new digitsToString.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const _default2 = new digitsToString.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const _default3 = new digitsToString.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const _default4 = new digitsToString.default(0);
    return _default4;
  } else {
    try {
      const _default5 = new digitsToString.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const _default6 = new digitsToString.default(NaN);
      return _default6;
    }
  }
};
