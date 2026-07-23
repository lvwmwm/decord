// Module ID: 13871
// Function ID: 106196
// Name: PlayStationTwoWayLinkUpsell
// Dependencies: [31, 653, 33, 4130, 1920, 13869, 1212, 5085, 13872, 1334, 8971, 2]
// Exports: PlayStationTwoWayLinkUpsell

// Module 13871 (PlayStationTwoWayLinkUpsell)
import "result";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ HelpdeskArticles: closure_3, AnalyticsLocations: closure_4, PlatformTypes: closure_5 } = ME);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = function PlayStationTwoWayLinkUpsell() {
  let obj = importDefault(1920);
  const articleURL = obj.getArticleURL(constants.PS_CONNECTION);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.v20wwm);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.format(require(1212) /* getSystemLocale */.t.lTZBit, { help_article: articleURL });
  obj = { style: callback().upsellImage };
  const tmp = callback();
  obj.source = importDefault(13872);
  obj.resizeMode = "contain";
  obj.img = jsx(importDefault(5085), { style: callback().upsellImage });
  obj.newIndicatorDismissibleContent = require(1334) /* DismissibleContent */.DismissibleContent.PS_ONE_WAY_RECONNECT;
  obj.onPress = function onPress() {
    const items = [outer1_4.RELINK_UPSELL];
    return outer1_1(outer1_2[10]).showModal(items, outer1_5.PLAYSTATION);
  };
  return jsx(require(13869) /* OneWayToTwoWayNewTag */.OneWayToTwoWayLinkUpsell, { style: callback().upsellImage });
};
