// Module ID: 10933
// Function ID: 85035
// Name: showModal
// Dependencies: []

// Module 10933 (showModal)
const obj = {};
const merged = Object.assign(importDefault(dependencyMap[0]));
obj["showModal"] = function showModal(code) {
  let obj = importDefault(dependencyMap[1]);
  obj = { code };
  obj.pushLazy(arg1(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), obj, "GUILD_TEMPLATE_MODAL_KEY");
  obj = { type: "GUILD_TEMPLATE_MODAL_SHOW", code };
  importDefault(dependencyMap[4]).dispatch(obj);
  const obj3 = importDefault(dependencyMap[4]);
  const guildTemplate = importDefault(dependencyMap[0]).resolveGuildTemplate(code);
};
obj["hideModal"] = function hideModal() {
  importDefault(dependencyMap[1]).popWithKey("GUILD_TEMPLATE_MODAL_KEY");
  const obj = importDefault(dependencyMap[1]);
  importDefault(dependencyMap[4]).dispatch({ type: "GUILD_TEMPLATE_MODAL_HIDE" });
};
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_templates/native/GuildTemplateActionCreators.tsx");

export default obj;
