// Module ID: 3771
// Function ID: 3772
// Name: quartersToYears
// Dependencies: [3365, 3543]
// Exports: default

// Module 3771 (quartersToYears)
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
  return Math.floor(arg0 / require(3543) /* keys */.quartersInYear);
};
export default exports.default;
