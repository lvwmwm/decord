// Module ID: 9357
// Function ID: 73059
// Name: useEmojiPickerData
// Dependencies: [31, 4991, 4995, 9329, 566, 9358, 9359, 9360, 9362, 2]
// Exports: default

// Module 9357 (useEmojiPickerData)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { LoadState } from "_isNativeReflectConstruct";
import { EmojiCategoryTypes } from "EmojiCategoryTypes";
import { EmojiPickerRenderingDataType as closure_7 } from "IMAGE_SIZE";

const require = arg1;
let obj = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", TITLE: 1, [1]: "TITLE", EMOJI_ROW: 2, [2]: "EMOJI_ROW", EMOJI_ROW_SLIM: 3, [3]: "EMOJI_ROW_SLIM", EMOJI_ROW_NSFW: 4, [4]: "EMOJI_ROW_NSFW", FOOTER_UPSELL: 5, [5]: "FOOTER_UPSELL", PREMIUM_INLINE_ROADBLOCK: 6, [6]: "PREMIUM_INLINE_ROADBLOCK", NATIVE_SECTION: 7, [7]: "NATIVE_SECTION" };
const result = require("EmojiCategoryTypes").fileFinishedImporting("modules/emoji_picker/native/components/data/useEmojiPickerData.tsx");

export default function useEmojiPickerData(emojiSections) {
  emojiSections = emojiSections.emojiSections;
  const rowSize = emojiSections.rowSize;
  const isNativeEmojiPickerEnabled = emojiSections.isNativeEmojiPickerEnabled;
  let items = [_isNativeReflectConstruct];
  const stateFromStores = emojiSections(isNativeEmojiPickerEnabled[4]).useStateFromStores(items, () => {
    let tmp = outer1_4.loadState === outer1_5.Loaded;
    if (!tmp) {
      tmp = !isNativeEmojiPickerEnabled;
    }
    return tmp;
  });
  const items1 = [stateFromStores, emojiSections, rowSize, isNativeEmojiPickerEnabled];
  return stateFromStores.useMemo(() => {
    let obj = { type: outer1_8.PLACEHOLDER, isSectionNitroLocked: false };
    const items = [obj];
    obj = { data: items, rowSize: obj, headerIndices: [], hasGuildData: stateFromStores, hasSearchData: false, hasSearchUpsell: false };
    const item = items.forEach((isSectionNitroLocked) => {
      let tmp2 = tmp;
      let tmp3 = tmp2;
      if (true === isSectionNitroLocked.isSectionNitroLocked) {
        isSectionNitroLocked = undefined;
        if (null != items[arg1 - 1]) {
          isSectionNitroLocked = tmp5.isSectionNitroLocked;
        }
        tmp3 = true !== isSectionNitroLocked;
      }
      if (true === isSectionNitroLocked.isSectionNitroLocked) {
        let isSectionNitroLocked1;
        if (null != items[arg1 + 1]) {
          isSectionNitroLocked1 = tmp9.isSectionNitroLocked;
        }
        tmp2 = true !== isSectionNitroLocked1;
      }
      if (isSectionNitroLocked.type !== outer2_7.NATIVE_SECTION) {
        if (tmp3) {
          items.push(rowSize(isNativeEmojiPickerEnabled[6])(emojiSections(isNativeEmojiPickerEnabled[7]).PremiumUpsellSectionDividerPosition.START));
          const tmp19 = rowSize(isNativeEmojiPickerEnabled[6]);
        }
        if (null != isSectionNitroLocked.label) {
          let obj = { type: outer2_8.TITLE, title: isSectionNitroLocked.label, isSectionNitroLocked: tmp };
          items.push(obj);
          const headerIndices = obj.headerIndices;
          headerIndices.push(items.length - 1);
        }
        const _Math = Math;
        const rounded = Math.ceil(isSectionNitroLocked.emojis.length / obj);
        for (let num9 = 0; num9 < rounded; num9 = num9 + 1) {
          let tmp31 = outer1_2;
          if (outer1_2) {
            let tmp37 = 0 === num9;
            if (tmp37) {
              let tmp38 = outer2_7;
              tmp37 = isSectionNitroLocked.type === outer2_7.EMOJI;
            }
            if (tmp37) {
              let hasSearchData = obj.hasSearchData;
              let tmp39 = obj;
              if (!hasSearchData) {
                let tmp40 = outer2_6;
                hasSearchData = isSectionNitroLocked.footer === outer2_6.SEARCH_RESULTS;
              }
              if (!hasSearchData) {
                let tmp41 = outer2_6;
                hasSearchData = isSectionNitroLocked.footer === outer2_6.PREMIUM_UPSELL;
              }
              tmp39.hasSearchData = hasSearchData;
              let tmp42 = items;
              let tmp43 = rowSize;
              let tmp44 = isNativeEmojiPickerEnabled;
              let arr2 = items.push(rowSize(isNativeEmojiPickerEnabled[8])(isSectionNitroLocked));
            }
          } else {
            let type = isSectionNitroLocked.type;
            let tmp32 = outer2_7;
            if (outer2_7.EMOJI === type) {
              let tmp34 = items;
              obj = {};
              let tmp35 = outer2_8;
              obj.type = outer2_8.EMOJI_ROW;
              obj.row = num9;
              ({ emojis: obj2.emojis, emojisDisabled: obj2.emojisDisabled, footer: obj2.footer } = isSectionNitroLocked);
              obj.isSectionNitroLocked = tmp;
              let arr3 = items.push(obj);
            } else {
              let tmp33 = outer2_7;
              if (outer2_7.NSFW === type) {
                let tmp58 = items;
                obj = {};
                let tmp59 = outer2_8;
                obj.type = outer2_8.EMOJI_ROW_NSFW;
                obj.isSectionNitroLocked = tmp;
                let arr4 = items.push(obj);
              }
            }
          }
        }
        if (isSectionNitroLocked.footer === outer2_6.PREMIUM_UPSELL) {
          obj.hasSearchUpsell = true;
          const obj1 = { type: outer2_8.FOOTER_UPSELL, id: outer2_6.PREMIUM_UPSELL, isSectionNitroLocked: tmp };
          items.push(obj1);
        }
        if (tmp2) {
          items.push(rowSize(isNativeEmojiPickerEnabled[6])(emojiSections(isNativeEmojiPickerEnabled[7]).PremiumUpsellSectionDividerPosition.END));
          const tmp55 = rowSize(isNativeEmojiPickerEnabled[6]);
        }
      } else {
        items.push(rowSize(isNativeEmojiPickerEnabled[5])(isSectionNitroLocked, tmp3, tmp2));
      }
    });
    return obj;
  }, items1);
};
export const EmojiPickerItemType = obj;
