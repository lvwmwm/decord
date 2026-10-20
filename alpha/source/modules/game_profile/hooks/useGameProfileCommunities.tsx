// Module ID: 9436
// Function ID: 9437
// Name: useGameProfileCommunities
// Dependencies: [5, 2022, 9437, 504, 9438, 1104, 2]

// Module 9436 (useGameProfileCommunities)
import DurationsDefault from "Durations" /* 1104 */;
import DiscoverableGuildsActionCreators from "DiscoverableGuildsActionCreators" /* 9438 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameStore from "GameStore" /* 2022 */;
import DiscoverableGuildsStore from "DiscoverableGuildsStore" /* 9437 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

let c1, c2;

function getCommunityGuildIds(gameId) {
  const game = GameStore.getGame(gameId);
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
  getQueryId(gameId) {
    const game = GameStore.getGame(gameId);
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
      combined = "game-community-guilds/" + gameId;
    }
    return combined;
  },
  get(gameId) {
    const getGuilds = DiscoverableGuildsStore.getGuilds;
    const game = GameStore.getGame(gameId);
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
      return { value: "IconComponent", done: null };
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
      return { value: "IconComponent", done: null };
    } catch (tmp8) {
      c1 = 3;
      throw tmp8;
    }
  }
});
const fetchStore = createFetchStore(DiscoverableGuildsStore, obj);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileCommunities.tsx");

export default fetchStore;
