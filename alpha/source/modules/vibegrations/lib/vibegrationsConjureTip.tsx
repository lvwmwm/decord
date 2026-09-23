// Module ID: 17014
// Function ID: 17015
// Name: vibegrationsConjureTip
// Dependencies: [510, 2]
// Exports: markVibegrationsConjureTipShown, markVibegrationsTemplateConjured, shouldShowVibegrationsConjureTip

// Module 17014 (vibegrationsConjureTip)
import Storage2 from "Storage" /* 510 */;
import size from "module_2" /* 2 */;

let c2 = "VibegrationsConjureTip:shown";
let c3 = null;
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsConjureTip.tsx");

export function markVibegrationsTemplateConjured(arg0) {
  c3 = arg0;
}
export const shouldShowVibegrationsConjureTip = function shouldShowVibegrationsConjureTip(arg0) {
  let tmp = c3 === arg0;
  if (tmp) {
    const Storage = Storage2.Storage;
    tmp = true !== Storage.get(c2);
  }
  return tmp;
};
export const markVibegrationsConjureTipShown = function markVibegrationsConjureTipShown() {
  c3 = null;
  const Storage = Storage2.Storage;
  const result = Storage.set(c2, true);
};
