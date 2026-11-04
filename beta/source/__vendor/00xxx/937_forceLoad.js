// Module ID: 937
// Function ID: 938
// Name: forceLoad
// Dependencies: [681, 938, 939, 940, 941, 942, 943, 944, 935, 894, 892]
// Exports: forceLoad, init, onLoad

// Module 937 (forceLoad)
import _mod681 from "module_681" /* 681 */;
import BrowserClient from "BrowserClient" /* 892 */;
import _mod894 from "module_894" /* 894 */;
import browserApiErrorsIntegration from "browserApiErrorsIntegration" /* 938 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 939 */;
import _eventFromRejectionWithPrimitive from "_eventFromRejectionWithPrimitive" /* 940 */;
import _mod941 from "module_941" /* 941 */;
import httpContextIntegration from "httpContextIntegration" /* 942 */;
import browserSessionIntegration from "browserSessionIntegration" /* 943 */;
import _mod944 from "module_944" /* 944 */;

function getDefaultIntegrations(arg0) {
  const items = [, , , , , , , , , ];
  const obj = _mod681;
  items[0] = obj.inboundFiltersIntegration();
  const obj2 = _mod681;
  items[1] = obj2.functionToStringIntegration();
  const obj3 = _mod681;
  items[2] = obj3.conversationIdIntegration();
  const obj4 = browserApiErrorsIntegration;
  items[3] = obj4.browserApiErrorsIntegration();
  const obj5 = breadcrumbsIntegration;
  items[4] = obj5.breadcrumbsIntegration();
  const obj6 = _eventFromRejectionWithPrimitive;
  items[5] = obj6.globalHandlersIntegration();
  const obj7 = _mod941;
  items[6] = obj7.linkedErrorsIntegration();
  const obj8 = _mod681;
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
    const obj2 = _mod944;
    result = obj2.checkAndWarnIfIsEmbeddedBrowserExtension();
  }
  if (null == obj.defaultIntegrations) {
    defaultIntegrations = getDefaultIntegrations();
  } else {
    defaultIntegrations = obj.defaultIntegrations;
  }
  const obj3 = { enabled: !result && obj.enabled, stackParser: stackParserFromStackParserOptions(defaultStackParser), integrations: tmp6Result.getIntegrationsToSetup(obj4), transport: obj.transport || _mod894.makeFetchTransport };
  const merged = Object.assign(obj);
  defaultStackParser = obj.stackParser;
  stackParserFromStackParserOptions = _mod681.stackParserFromStackParserOptions;
  _mod681;
  if (!defaultStackParser) {
    defaultStackParser = tmp6(935).defaultStackParser;
  }
  obj4 = { integrations: obj.integrations, defaultIntegrations };
  tmp6Result = _mod681;
  obj.transport || _mod894.makeFetchTransport;
  const tmp6Result2 = _mod681;
  return tmp6Result2.initAndBind(BrowserClient.BrowserClient, obj3);
}
export function onLoad(fn) {
  fn();
}
