// Module ID: 10971
// Function ID: 10972
// Name: showModal
// Dependencies: [7287, 5260, 10972, 2007, 709, 2]

// Module 10971 (showModal)
import merged from "map";

const require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
obj.showModal = function showModal(code) {
  let obj = importDefault(5260);
  obj = { code };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(10972, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  importDefault(709).dispatch(obj);
  const obj3 = importDefault(709);
  const guildTemplate = importDefault(7287).resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  importDefault(5260).popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = importDefault(5260);
  importDefault(709).dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
