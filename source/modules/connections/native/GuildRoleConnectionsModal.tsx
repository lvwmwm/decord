// Module ID: 10023
// Function ID: 77436
// Dependencies: [31, 33, 1212, 5788, 7696, 10024, 5517, 2]

// Module 10023
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const items = [guildId, onClose];
  const screens = importAllResult.useMemo(() => (function getScreens(guildId, onClose) {
    let closure_0 = guildId;
    let closure_1 = onClose;
    let obj = {};
    obj = {};
    let intl = guildId(outer2_2[2]).intl;
    obj.title = intl.string(guildId(outer2_2[2]).t.ghtnss);
    obj.headerLeft = function headerLeft() {
      return null;
    };
    obj.headerRight = function headerRight() {
      const obj = { source: onClose(outer3_2[4]), onPress: closure_1 };
      const intl = guildId(outer3_2[2]).intl;
      obj.accessibilityLabel = intl.string(guildId(outer3_2[2]).t.cpT0Cq);
      return outer3_4(guildId(outer3_2[3]).HeaderActionButton, obj);
    };
    obj.render = function render() {
      return outer3_4(onClose(outer3_2[5]), { guildId: closure_0, onCloseModal: closure_1 });
    };
    obj["GUILD_ROLE_CONNECTIONS_SCREEN"] = obj;
    return obj;
  })(guildId, onClose), items);
  return jsx(guildId(5517).Navigator, { screens, initialRouteName: "GUILD_ROLE_CONNECTIONS_SCREEN" });
});
const result = require("getSystemLocale").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModal.tsx");

export default memoResult;
