// Module ID: 1694
// Function ID: 1695
// Name: propsBuilder
// Dependencies: [1695, 1676, 1673]
// Exports: createNativePropsBuilder

// Module 1694 (propsBuilder)
import _mod1673 from "module_1673" /* 1673 */;
import _mod1676 from "module_1676" /* 1676 */;
import createPropsBuilderDefault from "createPropsBuilder" /* 1695 */;

let closure_3 = { code: "(function pnpm_propsBuilderTs1(value,context){let[configValue]=this.__closure;return configValue.process(value,context);})" };
const STYLE_PROPERTIES_CONFIG = _mod1673.STYLE_PROPERTIES_CONFIG;
let obj = {
  config: STYLE_PROPERTIES_CONFIG,
  processConfigValue(arg0) {
    let tmp7;
    let tmp8;
    let tmp = true === arg0;
    if (!tmp) {
      let tmp4;
      const obj = _mod1676;
      const tmp2 = require;
      if (obj.isConfigPropertyAlias(arg0)) {
        tmp4 = config[arg0.as];
      } else {
        const tmp2Result = tmp2(1676);
        if (tmp2Result.hasValueProcessor(arg0)) {
          const items = [closure_3, arg0];
          [tmp7, tmp8] = items;
          function pnpm_propsBuilderTs1(arg0, arg1) {
            return closure_1_0.process(arg0, arg1);
          }
          const items1 = [tmp8];
          pnpm_propsBuilderTs1.__closure = items1;
          pnpm_propsBuilderTs1.__workletHash = 12070742086007;
          pnpm_propsBuilderTs1.__initData = tmp7;
          tmp4 = pnpm_propsBuilderTs1;
        }
      }
      tmp = tmp4;
    }
    return tmp;
  }
};

export function createNativePropsBuilder(config) {
  let obj = {
    config,
    processConfigValue(arg0) {
      let tmp7;
      let tmp8;
      let tmp = true === arg0;
      if (!tmp) {
        let tmp4;
        const obj = _mod1676;
        const tmp2 = require;
        if (obj.isConfigPropertyAlias(arg0)) {
          tmp4 = config[arg0.as];
        } else {
          const tmp2Result = tmp2(1676);
          if (tmp2Result.hasValueProcessor(arg0)) {
            const items = [closure_3, arg0];
            [tmp7, tmp8] = items;
            function pnpm_propsBuilderTs1(arg0, arg1) {
              return closure_1_0.process(arg0, arg1);
            }
            const items1 = [tmp8];
            pnpm_propsBuilderTs1.__closure = items1;
            pnpm_propsBuilderTs1.__workletHash = 12070742086007;
            pnpm_propsBuilderTs1.__initData = tmp7;
            tmp4 = pnpm_propsBuilderTs1;
          }
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  return createPropsBuilderDefault(obj);
}
export const stylePropsBuilder = createPropsBuilderDefault(obj);
