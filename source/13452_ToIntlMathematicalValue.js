// Module ID: 13452
// Function ID: 13453
// Name: ToIntlMathematicalValue
// Dependencies: [1281, 13394, 13393]
// Exports: ToIntlMathematicalValue

// Module 13452 (ToIntlMathematicalValue)
import e from "e";
import digitsToString from "digitsToString";


export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = require(13393) /* __exportStarResult32 */.ToPrimitive(arg0, "number");
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
