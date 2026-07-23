// Module ID: 9347
// Function ID: 73023
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 4995, 9329, 9348, 3771, 22, 9330, 1916, 2]
// Exports: default

// Module 9347 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import EmojiCategoryTypes from "EmojiCategoryTypes";
import { EmojiPickerRenderingDataType as closure_7 } from "IMAGE_SIZE";

let closure_5;
let closure_6;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
      let tmp8 = constants2;
      if (constants2.TOP_GUILD_EMOJI === type) {
        emojis = value.emojis;
        let tmp59 = pushCategory;
        let obj = { emojiSections: items };
        obj = {};
        let tmp60 = constants3;
        obj.type = constants3.EMOJI;
        obj.emojis = emojis.slice(0, rowSize);
        ({ emojisDisabled: obj19.emojisDisabled, name: obj19.label } = value);
        let tmp61 = constants2;
        obj.footer = constants2.TOP_GUILD_EMOJI;
        obj.renderingData = obj;
        obj.rowSize = rowSize;
        let tmp62 = pushCategory(obj);
        let tmp19 = tmp2;
        let tmp20 = tmp3;
        let tmp21 = tmp4;
        let tmp22 = tmp5;
        let tmp23 = tmp6;
        let tmp24 = tmp7;
      } else {
        let tmp63 = constants2;
        if (constants2.FAVORITES === type) {
          let tmp55 = pushCategory;
          let obj1 = { emojiSections: items };
          let obj2 = {};
          let tmp56 = constants3;
          obj2.type = constants3.EMOJI;
          ({ emojis: obj17.emojis, emojisDisabled: obj17.emojisDisabled, name: obj17.label } = value);
          let tmp57 = constants2;
          obj2.footer = constants2.FAVORITES;
          obj1.renderingData = obj2;
          obj1.rowSize = rowSize;
          let tmp58 = pushCategory(obj1);
          tmp19 = tmp2;
          tmp20 = tmp3;
          tmp21 = tmp4;
          tmp22 = tmp5;
          tmp23 = tmp6;
          tmp24 = tmp7;
        } else {
          let tmp64 = constants2;
          if (constants2.RECENT === type) {
            let tmp51 = pushCategory;
            let obj3 = { emojiSections: items };
            let obj4 = {};
            let tmp52 = constants3;
            obj4.type = constants3.EMOJI;
            ({ emojisDisabled: obj15.emojisDisabled, emojis: obj15.emojis, name: obj15.label } = value);
            let tmp53 = constants2;
            obj4.footer = constants2.RECENT;
            obj3.renderingData = obj4;
            obj3.rowSize = rowSize;
            let tmp54 = pushCategory(obj3);
            tmp19 = tmp2;
            tmp20 = tmp3;
            tmp21 = tmp4;
            tmp22 = tmp5;
            tmp23 = tmp6;
            tmp24 = tmp7;
          } else {
            let tmp65 = constants2;
            if (constants2.GUILD === type) {
              ({ guild, emojis, emojisDisabled, emojisHidden } = value);
              if (isNativeEmojiPickerEnabled) {
                let tmp48 = pushNativeCategory;
                let obj5 = { emojiSections: items };
                let obj6 = {};
                let tmp49 = constants3;
                obj6.type = constants3.NATIVE_SECTION;
                ({ name: obj13.label, id: obj13.guildId } = guild);
                obj6.emojiCount = emojis.length;
                obj6.emojisDisabled = emojisDisabled;
                obj6.emojisHidden = emojisHidden;
                obj6.isSectionNitroLocked = value.isNitroLocked;
                obj5.renderingData = obj6;
                let tmp50 = pushNativeCategory(obj5);
                tmp19 = guild;
                tmp20 = emojis;
                tmp21 = emojisDisabled;
                tmp22 = emojisHidden;
                tmp23 = tmp6;
                tmp24 = tmp7;
              } else {
                let tmp39 = require;
                let tmp40 = dependencyMap;
                obj6 = require(9348) /* isNSFWInvite */;
                if (obj6.shouldNSFWGateGuild(guild.id)) {
                  let obj7 = { emojiSections: items };
                  let obj8 = {};
                  let tmp45 = constants3;
                  obj8.type = constants3.NSFW;
                  obj8.label = guild.name;
                  let tmp46 = constants2;
                  obj8.footer = constants2.GUILD;
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
                  let tmp41 = pushCategory;
                  let obj9 = { emojiSections: items };
                  let obj10 = {};
                  let tmp42 = constants3;
                  obj10.type = constants3.EMOJI;
                  obj10.emojis = emojis;
                  obj10.emojisDisabled = emojisDisabled;
                  obj10.label = guild.name;
                  let tmp43 = constants2;
                  obj10.footer = constants2.GUILD;
                  obj10.isSectionNitroLocked = value.isNitroLocked;
                  obj9.renderingData = obj10;
                  obj9.rowSize = rowSize;
                  let tmp44 = pushCategory(obj9);
                  tmp19 = guild;
                  tmp20 = emojis;
                  tmp21 = emojisDisabled;
                  tmp22 = emojisHidden;
                  tmp23 = tmp6;
                  tmp24 = tmp7;
                }
              }
            } else {
              let tmp66 = constants2;
              tmp19 = tmp2;
              tmp20 = tmp3;
              tmp21 = tmp4;
              tmp22 = tmp5;
              tmp23 = tmp6;
              tmp24 = tmp7;
              if (constants2.UNICODE === type) {
                let tmp67 = importDefault;
                let tmp68 = dependencyMap;
                let obj20 = importDefault(3771);
                let byCategory = obj20.getByCategory(value.name);
                if (isNativeEmojiPickerEnabled) {
                  let obj11 = { emojiSections: items };
                  let obj12 = {};
                  let tmp26 = constants3;
                  obj12.type = constants3.NATIVE_SECTION;
                  let tmp27 = importDefault;
                  let tmp28 = dependencyMap;
                  let tmp25 = pushNativeCategory;
                  obj5 = importDefault(22);
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
                  let tmp10 = constants3;
                  obj13.type = constants3.EMOJI;
                  let items1 = byCategory;
                  let tmp9 = pushCategory;
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
                  let tmp15 = importDefault;
                  let tmp16 = dependencyMap;
                  obj2 = importDefault(22);
                  obj13.label = obj2.capitalize(value.name);
                  let tmp17 = constants2;
                  obj13.footer = constants2.UNICODE;
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
      tmp2 = tmp19;
      tmp3 = tmp20;
      tmp4 = tmp21;
      tmp5 = tmp22;
      tmp6 = tmp23;
      tmp7 = tmp24;
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
  obj1.label = require(9330) /* _createForOfIteratorHelperLoose */.getStringForEmojiCategory(constants.PREMIUM_UPSELL);
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
({ EmojiCategories: closure_5, EmojiCategoryTypes: closure_6 } = EmojiCategoryTypes);
const result = require("EmojiCategoryTypes").fileFinishedImporting("modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx");

export default function useComputeEmojiPickerFunctions() {
  return callback(React.useState(() => {
    const obj = { computeCategories: outer1_0(outer1_2[8]).cachedFunction(outer1_10) };
    const obj2 = outer1_0(outer1_2[8]);
    obj.computeSearchResults = outer1_0(outer1_2[8]).cachedFunction(outer1_11);
    return obj;
  }), 1)[0];
};
