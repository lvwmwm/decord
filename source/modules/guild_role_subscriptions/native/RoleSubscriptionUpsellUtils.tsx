// Module ID: 9345
// Function ID: 73001
// Dependencies: []

// Module 9345
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    const arg1 = guildId.guildId;
    let obj = importDefault(dependencyMap[2]);
    obj = {
      importer() {
        return guildId(paths[4])(paths[3], paths.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj["guildId"] = closure_0;
            return callback(closure_0, obj);
          };
        });
      }
    };
    obj.openLazy(obj);
  }
};
