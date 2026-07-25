// Module ID: 13235
// Function ID: 101954
// Name: match
// Dependencies: [13236, 13247, 13248]

// Module 13235 (match)
const require = arg1;
const dependencyMap = arg6;
arg5.LookupSupportedLocales = undefined;
arg5.ResolveLocale = undefined;
arg5.match = function match(arg0, arg1, arg2, algorithm) {
  const _require = arg2;
  const result = _require(13247).CanonicalizeLocaleList(arg0);
  const obj = {};
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  obj.localeMatcher = str;
  return _require(13236).ResolveLocale(arg1, result, obj, [], {}, () => closure_0).locale;
};
let obj = {
  enumerable: true,
  get() {
    return require(13248) /* LookupSupportedLocales */.LookupSupportedLocales;
  }
};
Object.defineProperty(arg5, "LookupSupportedLocales", obj);
obj = {
  enumerable: true,
  get() {
    return require(13236) /* ResolveLocale */.ResolveLocale;
  }
};
Object.defineProperty(arg5, "ResolveLocale", obj);
