// Module ID: 1686
// Function ID: 1687
// Name: processStyleValue
// Dependencies: [1672]
// Exports: processStylePropInPlace, processStyleValue, warnIgnoredStyleValue

// Module 1686 (processStyleValue)
import ReanimatedLogLevel from "ReanimatedLogLevel" /* 1672 */;

let ignoredValue;
let tmp10;
let tmp11;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const items = [{ code: "(function processStyleValue_Pnpm_processStyleValueTs1(processor,value,context){const normalizedValue=typeof value==='string'?value.trim():value;return processor(normalizedValue,context);})" }];
[tmp2] = items;
function processStyleValue(processPercentage, color, arg2) {
  let trimmed = color;
  if (typeof color === "string") {
    trimmed = color.trim();
  }
  return processPercentage(trimmed, arg2);
}
processStyleValue.__workletHash = 3337966288120;
processStyleValue.__initData = tmp2;
const items1 = [{ code: "(function ignoredValue_Pnpm_processStyleValueTs2(reason){return reason+\"\\nThe value is ignored.\";})" }];
[tmp3] = items1;
const obj = { ignoredValue };
ignoredValue = function ignoredValue(arg0) {
  return "" + arg0 + "\nThe value is ignored.";
};
ignoredValue.__workletHash = 15721835637799;
ignoredValue.__initData = tmp3;
const items2 = [{ code: "(function warnIgnoredStyleValue_Pnpm_processStyleValueTs3(error){let[__DEV__,ERROR_PREFIX,logger,WARN_MESSAGES]=this.__closure;if(__DEV__){const message=error instanceof Error?error.message:String(error);const reason=message.replace(ERROR_PREFIX,'');logger.warn(WARN_MESSAGES.ignoredValue(reason),{strict:true});}})" }, false, "[Reanimated] ", ReanimatedLogLevel.logger, obj];
let c2;
let c3;
[tmp4, tmp5, tmp6, tmp7, tmp8] = items2;
function warnIgnoredStyleValue(message) {
  const tmp = c0;
  if (tmp) {
    let str;
    const _Error = Error;
    if (message instanceof Error) {
      str = message.message;
    } else {
      const _String = String;
      str = String(message);
    }
    logger.warn(_undefined2.ignoredValue(str.replace(c1, "")), { strict: true });
  }
}
const items3 = [tmp5, tmp6, tmp7, tmp8];
warnIgnoredStyleValue.__closure = items3;
warnIgnoredStyleValue.__workletHash = 14348775206721;
warnIgnoredStyleValue.__initData = tmp4;
const items4 = [{ code: "(function processStylePropInPlace_Pnpm_processStyleValueTs4(props,key,processor){let[processStyleValue,warnIgnoredStyleValue]=this.__closure;if(props[key]===null){return;}try{props[key]=processStyleValue(processor,props[key]);}catch(error){warnIgnoredStyleValue(error);delete props[key];}})" }, processStyleValue, warnIgnoredStyleValue];
let c0;
let c1;
[tmp9, tmp10, tmp11] = items4;
function processStylePropInPlace(arg0, arg1, arg2) {
  if (null !== arg0[arg1]) {
    try {
      arg0[arg1] = _undefined(arg2, arg0[arg1]);
    } catch (tmp5) {
      _undefined2(tmp5);
      delete tmp[tmp2];
    }
  }
}
const items5 = [tmp10, tmp11];
processStylePropInPlace.__closure = items5;
processStylePropInPlace.__workletHash = 5925900411783;
processStylePropInPlace.__initData = tmp9;

export { processStyleValue };
export const WARN_MESSAGES = obj;
export { warnIgnoredStyleValue };
export { processStylePropInPlace };
