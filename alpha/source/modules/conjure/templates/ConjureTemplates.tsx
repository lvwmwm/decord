// Module ID: 12951
// Function ID: 12952
// Name: ConjureTemplates
// Dependencies: [10830, 1114, 3865, 2]
// Exports: conjureTemplates, startConjureTemplateProject, templateImportMessage

// Module 12951 (ConjureTemplates)
import intl7 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10830 */;
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
  const obj = { id: "moderation-bot", name: intl.string(_modDef3865.lGLnE8), description: intl2.string(_modDef3865["pAC6k/"]), wizard: true };
  intl = intl7.intl;
  intl2 = intl7.intl;
  const items = [obj, , ];
  const obj2 = { id: "feature-showcase", name: intl3.string(_modDef3865.uJKQTs), description: intl4.string(_modDef3865["+dKy/B"]) };
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = obj2;
  const obj3 = { id: "rust-sphere", name: intl5.string(_modDef3865.iF5Oru), description: intl6.string(_modDef3865.NbDDO6) };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  items[2] = obj3;
  return items;
}
export function templateImportMessage(templateName) {
  const intl = intl7.intl;
  const obj = { templateName };
  return intl.formatToPlainString(_modDef3865["0PQip6"], obj);
}
export function startConjureTemplateProject(arg0, name) {
  name = name.name;
  const intl = intl7.intl;
  const obj = { templateId: name.id };
  sendUserMessage(arg0, intl.formatToPlainString(_modDef3865["0PQip6"], { templateName: name }), undefined, obj);
}
