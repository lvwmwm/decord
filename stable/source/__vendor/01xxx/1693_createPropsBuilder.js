// Module ID: 1693
// Function ID: 1694
// Name: createPropsBuilder
// Dependencies: [1681, 1683, 1674]
// Exports: default

// Module 1693 (createPropsBuilder)
import _mod1674 from "module_1674" /* 1674 */;
import ValueProcessorTarget from "ValueProcessorTarget" /* 1681 */;
import processStyleValue from "processStyleValue" /* 1683 */;

let closure_2 = { code: "(function build_Pnpm_createPropsBuilderTs1(props,options){let[ValueProcessorTarget,processedConfig,processStyleValue,warnIgnoredStyleValue,isRecord]=this.__closure;var _options$target;const context={target:(_options$target=options===null||options===void 0?void 0:options.target)!==null&&_options$target!==void 0?_options$target:ValueProcessorTarget.Default};const result={};for(const property in props){const configValue=processedConfig[property];const value=props[property];if(configValue===true){result[property]=value;continue;}if(!configValue||value===undefined){if(options!==null&&options!==void 0&&options.includeUnprocessed){result[property]=value;}continue;}if(value===null){result[property]=null;continue;}let processedValue;try{processedValue=processStyleValue(configValue,value,context);}catch(error){warnIgnoredStyleValue(error);continue;}if(isRecord(processedValue)&&!isRecord(value)){for(const processedKey in processedValue){if(!(processedKey in result)){result[processedKey]=processedValue[processedKey];}}}else{result[property]=processedValue;}}return result;})" };

export default function createPropsBuilder(processConfigValue) {
  let build;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  processConfigValue = processConfigValue.processConfigValue;
  const entries = Object.entries(processConfigValue.config);
  const items = [closure_2, , , , , ];
  const reduced = entries.reduce(function(acc, item) {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    let num = 0;
    if (tmp2) {
      const sum = num + 1;
      while (10 >= sum) {
        if (typeof tmp2 !== "function") {
          if (true !== tmp2) {
            tmp2 = processConfigValue(tmp2, tmp);
            num = sum;
          }
        }
        acc[tmp] = tmp2;
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("[Reanimated] Max process depth for props builder reached for property " + tmp);
      throw error;
    }
    return acc;
  }, {});
  items[1] = ValueProcessorTarget.ValueProcessorTarget;
  items[2] = reduced;
  items[3] = processStyleValue.processStyleValue;
  items[4] = processStyleValue.warnIgnoredStyleValue;
  items[5] = _mod1674.isRecord;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  let obj = { build };
  build = function build(obj, target) {
    target = undefined;
    if (target != null) {
      target = target.target;
    }
    if (target == null) {
      target = _undefined.Default;
    }
    obj = {};
    for (const key10013 in obj) {
      let tmp19 = _undefined2[key10013];
      let tmp20 = obj[key10013];
      if (true !== tmp19) {
        if (tmp19) {
          if (undefined !== tmp20) {
            if (null !== tmp20) {
              let tmp5;
              try {
                tmp5 = _undefined3(tmp19, tmp20, { target });
              } catch (tmp14) {
                let tmp16 = _undefined4(tmp14);
                continue;
              }
              let tmp6 = _undefined5;
              let tmp8 = _undefined5(tmp5);
              if (tmp8) {
                if (!tmp6(tmp20)) {
                  let keys = Object.keys();
                  if (keys === undefined) {
                    continue;
                  } else {
                    let tmp11 = keys[tmp8];
                    while (tmp11 !== undefined) {
                      if (tmp11 in obj) {
                        continue;
                      } else {
                        obj[tmp11] = tmp5[tmp11];
                        continue;
                      }
                      continue;
                    }
                  }
                  continue;
                }
                continue;
              }
              obj[key10013] = tmp5;
              continue;
            } else {
              obj[key10013] = null;
              continue;
            }
            continue;
          }
        }
        let includeUnprocessed;
        if (target != null) {
          includeUnprocessed = target.includeUnprocessed;
        }
        if (!includeUnprocessed) {
          continue;
        } else {
          obj[key10013] = tmp20;
          continue;
        }
        continue;
      } else {
        obj[key10013] = tmp20;
        continue;
      }
      continue;
    }
    return obj;
  };
  const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7];
  build.__closure = items1;
  build.__workletHash = 15451700096909;
  build.__initData = tmp2;
  return obj;
};
