// Module ID: 14142
// Function ID: 14143
// Name: GiftingSKUCardsGrid
// Dependencies: [19, 17, 7690, 1990, 7691, 7692, 1084, 9422, 21, 587, 5004, 558, 576, 8704, 9448, 9434, 9447, 5705, 9425, 9446, 5288, 5001, 5294, 9249, 5072, 11090, 5270, 1125, 6944, 1496, 12, 2]

// Module 14142 (GiftingSKUCardsGrid)
import _modDef12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import NameplateRecord from "NameplateRecord" /* 1990 */;
import ColorUtils from "ColorUtils" /* 5001 */;
import react_native from "react-native" /* 5072 */;
import Text_Text from "Text/Text" /* 5270 */;
import useToken from "useToken" /* 5288 */;
import FastImageDefault from "FastImage" /* 5705 */;
import Pressables from "Pressables" /* 6944 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7690 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7691 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7692 */;
import useCurrentUser from "useCurrentUser" /* 8704 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 9422 */;
import ProfileEffectDefault from "ProfileEffect" /* 9425 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9434 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 9446 */;
import _modDef9447 from "module_9447" /* 9447 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 9448 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11090 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c10;
let closure_12;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let rect1;
let tmp;
let tmp5;
let unpackModuleId;
const LinearGradientDefault = tmp5(5294);
const CheckmarkLargeBoldIcon = tmp(9249);
({ View: closure_4, StyleSheet } = react_native2);
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
const VerticalGradient = Constants.VerticalGradient;
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let c13 = 100;
let c14 = 150;
const PX_12 = nativeDefault.space.PX_12;
const previewWidth = 150 - nativeDefault.space.PX_32;
let sum = 100 + nativeDefault.space.PX_40;
const PX_122 = nativeDefault.space.PX_12;
let closure_18 = 2 * nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = { card: obj2, previewContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: 100, overflow: "hidden" }, expandedPreviewContainer: { overflow: "visible" }, preview: obj3, selected: obj4, claimed: { opacity: 0.4 }, checkmark: { position: "absolute", opacity: 1, fontWeight: "bold" }, profileEffect: rect, sampleProfile: { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" }, profileFrame: { position: "absolute", top: 0, left: 0, right: 0, height: sum, alignItems: "center" }, collectibleTextFade: rect1, textContainer: obj5 };
obj2 = { width: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16, paddingTop: PX_12, paddingBottom: nativeDefault.space.PX_16, borderWidth: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", justifyContent: "center", alignItems: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
rect = { position: "absolute", top: -PX_12, left: 0, right: 0, overflow: "hidden", height: sum + PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
rect1 = { position: "absolute", left: 0, right: 0, bottom: 0, height: "45%", borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj5 = { alignSelf: "stretch", paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSKUCardItemPreview(arg0) {
  let isSelected;
  let item;
  let items;
  const obj = react2;
  const cResult = obj.c(25);
  ({ item, isSelected } = arg0);
  const tmp3 = closure_19();
  const obj2 = useCurrentUser;
  const currentUser = obj2.useCurrentUser();
  if (cResult[0] === currentUser) {
    let tmp4;
    if (cResult[1] === isSelected) {
      tmp4 = cResult[2];
    }
    if (isNameplateRecord(item)) {
      if (cResult[3] === isSelected) {
        let tmp45;
        if (cResult[4] === item) {
          tmp45 = cResult[5];
        }
        return tmp45;
      }
      const obj3 = { item, animate: isSelected };
      const tmp48 = authStore(NameplateCardPreviewDefault, obj3);
      cResult[3] = isSelected;
      cResult[4] = item;
      cResult[5] = tmp48;
      tmp45 = tmp48;
    } else if (isAvatarDecorationRecord(item)) {
      if (cResult[6] === isSelected) {
        if (cResult[7] === item) {
          let tmp40;
          if (cResult[8] === tmp4) {
            tmp40 = cResult[9];
          }
          return tmp40;
        }
      }
      const obj4 = { item, size, animate: isSelected, avatarSource: tmp4 };
      const tmp44 = authStore(AvatarDecorationSampleV2Default, obj4);
      cResult[6] = isSelected;
      cResult[7] = item;
      cResult[8] = tmp4;
      cResult[9] = tmp44;
      tmp40 = tmp44;
    } else if (isProfileEffectRecord(item)) {
      let tmp25;
      let tmp27;
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { uri: _modDef9447 };
        cResult[10] = obj5;
        tmp25 = obj5;
      } else {
        tmp25 = cResult[10];
      }
      if (cResult[11] !== tmp3.sampleProfile) {
        const obj6 = { source: tmp25, style: tmp3.sampleProfile, resizeMode: "cover" };
        const tmp30 = authStore(FastImageDefault, obj6);
        cResult[11] = tmp3.sampleProfile;
        cResult[12] = tmp30;
        tmp27 = tmp30;
      } else {
        tmp27 = cResult[12];
      }
      if (cResult[13] === item.skuId) {
        let tmp32;
        if (cResult[14] === !isSelected) {
          tmp32 = cResult[15];
        }
        if (cResult[16] === tmp3.profileEffect) {
          if (cResult[17] === tmp27) {
            let tmp36;
            if (cResult[18] === tmp32) {
              tmp36 = cResult[19];
            }
            return tmp36;
          }
        }
        const obj7 = { style: tmp3.profileEffect, children: items };
        items = [tmp27, tmp32];
        const tmp39 = unpackModuleId(React3, obj7);
        cResult[16] = tmp3.profileEffect;
        cResult[17] = tmp27;
        cResult[18] = tmp32;
        cResult[19] = tmp39;
        tmp36 = tmp39;
      }
      const obj8 = { skuId: item.skuId, useThumbnail: !isSelected };
      const tmp35 = authStore(ProfileEffectDefault, obj8);
      cResult[13] = item.skuId;
      cResult[14] = !isSelected;
      cResult[15] = tmp35;
      tmp32 = tmp35;
    } else {
      let tmp12 = null;
      if (isProfileFrameRecord(item)) {
        let tmp13;
        if (cResult[20] !== item) {
          const obj9 = { profileFrame: item, previewWidth, previewHeight: sum, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
          const tmp16 = ProfileFrameSamplePreviewDefault;
          const tmp19 = authStore(tmp16, obj9);
          cResult[20] = item;
          cResult[21] = tmp19;
          tmp13 = tmp19;
        } else {
          tmp13 = cResult[21];
        }
        if (cResult[22] === tmp3.profileFrame) {
          let tmp20;
          if (cResult[23] === tmp13) {
            tmp20 = cResult[24];
          }
          tmp12 = tmp20;
        }
        const obj10 = { style: tmp3.profileFrame, children: tmp13 };
        const tmp23 = authStore(React3, obj10);
        cResult[22] = tmp3.profileFrame;
        cResult[23] = tmp13;
        cResult[24] = tmp23;
        tmp20 = tmp23;
      }
      return tmp12;
    }
  }
  let avatarSource;
  if (isSelected) {
    avatarSource = currentUser.getAvatarSource(null, true, size);
  }
  cResult[0] = currentUser;
  cResult[1] = isSelected;
  cResult[2] = avatarSource;
  tmp4 = avatarSource;
}) : (function GiftingSKUCardItemPreview(arg0) {
  let isSelected;
  let item;
  let items1;
  let obj6;
  let obj9;
  let tmp12;
  let tmp8;
  ({ item, isSelected } = arg0);
  const tmp = closure_19();
  const obj = isSelected(8704);
  const currentUser = obj.useCurrentUser();
  const items = [isSelected, currentUser];
  const memo = react.useMemo(() => {
    let avatarSource;
    if (isSelected) {
      avatarSource = currentUser.getAvatarSource(null, true, c13);
    }
    return avatarSource;
  }, items);
  if (isNameplateRecord(item)) {
    const obj2 = { item, animate: isSelected };
    tmp8 = closure_10(currentUser(9448), obj2);
  } else if (isAvatarDecorationRecord(item)) {
    const obj3 = { item, size, animate: isSelected, avatarSource: memo };
    tmp8 = closure_10(currentUser(9434), obj3);
  } else if (isProfileEffectRecord(item)) {
    const obj4 = { style: tmp.profileEffect, children: items1 };
    const obj5 = { source: obj6, style: tmp.sampleProfile, resizeMode: "cover" };
    obj6 = { uri: currentUser(9447) };
    const tmp19 = currentUser(5705);
    items1 = [closure_10(tmp19, obj5), ];
    const obj7 = { skuId: item.skuId, useThumbnail: !isSelected };
    items1[1] = closure_10(currentUser(9425), obj7);
    tmp8 = closure_11(closure_4, obj4);
  } else {
    tmp8 = null;
    if (isProfileFrameRecord(item)) {
      const obj8 = { style: tmp.profileFrame, children: closure_10(tmp12, obj9) };
      obj9 = { profileFrame: item, previewWidth, previewHeight, profileBackgroundColor: currentUser(587).colors.BACKGROUND_BASE_LOW };
      tmp12 = currentUser(9446);
      tmp8 = closure_10(closure_4, obj8);
    }
  }
  return tmp8;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectibleTextFade() {
  let tmp10;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(12);
  const tmp4 = closure_19();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (cResult[0] !== token) {
    const hexToRgbaString = ColorUtils.hexToRgbaString;
    ColorUtils;
    const tmpResult4 = ColorUtils;
    const hexToRgbaStringResult = hexToRgbaString(tmpResult4.hexWithOpacity(token, 0.9));
    cResult[0] = token;
    cResult[1] = hexToRgbaStringResult;
    tmp7 = hexToRgbaStringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== token) {
    const hexToRgbaString2 = ColorUtils.hexToRgbaString;
    ColorUtils;
    const tmpResult6 = ColorUtils;
    const hexToRgbaString2Result = hexToRgbaString2(tmpResult6.hexWithOpacity(token, 0));
    cResult[2] = token;
    cResult[3] = hexToRgbaString2Result;
    tmp10 = hexToRgbaString2Result;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === token) {
    if (cResult[5] === tmp7) {
      let tmp13;
      let tmp15;
      if (cResult[6] === tmp10) {
        tmp13 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [0, 0.4, 1];
        cResult[8] = items;
        tmp15 = items;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === tmp4.collectibleTextFade) {
        let tmp16;
        if (cResult[10] === tmp13) {
          tmp16 = cResult[11];
        }
        return tmp16;
      }
      const obj3 = { style: tmp4.collectibleTextFade, colors: tmp13, locations: tmp15, start: null, end: null };
      ({ START: obj5.start, END: obj5.end } = VerticalGradient);
      const tmp19 = authStore(LinearGradientDefault, obj3);
      cResult[9] = tmp4.collectibleTextFade;
      cResult[10] = tmp13;
      cResult[11] = tmp19;
      tmp16 = tmp19;
    }
  }
  const items1 = [tmp10, tmp7, token];
  cResult[4] = token;
  cResult[5] = tmp7;
  cResult[6] = tmp10;
  cResult[7] = items1;
  tmp13 = items1;
}) : (function CollectibleTextFade() {
  let items;
  const tmp = closure_19();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const hexToRgbaString = ColorUtils.hexToRgbaString;
  ColorUtils;
  const obj2 = ColorUtils;
  const hexToRgbaStringResult = hexToRgbaString(obj2.hexWithOpacity(token, 0.9));
  const hexToRgbaString2 = ColorUtils.hexToRgbaString;
  ColorUtils;
  const obj3 = ColorUtils;
  const obj4 = { style: tmp.collectibleTextFade, colors: items, locations: [0, 0.4, 1], start: VerticalGradient.START, end: VerticalGradient.END };
  items = [hexToRgbaString2(obj3.hexWithOpacity(token, 0)), hexToRgbaStringResult, token];
  hexToRgbaString2(obj3.hexWithOpacity(token, 0));
  return authStore(LinearGradientDefault, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSKUCardPreview(arg0) {
  let claimed;
  let isSelected;
  let item;
  let items;
  let items1;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(29);
  ({ item, isSelected, claimed } = arg0);
  const tmp4 = closure_19();
  if (cResult[0] !== item) {
    const tmp7 = isProfileEffectRecord(item);
    cResult[0] = item;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== item) {
    const tmp10 = isProfileFrameRecord(item);
    cResult[2] = item;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp4.previewContainer) {
    let tmp12;
    if (cResult[5] === ((tmp5 || tmp8) && tmp4.expandedPreviewContainer)) {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp4.preview) {
      let tmp14;
      if (cResult[8] === (claimed && tmp4.claimed)) {
        tmp14 = cResult[9];
      }
      if (cResult[10] === isSelected) {
        let tmp15;
        if (cResult[11] === item) {
          tmp15 = cResult[12];
        }
        if (cResult[13] === tmp14) {
          let tmp19;
          if (cResult[14] === tmp15) {
            tmp19 = cResult[15];
          }
          if (cResult[16] === claimed) {
            let tmp23;
            if (cResult[17] === tmp4.checkmark) {
              tmp23 = cResult[18];
            }
            if (cResult[19] === tmp12) {
              if (cResult[20] === tmp19) {
                let tmp26;
                if (cResult[21] === tmp23) {
                  tmp26 = cResult[22];
                }
                if (cResult[23] === tmp5) {
                  let tmp30;
                  if (cResult[24] === tmp8) {
                    tmp30 = cResult[25];
                  }
                  if (cResult[26] === tmp26) {
                    let tmp34;
                    if (cResult[27] === tmp30) {
                      tmp34 = cResult[28];
                    }
                    return tmp34;
                  }
                  const obj2 = { children: items };
                  items = [tmp26, tmp30];
                  const tmp37 = unpackModuleId(authStore2, obj2);
                  cResult[26] = tmp26;
                  cResult[27] = tmp30;
                  cResult[28] = tmp37;
                  tmp34 = tmp37;
                }
                const tmp31 = (tmp5 || tmp8) && authStore(closure_21, {});
                cResult[23] = tmp5;
                cResult[24] = tmp8;
                cResult[25] = tmp31;
                tmp30 = tmp31;
              }
            }
            const obj3 = { style: tmp12, children: items1 };
            items1 = [tmp19, tmp23];
            const tmp29 = unpackModuleId(React3, obj3);
            cResult[19] = tmp12;
            cResult[20] = tmp19;
            cResult[21] = tmp23;
            cResult[22] = tmp29;
            tmp26 = tmp29;
          }
          let tmp24 = claimed;
          if (tmp24) {
            const obj4 = { size: "lg", style: tmp4.checkmark };
            tmp24 = authStore(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj4);
          }
          cResult[16] = claimed;
          cResult[17] = tmp4.checkmark;
          cResult[18] = tmp24;
          tmp23 = tmp24;
        }
        const obj5 = { style: tmp14, children: tmp15 };
        const tmp22 = authStore(React3, obj5);
        cResult[13] = tmp14;
        cResult[14] = tmp15;
        cResult[15] = tmp22;
        tmp19 = tmp22;
      }
      const obj6 = { item, isSelected };
      const tmp18 = authStore(closure_20, obj6);
      cResult[10] = isSelected;
      cResult[11] = item;
      cResult[12] = tmp18;
      tmp15 = tmp18;
    }
    const items2 = [tmp4.preview, claimed && tmp4.claimed];
    cResult[7] = tmp4.preview;
    cResult[8] = claimed && tmp4.claimed;
    cResult[9] = items2;
    tmp14 = items2;
  }
  const items3 = [tmp4.previewContainer, (tmp5 || tmp8) && tmp4.expandedPreviewContainer];
  cResult[4] = tmp4.previewContainer;
  cResult[5] = (tmp5 || tmp8) && tmp4.expandedPreviewContainer;
  cResult[6] = items3;
  tmp12 = items3;
}) : (function GiftingSKUCardPreview(isSelected) {
  let claimed;
  let item;
  let items2;
  ({ item, claimed } = isSelected);
  isSelected = isSelected.isSelected;
  const tmp = closure_19();
  let tmp7Result = isProfileEffectRecord(item);
  const tmp3 = isProfileFrameRecord(item);
  const items = [tmp.previewContainer, ];
  let expandedPreviewContainer = tmp7Result;
  const tmp5 = authStore2;
  if (!tmp7Result) {
    expandedPreviewContainer = tmp3;
  }
  if (expandedPreviewContainer) {
    expandedPreviewContainer = tmp.expandedPreviewContainer;
  }
  const obj = { style: items, children: items2 };
  items[1] = expandedPreviewContainer;
  const items1 = [tmp.preview, ];
  const tmp8 = claimed && tmp.claimed;
  items1[1] = tmp8;
  items2 = [, ];
  const obj2 = { style: items1, children: authStore(closure_20, { item, isSelected }) };
  items2[0] = authStore(React3, obj2);
  if (claimed) {
    const obj3 = { size: "lg", style: tmp.checkmark };
    claimed = tmp7(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj3);
  }
  items2[1] = claimed;
  const children = [unpackModuleId(React3, obj), ];
  if (!tmp7Result) {
    tmp7Result = tmp3;
  }
  if (tmp7Result) {
    tmp7Result = tmp7(closure_21, {});
  }
  children[1] = tmp7Result;
  return unpackModuleId(tmp5, { children });
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSKUCard(rewardSkuId) {
  let accessibilityRole;
  let accessibilityState;
  let claimed;
  let items;
  let items1;
  let onSelect;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(30);
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect } = rewardSkuId);
  const isSelected = rewardSkuId.isSelected;
  const tmp4 = closure_19();
  if (cResult[0] !== isSelected) {
    const obj2 = { selected: isSelected };
    cResult[0] = isSelected;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = react_native;
  const radioA11yNative = tmpResult.useRadioA11yNative(tmp5);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const tmpResult2 = useFetchCollectiblesProduct;
  const product = tmpResult2.useFetchCollectiblesProduct(rewardSkuId).product;
  if (null == product) {
    return null;
  } else {
    const first = product.items[0];
    if (cResult[2] === tmp4.card) {
      let tmp8;
      if (cResult[3] === (isSelected && tmp4.selected)) {
        tmp8 = cResult[4];
      }
      if (cResult[5] === onSelect) {
        let tmp9;
        if (cResult[6] === rewardSkuId) {
          tmp9 = cResult[7];
        }
        if (cResult[8] === claimed) {
          if (cResult[9] === isSelected) {
            let tmp10;
            let tmp14;
            let tmp17;
            let tmp19;
            if (cResult[10] === first) {
              tmp10 = cResult[11];
            }
            if (cResult[12] !== product.name) {
              const obj3 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
              const tmp16 = authStore(Text_Text.Text, obj3);
              cResult[12] = product.name;
              cResult[13] = tmp16;
              tmp14 = tmp16;
            } else {
              tmp14 = cResult[13];
            }
            if (cResult[14] !== claimed) {
              let stringResult;
              const intl = tmp(1125).intl;
              const string = intl.string;
              const t = tmp(1125).t;
              if (claimed) {
                stringResult = string(t["6cfuDj"]);
              } else {
                stringResult = string(t.QQsaCc);
              }
              cResult[14] = claimed;
              cResult[15] = stringResult;
              tmp17 = stringResult;
            } else {
              tmp17 = cResult[15];
            }
            if (cResult[16] !== tmp17) {
              const obj4 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp17 };
              const tmp21 = authStore(Text_Text.Text, obj4);
              cResult[16] = tmp17;
              cResult[17] = tmp21;
              tmp19 = tmp21;
            } else {
              tmp19 = cResult[17];
            }
            if (cResult[18] === tmp4.textContainer) {
              if (cResult[19] === tmp14) {
                let tmp22;
                if (cResult[20] === tmp19) {
                  tmp22 = cResult[21];
                }
                if (cResult[22] === accessibilityRole) {
                  if (cResult[23] === accessibilityState) {
                    if (cResult[24] === claimed) {
                      if (cResult[25] === tmp8) {
                        if (cResult[26] === tmp9) {
                          if (cResult[27] === tmp10) {
                            let tmp26;
                            if (cResult[28] === tmp22) {
                              tmp26 = cResult[29];
                            }
                            return tmp26;
                          }
                        }
                      }
                    }
                  }
                }
                const obj5 = { style: tmp8, onPress: tmp9, activeOpacity: 0.8, disabled: claimed, accessibilityRole, accessibilityState, children: items };
                items = [tmp10, tmp22];
                const tmp28 = unpackModuleId(Pressables.PressableOpacity, obj5);
                cResult[22] = accessibilityRole;
                cResult[23] = accessibilityState;
                cResult[24] = claimed;
                cResult[25] = tmp8;
                cResult[26] = tmp9;
                cResult[27] = tmp10;
                cResult[28] = tmp22;
                cResult[29] = tmp28;
                tmp26 = tmp28;
              }
            }
            const obj6 = { style: tmp4.textContainer, children: items1 };
            items1 = [tmp14, tmp19];
            const tmp25 = unpackModuleId(React3, obj6);
            cResult[18] = tmp4.textContainer;
            cResult[19] = tmp14;
            cResult[20] = tmp19;
            cResult[21] = tmp25;
            tmp22 = tmp25;
          }
        }
        let tmp11 = null != first;
        if (tmp11) {
          const obj7 = { item: first, isSelected, claimed };
          tmp11 = authStore(closure_22, obj7);
        }
        cResult[8] = claimed;
        cResult[9] = isSelected;
        cResult[10] = first;
        cResult[11] = tmp11;
        tmp10 = tmp11;
      }
      const fn = function x() {
        return onSelect(rewardSkuId);
      };
      cResult[5] = onSelect;
      cResult[6] = rewardSkuId;
      cResult[7] = fn;
      tmp9 = fn;
    }
    const items2 = [tmp4.card, isSelected && tmp4.selected];
    cResult[2] = tmp4.card;
    cResult[3] = isSelected && tmp4.selected;
    cResult[4] = items2;
    tmp8 = items2;
  }
}) : (function GiftingSKUCard(rewardSkuId) {
  let accessibilityRole;
  let accessibilityState;
  let claimed;
  let closure_129_1;
  let isSelected;
  let items1;
  let items2;
  rewardSkuId = rewardSkuId.rewardSkuId;
  ({ claimed, onSelect: closure_129_1, isSelected } = rewardSkuId);
  const tmp = closure_19();
  const obj = react_native;
  const radioA11yNative = obj.useRadioA11yNative({ selected: isSelected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = useFetchCollectiblesProduct;
  const product = obj2.useFetchCollectiblesProduct(rewardSkuId).product;
  if (null == product) {
    return null;
  } else {
    let stringResult;
    const first = product.items[0];
    const items = [tmp.card, ];
    let selected = isSelected;
    const PressableOpacity = tmp2(6944).PressableOpacity;
    if (isSelected) {
      selected = tmp.selected;
    }
    const obj3 = {
      style: items,
      onPress() {
          return closure_1_1(rewardSkuId);
        },
      activeOpacity: 0.8,
      disabled: claimed,
      accessibilityRole,
      accessibilityState,
      children: items1
    };
    items[1] = selected;
    let tmp5 = null != first;
    if (tmp5) {
      const obj4 = { item: first, isSelected, claimed };
      tmp5 = authStore(closure_22, obj4);
    }
    items1 = [tmp5, ];
    const obj5 = { style: tmp.textContainer, children: items2 };
    const obj6 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", lineClamp: 1, accessibilityRole: "header", children: product.name };
    items2 = [authStore(Text_Text.Text, obj6), ];
    const Text = tmp2(5270).Text;
    const intl = tmp2(1125).intl;
    const string = intl.string;
    const t = tmp2(1125).t;
    const tmp8 = React3;
    const tmp9 = authStore;
    if (claimed) {
      stringResult = string(t["6cfuDj"]);
    } else {
      stringResult = string(t.QQsaCc);
    }
    const obj7 = { variant: "text-xs/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: stringResult };
    items2[1] = tmp9(Text, obj7);
    items1[1] = unpackModuleId(tmp8, obj5);
    return unpackModuleId(PressableOpacity, obj3);
  }
}));
createStyles = createStyles_mod;
let obj6 = { grid: { flexDirection: "column", alignSelf: "center", gap: PX_122 }, row: { flexDirection: "row", gap: PX_122 } };
let closure_24 = createStyles.createStyles(obj6);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSKUCardsGrid(onSelect) {
  let claimableRewards;
  let highlightedSkuId;
  let rewardsToDisplay;
  let obj = claimableRewards(highlightedSkuId[12]);
  const cResult = obj.c(22);
  ({ rewardsToDisplay, claimableRewards } = onSelect);
  onSelect = onSelect.onSelect;
  const tmp = highlightedSkuId;
  highlightedSkuId = onSelect.highlightedSkuId;
  const tmp3 = closure_24();
  const row = tmp3;
  let length = Math.max(1, Math.floor((onSelect(highlightedSkuId[29])().width - closure_18 + PX_122) / (c14 + PX_122)));
  const tmp4 = onSelect;
  const tmp5 = PX_122;
  const tmp6 = c14;
  if (cResult[0] === length) {
    let arr;
    let tmp10;
    if (cResult[1] === rewardsToDisplay) {
      arr = cResult[2];
    }
    if (arr.length <= 1) {
      length = rewardsToDisplay.length;
    }
    const _Math = Math;
    const result = length * tmp6;
    const sum = result + Math.max(0, length - 1) * tmp5;
    if (cResult[3] !== sum) {
      const obj2 = { width: sum };
      cResult[3] = sum;
      cResult[4] = obj2;
      tmp10 = obj2;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === tmp3.grid) {
      let tmp11;
      let tmp12;
      if (cResult[6] === tmp10) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === claimableRewards) {
        if (cResult[9] === highlightedSkuId) {
          if (cResult[10] === onSelect) {
            if (cResult[11] === arr) {
              if (cResult[12] === tmp3.row) {
                tmp12 = cResult[13];
              }
              if (cResult[19] === tmp11) {
                let tmp15;
                if (cResult[20] === tmp12) {
                  tmp15 = cResult[21];
                }
                return tmp15;
              }
              const obj3 = { style: tmp11, children: tmp12 };
              const tmp18 = closure_10(closure_4, obj3);
              cResult[19] = tmp11;
              cResult[20] = tmp12;
              cResult[21] = tmp18;
              tmp15 = tmp18;
            }
          }
        }
      }
      if (cResult[14] === claimableRewards) {
        if (cResult[15] === highlightedSkuId) {
          if (cResult[16] === onSelect) {
            let tmp13;
            if (cResult[17] === tmp3.row) {
              tmp13 = cResult[18];
            }
            const mapped = arr.map(tmp13);
            cResult[8] = claimableRewards;
            cResult[9] = highlightedSkuId;
            cResult[10] = onSelect;
            cResult[11] = arr;
            cResult[12] = tmp3.row;
            cResult[13] = mapped;
            tmp12 = mapped;
          }
        }
      }
      const fn = function x(arr, arg1) {
        let obj = {
          style: row.row,
          children: arr.map((rewardSkuId) => {
            let closure_0 = rewardSkuId;
            const obj = { rewardSkuId, claimed: !claimableRewards.some((item) => item === closure_0), isSelected: highlightedSkuId === rewardSkuId, onSelect };
            return closure_2_10(closure_2_23, obj, rewardSkuId);
          })
        };
        return authStore(React3, obj, arg1);
      };
      cResult[14] = claimableRewards;
      cResult[15] = highlightedSkuId;
      cResult[16] = onSelect;
      cResult[17] = tmp3.row;
      cResult[18] = fn;
      tmp13 = fn;
    }
    const items = [tmp3.grid, tmp10];
    cResult[5] = tmp3.grid;
    cResult[6] = tmp10;
    cResult[7] = items;
    tmp11 = items;
  }
  const tmp4Result = tmp4(tmp[30]);
  const chunkResult = tmp4Result.chunk(rewardsToDisplay, length);
  cResult[0] = length;
  cResult[1] = rewardsToDisplay;
  cResult[2] = chunkResult;
  arr = chunkResult;
}) : (function GiftingSKUCardsGrid(rewardsToDisplay) {
  let items1;
  rewardsToDisplay = rewardsToDisplay.rewardsToDisplay;
  ({ claimableRewards: importDefault, onSelect: dependencyMap, highlightedSkuId: react } = rewardsToDisplay);
  const tmp = closure_24();
  const row = tmp;
  let length = Math.max(1, Math.floor((useWindowDimensionsDefault().width - closure_18 + PX_122) / (c14 + PX_122)));
  const items = [rewardsToDisplay, length];
  const memo = react.useMemo(() => {
    const obj = _modDef12;
    return obj.chunk(rewardsToDisplay, length);
  }, items);
  const tmp3 = c14;
  if (memo.length <= 1) {
    length = rewardsToDisplay.length;
  }
  const result = length * tmp3;
  let obj = {
    style: items1,
    children: memo.map((arr, index) => {
      let onSelect;
      let obj = {
        style: row.row,
        children: arr.map((rewardSkuId) => {
          let closure_0 = rewardSkuId;
          const obj = { rewardSkuId, claimed: !closure_1_1.some((item) => item === closure_0), isSelected: closure_1_3 === rewardSkuId, onSelect };
          return closure_2_10(closure_2_23, obj, rewardSkuId);
        })
      };
      return authStore(React3, obj, index);
    })
  };
  items1 = [tmp.grid, { width: result + Math.max(0, length - 1) * tmp2 }];
  ({ width: result + Math.max(0, length - 1) * PX_122 });
  return closure_10(row, obj);
});
let result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default tmp8;
