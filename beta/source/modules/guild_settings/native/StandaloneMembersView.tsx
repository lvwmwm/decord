// Module ID: 16219
// Function ID: 16220
// Name: StandaloneMembersView
// Dependencies: [19, 21, 1485, 1613, 9048, 5936, 1115, 16220, 11314, 11328, 11330, 6421, 2]
// Exports: default

// Module 16219 (StandaloneMembersView)
import Fragment from "Fragment" /* 21 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 11314 */;
import KickConfirmDefault from "KickConfirm" /* 11328 */;
import BanConfirmDefault from "BanConfirm" /* 11330 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 16220 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

const jsx = Fragment.jsx;
const constants = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const result = size.fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default function StandaloneMembersView(guildId) {
  let obj3;
  let obj6;
  guildId = guildId.guildId;
  let obj2;
  let obj = guildId(obj2[2]);
  importDefault = obj.useNavigation();
  const items = [guildId];
  const bottom = require("useSafeAreaInsets")().bottom;
  const effect = react.useEffect(() => {
    const obj = GuildSettingsActionCreatorsDefault;
    obj.init(guildId);
  }, items);
  obj2 = { contentContainerStyle: obj3 };
  const obj4 = {};
  obj3 = { paddingBottom: 16 + bottom };
  const MAIN = constants.MAIN;
  const obj5 = {
    headerLeft: obj6.getHeaderCloseButton(() => navigation.goBack()),
    headerTitle() {
      const NavigatorHeader = guildId(obj2[5]).NavigatorHeader;
      const intl = guildId(obj2[6]).intl;
      return <NavigatorHeader title={intl.string(guildId(obj2[6]).t["9Oq93m"])} />;
    },
    render() {
      return jsx(GuildSettingsModalMembersWithTabsDefault, { guildId });
    }
  };
  obj4[MAIN] = obj5;
  obj4[constants.MEMBER_EDIT] = {
    render(arg0) {
      const GuildSettingsModalMemberEditScene = GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      return <GuildSettingsModalMemberEditScene guildId={guildId} />;
    }
  };
  obj4[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      KickConfirmDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      return <tmp guildId={guildId} />;
    }
  };
  obj4[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      BanConfirmDefault;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      return <tmp guildId={guildId} />;
    }
  };
  obj6 = guildId(obj2[5]);
  const Navigator = guildId(obj2[11]).Navigator;
  let intl = guildId(obj2[6]).intl;
  return <Navigator screens={obj4} initialRouteName={constants.MAIN} headerBackTitle={intl.string(guildId(obj2[6]).t["13/7kX"])} />;
};
