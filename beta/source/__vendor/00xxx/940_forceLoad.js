// Module ID: 940
// Function ID: 941
// Name: forceLoad
// Dependencies: [682, 941, 942, 943, 944, 945, 946, 947, 938, 897, 895]
// Exports: forceLoad, getDefaultIntegrations, init, onLoad

// Module 940 (forceLoad)
import _mod682 from "module_682" /* 682 */;
import BrowserClient from "BrowserClient" /* 895 */;
import _mod897 from "module_897" /* 897 */;
import browserApiErrorsIntegration from "browserApiErrorsIntegration" /* 941 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 942 */;
import _eventFromRejectionWithPrimitive from "_eventFromRejectionWithPrimitive" /* 943 */;
import _mod944 from "module_944" /* 944 */;
import httpContextIntegration from "httpContextIntegration" /* 945 */;
import browserSessionIntegration from "browserSessionIntegration" /* 946 */;
import _mod947 from "module_947" /* 947 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {

}
export const getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [, , , , , , , , ];
  const obj = _mod682;
  items[0] = obj.inboundFiltersIntegration();
  const obj2 = _mod682;
  items[1] = obj2.functionToStringIntegration();
  const obj3 = browserApiErrorsIntegration;
  items[2] = obj3.browserApiErrorsIntegration();
  const obj4 = breadcrumbsIntegration;
  items[3] = obj4.breadcrumbsIntegration();
  const obj5 = _eventFromRejectionWithPrimitive;
  items[4] = obj5.globalHandlersIntegration();
  const obj6 = _mod944;
  items[5] = obj6.linkedErrorsIntegration();
  const obj7 = _mod682;
  items[6] = obj7.dedupeIntegration();
  const obj8 = httpContextIntegration;
  items[7] = obj8.httpContextIntegration();
  const obj9 = browserSessionIntegration;
  items[8] = obj9.browserSessionIntegration();
  return items;
};
export const init = function init() {
  let defaultIntegrations;
  let defaultStackParser;
  let obj13;
  let stackParserFromStackParserOptions;
  let tmp7Result;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let result = !obj.skipBrowserExtensionCheck;
  if (result) {
    const obj2 = _mod947;
    result = obj2.checkAndWarnIfIsEmbeddedBrowserExtension();
  }
  if (null == obj.defaultIntegrations) {
    const items = [, , , , , , , , ];
    const obj3 = _mod682;
    items[0] = obj3.inboundFiltersIntegration();
    const obj4 = _mod682;
    items[1] = obj4.functionToStringIntegration();
    const obj5 = browserApiErrorsIntegration;
    items[2] = obj5.browserApiErrorsIntegration();
    const obj6 = breadcrumbsIntegration;
    items[3] = obj6.breadcrumbsIntegration();
    const obj7 = _eventFromRejectionWithPrimitive;
    items[4] = obj7.globalHandlersIntegration();
    const obj8 = _mod944;
    items[5] = obj8.linkedErrorsIntegration();
    const obj9 = _mod682;
    items[6] = obj9.dedupeIntegration();
    const obj10 = httpContextIntegration;
    items[7] = obj10.httpContextIntegration();
    const obj11 = browserSessionIntegration;
    items[8] = obj11.browserSessionIntegration();
    defaultIntegrations = items;
  } else {
    defaultIntegrations = obj.defaultIntegrations;
  }
  const obj12 = { enabled: !result && obj.enabled, stackParser: stackParserFromStackParserOptions(defaultStackParser), integrations: tmp7Result.getIntegrationsToSetup(obj13), transport: obj.transport || _mod897.makeFetchTransport };
  const merged = Object.assign(obj);
  defaultStackParser = obj.stackParser;
  stackParserFromStackParserOptions = _mod682.stackParserFromStackParserOptions;
  _mod682;
  if (!defaultStackParser) {
    defaultStackParser = tmp7(938).defaultStackParser;
  }
  obj13 = { integrations: obj.integrations, defaultIntegrations };
  tmp7Result = _mod682;
  obj.transport || _mod897.makeFetchTransport;
  const tmp7Result2 = _mod682;
  return tmp7Result2.initAndBind(BrowserClient.BrowserClient, obj12);
};
export const onLoad = function onLoad(fn) {
  fn();
};
