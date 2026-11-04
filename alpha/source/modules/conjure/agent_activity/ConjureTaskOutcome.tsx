// Module ID: 12934
// Function ID: 12935
// Name: ConjureTaskOutcome
// Dependencies: [1113, 3995, 12298, 2]
// Exports: describeTaskOutcome, taskTitle

// Module 12934 (ConjureTaskOutcome)
import intl7 from "intl" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import ConjureDuration from "ConjureDuration" /* 12298 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureTaskOutcome.tsx");

export function taskTitle(task) {
  if (null != task.labelText) {
    let labelText;
    if ("" !== task.labelText) {
      labelText = task.labelText;
    }
    return labelText;
  }
  const intl = intl7.intl;
  labelText = intl.string(_modDef3995.KcFvbo);
}
export function describeTaskOutcome(task) {
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
      return intl6.formatToPlainString(_modDef3995.YrVgOf, obj3);
    } else if ("cancelled" === status) {
      const intl5 = intl7.intl;
      const obj4 = { task: sum };
      return intl5.formatToPlainString(_modDef3995.kWfWa6, obj4);
    } else if ("done" === status) {
      let resultText;
      if (null != task.resultText) {
        if ("" !== task.resultText) {
          resultText = task.resultText;
        }
        return resultText;
      }
      if (null != task.durationMs) {
        const intl4 = intl7.intl;
        const formatToPlainString = intl4.formatToPlainString;
        const obj5 = { task: sum, duration: obj6.describeDuration(task.durationMs) };
        const prop = _modDef3995["++9woZ"];
        obj6 = ConjureDuration;
        resultText = formatToPlainString(prop, obj5);
      } else {
        const intl3 = intl7.intl;
        const obj7 = { task: sum };
        resultText = intl3.formatToPlainString(_modDef3995.nmI9Uh, obj7);
      }
    } else {
      const intl2 = intl7.intl;
      const obj8 = { task: sum };
      return intl2.formatToPlainString(_modDef3995.nmI9Uh, obj8);
    }
  }
  const intl = intl7.intl;
  str2 = intl.string(_modDef3995.KcFvbo);
}
