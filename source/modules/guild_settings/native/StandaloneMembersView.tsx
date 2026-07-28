// Module ID: 15405
// Function ID: 117275
// Name: StandaloneMembersView
// Dependencies: [31, 33, 1456, 1557, 8280, 5121, 1212, 15406, 11003, 11016, 11018, 5552, 2]
// Exports: default

// Module 15405 (StandaloneMembersView)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_5 = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const result = require("useNavigation").fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default function StandaloneMembersView(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(1456);
  const importDefault = obj.useNavigation();
  const items = [guildId];
  const effect = React.useEffect(() => {
    navigation(8280).init(guildId);
  }, items);
  obj = { paddingBottom: 16 + importDefault(1557)().bottom };
  const dependencyMap = { contentContainerStyle: obj };
  obj = {};
  const obj1 = {
    headerLeft: guildId(5121).getHeaderCloseButton(() => navigation.goBack()),
    headerTitle() {
      const obj = {};
      const intl = guildId(1212).intl;
      obj.title = intl.string(guildId(1212).t["9Oq93m"]);
      return outer1_4(guildId(5121).NavigatorHeader, obj);
    },
    render() {
      return outer1_4(navigation(15406), { guildId });
    }
  };
  obj[constants.MAIN] = obj1;
  obj[constants.MEMBER_EDIT] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return outer1_4(guildId(11003).GuildSettingsModalMemberEditScene, { guildId });
    }
  };
  obj[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return outer1_4(navigation(11016), { guildId });
    }
  };
  obj[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return outer1_4(navigation(11018), { guildId });
    }
  };
  const obj2 = { screens: obj, initialRouteName: constants.MAIN };
  let intl = guildId(1212).intl;
  obj2.headerBackTitle = intl.string(guildId(1212).t["13/7kX"]);
  return jsx(guildId(5552).Navigator, { screens: obj, initialRouteName: constants.MAIN });
};
