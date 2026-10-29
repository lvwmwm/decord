// Module ID: 949
// Function ID: 950
// Name: forceLoad
// Dependencies: [693, 950, 951, 952, 953, 954, 955, 956, 947, 906, 904]
// Exports: forceLoad, init, onLoad

// Module 949 (forceLoad)
import _mod693 from "module_693" /* 693 */;
import BrowserClient from "BrowserClient" /* 904 */;
import _mod906 from "module_906" /* 906 */;
import browserApiErrorsIntegration from "browserApiErrorsIntegration" /* 950 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 951 */;
import _eventFromRejectionWithPrimitive from "_eventFromRejectionWithPrimitive" /* 952 */;
import _mod953 from "module_953" /* 953 */;
import httpContextIntegration from "httpContextIntegration" /* 954 */;
import browserSessionIntegration from "browserSessionIntegration" /* 955 */;
import _mod956 from "module_956" /* 956 */;

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
  const obj7 = _mod953;
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
export function init() {
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
    const obj2 = _mod956;
    result = obj2.checkAndWarnIfIsEmbeddedBrowserExtension();
  }
  if (null == obj.defaultIntegrations) {
    defaultIntegrations = getDefaultIntegrations();
  } else {
    defaultIntegrations = obj.defaultIntegrations;
  }
  const obj3 = { enabled: !result && obj.enabled, stackParser: stackParserFromStackParserOptions(defaultStackParser), integrations: tmp6Result.getIntegrationsToSetup(obj4), transport: obj.transport || _mod906.makeFetchTransport };
  const merged = Object.assign(obj);
  defaultStackParser = obj.stackParser;
  stackParserFromStackParserOptions = _mod693.stackParserFromStackParserOptions;
  _mod693;
  if (!defaultStackParser) {
    defaultStackParser = tmp6(947).defaultStackParser;
  }
  obj4 = { integrations: obj.integrations, defaultIntegrations };
  tmp6Result = _mod693;
  obj.transport || _mod906.makeFetchTransport;
  const tmp6Result2 = _mod693;
  return tmp6Result2.initAndBind(BrowserClient.BrowserClient, obj3);
}
export function onLoad(fn) {
  fn();
}
