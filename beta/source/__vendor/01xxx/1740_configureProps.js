// Module ID: 1740
// Function ID: 1741
// Name: configureProps
// Dependencies: [1644, 1654, 1652, 1685, 1645]
// Exports: adaptViewConfig, addWhitelistedNativeProps, addWhitelistedUIProps, configureReanimatedLogger

// Module 1740 (configureProps)
import _mod1645 from "module_1645" /* 1645 */;
import _mod1654 from "module_1654" /* 1654 */;
import runOnRuntime from "runOnRuntime" /* 1685 */;
import module_1644 from "module_1644" /* 1644 */;

function configureProps() {
  for (const key10008 in _mod1654.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST) {
    let tmp9 = require;
    if (!(key10008 in _mod1654.PropsAllowlists.UI_THREAD_PROPS_WHITELIST)) {
      continue;
    } else {
      let tmp = globalThis;
      let _HermesInternal = HermesInternal;
      let str = "` was whitelisted both as UI and native prop. Please remove it from one of the lists.";
      let str2 = "Property `";
      let tmp2 = new.target;
      let tmp3 = new.target;
      let reanimatedError = new tmp9(1652).ReanimatedError("Property `" + key10008 + "` was whitelisted both as UI and native prop. Please remove it from one of the lists.");
      throw reanimatedError;
    }
  }
  const keys = Object.keys(_mod1654.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  runOnRuntime.jsiConfigureProps(keys, Object.keys(_mod1654.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST));
}
let closure_2 = module_1644.shouldBeUseWeb();
const set = new Set();
configureProps();

export { configureProps };
export const addWhitelistedNativeProps = function addWhitelistedNativeProps(arg0) {
  const merged = Object.assign(_mod1654.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  _mod1654.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(_mod1654.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length !== Object.keys(_mod1654.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
};
export const addWhitelistedUIProps = function addWhitelistedUIProps(arg0) {
  const merged = Object.assign(_mod1654.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  _mod1654.PropsAllowlists.UI_THREAD_PROPS_WHITELIST = {};
  if (Object.keys(_mod1654.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(_mod1654.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
};
export const configureReanimatedLogger = function configureReanimatedLogger(level) {
  _mod1645.updateLoggerConfig(level);
  if (!closure_2) {
    tmp(1685).executeOnUIRuntimeSync(tmp(1645).updateLoggerConfig)(level);
    const tmpResult = tmp(1685);
  }
};
export const adaptViewConfig = function adaptViewConfig(viewConfig) {
  const uiViewClassName = viewConfig.uiViewClassName;
  if (!set.has(uiViewClassName)) {
    const obj2 = {};
    const _Object = Object;
    const keys = Object.keys(viewConfig.validAttributes);
    const item = keys.forEach((item) => {
      if (!tmp3) {
        obj2[item] = true;
      }
    });
    const _Object2 = Object;
    const obj3 = {};
    const merged = Object.assign(obj2(1654).PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
    const merged1 = Object.assign(obj2);
    obj2(1654).PropsAllowlists.UI_THREAD_PROPS_WHITELIST = obj3;
    const _Object3 = Object;
    if (Object.keys(obj2(1654).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length !== Object.keys(obj2(1654).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
      configureProps();
    }
    set.add(uiViewClassName);
  }
};
