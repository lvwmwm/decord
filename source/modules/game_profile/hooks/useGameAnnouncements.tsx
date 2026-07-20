// Module ID: 8646
// Function ID: 68443
// Name: useGameAnnouncements
// Dependencies: []
// Exports: default

// Module 8646 (useGameAnnouncements)
const useEffect = require(dependencyMap[0]).useEffect;
let closure_3 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/game_profile/hooks/useGameAnnouncements.tsx");

export default function useGameAnnouncements(arg0, arg1) {
  let data;
  let hasFetched;
  const require = arg0;
  const dependencyMap = arg1;
  let obj = require(dependencyMap[2]);
  const items = [closure_3];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    let announcements;
    if (null != arg0) {
      announcements = closure_3.getAnnouncements(arg0);
    }
    obj.data = announcements;
    let result = null != arg0;
    if (result) {
      result = closure_3.hasAnnouncementsBeenFetched(arg0);
    }
    obj.hasFetched = result;
    let result1 = null != arg0;
    if (result1) {
      result1 = closure_3.isAnnouncementsFetching(arg0);
    }
    obj.isFetching = result1;
    return obj;
  });
  ({ data, hasFetched } = stateFromStoresObject);
  const useEffect = hasFetched;
  const items1 = [arg0, hasFetched, arg1];
  useEffect(() => {
    let result = null == arg0 || hasFetched;
    if (!result) {
      result = closure_3.isAnnouncementsFetching(arg0);
    }
    if (!result) {
      let obj = arg0(arg1[3]);
      obj = { limit: arg1 };
      const gameAnnouncements = obj.getGameAnnouncements(arg0, obj);
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
