// Module ID: 11242
// Function ID: 11243
// Name: showModal
// Dependencies: [5982, 4550, 11243, 2007, 709, 2]

// Module 11242 (showModal)
import merged from "map";

const require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
obj.showModal = function showModal(code) {
  let obj = importDefault(4550);
  obj = { code };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(11243, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  importDefault(709).dispatch(obj);
  const obj3 = importDefault(709);
  const guildTemplate = importDefault(5982).resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  importDefault(4550).popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = importDefault(4550);
  importDefault(709).dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
