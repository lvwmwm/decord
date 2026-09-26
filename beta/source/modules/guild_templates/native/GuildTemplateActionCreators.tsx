// Module ID: 12075
// Function ID: 12076
// Name: guild_templates/GuildTemplateActionCreators
// Dependencies: [7598, 4991, 12076, 1980, 573, 2]

// Module 12075 (guild_templates/GuildTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import GuildTemplateActionCreatorsDefault from "GuildTemplateActionCreators" /* 7598 */;

require = fn;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const GuildTemplateActionCreators = Object.assign(GuildTemplateActionCreatorsDefault);
obj.showModal = function showModal(code) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12076, dependencyMap.paths), { code }, GUILD_TEMPLATE_MODAL_KEY);
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
