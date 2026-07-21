// Module ID: 1681
// Function ID: 18625
// Name: configureProps
// Dependencies: [1718, 1719, 6, 7, 27]
// Exports: adaptViewConfig, addWhitelistedNativeProps, configureReanimatedLogger

// Module 1681 (configureProps)
import ProgressTransitionManager from "ProgressTransitionManager";

function configureProps() {
  for (const key10009 in closure_0(closure_1[1]).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST) {
    let tmp10 = key10009;
    let tmp11 = closure_0;
    let tmp12 = closure_1;
    if (!(key10009 in closure_0(closure_1[1]).PropsAllowlists.UI_THREAD_PROPS_WHITELIST)) {
      continue;
    } else {
      let tmp = closure_0;
      let tmp2 = closure_1;
      let num = 2;
      let ReanimatedError = closure_0(closure_1[2]).ReanimatedError;
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
  const keys = Object.keys(require(dependencyMap[1]).PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  require(dependencyMap[3]).jsiConfigureProps(keys, Object.keys(require(dependencyMap[1]).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST));
}
function addWhitelistedUIProps(arg0) {
  require(dependencyMap[1]).PropsAllowlists.UI_THREAD_PROPS_WHITELIST = Object.assign({}, require(dependencyMap[1]).PropsAllowlists.UI_THREAD_PROPS_WHITELIST, arg0);
  if (Object.keys(require(dependencyMap[1]).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(require(dependencyMap[1]).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
}
ProgressTransitionManager = ProgressTransitionManager.shouldBeUseWeb();
const set = new Set();
configureProps();

export { configureProps };
export const addWhitelistedNativeProps = function addWhitelistedNativeProps(arg0) {
  require(dependencyMap[1]).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST = Object.assign({}, require(dependencyMap[1]).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST, arg0);
  if (Object.keys(require(dependencyMap[1]).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length !== Object.keys(require(dependencyMap[1]).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
};
export { addWhitelistedUIProps };
export const configureReanimatedLogger = function configureReanimatedLogger(level) {
  require(dependencyMap[4]).updateLoggerConfig(level);
  if (!ProgressTransitionManager) {
    require(dependencyMap[3]).executeOnUIRuntimeSync(require(dependencyMap[4]).updateLoggerConfig)(level);
    const obj2 = require(dependencyMap[3]);
  }
};
export const adaptViewConfig = function adaptViewConfig(viewConfig) {
  const uiViewClassName = viewConfig.uiViewClassName;
  if (!set.has(uiViewClassName)) {
    const obj = {};
    const require = obj;
    const _Object = Object;
    const keys = Object.keys(viewConfig.validAttributes);
    const item = keys.forEach((arg0) => {
      let tmp = arg0 in obj(closure_1[1]).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST;
      if (!tmp) {
        tmp = arg0 in obj(closure_1[1]).PropsAllowlists.UI_THREAD_PROPS_WHITELIST;
      }
      if (!tmp) {
        obj[arg0] = true;
      }
    });
    addWhitelistedUIProps(obj);
    set.add(uiViewClassName);
  }
};
