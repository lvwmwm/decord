// Module ID: 11065
// Function ID: 11066
// Name: GuildRoleConnectionsModal
// Dependencies: [19, 21, 1115, 6795, 6413, 11066, 6421, 2]

// Module 11065 (GuildRoleConnectionsModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let guildId;

const jsx = Fragment.jsx;
const GUILD_ROLE_CONNECTIONS_SCREEN = "GUILD_ROLE_CONNECTIONS_SCREEN";
const memoResult = react.memo((guildId) => {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const items = [guildId, onClose];
  const memo = react.useMemo(() => {
    let intl;
    let obj = {};
    const obj2 = {
      title: intl.string(intl2.t.ghtnss),
      headerLeft() {
        return null;
      },
      headerRight() {
        let intl;
        const obj = { source: onClose(closure_2_2[4]), onPress, accessibilityLabel: intl.string(guildId(closure_2_2[2]).t.cpT0Cq) };
        const HeaderActionButton = guildId(closure_2_2[3]).HeaderActionButton;
        intl = guildId(closure_2_2[2]).intl;
        return closure_2_4(HeaderActionButton, obj);
      },
      render() {
        const obj = { guildId, onCloseModal };
        return closure_2_4(onClose(closure_2_2[5]), obj);
      }
    };
    intl = intl2.intl;
    obj[GUILD_ROLE_CONNECTIONS_SCREEN] = obj2;
    return obj;
  }, items);
  return jsx(guildId(6421).Navigator, { screens: memo, initialRouteName: GUILD_ROLE_CONNECTIONS_SCREEN });
});
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModal.tsx");

export default memoResult;
