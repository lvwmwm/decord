// Module ID: 8523
// Function ID: 67959
// Name: getBotLabel
// Dependencies: [31, 27, 4156, 33, 4130, 689, 1212, 8524, 4126, 2]

// Module 8523 (getBotLabel)
import "result";
import { View } from "get ActivityIndicator";
import { BotTagTypes } from "ApplicationTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function getBotLabel(BOT) {
  if (BOT === undefined) {
    BOT = BotTagTypes.BOT;
  }
  if (BotTagTypes.SYSTEM_DM !== BOT) {
    if (BotTagTypes.OFFICIAL !== BOT) {
      if (BotTagTypes.SERVER === BOT) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.PuJGuM);
      } else {
        const BOT2 = BotTagTypes.BOT;
        const intl = require(1212) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1212) /* getSystemLocale */.t["9RNkeF"]);
      }
    }
    return stringResult;
  }
  const intl3 = require(1212) /* getSystemLocale */.intl;
  stringResult = intl3.string(require(1212) /* getSystemLocale */.t.lKQ7Wt);
}
class BotTag {
  constructor(arg0) {
    flag = global.invertColor;
    if (flag === undefined) {
      flag = false;
    }
    BOT = global.type;
    if (BOT === undefined) {
      tmp = BotTagTypes;
      BOT = BotTagTypes.BOT;
    }
    verified = global.verified;
    tmp2 = c7();
    tmp4 = BOT === BotTagTypes.OFFICIAL;
    tmp3 = getBotLabel(BOT);
    if (!tmp4) {
      tmp5 = BotTagTypes;
      tmp4 = BOT === BotTagTypes.SYSTEM_DM;
    }
    if (!verified) {
      verified = tmp4;
    }
    tmp6 = null;
    if (verified) {
      tmp7 = jsx;
      tmp8 = closure_0;
      tmp9 = closure_2;
      num = 7;
      obj = {};
      str = "xs";
      obj.size = "xs";
      tmp10 = closure_1;
      num2 = 5;
      obj.color = require("_createForOfIteratorHelperLoose").colors.WHITE;
      tmp6 = jsx(require("CheckmarkSmallBoldIcon").CheckmarkSmallBoldIcon, obj);
    }
    prop = null;
    tmp11 = flag ? tmp2.tagInverted : tmp2.tagNormal;
    tmp12 = flag ? tmp2.tagTextInverted : tmp2.tagTextNormal;
    if (null != tmp6) {
      prop = tmp2.verifiedTagLeftPadding;
    }
    if (tmp4) {
      tmp22 = closure_0;
      tmp23 = closure_2;
      num6 = 6;
      intl4 = require("getSystemLocale").intl;
      stringResult = intl4.string(require("getSystemLocale").t["7s687k"]);
    } else if (verified) {
      tmp20 = closure_0;
      tmp21 = closure_2;
      num5 = 6;
      intl3 = require("getSystemLocale").intl;
      stringResult = intl3.string(require("getSystemLocale").t.g76OcH);
    } else {
      tmp14 = BotTagTypes;
      if (BOT === BotTagTypes.SERVER) {
        tmp18 = closure_0;
        tmp19 = closure_2;
        num4 = 6;
        intl2 = require("getSystemLocale").intl;
        stringResult = intl2.string(require("getSystemLocale").t["39trQT"]);
      } else {
        tmp15 = closure_0;
        tmp16 = closure_2;
        num3 = 6;
        intl = require("getSystemLocale").intl;
        stringResult = intl.string(require("getSystemLocale").t.qwJHjo);
      }
    }
    obj = { style: null, accessible: true, accessibilityRole: "image" };
    items = [, , , ];
    items[0] = tmp2.tag;
    items[1] = tmp11;
    items[2] = global.style;
    items[3] = prop;
    obj.style = items;
    obj.accessibilityLabel = stringResult;
    items1 = [, ];
    items1[0] = tmp6;
    obj1 = { variant: "text-xs/semibold", lineClamp: 1, maxFontSizeMultiplier: 2 };
    items2 = [];
    items2[0] = tmp12;
    obj1.style = items2;
    obj1.children = tmp3;
    items1[1] = jsx(require("Text").Text, obj1);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingLeft: 4, paddingRight: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 1 };
_createForOfIteratorHelperLoose.tag = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.verifiedTagLeftPadding = { paddingLeft: 1 };
_createForOfIteratorHelperLoose.tagNormal = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
const obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.tagInverted = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.tagTextNormal = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
const obj3 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.tagTextInverted = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
BotTag.Types = BotTagTypes;
const obj4 = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
const result = require("ApplicationTypes").fileFinishedImporting("modules/applications/native/BotTag.tsx");

export default BotTag;
export { getBotLabel };
