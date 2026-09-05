// Module ID: 11792
// Function ID: 11793
// Name: showModal
// Dependencies: [7324, 4763, 11793, 1896, 573, 2]

// Module 11792 (showModal)
import dispatcherDefault from "dispatcher" /* 573 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import mapDefault from "map" /* 7324 */;

require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
const merged = Object.assign(mapDefault);
obj.showModal = function showModal(code) {
  let obj = _modDef4763;
  obj = { code };
  obj.pushLazy(asyncRequireImpl(11793, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  dispatcherDefault.dispatch(obj);
  const obj3 = dispatcherDefault;
  const guildTemplate = mapDefault.resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  _modDef4763.popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = _modDef4763;
  dispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("set").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
