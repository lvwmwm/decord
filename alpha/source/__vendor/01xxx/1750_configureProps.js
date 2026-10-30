// Module ID: 1750
// Function ID: 1751
// Name: configureProps
// Dependencies: [1654, 1664, 1662, 1695, 1655]
// Exports: adaptViewConfig, addWhitelistedNativeProps, addWhitelistedUIProps, configureReanimatedLogger

// Module 1750 (configureProps)
import react_native from "react-native" /* 1655 */;
import PropsAllowlists2 from "PropsAllowlists" /* 1664 */;
import startMapper from "startMapper" /* 1695 */;
import module_1654 from "module_1654" /* 1654 */;

function configureProps() {
  for (const key10008 in PropsAllowlists2.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST) {
    let tmp8 = require;
    if (!(key10008 in PropsAllowlists2.PropsAllowlists.UI_THREAD_PROPS_WHITELIST)) {
      continue;
    } else {
      let tmp = globalThis;
      let _HermesInternal = HermesInternal;
      let str = "` was whitelisted both as UI and native prop. Please remove it from one of the lists.";
      let str2 = "Property `";
      let self = this;
      let self2 = this;
      let reanimatedError = new tmp8(1662).ReanimatedError("Property `" + key10008 + "` was whitelisted both as UI and native prop. Please remove it from one of the lists.");
      throw reanimatedError;
    }
  }
  const jsiConfigureProps = startMapper.jsiConfigureProps;
  startMapper;
  const keys = Object.keys(PropsAllowlists2.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  jsiConfigureProps(keys, Object.keys(PropsAllowlists2.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST));
}
let closure_2 = module_1654.shouldBeUseWeb();
const set = new Set();
configureProps();

export { configureProps };
export function addWhitelistedNativeProps(arg0) {
  const length = Object.keys(PropsAllowlists2.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length;
  const obj = {};
  const PropsAllowlists = PropsAllowlists2.PropsAllowlists;
  const merged = Object.assign(PropsAllowlists2.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST = obj;
  if (length !== Object.keys(PropsAllowlists2.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
}
export function addWhitelistedUIProps(arg0) {
  const length = Object.keys(PropsAllowlists2.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length;
  const obj = {};
  const PropsAllowlists = PropsAllowlists2.PropsAllowlists;
  const merged = Object.assign(PropsAllowlists2.PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
  const merged1 = Object.assign(arg0);
  PropsAllowlists.UI_THREAD_PROPS_WHITELIST = obj;
  if (length !== Object.keys(PropsAllowlists2.PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
    configureProps();
  }
}
export function configureReanimatedLogger(level) {
  const obj = react_native;
  obj.updateLoggerConfig(level);
  const tmp4 = closure_2;
  if (!tmp4) {
    const tmpResult = startMapper;
    tmpResult.executeOnUIRuntimeSync(react_native.updateLoggerConfig)(level);
  }
}
export function adaptViewConfig(viewConfig) {
  const uiViewClassName = viewConfig.uiViewClassName;
  const validAttributes = viewConfig.validAttributes;
  const obj = set;
  if (!set.has(uiViewClassName)) {
    const obj2 = {};
    const _Object = Object;
    const keys = Object.keys(validAttributes);
    const item = keys.forEach((item) => {
      const tmp3 = item in PropsAllowlists2.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST || item in PropsAllowlists2.PropsAllowlists.UI_THREAD_PROPS_WHITELIST;
      if (!tmp3) {
        obj2[item] = true;
      }
    });
    const _Object2 = Object;
    let tmp3 = obj2;
    const obj3 = {};
    const length = Object.keys(obj2(1664).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length;
    const PropsAllowlists = obj2(1664).PropsAllowlists;
    const merged = Object.assign(obj2(1664).PropsAllowlists.UI_THREAD_PROPS_WHITELIST);
    const merged1 = Object.assign(obj2);
    PropsAllowlists.UI_THREAD_PROPS_WHITELIST = obj3;
    const _Object3 = Object;
    if (length !== Object.keys(obj2(1664).PropsAllowlists.UI_THREAD_PROPS_WHITELIST).length) {
      configureProps();
    }
    obj.add(uiViewClassName);
  }
}
