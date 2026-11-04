// Module ID: 9166
// Function ID: 9167
// Name: BotTag
// Dependencies: [19, 17, 1375, 21, 5003, 587, 1128, 558, 576, 9167, 5266, 2]

// Module 9166 (BotTag)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1128 */;
import ApplicationConstants from "ApplicationConstants" /* 1375 */;
import Text_Text from "Text/Text" /* 5266 */;
import CheckmarkSmallBoldIcon2 from "CheckmarkSmallBoldIcon" /* 9167 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
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
const View = react_native.View;
const BotTagTypes = ApplicationConstants.BotTagTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { tag: obj2, verifiedTagLeftPadding: { paddingLeft: 1 }, tagNormal: obj3, tagInverted: obj4, tagTextNormal: { color: nativeDefault.colors.WHITE }, tagTextInverted: { color: nativeDefault.colors.BACKGROUND_BRAND } };
obj2 = { paddingLeft: 4, paddingRight: 4, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 1 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj4 = { backgroundColor: nativeDefault.colors.WHITE };
({ color: nativeDefault.colors.WHITE });
({ color: nativeDefault.colors.BACKGROUND_BRAND });
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function BotTag(arg0) {
  let invertColor;
  let items;
  let style;
  let tmp21;
  let tmp7;
  let type;
  let verified;
  const obj = react2;
  const cResult = obj.c(22);
  ({ invertColor, type, style, verified, size } = arg0);
  if (undefined === type) {
    type = BotTagTypes.BOT;
  }
  let str = "md";
  if (undefined !== size) {
    str = size;
  }
  const tmp6 = closure_7();
  if (cResult[0] !== type) {
    const tmp9 = getBotLabel(type);
    cResult[0] = type;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (!verified) {
    verified = tmp11;
  }
  let tmp12 = null;
  if (verified) {
    let tmp13;
    let str2 = "xs";
    if ("sm" === str) {
      str2 = "xxs";
    }
    if (cResult[2] !== str2) {
      const obj2 = { size: str2, color: nativeDefault.colors.WHITE };
      const CheckmarkSmallBoldIcon = tmp(9167).CheckmarkSmallBoldIcon;
      const tmp16 = hasOwnProperty(CheckmarkSmallBoldIcon, obj2);
      cResult[2] = str2;
      cResult[3] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[3];
    }
    tmp12 = tmp13;
  }
  const tmp17 = undefined !== invertColor && invertColor ? tmp6.tagInverted : tmp6.tagNormal;
  const tmp18 = undefined !== invertColor && invertColor ? tmp6.tagTextInverted : tmp6.tagTextNormal;
  let prop = null;
  if (null != tmp12) {
    prop = tmp6.verifiedTagLeftPadding;
  }
  if (type === BotTagTypes.OFFICIAL || type === BotTagTypes.SYSTEM_DM) {
    let tmp30;
    const _Symbol4 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1128).intl;
      const stringResult = intl4.string(intl5.t["7s687k"]);
      cResult[4] = stringResult;
      tmp30 = stringResult;
    } else {
      tmp30 = cResult[4];
    }
    tmp21 = tmp30;
  } else if (verified) {
    let tmp27;
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1128).intl;
      const stringResult1 = intl3.string(intl5.t.g76OcH);
      cResult[5] = stringResult1;
      tmp27 = stringResult1;
    } else {
      tmp27 = cResult[5];
    }
    tmp21 = tmp27;
  } else if (type === BotTagTypes.SERVER) {
    let tmp24;
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1128).intl;
      const stringResult2 = intl2.string(intl5.t["39trQT"]);
      cResult[6] = stringResult2;
      tmp24 = stringResult2;
    } else {
      tmp24 = cResult[6];
    }
    tmp21 = tmp24;
  } else {
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult3 = intl.string(intl5.t.qwJHjo);
      cResult[7] = stringResult3;
      tmp21 = stringResult3;
    } else {
      tmp21 = cResult[7];
    }
  }
  if (cResult[8] === prop) {
    if (cResult[9] === style) {
      if (cResult[10] === tmp6.tag) {
        let tmp32;
        if (cResult[11] === tmp17) {
          tmp32 = cResult[12];
        }
        let str8 = "text-xs/semibold";
        if ("sm" === str) {
          str8 = "text-xxs/semibold";
        }
        if (cResult[13] === str8) {
          if (cResult[14] === tmp7) {
            let tmp33;
            if (cResult[15] === tmp18) {
              tmp33 = cResult[16];
            }
            if (cResult[17] === tmp21) {
              if (cResult[18] === tmp32) {
                if (cResult[19] === tmp33) {
                  let tmp36;
                  if (cResult[20] === tmp12) {
                    tmp36 = cResult[21];
                  }
                  return tmp36;
                }
              }
            }
            const obj3 = { style: tmp32, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp21, children: items };
            items = [tmp12, tmp33];
            const tmp39 = metroRequire(View, obj3);
            cResult[17] = tmp21;
            cResult[18] = tmp32;
            cResult[19] = tmp33;
            cResult[20] = tmp12;
            cResult[21] = tmp39;
            tmp36 = tmp39;
          }
        }
        const obj4 = { variant: str8, lineClamp: 1, maxFontSizeMultiplier: 2, style: tmp18, children: tmp7 };
        const tmp35 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[13] = str8;
        cResult[14] = tmp7;
        cResult[15] = tmp18;
        cResult[16] = tmp35;
        tmp33 = tmp35;
      }
    }
  }
  const items1 = [tmp6.tag, tmp17, style, prop];
  cResult[8] = prop;
  cResult[9] = style;
  cResult[10] = tmp6.tag;
  cResult[11] = tmp17;
  cResult[12] = items1;
  tmp32 = items1;
}) : (function BotTag(invertColor) {
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
  const Text = tmp17(5266).Text;
  const tmp24 = metroRequire;
  const tmp25 = View;
  const tmp26 = hasOwnProperty;
  if ("sm" === size) {
    str3 = "text-xxs/semibold";
  }
  items1[1] = tmp26(Text, { variant: str3, lineClamp: 1, maxFontSizeMultiplier: 2, style: tmp12, children: tmp3 });
  return tmp24(tmp25, obj2);
});
tmp5.Types = BotTagTypes;
let size = size_mod;
const result = size.fileFinishedImporting("modules/applications/native/BotTag.tsx");

export default tmp5;
export { getBotLabel };
