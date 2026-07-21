// Module ID: 9624
// Function ID: 74949
// Name: useStickerPickerListData
// Dependencies: [0, 0, 0]
// Exports: default

// Module 9624 (useStickerPickerListData)
import closure_3 from "__exportStarResult1";
import { useStickerPickerStore } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ MIN_MARGIN: closure_5, ROW_HEIGHT: closure_6, STICKER_SIZE: closure_7 } = __exportStarResult1);
const obj = { STICKERS: 0, [0]: "STICKERS", NSFW: 1, [1]: "NSFW" };
let closure_9 = __exportStarResult1.LABEL_HEIGHT + 2 * arg1(dependencyMap[3]).PADDING_VERTICAL;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/stickers/native/useStickerPickerListData.tsx");

export default function useStickerPickerListData(containerWidth) {
  containerWidth = containerWidth.containerWidth;
  const arg1 = containerWidth;
  const importDefault = searchResults;
  const stickerFormats = containerWidth.stickerFormats;
  const dependencyMap = stickerFormats;
  const stickerCategories = arg1(dependencyMap[4]).useStickerCategories(containerWidth.channel);
  const React = stickerCategories;
  const tmp2 = useStickerPickerStore((packToScrollTo) => packToScrollTo.packToScrollTo);
  const useStickerPickerStore = tmp2;
  const items = [containerWidth, stickerCategories, stickerFormats, containerWidth.searchResults, tmp2];
  return React.useMemo(() => {
    function pushCategory(searchResults, intl) {
      let str = intl;
      if (intl === undefined) {
        str = "";
      }
      if (true === arg2) {
        let obj = { type: constants.NSFW, stickersByRow: [] };
        items3.push(obj);
        items.push(1);
      } else {
        const found = searchResults.filter((format_type) => closure_2.includes(format_type.format_type));
        obj = items(items2[5]);
        const chunkResult = obj.chunk(found, rounded);
        obj = { type: constants.STICKERS, stickersByRow: chunkResult };
        items3.push(obj);
        items.push(chunkResult.length);
      }
      items2.push(str);
    }
    const rounded = Math.floor((containerWidth - pushCategory) / (closure_7 + pushCategory));
    const containerWidth = rounded;
    const items = [];
    const items1 = [];
    const items2 = [];
    const stickerFormats = items2;
    const items3 = [];
    const stickerCategories = items3;
    let closure_4;
    if (null != items) {
      const intl = containerWidth(stickerFormats[6]).intl;
      pushCategory(searchResults, intl.string(containerWidth(stickerFormats[6]).t.zkoeq/));
    } else {
      const mapped = stickerCategories.map((id) => {
        if (closure_4 === id.id) {
          closure_4 = arg1;
        }
        let shouldNSFWGateGuildResult = id.type === rounded(items2[7]).StickerCategoryTypes.GUILD;
        if (shouldNSFWGateGuildResult) {
          shouldNSFWGateGuildResult = rounded(items2[8]).shouldNSFWGateGuild(id.id);
          const obj = rounded(items2[8]);
        }
        pushCategory(id.stickers, id.name, shouldNSFWGateGuildResult);
      });
      const push = items1.push;
      const items4 = [];
      HermesBuiltin.arraySpread(function getSectionHeights(items) {
        let closure_0 = 0;
        return items.map((arg0, arg1) => {
          if (0 === arg1) {
            if (0 === arg0) {
              return 0;
            }
          }
          const sum = arg0 * closure_6 + closure_9 + 12 + closure_0;
          closure_0 = sum;
          return sum;
        });
      }(items), 0);
      HermesBuiltin.apply(items4, items1);
    }
    return { sections: items, sectionHeights: items1, sectionSize: closure_9, sectionFooterSize: 12, sectionLabels: items2, rowHeight: closure_6, rowSize: rounded, rowsBySection: items3, packToScrollToIndex: closure_4 };
  }, items);
};
export const StickerPickerSectionType = obj;
