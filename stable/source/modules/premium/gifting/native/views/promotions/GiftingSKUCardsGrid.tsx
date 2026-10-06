// Module ID: 10539
// Function ID: 10540
// Name: GiftingSKUCardsGrid
// Dependencies: [19, 17, 6971, 1978, 21, 4837, 588, 558, 576, 7627, 4552, 10540, 8284, 8270, 8255, 4833, 1127, 5436, 2]

// Module 10539 (GiftingSKUCardsGrid)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import NameplateRecord from "NameplateRecord" /* 1978 */;
import react_native from "react-native" /* 4552 */;
import Text_Text from "Text/Text" /* 4833 */;
import Pressables from "Pressables" /* 5436 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 6971 */;
import useCurrentUser from "useCurrentUser" /* 7627 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8270 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 8284 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10540 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
({ View: closure_4, StyleSheet } = react_native2);
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 100;
let createStyles = createStyles_mod;
let obj = { card: obj2, previewContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 100, overflow: "hidden" }, preview: obj3, selected: obj4, claimed: { opacity: 0.4 }, checkmark: { position: "absolute", opacity: 1, fontWeight: "bold" }, textContainer: obj5 };
obj2 = { width: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE, margin: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", justifyContent: "center", alignItems: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { alignSelf: "stretch", paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
let closure_10 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((rewardSkuId) => {
  let accessibilityRole;
  let accessibilityState;
  let claimed;
  let items;
  let items1;
  let items2;
  let onSelect;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(46);
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect } = rewardSkuId);
  const isSelected = rewardSkuId.isSelected;
  const tmp4 = closure_10();
  const obj2 = useCurrentUser;
  const currentUser = obj2.useCurrentUser();
  if (cResult[0] !== isSelected) {
    const obj3 = { selected: isSelected };
    cResult[0] = isSelected;
    cResult[1] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = react_native;
  const radioA11yNative = tmpResult.useRadioA11yNative(tmp5);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const tmpResult2 = useFetchCollectiblesProduct;
  const product = tmpResult2.useFetchCollectiblesProduct(rewardSkuId).product;
  if (cResult[2] === currentUser) {
    let tmp7;
    if (cResult[3] === isSelected) {
      tmp7 = cResult[4];
    }
    if (null == product) {
      return null;
    } else {
      const first = product.items[0];
      if (cResult[5] === tmp4.card) {
        let tmp13;
        if (cResult[6] === (isSelected && tmp4.selected)) {
          tmp13 = cResult[7];
        }
        if (cResult[8] === onSelect) {
          let tmp14;
          if (cResult[9] === rewardSkuId) {
            tmp14 = cResult[10];
          }
          if (cResult[11] === tmp4.preview) {
            let tmp16;
            let tmp20;
            if (cResult[12] === (claimed && tmp4.claimed)) {
              tmp16 = cResult[13];
            }
            if (cResult[14] === isSelected) {
              if (cResult[15] === first) {
                let tmp17;
                if (cResult[16] === tmp7) {
                  tmp17 = cResult[17];
                }
                if (cResult[18] === tmp16) {
                  let tmp26;
                  if (cResult[19] === tmp17) {
                    tmp26 = cResult[20];
                  }
                  if (cResult[21] === claimed) {
                    let tmp30;
                    if (cResult[22] === tmp4.checkmark) {
                      tmp30 = cResult[23];
                    }
                    if (cResult[24] === tmp4.previewContainer) {
                      if (cResult[25] === tmp30) {
                        let tmp33;
                        let tmp37;
                        let tmp40;
                        let tmp42;
                        if (cResult[26] === tmp26) {
                          tmp33 = cResult[27];
                        }
                        if (cResult[28] !== product.name) {
                          const obj4 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
                          const tmp39 = metroImportDefault(Text_Text.Text, obj4);
                          cResult[28] = product.name;
                          cResult[29] = tmp39;
                          tmp37 = tmp39;
                        } else {
                          tmp37 = cResult[29];
                        }
                        if (cResult[30] !== claimed) {
                          let stringResult;
                          const intl = tmp(1127).intl;
                          const string = intl.string;
                          const t = tmp(1127).t;
                          if (claimed) {
                            stringResult = string(t["6cfuDj"]);
                          } else {
                            stringResult = string(t.QQsaCc);
                          }
                          cResult[30] = claimed;
                          cResult[31] = stringResult;
                          tmp40 = stringResult;
                        } else {
                          tmp40 = cResult[31];
                        }
                        if (cResult[32] !== tmp40) {
                          const obj5 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp40 };
                          const tmp44 = metroImportDefault(Text_Text.Text, obj5);
                          cResult[32] = tmp40;
                          cResult[33] = tmp44;
                          tmp42 = tmp44;
                        } else {
                          tmp42 = cResult[33];
                        }
                        if (cResult[34] === tmp4.textContainer) {
                          if (cResult[35] === tmp37) {
                            let tmp45;
                            if (cResult[36] === tmp42) {
                              tmp45 = cResult[37];
                            }
                            if (cResult[38] === accessibilityRole) {
                              if (cResult[39] === accessibilityState) {
                                if (cResult[40] === claimed) {
                                  if (cResult[41] === tmp33) {
                                    if (cResult[42] === tmp45) {
                                      if (cResult[43] === tmp13) {
                                        let tmp49;
                                        if (cResult[44] === tmp14) {
                                          tmp49 = cResult[45];
                                        }
                                        return tmp49;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj6 = { style: tmp13, onPress: tmp14, activeOpacity: 0.8, disabled: claimed, accessibilityRole, accessibilityState, children: items };
                            items = [tmp33, tmp45];
                            const tmp51 = metroImportAll(Pressables.PressableOpacity, obj6);
                            cResult[38] = accessibilityRole;
                            cResult[39] = accessibilityState;
                            cResult[40] = claimed;
                            cResult[41] = tmp33;
                            cResult[42] = tmp45;
                            cResult[43] = tmp13;
                            cResult[44] = tmp14;
                            cResult[45] = tmp51;
                            tmp49 = tmp51;
                          }
                        }
                        const obj7 = { style: tmp4.textContainer, children: items1 };
                        items1 = [tmp37, tmp42];
                        const tmp48 = metroImportAll(React3, obj7);
                        cResult[34] = tmp4.textContainer;
                        cResult[35] = tmp37;
                        cResult[36] = tmp42;
                        cResult[37] = tmp48;
                        tmp45 = tmp48;
                      }
                    }
                    const obj8 = { style: tmp4.previewContainer, children: items2 };
                    items2 = [tmp26, tmp30];
                    const tmp36 = metroImportAll(React3, obj8);
                    cResult[24] = tmp4.previewContainer;
                    cResult[25] = tmp30;
                    cResult[26] = tmp26;
                    cResult[27] = tmp36;
                    tmp33 = tmp36;
                  }
                  let tmp31 = claimed;
                  if (tmp31) {
                    const obj9 = { size: "lg", style: tmp4.checkmark };
                    tmp31 = metroImportDefault(tmp(8255).CheckmarkLargeBoldIcon, obj9);
                  }
                  cResult[21] = claimed;
                  cResult[22] = tmp4.checkmark;
                  cResult[23] = tmp31;
                  tmp30 = tmp31;
                }
                const obj10 = { style: tmp16, children: tmp17 };
                const tmp29 = metroImportDefault(React3, obj10);
                cResult[18] = tmp16;
                cResult[19] = tmp17;
                cResult[20] = tmp29;
                tmp26 = tmp29;
              }
            }
            if (isNameplateRecord(first)) {
              const obj11 = { item: first, animate: isSelected };
              tmp20 = metroImportDefault(NameplateCardPreviewDefault, obj11);
            } else if (isAvatarDecorationRecord(first)) {
              const obj12 = { item: first, size, animate: isSelected, avatarSource: tmp7 };
              tmp20 = metroImportDefault(AvatarDecorationSampleV2Default, obj12);
            }
            cResult[14] = isSelected;
            cResult[15] = first;
            cResult[16] = tmp7;
            cResult[17] = tmp20;
            tmp17 = tmp20;
          }
          const items3 = [tmp4.preview, claimed && tmp4.claimed];
          cResult[11] = tmp4.preview;
          cResult[12] = claimed && tmp4.claimed;
          cResult[13] = items3;
          tmp16 = items3;
        }
        const fn = function j() {
          return onSelect(rewardSkuId);
        };
        cResult[8] = onSelect;
        cResult[9] = rewardSkuId;
        cResult[10] = fn;
        tmp14 = fn;
      }
      const items4 = [tmp4.card, isSelected && tmp4.selected];
      cResult[5] = tmp4.card;
      cResult[6] = isSelected && tmp4.selected;
      cResult[7] = items4;
      tmp13 = items4;
    }
  }
  let avatarSource;
  if (isSelected) {
    avatarSource = currentUser.getAvatarSource(null, true, size);
  }
  cResult[2] = currentUser;
  cResult[3] = isSelected;
  cResult[4] = avatarSource;
  tmp7 = avatarSource;
}) : ((rewardSkuId) => {
  let accessibilityRole;
  let accessibilityState;
  let claimed;
  let isSelected;
  let items3;
  let items4;
  let items5;
  let tmp8Result;
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: importDefault, isSelected } = rewardSkuId);
  const tmp = closure_10();
  const obj = rewardSkuId(isSelected[9]);
  const currentUser = obj.useCurrentUser();
  const obj2 = rewardSkuId(isSelected[10]);
  const radioA11yNative = obj2.useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj3 = rewardSkuId(isSelected[11]);
  const product = obj3.useFetchCollectiblesProduct(rewardSkuId).product;
  const items = [isSelected, currentUser];
  if (null == product) {
    return null;
  } else {
    let stringResult;
    const first = product.items[0];
    const items1 = [tmp.card, ];
    let selected = isSelected;
    const PressableOpacity = tmp2(tmp3[17]).PressableOpacity;
    if (isSelected) {
      selected = tmp.selected;
    }
    const obj4 = {
      style: items1,
      onPress() {
          return importDefault(rewardSkuId);
        },
      activeOpacity: 0.8,
      disabled: claimed,
      accessibilityRole,
      accessibilityState,
      children: items4
    };
    items1[1] = selected;
    const items2 = [tmp.preview, ];
    const obj5 = { style: tmp.previewContainer, children: items3 };
    const obj6 = { style: items2, children: tmp8Result };
    const tmp9 = claimed && tmp.claimed;
    items2[1] = tmp9;
    if (isNameplateRecord(first)) {
      const obj7 = { item: first, animate: isSelected };
      tmp8Result = tmp8(require("NameplateCardPreview"), obj7);
    } else if (isAvatarDecorationRecord(first)) {
      const obj8 = { item: first, size, animate: isSelected, avatarSource: tmp6 };
      tmp8Result = tmp8(require("AvatarDecorationSampleV2"), obj8);
    }
    items3 = [closure_7(closure_4, obj6), ];
    let tmp8Result2 = claimed;
    if (tmp8Result2) {
      const obj9 = { size: "lg", style: tmp.checkmark };
      tmp8Result2 = tmp8(tmp2(tmp3[14]).CheckmarkLargeBoldIcon, obj9);
    }
    items3[1] = tmp8Result2;
    items4 = [closure_8(closure_4, obj5), ];
    const obj10 = { style: tmp.textContainer, children: items5 };
    const obj11 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
    items5 = [closure_7(tmp2(tmp3[15]).Text, obj11), ];
    const Text = tmp2(tmp3[15]).Text;
    const intl = tmp2(tmp3[16]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[16]).t;
    if (claimed) {
      stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj12 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: stringResult };
    items5[1] = closure_7(Text, obj12);
    items4[1] = closure_8(closure_4, obj10);
    return closure_8(PressableOpacity, obj4);
  }
}));
createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles({ grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" } });
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSelect) => {
  let claimableRewards;
  let highlightedSkuId;
  let rewardsToDisplay;
  let tmp4;
  let obj = claimableRewards(highlightedSkuId[8]);
  const cResult = obj.c(12);
  ({ rewardsToDisplay, claimableRewards } = onSelect);
  onSelect = onSelect.onSelect;
  highlightedSkuId = onSelect.highlightedSkuId;
  const tmp2 = closure_12();
  if (cResult[0] === claimableRewards) {
    if (cResult[1] === highlightedSkuId) {
      if (cResult[2] === onSelect) {
        if (cResult[3] === rewardsToDisplay) {
          tmp4 = cResult[4];
        }
        if (cResult[9] === tmp2.grid) {
          let tmp7;
          if (cResult[10] === tmp4) {
            tmp7 = cResult[11];
          }
          return tmp7;
        }
        const obj2 = { style: tmp3, children: tmp4 };
        const tmp10 = closure_7(closure_4, obj2);
        cResult[9] = tmp2.grid;
        cResult[10] = tmp4;
        cResult[11] = tmp10;
        tmp7 = tmp10;
      }
    }
  }
  if (cResult[5] === claimableRewards) {
    if (cResult[6] === highlightedSkuId) {
      let tmp5;
      if (cResult[7] === onSelect) {
        tmp5 = cResult[8];
      }
      const mapped = rewardsToDisplay.map(tmp5);
      cResult[0] = claimableRewards;
      cResult[1] = highlightedSkuId;
      cResult[2] = onSelect;
      cResult[3] = rewardsToDisplay;
      cResult[4] = mapped;
      tmp4 = mapped;
    }
  }
  const fn = function c(rewardSkuId) {
    let closure_0 = rewardSkuId;
    const obj = { rewardSkuId, claimed: !claimableRewards.some((item) => item === closure_0), isSelected: highlightedSkuId === rewardSkuId, onSelect };
    return metroImportDefault(closure_11, obj, rewardSkuId);
  };
  cResult[5] = claimableRewards;
  cResult[6] = highlightedSkuId;
  cResult[7] = onSelect;
  cResult[8] = fn;
  tmp5 = fn;
}) : ((arg0) => {
  let onSelect;
  let rewardsToDisplay;
  ({ rewardsToDisplay, claimableRewards: require, onSelect: importDefault, highlightedSkuId: dependencyMap } = arg0);
  let obj = {
    style: closure_12().grid,
    children: rewardsToDisplay.map((rewardSkuId) => {
      require = rewardSkuId;
      const obj = { rewardSkuId, claimed: !require.some((item) => item === closure_0), isSelected: dependencyMap === rewardSkuId, onSelect: importDefault };
      return metroImportDefault(closure_11, obj, rewardSkuId);
    })
  };
  return closure_7(closure_4, obj);
});
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default tmp7;
