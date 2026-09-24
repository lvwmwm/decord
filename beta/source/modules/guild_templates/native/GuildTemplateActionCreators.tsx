// Module ID: 11957
// Function ID: 11958
// Name: guild_templates/GuildTemplateActionCreators
// Dependencies: [7600, 4993, 11958, 1984, 577, 2]

// Module 11957 (guild_templates/GuildTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import GuildTemplateActionCreatorsDefault from "GuildTemplateActionCreators" /* 7600 */;

require = fn;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const GuildTemplateActionCreators = Object.assign(GuildTemplateActionCreatorsDefault);
obj.showModal = function showModal(code) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11958, dependencyMap.paths), { code }, GUILD_TEMPLATE_MODAL_KEY);
  const obj2 = { code };
  DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_SHOW", code });
  const obj4 = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  const guildTemplate = GuildTemplateActionCreatorsDefault.resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  ModalActionCreatorsDefault.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
