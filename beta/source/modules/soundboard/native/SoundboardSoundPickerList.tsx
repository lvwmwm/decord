// Module ID: 16891
// Function ID: 16892
// Name: SoundboardSoundPickerList
// Dependencies: [19, 17, 1372, 16885, 21, 4836, 576, 5328, 1115, 9805, 504, 4488, 9421, 9767, 16892, 5288, 12, 5896, 1177, 16900, 9853, 4795, 8173, 9766, 6493, 4832, 2]

// Module 16891 (SoundboardSoundPickerList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import ClockIcon from "ClockIcon" /* 4795 */;
import Text_Text from "Text/Text" /* 4832 */;
import SoundboardTypes from "SoundboardTypes" /* 5328 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import FastListDefault from "FastList" /* 6493 */;
import TrophyIcon from "TrophyIcon" /* 8173 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9421 */;
import PremiumUpsellSectionDivider from "PremiumUpsellSectionDivider" /* 9766 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 9767 */;
import chunkDefault from "chunk" /* 9805 */;
import AssetRegistryDefault from "AssetRegistry" /* 9853 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16900 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 16885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
const PremiumUpsellSectionDividerDefault = PremiumUpsellSectionDivider;

let SOUND_BUTTON_HEIGHT;
let SOUND_ROW_HORIZONTAL_PADDING;
let SOUND_ROW_SPACING;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function getSectionLabel(category) {
  const type = category.category.categoryInfo.type;
  if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
    return category.category.categoryInfo.guild.name;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl4 = tmp(1115).intl;
    return intl4.string(intl5.t.Rtvk9X);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl3 = tmp(1115).intl;
    return intl3.string(intl5.t.y3LQCG);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl2 = tmp(1115).intl;
    return intl2.string(intl5.t["+cGVV6"]);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    return null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
    const intl = tmp(1115).intl;
    const obj = { guildName: category.category.categoryInfo.guild.name };
    return intl.formatToPlainString(intl5.t.GXs41w, obj);
  }
}
function SoundPickerButtonRow(row) {
  let isSectionLocked;
  let items1;
  let items2;
  let section;
  row = row.row;
  ({ sectionIndex: importDefault, section } = row);
  const channel = row.channel;
  let c5;
  const tmp = closure_10();
  let soundButtonNotFirst = tmp;
  let obj = row(section[10]);
  const items = [c5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = require("PremiumUtils");
    return obj.canUseSoundboardEverywhere(isSectionLocked.getCurrentUser());
  });
  if (null == section) {
    return null;
  } else {
    let result = !stateFromStores;
    if (result) {
      const tmp2Result = row(section[12]);
      result = tmp2Result.isSoundboardSectionNitroLocked(channel.guild_id, section.category.categoryInfo);
    }
    c5 = result;
    let obj2 = { style: items1, children: items2 };
    items1 = [tmp.row];
    let tmp7 = soundButtonNotFirst;
    const tmp6 = closure_8;
    if (result) {
      result = closure_7(tmp2(tmp3[13]).PremiumUpsellGradientBackground, {});
    }
    items2 = [result, ];
    const arr4 = section.soundsByRow[row];
    items2[1] = arr4.map(function(type, index) {
      let obj2;
      type = type.type;
      if (SoundboardTypes.SoundboardSoundItemType.SOUND === type) {
        const sound = type.sound;
        const obj = { sound, channel, soundGridLocation: obj2, style: soundButtonNotFirst, isSectionLocked };
        soundButtonNotFirst = null;
        obj2 = { section: importDefault, item: row };
        const SoundButton = tmp(16892).SoundButton;
        const tmp7 = metroImportDefault;
        if (index > 0) {
          soundButtonNotFirst = soundButtonNotFirst.soundButtonNotFirst;
        }
        const _HermesInternal = HermesInternal;
        return tmp7(SoundButton, obj, "" + importDefault.category.key + "-" + sound.soundId);
      } else if (SoundboardTypes.SoundboardSoundItemType.ADD_SOUND === type) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("ADD_SOUND Not implemented");
        throw error;
      }
    });
    return tmp6(tmp7, obj2);
  }
}
let View = react_native.View;
({ SOUND_ROW_HORIZONTAL_PADDING, SOUNDS_PER_ROW: metroRequire, SOUND_BUTTON_HEIGHT, SOUND_ROW_SPACING } = SoundboardStyleConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let sum = SOUND_BUTTON_HEIGHT + 8;
let c9 = sum;
let obj = { row: { height: sum, display: "flex", flexDirection: "row", paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING }, sectionHeader: obj2, sectionIcon: { height: 16, width: 16, borderRadius: 8, marginRight: 4 }, soundButtonNotFirst: { marginLeft: SOUND_ROW_SPACING } };
obj2 = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 16, paddingBottom: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING };
let closure_10 = createStyles.createStyles(obj);
const memoResult = react.memo(function SoundboardSoundPickerListComponent(channel) {
  let categories;
  function calculateRowsPerSection(categories, arg1) {
    const items = [];
    const iter = categories[Symbol.iterator]();
    while (iter !== undefined) {
      let _Math = Math;
      let arr = items.push(Math.ceil(iter.next().items.length / arg1));
      continue;
    }
    return items;
  }
  function getFastListSectionsFromCategories(categories, arg1, fontScale) {
    const items = [];
    const iter = categories[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let arr2 = chunkDefault(nextResult.items, arg1);
      let obj = { category: nextResult, height: arr2.length * closure_9 + (18 * fontScale + 8), soundsByRow: arr2 };
      let arr = items.push(obj);
      continue;
    }
    return items;
  }
  channel = channel.channel;
  let num = channel.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ scrollPosition: importDefault, onScroll: dependencyMap, setCategoryIndex: react, shouldShowPremiumUpsell: View, categories } = channel);
  let closure_6;
  closure_10 = undefined;
  function getSectionPosition(arg0) {
    const diff = arg0 - 1;
    let result = !closure_10 && null != closure_6[diff];
    if (result) {
      const obj = PremiumFeatureUpsellUtils;
      result = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[diff].category.categoryInfo);
    }
    let result1 = !tmp2 && null != closure_6[arg0];
    if (result1) {
      const obj2 = PremiumFeatureUpsellUtils;
      result1 = obj2.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[arg0].category.categoryInfo);
    }
    sum = arg0 + 1;
    let result2 = !tmp2 && null != closure_6[sum];
    if (result2) {
      const obj3 = PremiumFeatureUpsellUtils;
      result2 = obj3.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[sum].category.categoryInfo);
    }
    if (!result1) {
      if (result2) {
        let START;
        if (!result) {
          START = PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.START;
        }
        return START;
      }
    }
    let END = null;
    if (result1) {
      END = null;
      if (!result2) {
        END = PremiumUpsellSectionDivider.PremiumUpsellSectionDividerPosition.END;
      }
    }
    START = END;
  }
  const listRef = channel.listRef;
  const currentUser = closure_10();
  let obj = channel(5288);
  const fontScale = obj.useFontScale();
  let tmp2 = calculateRowsPerSection(categories, closure_6);
  let tmp3 = getFastListSectionsFromCategories(categories, closure_6, fontScale);
  closure_6 = tmp3;
  let items = [tmp3];
  let closure_7 = react.useMemo(() => closure_6.map((height) => height.height), items);
  const items1 = [tmp3, channel];
  const callback = react.useCallback((sectionIndex, row) => {
    const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
    return metroImportDefault(SoundPickerButtonRow, obj);
  }, items1);
  let obj2 = channel(12);
  let closure_8 = obj2.debounce((arg0) => {
    const rounded = Math.round(arg0);
    let num = 0;
    if (0 < closure_7.length) {
      let first = closure_7[0];
      let num3 = 0;
      let num4 = 0;
      num = 0;
      if (rounded >= first) {
        sum = num4 + 1;
        const sum1 = num3 + 1;
        num = sum;
        while (sum1 < closure_7.length) {
          first = first + closure_7[sum1];
          num3 = sum1;
          num4 = sum;
          num = sum;
          if (rounded < first) {
            break;
          }
        }
      }
    }
    react(num);
  });
  let obj3 = channel(12);
  let closure_9 = obj3.debounce((arg0, arg1) => {
    const result = -arg1 / 2;
    const rounded = Math.round(arg0);
    let arr = closure_7;
    let num = 0;
    if (0 < closure_7.length) {
      sum = result + tmp3[0];
      let num3 = 0;
      let num4 = 0;
      arr = tmp3;
      num = 0;
      if (rounded >= sum) {
        const sum1 = num4 + 1;
        const sum2 = num3 + 1;
        arr = closure_7;
        num = sum1;
        while (sum2 < closure_7.length) {
          sum = sum + tmp7[sum2];
          num3 = sum2;
          num4 = sum1;
          arr = tmp7;
          num = sum1;
          if (rounded < sum) {
            break;
          }
        }
      }
    }
    View = View.set;
    const bound = Math.min(num, arr.length - 1);
    let result1 = !closure_10 && null != closure_6[bound];
    if (result1) {
      const obj = PremiumFeatureUpsellUtils;
      result1 = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[bound].category.categoryInfo);
    }
    const result2 = View(result1);
  });
  let obj4 = channel(504);
  const items2 = [currentUser];
  closure_10 = obj4.useStateFromStores(items2, () => {
    const obj = PremiumUtilsDefault;
    return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
  });
  let obj5 = {
    onLayout(nativeEvent) {
      return closure_9(0, nativeEvent.nativeEvent.layout.height);
    },
    sections: tmp2,
    sectionSize(arg0) {
      let num2;
      if (null == closure_6[arg0]) {
        num2 = 0;
      } else {
        num2 = 42;
      }
      return num2;
    },
    itemSize(arg0) {
      let num = 0;
      if (null != closure_6[arg0]) {
        num = c9;
      }
      return num;
    },
    sectionFooterSize(arg0) {
      let num = 0;
      if (null != getSectionPosition(arg0)) {
        num = PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
      }
      return num;
    },
    ref: listRef,
    renderItem: callback,
    renderSection(arg0) {
      let items;
      let tmp8Result;
      let result = !closure_10 && null != tmp[arg0];
      if (result) {
        const obj = PremiumFeatureUpsellUtils;
        result = obj.isSoundboardSectionNitroLocked(channel.guild_id, tmp[arg0].category.categoryInfo);
      }
      const obj2 = { style: currentUser.sectionHeader, children: items };
      const tmp10 = metroImportAll;
      if (result) {
        result = tmp8(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
      }
      items = [result, , ];
      const type = tmp2.category.categoryInfo.type;
      if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
        const obj3 = { size: GuildIcon.GuildIconSizes.XXSMALL_12, guild: closure_6[arg0].category.categoryInfo.guild, style: currentUser.sectionIcon };
        const tmp27 = GuildIconDefault;
        tmp8Result = tmp8(tmp27, obj3);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
        const obj4 = { source: AssetRegistryDefault2, style: currentUser.sectionIcon };
        const Icon2 = native.Icon;
        tmp8Result = tmp8(Icon2, obj4);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
        const obj5 = { source: AssetRegistryDefault, style: currentUser.sectionIcon };
        const Icon = native.Icon;
        tmp8Result = tmp8(Icon, obj5);
      } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
        const obj6 = { style: currentUser.sectionIcon };
        tmp8Result = tmp8(ClockIcon.ClockIcon, obj6);
      } else {
        tmp8Result = null;
        if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH !== type) {
          if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
            const obj7 = { style: currentUser.sectionIcon };
            tmp8Result = tmp8(TrophyIcon.TrophyIcon, obj7);
          }
        }
      }
      items[1] = tmp8Result;
      const obj8 = { children: tmp10(View, obj2) };
      const obj9 = { accessibilityRole: "header", lineClamp: 1, variant: "heading-sm/semibold", children: getSectionLabel(closure_6[arg0]) };
      const Text = Text_Text.Text;
      items[2] = metroImportDefault(Text, obj9);
      return metroImportDefault(View, obj8, closure_6[arg0].category.key);
    },
    renderSectionFooter(arg0) {
      const tmp = getSectionPosition(arg0);
      let tmp2 = null;
      if (null != tmp) {
        const obj = { position: tmp };
        tmp2 = metroImportDefault(PremiumUpsellSectionDividerDefault, obj);
      }
      return tmp2;
    },
    insetEnd: num,
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const y = nativeEvent.contentOffset.y;
      closure_8(y);
      closure_9(y, nativeEvent.layoutMeasurement.height);
      if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y < nativeEvent.contentSize.height - 20) {
        const obj = importDefault;
        if (null != importDefault) {
          const result = obj.set(y);
        }
        if (dependencyMap != null) {
          dependencyMap(nativeEvent);
        }
      }
    },
    keyboardShouldPersistTaps: "handled",
    optimizeListItemRender: true,
    inActionSheet: true
  };
  return closure_7(FastListDefault, obj5);
});
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerList.tsx");

export const SoundboardSoundPickerList = memoResult;
