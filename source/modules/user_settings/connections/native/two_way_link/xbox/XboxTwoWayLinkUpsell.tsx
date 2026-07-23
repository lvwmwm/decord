// Module ID: 13868
// Function ID: 106187
// Name: XboxTwoWayLinkUpsell
// Dependencies: [31, 653, 33, 4130, 1920, 13869, 1212, 5085, 13870, 1334, 8936, 2]
// Exports: XboxTwoWayLinkUpsell

// Module 13868 (XboxTwoWayLinkUpsell)
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
  let obj = importDefault(1920);
  const articleURL = obj.getArticleURL(constants.XBOX_CONNECTION);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["2okkZV"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.format(require(1212) /* getSystemLocale */.t.OnERSS, { help_article: articleURL });
  obj = { style: callback().upsellImage };
  const tmp = callback();
  obj.source = importDefault(13870);
  obj.resizeMode = "contain";
  obj.img = jsx(importDefault(5085), { style: callback().upsellImage });
  obj.newIndicatorDismissibleContent = require(1334) /* DismissibleContent */.DismissibleContent.XBOX_ONE_WAY_RECONNECT;
  obj.onPress = function onPress() {
    const items = [outer1_4.RELINK_UPSELL];
    return outer1_1(outer1_2[10]).showModal(items);
  };
  return jsx(require(13869) /* OneWayToTwoWayNewTag */.OneWayToTwoWayLinkUpsell, { style: callback().upsellImage });
};
