// Module ID: 9846
// Function ID: 9847
// Name: useEmojiAndSource
// Dependencies: [5, 32, 19, 2090, 6243, 6437, 1087, 4862, 558, 576, 573, 2]

// Module 9846 (useEmojiAndSource)
import Constants from "Constants" /* 1087 */;
import EmojiTypes from "EmojiTypes" /* 4862 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2090 */;
import EmojiStore from "EmojiStore" /* 6243 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 6437 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, current2Result, currentResult, obj1, ref;

let c9;
let metroImportAll;
let metroImportDefault;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ExpressionSourceGuildRecord: metroImportDefault, EmojiSourceDataTypes: metroImportAll, getEmojiSourceData: c9 } = ExpressionSourceRecord);
const GuildFeatures = Constants.GuildFeatures;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiAndSource(emojiId) {
  let closure_2;
  let emoji;
  let first;
  let hasItem;
  let items1;
  let joinedEmojiSourceGuildRecord;
  let obj3;
  let refreshPositionKey;
  let tmp18;
  let tmp20;
  let tmp24;
  let tmp26;
  let tmp27;
  let tmp8;
  let tmp = emojiId;
  const tmp2 = refreshPositionKey;
  let obj = emojiId(refreshPositionKey[9]);
  const cResult = obj.c(21);
  emojiId = emojiId.emojiId;
  refreshPositionKey = emojiId.refreshPositionKey;
  const skipKnownGuildEmojiFetch = emojiId.skipKnownGuildEmojiFetch;
  const tmp4 = undefined !== skipKnownGuildEmojiFetch && skipKnownGuildEmojiFetch;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore, ];
    items[1] = GuildStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== emojiId) {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
    cResult[1] = emojiId;
    cResult[2] = E;
    tmp8 = E;
  } else {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
  }
  const tmpResult = tmp(tmp2[10]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
  ({ joinedEmojiSourceGuildRecord, emoji } = stateFromStoresObject);
  if (cResult[3] !== joinedEmojiSourceGuildRecord) {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
    if (hasItem) {
      class E {
        constructor() {
          obj = closure_6;
          tmp = closure_5;
          customEmojiById = null;
          if (null != emojiId) {
            customEmojiById = obj.getCustomEmojiById(tmp2);
          }
          type = undefined;
          if (customEmojiById != null) {
            type = customEmojiById.type;
          }
          if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
            obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
            obj1.emoji = customEmojiById;
            guildId = undefined;
            getGuild = tmp.getGuild;
            if (customEmojiById != null) {
              guildId = customEmojiById.guildId;
            }
            obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
            obj4 = obj1;
          } else {
            obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          }
          return obj4;
        }
      }
      hasItem = obj3.has(GuildFeatures.DISCOVERABLE);
    }
    cResult[3] = joinedEmojiSourceGuildRecord;
    cResult[4] = hasItem;
  } else {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
  }
  let tmp14 = null != emojiId;
  if (tmp14) {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
    tmp14 = !tmp4;
  }
  if (tmp14) {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
    if (null != joinedEmojiSourceGuildRecord) {
      class E {
        constructor() {
          obj = closure_6;
          tmp = closure_5;
          customEmojiById = null;
          if (null != emojiId) {
            customEmojiById = obj.getCustomEmojiById(tmp2);
          }
          type = undefined;
          if (customEmojiById != null) {
            type = customEmojiById.type;
          }
          if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
            obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
            obj1.emoji = customEmojiById;
            guildId = undefined;
            getGuild = tmp.getGuild;
            if (customEmojiById != null) {
              guildId = customEmojiById.guildId;
            }
            obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
            obj4 = obj1;
          } else {
            obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          }
          return obj4;
        }
      }
    }
    tmp14 = tmp15;
  }
  _asyncToGenerator = tmp14;
  let obj4 = react;
  const tmp17 = _slicedToArray(react.useState(tmp14), 2);
  [tmp18, _slicedToArray] = tmp17;
  const tmp19 = _slicedToArray(react.useState(null), 2);
  [tmp20, react] = tmp19;
  if (cResult[5] !== joinedEmojiSourceGuildRecord) {
    let fromGuildRecord;
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
    if (null != joinedEmojiSourceGuildRecord) {
      class E {
        constructor() {
          obj = closure_6;
          tmp = closure_5;
          customEmojiById = null;
          if (null != emojiId) {
            customEmojiById = obj.getCustomEmojiById(tmp2);
          }
          type = undefined;
          if (customEmojiById != null) {
            type = customEmojiById.type;
          }
          if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
            obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
            obj1.emoji = customEmojiById;
            guildId = undefined;
            getGuild = tmp.getGuild;
            if (customEmojiById != null) {
              guildId = customEmojiById.guildId;
            }
            obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
            obj4 = obj1;
          } else {
            obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          }
          return obj4;
        }
      }
      fromGuildRecord = ref.createFromGuildRecord(joinedEmojiSourceGuildRecord);
    }
    cResult[5] = joinedEmojiSourceGuildRecord;
    cResult[6] = fromGuildRecord;
  } else {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
  }
  [tmp24, GuildStore] = _slicedToArray(obj4.useState(tmp21), 2);
  _slicedToArray(obj4.useState(tmp21), 2);
  [tmp26, EmojiStore] = _slicedToArray(obj4.useState(null), 2);
  _slicedToArray(obj4.useState(null), 2);
  ref = obj4.useRef(refreshPositionKey);
  if (cResult[7] !== refreshPositionKey) {
    class K {
      constructor() {
        closure_7.current = refreshPositionKey;
        return;
      }
    }
    cResult[7] = refreshPositionKey;
    cResult[8] = K;
    tmp27 = K;
  } else {
    class K {
      constructor() {
        closure_7.current = refreshPositionKey;
        return;
      }
    }
  }
  const effect = obj4.useEffect(tmp27);
  if (cResult[9] === emojiId) {
    class K {
      constructor() {
        closure_7.current = refreshPositionKey;
        return;
      }
    }
    const effect1 = obj4.useEffect(B, items1);
    if (cResult[13] === emoji) {
      class K {
        constructor() {
          closure_7.current = refreshPositionKey;
          return;
        }
      }
    }
    let obj2 = { expressionSourceGuild: tmp24, expressionSourceApplication: tmp26, sourceType: tmp20, joinedEmojiSourceGuildRecord, hasJoinedEmojiSourceGuild: tmp10, emoji, isFetching: tmp18 };
    cResult[13] = emoji;
    cResult[14] = tmp26;
    cResult[15] = tmp24;
    cResult[16] = null != joinedEmojiSourceGuildRecord;
    cResult[17] = tmp18;
    cResult[18] = joinedEmojiSourceGuildRecord;
    cResult[19] = tmp20;
    cResult[20] = obj2;
    const tmp30 = obj2;
  }
  class B {
    constructor() {
      tmp = closure_7;
      current = closure_7.current;
      if (current != null) {
        currentResult = current();
      }
      closure_0 = closure_2(function() { /* body not rendered: F156795 */ });
      tmp3 = closure_2;
      if (tmp3) {
        tmp5 = (function fetch() { /* body not rendered: F156796 */ })();
      } else {
        current2 = tmp.current;
        if (current2 != null) {
          current2Result = current2();
        }
      }
      return;
    }
  }
  items1 = [emojiId, tmp14];
  cResult[9] = emojiId;
  cResult[10] = tmp14;
  cResult[11] = B;
  cResult[12] = items1;
}) : (function useEmojiAndSource(emojiId) {
  let c3;
  let c5;
  let c6;
  let closure_4;
  let emoji;
  let joinedEmojiSourceGuildRecord;
  let sourceType;
  let tmp15;
  let tmp17;
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
  ref = undefined;
  let obj = emojiId(refreshPositionKey[10]);
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
    fromGuildRecord = ref.createFromGuildRecord(joinedEmojiSourceGuildRecord);
  }
  [tmp15, c5] = _slicedToArray(obj2.useState(fromGuildRecord), 2);
  _slicedToArray(obj2.useState(fromGuildRecord), 2);
  [tmp17, c6] = _slicedToArray(obj2.useState(null), 2);
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
    let obj = function _fetch2() {
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
            return { value: "IconComponent", done: null };
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
            return { value: "IconComponent", done: null };
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
  return { expressionSourceGuild, expressionSourceApplication, sourceType, joinedEmojiSourceGuildRecord, hasJoinedEmojiSourceGuild, emoji, isFetching };
});
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiAndSource.tsx");

export const useEmojiAndSource = tmp3;
