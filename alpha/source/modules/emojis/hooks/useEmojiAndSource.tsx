// Module ID: 10037
// Function ID: 10038
// Name: useEmojiAndSource
// Dependencies: [5, 32, 19, 4880, 6790, 6952, 1072, 4958, 563, 2]
// Exports: useEmojiAndSource

// Module 10037 (useEmojiAndSource)
import Constants from "Constants" /* 1072 */;
import EmojiTypes from "EmojiTypes" /* 4958 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import EmojiStore from "EmojiStore" /* 6790 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 6952 */;
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

export function useEmojiAndSource(emojiId) {
  let c3;
  let c5;
  let c6;
  let c7;
  let closure_4;
  let emoji;
  let joinedEmojiSourceGuildRecord;
  let sourceType;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp9;
  emojiId = emojiId.emojiId;
  const refreshPositionKey = emojiId.refreshPositionKey;
  let flag = emojiId.skipKnownGuildEmojiFetch;
  if (flag === undefined) {
    flag = false;
  }
  _slicedToArray = undefined;
  react = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
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
  ({ joinedEmojiSourceGuildRecord, emoji } = stateFromStoresObject);
  const hasJoinedEmojiSourceGuild = null != joinedEmojiSourceGuildRecord;
  let hasItem = null != joinedEmojiSourceGuildRecord;
  if (hasItem) {
    const features = joinedEmojiSourceGuildRecord.features;
    const tmp4 = GuildFeatures;
    hasItem = features.has(GuildFeatures.DISCOVERABLE);
  }
  let tmp5 = null != emojiId;
  if (tmp5) {
    if (flag) {
      flag = null != emoji;
    }
    tmp5 = !flag;
  }
  if (tmp5) {
    let tmp6 = !hasJoinedEmojiSourceGuild;
    if (hasJoinedEmojiSourceGuild) {
      tmp6 = hasItem;
    }
    tmp5 = tmp6;
  }
  hasItem = tmp5;
  let obj2 = react;
  [tmp9, c3] = _slicedToArray(react.useState(tmp5), 2);
  const tmp8 = _slicedToArray(react.useState(tmp5), 2);
  [sourceType, react] = react.useState(null);
  let fromGuildRecord = null;
  if (null != joinedEmojiSourceGuildRecord) {
    fromGuildRecord = c7.createFromGuildRecord(joinedEmojiSourceGuildRecord);
  }
  [tmp15, c5] = _slicedToArray(obj2.useState(fromGuildRecord), 2);
  _slicedToArray(obj2.useState(fromGuildRecord), 2);
  [tmp17, c6] = _slicedToArray(obj2.useState(null), 2);
  _slicedToArray(obj2.useState(null), 2);
  [tmp19, c7] = _slicedToArray(obj2.useState(null), 2);
  _slicedToArray(obj2.useState(null), 2);
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
                  const obj4 = { value: closure_2_9(tmp37), done: false };
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
              } else if (constants.PACK === type) {
                closure_1_7(tmp.pack);
              }
            }
            c3(false);
            const current = ref.current;
            if (current != null) {
              current();
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp33) {
            c3 = 3;
            throw tmp33;
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
    const tmp3 = hasItem;
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
  return { expressionSourceGuild, expressionSourceApplication, expressionSourcePack, sourceType, joinedEmojiSourceGuildRecord, hasJoinedEmojiSourceGuild, emoji, isFetching };
}
