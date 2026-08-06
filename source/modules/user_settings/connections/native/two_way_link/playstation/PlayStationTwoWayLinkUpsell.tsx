// Module ID: 14129
// Function ID: 14130
// Name: PlayStationTwoWayLinkUpsell
// Dependencies: [19, 676, 21, 4285, 1974, 14127, 1236, 5251, 14130, 1358, 10475, 2]
// Exports: PlayStationTwoWayLinkUpsell

// Module 14129 (PlayStationTwoWayLinkUpsell)
import "noop";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
const require = arg1;
({ HelpdeskArticles: c3, AnalyticsLocations: c4, PlatformTypes: c5 } = ME);
let closure_7 = createCacheKey.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = function PlayStationTwoWayLinkUpsell() {
  let obj = importDefault(1974);
  const articleURL = obj.getArticleURL(constants.PS_CONNECTION);
  obj = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.v20wwm);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.format(require(1236) /* getSystemLocale */.t.lTZBit, { help_article: articleURL });
  obj = { style: callback().upsellImage, source: null, resizeMode: "contain" };
  const tmp = callback();
  obj[1] = importDefault(14130);
  obj[2] = jsx(importDefault(5251), { style: callback().upsellImage, source: null, resizeMode: "contain" });
  obj[3] = require(1358) /* DismissibleContent */.DismissibleContent.PS_ONE_WAY_RECONNECT;
  obj[4] = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return callback(table[10]).showModal(items, constants2.PLAYSTATION);
  };
  return jsx(require(14127) /* OneWayToTwoWayNewTag */.OneWayToTwoWayLinkUpsell, { style: callback().upsellImage, source: null, resizeMode: "contain" });
};
