// Module ID: 3879
// Function ID: 3880
// Name: quartersToYears
// Dependencies: [3473, 3651]
// Exports: default

// Module 3879 (quartersToYears)
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
  return Math.floor(arg0 / require(3651) /* keys */.quartersInYear);
};
export default exports.default;
