// Module ID: 3499
// Function ID: 26925
// Name: intlFormat
// Dependencies: []
// Exports: default

// Module 3499 (intlFormat)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function intlFormat(arg0, arg1, arg2) {
  tmp3.default(1, arguments);
  let tmp2 = undefined !== arg1;
  if (tmp2) {
    tmp2 = !("locale" in arg1);
  }
  let tmp3 = arg1;
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
