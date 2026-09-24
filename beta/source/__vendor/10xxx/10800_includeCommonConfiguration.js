// Module ID: 10800
// Function ID: 10801
// Name: includeCommonConfiguration
// Dependencies: [10801, 10802, 10797, 10803, 10804, 10805, 10806]
// Exports: includeCommonConfiguration

// Module 10800 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10797 */;
import _mod10801 from "module_10801" /* 10801 */;
import _mod10802 from "module_10802" /* 10802 */;
import _mod10803 from "module_10803" /* 10803 */;
import _mod10804 from "module_10804" /* 10804 */;
import _mod10805 from "module_10805" /* 10805 */;
import _mod10806 from "module_10806" /* 10806 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
fn(_mod10801);
const regExp = fn(_mod10802);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10803 = fn(_mod10803);
fn(_mod10804);
fn(_mod10805);
const _isNativeReflectConstruct = fn(_mod10806);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  parsers.unshift(new _isNativeReflectConstruct.default());
  const refiners = parsers.refiners;
  const _default = new _isNativeReflectConstruct.default();
  refiners.unshift(new _isNativeReflectConstruct.default());
  const refiners1 = parsers.refiners;
  const _default1 = new _isNativeReflectConstruct.default();
  refiners1.unshift(new regExp.default());
  const refiners2 = parsers.refiners;
  const _default2 = new regExp.default();
  refiners2.unshift(new OverlapRemovalRefiner.default());
  const refiners3 = parsers.refiners;
  const _default3 = new OverlapRemovalRefiner.default();
  refiners3.push(new regExp.default());
  const refiners4 = parsers.refiners;
  const _default4 = new regExp.default();
  refiners4.push(new OverlapRemovalRefiner.default());
  const refiners5 = parsers.refiners;
  const _default5 = new OverlapRemovalRefiner.default();
  refiners5.push(new module_10803.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10803.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
