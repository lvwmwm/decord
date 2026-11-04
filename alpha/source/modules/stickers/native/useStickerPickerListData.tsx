// Module ID: 10478
// Function ID: 10479
// Name: useStickerPickerListData
// Dependencies: [19, 10447, 10414, 1228, 10200, 10446, 12, 1113, 6696, 10151, 2]
// Exports: default

// Module 10478 (useStickerPickerListData)
import _modDef12 from "module_12" /* 12 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1228 */;
import StickersTypes from "StickersTypes" /* 6696 */;
import PremiumUpsellSectionDivider from "PremiumUpsellSectionDivider" /* 10200 */;
import StickerPickerStore from "StickerPickerStore" /* 10447 */;
import react from "react" /* 19 */;
import StickerPickerConstants from "StickerPickerConstants" /* 10414 */;
import size from "module_2" /* 2 */;

let c5, packToScrollToIndex;

let LABEL_HEIGHT;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp2;
const age_gate_AgeGateUtils = tmp2(10151);
let useStickerPickerStore = StickerPickerStore.useStickerPickerStore;
({ MIN_MARGIN: hasOwnProperty, ROW_HEIGHT: metroRequire, STICKER_SIZE: metroImportDefault, LABEL_HEIGHT } = StickerPickerConstants);
const StickerPickerSectionType = { STICKERS: 0, [0]: "STICKERS", NSFW: 1, [1]: "NSFW" };
let closure_9 = LABEL_HEIGHT + 2 * ExpressionPickerConstants.PADDING_VERTICAL;
let closure_10 = PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
const result = size.fileFinishedImporting("modules/stickers/native/useStickerPickerListData.tsx");

export default function useStickerPickerListData(containerWidth) {
  let closure_4;
  let rowHeight;
  let sectionSize;
  containerWidth = containerWidth.containerWidth;
  const searchResults = containerWidth.searchResults;
  const stickerFormats = containerWidth.stickerFormats;
  useStickerPickerStore = undefined;
  const channel = containerWidth.channel;
  let obj = containerWidth(stickerFormats[5]);
  const stickerCategories = obj.useStickerCategories(channel);
  let tmp2 = useStickerPickerStore((packToScrollTo) => packToScrollTo.packToScrollTo);
  useStickerPickerStore = tmp2;
  let items = [containerWidth, stickerCategories, stickerFormats, searchResults, tmp2];
  return stickerCategories.useMemo(() => {
    let rounded;
    function pushCategory(nitroLocked, intl) {
      let obj;
      let str = intl;
      if (intl === undefined) {
        str = "";
      }
      let flag = arg3;
      if (arg3 === undefined) {
        flag = false;
      }
      if (true === arg2) {
        const obj2 = { type: obj.NSFW, stickersByRow: [] };
        items3.push(obj2);
        items.push(1);
      } else {
        const found = nitroLocked.filter((format_type) => items1.includes(format_type.format_type));
        obj = _modDef12;
        const chunkResult = obj.chunk(found, rounded);
        const obj3 = { type: obj.STICKERS, stickersByRow: chunkResult };
        items3.push(obj3);
        items.push(chunkResult.length);
      }
      items1.push(str);
      items2.push(flag);
    }
    rounded = Math.floor((rounded - closure_1_5) / (closure_1_7 + closure_1_5));
    const items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    packToScrollToIndex = undefined;
    if (null != items) {
      let num = 0;
      if (items.rest.length > 0) {
        let str = "";
        pushCategory(items.rest, "");
      }
      if (items.nitroLocked.length > 0) {
        const nitroLocked = tmp3.nitroLocked;
        const intl = containerWidth(stickerFormats[7]).intl;
        pushCategory(nitroLocked, intl.string(containerWidth(stickerFormats[7]).t.pAF6xE));
      }
    } else {
      const mapped = items2.map((id, index) => {
        if (closure_4 === id.id) {
          c5 = index;
        }
        let shouldNSFWGateGuildResult = id.type === StickersTypes.StickerCategoryTypes.GUILD;
        if (shouldNSFWGateGuildResult) {
          const tmp2Result = age_gate_AgeGateUtils;
          shouldNSFWGateGuildResult = tmp2Result.shouldNSFWGateGuild(id.id);
        }
        pushCategory(id.stickers, id.name, shouldNSFWGateGuildResult, true === id.isNitroLocked);
      });
    }
    let START = null;
    if (true === items2[0]) {
      START = containerWidth(stickerFormats[4]).PremiumUpsellSectionDividerPosition.START;
    }
    const mapped1 = items2.map((item, index) => {
      let flag = items2[index + 1];
      if (flag == null) {
        flag = false;
      }
      let tmp = null;
      if (item !== flag) {
        const PremiumUpsellSectionDividerPosition = rounded(items1[4]).PremiumUpsellSectionDividerPosition;
        tmp = flag ? PremiumUpsellSectionDividerPosition.START : PremiumUpsellSectionDividerPosition.END;
      }
      return tmp;
    });
    let num2 = 0;
    if (null != START) {
      num2 = closure_1_10;
    }
    const items4 = [];
    const mapped2 = mapped1.map((item) => {
      let num = 12;
      if (null != item) {
        num = closure_1_10;
      }
      return num;
    });
    if (null == items) {
      const push = items4.push;
      let sum = num2;
      const items5 = [];
      HermesBuiltin.arraySpread(items5, items.map((item, index) => {
        if (0 === index) {
          if (0 === item) {
            return 0;
          }
        }
        sum = item * pushCategory + sectionSize + mapped2[index] + sum;
        return sum;
      }), 0);
      HermesBuiltin.apply(push, items5, items4);
    }
    let obj = { sections: items, sectionHeights: items4, sectionSize, sectionFooterSize: 12, sectionFooterSizes: mapped2, sectionDividerPositions: mapped1, listHeaderDividerPosition: START, listHeaderSize: num2, sectionLabels: items1, sectionNitroLocked: items2, rowHeight, rowSize: rounded, rowsBySection: items3, packToScrollToIndex };
    return obj;
  }, items);
};
export { StickerPickerSectionType };
