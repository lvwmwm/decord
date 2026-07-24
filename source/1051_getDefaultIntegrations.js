// Module ID: 1051
// Function ID: 11257
// Name: getDefaultIntegrations
// Dependencies: [794, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1049, 1008, 1006]

// Module 1051 (getDefaultIntegrations)
const require = arg1;
const dependencyMap = arg6;
function getDefaultIntegrations(arg0) {
  const items = [require(794) /* registerSpanErrorInstrumentation */.inboundFiltersIntegration(), , , , , , , , ];
  const obj = require(794) /* registerSpanErrorInstrumentation */;
  items[1] = require(794) /* registerSpanErrorInstrumentation */.functionToStringIntegration();
  const obj2 = require(794) /* registerSpanErrorInstrumentation */;
  items[2] = require(1052) /* _wrapTimeFunction */.browserApiErrorsIntegration();
  const obj3 = require(1052) /* _wrapTimeFunction */;
  items[3] = require(1053) /* breadcrumbsIntegration */.breadcrumbsIntegration();
  const obj4 = require(1053) /* breadcrumbsIntegration */;
  items[4] = require(1054) /* _getUnhandledRejectionError */.globalHandlersIntegration();
  const obj5 = require(1054) /* _getUnhandledRejectionError */;
  items[5] = require(1055) /* linkedErrorsIntegration */.linkedErrorsIntegration();
  const obj6 = require(1055) /* linkedErrorsIntegration */;
  items[6] = require(794) /* registerSpanErrorInstrumentation */.dedupeIntegration();
  const obj7 = require(794) /* registerSpanErrorInstrumentation */;
  items[7] = require(1056) /* httpContextIntegration */.httpContextIntegration();
  const obj8 = require(1056) /* httpContextIntegration */;
  items[8] = require(1057) /* browserSessionIntegration */.browserSessionIntegration();
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
      result = require(1058) /* checkAndWarnIfIsEmbeddedBrowserExtension */.checkAndWarnIfIsEmbeddedBrowserExtension();
      const obj2 = require(1058) /* checkAndWarnIfIsEmbeddedBrowserExtension */;
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
      defaultStackParser = require(1049) /* createFrame */.defaultStackParser;
    }
    obj.stackParser = require(794) /* registerSpanErrorInstrumentation */.stackParserFromStackParserOptions(defaultStackParser);
    const obj4 = require(794) /* registerSpanErrorInstrumentation */;
    obj = { integrations: first.integrations, defaultIntegrations };
    obj.integrations = require(794) /* registerSpanErrorInstrumentation */.getIntegrationsToSetup(obj);
    let makeFetchTransport = first.transport;
    if (!makeFetchTransport) {
      makeFetchTransport = require(1008) /* makeFetchTransport */.makeFetchTransport;
    }
    obj.transport = makeFetchTransport;
    const merged = Object.assign({}, first, obj);
    const obj5 = require(794) /* registerSpanErrorInstrumentation */;
    return require(794) /* registerSpanErrorInstrumentation */.initAndBind(require(1006) /* _isNativeReflectConstruct */.BrowserClient, merged);
  }
  first = {};
};
arg5.onLoad = function onLoad(arg0) {
  arg0();
};
