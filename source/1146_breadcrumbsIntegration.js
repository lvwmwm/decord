// Module ID: 1146
// Function ID: 13073
// Name: breadcrumbsIntegration
// Dependencies: [978, 1000]

// Module 1146 (breadcrumbsIntegration)
const require = arg1;
const dependencyMap = arg6;
arg5.breadcrumbsIntegration = function breadcrumbsIntegration(merged1) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const _Object = Object;
    const obj = {};
    let _fetch = first.fetch;
    const merged = Object.assign({ xhr: true, console: true, sentry: true }, first);
    if (null === _fetch) {
      _fetch = require(978) /* isHermesEnabled */.isWeb();
      const obj3 = require(978) /* isHermesEnabled */;
    }
    obj.fetch = _fetch;
    const tmp9 = !require(978) /* isHermesEnabled */.isWeb();
    let tmp10 = !tmp9;
    if (!tmp9) {
      const dom = first.dom;
      tmp10 = null === dom || undefined === dom || dom;
      const tmp11 = null === dom || undefined === dom || dom;
    }
    obj.dom = tmp10;
    const obj4 = require(978) /* isHermesEnabled */;
    const tmp14 = !require(978) /* isHermesEnabled */.isWeb();
    let tmp15 = !tmp14;
    if (!tmp14) {
      const history = first.history;
      tmp15 = null === history || undefined === history || history;
      const tmp16 = null === history || undefined === history || history;
    }
    obj.history = tmp15;
    merged1 = Object.assign(merged, obj);
    const obj5 = require(978) /* isHermesEnabled */;
    return require(1000) /* keys */.breadcrumbsIntegration(merged1);
  }
  first = {};
};
