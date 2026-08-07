// Module ID: 11124
// Function ID: 11125
// Name: showModal
// Dependencies: [5879, 4507, 11125, 1988, 709, 2]

// Module 11124 (showModal)
import merged from "map";

const require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
obj.showModal = function showModal(code) {
  let obj = importDefault(4507);
  obj = { code };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(11125, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  importDefault(709).dispatch(obj);
  const obj3 = importDefault(709);
  const guildTemplate = importDefault(5879).resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  importDefault(4507).popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = importDefault(4507);
  importDefault(709).dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
