// Module ID: 13048
// Function ID: 99289
// Name: match
// Dependencies: []

// Module 13048 (match)
arg5.LookupSupportedLocales = undefined;
arg5.ResolveLocale = undefined;
arg5.match = function match(arg0, arg1, arg2, algorithm) {
  arg1 = arg2;
  const result = arg1(arg6[1]).CanonicalizeLocaleList(arg0);
  const obj = {};
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  obj.localeMatcher = str;
  return arg1(arg6[0]).ResolveLocale(arg1, result, obj, [], {}, () => arg2).locale;
};
let obj = {
  enumerable: true,
  get() {
    return arg1(arg6[2]).LookupSupportedLocales;
  }
};
Object.defineProperty(arg5, "LookupSupportedLocales", obj);
obj = {
  enumerable: true,
  get() {
    return arg1(arg6[0]).ResolveLocale;
  }
};
Object.defineProperty(arg5, "ResolveLocale", obj);
