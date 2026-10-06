// Module ID: 952
// Function ID: 953
// Name: forceLoad
// Dependencies: [694, 953, 954, 955, 956, 957, 958, 959, 950, 909, 907]
// Exports: forceLoad, getDefaultIntegrations, init, onLoad

// Module 952 (forceLoad)
import _mod694 from "module_694" /* 694 */;
import BrowserClient from "BrowserClient" /* 907 */;
import _mod909 from "module_909" /* 909 */;
import browserApiErrorsIntegration from "browserApiErrorsIntegration" /* 953 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 954 */;
import _eventFromRejectionWithPrimitive from "_eventFromRejectionWithPrimitive" /* 955 */;
import _mod956 from "module_956" /* 956 */;
import httpContextIntegration from "httpContextIntegration" /* 957 */;
import browserSessionIntegration from "browserSessionIntegration" /* 958 */;
import _mod959 from "module_959" /* 959 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {

}
export const getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [, , , , , , , , ];
  const obj = _mod694;
  items[0] = obj.inboundFiltersIntegration();
  const obj2 = _mod694;
  items[1] = obj2.functionToStringIntegration();
  const obj3 = browserApiErrorsIntegration;
  items[2] = obj3.browserApiErrorsIntegration();
  const obj4 = breadcrumbsIntegration;
  items[3] = obj4.breadcrumbsIntegration();
  const obj5 = _eventFromRejectionWithPrimitive;
  items[4] = obj5.globalHandlersIntegration();
  const obj6 = _mod956;
  items[5] = obj6.linkedErrorsIntegration();
  const obj7 = _mod694;
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
    const obj2 = _mod959;
    result = obj2.checkAndWarnIfIsEmbeddedBrowserExtension();
  }
  if (null == obj.defaultIntegrations) {
    const items = [, , , , , , , , ];
    const obj3 = _mod694;
    items[0] = obj3.inboundFiltersIntegration();
    const obj4 = _mod694;
    items[1] = obj4.functionToStringIntegration();
    const obj5 = browserApiErrorsIntegration;
    items[2] = obj5.browserApiErrorsIntegration();
    const obj6 = breadcrumbsIntegration;
    items[3] = obj6.breadcrumbsIntegration();
    const obj7 = _eventFromRejectionWithPrimitive;
    items[4] = obj7.globalHandlersIntegration();
    const obj8 = _mod956;
    items[5] = obj8.linkedErrorsIntegration();
    const obj9 = _mod694;
    items[6] = obj9.dedupeIntegration();
    const obj10 = httpContextIntegration;
    items[7] = obj10.httpContextIntegration();
    const obj11 = browserSessionIntegration;
    items[8] = obj11.browserSessionIntegration();
    defaultIntegrations = items;
  } else {
    defaultIntegrations = obj.defaultIntegrations;
  }
  const obj12 = { enabled: !result && obj.enabled, stackParser: stackParserFromStackParserOptions(defaultStackParser), integrations: tmp7Result.getIntegrationsToSetup(obj13), transport: obj.transport || _mod909.makeFetchTransport };
  const merged = Object.assign(obj);
  defaultStackParser = obj.stackParser;
  stackParserFromStackParserOptions = _mod694.stackParserFromStackParserOptions;
  _mod694;
  if (!defaultStackParser) {
    defaultStackParser = tmp7(950).defaultStackParser;
  }
  obj13 = { integrations: obj.integrations, defaultIntegrations };
  tmp7Result = _mod694;
  obj.transport || _mod909.makeFetchTransport;
  const tmp7Result2 = _mod694;
  return tmp7Result2.initAndBind(BrowserClient.BrowserClient, obj12);
};
export const onLoad = function onLoad(fn) {
  fn();
};
