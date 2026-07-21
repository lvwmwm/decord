// Module ID: 9339
// Function ID: 72969
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 9339 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _computeCategories(categories) {
  let emojis;
  let emojisDisabled;
  let emojisHidden;
  let guild;
  let isNativeEmojiPickerEnabled;
  let iter3;
  let rowSize;
  ({ rowSize, isNativeEmojiPickerEnabled } = categories);
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(categories.categories);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let type = value.type;
      let tmp8 = closure_6;
      if (closure_6.TOP_GUILD_EMOJI === type) {
        emojis = value.emojis;
        let tmp59 = closure_12;
        let obj = { emojiSections: items };
        obj = {};
        let tmp60 = closure_7;
        obj.type = closure_7.EMOJI;
        obj.emojis = emojis.slice(0, rowSize);
        ({ emojisDisabled: obj19.emojisDisabled, name: obj19.label } = value);
        let tmp61 = closure_6;
        obj.footer = closure_6.TOP_GUILD_EMOJI;
        obj.renderingData = obj;
        obj.rowSize = rowSize;
        let tmp62 = closure_12(obj);
        let tmp19 = tmp2;
        let tmp20 = tmp3;
        let tmp21 = tmp4;
        let tmp22 = tmp5;
        let tmp23 = tmp6;
        let tmp24 = tmp7;
      } else {
        let tmp63 = closure_6;
        if (closure_6.FAVORITES === type) {
          let tmp55 = closure_12;
          let obj1 = { emojiSections: items };
          let obj2 = {};
          let tmp56 = closure_7;
          obj2.type = closure_7.EMOJI;
          ({ emojis: obj17.emojis, emojisDisabled: obj17.emojisDisabled, name: obj17.label } = value);
          let tmp57 = closure_6;
          obj2.footer = closure_6.FAVORITES;
          obj1.renderingData = obj2;
          obj1.rowSize = rowSize;
          let tmp58 = closure_12(obj1);
          tmp19 = tmp2;
          tmp20 = tmp3;
          tmp21 = tmp4;
          tmp22 = tmp5;
          tmp23 = tmp6;
          tmp24 = tmp7;
        } else {
          let tmp64 = closure_6;
          if (closure_6.RECENT === type) {
            let tmp51 = closure_12;
            let obj3 = { emojiSections: items };
            let obj4 = {};
            let tmp52 = closure_7;
            obj4.type = closure_7.EMOJI;
            ({ emojisDisabled: obj15.emojisDisabled, emojis: obj15.emojis, name: obj15.label } = value);
            let tmp53 = closure_6;
            obj4.footer = closure_6.RECENT;
            obj3.renderingData = obj4;
            obj3.rowSize = rowSize;
            let tmp54 = closure_12(obj3);
            tmp19 = tmp2;
            tmp20 = tmp3;
            tmp21 = tmp4;
            tmp22 = tmp5;
            tmp23 = tmp6;
            tmp24 = tmp7;
          } else {
            let tmp65 = closure_6;
            if (closure_6.GUILD === type) {
              ({ guild, emojis, emojisDisabled, emojisHidden } = value);
              if (isNativeEmojiPickerEnabled) {
                let tmp48 = closure_13;
                let obj5 = { emojiSections: items };
                let obj6 = {};
                let tmp49 = closure_7;
                obj6.type = closure_7.NATIVE_SECTION;
                ({ name: obj13.label, id: obj13.guildId } = guild);
                obj6.emojiCount = emojis.length;
                obj6.emojisDisabled = emojisDisabled;
                obj6.emojisHidden = emojisHidden;
                obj6.isSectionNitroLocked = value.isNitroLocked;
                obj5.renderingData = obj6;
                let tmp50 = closure_13(obj5);
                tmp19 = guild;
                tmp20 = emojis;
                tmp21 = emojisDisabled;
                tmp22 = emojisHidden;
                tmp23 = tmp6;
                tmp24 = tmp7;
              } else {
                let tmp39 = closure_0;
                let tmp40 = closure_2;
                obj6 = closure_0(closure_2[4]);
                if (obj6.shouldNSFWGateGuild(guild.id)) {
                  let obj7 = { emojiSections: items };
                  let obj8 = {};
                  let tmp45 = closure_7;
                  obj8.type = closure_7.NSFW;
                  obj8.label = guild.name;
                  let tmp46 = closure_6;
                  obj8.footer = closure_6.GUILD;
                  obj8.emojis = [];
                  obj8.isSectionNitroLocked = value.isNitroLocked;
                  obj7.renderingData = obj8;
                  let emojiSections = obj7.emojiSections;
                  let arr = emojiSections.push(obj7.renderingData);
                  tmp19 = guild;
                  tmp20 = emojis;
                  tmp21 = emojisDisabled;
                  tmp22 = emojisHidden;
                  tmp23 = tmp6;
                  tmp24 = tmp7;
                } else {
                  let tmp41 = closure_12;
                  let obj9 = { emojiSections: items };
                  let obj10 = {};
                  let tmp42 = closure_7;
                  obj10.type = closure_7.EMOJI;
                  obj10.emojis = emojis;
                  obj10.emojisDisabled = emojisDisabled;
                  obj10.label = guild.name;
                  let tmp43 = closure_6;
                  obj10.footer = closure_6.GUILD;
                  obj10.isSectionNitroLocked = value.isNitroLocked;
                  obj9.renderingData = obj10;
                  obj9.rowSize = rowSize;
                  let tmp44 = closure_12(obj9);
                  tmp19 = guild;
                  tmp20 = emojis;
                  tmp21 = emojisDisabled;
                  tmp22 = emojisHidden;
                  tmp23 = tmp6;
                  tmp24 = tmp7;
                }
              }
            } else {
              let tmp66 = closure_6;
              tmp19 = tmp2;
              tmp20 = tmp3;
              tmp21 = tmp4;
              tmp22 = tmp5;
              tmp23 = tmp6;
              tmp24 = tmp7;
              if (closure_6.UNICODE === type) {
                let tmp67 = closure_1;
                let tmp68 = closure_2;
                let obj20 = closure_1(closure_2[5]);
                let byCategory = obj20.getByCategory(value.name);
                if (isNativeEmojiPickerEnabled) {
                  let obj11 = { emojiSections: items };
                  let obj12 = {};
                  let tmp26 = closure_7;
                  obj12.type = closure_7.NATIVE_SECTION;
                  let tmp27 = closure_1;
                  let tmp28 = closure_2;
                  let tmp25 = closure_13;
                  obj5 = closure_1(closure_2[6]);
                  obj12.label = obj5.capitalize(value.name);
                  let length;
                  if (null != byCategory) {
                    length = byCategory.length;
                  }
                  let num = 0;
                  if (null != length) {
                    num = length;
                  }
                  obj12.emojiCount = num;
                  let _Set2 = Set;
                  let tmp30 = new.target;
                  let tmp31 = new.target;
                  let set = new Set();
                  let tmp33 = set;
                  obj12.emojisDisabled = set;
                  let _Set3 = Set;
                  let tmp34 = new.target;
                  let tmp35 = new.target;
                  let set1 = new Set();
                  let tmp37 = set1;
                  obj12.emojisHidden = set1;
                  obj11.renderingData = obj12;
                  let tmp25Result = tmp25(obj11);
                  tmp19 = tmp2;
                  tmp20 = tmp3;
                  tmp21 = tmp4;
                  tmp22 = tmp5;
                  tmp23 = byCategory;
                  tmp24 = length;
                } else {
                  obj = { emojiSections: items };
                  let obj13 = {};
                  let tmp10 = closure_7;
                  obj13.type = closure_7.EMOJI;
                  let items1 = byCategory;
                  let tmp9 = closure_12;
                  if (null == byCategory) {
                    items1 = [];
                  }
                  obj13.emojis = items1;
                  let _Set = Set;
                  let tmp11 = new.target;
                  let tmp12 = new.target;
                  let set2 = new Set();
                  let tmp14 = set2;
                  obj13.emojisDisabled = set2;
                  let tmp15 = closure_1;
                  let tmp16 = closure_2;
                  obj2 = closure_1(closure_2[6]);
                  obj13.label = obj2.capitalize(value.name);
                  let tmp17 = closure_6;
                  obj13.footer = closure_6.UNICODE;
                  obj.renderingData = obj13;
                  obj.rowSize = rowSize;
                  let tmp9Result = tmp9(obj);
                  tmp19 = tmp2;
                  tmp20 = tmp3;
                  tmp21 = tmp4;
                  tmp22 = tmp5;
                  tmp23 = byCategory;
                  tmp24 = tmp7;
                }
              }
            }
          }
        }
      }
      iter3 = tmp();
      let tmp2 = tmp19;
      let tmp3 = tmp20;
      let tmp4 = tmp21;
      let tmp5 = tmp22;
      let tmp6 = tmp23;
      let tmp7 = tmp24;
      iter2 = iter3;
    } while (!iter3.done);
  }
  return items;
}
function _computeSearchResults(emojis) {
  let iter2;
  let limit;
  let locked;
  let rowSize;
  let unlocked;
  ({ locked, unlocked } = emojis.emojis);
  ({ rowSize, limit } = emojis);
  if (limit === undefined) {
    const _Number = Number;
    limit = Number.MAX_SAFE_INTEGER;
  }
  const items = [];
  let obj = { emojiSections: items };
  obj = { type: constants3.EMOJI };
  let substr = unlocked;
  if (unlocked.length > limit) {
    substr = unlocked.slice(0, limit);
  }
  obj.emojis = substr;
  obj.emojisDisabled = new Set();
  obj.label = "";
  obj.footer = constants2.SEARCH_RESULTS;
  obj.renderingData = obj;
  obj.rowSize = rowSize;
  pushCategory(obj);
  let substr1 = locked;
  if (locked.length > limit) {
    substr1 = locked.slice(0, limit);
  }
  const set1 = new Set();
  const tmp7 = _createForOfIteratorHelperLoose(locked);
  let iter = tmp7();
  if (!iter.done) {
    do {
      let value = iter.value;
      if (null != value.id) {
        let addResult = set1.add(value.id);
      }
      iter2 = tmp7();
      iter = iter2;
    } while (!iter2.done);
  }
  obj = { emojiSections: items };
  const obj1 = { type: constants3.EMOJI, emojis: substr1, emojisDisabled: set1 };
  const set = new Set();
  const tmp2 = pushCategory;
  obj1.label = arg1(dependencyMap[7]).getStringForEmojiCategory(constants.PREMIUM_UPSELL);
  obj1.footer = constants2.PREMIUM_UPSELL;
  obj.renderingData = obj1;
  obj.rowSize = rowSize;
  pushCategory(obj);
  return items;
}
function pushCategory(renderingData) {
  const emojis = renderingData.renderingData.emojis;
  let tmp = null != emojis;
  if (tmp) {
    tmp = 0 !== emojis.length;
  }
  if (tmp) {
    const emojiSections = renderingData.emojiSections;
    emojiSections.push(renderingData.renderingData);
  }
}
function pushNativeCategory(emojiSections) {
  emojiSections = emojiSections.emojiSections;
  emojiSections.push(emojiSections.renderingData);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ EmojiCategories: closure_5, EmojiCategoryTypes: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = arg1(dependencyMap[3]).EmojiPickerRenderingDataType;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx");

export default function useComputeEmojiPickerFunctions() {
  return callback(React.useState(() => {
    const obj = { computeCategories: callback(closure_2[8]).cachedFunction(closure_10) };
    const obj2 = callback(closure_2[8]);
    obj.computeSearchResults = callback(closure_2[8]).cachedFunction(closure_11);
    return obj;
  }), 1)[0];
};
