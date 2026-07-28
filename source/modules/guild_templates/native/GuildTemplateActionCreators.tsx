// Module ID: 10961
// Function ID: 85006
// Name: showModal
// Dependencies: [7666, 4372, 10962, 1935, 686, 2]

// Module 10961 (showModal)
import merged from "map";

const require = arg1;
let obj = {};
obj["showModal"] = function showModal(code) {
  let obj = importDefault(4372);
  obj = { code };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(10962, dependencyMap.paths), obj, "GUILD_TEMPLATE_MODAL_KEY");
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  importDefault(686).dispatch(obj);
  const obj3 = importDefault(686);
  const guildTemplate = importDefault(7666).resolveGuildTemplate(code);
};
obj["hideModal"] = function hideModal() {
  importDefault(4372).popWithKey("GUILD_TEMPLATE_MODAL_KEY");
  const obj = importDefault(4372);
  importDefault(686).dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
