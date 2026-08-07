// Module ID: 3787
// Function ID: 3788
// Name: quartersToYears
// Dependencies: [3381, 3559]
// Exports: default

// Module 3787 (quartersToYears)
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
  return Math.floor(arg0 / require(3559) /* keys */.quartersInYear);
};
export default exports.default;
