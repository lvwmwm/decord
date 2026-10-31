// Module ID: 17001
// Function ID: 17002
// Name: HexagonCampaignThemeLegal
// Dependencies: [19, 17, 5039, 21, 5014, 575, 5624, 1113, 4285, 16472, 5717, 17002, 2]
// Exports: default

// Module 17001 (HexagonCampaignThemeLegal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4285 from "module_4285" /* 4285 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AssetRegistryDefault from "AssetRegistry" /* 17002 */;
import react from "react" /* 19 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5039 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp2;
const openHexagonCampaignLearnMore = tmp2(16472);
const View = react_native.View;
({ HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: closure_4, HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: hasOwnProperty } = HexagonCampaignConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { legal: { textAlign: "center" }, legalWithLogo: obj2, logo: { width: 32, height: 32 }, legalText: { flex: 1 }, link: { textDecorationLine: "underline" } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignThemeLegal.tsx");

export default function HexagonCampaignThemeLegal(animatedStyles) {
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
  let obj = { animated: tmp2, variant: "text-xs/medium", color: str, style: items, children: intl.format(_modDef4285.y2YmJv, obj2) };
  let Text = animatedStyles(5624).Text;
  let headerSecondary;
  const tmp4 = animatedStyles;
  if (animatedStyles != null) {
    headerSecondary = animatedStyles.headerSecondary;
  }
  items = [headerSecondary, flag ? tmp.legalText : tmp.legal];
  intl = tmp4(1113).intl;
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
  let tmp9 = tmp3Result;
  if (flag) {
    const obj3 = { style: tmp.legalWithLogo, children: items1 };
    const obj4 = { source: AssetRegistryDefault, style: tmp.logo, resizeMode: "contain", accessible: false };
    const tmp7Result = FastImageDefault;
    items1 = [tmp3(tmp7Result, obj4), tmp3Result];
    tmp9 = closure_7(View, obj3);
  }
  return tmp9;
};
