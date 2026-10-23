// Module ID: 16363
// Function ID: 16364
// Name: HexagonCampaignThemeLegal
// Dependencies: [19, 17, 4994, 21, 4969, 587, 558, 576, 5232, 15845, 1128, 5667, 16364, 2]

// Module 16363 (HexagonCampaignThemeLegal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5232 */;
import FastImageDefault from "FastImage" /* 5667 */;
import AssetRegistryDefault from "AssetRegistry" /* 16364 */;
import react from "react" /* 19 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4994 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp2;
const openHexagonCampaignLearnMore = tmp2(15845);
const View = react_native.View;
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: closure_4, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: hasOwnProperty } = HexagonCampaignConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { legal: { textAlign: "center" }, legalWithLogo: obj2, logo: { width: 32, height: 32 }, legalText: { flex: 1 }, link: { textDecorationLine: "underline" } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignThemeLegal(animatedStyles) {
  let animated;
  let items;
  let link;
  let tmp = animatedStyles;
  let tmp2 = dependencyMap;
  let obj = animatedStyles(576);
  const cResult = obj.c(20);
  animatedStyles = animatedStyles.animatedStyles;
  const showLogo = animatedStyles.showLogo;
  let tmp5 = closure_8();
  importDefault = tmp5;
  dependencyMap = tmp6;
  let headerPrimary;
  const first = cResult[0];
  if (animatedStyles != null) {
    headerPrimary = animatedStyles.headerPrimary;
  }
  if (first === headerPrimary) {
    if (cResult[1] === null != animatedStyles) {
      let tmp9;
      if (cResult[2] === tmp5.link) {
        tmp9 = cResult[3];
      }
      let headerSecondary;
      if (animatedStyles != null) {
        headerSecondary = animatedStyles.headerSecondary;
      }
      const tmp12 = undefined !== showLogo && showLogo ? tmp5.legalText : tmp5.legal;
      if (cResult[4] === headerSecondary) {
        let tmp13;
        let tmp14;
        if (cResult[5] === tmp12) {
          tmp13 = cResult[6];
        }
        if (cResult[7] !== tmp9) {
          const intl = tmp(1128).intl;
          const obj2 = { nonPremiumEndDate, premiumEndDate, learnMoreHook: tmp9 };
          const formatResult = intl.format(tmp(1128).t.y2YmJv, obj2);
          cResult[7] = tmp9;
          cResult[8] = formatResult;
          tmp14 = formatResult;
        } else {
          tmp14 = cResult[8];
        }
        if (cResult[9] === null != animatedStyles) {
          if (cResult[10] === "text-muted") {
            if (cResult[11] === tmp13) {
              let tmp18;
              if (cResult[12] === tmp14) {
                tmp18 = cResult[13];
              }
              let tmp21 = tmp18;
              if (undefined !== showLogo && showLogo) {
                let tmp22;
                if (cResult[14] !== tmp5.logo) {
                  const obj3 = { source: AssetRegistryDefault, style: tmp5.logo, resizeMode: "contain", accessible: false };
                  const tmp25 = FastImageDefault;
                  const tmp26 = closure_6(tmp25, obj3);
                  cResult[14] = tmp5.logo;
                  cResult[15] = tmp26;
                  tmp22 = tmp26;
                } else {
                  tmp22 = cResult[15];
                }
                if (cResult[16] === tmp18) {
                  if (cResult[17] === tmp5.legalWithLogo) {
                    let tmp27;
                    if (cResult[18] === tmp22) {
                      tmp27 = cResult[19];
                    }
                    tmp21 = tmp27;
                  }
                }
                const obj4 = { style: tmp5.legalWithLogo, children: items };
                items = [tmp22, tmp18];
                const tmp30 = closure_7(View, obj4);
                cResult[16] = tmp18;
                cResult[17] = tmp5.legalWithLogo;
                cResult[18] = tmp22;
                cResult[19] = tmp30;
                tmp27 = tmp30;
              }
              return tmp21;
            }
          }
        }
        const obj5 = { animated: null != animatedStyles, variant: "text-xs/medium", color: "text-muted", style: tmp13, children: tmp14 };
        const tmp20 = closure_6(tmp(5232).Text, obj5);
        cResult[9] = null != animatedStyles;
        cResult[10] = "text-muted";
        cResult[11] = tmp13;
        cResult[12] = tmp14;
        cResult[13] = tmp20;
        tmp18 = tmp20;
      }
      const items1 = [headerSecondary, tmp12];
      cResult[4] = headerSecondary;
      cResult[5] = tmp12;
      cResult[6] = items1;
      tmp13 = items1;
    }
  }
  let headerPrimary1;
  if (animatedStyles != null) {
    headerPrimary1 = animatedStyles.headerPrimary;
  }
  function learnMoreHook(children, arg1) {
    let tmp5;
    const obj = { animated, variant: "text-xs/medium", color: "text-link", style: tmp5, accessibilityRole: "link", onPress: openHexagonCampaignLearnMore.openHexagonCampaignLearnMore, children };
    const Text = Text_Text.Text;
    tmp5 = undefined;
    const tmp = metroRequire;
    if (animated) {
      let headerPrimary;
      if (animatedStyles != null) {
        headerPrimary = animatedStyles.headerPrimary;
      }
      const items = [headerPrimary, link.link];
      tmp5 = items;
    }
    return tmp(Text, obj, arg1);
  }
  cResult[0] = headerPrimary1;
  cResult[1] = null != animatedStyles;
  cResult[2] = tmp5.link;
  cResult[3] = learnMoreHook;
  tmp9 = learnMoreHook;
}) : (function HexagonCampaignThemeLegal(animatedStyles) {
  let animated;
  let intl;
  let items;
  let items1;
  let link;
  let obj2;
  animatedStyles = animatedStyles.animatedStyles;
  let flag = animatedStyles.showLogo;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_8();
  importDefault = tmp;
  let tmp2 = null != animatedStyles;
  dependencyMap = tmp2;
  let tmp5 = dependencyMap;
  let obj = { animated: tmp2, variant: "text-xs/medium", color: str, style: items, children: intl.format(tmp4(1128).t.y2YmJv, obj2) };
  let Text = animatedStyles(5232).Text;
  let headerSecondary;
  if (animatedStyles != null) {
    headerSecondary = animatedStyles.headerSecondary;
  }
  items = [headerSecondary, flag ? tmp.legalText : tmp.legal];
  intl = tmp4(1128).intl;
  obj2 = {
    nonPremiumEndDate,
    premiumEndDate,
    learnMoreHook(children, arg1) {
      let tmp5;
      const obj = { animated, variant: "text-xs/medium", color: "text-link", style: tmp5, accessibilityRole: "link", onPress: openHexagonCampaignLearnMore.openHexagonCampaignLearnMore, children };
      const Text = Text_Text.Text;
      tmp5 = undefined;
      const tmp = metroRequire;
      if (animated) {
        let headerPrimary;
        if (animatedStyles != null) {
          headerPrimary = animatedStyles.headerPrimary;
        }
        const items = [headerPrimary, link.link];
        tmp5 = items;
      }
      return tmp(Text, obj, arg1);
    }
  };
  const tmp3Result = closure_6(Text, obj);
  let tmp8 = tmp3Result;
  if (flag) {
    const obj3 = { style: tmp.legalWithLogo, children: items1 };
    const obj4 = { source: AssetRegistryDefault, style: tmp.logo, resizeMode: "contain", accessible: false };
    const tmp12 = FastImageDefault;
    items1 = [tmp3(tmp12, obj4), tmp3Result];
    tmp8 = closure_7(View, obj3);
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignThemeLegal.tsx");

export default tmp5;
