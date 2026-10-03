// Module ID: 16551
// Function ID: 16552
// Name: VibegrationsLandingModelChoices
// Dependencies: [12908, 6747, 2]
// Exports: landingModelChoices

// Module 16551 (VibegrationsLandingModelChoices)
import VibegrationsTypes from "VibegrationsTypes" /* 6747 */;
import vibegrationsLocalDev from "vibegrationsLocalDev" /* 12908 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsLandingModelChoices.tsx");

export const landingModelChoices = function landingModelChoices() {
  let items;
  let items1;
  let tmp5;
  const obj = vibegrationsLocalDev;
  const result = obj.isVibegrationsLocalDev();
  const VIBEGRATIONS_FALLBACK_MODEL_CHOICES = VibegrationsTypes.VIBEGRATIONS_FALLBACK_MODEL_CHOICES;
  if (result) {
    const obj2 = { main: items, subagent: items1, thinking: VibegrationsTypes.VIBEGRATIONS_FALLBACK_MODEL_CHOICES.thinking };
    items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, VIBEGRATIONS_FALLBACK_MODEL_CHOICES.main, 0);
    HermesBuiltin.arraySpread(items, VibegrationsTypes.VIBEGRATIONS_DEV_FALLBACK_MODEL_CHOICES.main, arraySpreadResult);
    items1 = [];
    const arraySpreadResult5 = HermesBuiltin.arraySpread(items1, VibegrationsTypes.VIBEGRATIONS_FALLBACK_MODEL_CHOICES.subagent, 0);
    HermesBuiltin.arraySpread(items1, VibegrationsTypes.VIBEGRATIONS_DEV_FALLBACK_MODEL_CHOICES.subagent, arraySpreadResult5);
    tmp5 = obj2;
  } else {
    tmp5 = VIBEGRATIONS_FALLBACK_MODEL_CHOICES;
  }
  return tmp5;
};
