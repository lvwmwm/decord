// Module ID: 12780
// Function ID: 12781
// Name: filters
// Dependencies: [12781, 12785, 12786, 12777, 12773]
// Exports: compilePseudoSelector

// Module 12780 (filters)
import _mod12773 from "module_12773" /* 12773 */;
import PLACEHOLDER_ELEMENT from "PLACEHOLDER_ELEMENT" /* 12777 */;

const require = globalThis.__r;


export const filters = require("module_12781").filters;
export const pseudos = require("pseudos").pseudos;
export const aliases = require("aliases").aliases;
export function compilePseudoSelector(arg0, type, pseudos, arg3, arg4) {
  let data;
  let name;
  let closure_0 = arg0;
  let closure_1 = pseudos;
  ({ name, data } = type);
  if (Array.isArray(data)) {
    const tmp32 = require;
    if (name in PLACEHOLDER_ELEMENT.subselects) {
      const subselects2 = tmp32(12777).subselects;
      return subselects2[name](arg0, data, pseudos, arg3, arg4);
    } else {
      const _Error3 = Error;
      const concat3 = "Unknown pseudo-class :".concat;
      const combined = "Unknown pseudo-class :".concat(name, "(");
      const self5 = this;
      const self6 = this;
      const error = new Error(combined.concat(data, ")"));
      throw error;
    }
  } else {
    pseudos = pseudos.pseudos;
    let tmp = null;
    let tmp2;
    if (null !== pseudos) {
      if (undefined !== pseudos) {
        tmp2 = pseudos[name];
      }
    }
    let closure_3 = tmp2;
    let tmp3 = tmp2;
    if (typeof tmp2 !== "string") {
      tmp3 = require("aliases").aliases[name];
    }
    if (typeof tmp3 === "string") {
      if (null != data) {
        const _Error2 = Error;
        const concat2 = "Pseudo ".concat;
        const self3 = this;
        const self4 = this;
        const error1 = new Error("Pseudo ".concat(name, " doesn't have any arguments"));
        throw error1;
      } else {
        const parsed = _mod12773.parse(tmp3);
        const subselects = PLACEHOLDER_ELEMENT.subselects;
        return subselects.is(arg0, parsed, pseudos, arg3, arg4);
      }
    } else if (typeof tmp2 === "function") {
      require("pseudos").verifyPseudoArgs(tmp2, name, data, 1);
      return (arg0) => {
        const tmp = closure_3(arg0, data) && closure_0(arg0);
        return tmp;
      };
    } else if (name in require("module_12781").filters) {
      const filters = tmp44(12781).filters;
      return filters[name](arg0, data, pseudos, arg3);
    } else if (name in require("pseudos").pseudos) {
      const tmp6 = require("pseudos").pseudos[name];
      let closure_4 = tmp6;
      require("pseudos").verifyPseudoArgs(tmp6, name, data, 2);
      return (arg0) => {
        const tmp = closure_4(arg0, closure_1, data) && closure_0(arg0);
        return tmp;
      };
    } else {
      const _Error = Error;
      const concat = "Unknown pseudo-class :".concat;
      const self = this;
      const self2 = this;
      const error2 = new Error("Unknown pseudo-class :".concat(name));
      throw error2;
    }
  }
}
