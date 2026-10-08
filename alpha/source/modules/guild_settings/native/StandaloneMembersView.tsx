// Module ID: 16819
// Function ID: 16820
// Name: StandaloneMembersView
// Dependencies: [19, 21, 558, 576, 1502, 1630, 8613, 6203, 1126, 16820, 11444, 11458, 11460, 6679, 2]

// Module 16819 (StandaloneMembersView)
import Fragment from "Fragment" /* 21 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8613 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 11444 */;
import KickConfirmDefault from "KickConfirm" /* 11458 */;
import BanConfirmDefault from "BanConfirm" /* 11460 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 16820 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault, navigation;

const jsx = Fragment.jsx;
const constants = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function StandaloneMembersView(guildId) {
  let closure_2;
  let tmp11;
  let tmp3;
  let tmp4;
  let obj = guildId(576);
  const cResult = obj.c(30);
  guildId = guildId.guildId;
  const obj2 = guildId(1502);
  navigation = obj2.useNavigation();
  const bottom = navigation(1630)().bottom;
  if (cResult[0] !== guildId) {
    class M {
      constructor() {
        const obj = GuildSettingsActionCreatorsDefault;
        obj.init(guildId);
      }
    }
    const items = [guildId];
    cResult[0] = guildId;
    cResult[1] = M;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = M;
  } else {
    class M {
      constructor() {
        const obj = GuildSettingsActionCreatorsDefault;
        obj.init(guildId);
      }
    }
    tmp4 = cResult[2];
  }
  const effect = react.useEffect(tmp3, tmp4);
  const sum = 16 + bottom;
  if (cResult[3] !== sum) {
    class M {
      constructor() {
        const obj = GuildSettingsActionCreatorsDefault;
        obj.init(guildId);
      }
    }
    const obj3 = { paddingBottom: sum };
    tmp8[0] = obj3;
    cResult[3] = sum;
    cResult[4] = tmp8;
  } else {
    class M {
      constructor() {
        const obj = GuildSettingsActionCreatorsDefault;
        obj.init(guildId);
      }
    }
  }
  dependencyMap = tmp7;
  if (cResult[5] !== navigation) {
    class M {
      constructor() {
        const obj = GuildSettingsActionCreatorsDefault;
        obj.init(guildId);
      }
    }
    const headerCloseButton = obj4.getHeaderCloseButton(() => navigation.goBack());
    cResult[5] = navigation;
    cResult[6] = headerCloseButton;
  } else {
    class M {
      constructor() {
        const obj = GuildSettingsActionCreatorsDefault;
        obj.init(guildId);
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        const obj = GuildSettingsActionCreatorsDefault;
        obj.init(guildId);
      }
    }
    cResult[7] = tmp12;
    tmp11 = tmp12;
  } else {
    class M {
      constructor() {
        const obj = GuildSettingsActionCreatorsDefault;
        obj.init(guildId);
      }
    }
  }
  if (cResult[8] === guildId) {
    class M {
      constructor() {
        const obj = GuildSettingsActionCreatorsDefault;
        obj.init(guildId);
      }
    }
    if (cResult[11] === guildId) {
      let tmp15;
      class M {
        constructor() {
          const obj = GuildSettingsActionCreatorsDefault;
          obj.init(guildId);
        }
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return null;
          }
        }
        cResult[14] = R;
        tmp15 = R;
      } else {
        class R {
          constructor() {
            return null;
          }
        }
      }
      if (cResult[15] === guildId) {
        let tmp17;
        class R {
          constructor() {
            return null;
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              return null;
            }
          }
          cResult[18] = S;
          tmp17 = S;
        } else {
          class S {
            constructor() {
              return null;
            }
          }
        }
        if (cResult[19] === guildId) {
          class S {
            constructor() {
              return null;
            }
          }
          if (cResult[22] === tmp16) {
            class S {
              constructor() {
                return null;
              }
            }
          }
          const obj5 = {};
          obj5[constants.MAIN] = tmp13;
          obj5[constants.MEMBER_EDIT] = tmp14;
          obj5[constants.MEMBER_KICK] = tmp16;
          obj5[constants.MEMBER_BAN] = tmp18;
          cResult[22] = tmp16;
          cResult[23] = tmp18;
          cResult[24] = tmp13;
          cResult[25] = tmp14;
          cResult[26] = obj5;
        }
        const obj6 = {
          headerTitle: tmp17,
          render(arg0) {
                  BanConfirmDefault;
                  const merged = Object.assign(arg0);
                  const merged1 = Object.assign(dependencyMap);
                  return <tmp guildId={guildId} />;
                }
        };
        cResult[19] = guildId;
        cResult[20] = tmp7;
        cResult[21] = obj6;
      }
      const obj7 = {
        headerTitle: tmp15,
        render(arg0) {
              KickConfirmDefault;
              const merged = Object.assign(arg0);
              const merged1 = Object.assign(dependencyMap);
              return <tmp guildId={guildId} />;
            }
      };
      cResult[15] = guildId;
      cResult[16] = tmp7;
      cResult[17] = obj7;
    }
    const obj8 = {
      render(arg0) {
          const GuildSettingsModalMemberEditScene = GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene;
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(dependencyMap);
          return <GuildSettingsModalMemberEditScene guildId={guildId} />;
        }
    };
    cResult[11] = guildId;
    cResult[12] = tmp7;
    cResult[13] = obj8;
  }
  const obj9 = {
    headerLeft: tmp9,
    headerTitle: tmp11,
    render() {
      return jsx(GuildSettingsModalMembersWithTabsDefault, { guildId });
    }
  };
  cResult[8] = guildId;
  cResult[9] = tmp9;
  cResult[10] = obj9;
}) : (function StandaloneMembersView(guildId) {
  let obj3;
  let obj6;
  guildId = guildId.guildId;
  let obj2;
  let obj = guildId(obj2[4]);
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
      const NavigatorHeader = guildId(obj2[7]).NavigatorHeader;
      const intl = guildId(obj2[8]).intl;
      return <NavigatorHeader title={intl.string(guildId(obj2[8]).t["9Oq93m"])} />;
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
  obj6 = guildId(obj2[7]);
  const Navigator = guildId(obj2[13]).Navigator;
  let intl = guildId(obj2[8]).intl;
  return <Navigator screens={obj4} initialRouteName={constants.MAIN} headerBackTitle={intl.string(guildId(obj2[8]).t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default tmp2;
