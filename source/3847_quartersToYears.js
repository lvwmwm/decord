// Module ID: 3847
// Function ID: 3848
// Name: quartersToYears
// Dependencies: [3441, 3619]
// Exports: default

// Module 3847 (quartersToYears)
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
  return Math.floor(arg0 / require(3619) /* keys */.quartersInYear);
};
export default exports.default;
