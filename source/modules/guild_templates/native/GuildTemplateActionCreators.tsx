// Module ID: 10922
// Function ID: 84878
// Name: showModal
// Dependencies: [7630, 4338, 10923, 1935, 686, 2]

// Module 10922 (showModal)
import merged from "map";

const require = arg1;
let obj = {};
obj["showModal"] = function showModal(code) {
  let obj = importDefault(4338);
  obj = { code };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(10923, dependencyMap.paths), obj, "GUILD_TEMPLATE_MODAL_KEY");
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  importDefault(686).dispatch(obj);
  const obj3 = importDefault(686);
  const guildTemplate = importDefault(7630).resolveGuildTemplate(code);
};
obj["hideModal"] = function hideModal() {
  importDefault(4338).popWithKey("GUILD_TEMPLATE_MODAL_KEY");
  const obj = importDefault(4338);
  importDefault(686).dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
