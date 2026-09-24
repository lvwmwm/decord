// Module ID: 9526
// Function ID: 9527
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1378, 21, 558, 568, 9527, 7711, 4450, 5834, 2]

// Module 9526 (PremiumFeaturesLogo)
import c from "c" /* 568 */;
import PremiumUtils from "PremiumUtils" /* 4450 */;
import _modDef7711 from "module_7711" /* 7711 */;
import _modDef9527 from "module_9527" /* 9527 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1378).PremiumTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ premiumType, style } = arg0);
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp5 = _modDef9527;
    let tmp6 = importDefault;
  } else {
    tmp5 = _modDef7711;
    tmp6 = importDefault;
  }
  if (cResult[0] !== premiumType) {
    const premiumTypeDisplayName = PremiumUtils.getPremiumTypeDisplayName(premiumType);
    cResult[0] = premiumType;
    cResult[1] = premiumTypeDisplayName;
    let tmp8 = premiumTypeDisplayName;
    const tmpResult = PremiumUtils;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === style) {
      if (cResult[4] === tmp8) {
        let tmp10 = cResult[5];
      }
      return tmp10;
    }
  }
  const tmp11 = jsx(tmp6(5834), { accessible: true, accessibilityLabel: tmp8, accessibilityRole: "header", style, resizeMode: "contain", source: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = style;
  cResult[4] = tmp8;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((premiumType) => {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9527;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7711;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5834);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
});
