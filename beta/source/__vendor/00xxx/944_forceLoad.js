// Module ID: 944
// Function ID: 945
// Name: forceLoad
// Dependencies: [686, 945, 946, 947, 948, 949, 950, 951, 942, 901, 899]
// Exports: forceLoad, getDefaultIntegrations, init, onLoad

// Module 944 (forceLoad)
import _mod686 from "module_686" /* 686 */;
import _mod899 from "module_899" /* 899 */;
import _mod901 from "module_901" /* 901 */;
import _wrapTimeFunction from "_wrapTimeFunction" /* 945 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 946 */;
import _getUnhandledRejectionError from "_getUnhandledRejectionError" /* 947 */;
import _mod948 from "module_948" /* 948 */;
import httpContextIntegration from "httpContextIntegration" /* 949 */;
import browserSessionIntegration from "browserSessionIntegration" /* 950 */;
import _mod951 from "module_951" /* 951 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {

}
export const getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [_mod686.inboundFiltersIntegration(), , , , , , , , ];
  items[1] = _mod686.functionToStringIntegration();
  items[2] = _wrapTimeFunction.browserApiErrorsIntegration();
  items[3] = breadcrumbsIntegration.breadcrumbsIntegration();
  items[4] = _getUnhandledRejectionError.globalHandlersIntegration();
  items[5] = _mod948.linkedErrorsIntegration();
  items[6] = _mod686.dedupeIntegration();
  items[7] = httpContextIntegration.httpContextIntegration();
  items[8] = browserSessionIntegration.browserSessionIntegration();
  return items;
};
export const init = function init() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const skipBrowserExtensionCheck = obj.skipBrowserExtensionCheck;
  let result = !skipBrowserExtensionCheck;
  if (!skipBrowserExtensionCheck) {
    result = _mod951.checkAndWarnIfIsEmbeddedBrowserExtension();
  }
  if (null == obj.defaultIntegrations) {
    const items = [_mod686.inboundFiltersIntegration(), , , , , , , , ];
    items[1] = _mod686.functionToStringIntegration();
    items[2] = _wrapTimeFunction.browserApiErrorsIntegration();
    items[3] = breadcrumbsIntegration.breadcrumbsIntegration();
    items[4] = _getUnhandledRejectionError.globalHandlersIntegration();
    items[5] = _mod948.linkedErrorsIntegration();
    items[6] = _mod686.dedupeIntegration();
    items[7] = httpContextIntegration.httpContextIntegration();
    items[8] = browserSessionIntegration.browserSessionIntegration();
    let defaultIntegrations = items;
  } else {
    defaultIntegrations = obj.defaultIntegrations;
  }
  const obj12 = {};
  const merged = Object.assign(obj);
  let enabled = !result;
  if (!result) {
    enabled = obj.enabled;
  }
  obj12.enabled = enabled;
  let defaultStackParser = obj.stackParser;
  if (!defaultStackParser) {
    defaultStackParser = tmp7(942).defaultStackParser;
  }
  obj12.stackParser = _mod686.stackParserFromStackParserOptions(defaultStackParser);
  obj12.integrations = _mod686.getIntegrationsToSetup({ integrations: obj.integrations, defaultIntegrations });
  const obj14 = { integrations: obj.integrations, defaultIntegrations };
  const tmp7Result = _mod686;
  obj12.transport = obj.transport || _mod901.makeFetchTransport;
  const tmp9 = obj.transport || _mod901.makeFetchTransport;
  return _mod686.initAndBind(_mod899.BrowserClient, obj12);
};
export const onLoad = function onLoad(fn) {
  fn();
};
