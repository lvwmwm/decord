// Module ID: 1146
// Function ID: 13072
// Name: breadcrumbsIntegration
// Dependencies: []

// Module 1146 (breadcrumbsIntegration)
arg5.breadcrumbsIntegration = function breadcrumbsIntegration(merged1) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const _Object = Object;
    const obj = {};
    let _fetch = first.fetch;
    const merged = Object.assign({ 0: "Small", 9223372036854775807: "sm", 9223372036854775807: "Placeholder" }, first);
    if (null === _fetch) {
      _fetch = arg1(arg6[0]).isWeb();
      const obj3 = arg1(arg6[0]);
    }
    obj.fetch = _fetch;
    const tmp9 = !arg1(arg6[0]).isWeb();
    let tmp10 = !tmp9;
    if (!tmp9) {
      const dom = first.dom;
      tmp10 = null === dom || undefined === dom || dom;
      const tmp11 = null === dom || undefined === dom || dom;
    }
    obj.dom = tmp10;
    const obj4 = arg1(arg6[0]);
    const tmp14 = !arg1(arg6[0]).isWeb();
    let tmp15 = !tmp14;
    if (!tmp14) {
      const history = first.history;
      tmp15 = null === history || undefined === history || history;
      const tmp16 = null === history || undefined === history || history;
    }
    obj.history = tmp15;
    merged1 = Object.assign(merged, obj);
    const obj5 = arg1(arg6[0]);
    return arg1(arg6[1]).breadcrumbsIntegration(merged1);
  }
  first = {};
};
