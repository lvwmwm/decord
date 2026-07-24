// Module ID: 3501
// Function ID: 26931
// Name: intlFormat
// Dependencies: [3210]
// Exports: default

// Module 3501 (intlFormat)
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let closure_0 = tmp3;

export default function intlFormat(arg0, arg1, arg2) {
  tmp3.default(1, arguments);
  let tmp2 = undefined !== arg1;
  if (tmp2) {
    tmp2 = !("locale" in arg1);
  }
  tmp3 = arg1;
  let tmp4;
  if (tmp2) {
    tmp3 = arg2;
    tmp4 = arg1;
  }
  let locale;
  if (null !== tmp3) {
    if (undefined !== tmp3) {
      locale = tmp3.locale;
    }
  }
  const dateTimeFormat = new Intl.DateTimeFormat(locale, tmp4);
  return dateTimeFormat.format(arg0);
};
export default exports.default;
