// Module ID: 1681
// Function ID: 18626
// Name: configureProps
// Dependencies: [1585, 1595, 1593, 1626, 1586]
// Exports: adaptViewConfig, addWhitelistedNativeProps, configureReanimatedLogger

// Module 1681 (configureProps)
import isJest from "isJest";

function configureProps() {
  for (const key10009 in require(1595).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST) {
    let tmp10 = key10009;
    let tmp11 = require;
    let tmp12 = dependencyMap;
    if (!(key10009 in require(1595).PropsAllowlists.UI_THREAD_PROPS_WHITELIST)) {
      continue;
    } else {
      let tmp = require;
      let tmp2 = dependencyMap;
      let num = 2;
      let ReanimatedError = require(1593) /* processStack */.ReanimatedError;
      let tmp3 = globalThis;
      let _HermesInternal = HermesInternal;
      let str = "Property `";
      let str2 = "` was whitelisted both as UI and native prop. Please remove it from one of the lists.";
      let prototype = ReanimatedError.prototype;
      let tmp4 = new.target;
      let tmp5 = new.target;
      let reanimatedError = new ReanimatedError("Property `" + key10009 + "` was whitelisted both as UI and native prop. Please remove it from one of the lists.");
      let tmp7 = reanimatedError;
      throw reanimatedError;
    }
  }
  const keys = Object.keys(require(1595).PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  require(1626) /* getSensorContainer */.jsiConfigureProps(keys, Object.keys(require(1595).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST));
}
function addWhitelistedUIProps(arg0) {
  require(1595).PropsAllowlists.UI_THREAD_PROPS_WHITELIST = Object.assign({}, require(1595).PropsAllowlists.UI_THREAD_PROPS_WHITELIST, arg0);
  if (Object.keys(require(1595).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(require(1595).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
}
isJest = isJest.shouldBeUseWeb();
const set = new Set();
configureProps();

export { configureProps };
export const addWhitelistedNativeProps = function addWhitelistedNativeProps(arg0) {
  require(1595).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST = Object.assign({}, require(1595).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST, arg0);
  if (Object.keys(require(1595).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length !== Object.keys(require(1595).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
};
export { addWhitelistedUIProps };
export const configureReanimatedLogger = function configureReanimatedLogger(level) {
  require(1586) /* noop */.updateLoggerConfig(level);
  if (!isJest) {
    require(1626) /* getSensorContainer */.executeOnUIRuntimeSync(require(1586) /* noop */.updateLoggerConfig)(level);
    const obj2 = require(1626) /* getSensorContainer */;
  }
};
export const adaptViewConfig = function adaptViewConfig(viewConfig) {
  const uiViewClassName = viewConfig.uiViewClassName;
  if (!set.has(uiViewClassName)) {
    const obj = {};
    const _Object = Object;
    const keys = Object.keys(viewConfig.validAttributes);
    const item = keys.forEach((arg0) => {
      let tmp = arg0 in obj(outer1_1[1]).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST;
      if (!tmp) {
        tmp = arg0 in obj(outer1_1[1]).PropsAllowlists.UI_THREAD_PROPS_WHITELIST;
      }
      if (!tmp) {
        obj[arg0] = true;
      }
    });
    addWhitelistedUIProps(obj);
    set.add(uiViewClassName);
  }
};
