// Module ID: 15161
// Function ID: 114346
// Name: StandaloneMembersView
// Dependencies: []
// Exports: default

// Module 15161 (StandaloneMembersView)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default function StandaloneMembersView(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let obj = arg1(closure_2[2]);
  const importDefault = obj.useNavigation();
  const items = [guildId];
  const effect = React.useEffect(() => {
    navigation(closure_2[4]).init(guildId);
  }, items);
  obj = { paddingBottom: 16 + importDefault(closure_2[3])().bottom };
  closure_2 = { contentContainerStyle: obj };
  obj = {};
  const obj1 = {
    headerLeft: arg1(closure_2[5]).getHeaderCloseButton(() => navigation.goBack()),
    headerTitle() {
      const obj = {};
      const intl = guildId(closure_2[6]).intl;
      obj.title = intl.string(guildId(closure_2[6]).t.9Oq93m);
      return callback(guildId(closure_2[5]).NavigatorHeader, obj);
    },
    render() {
      return callback(navigation(closure_2[7]), { guildId });
    }
  };
  obj[constants.MAIN] = obj1;
  obj[constants.MEMBER_EDIT] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(closure_2);
      return callback(guildId(closure_2[8]).GuildSettingsModalMemberEditScene, { guildId });
    }
  };
  obj[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(closure_2);
      return callback(navigation(closure_2[9]), { guildId });
    }
  };
  obj[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(closure_2);
      return callback(navigation(closure_2[10]), { guildId });
    }
  };
  const obj2 = { screens: obj, initialRouteName: constants.MAIN };
  const intl = arg1(closure_2[6]).intl;
  obj2.headerBackTitle = intl.string(arg1(closure_2[6]).t.13/7kX);
  return jsx(arg1(closure_2[11]).Navigator, obj2);
};
