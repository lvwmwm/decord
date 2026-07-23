// Module ID: 10944
// Function ID: 85097
// Name: showModal
// Dependencies: [5718, 4337, 10945, 1934, 686, 2]

// Module 10944 (showModal)
import merged from "map";

const require = arg1;
let obj = {};
obj["showModal"] = function showModal(code) {
  let obj = importDefault(4337);
  obj = { code };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(10945, dependencyMap.paths), obj, "GUILD_TEMPLATE_MODAL_KEY");
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  importDefault(686).dispatch(obj);
  const obj3 = importDefault(686);
  const guildTemplate = importDefault(5718).resolveGuildTemplate(code);
};
obj["hideModal"] = function hideModal() {
  importDefault(4337).popWithKey("GUILD_TEMPLATE_MODAL_KEY");
  const obj = importDefault(4337);
  importDefault(686).dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = require("ConnectedAcceptGuildTemplate").fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
