// Module ID: 16347
// Function ID: 16348
// Name: HexagonCampaignQuestHomeHeader
// Dependencies: [19, 17, 21, 4969, 587, 558, 576, 5035, 4998, 5250, 683, 5232, 15845, 5667, 16348, 5256, 16349, 1128, 16350, 5975, 4976, 5242, 16354, 2]

// Module 16347 (HexagonCampaignQuestHomeHeader)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import LinearGradientDefault from "LinearGradient" /* 5256 */;
import FastImageDefault from "FastImage" /* 5667 */;
import AssetRegistryDefault from "AssetRegistry" /* 16348 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16349 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let size;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, banner: { width: "100%", aspectRatio: 1 }, bannerImage: { width: "100%", height: "100%" }, logo: size, sponsoredTag: rect, cardShadow: obj3, card: obj4, cardArt: obj5, cardContent: obj6, cardBody: { opacity: 0.8 } };
obj2 = { width: "100%", maxWidth: 448, alignSelf: "center", marginBottom: nativeDefault.space.PX_40 };
createStyles = createStyles.createStyles;
size = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_8, width: 88, height: 88 };
rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj3 = { marginTop: -146, marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj4 = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5 = { alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
obj6 = { paddingTop: nativeDefault.space.PX_10, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignQuestHomeHeader() {
  let card;
  let cardShadow;
  let intl;
  let intl2;
  let intl4;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj15;
  let tmp8;
  let token;
  let obj = token(576);
  const cResult = obj.c(48);
  const tmp4 = closure_8();
  const obj2 = token(5035);
  const theme = obj2.useThemeContext().theme;
  const obj3 = token(4998);
  const isHexagonCampaignQuestHomeHeaderEnabled = obj3.useIsHexagonCampaignQuestHomeHeaderEnabled("HexagonCampaignQuestHomeHeader");
  const obj4 = token(5250);
  token = obj4.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  if (cResult[0] !== token) {
    const items = [0, 0.83, 1];
    const mapped = items.map((item) => {
      const obj = _modDef683(token);
      const alphaResult = obj.alpha(item);
      return alphaResult.css();
    });
    cResult[0] = token;
    cResult[1] = mapped;
    tmp8 = mapped;
  } else {
    tmp8 = cResult[1];
  }
  if (isHexagonCampaignQuestHomeHeaderEnabled) {
    let tmp12;
    let tmp13;
    let tmp17;
    let tmp18;
    let tmp22;
    let tmp26;
    let tmp29;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      function learnMoreHook(children, arg1) {
        const obj = { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: token(dependencyMap[12]).openHexagonCampaignLearnMore, children };
        const Text = token(dependencyMap[11]).Text;
        return closure_1_6(Text, obj, arg1);
      }
      cResult[2] = learnMoreHook;
      tmp12 = learnMoreHook;
    } else {
      tmp12 = cResult[2];
    }
    const container = tmp4.container;
    if (cResult[3] !== tmp4.bannerImage) {
      const obj5 = { source: AssetRegistryDefault, style: tmp4.bannerImage, resizeMode: "cover", accessible: false };
      const tmp6Result = FastImageDefault;
      const tmp16 = closure_6(tmp6Result, obj5);
      cResult[3] = tmp4.bannerImage;
      cResult[4] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[4];
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [0.716, 0.823, 1];
      cResult[5] = items1;
      tmp17 = items1;
    } else {
      tmp17 = cResult[5];
    }
    if (cResult[6] !== tmp8) {
      const obj6 = { colors: tmp8, locations: tmp17, style: closure_4.absoluteFill, pointerEvents: "none" };
      const tmp21 = closure_6(LinearGradientDefault, obj6);
      cResult[6] = tmp8;
      cResult[7] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] !== tmp4.logo) {
      const obj7 = { source: AssetRegistryDefault2, style: tmp4.logo, resizeMode: "contain", accessible: false };
      const tmp6Result2 = FastImageDefault;
      const tmp25 = closure_6(tmp6Result2, obj7);
      cResult[8] = tmp4.logo;
      cResult[9] = tmp25;
      tmp22 = tmp25;
    } else {
      tmp22 = cResult[9];
    }
    const _Symbol3 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { variant: "text-sm/semibold", color: "text-overlay-light", children: intl.string(token(1128).t.kVJc0r) };
      let Text = tmp(5232).Text;
      intl = tmp(1128).intl;
      const tmp28 = closure_6(Text, obj8);
      cResult[10] = tmp28;
      tmp26 = tmp28;
    } else {
      tmp26 = cResult[10];
    }
    if (cResult[11] !== tmp4.sponsoredTag) {
      const obj9 = { style: tmp4.sponsoredTag, children: tmp26 };
      const tmp32 = closure_6(closure_5, obj9);
      cResult[11] = tmp4.sponsoredTag;
      cResult[12] = tmp32;
      tmp29 = tmp32;
    } else {
      tmp29 = cResult[12];
    }
    if (cResult[13] === tmp4.banner) {
      if (cResult[14] === tmp13) {
        if (cResult[15] === tmp18) {
          if (cResult[16] === tmp22) {
            let tmp33;
            let tmp37;
            let tmp40;
            let tmp44;
            let tmp47;
            let tmp49;
            let tmp53;
            if (cResult[17] === tmp29) {
              tmp33 = cResult[18];
            }
            const _Symbol4 = Symbol;
            ({ cardShadow, card } = tmp4);
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp39 = closure_6(token(16350).BundleAbstractUI, { accessible: false });
              cResult[19] = tmp39;
              tmp37 = tmp39;
            } else {
              tmp37 = cResult[19];
            }
            if (cResult[20] !== tmp4.cardArt) {
              const obj10 = { style: tmp4.cardArt, children: tmp37 };
              const tmp43 = closure_6(closure_5, obj10);
              cResult[20] = tmp4.cardArt;
              cResult[21] = tmp43;
              tmp40 = tmp43;
            } else {
              tmp40 = cResult[21];
            }
            const _Symbol5 = Symbol;
            const cardContent = tmp4.cardContent;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const obj11 = { variant: "text-lg/semibold", color: "text-strong", children: intl2.string(token(1128).t["fShp/D"]) };
              const Heading = tmp(5232).Heading;
              intl2 = tmp(1128).intl;
              const tmp46 = closure_6(Heading, obj11);
              cResult[22] = tmp46;
              tmp44 = tmp46;
            } else {
              tmp44 = cResult[22];
            }
            const _Symbol6 = Symbol;
            const cardBody = tmp4.cardBody;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1128).intl;
              const stringResult = intl3.string(token(1128).t.XLqMej);
              cResult[23] = stringResult;
              tmp47 = stringResult;
            } else {
              tmp47 = cResult[23];
            }
            if (cResult[24] !== tmp4.cardBody) {
              const obj12 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: items2 };
              const Stack = tmp(5975).Stack;
              items2 = [tmp44, ];
              const obj13 = { variant: "text-sm/medium", color: "text-default", style: cardBody, children: tmp47 };
              items2[1] = closure_6(token(5232).Text, obj13);
              const tmp52 = closure_7(Stack, obj12);
              cResult[24] = tmp4.cardBody;
              cResult[25] = tmp52;
              tmp49 = tmp52;
            } else {
              tmp49 = cResult[25];
            }
            const _Symbol7 = Symbol;
            if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
              const obj14 = { variant: "text-xs/medium", color: "text-subtle", children: intl4.format(token(1128).t.uL0TOA, obj15) };
              const Text2 = tmp(5232).Text;
              intl4 = tmp(1128).intl;
              obj15 = { learnMoreHook: tmp12 };
              const tmp55 = closure_6(Text2, obj14);
              cResult[26] = tmp55;
              tmp53 = tmp55;
            } else {
              tmp53 = cResult[26];
            }
            if (cResult[27] === tmp49) {
              let tmp56;
              let tmp59;
              let tmp61;
              if (cResult[28] === tmp53) {
                tmp56 = cResult[29];
              }
              let str2 = "primary-overlay";
              const tmpResult = token(4976);
              if (tmpResult.isThemeLight(theme)) {
                str2 = "primary";
              }
              const _Symbol8 = Symbol;
              if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                const intl5 = tmp(1128).intl;
                const stringResult1 = intl5.string(token(1128).t["KX1/jp"]);
                cResult[30] = stringResult1;
                tmp59 = stringResult1;
              } else {
                tmp59 = cResult[30];
              }
              if (cResult[31] !== str2) {
                const obj16 = { variant: str2, text: tmp59, onPress: token(16354).openHexagonCampaignSheet, grow: true };
                const Button = tmp(5242).Button;
                const tmp63 = closure_6(Button, obj16);
                cResult[31] = str2;
                cResult[32] = tmp63;
                tmp61 = tmp63;
              } else {
                tmp61 = cResult[32];
              }
              if (cResult[33] === tmp4.cardContent) {
                if (cResult[34] === tmp56) {
                  let tmp64;
                  if (cResult[35] === tmp61) {
                    tmp64 = cResult[36];
                  }
                  if (cResult[37] === tmp4.card) {
                    if (cResult[38] === tmp40) {
                      let tmp67;
                      if (cResult[39] === tmp64) {
                        tmp67 = cResult[40];
                      }
                      if (cResult[41] === tmp4.cardShadow) {
                        let tmp71;
                        if (cResult[42] === tmp67) {
                          tmp71 = cResult[43];
                        }
                        if (cResult[44] === tmp4.container) {
                          if (cResult[45] === tmp71) {
                            let tmp75;
                            if (cResult[46] === tmp33) {
                              tmp75 = cResult[47];
                            }
                            return tmp75;
                          }
                        }
                        const obj17 = { style: container, children: items3 };
                        items3 = [tmp33, tmp71];
                        const tmp78 = closure_7(closure_5, obj17);
                        cResult[44] = tmp4.container;
                        cResult[45] = tmp71;
                        cResult[46] = tmp33;
                        cResult[47] = tmp78;
                        tmp75 = tmp78;
                      }
                      const obj18 = { style: cardShadow, children: tmp67 };
                      const tmp74 = closure_6(closure_5, obj18);
                      cResult[41] = tmp4.cardShadow;
                      cResult[42] = tmp67;
                      cResult[43] = tmp74;
                      tmp71 = tmp74;
                    }
                  }
                  const obj19 = { style: card, children: items4 };
                  items4 = [tmp40, tmp64];
                  const tmp70 = closure_7(closure_5, obj19);
                  cResult[37] = tmp4.card;
                  cResult[38] = tmp40;
                  cResult[39] = tmp64;
                  cResult[40] = tmp70;
                  tmp67 = tmp70;
                }
              }
              const obj20 = { direction: "vertical", spacing: nativeDefault.space.PX_12, style: cardContent, children: items5 };
              const Stack3 = tmp(5975).Stack;
              items5 = [tmp56, tmp61];
              const tmp66 = closure_7(Stack3, obj20);
              cResult[33] = tmp4.cardContent;
              cResult[34] = tmp56;
              cResult[35] = tmp61;
              cResult[36] = tmp66;
              tmp64 = tmp66;
            }
            const obj21 = { direction: "vertical", spacing: nativeDefault.space.PX_8, children: items6 };
            const Stack2 = tmp(5975).Stack;
            items6 = [tmp49, tmp53];
            const tmp58 = closure_7(Stack2, obj21);
            cResult[27] = tmp49;
            cResult[28] = tmp53;
            cResult[29] = tmp58;
            tmp56 = tmp58;
          }
        }
      }
    }
    const obj22 = { style: tmp4.banner, children: items7 };
    items7 = [tmp13, tmp18, tmp22, tmp29];
    const tmp36 = closure_7(closure_5, obj22);
    cResult[13] = tmp4.banner;
    cResult[14] = tmp13;
    cResult[15] = tmp18;
    cResult[16] = tmp22;
    cResult[17] = tmp29;
    cResult[18] = tmp36;
    tmp33 = tmp36;
  } else {
    return null;
  }
}) : (function HexagonCampaignQuestHomeHeader() {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj12;
  let obj20;
  let token;
  const tmp = closure_8();
  let obj = token(5035);
  const theme = obj.useThemeContext().theme;
  const obj2 = token(4998);
  const isHexagonCampaignQuestHomeHeaderEnabled = obj2.useIsHexagonCampaignQuestHomeHeaderEnabled("HexagonCampaignQuestHomeHeader");
  const obj3 = token(5250);
  token = obj3.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  [][0] = token;
  let tmp9Result = null;
  if (isHexagonCampaignQuestHomeHeaderEnabled) {
    const obj4 = { style: tmp.container, children: items1 };
    const obj5 = { style: tmp.banner, children: items };
    const obj6 = { source: AssetRegistryDefault, style: tmp.bannerImage, resizeMode: "cover", accessible: false };
    const tmp5Result = FastImageDefault;
    items = [closure_6(tmp5Result, obj6), , , ];
    const obj7 = { colors: tmp7, locations: [0.716, 0.823, 1], style: closure_4.absoluteFill, pointerEvents: "none" };
    items[1] = closure_6(LinearGradientDefault, obj7);
    const obj8 = { source: AssetRegistryDefault2, style: tmp.logo, resizeMode: "contain", accessible: false };
    const tmp5Result2 = FastImageDefault;
    items[2] = closure_6(tmp5Result2, obj8);
    const obj9 = { style: tmp.sponsoredTag, children: closure_6(Text, obj10) };
    obj10 = { variant: "text-sm/semibold", color: "text-overlay-light", children: intl.string(token(1128).t.kVJc0r) };
    Text = tmp2(5232).Text;
    intl = tmp2(1128).intl;
    items[3] = closure_6(closure_5, obj9);
    items1 = [closure_7(closure_5, obj5), ];
    const obj11 = { style: tmp.cardShadow, children: closure_7(closure_5, obj12) };
    obj12 = { style: tmp.card, children: items2 };
    const obj13 = { style: tmp.cardArt, children: closure_6(token(16350).BundleAbstractUI, { accessible: false }) };
    items2 = [closure_6(closure_5, obj13), ];
    const obj14 = { direction: "vertical", spacing: nativeDefault.space.PX_12, style: tmp.cardContent, children: items5 };
    const Stack = tmp2(5975).Stack;
    const obj15 = { direction: "vertical", spacing: nativeDefault.space.PX_8, children: items4 };
    const Stack2 = tmp2(5975).Stack;
    const obj16 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: items3 };
    const Stack3 = tmp2(5975).Stack;
    const obj17 = { variant: "text-lg/semibold", color: "text-strong", children: intl2.string(token(1128).t["fShp/D"]) };
    const Heading = tmp2(5232).Heading;
    intl2 = tmp2(1128).intl;
    items3 = [closure_6(Heading, obj17), ];
    const obj18 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardBody, children: intl3.string(token(1128).t.XLqMej) };
    const Text2 = tmp2(5232).Text;
    intl3 = tmp2(1128).intl;
    items3[1] = closure_6(Text2, obj18);
    items4 = [closure_7(Stack3, obj16), ];
    const obj19 = { variant: "text-xs/medium", color: "text-subtle", children: intl4.format(token(1128).t.uL0TOA, obj20) };
    const Text3 = tmp2(5232).Text;
    intl4 = tmp2(1128).intl;
    obj20 = {
      learnMoreHook(children, arg1) {
          const obj = { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: token(dependencyMap[12]).openHexagonCampaignLearnMore, children };
          const Text = token(dependencyMap[11]).Text;
          return closure_1_6(Text, obj, arg1);
        }
    };
    items4[1] = closure_6(Text3, obj19);
    items5 = [closure_7(Stack2, obj15), ];
    const Button = tmp2(5242).Button;
    let str = "primary-overlay";
    const tmp2Result = token(4976);
    if (tmp2Result.isThemeLight(theme)) {
      str = "primary";
    }
    const obj21 = { variant: str, text: intl5.string(token(1128).t["KX1/jp"]), onPress: token(16354).openHexagonCampaignSheet, grow: true };
    intl5 = tmp2(1128).intl;
    items5[1] = closure_6(Button, obj21);
    items2[1] = closure_7(Stack, obj14);
    items1[1] = closure_6(closure_5, obj11);
    tmp9Result = tmp9(tmp10, obj4);
  }
  return tmp9Result;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignQuestHomeHeader.tsx");

export default tmp6;
