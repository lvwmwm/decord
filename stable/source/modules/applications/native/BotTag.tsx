// Module ID: 9202
// Function ID: 9203
// Name: BotTag
// Dependencies: [19, 17, 1360, 21, 5014, 575, 1113, 9203, 5624, 2]

// Module 9202 (BotTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
import CheckmarkSmallBoldIcon2 from "CheckmarkSmallBoldIcon" /* 9203 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
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
    let stringResult;
    let style;
    let tmp17;
    let verified;
    let flag = invertColor.invertColor;
    if (flag === undefined) {
      flag = false;
    }
    let BOT = invertColor.type;
    if (BOT === undefined) {
      BOT = BotTagTypes.BOT;
    }
    ({ verified, size, style } = invertColor);
    if (size === undefined) {
      size = "md";
    }
    const tmp2 = closure_7();
    let tmp5 = BOT === BotTagTypes.OFFICIAL;
    const tmp3 = getBotLabel(BOT);
    if (!tmp5) {
      tmp5 = BOT === tmp4.SYSTEM_DM;
    }
    if (!verified) {
      verified = tmp5;
    }
    let tmp7Result = null;
    if (verified) {
      let str = "xs";
      const CheckmarkSmallBoldIcon = CheckmarkSmallBoldIcon2.CheckmarkSmallBoldIcon;
      const tmp7 = hasOwnProperty;
      if ("sm" === size) {
        str = "xxs";
      }
      const obj = { size: str, color: nativeDefault.colors.WHITE };
      tmp7Result = tmp7(CheckmarkSmallBoldIcon, obj);
    }
    let prop = null;
    const tmp11 = flag ? tmp2.tagInverted : tmp2.tagNormal;
    const tmp12 = flag ? tmp2.tagTextInverted : tmp2.tagTextNormal;
    if (null != tmp7Result) {
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
    items1 = [tmp7Result, ];
    let str3 = "text-xs/semibold";
    const Text = tmp17(5624).Text;
    const tmp24 = metroRequire;
    const tmp25 = View;
    const tmp26 = hasOwnProperty;
    if ("sm" === size) {
      str3 = "text-xxs/semibold";
    }
    items1[1] = tmp26(Text, { variant: str3, lineClamp: 1, maxFontSizeMultiplier: 2, style: tmp12, children: tmp3 });
    return tmp24(tmp25, obj2);
  }
}
const View = react_native.View;
const BotTagTypes = ApplicationConstants.BotTagTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { tag: obj2, verifiedTagLeftPadding: { paddingLeft: 1 }, tagNormal: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, tagInverted: { backgroundColor: nativeDefault.colors.WHITE }, tagTextNormal: { color: nativeDefault.colors.WHITE }, tagTextInverted: { color: nativeDefault.colors.BACKGROUND_BRAND } };
obj2 = { paddingLeft: 4, paddingRight: 4, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 1 };
createStyles = createStyles.createStyles;
({ backgroundColor: nativeDefault.colors.BACKGROUND_BRAND });
({ backgroundColor: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.BACKGROUND_BRAND });
const metroImportDefault = createStyles(obj);
BotTag.Types = BotTagTypes;
let size = size_mod;
const result = size.fileFinishedImporting("modules/applications/native/BotTag.tsx");

export default BotTag;
export { getBotLabel };
