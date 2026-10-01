// Module ID: 8741
// Function ID: 8742
// Name: BotTag
// Dependencies: [19, 17, 1349, 21, 4836, 576, 1115, 8742, 4832, 2]

// Module 8741 (BotTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import ApplicationConstants from "ApplicationConstants" /* 1349 */;
import CheckmarkSmallBoldIcon2 from "CheckmarkSmallBoldIcon" /* 8742 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function getBotLabel(BOT) {
  if (BOT === undefined) {
    BOT = BotTagTypes.BOT;
  }
  if (BotTagTypes.SYSTEM_DM !== BOT) {
    let stringResult;
    if (BotTagTypes.OFFICIAL !== BOT) {
      if (BotTagTypes.SERVER === BOT) {
        const intl2 = intl5.intl;
        stringResult = intl2.string(intl5.t.PuJGuM);
      } else {
        const BOT2 = tmp2.BOT;
        const intl = intl5.intl;
        stringResult = intl.string(intl5.t["9RNkeF"]);
      }
    }
    return stringResult;
  }
  const intl3 = intl5.intl;
  stringResult = intl3.string(intl5.t.lKQ7Wt);
}
class BotTag {
  constructor(invertColor) {
    let items;
    let items1;
    let items2;
    let stringResult;
    let tmp17;
    let flag = invertColor.invertColor;
    if (flag === undefined) {
      flag = false;
    }
    let BOT = invertColor.type;
    if (BOT === undefined) {
      BOT = BotTagTypes.BOT;
    }
    let verified = invertColor.verified;
    const style = invertColor.style;
    const tmp2 = closure_7();
    let tmp5 = BOT === BotTagTypes.OFFICIAL;
    const tmp3 = getBotLabel(BOT);
    if (!tmp5) {
      tmp5 = BOT === tmp4.SYSTEM_DM;
    }
    if (!verified) {
      verified = tmp5;
    }
    let tmp6 = null;
    if (verified) {
      const obj = { size: "xs", color: nativeDefault.colors.WHITE };
      const CheckmarkSmallBoldIcon = CheckmarkSmallBoldIcon2.CheckmarkSmallBoldIcon;
      tmp6 = hasOwnProperty(CheckmarkSmallBoldIcon, obj);
    }
    let prop = null;
    const tmp11 = flag ? tmp2.tagInverted : tmp2.tagNormal;
    const tmp12 = flag ? tmp2.tagTextInverted : tmp2.tagTextNormal;
    if (null != tmp6) {
      prop = tmp2.verifiedTagLeftPadding;
    }
    if (tmp5) {
      const intl4 = intl5.intl;
      stringResult = intl4.string(intl5.t["7s687k"]);
      tmp17 = require;
    } else if (verified) {
      const intl3 = intl5.intl;
      stringResult = intl3.string(intl5.t.g76OcH);
      tmp17 = require;
    } else if (BOT === BotTagTypes.SERVER) {
      const intl2 = intl5.intl;
      stringResult = intl2.string(intl5.t["39trQT"]);
      tmp17 = require;
    } else {
      const intl = intl5.intl;
      stringResult = intl.string(intl5.t.qwJHjo);
      tmp17 = require;
    }
    const obj2 = { style: items, accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult, children: items1 };
    items = [tmp2.tag, tmp11, style, prop];
    items1 = [tmp6, ];
    const obj3 = { variant: "text-xs/semibold", lineClamp: 1, maxFontSizeMultiplier: 2, style: items2, children: tmp3 };
    items2 = [tmp12];
    items1[1] = hasOwnProperty(tmp17(4832).Text, obj3);
    return metroRequire(View, obj2);
  }
}
const View = react_native.View;
const BotTagTypes = ApplicationConstants.BotTagTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { tag: obj2, verifiedTagLeftPadding: { paddingLeft: 1 }, tagNormal: obj3, tagInverted: { backgroundColor: nativeDefault.colors.WHITE }, tagTextNormal: { color: nativeDefault.colors.WHITE }, tagTextInverted: { color: nativeDefault.colors.BACKGROUND_BRAND } };
obj2 = { paddingLeft: 4, paddingRight: 4, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 1 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
({ backgroundColor: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.BACKGROUND_BRAND });
const metroImportDefault = createStyles(obj);
BotTag.Types = BotTagTypes;
const result = size.fileFinishedImporting("modules/applications/native/BotTag.tsx");

export default BotTag;
export { getBotLabel };
