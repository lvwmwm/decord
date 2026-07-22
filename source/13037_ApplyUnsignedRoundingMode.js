// Module ID: 13037
// Function ID: 99292
// Name: ApplyUnsignedRoundingMode
// Dependencies: []

// Module 13037 (ApplyUnsignedRoundingMode)
arg5.ApplyUnsignedRoundingMode = function ApplyUnsignedRoundingMode(eq, lessThan, ZERO, result) {
  if (eq.eq(lessThan)) {
    return lessThan;
  } else {
    const concat = "x should be between r1 and r2 but x=".concat;
    const combined = "x should be between r1 and r2 but x=".concat(eq, ", r1=");
    const combined1 = combined.concat(lessThan, ", r2=");
    lessThan(arg6[0]).invariant(lessThan.lessThan(eq) && eq.lessThan(ZERO), combined1.concat(ZERO));
    if ("zero" === result) {
      return lessThan;
    } else if ("infinity" === result) {
      return ZERO;
    } else {
      const minusResult = eq.minus(lessThan);
      const minusResult1 = ZERO.minus(eq);
      if (minusResult.lessThan(minusResult1)) {
        return lessThan;
      } else if (minusResult1.lessThan(minusResult)) {
        return ZERO;
      } else {
        lessThan(arg6[0]).invariant(minusResult.eq(minusResult1), "d1 should be equal to d2");
        if ("half-zero" === result) {
          return lessThan;
        } else if ("half-infinity" === result) {
          return ZERO;
        } else {
          lessThan(arg6[0]).invariant("half-even" === result, "unsignedRoundingMode should be half-even");
          const divResult = lessThan.div(ZERO.minus(lessThan));
          return lessThan.div(ZERO.minus(lessThan)).mod(2).isZero() ? lessThan : ZERO;
        }
      }
    }
    const tmp3 = lessThan.lessThan(eq) && eq.lessThan(ZERO);
  }
};
