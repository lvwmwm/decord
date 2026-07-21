// Module ID: 9384
// Function ID: 73160
// Name: useEmojiAndSource
// Dependencies: []
// Exports: useEmojiAndSource

// Module 9384 (useEmojiAndSource)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ ExpressionSourceGuildRecord: closure_7, EmojiSourceDataTypes: closure_8, getEmojiSourceData: closure_9 } = arg1(dependencyMap[5]));
const GuildFeatures = arg1(dependencyMap[6]).GuildFeatures;
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/emojis/hooks/useEmojiAndSource.tsx");

export const useEmojiAndSource = function useEmojiAndSource(emojiId) {
  let tmp12;
  let tmp14;
  let tmp7;
  emojiId = emojiId.emojiId;
  const arg1 = emojiId;
  const refreshPositionKey = emojiId.refreshPositionKey;
  const dependencyMap = refreshPositionKey;
  let closure_2;
  let callback;
  let React;
  let closure_5;
  let closure_6;
  let closure_7;
  const items = [closure_6, closure_5];
  const emoji = arg1(dependencyMap[8]).useStateFromStoresObject(items, () => {
    let obj = closure_6;
    let customEmojiById = null;
    if (null != emojiId) {
      customEmojiById = obj.getCustomEmojiById(tmp);
    }
    let type;
    if (null != customEmojiById) {
      type = customEmojiById.type;
    }
    if (type === emojiId(refreshPositionKey[7]).EmojiTypes.GUILD) {
      obj = { emoji: customEmojiById };
      let guildId;
      if (null != customEmojiById) {
        guildId = customEmojiById.guildId;
      }
      obj.joinedEmojiSourceGuildRecord = closure_5.getGuild(guildId);
    } else {
      obj = { <string:3738052496>: "o", <string:3259460727>: "o" };
    }
    return obj;
  });
  const joinedEmojiSourceGuildRecord = emoji.joinedEmojiSourceGuildRecord;
  const hasJoinedEmojiSourceGuild = null != joinedEmojiSourceGuildRecord;
  let hasItem = null != joinedEmojiSourceGuildRecord;
  if (hasItem) {
    const features = joinedEmojiSourceGuildRecord.features;
    hasItem = features.has(GuildFeatures.DISCOVERABLE);
  }
  let tmp5 = !hasJoinedEmojiSourceGuild;
  if (hasJoinedEmojiSourceGuild) {
    tmp5 = hasItem;
  }
  if (tmp5) {
    tmp5 = null != emojiId;
  }
  closure_2 = tmp5;
  const obj = arg1(dependencyMap[8]);
  [tmp7, closure_3] = callback(React.useState(tmp5), 2);
  const sourceType = callback(React.useState(null), 2);
  React = sourceType[1];
  let fromGuildRecord = null;
  if (null != joinedEmojiSourceGuildRecord) {
    fromGuildRecord = closure_7.createFromGuildRecord(joinedEmojiSourceGuildRecord);
  }
  const tmp6 = callback(React.useState(tmp5), 2);
  [tmp12, closure_5] = callback(React.useState(fromGuildRecord), 2);
  const tmp11 = callback(React.useState(fromGuildRecord), 2);
  [tmp14, closure_6] = callback(React.useState(null), 2);
  closure_7 = React.useRef(refreshPositionKey);
  const effect = React.useEffect(() => {
    closure_7.current = refreshPositionKey;
  });
  const items1 = [emojiId, tmp5];
  const effect1 = React.useEffect(() => {
    function _fetch() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _fetch = obj;
      return obj(...arguments);
    }
    if (null != closure_7.current) {
      closure_7.current();
    }
    if (tmp5) {
      function fetch() {
        return _fetch(...arguments);
      }();
    } else if (null != closure_7.current) {
      closure_7.current();
    }
    return tmp6;
  }, items1);
  return { expressionSourceGuild, expressionSourceApplication, sourceType: sourceType[0], joinedEmojiSourceGuildRecord, hasJoinedEmojiSourceGuild, emoji: emoji.emoji, isFetching };
};
