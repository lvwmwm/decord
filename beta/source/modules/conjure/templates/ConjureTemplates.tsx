// Module ID: 18663
// Function ID: 18664
// Name: ConjureTemplates
// Dependencies: [6967, 1112, 4190, 2]
// Exports: conjureTemplates, startConjureTemplateProject, templateImportMessage

// Module 18663 (ConjureTemplates)
import intl7 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6967 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/templates/ConjureTemplates.tsx");

export const CONJURE_TEMPLATE_IDS = ["moderation-bot", "feature-showcase", "rust-sphere"];
export function conjureTemplates() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  const obj = { id: "moderation-bot", name: intl.string(_modDef4190.lGLnE8), description: intl2.string(_modDef4190["pAC6k/"]), wizard: true };
  intl = intl7.intl;
  intl2 = intl7.intl;
  const items = [obj, , ];
  const obj2 = { id: "feature-showcase", name: intl3.string(_modDef4190.uJKQTs), description: intl4.string(_modDef4190["+dKy/B"]) };
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = obj2;
  const obj3 = { id: "rust-sphere", name: intl5.string(_modDef4190.iF5Oru), description: intl6.string(_modDef4190.NbDDO6) };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  items[2] = obj3;
  return items;
}
export function templateImportMessage(templateName) {
  const intl = intl7.intl;
  const obj = { templateName };
  return intl.formatToPlainString(_modDef4190["0PQip6"], obj);
}
export function startConjureTemplateProject(arg0, name) {
  name = name.name;
  const intl = intl7.intl;
  const obj = { templateId: name.id };
  sendUserMessage(arg0, intl.formatToPlainString(_modDef4190["0PQip6"], { templateName: name }), undefined, obj);
}
