// Module ID: 14290
// Function ID: 14291
// Name: XboxTwoWayLinkUpsell
// Dependencies: [19, 676, 21, 4342, 1993, 14291, 1236, 5329, 14292, 1377, 10471, 2]
// Exports: XboxTwoWayLinkUpsell

// Module 14290 (XboxTwoWayLinkUpsell)
import "noop";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ HelpdeskArticles: c3, AnalyticsLocations: c4 } = ME);
let closure_6 = createCacheKey.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx");

export const XboxTwoWayLinkUpsell = function XboxTwoWayLinkUpsell() {
  let obj = importDefault(1993);
  const articleURL = obj.getArticleURL(constants.XBOX_CONNECTION);
  obj = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["2okkZV"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.format(require(1236) /* getSystemLocale */.t.OnERSS, { help_article: articleURL });
  obj = { style: callback().upsellImage, source: null, resizeMode: "contain" };
  const tmp = callback();
  obj[1] = importDefault(14292);
  obj[2] = jsx(importDefault(5329), { style: callback().upsellImage, source: null, resizeMode: "contain" });
  obj[3] = require(1377) /* DismissibleContent */.DismissibleContent.XBOX_ONE_WAY_RECONNECT;
  obj[4] = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return callback(table[10]).showModal(items);
  };
  return jsx(require(14291) /* OneWayToTwoWayNewTag */.OneWayToTwoWayLinkUpsell, { style: callback().upsellImage, source: null, resizeMode: "contain" });
};
