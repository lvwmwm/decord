// Module ID: 4923
// Function ID: 4924
// Name: EmojiPackStore
// Dependencies: [1258, 4924, 4925, 504, 584, 2]

// Module 4923 (EmojiPackStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DefaultEmojisExperiment2 from "DefaultEmojisExperiment" /* 4924 */;
import emojiPacksFromServer from "emojiPacksFromServer" /* 4925 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import size from "module_2" /* 2 */;

const f94166 = (available) => {
  let found;
  if (available.available) {
    const emojis = available.emojis;
    found = emojis.filter((available) => available.available);
  } else {
    found = [];
  }
  return found;
};
const f94167 = (id) => id.id;
function handleExperimentChange() {
  const DefaultEmojisExperiment = DefaultEmojisExperiment2.DefaultEmojisExperiment;
  enabled = DefaultEmojisExperiment.getConfig({ location: "emoji_pack_store" }, { autoTrackExposure: false }).enabled;
  let flag = enabled !== enabled;
  if (flag) {
    let flatMapResult;
    if (enabled) {
      const packs = obj.packs;
      flatMapResult = packs.flatMap(f94166);
    } else {
      flatMapResult = items;
    }
    if (flatMapResult.length <= 0) {
      flatMapResult = items;
    }
    items = flatMapResult;
    const _Set = Set;
    const self = this;
    const self2 = this;
    new Set(items.map(f94167));
    flag = true;
  }
  return flag;
}
let obj = { packs: [], packsById: {}, packIdByEmojiId: {}, fetchState: "NOT_FETCHED" };
let items = [];
let enabled = false;
const set = new Set();
const PersistedStore = get_initializedDefault.PersistedStore;
class EmojiPackStore extends PersistedStore {
  initialize(packs) {
    let flatMapResult;
    let packs1;
    const _Array = Array;
    if (packs != null) {
      packs1 = packs.packs;
    }
    obj = { fetchState: "NOT_FETCHED" };
    const tmp2 = isArray(packs1) ? packs.packs : [];
    const obj2 = emojiPacksFromServer;
    const merged = Object.assign(obj2.indexEmojiPacks(tmp2));
    const DefaultEmojisExperiment = DefaultEmojisExperiment2.DefaultEmojisExperiment;
    enabled = DefaultEmojisExperiment.getConfig({ location: "emoji_pack_store" }, { autoTrackExposure: false }).enabled;
    if (enabled) {
      packs = obj.packs;
      flatMapResult = packs.flatMap(f94166);
    } else {
      flatMapResult = items;
    }
    if (flatMapResult.length <= 0) {
      flatMapResult = items;
    }
    items = flatMapResult;
    new Set(items.map(f94167));
    items = [ApexExperimentStore];
    this.syncWith(items, handleExperimentChange);
  }
  getState() {
    obj = { packs: obj.packs };
    return obj;
  }
  getFetchState() {
    return obj.fetchState;
  }
  getPacks() {
    return obj.packs;
  }
  getIndexablePackEmojis() {
    return items;
  }
  isPackEmojiUsable(emoji) {
    return set.has(emoji.id);
  }
  getPack(arg0) {
    return obj.packsById[arg0];
  }
  getPackForEmoji(arg0) {
    let tmp2;
    if (null != obj.packIdByEmojiId[arg0]) {
      tmp2 = obj.packsById[tmp];
    }
    return tmp2;
  }
  getEmoji(arg0) {
    let closure_0 = arg0;
    const packForEmoji = this.getPackForEmoji(arg0);
    let found;
    if (packForEmoji != null) {
      const emojis = packForEmoji.emojis;
      found = emojis.find((id) => id.id === closure_0);
    }
    return found;
  }
}
const prototype = EmojiPackStore.prototype;
EmojiPackStore.displayName = "EmojiPackStore";
EmojiPackStore.persistKey = "EmojiPackStore";
let obj2 = {
  LOGOUT: function handleReset() {
    let flatMapResult;
    const tmp = enabled;
    if (tmp) {
      const packs = obj.packs;
      flatMapResult = packs.flatMap(f94166);
    } else {
      flatMapResult = items;
    }
    if (flatMapResult.length <= 0) {
      flatMapResult = items;
    }
    items = flatMapResult;
    new Set(items.map(f94167));
  },
  EMOJI_PACKS_FETCH_START: function handleFetchStart() {
    if ("FETCHING" === obj.fetchState) {
      return false;
    } else {
      obj = { fetchState: "FETCHING" };
      const merged = Object.assign(obj);
    }
  },
  EMOJI_PACKS_FETCH_SUCCESS: function handleFetchSuccess(packs) {
    let flatMapResult;
    packs = packs.packs;
    obj = { fetchState: "FETCHED" };
    const obj2 = emojiPacksFromServer;
    const merged = Object.assign(obj2.emojiPacksFromServer(packs));
    const tmp2 = enabled;
    if (tmp2) {
      const packs2 = obj.packs;
      flatMapResult = packs2.flatMap(f94166);
    } else {
      flatMapResult = items;
    }
    if (flatMapResult.length <= 0) {
      flatMapResult = items;
    }
    items = flatMapResult;
    new Set(items.map(f94167));
  },
  EMOJI_PACKS_FETCH_FAIL: function handleFetchFail() {
    obj = { fetchState: "FAILED" };
    const merged = Object.assign(obj);
  }
};
const emojiPackStore = new EmojiPackStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/emojis/default_emojis/EmojiPackStore.tsx");

export default emojiPackStore;
