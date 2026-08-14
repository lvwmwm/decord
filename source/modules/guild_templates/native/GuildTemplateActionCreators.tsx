// Module ID: 11258
// Function ID: 11259
// Name: showModal
// Dependencies: [6003, 4572, 11259, 2007, 709, 2]

// Module 11258 (showModal)
import merged from "map";

const require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
obj.showModal = function showModal(code) {
  let obj = importDefault(4572);
  obj = { code };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(11259, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  importDefault(709).dispatch(obj);
  const obj3 = importDefault(709);
  const guildTemplate = importDefault(6003).resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  importDefault(4572).popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = importDefault(4572);
  importDefault(709).dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
