// Module ID: 12534
// Function ID: 12535
// Name: ConjureTemplateWizard
// Dependencies: [5, 10698, 1128, 3830, 12535, 7345, 2]
// Exports: canLeaveConjureWizardQuestion, conjureTemplateWizardGuilds, conjureTemplateWizardSteps, conjureWizardIntro, conjureWizardQuestions, conjureWizardServerCopy, conjureWizardServerStep, formatConjureWizardAnswers, isConjureWizardComplete, latestConjureIntake, startConjureTemplateWizard

// Module 12534 (ConjureTemplateWizard)
import intl3 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureUtils from "ConjureUtils" /* 7345 */;
import conjureTemplateIntakeRequests from "conjureTemplateIntakeRequests" /* 12535 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10698 */;
import size from "module_2" /* 2 */;

let closure_3, name;

let closure_4;
let hasOwnProperty;
function conjureTemplateStartMessage(templateName) {
  const intl = intl3.intl;
  const formatToPlainString = intl.formatToPlainString;
  obj = { templateName, locale: intl3.intl.currentLocale };
  const prop = _modDef3830["/qSx7+"];
  return formatToPlainString(prop, obj);
}
let obj = function _startConjureTemplateWizard() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    const user = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              value = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: obj3.fetchStoredConjureIntake(closure_0, user.id), done: false };
              obj3 = conjureTemplateIntakeRequests;
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            if (null != value) {
              closure_131_4(closure_0, user.id);
            } else {
              closure_131_5(closure_0, closure_131_6(user.name));
            }
            c5 = 3;
            return { value, done: true };
          }
        } catch (tmp24) {
          c5 = 3;
          throw tmp24;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ prepareTemplate: closure_4, sendUserMessage: hasOwnProperty } = ConjureConnectionStore);
const result = size.fileFinishedImporting("modules/conjure/templates/ConjureTemplateWizard.tsx");

export const conjureWizardServerStep = function conjureWizardServerStep(guildId, stateFromStores) {
  let closure_0 = guildId;
  let str = "none";
  if (0 !== stateFromStores.length) {
    let str2 = "pick";
    if (stateFromStores.some((id) => id.id === guildId)) {
      str2 = "skip";
    }
    str = str2;
  }
  return str;
};
export const conjureTemplateWizardSteps = function conjureTemplateWizardSteps(result1, first1) {
  if ("none" === first1) {
    return ["server"];
  } else {
    let items1;
    const _Array = Array;
    const _Math = Math;
    obj = { length: Math.max(1, result1.length) };
    const fromResult = from(obj, (arg0, index) => ({ kind: "question", index }));
    if ("pick" === first1) {
      const items = ["about", "server"];
      HermesBuiltin.arraySpread(items, fromResult, 2);
      items1 = items;
    } else {
      items1 = ["about"];
      HermesBuiltin.arraySpread(items1, fromResult, 1);
    }
    return items1;
  }
};
export const canLeaveConjureWizardQuestion = function canLeaveConjureWizardQuestion(result1, arg1) {
  let tmp = null != result1;
  if (tmp) {
    let tmp2 = true === result1.optional;
    if (!tmp2) {
      let str = arg1;
      if (arg1 == null) {
        str = "";
      }
      tmp2 = "" !== str.trim();
    }
    tmp = tmp2;
  }
  return tmp;
};
export { conjureTemplateStartMessage };
export const startConjureTemplateWizard = function startConjureTemplateWizard() {
  return obj(...arguments);
};
export const conjureTemplateWizardGuilds = function conjureTemplateWizardGuilds(guildsArray, ConjureTemplateWizardSheet) {
  let closure_0 = ConjureTemplateWizardSheet;
  const found = guildsArray.filter((item) => {
    obj = ConjureUtils;
    return obj.canStartConjureProject(item, ConjureTemplateWizardSheet);
  });
  return found.sort((name, name2) => {
    name = name.name;
    return name.localeCompare(name2.name);
  });
};
export const latestConjureIntake = function latestConjureIntake(messages) {
  let tmp2;
  let diff = messages.length - 1;
  if (0 <= diff) {
    while (true) {
      tmp2 = messages[diff];
      if ("assistant" === tmp2.role) {
        if (null != tmp2.intake) {
          break;
        }
      }
      diff = diff - 1;
    }
    return tmp2.intake;
  }
  return null;
};
export const conjureWizardIntro = function conjureWizardIntro(stateFromStores1) {
  let points;
  let tmp = null;
  if (null != stateFromStores1) {
    obj = {
      lead: stateFromStores1.intro.lead,
      points: points.map((title) => {
          let obj3;
          let str;
          obj = { title: title.title, icon: str };
          if (null != title.subtext) {
            obj3 = { subtext: title.subtext };
            const obj2 = { subtext: title.subtext };
          } else {
            obj3 = {};
          }
          const merged = Object.assign(obj3);
          str = title.icon;
          if (str == null) {
            str = "shield";
          }
          return obj;
        })
    };
    points = stateFromStores1.intro.points;
    tmp = obj;
  }
  return tmp;
};
export const conjureWizardServerCopy = function conjureWizardServerCopy(stateFromStores1) {
  let intl;
  let intl2;
  let server;
  if (stateFromStores1 != null) {
    server = stateFromStores1.server;
  }
  if (server == null) {
    obj = { title: intl.string(_modDef3830.vcxYIA), hint: intl2.string(_modDef3830.auUHPZ) };
    intl = intl3.intl;
    intl2 = intl3.intl;
    server = obj;
  }
  return server;
};
export const conjureWizardQuestions = function conjureWizardQuestions(stateFromStores1) {
  let questions;
  if (stateFromStores1 != null) {
    questions = stateFromStores1.questions;
  }
  if (questions == null) {
    questions = [];
  }
  return questions;
};
export const isConjureWizardComplete = function isConjureWizardComplete(result1, first3) {
  let tmp = result1.length > 0 && result1.every((optional, index) => {
    let tmp = true === optional.optional;
    if (!tmp) {
      let str = first3[index];
      if (str == null) {
        str = "";
      }
      tmp = "" !== str.trim();
    }
    return tmp;
  });
  return tmp;
};
export const formatConjureWizardAnswers = function formatConjureWizardAnswers(arr, arg1) {
  let closure_0 = arg1;
  const items = [];
  const item = arr.forEach((optional, index) => {
    let str = closure_0[index];
    if (str == null) {
      str = "";
    }
    const trimmed = str.trim();
    const tmp = "" === trimmed && true === optional.optional;
    if (!tmp) {
      const push = items.push;
      const sum = index + 1;
      const title = optional.title;
      const _HermesInternal = HermesInternal;
      if (trimmed.includes("\n")) {
        push(concat(sum, ". ", title, " \u2192"), "\"\"\"", trimmed, "\"\"\"");
      } else {
        push(concat(sum, ". ", title, " \u2192 ", trimmed));
      }
    }
  });
  return items.join("\n");
};
