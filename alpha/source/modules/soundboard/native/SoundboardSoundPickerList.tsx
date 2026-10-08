// Module ID: 17545
// Function ID: 17546
// Name: SoundboardSoundPickerList
// Dependencies: [19, 17, 1389, 17539, 21, 5090, 587, 7039, 1126, 9491, 558, 576, 4726, 504, 9394, 9443, 17546, 5382, 12, 6161, 1200, 17554, 9714, 5049, 8895, 5086, 9442, 6752, 2]

// Module 17545 (SoundboardSoundPickerList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4726 */;
import ClockIcon from "ClockIcon" /* 5049 */;
import Text_Text from "Text/Text" /* 5086 */;
import GuildIcon from "GuildIcon" /* 6161 */;
import FastListDefault from "FastList" /* 6752 */;
import SoundboardTypes from "SoundboardTypes" /* 7039 */;
import TrophyIcon from "TrophyIcon" /* 8895 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9394 */;
import PremiumUpsellSectionDivider from "PremiumUpsellSectionDivider" /* 9442 */;
import PremiumUpsellGradientBackground from "PremiumUpsellGradientBackground" /* 9443 */;
import chunkDefault from "chunk" /* 9491 */;
import AssetRegistryDefault from "AssetRegistry" /* 9714 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17554 */;
import react from "react" /* 19 */;
import UserStore_mod from "UserStore" /* 1389 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 17539 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
const PremiumUpsellSectionDividerDefault = PremiumUpsellSectionDivider;
let closure_12;

let SOUND_BUTTON_HEIGHT;
let SOUND_ROW_HORIZONTAL_PADDING;
let SOUND_ROW_SPACING;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function calculateRowsPerSection(arg0, arg1) {
  const items = [];
  const iter = arg0[Symbol.iterator]();
  while (iter !== undefined) {
    let _Math = Math;
    let arr = items.push(Math.ceil(iter.next().items.length / arg1));
    continue;
  }
  return items;
}
function getSectionLabel(arr) {
  const type = arr.category.categoryInfo.type;
  if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
    return arr.category.categoryInfo.guild.name;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl4 = tmp(1126).intl;
    return intl4.string(intl5.t.Rtvk9X);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl3 = tmp(1126).intl;
    return intl3.string(intl5.t.y3LQCG);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl2 = tmp(1126).intl;
    return intl2.string(intl5.t["+cGVV6"]);
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    return null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
    const intl = tmp(1126).intl;
    const obj = { guildName: arr.category.categoryInfo.guild.name };
    return intl.formatToPlainString(intl5.t.GXs41w, obj);
  }
}
function getFastListSectionsFromCategories(categories, fastListSectionsFromCategories, fontScale) {
  const items = [];
  const iter = categories[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let arr2 = chunkDefault(nextResult.items, fastListSectionsFromCategories);
    let obj = { category: nextResult, height: arr2.length * c9 + (18 * fontScale + 8), soundsByRow: arr2 };
    let arr = items.push(obj);
    continue;
  }
  return items;
}
let View = react_native.View;
let UserStore = UserStore_mod;
({ SOUND_ROW_HORIZONTAL_PADDING, SOUNDS_PER_ROW: metroRequire, SOUND_BUTTON_HEIGHT, SOUND_ROW_SPACING } = SoundboardStyleConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let sum = SOUND_BUTTON_HEIGHT + 8;
let c9 = sum;
let obj = { row: { height: sum, display: "flex", flexDirection: "row", paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING }, sectionHeader: obj2, sectionIcon: { height: 16, width: 16, borderRadius: 8, marginRight: 4 }, soundButtonNotFirst: { marginLeft: SOUND_ROW_SPACING } };
obj2 = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 16, paddingBottom: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function SoundPickerButtonRow(row) {
  let isSectionLocked;
  let items1;
  let section;
  let tmp5;
  let tmp6;
  const tmp = row;
  let obj = row(section[11]);
  const cResult = obj.c(27);
  row = row.row;
  const sectionIndex = row.sectionIndex;
  section = row.section;
  const channel = row.channel;
  const tmp4 = closure_10();
  let soundButtonNotFirst = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7 = isSectionLocked;
    const items = [isSectionLocked];
    const fn = function c() {
      const obj = sectionIndex(section[12]);
      return obj.canUseSoundboardEverywhere(isSectionLocked.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(section[13]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (null == section) {
    return null;
  } else {
    if (cResult[2] === stateFromStores) {
      if (cResult[3] === channel) {
        let tmp9;
        let tmp11;
        let tmp14;
        if (cResult[4] === section.category) {
          tmp9 = cResult[5];
        }
        isSectionLocked = tmp9;
        const row2 = tmp4.row;
        if (cResult[6] !== tmp9) {
          let tmp12 = tmp9;
          if (tmp12) {
            tmp12 = closure_7(tmp(tmp2[15]).PremiumUpsellGradientBackground, {});
          }
          cResult[6] = tmp9;
          cResult[7] = tmp12;
          tmp11 = tmp12;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] === channel) {
          if (cResult[9] === tmp9) {
            if (cResult[10] === row) {
              if (cResult[11] === section.category) {
                if (cResult[12] === sectionIndex) {
                  if (cResult[13] === tmp4.soundButtonNotFirst) {
                    if (cResult[14] === section.soundsByRow[row]) {
                      tmp14 = cResult[15];
                    }
                    if (cResult[23] === tmp4.row) {
                      if (cResult[24] === tmp11) {
                        let tmp17;
                        if (cResult[25] === tmp14) {
                          tmp17 = cResult[26];
                        }
                        return tmp17;
                      }
                    }
                    let obj2 = { style: row2, children: items1 };
                    items1 = [tmp11, tmp14];
                    const tmp20 = closure_8(soundButtonNotFirst, obj2);
                    cResult[23] = tmp4.row;
                    cResult[24] = tmp11;
                    cResult[25] = tmp14;
                    cResult[26] = tmp20;
                    tmp17 = tmp20;
                  }
                }
              }
            }
          }
        }
        if (cResult[16] === channel) {
          if (cResult[17] === tmp9) {
            if (cResult[18] === row) {
              if (cResult[19] === section.category) {
                if (cResult[20] === sectionIndex) {
                  let tmp15;
                  if (cResult[21] === tmp4.soundButtonNotFirst) {
                    tmp15 = cResult[22];
                  }
                  const mapped = arr2.map(tmp15);
                  cResult[8] = channel;
                  cResult[9] = tmp9;
                  cResult[10] = row;
                  cResult[11] = section.category;
                  cResult[12] = sectionIndex;
                  cResult[13] = tmp4.soundButtonNotFirst;
                  cResult[14] = section.soundsByRow[row];
                  cResult[15] = mapped;
                  tmp14 = mapped;
                }
              }
            }
          }
        }
        const fn2 = function _(type, arg1) {
          let obj2;
          type = type.type;
          if (SoundboardTypes.SoundboardSoundItemType.SOUND === type) {
            const sound = type.sound;
            const obj = { sound, channel, soundGridLocation: obj2, style: soundButtonNotFirst, isSectionLocked };
            soundButtonNotFirst = null;
            obj2 = { section: sectionIndex, item: row };
            const SoundButton = tmp(17546).SoundButton;
            const tmp7 = metroImportDefault;
            if (arg1 > 0) {
              soundButtonNotFirst = soundButtonNotFirst.soundButtonNotFirst;
            }
            const _HermesInternal = HermesInternal;
            return tmp7(SoundButton, obj, "" + section.category.key + "-" + sound.soundId);
          } else if (SoundboardTypes.SoundboardSoundItemType.ADD_SOUND === type) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("ADD_SOUND Not implemented");
            throw error;
          }
        };
        cResult[16] = channel;
        cResult[17] = tmp9;
        cResult[18] = row;
        cResult[19] = section.category;
        cResult[20] = sectionIndex;
        cResult[21] = tmp4.soundButtonNotFirst;
        cResult[22] = fn2;
        tmp15 = fn2;
      }
    }
    let result = !stateFromStores;
    if (result) {
      const tmpResult2 = tmp(section[14]);
      result = tmpResult2.isSoundboardSectionNitroLocked(channel.guild_id, section.category.categoryInfo);
    }
    cResult[2] = stateFromStores;
    cResult[3] = channel;
    cResult[4] = section.category;
    cResult[5] = result;
    tmp9 = result;
  }
}) : (function SoundPickerButtonRow(row) {
  let isSectionLocked;
  let items1;
  let section;
  row = row.row;
  ({ sectionIndex: importDefault, section } = row);
  const channel = row.channel;
  let c5;
  const tmp = closure_10();
  let soundButtonNotFirst = tmp;
  let obj = row(section[13]);
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
      const tmp2Result = row(section[14]);
      result = tmp2Result.isSoundboardSectionNitroLocked(channel.guild_id, section.category.categoryInfo);
    }
    c5 = result;
    let obj2 = { style: tmp.row, children: items1 };
    let tmp7 = soundButtonNotFirst;
    const tmp6 = closure_8;
    if (result) {
      result = closure_7(tmp2(tmp3[15]).PremiumUpsellGradientBackground, {});
    }
    items1 = [result, ];
    const arr3 = section.soundsByRow[row];
    items1[1] = arr3.map(function(type, index) {
      let obj2;
      type = type.type;
      if (SoundboardTypes.SoundboardSoundItemType.SOUND === type) {
        const sound = type.sound;
        const obj = { sound, channel, soundGridLocation: obj2, style: soundButtonNotFirst, isSectionLocked };
        soundButtonNotFirst = null;
        obj2 = { section: importDefault, item: row };
        const SoundButton = tmp(17546).SoundButton;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SoundboardSoundPickerListComponent(channel) {
  let arr;
  let categories;
  let closure_11;
  let closure_13;
  let currentUser;
  let debounceResult;
  let insetBottom;
  let listRef;
  let setCategoryIndex;
  let tmp6;
  let tmp = channel;
  let tmp2 = dependencyMap;
  let obj = channel(576);
  const cResult = obj.c(44);
  channel = channel.channel;
  ({ insetBottom, listRef, scrollPosition: importDefault, onScroll: dependencyMap, setCategoryIndex } = channel);
  ({ shouldShowPremiumUpsell: View, categories } = channel);
  let num = 0;
  if (undefined !== insetBottom) {
    num = insetBottom;
  }
  const tmp4 = debounceResult();
  UserStore = tmp4;
  const tmpResult = tmp(5382);
  const fontScale = tmpResult.useFontScale();
  if (cResult[0] !== categories) {
    const tmp8 = arr;
    const tmp9 = calculateRowsPerSection(categories, arr);
    cResult[0] = categories;
    let num2 = 1;
    cResult[1] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === categories) {
    let tmp11;
    if (cResult[3] === fontScale) {
      arr = cResult[4];
    }
    if (cResult[5] !== arr) {
      let tmp13;
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function k(height) {
          return height.height;
        };
        let num3 = 7;
        cResult[7] = fn;
        tmp13 = fn;
      } else {
        tmp13 = cResult[7];
      }
      const mapped = arr.map(tmp13);
      let num4 = 5;
      cResult[5] = arr;
      cResult[6] = mapped;
      tmp11 = mapped;
    } else {
      tmp11 = cResult[6];
    }
    let closure_7 = tmp11;
    if (cResult[8] === channel) {
      let tmp15;
      let tmp16;
      if (cResult[9] === arr) {
        tmp15 = cResult[10];
      }
      if (cResult[11] !== tmp11) {
        function calculateCategory(arg0, arg1) {
          const rounded = Math.round(arg0);
          let num = 0;
          if (0 < closure_7.length) {
            sum = arg1 + tmp2[0];
            let num3 = 0;
            let num4 = 0;
            num = 0;
            if (rounded >= sum) {
              const sum1 = num4 + 1;
              const sum2 = num3 + 1;
              num = sum1;
              while (sum2 < closure_7.length) {
                sum = sum + closure_7[sum2];
                num3 = sum2;
                num4 = sum1;
                num = sum1;
                if (rounded < sum) {
                  break;
                }
              }
            }
          }
          return num;
        }
        cResult[11] = tmp11;
        cResult[12] = calculateCategory;
        tmp16 = calculateCategory;
      } else {
        tmp16 = cResult[12];
      }
      let closure_8 = tmp16;
      if (cResult[13] === tmp16) {
        let tmp17;
        let tmp22;
        let tmp21;
        let tmp24;
        let tmp25;
        let tmp26;
        let tmp27;
        let tmp28;
        let tmp29;
        let tmp30;
        if (cResult[14] === setCategoryIndex) {
          tmp17 = cResult[15];
        }
        let closure_9 = tmp17;
        const tmpResult4 = tmp(12);
        debounceResult = tmpResult4.debounce((arg0, arg1) => {
          View = View.set;
          const bound = Math.min(closure_8(arg0, -arg1 / 2), closure_7.length - 1);
          let result = !closure_11 && null != arr[bound];
          if (result) {
            const obj = PremiumFeatureUpsellUtils;
            result = obj.isSoundboardSectionNitroLocked(channel.guild_id, arr[bound].category.categoryInfo);
          }
          const result1 = View(result);
        });
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [UserStore];
          class H {
            constructor() {
              const obj = PremiumUtilsDefault;
              return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
            }
          }
          cResult[16] = items;
          cResult[17] = H;
          tmp22 = H;
          tmp21 = items;
        } else {
          tmp21 = cResult[16];
          tmp22 = cResult[17];
        }
        const tmpResult5 = tmp(504);
        calculateRowsPerSection = tmpResult5.useStateFromStores(tmp21, tmp22);
        if (cResult[18] !== tmp4.sectionIcon) {
          function getSectionIcon(category) {
            const type = category.category.categoryInfo.type;
            if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
              const obj2 = { size: GuildIcon.GuildIconSizes.XXSMALL_12, guild: category.category.categoryInfo.guild, style: currentUser.sectionIcon };
              const tmp16 = GuildIconDefault;
              return metroImportDefault(tmp16, obj2);
            } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
              const obj3 = { source: AssetRegistryDefault2, style: currentUser.sectionIcon };
              const Icon2 = tmp(1200).Icon;
              return metroImportDefault(Icon2, obj3);
            } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
              const obj4 = { source: AssetRegistryDefault, style: currentUser.sectionIcon };
              const Icon = tmp(1200).Icon;
              return metroImportDefault(Icon, obj4);
            } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
              const obj5 = { style: currentUser.sectionIcon };
              return metroImportDefault(ClockIcon.ClockIcon, obj5);
            } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
              return null;
            } else if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
              const obj = { style: currentUser.sectionIcon };
              return metroImportDefault(TrophyIcon.TrophyIcon, obj);
            }
          }
          cResult[18] = tmp4.sectionIcon;
          class H {
            constructor() {
              const obj = PremiumUtilsDefault;
              return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
            }
          }
          cResult[19] = getSectionIcon;
          tmp24 = getSectionIcon;
        } else {
          tmp24 = cResult[19];
        }
        closure_12 = tmp24;
        if (cResult[20] !== arr) {
          function getSectionHeaderSize(arg0) {
            let num2;
            if (null == arr[arg0]) {
              num2 = 0;
            } else {
              num2 = 42;
            }
            return num2;
          }
          cResult[20] = arr;
          class H {
            constructor() {
              const obj = PremiumUtilsDefault;
              return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
            }
          }
          cResult[21] = getSectionHeaderSize;
          tmp25 = getSectionHeaderSize;
        } else {
          tmp25 = cResult[21];
        }
        if (cResult[22] !== arr) {
          function getRowHeight(arg0) {
            let num = 0;
            if (null != arr[arg0]) {
              num = c9;
            }
            return num;
          }
          cResult[22] = arr;
          class H {
            constructor() {
              const obj = PremiumUtilsDefault;
              return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
            }
          }
          cResult[23] = getRowHeight;
          tmp26 = getRowHeight;
        } else {
          tmp26 = cResult[23];
        }
        function isSectionLocked(arg0) {
          let result = !closure_11 && null != arr[arg0];
          if (result) {
            const obj = PremiumFeatureUpsellUtils;
            result = obj.isSoundboardSectionNitroLocked(channel.guild_id, arr[arg0].category.categoryInfo);
          }
          return result;
        }
        if (cResult[24] !== isSectionLocked) {
          function getSectionPosition(arg0) {
            const diff = arg0 - 1;
            let result = !closure_11 && null != arr[diff];
            if (result) {
              const obj = PremiumFeatureUpsellUtils;
              result = obj.isSoundboardSectionNitroLocked(channel.guild_id, arr[diff].category.categoryInfo);
            }
            let result1 = !tmp2 && null != arr[arg0];
            if (result1) {
              const obj2 = PremiumFeatureUpsellUtils;
              result1 = obj2.isSoundboardSectionNitroLocked(channel.guild_id, arr[arg0].category.categoryInfo);
            }
            sum = arg0 + 1;
            let result2 = !tmp2 && null != arr[sum];
            if (result2) {
              const obj3 = PremiumFeatureUpsellUtils;
              result2 = obj3.isSoundboardSectionNitroLocked(channel.guild_id, arr[sum].category.categoryInfo);
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
          cResult[24] = isSectionLocked;
          class H {
            constructor() {
              const obj = PremiumUtilsDefault;
              return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
            }
          }
          cResult[25] = getSectionPosition;
          tmp27 = getSectionPosition;
        } else {
          tmp27 = cResult[25];
        }
        getFastListSectionsFromCategories = tmp27;
        if (cResult[26] !== tmp27) {
          function getSectionFooterSize(arg0) {
            let num = 0;
            if (null != closure_13(arg0)) {
              num = PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
            }
            return num;
          }
          cResult[26] = tmp27;
          class H {
            constructor() {
              const obj = PremiumUtilsDefault;
              return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
            }
          }
          cResult[27] = getSectionFooterSize;
          tmp28 = getSectionFooterSize;
        } else {
          tmp28 = cResult[27];
        }
        if (cResult[28] !== tmp27) {
          function renderSectionFooter(arg0) {
            const tmp = closure_13(arg0);
            let tmp2 = null;
            if (null != tmp) {
              const obj = { position: tmp };
              tmp2 = metroImportDefault(PremiumUpsellSectionDividerDefault, obj);
            }
            return tmp2;
          }
          cResult[28] = tmp27;
          class H {
            constructor() {
              const obj = PremiumUtilsDefault;
              return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
            }
          }
          cResult[29] = renderSectionFooter;
          tmp29 = renderSectionFooter;
        } else {
          tmp29 = cResult[29];
        }
        if (cResult[30] !== debounceResult) {
          function te(nativeEvent) {
            return debounceResult(0, nativeEvent.nativeEvent.layout.height);
          }
          cResult[30] = debounceResult;
          class H {
            constructor() {
              const obj = PremiumUtilsDefault;
              return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
            }
          }
          cResult[31] = te;
          tmp30 = te;
        } else {
          tmp30 = cResult[31];
        }
        function handleScroll(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          const y = nativeEvent.contentOffset.y;
          closure_9(y);
          debounceResult(y, nativeEvent.layoutMeasurement.height);
          if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y < nativeEvent.contentSize.height - 20) {
            const obj = importDefault;
            if (null != importDefault) {
              const result = obj.set(y);
            }
            if (dependencyMap != null) {
              dependencyMap(nativeEvent);
            }
          }
        }
        function renderSectionHeader(arg0) {
          let items;
          let result = !closure_11 && null != tmp[arg0];
          if (result) {
            const obj = PremiumFeatureUpsellUtils;
            result = obj.isSoundboardSectionNitroLocked(channel.guild_id, tmp[arg0].category.categoryInfo);
          }
          const obj2 = { style: currentUser.sectionHeader, children: items };
          const tmp10 = metroImportAll;
          if (result) {
            result = tmp8(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, {});
          }
          const obj3 = { children: tmp10(View, obj2) };
          items = [result, closure_12(arr[arg0]), ];
          const obj4 = { accessibilityRole: "header", lineClamp: 1, variant: "heading-sm/semibold", children: getSectionLabel(arr[arg0]) };
          const Text = Text_Text.Text;
          items[2] = metroImportDefault(Text, obj4);
          return metroImportDefault(View, obj3, arr[arg0].category.key);
        }
        if (cResult[32] === tmp26) {
          if (cResult[33] === tmp28) {
            if (cResult[34] === tmp25) {
              if (cResult[35] === handleScroll) {
                if (cResult[36] === num) {
                  if (cResult[37] === listRef) {
                    if (cResult[38] === tmp15) {
                      if (cResult[39] === tmp29) {
                        if (cResult[40] === renderSectionHeader) {
                          if (cResult[41] === tmp6) {
                            let tmp31;
                            if (cResult[42] === tmp30) {
                              tmp31 = cResult[43];
                            }
                            return tmp31;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let obj2 = { onLayout: tmp30, sections: tmp6, sectionSize: tmp25, itemSize: tmp26, sectionFooterSize: tmp28, ref: listRef, renderItem: tmp15, renderSection: renderSectionHeader, renderSectionFooter: tmp29, insetEnd: num, onScroll: handleScroll, keyboardShouldPersistTaps: "handled", optimizeListItemRender: true, inActionSheet: true };
        const tmp34 = closure_7(FastListDefault, obj2);
        cResult[32] = tmp26;
        cResult[33] = tmp28;
        cResult[34] = tmp25;
        cResult[35] = handleScroll;
        cResult[36] = num;
        cResult[37] = listRef;
        cResult[38] = tmp15;
        cResult[39] = tmp29;
        cResult[40] = renderSectionHeader;
        cResult[41] = tmp6;
        cResult[42] = tmp30;
        cResult[43] = tmp34;
        tmp31 = tmp34;
      }
      const tmpResult6 = tmp(12);
      const debounceResult1 = tmpResult6.debounce((arg0) => {
        setCategoryIndex(closure_8(arg0, 0));
      });
      cResult[13] = tmp16;
      cResult[14] = setCategoryIndex;
      cResult[15] = debounceResult1;
      tmp17 = debounceResult1;
    }
    const fn2 = function w(sectionIndex, row) {
      const obj = { row, sectionIndex, section: arr[sectionIndex], channel };
      return metroImportDefault(closure_14, obj);
    };
    cResult[8] = channel;
    cResult[9] = arr;
    cResult[10] = fn2;
    tmp15 = fn2;
  }
  let tmp10 = getFastListSectionsFromCategories(categories, arr, fontScale);
  cResult[2] = categories;
  cResult[3] = fontScale;
  cResult[4] = tmp10;
  arr = tmp10;
}) : (function SoundboardSoundPickerListComponent(channel) {
  let categories;
  channel = channel.channel;
  let num = channel.insetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ scrollPosition: importDefault, onScroll: dependencyMap, setCategoryIndex: react, shouldShowPremiumUpsell: View, categories } = channel);
  let closure_6;
  closure_10 = undefined;
  function getSectionPosition(categories) {
    const diff = categories - 1;
    let result = !closure_10 && null != closure_6[diff];
    if (result) {
      const obj = PremiumFeatureUpsellUtils;
      result = obj.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[diff].category.categoryInfo);
    }
    let result1 = !tmp2 && null != closure_6[categories];
    if (result1) {
      const obj2 = PremiumFeatureUpsellUtils;
      result1 = obj2.isSoundboardSectionNitroLocked(channel.guild_id, closure_6[categories].category.categoryInfo);
    }
    sum = categories + 1;
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
  let obj = channel(5382);
  const fontScale = obj.useFontScale();
  let tmp2 = getSectionPosition(categories, closure_6);
  const tmp3 = getFastListSectionsFromCategories(categories, closure_6, fontScale);
  closure_6 = tmp3;
  let items = [tmp3];
  let closure_7 = react.useMemo(() => closure_6.map((height) => height.height), items);
  const items1 = [tmp3, channel];
  const callback = react.useCallback((sectionIndex, row) => {
    const obj = { row, sectionIndex, section: closure_6[sectionIndex], channel };
    return metroImportDefault(closure_14, obj);
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
    sectionSize: function getSectionHeaderSize(arg0) {
      let num2;
      if (null == closure_6[arg0]) {
        num2 = 0;
      } else {
        num2 = 42;
      }
      return num2;
    },
    itemSize: function getRowHeight(arg0) {
      let num = 0;
      if (null != closure_6[arg0]) {
        num = c9;
      }
      return num;
    },
    sectionFooterSize: function getSectionFooterSize(arg0) {
      let num = 0;
      if (null != getSectionPosition(arg0)) {
        num = PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT + PremiumUpsellSectionDivider.PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN;
      }
      return num;
    },
    ref: listRef,
    renderItem: callback,
    renderSection: function renderSectionHeader(arg0) {
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
    onScroll: function handleScroll(nativeEvent) {
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
}));
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerList.tsx");

export const SoundboardSoundPickerList = memoResult;
