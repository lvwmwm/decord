// Module ID: 11377
// Function ID: 11378
// Name: GiftingSKUCardsGrid
// Dependencies: [19, 17, 7826, 1975, 21, 4790, 580, 558, 568, 8484, 4511, 11378, 9135, 9121, 9106, 4786, 1119, 5373, 2]

// Module 11377 (GiftingSKUCardsGrid)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4511 */;
import useCurrentUser from "useCurrentUser" /* 8484 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9121 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 9135 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11378 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7826).isAvatarDecorationRecord;
const isNameplateRecord = fn(1975).isNameplateRecord;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 100;
let createStyles = fn(4790);
let obj = { card: null, overlayContainer: null, selected: null, claimed: null, checkmark: null, checkmarkContainer: null, textContainer: null };
let size = { height: 178, width: 150, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE, margin: nativeDefault.space.PX_4 };
obj.card = size;
obj.overlayContainer = { position: "absolute", top: 10, zIndex: 2, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "75%" };
obj.selected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.claimed = { opacity: 0.4 };
obj.checkmark = { position: "absolute", opacity: 1, fontWeight: "bold" };
obj.checkmarkContainer = { position: "absolute", top: 10, zIndex: 3, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "75%" };
const rect = { position: "absolute", bottom: 20, left: 0, right: 0, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
obj.textContainer = rect;
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((rewardSkuId) => {
  const cResult = c.c(44);
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect } = rewardSkuId);
  const isSelected = rewardSkuId.isSelected;
  const tmp4 = closure_10();
  const currentUser = useCurrentUser.useCurrentUser();
  if (cResult[0] !== isSelected) {
    const obj3 = { selected: isSelected };
    cResult[0] = isSelected;
    cResult[1] = obj3;
    let tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp5);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const tmpResult = useA11yRolesNative;
  const product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(rewardSkuId).product;
  if (cResult[2] === currentUser) {
    if (cResult[3] === isSelected) {
      let tmp7 = cResult[4];
    }
    if (null == product) {
      return null;
    } else {
      const first = product.items[0];
      let selected = isSelected;
      if (isSelected) {
        selected = tmp4.selected;
      }
      if (cResult[5] === tmp4.card) {
        if (cResult[6] === selected) {
          let tmp12 = cResult[7];
        }
        if (cResult[8] === onSelect) {
          if (cResult[9] === rewardSkuId) {
            let tmp13 = cResult[10];
          }
          let claimed2 = claimed;
          if (claimed) {
            claimed2 = tmp4.claimed;
          }
          if (cResult[11] === tmp4.overlayContainer) {
            if (cResult[12] === claimed2) {
              let tmp14 = cResult[13];
            }
            if (cResult[14] === isSelected) {
              if (cResult[15] === first) {
                if (cResult[16] === tmp7) {
                  if (cResult[18] === tmp14) {
                    if (cResult[19] === tmp15) {
                      let tmp25 = cResult[20];
                    }
                    if (cResult[21] === claimed) {
                      if (cResult[22] === tmp4.checkmark) {
                        if (cResult[23] === tmp4.checkmarkContainer) {
                          let tmp29 = cResult[24];
                        }
                        if (cResult[25] !== product.name) {
                          const obj4 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
                          const tmp35 = React5(tmp(4786).Text, obj4);
                          cResult[25] = product.name;
                          cResult[26] = tmp35;
                          let tmp33 = tmp35;
                        } else {
                          tmp33 = cResult[26];
                        }
                        if (cResult[27] !== claimed) {
                          const intl = tmp(1119).intl;
                          const string = intl.string;
                          let t = tmp(1119).t;
                          if (claimed) {
                            t = t["6cfuDj"];
                            let stringResult = string(t);
                          } else {
                            stringResult = string(t.QQsaCc);
                          }
                          cResult[27] = claimed;
                          cResult[28] = stringResult;
                        } else {
                          if (cResult[29] !== cResult[28]) {
                            const obj5 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp36 };
                            const tmp42 = React5(tmp(4786).Text, obj5);
                            cResult[29] = tmp36;
                            cResult[30] = tmp42;
                            let tmp40 = tmp42;
                          } else {
                            tmp40 = cResult[30];
                          }
                          if (cResult[31] === tmp4.textContainer) {
                            if (cResult[32] === tmp33) {
                              if (cResult[33] === tmp40) {
                                let tmp43 = cResult[34];
                              }
                              if (cResult[35] === accessibilityRole) {
                                if (cResult[36] === accessibilityState) {
                                  if (cResult[37] === claimed) {
                                    if (cResult[38] === tmp29) {
                                      if (cResult[39] === tmp43) {
                                        if (cResult[40] === tmp12) {
                                          if (cResult[41] === tmp13) {
                                            if (cResult[42] === tmp25) {
                                              let tmp47 = cResult[43];
                                            }
                                            return tmp47;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj6 = { style: tmp12, onPress: tmp13, activeOpacity: 0.8, disabled: claimed, accessibilityRole, accessibilityState, children: null };
                              const items = [tmp25, tmp29, tmp43];
                              obj6.children = items;
                              const tmp49 = closure_1_8(tmp(5373).PressableOpacity, obj6);
                              cResult[35] = accessibilityRole;
                              cResult[36] = accessibilityState;
                              cResult[37] = claimed;
                              cResult[38] = tmp29;
                              cResult[39] = tmp43;
                              cResult[40] = tmp12;
                              cResult[41] = tmp13;
                              cResult[42] = tmp25;
                              cResult[43] = tmp49;
                              tmp47 = tmp49;
                            }
                          }
                          const obj7 = { style: tmp4.textContainer, children: null };
                          const items1 = [tmp33, tmp40];
                          obj7.children = items1;
                          const tmp46 = closure_1_8(View, obj7);
                          cResult[31] = tmp4.textContainer;
                          cResult[32] = tmp33;
                          cResult[33] = tmp40;
                          cResult[34] = tmp46;
                          tmp43 = tmp46;
                        }
                      }
                    }
                    let tmp30 = claimed;
                    if (claimed) {
                      const obj8 = { style: tmp4.checkmarkContainer, children: null };
                      const obj9 = { size: "lg", style: tmp4.checkmark };
                      obj8.children = React5(tmp(9106).CheckmarkLargeBoldIcon, obj9);
                      tmp30 = React5(View, obj8);
                    }
                    cResult[21] = claimed;
                    cResult[22] = tmp4.checkmark;
                    cResult[23] = tmp4.checkmarkContainer;
                    cResult[24] = tmp30;
                    tmp29 = tmp30;
                  }
                  const obj10 = { style: tmp14, children: cResult[17] };
                  const tmp28 = React5(View, obj10);
                  cResult[18] = tmp14;
                  cResult[19] = cResult[17];
                  cResult[20] = tmp28;
                  tmp25 = tmp28;
                }
              }
            }
            if (isNameplateRecord(first)) {
              const obj11 = { item: first, animate: isSelected };
              let tmp18 = React5(NameplateCardPreviewDefault, obj11);
            } else if (isAvatarDecorationRecord(first)) {
              const obj12 = { item: first, size, animate: isSelected, avatarSource: tmp7 };
              tmp18 = React5(AvatarDecorationSampleV2Default, obj12);
            }
            cResult[14] = isSelected;
            cResult[15] = first;
            cResult[16] = tmp7;
            cResult[17] = tmp18;
          }
          const items2 = [tmp4.overlayContainer, claimed2];
          cResult[11] = tmp4.overlayContainer;
          cResult[12] = claimed2;
          cResult[13] = items2;
          tmp14 = items2;
        }
        const fn = function _() {
          return onSelect(rewardSkuId);
        };
        cResult[8] = onSelect;
        cResult[9] = rewardSkuId;
        cResult[10] = fn;
        tmp13 = fn;
      }
      const items3 = [tmp4.card, selected];
      cResult[5] = tmp4.card;
      cResult[6] = selected;
      cResult[7] = items3;
      tmp12 = items3;
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
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: importDefault, isSelected } = rewardSkuId);
  const tmp = closure_10();
  const currentUser = rewardSkuId(isSelected[9]).useCurrentUser();
  const obj = rewardSkuId(isSelected[9]);
  const radioA11yNative = rewardSkuId(isSelected[10]).useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = rewardSkuId(isSelected[10]);
  const product = rewardSkuId(isSelected[11]).useFetchCollectiblesProduct(rewardSkuId).product;
  const items = [isSelected, currentUser];
  if (null == product) {
    return null;
  } else {
    const first = product.items[0];
    const items1 = [tmp.card, ];
    let selected = isSelected;
    if (isSelected) {
      selected = tmp.selected;
    }
    const obj4 = { style: null, onPress: null, activeOpacity: 0.8, disabled: null, accessibilityRole: null, accessibilityState: null, children: null };
    items1[1] = selected;
    obj4.style = items1;
    obj4.onPress = function onPress() {
      return importDefault(rewardSkuId);
    };
    obj4.disabled = claimed;
    obj4.accessibilityRole = accessibilityRole;
    obj4.accessibilityState = accessibilityState;
    const items2 = [tmp.overlayContainer, ];
    let claimed2 = claimed;
    if (claimed) {
      claimed2 = tmp.claimed;
    }
    const obj5 = { style: null, children: null };
    items2[1] = claimed2;
    obj5.style = items2;
    if (isNameplateRecord(first)) {
      const obj6 = { item: first, animate: isSelected };
      let tmp7Result = tmp7(require("NameplateCardPreview"), obj6);
    } else if (isAvatarDecorationRecord(first)) {
      const obj7 = { item: first, size, animate: isSelected, avatarSource: tmp6 };
      tmp7Result = tmp7(require("AvatarDecorationSampleV2"), obj7);
    }
    obj5.children = tmp7Result;
    const items3 = [closure_7(View, obj5), , ];
    let tmp7Result2 = claimed;
    if (claimed) {
      const obj8 = { style: tmp.checkmarkContainer, children: null };
      const obj9 = { size: "lg", style: tmp.checkmark };
      obj8.children = tmp7(tmp2(tmp3[14]).CheckmarkLargeBoldIcon, obj9);
      tmp7Result2 = tmp7(tmp8, obj8);
    }
    items3[1] = tmp7Result2;
    const obj10 = { style: tmp.textContainer, children: null };
    const obj11 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
    const items4 = [closure_7(tmp2(tmp3[15]).Text, obj11), ];
    const intl = tmp2(tmp3[16]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[16]).t;
    if (claimed) {
      let stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj12 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: stringResult };
    items4[1] = closure_7(tmp2(tmp3[15]).Text, obj12);
    obj10.children = items4;
    items3[2] = closure_8(View, obj10);
    obj4.children = items3;
    return closure_8(tmp2(tmp3[17]).PressableOpacity, obj4);
  }
  const obj3 = rewardSkuId(isSelected[11]);
}));
createStyles = fn(4790);
let closure_12 = createStyles.createStyles({ grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" } });
ReactCompilerGating = fn(558);
let obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onSelect) => {
  const cResult = claimableRewards(highlightedSkuId[8]).c(12);
  ({ rewardsToDisplay, claimableRewards } = onSelect);
  onSelect = onSelect.onSelect;
  highlightedSkuId = onSelect.highlightedSkuId;
  const tmp2 = closure_12();
  if (cResult[0] === claimableRewards) {
    if (cResult[1] === highlightedSkuId) {
      if (cResult[2] === onSelect) {
        if (cResult[3] === rewardsToDisplay) {
          if (cResult[9] === tmp2.grid) {
            if (cResult[10] === tmp4) {
              let tmp8 = cResult[11];
            }
            return tmp8;
          }
          const obj2 = { style: tmp3, children: cResult[4] };
          const tmp11 = closure_7(View, obj2);
          cResult[9] = tmp2.grid;
          cResult[10] = cResult[4];
          cResult[11] = tmp11;
          tmp8 = tmp11;
        }
      }
    }
  }
  if (cResult[5] === claimableRewards) {
    if (cResult[6] === highlightedSkuId) {
      if (cResult[7] === onSelect) {
        let tmp5 = cResult[8];
      }
      const mapped = rewardsToDisplay.map(tmp5);
      cResult[0] = claimableRewards;
      cResult[1] = highlightedSkuId;
      cResult[2] = onSelect;
      cResult[3] = rewardsToDisplay;
      cResult[4] = mapped;
    }
  }
  const fn = function c(rewardSkuId) {
    closure_0 = rewardSkuId;
    return React5(closure_11, { rewardSkuId, claimed: !claimableRewards.some((item) => item === closure_0), isSelected: highlightedSkuId === rewardSkuId, onSelect }, rewardSkuId);
  };
  cResult[5] = claimableRewards;
  cResult[6] = highlightedSkuId;
  cResult[7] = onSelect;
  cResult[8] = fn;
  tmp5 = fn;
}) : ((arg0) => {
  ({ rewardsToDisplay, claimableRewards: require, onSelect: importDefault, highlightedSkuId: dependencyMap } = arg0);
  return closure_7(View, {
    style: closure_12().grid,
    children: rewardsToDisplay.map((rewardSkuId) => {
      closure_0 = rewardSkuId;
      return React5(closure_11, { rewardSkuId, claimed: !require.some((item) => item === closure_0), isSelected: dependencyMap === rewardSkuId, onSelect }, rewardSkuId);
    })
  });
});
