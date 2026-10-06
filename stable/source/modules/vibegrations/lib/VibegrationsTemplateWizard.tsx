// Module ID: 16253
// Function ID: 16254
// Name: VibegrationsTemplateWizard
// Dependencies: [1127, 3718, 5371, 2]
// Exports: canLeaveVibegrationsWizardQuestion, formatVibegrationsWizardAnswers, isVibegrationsWizardComplete, latestVibegrationsIntake, vibegrationsTemplateStartMessage, vibegrationsTemplateWizardGuilds, vibegrationsTemplateWizardSteps, vibegrationsWizardIntro, vibegrationsWizardNeedsServerStep, vibegrationsWizardQuestions, vibegrationsWizardServerCopy

// Module 16253 (VibegrationsTemplateWizard)
import intl3 from "intl" /* 1127 */;
import _modDef3718 from "module_3718" /* 3718 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5371 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTemplateWizard.tsx");

export const vibegrationsWizardNeedsServerStep = function vibegrationsWizardNeedsServerStep(guildId, stateFromStores) {
  let closure_0 = guildId;
  return !stateFromStores.some((id) => id.id === guildId);
};
export const vibegrationsTemplateWizardSteps = function vibegrationsTemplateWizardSteps(result2, first1) {
  let items1;
  const obj = { length: Math.max(1, result2.length) };
  const arr = Array.from(obj, (arg0, index) => ({ kind: "question", index }));
  const tmp3 = first1;
  if (tmp3) {
    const items = ["about", "server"];
    HermesBuiltin.arraySpread(items, arr, 2);
    items1 = items;
  } else {
    items1 = ["about"];
    HermesBuiltin.arraySpread(items1, arr, 1);
  }
  return items1;
};
export const canLeaveVibegrationsWizardQuestion = function canLeaveVibegrationsWizardQuestion(result2, arg1) {
  let tmp = null != result2;
  if (tmp) {
    let tmp2 = true === result2.optional;
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
export const vibegrationsTemplateStartMessage = function vibegrationsTemplateStartMessage(name) {
  const intl = intl3.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { templateName: name, locale: intl3.intl.currentLocale };
  const v4lZNuo = _modDef3718["4lZNuo"];
  return formatToPlainString(v4lZNuo, obj);
};
export const vibegrationsTemplateWizardGuilds = function vibegrationsTemplateWizardGuilds(guildsArray, VibegrationsTemplateWizardSheet) {
  let closure_0 = VibegrationsTemplateWizardSheet;
  const found = guildsArray.filter((item) => {
    const obj = VibegrationsUtils;
    return obj.canStartVibegrationsProject(item, VibegrationsTemplateWizardSheet);
  });
  return found.sort((name, name2) => {
    name = name.name;
    return name.localeCompare(name2.name);
  });
};
export const latestVibegrationsIntake = function latestVibegrationsIntake(messages) {
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
export const vibegrationsWizardIntro = function vibegrationsWizardIntro(stateFromStores1) {
  let points;
  let tmp = null;
  if (null != stateFromStores1) {
    let obj = {
      lead: stateFromStores1.intro.lead,
      points: points.map((title) => {
          let obj3;
          let str;
          const obj = { title: title.title, icon: str };
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
export const vibegrationsWizardServerCopy = function vibegrationsWizardServerCopy(stateFromStores1) {
  let intl;
  let intl2;
  let server;
  if (stateFromStores1 != null) {
    server = stateFromStores1.server;
  }
  if (server == null) {
    const obj = { title: intl.string(_modDef3718.WQCnSf), hint: intl2.string(_modDef3718.KLTQfQ) };
    intl = intl3.intl;
    intl2 = intl3.intl;
    server = obj;
  }
  return server;
};
export const vibegrationsWizardQuestions = function vibegrationsWizardQuestions(stateFromStores1) {
  let questions;
  if (stateFromStores1 != null) {
    questions = stateFromStores1.questions;
  }
  if (questions == null) {
    questions = [];
  }
  return questions;
};
export const isVibegrationsWizardComplete = function isVibegrationsWizardComplete(result2, first3) {
  let tmp = result2.length > 0 && result2.every((optional, index) => {
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
export const formatVibegrationsWizardAnswers = function formatVibegrationsWizardAnswers(arr, arg1) {
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
