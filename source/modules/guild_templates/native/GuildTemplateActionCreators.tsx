// Module ID: 10985
// Function ID: 10986
// Name: showModal
// Dependencies: [7689, 4395, 10986, 1959, 709, 2]

// Module 10985 (showModal)
import merged from "map";

const require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
obj.showModal = function showModal(code) {
  let obj = importDefault(4395);
  obj = { code };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(10986, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  importDefault(709).dispatch(obj);
  const obj3 = importDefault(709);
  const guildTemplate = importDefault(7689).resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  importDefault(4395).popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = importDefault(4395);
  importDefault(709).dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
