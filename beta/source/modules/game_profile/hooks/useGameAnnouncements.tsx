// Module ID: 8221
// Function ID: 8222
// Name: useGameAnnouncements
// Dependencies: [19, 8135, 504, 8222, 2]
// Exports: default

// Module 8221 (useGameAnnouncements)
import react from "react" /* 19 */;
import GameProfileHttpUtils from "GameProfileHttpUtils" /* 8222 */;
import GameProfileStore from "GameProfileStore" /* 8135 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const useEffect = react.useEffect;
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameAnnouncements.tsx");

export default function useGameAnnouncements(arg0, limit) {
  let channelId;
  let closure_0;
  let data;
  let guildId;
  let hasFetched;
  _require = arg0;
  dependencyMap = limit;
  let obj = require("get initialized");
  const items = [GameProfileStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let result;
    let result1;
    let announcements;
    if (null != closure_0) {
      announcements = GameProfileStore.getAnnouncements(tmp);
    }
    const obj = { data: announcements, hasFetched: result, isFetching: result1 };
    result = null != tmp && GameProfileStore.hasAnnouncementsBeenFetched(tmp);
    result1 = null != tmp && GameProfileStore.isAnnouncementsFetching(tmp);
    return obj;
  });
  ({ data, hasFetched } = stateFromStoresObject);
  const items1 = [arg0, hasFetched, limit];
  const isFetching = stateFromStoresObject.isFetching;
  hasFetched(() => {
    const result = null == closure_0 || hasFetched || GameProfileStore.isAnnouncementsFetching(tmp);
    if (!result) {
      const obj2 = { limit };
      const obj = GameProfileHttpUtils;
      const gameAnnouncements = obj.getGameAnnouncements(tmp, obj2);
    }
  }, items1);
  let messages;
  if (data != null) {
    messages = data.messages;
  }
  if (messages == null) {
    messages = [];
  }
  let obj2 = { messages, channelId, guildId, loading: isFetching, hasFetched };
  channelId = undefined;
  if (data != null) {
    channelId = data.channelId;
  }
  guildId = undefined;
  if (data != null) {
    guildId = data.guildId;
  }
  return obj2;
};
