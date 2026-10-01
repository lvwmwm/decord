// Module ID: 9763
// Function ID: 9764
// Name: useEmojiPickerData
// Dependencies: [19, 5771, 5775, 9753, 504, 9764, 9765, 9766, 9768, 2]
// Exports: default

// Module 9763 (useEmojiPickerData)
import EmojiStore2 from "EmojiStore" /* 5771 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 5775 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9753 */;
import getEmojiPickerDataRowItemNativeSectionDefault from "getEmojiPickerDataRowItemNativeSection" /* 9764 */;
import getEmojiPickerDataRowPremiumInlineRoadblockDefault from "getEmojiPickerDataRowPremiumInlineRoadblock" /* 9765 */;
import PremiumUpsellSectionDivider from "PremiumUpsellSectionDivider" /* 9766 */;
import getEmojiPickerDataRowItemSlimEmojiDefault from "getEmojiPickerDataRowItemSlimEmoji" /* 9768 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const EmojiStore = EmojiStore2;
let isSectionNitroLocked;

const LoadState = EmojiStore2.LoadState;
const EmojiCategoryTypes = EmojiPickerConstants.EmojiCategoryTypes;
let closure_7 = EmojiPickerListConstants.EmojiPickerRenderingDataType;
const EmojiPickerItemType = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", TITLE: 1, [1]: "TITLE", EMOJI_ROW: 2, [2]: "EMOJI_ROW", EMOJI_ROW_SLIM: 3, [3]: "EMOJI_ROW_SLIM", EMOJI_ROW_NSFW: 4, [4]: "EMOJI_ROW_NSFW", FOOTER_UPSELL: 5, [5]: "FOOTER_UPSELL", PREMIUM_INLINE_ROADBLOCK: 6, [6]: "PREMIUM_INLINE_ROADBLOCK", NATIVE_SECTION: 7, [7]: "NATIVE_SECTION" };
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/data/useEmojiPickerData.tsx");

export default function useEmojiPickerData(emojiSections) {
  emojiSections = emojiSections.emojiSections;
  const rowSize = emojiSections.rowSize;
  const isNativeEmojiPickerEnabled = emojiSections.isNativeEmojiPickerEnabled;
  let obj = emojiSections(isNativeEmojiPickerEnabled[4]);
  let items = [EmojiStore];
  const stateFromStores = obj.useStateFromStores(items, () => EmojiStore.loadState === LoadState.Loaded || !isNativeEmojiPickerEnabled);
  const items1 = [stateFromStores, emojiSections, rowSize, isNativeEmojiPickerEnabled];
  return stateFromStores.useMemo(() => {
    let obj2;
    let obj = { type: constants.PLACEHOLDER, isSectionNitroLocked: false };
    const items = [obj];
    obj2 = { data: items, rowSize: obj2, headerIndices: [], hasGuildData: stateFromStores, hasSearchData: false, hasSearchUpsell: false };
    const item = items.forEach((isSectionNitroLocked, index) => {
      let obj;
      let tmp2 = tmp;
      let tmp3 = tmp2;
      if (tmp3) {
        isSectionNitroLocked = undefined;
        if (emojiSections[index - 1] != null) {
          isSectionNitroLocked = tmp5.isSectionNitroLocked;
        }
        tmp3 = true !== isSectionNitroLocked;
      }
      if (tmp2) {
        let isSectionNitroLocked1;
        if (emojiSections[index + 1] != null) {
          isSectionNitroLocked1 = tmp9.isSectionNitroLocked;
        }
        tmp2 = true !== isSectionNitroLocked1;
      }
      if (isSectionNitroLocked.type !== constants.NATIVE_SECTION) {
        let num6;
        if (tmp3) {
          const push = items.push;
          const tmp19 = getEmojiPickerDataRowPremiumInlineRoadblockDefault;
          push(tmp19(PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.START));
        }
        if (null != isSectionNitroLocked.label) {
          obj = { type: obj.TITLE, title: isSectionNitroLocked.label, isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked };
          items.push(obj);
          const headerIndices = obj2.headerIndices;
          headerIndices.push(items.length - 1);
        }
        const _Math = Math;
        const rounded = Math.ceil(isSectionNitroLocked.emojis.length / rowSize);
        for (let num6 = 0; num6 < rounded; num6 = num6 + 1) {
          if (isNativeEmojiPickerEnabled) {
            let tmp37 = 0 === num6;
            if (0 === num6) {
              tmp37 = isSectionNitroLocked.type === constants.EMOJI;
            }
            if (tmp37) {
              let hasSearchData = obj2.hasSearchData;
              let tmp39 = obj2;
              if (!hasSearchData) {
                hasSearchData = isSectionNitroLocked.footer === EmojiCategoryTypes.SEARCH_RESULTS;
              }
              if (!hasSearchData) {
                hasSearchData = isSectionNitroLocked.footer === EmojiCategoryTypes.PREMIUM_UPSELL;
              }
              tmp39.hasSearchData = hasSearchData;
              let arr11 = items.push(getEmojiPickerDataRowItemSlimEmojiDefault(isSectionNitroLocked));
            }
          } else {
            let type = isSectionNitroLocked.type;
            if (constants.EMOJI === type) {
              let obj3 = { type: obj.EMOJI_ROW, row: num6, emojis: null, emojisDisabled: null, footer: null, isSectionNitroLocked: tmp };
              ({ emojis: obj2.emojis, emojisDisabled: obj2.emojisDisabled, footer: obj2.footer } = isSectionNitroLocked);
              let arr12 = items.push(obj3);
            } else if (tmp33.NSFW === type) {
              let obj4 = { type: obj.EMOJI_ROW_NSFW, isSectionNitroLocked: tmp };
              let arr13 = items.push(obj4);
            }
          }
        }
        if (isSectionNitroLocked.footer === EmojiCategoryTypes.PREMIUM_UPSELL) {
          obj2.hasSearchUpsell = true;
          const obj7 = { type: obj.FOOTER_UPSELL, id: tmp46.PREMIUM_UPSELL, isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked };
          items.push(obj7);
        }
        if (tmp2) {
          const push2 = items.push;
          const tmp54 = getEmojiPickerDataRowPremiumInlineRoadblockDefault;
          push2(tmp54(PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.END));
        }
      } else {
        items.push(getEmojiPickerDataRowItemNativeSectionDefault(isSectionNitroLocked, tmp3, tmp2));
      }
    });
    return obj2;
  }, items1);
};
export { EmojiPickerItemType };
