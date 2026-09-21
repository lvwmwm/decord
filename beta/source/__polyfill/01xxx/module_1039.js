// Module ID: 1039
// Function ID: 1040
// Dependencies: [871, 893]
// Exports: breadcrumbsIntegration

// Module 1039
import _mod871 from "module_871" /* 871 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 893 */;

require = arg1;
const dependencyMap = arg6;

export const breadcrumbsIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _fetch = obj.fetch;
  const merged = Object.assign({ xhr: true, console: true, sentry: true }, obj);
  if (null === _fetch) {
    _fetch = _mod871.isWeb();
  }
  const obj3 = { fetch: _fetch, dom: null, history: null };
  let isWebResult = _mod871.isWeb();
  if (isWebResult) {
    const dom = obj.dom;
    isWebResult = null === dom || undefined === dom || dom;
    const tmp7 = null === dom || undefined === dom || dom;
  }
  obj3.dom = isWebResult;
  let isWebResult1 = _mod871.isWeb();
  if (isWebResult1) {
    const history = obj.history;
    isWebResult1 = null === history || undefined === history || history;
    const tmp9 = null === history || undefined === history || history;
  }
  obj3.history = isWebResult1;
  const merged1 = Object.assign(merged, obj3);
  const tmp4Result = _mod871;
  return feedbackAsyncIntegration.breadcrumbsIntegration(merged1);
};
