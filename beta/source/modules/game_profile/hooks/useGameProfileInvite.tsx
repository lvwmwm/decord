// Module ID: 8168
// Function ID: 8169
// Name: useGameProfileInvite
// Dependencies: [5, 19, 2001, 2047, 4817, 1074, 8142, 504, 1091, 7826, 6727, 2]
// Exports: default, hasGameProfileDiscordWebsite, preloadGameProfileInvite

// Module 8168 (useGameProfileInvite)
import DurationsDefault from "Durations" /* 1091 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7826 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2001 */;
import GuildMembershipStore from "GuildMembershipStore" /* 2047 */;
import InviteStore from "InviteStore" /* 4817 */;
import Constants from "Constants" /* 1074 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, current;

let QueryIds;
let metroImportDefault;
const f85866 = (category) => category.category === closure_1_0(closure_1_2[6]).ThirdPartyGameApplicationWebsiteCategory.DISCORD;
function isUsableGameProfileInvite(state) {
  let tmp = null != state && state.state !== metroImportDefault.RESOLVING;
  if (tmp) {
    let tmp4 = state.state !== metroImportDefault.EXPIRED && state.state !== tmp3.BANNED;
    if (tmp4) {
      let tmp5 = null != state.expires_at;
      if (tmp5) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _Date2 = Date;
        const date = new Date(state.expires_at);
        const time = date.getTime();
        tmp5 = time <= Date.now();
      }
      tmp4 = !tmp5;
    }
    tmp = tmp4;
  }
  return tmp;
}
({ InviteStates: metroImportDefault, QueryIds } = Constants);
let obj = {
  getQueryId: QueryIds.GAME_PROFILE_INVITE,
  staleAfter: 5 * DurationsDefault.Seconds.MINUTE,
  failureStaleAfter: 5 * DurationsDefault.Seconds.MINUTE,
  get(arg0) {
    if (null == arg0) {
      return null;
    } else {
      const invite = InviteStore.getInvite(arg0);
      let tmp2 = null != invite && invite.state !== metroImportDefault.RESOLVING;
      if (tmp2) {
        let tmp4 = invite.state !== metroImportDefault.EXPIRED && invite.state !== tmp3.BANNED;
        if (tmp4) {
          let tmp5 = null != invite.expires_at;
          if (tmp5) {
            const _Date = Date;
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const date = new Date(invite.expires_at);
            const time = date.getTime();
            tmp5 = time <= Date.now();
          }
          tmp4 = !tmp5;
        }
        tmp2 = tmp4;
      }
      let tmp9 = null;
      if (tmp2) {
        tmp9 = invite;
      }
      return tmp9;
    }
  },
  load: function() {
    return closure_9(...arguments);
  }
};
const createFetchStore = get_initialized.createFetchStore;
let closure_9 = _asyncToGenerator(async function(arg0, value) {
  let obj2;
  let closure_0 = arg0;
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let closure_2 = tmp;
          let c1 = 0;
          if (null != closure_0) {
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj2.resolveInvite(tmp15, "game_profile"), done: false };
            obj2 = InstantInviteActionCreatorsDefault;
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else if (!closure_130_8(closure_130_6.getInvite(closure_0))) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Failed to resolve game profile invite: " + closure_0);
        throw error;
      }
      c4 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp19) {
      c4 = 3;
      throw tmp19;
    }
  }
});
let closure_10 = createFetchStore(InviteStore, obj);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileInvite.tsx");

export default function useGameProfileInvite(websites, set) {
  let tmp8;
  _require = set;
  const ref = react.useRef(set);
  const items = [set];
  const effect = react.useEffect(() => {
    ref.current = current;
  }, items);
  let found;
  const obj = react;
  if (websites != null) {
    websites = websites.websites;
    if (websites != null) {
      found = websites.find(f85866);
    }
  }
  let arr;
  if (found != null) {
    const str = found.url;
    const parts = str.split("/");
    arr = parts.pop();
  }
  let tmp4 = null;
  if (null != arr) {
    tmp4 = null;
    if ("" !== arr) {
      tmp4 = arr;
    }
  }
  const tmp5 = closure_10(tmp4);
  const data = tmp5.data;
  let isLoading = tmp5.isLoading;
  const error = tmp5.error;
  const items1 = [GuildMembershipStore];
  const items2 = [data];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let id;
    if (data != null) {
      const guild = tmp.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    let isMemberResult = null != id;
    if (isMemberResult) {
      let id1;
      const isMember = GuildMembershipStore.isMember;
      if (data != null) {
        const guild2 = tmp.guild;
        if (guild2 != null) {
          id1 = guild2.id;
        }
      }
      isMemberResult = isMember(id1);
    }
    return isMemberResult;
  });
  const effect1 = obj.useEffect(() => {
    if (null != data) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
  const obj3 = { invite: data, isMember: stateFromStores, isResolving: tmp8 };
  tmp8 = null != tmp4 && null == data;
  if (tmp8) {
    if (!isLoading) {
      isLoading = null == error;
    }
    tmp8 = isLoading;
  }
  return obj3;
};
export const hasGameProfileDiscordWebsite = function hasGameProfileDiscordWebsite(game) {
  let flag;
  if (game != null) {
    const websites = game.websites;
    if (websites != null) {
      flag = websites.some((category) => category.category === require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.DISCORD);
    }
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const preloadGameProfileInvite = function preloadGameProfileInvite(arg0) {
  let closure_0;
  _require = arg0;
  const useGame = require("useGame").useGame;
  let items = [arg0];
  let many = useGame.fetchMany(items);
  many.then(() => {
    const game = GameStore.getGame(closure_0);
    let found;
    if (game != null) {
      const websites = game.websites;
      if (websites != null) {
        found = websites.find(f85866);
      }
    }
    let arr;
    if (found != null) {
      const str = found.url;
      const parts = str.split("/");
      arr = parts.pop();
    }
    let tmp4 = null;
    if (null != arr) {
      tmp4 = null;
      if ("" !== arr) {
        tmp4 = arr;
      }
    }
    if (null != tmp4) {
      const items = [tmp4];
      const many = closure_10.fetchMany(items);
    }
  });
};
