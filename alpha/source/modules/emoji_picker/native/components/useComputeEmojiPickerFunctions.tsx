// Module ID: 10641
// Function ID: 10642
// Name: useComputeEmojiPickerFunctions
// Dependencies: [32, 19, 5768, 10638, 10642, 4478, 12, 10633, 2018, 2]
// Exports: default

// Module 10641 (useComputeEmojiPickerFunctions)
import FunctionUtils from "FunctionUtils" /* 2018 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4478 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 10633 */;
import age_gate_AgeGateUtils from "age_gate/AgeGateUtils" /* 10642 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function _computeCategories(arg0) {
  ({ categories, rowSize, isNativeEmojiPickerEnabled } = arg0);
  const items = [];
  const iter = categories[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let type = nextResult.type;
    let tmp3 = constants2;
    if (constants2.TOP_GUILD_EMOJI === type) {
      let emojis1 = tmp2.emojis;
      let obj2 = { emojiSections: items, renderingData: null, rowSize: null };
      let obj3 = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null };
      obj3.type = constants3.EMOJI;
      obj3.emojis = emojis1.slice(0, rowSize);
      ({ emojisDisabled: obj18.emojisDisabled, name: obj18.label } = tmp2);
      obj3.footer = tmp3.TOP_GUILD_EMOJI;
      obj2.renderingData = obj3;
      obj2.rowSize = rowSize;
      let tmp59 = pushCategory(obj2);
    } else if (tmp3.FAVORITES === type) {
      let obj4 = { emojiSections: items, renderingData: null, rowSize: null };
      let obj5 = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null };
      obj5.type = constants3.EMOJI;
      ({ emojis: obj16.emojis, emojisDisabled: obj16.emojisDisabled, name: obj16.label } = tmp2);
      obj5.footer = tmp3.FAVORITES;
      obj4.renderingData = obj5;
      obj4.rowSize = rowSize;
      let tmp55 = pushCategory(obj4);
    } else if (tmp3.RECENT === type) {
      let obj6 = { emojiSections: items, renderingData: null, rowSize: null };
      let obj8 = { type: null, emojisDisabled: null, emojis: null, label: null, footer: null };
      obj8.type = constants3.EMOJI;
      ({ emojisDisabled: obj14.emojisDisabled, emojis: obj14.emojis, name: obj14.label } = tmp2);
      obj8.footer = tmp3.RECENT;
      obj6.renderingData = obj8;
      obj6.rowSize = rowSize;
      let tmp51 = pushCategory(obj6);
    } else if (tmp3.GUILD === type) {
      ({ guild, emojis, emojisDisabled, emojisHidden } = tmp2);
      if (isNativeEmojiPickerEnabled) {
        let obj9 = { emojiSections: items, renderingData: null };
        let obj10 = { type: null, label: null, guildId: null, emojiCount: null, emojisDisabled: null, emojisHidden: null, isSectionNitroLocked: null };
        obj10.type = constants3.NATIVE_SECTION;
        ({ name: obj12.label, id: obj12.guildId } = guild);
        obj10.emojiCount = emojis.length;
        obj10.emojisDisabled = emojisDisabled;
        obj10.emojisHidden = emojisHidden;
        obj10.isSectionNitroLocked = tmp2.isNitroLocked;
        obj9.renderingData = obj10;
        let tmp47 = pushNativeCategory(obj9);
      } else {
        let obj7 = age_gate_AgeGateUtils;
        if (obj7.shouldNSFWGateGuild(guild.id)) {
          let obj11 = { type: null, label: null, footer: null, emojis: null, isSectionNitroLocked: null };
          obj11.type = constants3.NSFW;
          obj11.label = guild.name;
          obj11.footer = tmp3.GUILD;
          obj11.emojis = [];
          obj11.isSectionNitroLocked = tmp2.isNitroLocked;
          let arr = items.push(obj11);
        } else {
          let obj13 = { emojiSections: items, renderingData: null, rowSize: null };
          let obj15 = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null, isSectionNitroLocked: null };
          obj15.type = constants3.EMOJI;
          obj15.emojis = emojis;
          obj15.emojisDisabled = emojisDisabled;
          obj15.label = guild.name;
          obj15.footer = tmp3.GUILD;
          obj15.isSectionNitroLocked = tmp2.isNitroLocked;
          obj13.renderingData = obj15;
          obj13.rowSize = rowSize;
          let tmp35 = pushCategory(obj13);
        }
      }
    } else if (tmp3.UNICODE === type) {
      let tmp60 = importDefault;
      let obj19 = UnicodeEmojisDefault;
      let byCategory = obj19.getByCategory(tmp2.name);
      if (isNativeEmojiPickerEnabled) {
        let obj17 = { emojiSections: items, renderingData: null };
        let obj33 = { type: null, label: null, emojiCount: null, emojisDisabled: null, emojisHidden: null };
        obj33.type = constants3.NATIVE_SECTION;
        let tmp12 = pushNativeCategory;
        let tmp60Result = tmp60(12);
        obj33.label = tmp60Result.capitalize(tmp2.name);
        let num;
        if (byCategory != null) {
          num = byCategory.length;
        }
        if (num == null) {
          num = 0;
        }
        obj33.emojiCount = num;
        let _Set2 = Set;
        let tmp16 = new.target;
        let tmp17 = new.target;
        let set = new Set();
        obj33.emojisDisabled = set;
        let _Set3 = Set;
        let tmp20 = new.target;
        let tmp21 = new.target;
        let set1 = new Set();
        obj33.emojisHidden = set1;
        obj17.renderingData = obj33;
        let tmp12Result = tmp12(obj17);
      } else {
        let obj = { emojiSections: items, renderingData: null, rowSize: null };
        let obj34 = { type: null, emojis: null, emojisDisabled: null, label: null, footer: null };
        obj34.type = constants3.EMOJI;
        let items1 = byCategory;
        let tmp4 = pushCategory;
        if (byCategory == null) {
          items1 = [];
        }
        obj34.emojis = items1;
        let _Set = Set;
        let tmp6 = new.target;
        let tmp7 = new.target;
        let set2 = new Set();
        obj34.emojisDisabled = set2;
        let tmp60Result2 = tmp60(12);
        obj34.label = tmp60Result2.capitalize(tmp2.name);
        obj34.footer = tmp3.UNICODE;
        obj.renderingData = obj34;
        obj.rowSize = rowSize;
        let tmp4Result = tmp4(obj);
      }
    }
    continue;
  }
  return items;
}
function _computeSearchResults(emojis) {
  ({ locked, unlocked } = emojis.emojis);
  ({ rowSize, limit } = emojis);
  if (limit === undefined) {
    const _Number = Number;
    limit = Number.MAX_SAFE_INTEGER;
  }
  const items = [];
  const obj = { emojiSections: items, renderingData: null, rowSize: null };
  const obj2 = { type: constants3.EMOJI, emojis: null, emojisDisabled: null, label: "", footer: null };
  let substr = unlocked;
  if (unlocked.length > limit) {
    substr = unlocked.slice(0, limit);
  }
  obj2.emojis = substr;
  obj2.emojisDisabled = new Set();
  obj2.footer = constants2.SEARCH_RESULTS;
  obj.renderingData = obj2;
  obj.rowSize = rowSize;
  pushCategory(obj);
  let substr1 = locked;
  if (locked.length > limit) {
    substr1 = locked.slice(0, limit);
  }
  const set1 = new Set();
  const iter = locked[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (null != nextResult.id) {
      let addResult = set1.add(tmp8.id);
    }
    continue;
  }
  const obj3 = { emojiSections: items, renderingData: null, rowSize: null };
  const obj4 = { type: constants3.EMOJI, emojis: substr1, emojisDisabled: set1, label: null, footer: null };
  const set = new Set();
  obj4.label = EmojiPickerUtils.getStringForEmojiCategory(constants.PREMIUM_UPSELL);
  obj4.footer = constants2.PREMIUM_UPSELL;
  obj3.renderingData = obj4;
  obj3.rowSize = rowSize;
  pushCategory(obj3);
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
const EmojiPickerConstants = fn(5768);
({ EmojiCategories: hasOwnProperty, EmojiCategoryTypes: metroRequire } = EmojiPickerConstants);
const constants3 = fn(10638).EmojiPickerRenderingDataType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/useComputeEmojiPickerFunctions.tsx");

export default function useComputeEmojiPickerFunctions() {
  return _slicedToArray(noop.useState(() => {
    const obj = { computeCategories: FunctionUtils.cachedFunction(_computeCategories), computeSearchResults: null };
    obj.computeSearchResults = FunctionUtils.cachedFunction(_computeSearchResults);
    return obj;
  }), 1)[0];
};
