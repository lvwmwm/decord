// Module ID: 13224
// Function ID: 101827
// Name: match
// Dependencies: [13225, 13236, 13237]

// Module 13224 (match)
const require = arg1;
const dependencyMap = arg6;
arg5.LookupSupportedLocales = undefined;
arg5.ResolveLocale = undefined;
arg5.match = function match(arg0, arg1, arg2, algorithm) {
  const _require = arg2;
  const result = _require(13236).CanonicalizeLocaleList(arg0);
  const obj = {};
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  obj.localeMatcher = str;
  return _require(13225).ResolveLocale(arg1, result, obj, [], {}, () => closure_0).locale;
};
let obj = {
  enumerable: true,
  get() {
    return require(13237) /* LookupSupportedLocales */.LookupSupportedLocales;
  }
};
Object.defineProperty(arg5, "LookupSupportedLocales", obj);
obj = {
  enumerable: true,
  get() {
    return require(13225) /* ResolveLocale */.ResolveLocale;
  }
};
Object.defineProperty(arg5, "ResolveLocale", obj);
