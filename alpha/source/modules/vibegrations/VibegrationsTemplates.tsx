// Module ID: 16555
// Function ID: 16556
// Name: VibegrationsTemplates
// Dependencies: [12904, 1126, 3723, 2]
// Exports: startVibegrationsTemplateProject, templateImportMessage, vibegrationsTemplates

// Module 16555 (VibegrationsTemplates)
import intl9 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12904 */;
import size from "module_2" /* 2 */;

const sendUserMessage = VibegrationsConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/vibegrations/VibegrationsTemplates.tsx");

export const VIBEGRATIONS_TEMPLATE_IDS = ["moderation-bot", "feature-showcase", "collaborative-whiteboard", "rust-sphere"];
export const vibegrationsTemplates = function vibegrationsTemplates() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  const obj = { id: "moderation-bot", name: intl.string(_modDef3723.idRAwG), description: intl2.string(_modDef3723["oP90O/"]), wizard: true };
  intl = intl9.intl;
  intl2 = intl9.intl;
  const items = [obj, , , ];
  const obj2 = { id: "feature-showcase", name: intl3.string(_modDef3723.BLDsiz), description: intl4.string(_modDef3723.jK1PL5) };
  intl3 = intl9.intl;
  intl4 = intl9.intl;
  items[1] = obj2;
  const obj3 = { id: "collaborative-whiteboard", name: intl5.string(_modDef3723["+abXa8"]), description: intl6.string(_modDef3723.OZYPMR) };
  intl5 = intl9.intl;
  intl6 = intl9.intl;
  items[2] = obj3;
  const obj4 = { id: "rust-sphere", name: intl7.string(_modDef3723.ieAgex), description: intl8.string(_modDef3723["5yvj+f"]) };
  intl7 = intl9.intl;
  intl8 = intl9.intl;
  items[3] = obj4;
  return items;
};
export const templateImportMessage = function templateImportMessage(templateName) {
  const intl = intl9.intl;
  const obj = { templateName };
  return intl.formatToPlainString(_modDef3723["9D9L0S"], obj);
};
export const startVibegrationsTemplateProject = function startVibegrationsTemplateProject(arg0, name) {
  name = name.name;
  const intl = intl9.intl;
  const obj = { templateId: name.id };
  sendUserMessage(arg0, intl.formatToPlainString(_modDef3723["9D9L0S"], { templateName: name }), undefined, obj);
};
