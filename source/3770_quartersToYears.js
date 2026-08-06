// Module ID: 3770
// Function ID: 3771
// Name: quartersToYears
// Dependencies: [3364, 3542]
// Exports: default

// Module 3770 (quartersToYears)
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
  return Math.floor(arg0 / require(3542) /* keys */.quartersInYear);
};
export default exports.default;
