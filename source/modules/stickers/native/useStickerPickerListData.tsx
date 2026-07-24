// Module ID: 9668
// Function ID: 75225
// Name: useStickerPickerListData
// Dependencies: [31, 9639, 9604, 1314, 9638, 22, 1212, 4799, 9384, 2]
// Exports: default

// Module 9668 (useStickerPickerListData)
import result from "result";
import { useStickerPickerStore } from "useStickerPickerStore";
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ MIN_MARGIN: closure_5, ROW_HEIGHT: closure_6, STICKER_SIZE: closure_7 } = PADDING_HORIZONTAL);
let obj = { STICKERS: 0, [0]: "STICKERS", NSFW: 1, [1]: "NSFW" };
let closure_9 = PADDING_HORIZONTAL.LABEL_HEIGHT + 2 * require("ExpressionPickerViewType").PADDING_VERTICAL;
const result = require("PADDING_HORIZONTAL").fileFinishedImporting("modules/stickers/native/useStickerPickerListData.tsx");

export default function useStickerPickerListData(containerWidth) {
  containerWidth = containerWidth.containerWidth;
  const searchResults = containerWidth.searchResults;
  const stickerFormats = containerWidth.stickerFormats;
  const stickerCategories = containerWidth(stickerFormats[4]).useStickerCategories(containerWidth.channel);
  const tmp2 = useStickerPickerStore((packToScrollTo) => packToScrollTo.packToScrollTo);
  useStickerPickerStore = tmp2;
  let items = [containerWidth, stickerCategories, stickerFormats, searchResults, tmp2];
  return stickerCategories.useMemo(() => {
    function pushCategory(items, intl) {
      let str = intl;
      if (intl === undefined) {
        str = "";
      }
      if (true === arg2) {
        let obj = { type: outer2_8.NSFW, stickersByRow: [] };
        items3.push(obj);
        items.push(1);
      } else {
        const found = items.filter((format_type) => items2.includes(format_type.format_type));
        obj = searchResults(stickerFormats[5]);
        const chunkResult = obj.chunk(found, rounded);
        obj = { type: outer2_8.STICKERS, stickersByRow: chunkResult };
        items3.push(obj);
        items.push(chunkResult.length);
      }
      items2.push(str);
    }
    rounded = Math.floor((rounded - outer1_5) / (outer1_7 + outer1_5));
    const items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    let c4;
    if (null != items) {
      const intl = containerWidth(stickerFormats[6]).intl;
      pushCategory(items, intl.string(containerWidth(stickerFormats[6]).t["zkoeq/"]));
    } else {
      const mapped = items3.map((id) => {
        if (c4 === id.id) {
          let closure_4 = arg1;
        }
        let shouldNSFWGateGuildResult = id.type === containerWidth(stickerFormats[7]).StickerCategoryTypes.GUILD;
        if (shouldNSFWGateGuildResult) {
          shouldNSFWGateGuildResult = containerWidth(stickerFormats[8]).shouldNSFWGateGuild(id.id);
          const obj = containerWidth(stickerFormats[8]);
        }
        pushCategory(id.stickers, id.name, shouldNSFWGateGuildResult);
      });
      const push = items1.push;
      const items4 = [];
      HermesBuiltin.arraySpread((function getSectionHeights(items) {
        let c0 = 0;
        return items.map((arg0, arg1) => {
          if (0 === arg1) {
            if (0 === arg0) {
              return 0;
            }
          }
          const sum = arg0 * outer3_6 + outer3_9 + 12 + c0;
          c0 = sum;
          return sum;
        });
      })(items), 0);
      HermesBuiltin.apply(items4, items1);
    }
    return { sections: items, sectionHeights: items1, sectionSize: outer1_9, sectionFooterSize: 12, sectionLabels: items2, rowHeight: outer1_6, rowSize: rounded, rowsBySection: items3, packToScrollToIndex: c4 };
  }, items);
};
export const StickerPickerSectionType = obj;
