// Module ID: 3679
// Function ID: 3680
// Name: quartersToYears
// Dependencies: [3273, 3451]
// Exports: default

// Module 3679 (quartersToYears)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function quartersToYears(arg0) {
  tmp3.default(1, arguments);
  return Math.floor(arg0 / require(3451) /* keys */.quartersInYear);
};
export default exports.default;
