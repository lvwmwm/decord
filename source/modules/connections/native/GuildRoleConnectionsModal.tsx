// Module ID: 9982
// Function ID: 77189
// Dependencies: []

// Module 9982
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const onClose = guildId.onClose;
  const importDefault = onClose;
  const items = [guildId, onClose];
  const screens = importAllResult.useMemo(() => function getScreens(guildId, onClose) {
    let obj = {};
    obj = {};
    const intl = guildId(closure_2[2]).intl;
    obj.title = intl.string(guildId(closure_2[2]).t.ghtnss);
    obj.headerLeft = function headerLeft() {
      return null;
    };
    obj.headerRight = function headerRight() {
      const obj = { source: arg1(closure_2[4]), onPress: arg1 };
      const intl = arg0(closure_2[2]).intl;
      obj.accessibilityLabel = intl.string(arg0(closure_2[2]).t.cpT0Cq);
      return callback(arg0(closure_2[3]).HeaderActionButton, obj);
    };
    obj.render = function render() {
      return callback(arg1(closure_2[5]), { guildId: arg0, onCloseModal: arg1 });
    };
    obj["GUILD_ROLE_CONNECTIONS_SCREEN"] = obj;
    return obj;
  }(guildId, onClose), items);
  return jsx(arg1(dependencyMap[6]).Navigator, { screens, initialRouteName: "GUILD_ROLE_CONNECTIONS_SCREEN" });
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModal.tsx");

export default memoResult;
