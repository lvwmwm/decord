// Module ID: 15018
// Function ID: 114438
// Name: PX_8
// Dependencies: [5, 31, 27, 653, 1345, 33, 689, 15019, 9889, 4547, 4130, 15020, 11992, 1212, 5167, 4660, 5119, 4126, 4543, 7563, 5692, 2]
// Exports: getScaledGameClaimNoticeHeight

// Module 15018 (PX_8)
import closure_3 from "jsxProd";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ GuildFeatures: closure_5, RelativeMarketingURLs: closure_6 } = ME);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
const PX_82 = require("_createForOfIteratorHelperLoose").space.PX_8;
let closure_12 = 2 * require("_createForOfIteratorHelperLoose").space.PX_12;
let obj = {};
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.card = obj;
_createForOfIteratorHelperLoose = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_12, right: require("_createForOfIteratorHelperLoose").space.PX_12, width: 24, height: 24, alignItems: "center", justifyContent: "center", zIndex: 1 };
obj.closeButton = _createForOfIteratorHelperLoose;
obj.centeredText = { textAlign: "center" };
obj.body = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.cta = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
const memoResult = importAllResult.memo((arg0) => {
  let guild;
  let require;
  ({ guild, markAsDismissed: require } = arg0);
  const tmp2 = callback4();
  let obj = require(15020) /* fetchUnclaimedGames */;
  const first = obj.useUnclaimedGameIdsForGuild(guild.id)[0];
  let tmp4 = null;
  if (null != first) {
    tmp4 = first;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  const tmp5 = importDefault(11992);
  const coverImageUrl = importDefault(11992)(tmp4, intl.string(require(1212) /* getSystemLocale */.t.VQq92a)).coverImageUrl;
  if (null == coverImageUrl) {
    return null;
  } else {
    const features = guild.features;
    const hasItem = features.has(constants.VERIFIED);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const string = intl4.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (hasItem) {
      let stringResult = string(t.uUARXe);
    } else {
      stringResult = string(t["0Dx29f"]);
    }
    obj = { variant: "secondary", style: tmp2.card };
    obj = {
      accessibilityRole: "button",
      onPress() {
          return callback(outer1_7.USER_DISMISS);
        },
      style: tmp2.closeButton,
      children: callback2(require(5119) /* XSmallIcon */.XSmallIcon, { size: "sm", color: "text-default" })
    };
    const items = [callback2(require(4660) /* PressableBase */.PressableOpacity, obj), , , , ];
    const obj1 = { imageSrc: coverImageUrl };
    items[1] = callback2(importDefault(15019), obj1);
    const obj2 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp2.centeredText };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj3 = { gameName: tmp7 };
    obj2.children = intl2.format(require(1212) /* getSystemLocale */.t.Q11WTQ, obj3);
    items[2] = callback2(require(4126) /* Text */.Text, obj2);
    const obj4 = { variant: "text-sm/normal", color: "text-overlay-light" };
    const items1 = [, ];
    ({ body: arr2[0], centeredText: arr2[1] } = tmp2);
    obj4.style = items1;
    obj4.children = stringResult;
    items[3] = callback2(require(4126) /* Text */.Text, obj4);
    const obj5 = { style: tmp2.cta };
    const obj6 = { variant: "primary", size: "sm", text: null, icon: null, iconPosition: "end" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj6.text = intl3.string(require(1212) /* getSystemLocale */.t["2u6ZlY"]);
    obj6.icon = callback2(require(7563) /* LinkExternalSmallIcon */.LinkExternalSmallIcon, { size: "xs", color: "white" });
    // CreateGeneratorClosureLongIndex (0x67)
    obj6.onPress = callback(tmp);
    obj5.children = callback2(require(4543) /* Button */.Button, obj6);
    items[4] = callback2(View, obj5);
    obj.children = items;
    return callback3(require(5167) /* getCardBackgroundToken */.Card, obj);
  }
  const tmp5Result = importDefault(11992)(tmp4, intl.string(require(1212) /* getSystemLocale */.t.VQq92a));
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/game_claim/native/GameClaimCoachmark.tsx");

export default memoResult;
export const GAME_CLAIM_NOTICE_MARGIN_TOP = PX_8;
export const GAME_CLAIM_NOTICE_MARGIN_BOTTOM = PX_82;
export const getScaledGameClaimNoticeHeight = function getScaledGameClaimNoticeHeight(fontScale) {
  const sum = PX_8 + closure_12;
  const sum1 = sum + require(15019) /* importDefaultResult1 */.CARD_STACK_HEIGHT;
  const sum2 = sum1 + require(9889) /* scaleLineHeight */.scaleTextLineHeight("text-md/medium", fontScale);
  const sum3 = sum2 + importDefault(689).space.PX_4;
  const obj = require(9889) /* scaleLineHeight */;
  const result = 2 * require(9889) /* scaleLineHeight */.scaleTextLineHeight("text-sm/normal", fontScale);
  const sum4 = sum3 + result + importDefault(689).space.PX_8;
  return sum4 + require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT + PX_82;
};
