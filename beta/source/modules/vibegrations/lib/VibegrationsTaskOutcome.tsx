// Module ID: 16351
// Function ID: 16352
// Name: VibegrationsTaskOutcome
// Dependencies: [1115, 3715, 16350, 2]
// Exports: describeTaskOutcome, taskTitle

// Module 16351 (VibegrationsTaskOutcome)
import intl7 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsDuration from "VibegrationsDuration" /* 16350 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTaskOutcome.tsx");

export const taskTitle = function taskTitle(task) {
  if (null != task.labelText) {
    let labelText;
    if ("" !== task.labelText) {
      labelText = task.labelText;
    }
    return labelText;
  }
  const intl = intl7.intl;
  labelText = intl.string(_modDef3715.MdXWEK);
};
export const describeTaskOutcome = function describeTaskOutcome(task) {
  let obj;
  let obj2;
  let obj6;
  if (null != task.labelText) {
    let str2;
    if ("" !== task.labelText) {
      str2 = task.labelText;
    }
    const items = [str2.charAt(0), str2.charAt(1)];
    [obj, obj2] = items;
    let sum = str2;
    if (obj === obj.toLocaleUpperCase()) {
      sum = str2;
      if (obj2 === obj2.toLocaleLowerCase()) {
        const toLocaleLowerCaseResult = obj.toLocaleLowerCase();
        sum = toLocaleLowerCaseResult + str2.slice(1);
      }
    }
    const status = task.status;
    if ("failed" === status) {
      const intl6 = intl7.intl;
      const obj3 = { task: sum };
      return intl6.formatToPlainString(_modDef3715["5uv8y0"], obj3);
    } else if ("cancelled" === status) {
      const intl5 = intl7.intl;
      const obj4 = { task: sum };
      return intl5.formatToPlainString(_modDef3715["oEzDO/"], obj4);
    } else if ("done" === status) {
      let formatToPlainStringResult;
      if (null != task.durationMs) {
        const intl4 = intl7.intl;
        const formatToPlainString = intl4.formatToPlainString;
        const obj5 = { task: sum, duration: obj6.describeDuration(task.durationMs) };
        const vuv9bT = _modDef3715.vuv9bT;
        obj6 = VibegrationsDuration;
        formatToPlainStringResult = formatToPlainString(vuv9bT, obj5);
      } else {
        const intl3 = intl7.intl;
        const obj7 = { task: sum };
        formatToPlainStringResult = intl3.formatToPlainString(_modDef3715.KS49RN, obj7);
      }
      return formatToPlainStringResult;
    } else {
      const intl2 = intl7.intl;
      const obj8 = { task: sum };
      return intl2.formatToPlainString(_modDef3715.KS49RN, obj8);
    }
  }
  const intl = intl7.intl;
  str2 = intl.string(_modDef3715.MdXWEK);
};
