// Module ID: 9798
// Function ID: 9799
// Name: useEmojiAndSource
// Dependencies: [5, 32, 19, 2067, 5771, 5897, 1074, 4486, 563, 2]
// Exports: useEmojiAndSource

// Module 9798 (useEmojiAndSource)
import Constants from "Constants" /* 1074 */;
import EmojiTypes from "EmojiTypes" /* 4486 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 5897 */;
import size from "module_2" /* 2 */;

let c2;

let c9;
let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ExpressionSourceGuildRecord: metroImportDefault, EmojiSourceDataTypes: metroImportAll, getEmojiSourceData: c9 } = ExpressionSourceRecord);
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiAndSource.tsx");

export const useEmojiAndSource = function useEmojiAndSource(emojiId) {
  let c3;
  let c5;
  let c6;
  let closure_4;
  let sourceType;
  let tmp14;
  let tmp16;
  let tmp8;
  emojiId = emojiId.emojiId;
  const refreshPositionKey = emojiId.refreshPositionKey;
  let closure_2;
  _slicedToArray = undefined;
  react = undefined;
  c5 = undefined;
  c6 = undefined;
  let ref;
  let obj = emojiId(refreshPositionKey[8]);
  const items = [c6, c5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let getGuild;
    let guildId;
    let obj3;
    let customEmojiById = null;
    const obj = EmojiStore;
    const tmp = GuildStore;
    if (null != emojiId) {
      customEmojiById = obj.getCustomEmojiById(tmp2);
    }
    let type;
    if (customEmojiById != null) {
      type = customEmojiById.type;
    }
    if (type === EmojiTypes.EmojiTypes.GUILD) {
      const obj2 = { emoji: customEmojiById, joinedEmojiSourceGuildRecord: getGuild(guildId) };
      guildId = undefined;
      getGuild = tmp.getGuild;
      if (customEmojiById != null) {
        guildId = customEmojiById.guildId;
      }
      obj3 = obj2;
    } else {
      obj3 = { emoji: null, joinedEmojiSourceGuildRecord: null };
    }
    return obj3;
  });
  const joinedEmojiSourceGuildRecord = stateFromStoresObject.joinedEmojiSourceGuildRecord;
  const hasJoinedEmojiSourceGuild = null != joinedEmojiSourceGuildRecord;
  let hasItem = null != joinedEmojiSourceGuildRecord;
  const emoji = stateFromStoresObject.emoji;
  if (hasItem) {
    const features = joinedEmojiSourceGuildRecord.features;
    const tmp4 = GuildFeatures;
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
  let obj2 = react;
  const tmp6 = _slicedToArray;
  [tmp8, c3] = _slicedToArray(react.useState(tmp5), 2);
  const tmp7 = _slicedToArray(react.useState(tmp5), 2);
  [sourceType, react] = react.useState(null);
  let fromGuildRecord = null;
  if (null != joinedEmojiSourceGuildRecord) {
    fromGuildRecord = ref.createFromGuildRecord(joinedEmojiSourceGuildRecord);
  }
  [tmp14, c5] = tmp6(obj2.useState(fromGuildRecord), 2);
  tmp6(obj2.useState(fromGuildRecord), 2);
  [tmp16, c6] = tmp6(obj2.useState(null), 2);
  tmp6(obj2.useState(null), 2);
  ref = obj2.useRef(refreshPositionKey);
  const effect = obj2.useEffect(() => {
    ref.current = refreshPositionKey;
  });
  const items1 = [emojiId, tmp5];
  const effect1 = obj2.useEffect(() => {
    let tmp5;
    function fetch() {
      return obj(...arguments);
    }
    let obj = function _fetch() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        let v3;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let tmp;
            let tmp5;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp4;
                tmp = undefined;
                tmp5 = null;
                if (null != tmp) {
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: closure_2_9(tmp30), done: false };
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else {
              tmp5 = value;
              if (arg0 === 2) {
                c3 = 3;
                obj = { value, done: true };
                return obj;
              }
            }
            tmp = tmp5;
            if (null != tmp) {
              closure_1_4(tmp.type);
              const type = tmp.type;
              if (constants.APPLICATION === type) {
                closure_1_6(tmp.application);
              } else if (constants.GUILD === type) {
                closure_1_5(tmp.guild);
              }
            }
            c3(false);
            const current = ref.current;
            if (current != null) {
              current();
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp26) {
            c3 = 3;
            throw tmp26;
          }
        }
      });
      return obj(...arguments);
    };
    let tmp = ref;
    let current = ref.current;
    if (current != null) {
      current();
    }
    const tmp3 = closure_2;
    if (tmp3) {
      fetch();
    } else {
      const current2 = tmp.current;
      if (current2 != null) {
        current2();
      }
    }
    return tmp5;
  }, items1);
  return { expressionSourceGuild, expressionSourceApplication, sourceType, joinedEmojiSourceGuildRecord, hasJoinedEmojiSourceGuild, emoji, isFetching };
};
