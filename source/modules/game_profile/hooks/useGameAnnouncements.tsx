// Module ID: 8658
// Function ID: 68518
// Name: useGameAnnouncements
// Dependencies: [31, 8596, 566, 8659, 2]
// Exports: default

// Module 8658 (useGameAnnouncements)
import { useEffect } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let result = require("initialize").fileFinishedImporting("modules/game_profile/hooks/useGameAnnouncements.tsx");

export default function useGameAnnouncements(arg0, arg1) {
  let data;
  let hasFetched;
  const _require = arg0;
  const dependencyMap = arg1;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    let announcements;
    if (null != closure_0) {
      announcements = outer1_3.getAnnouncements(closure_0);
    }
    obj.data = announcements;
    let result = null != closure_0;
    if (result) {
      result = outer1_3.hasAnnouncementsBeenFetched(closure_0);
    }
    obj.hasFetched = result;
    let result1 = null != closure_0;
    if (result1) {
      result1 = outer1_3.isAnnouncementsFetching(closure_0);
    }
    obj.isFetching = result1;
    return obj;
  });
  ({ data, hasFetched } = stateFromStoresObject);
  const items1 = [arg0, hasFetched, arg1];
  hasFetched(() => {
    let result = null == callback || hasFetched;
    if (!result) {
      result = outer1_3.isAnnouncementsFetching(callback);
    }
    if (!result) {
      let obj = callback(table[3]);
      obj = { limit: table };
      const gameAnnouncements = obj.getGameAnnouncements(callback, obj);
    }
  }, items1);
  obj = {};
  let messages;
  if (null != data) {
    messages = data.messages;
  }
  if (null == messages) {
    messages = [];
  }
  obj.messages = messages;
  let channelId;
  if (null != data) {
    channelId = data.channelId;
  }
  obj.channelId = channelId;
  let guildId;
  if (null != data) {
    guildId = data.guildId;
  }
  obj.guildId = guildId;
  obj.loading = stateFromStoresObject.isFetching;
  return obj;
};
