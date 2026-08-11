// Module ID: 11196
// Function ID: 11197
// Name: showModal
// Dependencies: [5941, 4509, 11197, 2007, 709, 2]

// Module 11196 (showModal)
import merged from "map";

const require = arg1;
const GUILD_TEMPLATE_MODAL_KEY = "GUILD_TEMPLATE_MODAL_KEY";
let obj = {};
obj.showModal = function showModal(code) {
  let obj = importDefault(4509);
  obj = { code };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(11197, dependencyMap.paths), obj, GUILD_TEMPLATE_MODAL_KEY);
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  importDefault(709).dispatch(obj);
  const obj3 = importDefault(709);
  const guildTemplate = importDefault(5941).resolveGuildTemplate(code);
};
obj.hideModal = function hideModal() {
  importDefault(4509).popWithKey(GUILD_TEMPLATE_MODAL_KEY);
  const obj = importDefault(4509);
  importDefault(709).dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
