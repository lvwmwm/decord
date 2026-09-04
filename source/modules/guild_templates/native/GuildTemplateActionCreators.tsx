// Module ID: 11724
// Function ID: 11725
// Name: showModal
// Dependencies: [7262, 4731, 11725, 2008, 706, 2]

// Module 11724 (showModal)
import dispatcherDefault from "dispatcher" /* 706 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;
import mapDefault from "map" /* 7262 */;

require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const merged = Object.assign(mapDefault);
obj.showModal = function showModal(code) {
  let obj = _modDef4731;
  obj = { code };
  obj.pushLazy(asyncRequireImpl(11725, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  dispatcherDefault.dispatch(obj);
  const obj3 = dispatcherDefault;
  const guildTemplate = mapDefault.resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  _modDef4731.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = _modDef4731;
  dispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("set").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
