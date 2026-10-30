// Module ID: 9593
// Function ID: 9594
// Name: useGameProfileCommunities
// Dependencies: [5, 2015, 9594, 504, 9595, 1090, 2]

// Module 9593 (useGameProfileCommunities)
import DurationsDefault from "Durations" /* 1090 */;
import DiscoverableGuildsActionCreators from "DiscoverableGuildsActionCreators" /* 9595 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameStore from "GameStore" /* 2015 */;
import DiscoverableGuildsStore from "DiscoverableGuildsStore" /* 9594 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

let c1, c2;

function getCommunityGuildIds(arg0) {
  const game = GameStore.getGame(arg0);
  let communityGuildIds;
  if (game != null) {
    communityGuildIds = game.communityGuildIds;
  }
  if (communityGuildIds == null) {
    communityGuildIds = closure_4;
  }
  return communityGuildIds;
}
let closure_4 = [];
let obj = {
  getQueryId(arg0) {
    const game = GameStore.getGame(arg0);
    let communityGuildIds;
    if (game != null) {
      communityGuildIds = game.communityGuildIds;
    }
    if (communityGuildIds == null) {
      communityGuildIds = closure_4;
    }
    let combined = null;
    if (communityGuildIds.length > 0) {
      const _HermesInternal = HermesInternal;
      combined = "game-community-guilds/" + arg0;
    }
    return combined;
  },
  get(arg0) {
    const getGuilds = DiscoverableGuildsStore.getGuilds;
    const game = GameStore.getGame(arg0);
    let communityGuildIds;
    if (game != null) {
      communityGuildIds = game.communityGuildIds;
    }
    if (communityGuildIds == null) {
      communityGuildIds = closure_4;
    }
    return getGuilds(communityGuildIds);
  },
  load() {
    return closure_6(...arguments);
  },
  staleAfter: DurationsDefault.Seconds.HOUR,
  failureStaleAfter: DurationsDefault.Seconds.MINUTE
};
const createFetchStore = get_initialized.createFetchStore;
let closure_6 = _asyncToGenerator(async (arg0, value) => {
  let obj2;
  let closure_0 = arg0;
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const arr = getCommunityGuildIds(closure_0);
          if (arr.length > 0) {
            c2 = 1;
            c1 = 1;
            const obj5 = { value: obj2.fetchDiscoverableGuilds(arr), done: false };
            obj2 = DiscoverableGuildsActionCreators;
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp8) {
      c1 = 3;
      throw tmp8;
    }
  }
});
const fetchStore = createFetchStore(DiscoverableGuildsStore, obj);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileCommunities.tsx");

export default fetchStore;
