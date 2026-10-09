// Module ID: 15165
// Function ID: 15166
// Name: PlayStationTwoWayLinkUpsell
// Dependencies: [19, 1085, 21, 5091, 558, 576, 2127, 15163, 1126, 6163, 15166, 12869, 2049, 2]

// Module 15165 (PlayStationTwoWayLinkUpsell)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import FastImageDefault from "FastImage" /* 6163 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 12869 */;
import OneWayToTwoWayLinkUpsell2 from "OneWayToTwoWayLinkUpsell" /* 15163 */;
import AssetRegistryDefault from "AssetRegistry" /* 15166 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlayStationTwoWayLinkUpsell() {
  let tmp13;
  let tmp18;
  let tmp19;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(8);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = HelpdeskUtilsDefault;
    const articleURL = obj2.getArticleURL(constants.PS_CONNECTION);
    const OneWayToTwoWayLinkUpsell = tmp(15163).OneWayToTwoWayLinkUpsell;
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl3.t.v20wwm);
    const intl2 = tmp(1126).intl;
    const obj3 = { help_article: articleURL };
    const formatResult = intl2.format(intl3.t.lTZBit, obj3);
    cResult[0] = OneWayToTwoWayLinkUpsell;
    cResult[1] = stringResult;
    cResult[2] = formatResult;
    tmp6 = stringResult;
    tmp7 = formatResult;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  if (cResult[3] !== tmp4.upsellImage) {
    FastImageDefault;
    const tmp17 = <tmp16 style={tmp4.upsellImage} source={AssetRegistryDefault} resizeMode="contain" />;
    cResult[3] = tmp4.upsellImage;
    cResult[4] = tmp17;
    tmp13 = tmp17;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items, closure_1_5.PLAYSTATION);
      }
    }
    cResult[5] = T;
    tmp18 = T;
  } else {
    class T {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items, closure_1_5.PLAYSTATION);
      }
    }
  }
  if (cResult[6] !== tmp13) {
    class T {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items, closure_1_5.PLAYSTATION);
      }
    }
    const tmp20 = <tmp5 title={tmp6} body={tmp7} img={tmp13} newIndicatorDismissibleContent={dismissible_content.DismissibleContent.PS_ONE_WAY_RECONNECT} onPress={tmp18} />;
    cResult[6] = tmp13;
    cResult[7] = tmp20;
    tmp19 = tmp20;
  } else {
    class T {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items, closure_1_5.PLAYSTATION);
      }
    }
  }
  return tmp19;
}) : (function PlayStationTwoWayLinkUpsell() {
  const tmp = closure_7();
  let obj = HelpdeskUtilsDefault;
  const articleURL = obj.getArticleURL(constants.PS_CONNECTION);
  const OneWayToTwoWayLinkUpsell = OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  ({ style: tmp.upsellImage, source: AssetRegistryDefault, resizeMode: "contain" });
  FastImageDefault;
  return <OneWayToTwoWayLinkUpsell title={intl.string(intl3.t.v20wwm)} body={intl2.format(intl3.t.lTZBit, { help_article: articleURL })} img={null} newIndicatorDismissibleContent={dismissible_content.DismissibleContent.PS_ONE_WAY_RECONNECT} onPress={function onPress() {
    const items = [constants.RELINK_UPSELL];
    const obj = PlayStationLinkModalActionCreatorsDefault;
    return obj.showModal(items, constants2.PLAYSTATION);
  }} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = tmp4;
