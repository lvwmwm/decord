// Module ID: 18695
// Function ID: 18696
// Name: ConjureTemplates
// Dependencies: [7563, 1112, 4192, 2]
// Exports: conjureTemplates, startConjureTemplateProject, templateImportMessage

// Module 18695 (ConjureTemplates)
import intl7 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7563 */;
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
  const obj = { id: "moderation-bot", name: intl.string(_modDef4192.lGLnE8), description: intl2.string(_modDef4192["pAC6k/"]), wizard: true };
  intl = intl7.intl;
  intl2 = intl7.intl;
  const items = [obj, , ];
  const obj2 = { id: "feature-showcase", name: intl3.string(_modDef4192.uJKQTs), description: intl4.string(_modDef4192["+dKy/B"]) };
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = obj2;
  const obj3 = { id: "rust-sphere", name: intl5.string(_modDef4192.iF5Oru), description: intl6.string(_modDef4192.NbDDO6) };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  items[2] = obj3;
  return items;
}
export function templateImportMessage(templateName) {
  const intl = intl7.intl;
  const obj = { templateName };
  return intl.formatToPlainString(_modDef4192["0PQip6"], obj);
}
export function startConjureTemplateProject(arg0, name) {
  name = name.name;
  const intl = intl7.intl;
  const obj = { templateId: name.id };
  sendUserMessage(arg0, intl.formatToPlainString(_modDef4192["0PQip6"], { templateName: name }), undefined, obj);
}
