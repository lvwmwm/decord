// Module ID: 13975
// Function ID: 106816
// Name: XboxTwoWayLinkUpsell
// Dependencies: [31, 653, 33, 4165, 1921, 13976, 1212, 5119, 13977, 1334, 8907, 2]
// Exports: XboxTwoWayLinkUpsell

// Module 13975 (XboxTwoWayLinkUpsell)
import "result";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ HelpdeskArticles: closure_3, AnalyticsLocations: closure_4 } = ME);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx");

export const XboxTwoWayLinkUpsell = function XboxTwoWayLinkUpsell() {
  let obj = importDefault(1921);
  const articleURL = obj.getArticleURL(constants.XBOX_CONNECTION);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["2okkZV"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.format(require(1212) /* getSystemLocale */.t.OnERSS, { help_article: articleURL });
  obj = { style: callback().upsellImage };
  const tmp = callback();
  obj.source = importDefault(13977);
  obj.resizeMode = "contain";
  obj.img = jsx(importDefault(5119), { style: callback().upsellImage });
  obj.newIndicatorDismissibleContent = require(1334) /* DismissibleContent */.DismissibleContent.XBOX_ONE_WAY_RECONNECT;
  obj.onPress = function onPress() {
    const items = [outer1_4.RELINK_UPSELL];
    return outer1_1(outer1_2[10]).showModal(items);
  };
  return jsx(require(13976) /* OneWayToTwoWayNewTag */.OneWayToTwoWayLinkUpsell, { style: callback().upsellImage });
};
