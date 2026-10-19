// Module ID: 952
// Function ID: 953
// Name: forceLoad
// Dependencies: [693, 953, 954, 955, 956, 957, 958, 959, 950, 909, 907]
// Exports: forceLoad, init, onLoad

// Module 952 (forceLoad)
import _mod693 from "module_693" /* 693 */;
import BrowserClient from "BrowserClient" /* 907 */;
import _mod909 from "module_909" /* 909 */;
import browserApiErrorsIntegration from "browserApiErrorsIntegration" /* 953 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 954 */;
import _eventFromRejectionWithPrimitive from "_eventFromRejectionWithPrimitive" /* 955 */;
import _mod956 from "module_956" /* 956 */;
import httpContextIntegration from "httpContextIntegration" /* 957 */;
import browserSessionIntegration from "browserSessionIntegration" /* 958 */;
import _mod959 from "module_959" /* 959 */;

function getDefaultIntegrations(arg0) {
  const items = [, , , , , , , , , ];
  const obj = _mod693;
  items[0] = obj.inboundFiltersIntegration();
  const obj2 = _mod693;
  items[1] = obj2.functionToStringIntegration();
  const obj3 = _mod693;
  items[2] = obj3.conversationIdIntegration();
  const obj4 = browserApiErrorsIntegration;
  items[3] = obj4.browserApiErrorsIntegration();
  const obj5 = breadcrumbsIntegration;
  items[4] = obj5.breadcrumbsIntegration();
  const obj6 = _eventFromRejectionWithPrimitive;
  items[5] = obj6.globalHandlersIntegration();
  const obj7 = _mod956;
  items[6] = obj7.linkedErrorsIntegration();
  const obj8 = _mod693;
  items[7] = obj8.dedupeIntegration();
  const obj9 = httpContextIntegration;
  items[8] = obj9.httpContextIntegration();
  const obj10 = browserSessionIntegration;
  items[9] = obj10.browserSessionIntegration();
  return items;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {

}
export { getDefaultIntegrations };
export const init = function init() {
  let defaultIntegrations;
  let defaultStackParser;
  let obj4;
  let stackParserFromStackParserOptions;
  let tmp6Result;
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
    defaultIntegrations = getDefaultIntegrations();
  } else {
    defaultIntegrations = obj.defaultIntegrations;
  }
  const obj3 = { enabled: !result && obj.enabled, stackParser: stackParserFromStackParserOptions(defaultStackParser), integrations: tmp6Result.getIntegrationsToSetup(obj4), transport: obj.transport || _mod909.makeFetchTransport };
  const merged = Object.assign(obj);
  defaultStackParser = obj.stackParser;
  stackParserFromStackParserOptions = _mod693.stackParserFromStackParserOptions;
  _mod693;
  if (!defaultStackParser) {
    defaultStackParser = tmp6(950).defaultStackParser;
  }
  obj4 = { integrations: obj.integrations, defaultIntegrations };
  tmp6Result = _mod693;
  obj.transport || _mod909.makeFetchTransport;
  const tmp6Result2 = _mod693;
  return tmp6Result2.initAndBind(BrowserClient.BrowserClient, obj3);
};
export const onLoad = function onLoad(fn) {
  fn();
};
