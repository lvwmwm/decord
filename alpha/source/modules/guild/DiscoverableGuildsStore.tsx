// Module ID: 9425
// Function ID: 9426
// Name: DiscoverableGuildsStore
// Dependencies: [502, 7394, 504, 1388, 584, 2]

// Module 9425 (DiscoverableGuildsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7394 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let map;

let c3 = 3600000;
const DiscoverableGuildFetchStates = { UNSET: "unset", FETCHING: "fetching", FAILED: "failed", SUCCEEDED: "succeeded" };
const hasOwnProperty = {};
const Store = get_initializedDefault.Store;
class DiscoverableGuildsStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
  }
  getGuild(arg0) {
    let guild;
    if (closure_5[arg0] != null) {
      guild = tmp.guild;
    }
    if (guild == null) {
      guild = null;
    }
    return guild;
  }
  getGuilds(arr) {
    const mapped = arr.map((item) => {
      let guild;
      if (closure_1_5[item] != null) {
        guild = tmp.guild;
      }
      return guild;
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  }
  isFetching(arr) {
    return arr.some((item) => {
      let fetchState;
      if (closure_1_5[item] != null) {
        fetchState = tmp.fetchState;
      }
      return fetchState === constants.FETCHING;
    });
  }
  getStaleGuildIds(arr) {
    let timestamp = arg1;
    if (arg1 === undefined) {
      let tmp2 = globalThis;
      const _Date = Date;
      timestamp = Date.now();
    }
    return arr.filter((item) => {
      let tmp2 = null == tmp || tmp.fetchState === obj.FAILED;
      if (!tmp2) {
        let tmp5 = tmp.fetchState !== obj.FETCHING;
        if (tmp5) {
          tmp5 = null == tmp.fetchedAt || timestamp - tmp.fetchedAt >= c3;
          const tmp6 = null == tmp.fetchedAt || timestamp - tmp.fetchedAt >= c3;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    });
  }
}
const prototype = DiscoverableGuildsStore.prototype;
DiscoverableGuildsStore.displayName = "DiscoverableGuildsStore";
const obj2 = {
  DISCOVERABLE_GUILDS_FETCH_START: function handleFetchStart(arg0) {
    let fetchedAt;
    let obj;
    const iter = arg0.guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = closure_5;
      let tmp4 = closure_5[nextResult];
      let guild;
      let tmp2 = nextResult;
      if (tmp4 != null) {
        guild = tmp4.guild;
      }
      if (guild == null) {
        guild = null;
      }
      obj = { guild, fetchState: obj.FETCHING, fetchedAt };
      let tmp8 = tmp3[tmp2];
      fetchedAt = undefined;
      if (tmp8 != null) {
        fetchedAt = tmp8.fetchedAt;
      }
      if (fetchedAt == null) {
        fetchedAt = null;
      }
      tmp3[nextResult] = obj;
      continue;
    }
  },
  DISCOVERABLE_GUILDS_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let guildIds;
    let guilds;
    let obj;
    ({ guildIds, guilds } = arg0);
    const timestamp = Date.now();
    map = new Map(guilds.map((id) => {
      const items = [id.id, ];
      const obj = GuildDiscoveryUtils;
      items[1] = obj.makeDiscoverableGuild(id);
      return items;
    }));
    const iter = guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = closure_5;
      let value = map.get(nextResult);
      if (value == null) {
        value = null;
      }
      obj = { guild: value, fetchState: obj.SUCCEEDED, fetchedAt: timestamp };
      tmp3[nextResult] = obj;
      continue;
    }
  },
  DISCOVERABLE_GUILDS_FETCH_FAILURE: function handleFetchFailure(arg0) {
    let fetchedAt;
    let obj;
    const iter = arg0.guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = closure_5;
      let tmp4 = closure_5[nextResult];
      let guild;
      let tmp2 = nextResult;
      if (tmp4 != null) {
        guild = tmp4.guild;
      }
      if (guild == null) {
        guild = null;
      }
      obj = { guild, fetchState: obj.FAILED, fetchedAt };
      let tmp8 = tmp3[tmp2];
      fetchedAt = undefined;
      if (tmp8 != null) {
        fetchedAt = tmp8.fetchedAt;
      }
      if (fetchedAt == null) {
        fetchedAt = null;
      }
      tmp3[nextResult] = obj;
      continue;
    }
  }
};
const discoverableGuildsStore = new DiscoverableGuildsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/guild/DiscoverableGuildsStore.tsx");

export default discoverableGuildsStore;
export const DISCOVERABLE_GUILDS_TTL_MS = 3600000;
export { DiscoverableGuildFetchStates };
