// Module ID: 9428
// Function ID: 73434
// Name: useEmojiAndSource
// Dependencies: [5, 57, 31, 1838, 4991, 5514, 653, 3774, 624, 2]
// Exports: useEmojiAndSource

// Module 9428 (useEmojiAndSource)
import closure_2 from "_callSuper";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import { GuildFeatures } from "ME";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ ExpressionSourceGuildRecord: closure_7, EmojiSourceDataTypes: closure_8, getEmojiSourceData: closure_9 } = _callSuper);
const result = require("result").fileFinishedImporting("modules/emojis/hooks/useEmojiAndSource.tsx");

export const useEmojiAndSource = function useEmojiAndSource(emojiId) {
  let c3;
  let c5;
  let c6;
  let tmp12;
  let tmp14;
  let tmp7;
  emojiId = emojiId.emojiId;
  const refreshPositionKey = emojiId.refreshPositionKey;
  let c2;
  let callback;
  let React;
  c5 = undefined;
  c6 = undefined;
  let closure_7;
  const items = [c6, c5];
  const emoji = emojiId(refreshPositionKey[8]).useStateFromStoresObject(items, () => {
    let obj = c6;
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
      obj.joinedEmojiSourceGuildRecord = c5.getGuild(guildId);
    } else {
      obj = { emoji: null, joinedEmojiSourceGuildRecord: null };
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
  c2 = tmp5;
  let obj = emojiId(refreshPositionKey[8]);
  [tmp7, c3] = callback(React.useState(tmp5), 2);
  const sourceType = callback(React.useState(null), 2);
  React = sourceType[1];
  let fromGuildRecord = null;
  if (null != joinedEmojiSourceGuildRecord) {
    fromGuildRecord = closure_7.createFromGuildRecord(joinedEmojiSourceGuildRecord);
  }
  const tmp6 = callback(React.useState(tmp5), 2);
  [tmp12, c5] = callback(React.useState(fromGuildRecord), 2);
  const tmp11 = callback(React.useState(fromGuildRecord), 2);
  [tmp14, c6] = callback(React.useState(null), 2);
  closure_7 = React.useRef(refreshPositionKey);
  const effect = React.useEffect(() => {
    closure_7.current = refreshPositionKey;
  });
  const items1 = [emojiId, tmp5];
  const effect1 = React.useEffect(() => {
    function _fetch() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      return obj(...arguments);
    }
    if (null != closure_7.current) {
      closure_7.current();
    }
    if (c2) {
      (function fetch() {
        return _fetch(...arguments);
      })();
    } else if (null != closure_7.current) {
      closure_7.current();
    }
    return tmp6;
  }, items1);
  return { expressionSourceGuild, expressionSourceApplication, sourceType: sourceType[0], joinedEmojiSourceGuildRecord, hasJoinedEmojiSourceGuild, emoji: emoji.emoji, isFetching };
};
