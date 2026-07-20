// Module ID: 9345
// Function ID: 72980
// Name: useEmojiPickerData
// Dependencies: []
// Exports: default

// Module 9345 (useEmojiPickerData)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const LoadState = arg1(dependencyMap[1]).LoadState;
const EmojiCategoryTypes = arg1(dependencyMap[2]).EmojiCategoryTypes;
let closure_7 = arg1(dependencyMap[3]).EmojiPickerRenderingDataType;
const obj = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", TITLE: 1, [1]: "TITLE", EMOJI_ROW: 2, [2]: "EMOJI_ROW", EMOJI_ROW_SLIM: 3, [3]: "EMOJI_ROW_SLIM", EMOJI_ROW_NSFW: 4, [4]: "EMOJI_ROW_NSFW", FOOTER_UPSELL: 5, [5]: "FOOTER_UPSELL", PREMIUM_INLINE_ROADBLOCK: 6, [6]: "PREMIUM_INLINE_ROADBLOCK", NATIVE_SECTION: 7, [7]: "NATIVE_SECTION" };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/emoji_picker/native/components/data/useEmojiPickerData.tsx");

export default function useEmojiPickerData(emojiSections) {
  emojiSections = emojiSections.emojiSections;
  const arg1 = emojiSections;
  const rowSize = emojiSections.rowSize;
  const importDefault = rowSize;
  const isNativeEmojiPickerEnabled = emojiSections.isNativeEmojiPickerEnabled;
  const dependencyMap = isNativeEmojiPickerEnabled;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let tmp = loadState.loadState === Loaded.Loaded;
    if (!tmp) {
      tmp = !isNativeEmojiPickerEnabled;
    }
    return tmp;
  });
  const React = stateFromStores;
  const items1 = [stateFromStores, emojiSections, rowSize, isNativeEmojiPickerEnabled];
  return React.useMemo(() => {
    let obj = { type: constants.PLACEHOLDER, isSectionNitroLocked: false };
    const items = [obj];
    const emojiSections = items;
    obj = { data: items, rowSize, headerIndices: [], hasGuildData: stateFromStores, hasSearchData: false, hasSearchUpsell: false };
    const rowSize = obj;
    const item = emojiSections.forEach((isSectionNitroLocked) => {
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
      if (isSectionNitroLocked.type !== constants2.NATIVE_SECTION) {
        if (tmp3) {
          items.push(obj(closure_2[6])(items(closure_2[7]).PremiumUpsellSectionDividerPosition.START));
          const tmp19 = obj(closure_2[6]);
        }
        if (null != isSectionNitroLocked.label) {
          let obj = { type: constants3.TITLE, title: isSectionNitroLocked.label, isSectionNitroLocked: tmp };
          items.push(obj);
          const headerIndices = obj.headerIndices;
          headerIndices.push(items.length - 1);
        }
        const _Math = Math;
        const rounded = Math.ceil(isSectionNitroLocked.emojis.length / obj);
        for (let num9 = 0; num9 < rounded; num9 = num9 + 1) {
          let tmp31 = closure_2;
          if (closure_2) {
            let tmp37 = 0 === num9;
            if (tmp37) {
              let tmp38 = constants2;
              tmp37 = isSectionNitroLocked.type === constants2.EMOJI;
            }
            if (tmp37) {
              let hasSearchData = obj.hasSearchData;
              let tmp39 = obj;
              if (!hasSearchData) {
                let tmp40 = constants;
                hasSearchData = isSectionNitroLocked.footer === constants.SEARCH_RESULTS;
              }
              if (!hasSearchData) {
                let tmp41 = constants;
                hasSearchData = isSectionNitroLocked.footer === constants.PREMIUM_UPSELL;
              }
              tmp39.hasSearchData = hasSearchData;
              let tmp42 = items;
              let tmp43 = obj;
              let tmp44 = closure_2;
              let arr2 = items.push(obj(closure_2[8])(isSectionNitroLocked));
            }
          } else {
            let type = isSectionNitroLocked.type;
            let tmp32 = constants2;
            if (constants2.EMOJI === type) {
              let tmp34 = items;
              obj = {};
              let tmp35 = constants3;
              obj.type = constants3.EMOJI_ROW;
              obj.row = num9;
              ({ emojis: obj2.emojis, emojisDisabled: obj2.emojisDisabled, footer: obj2.footer } = isSectionNitroLocked);
              obj.isSectionNitroLocked = tmp;
              let arr3 = items.push(obj);
            } else {
              let tmp33 = constants2;
              if (constants2.NSFW === type) {
                let tmp58 = items;
                obj = {};
                let tmp59 = constants3;
                obj.type = constants3.EMOJI_ROW_NSFW;
                obj.isSectionNitroLocked = tmp;
                let arr4 = items.push(obj);
              }
            }
          }
        }
        if (isSectionNitroLocked.footer === constants.PREMIUM_UPSELL) {
          obj.hasSearchUpsell = true;
          const obj1 = { type: constants3.FOOTER_UPSELL, id: constants.PREMIUM_UPSELL, isSectionNitroLocked: tmp };
          items.push(obj1);
        }
        if (tmp2) {
          items.push(obj(closure_2[6])(items(closure_2[7]).PremiumUpsellSectionDividerPosition.END));
          const tmp55 = obj(closure_2[6]);
        }
      } else {
        items.push(obj(closure_2[5])(isSectionNitroLocked, tmp3, tmp2));
      }
    });
    return obj;
  }, items1);
};
export const EmojiPickerItemType = obj;
