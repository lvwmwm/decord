// Module ID: 9039
// Function ID: 9040
// Name: useGameAnnouncements
// Dependencies: [19, 8953, 504, 9040, 2]
// Exports: default

// Module 9039 (useGameAnnouncements)
import _mod19 from "module_19" /* 19 */;
import GameProfileHttpUtils from "GameProfileHttpUtils" /* 9040 */;
import GameProfileStore from "GameProfileStore" /* 8953 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameAnnouncements.tsx");

export default function useGameAnnouncements(arg0, limit) {
  _require = arg0;
  dependencyMap = limit;
  const items = [GameProfileStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let announcements;
    if (null != closure_0) {
      announcements = GameProfileStore.getAnnouncements(tmp);
    }
    const obj = { data: announcements, hasFetched: null, isFetching: null };
    let result = null != tmp;
    if (result) {
      result = GameProfileStore.hasAnnouncementsBeenFetched(tmp);
    }
    obj.hasFetched = result;
    let result1 = null != tmp;
    if (result1) {
      result1 = GameProfileStore.isAnnouncementsFetching(tmp);
    }
    obj.isFetching = result1;
    return obj;
  });
  ({ data, hasFetched } = stateFromStoresObject);
  const items1 = [arg0, hasFetched, limit];
  hasFetched(() => {
    let result = null == closure_0 || hasFetched;
    if (!result) {
      result = GameProfileStore.isAnnouncementsFetching(tmp);
    }
    if (!result) {
      const obj2 = { limit };
      const gameAnnouncements = GameProfileHttpUtils.getGameAnnouncements(tmp, obj2);
    }
  }, items1);
  let messages;
  if (data != null) {
    messages = data.messages;
  }
  if (messages == null) {
    messages = [];
  }
  let obj2 = { messages, channelId: null, guildId: null, loading: null, hasFetched: null };
  let channelId;
  if (data != null) {
    channelId = data.channelId;
  }
  obj2.channelId = channelId;
  let guildId;
  if (data != null) {
    guildId = data.guildId;
  }
  obj2.guildId = guildId;
  obj2.loading = stateFromStoresObject.isFetching;
  obj2.hasFetched = hasFetched;
  return obj2;
};
