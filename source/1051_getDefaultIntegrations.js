// Module ID: 1051
// Function ID: 11251
// Name: getDefaultIntegrations
// Dependencies: []

// Module 1051 (getDefaultIntegrations)
function getDefaultIntegrations(arg0) {
  const items = [arg1(arg6[0]).inboundFiltersIntegration(), , , , , , , , ];
  const obj = arg1(arg6[0]);
  items[1] = arg1(arg6[0]).functionToStringIntegration();
  const obj2 = arg1(arg6[0]);
  items[2] = arg1(arg6[1]).browserApiErrorsIntegration();
  const obj3 = arg1(arg6[1]);
  items[3] = arg1(arg6[2]).breadcrumbsIntegration();
  const obj4 = arg1(arg6[2]);
  items[4] = arg1(arg6[3]).globalHandlersIntegration();
  const obj5 = arg1(arg6[3]);
  items[5] = arg1(arg6[4]).linkedErrorsIntegration();
  const obj6 = arg1(arg6[4]);
  items[6] = arg1(arg6[0]).dedupeIntegration();
  const obj7 = arg1(arg6[0]);
  items[7] = arg1(arg6[5]).httpContextIntegration();
  const obj8 = arg1(arg6[5]);
  items[8] = arg1(arg6[6]).browserSessionIntegration();
  return items;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.forceLoad = function forceLoad() {

};
arg5.getDefaultIntegrations = getDefaultIntegrations;
arg5.init = function init() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let result = !first.skipBrowserExtensionCheck;
    if (result) {
      result = arg1(arg6[7]).checkAndWarnIfIsEmbeddedBrowserExtension();
      const obj2 = arg1(arg6[7]);
    }
    if (null == first.defaultIntegrations) {
      let defaultIntegrations = getDefaultIntegrations();
    } else {
      defaultIntegrations = first.defaultIntegrations;
    }
    let obj = {};
    let enabled = !result;
    if (enabled) {
      enabled = first.enabled;
    }
    obj.enabled = enabled;
    let defaultStackParser = first.stackParser;
    if (!defaultStackParser) {
      defaultStackParser = arg1(arg6[8]).defaultStackParser;
    }
    obj.stackParser = arg1(arg6[0]).stackParserFromStackParserOptions(defaultStackParser);
    const obj4 = arg1(arg6[0]);
    obj = { integrations: first.integrations, defaultIntegrations };
    obj.integrations = arg1(arg6[0]).getIntegrationsToSetup(obj);
    let makeFetchTransport = first.transport;
    if (!makeFetchTransport) {
      makeFetchTransport = arg1(arg6[9]).makeFetchTransport;
    }
    obj.transport = makeFetchTransport;
    const merged = Object.assign({}, first, obj);
    const obj5 = arg1(arg6[0]);
    return arg1(arg6[0]).initAndBind(arg1(arg6[10]).BrowserClient, merged);
  }
  first = {};
};
arg5.onLoad = function onLoad(arg0) {
  arg0();
};
