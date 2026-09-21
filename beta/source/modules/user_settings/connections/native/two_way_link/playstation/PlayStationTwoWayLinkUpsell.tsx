// Module ID: 15235
// Function ID: 15236
// Name: PlayStationTwoWayLinkUpsell
// Dependencies: [19, 1078, 21, 4758, 558, 568, 2112, 15233, 1119, 5802, 15236, 9371, 2031, 2]

// Module 15235 (PlayStationTwoWayLinkUpsell)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import FastImageDefault from "FastImage" /* 5802 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 9371 */;
import OneWayToTwoWayLinkUpsell2 from "OneWayToTwoWayLinkUpsell" /* 15233 */;
import _modDef15236 from "module_15236" /* 15236 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1078);
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_7 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(8);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.PS_CONNECTION);
    const OneWayToTwoWayLinkUpsell = tmp(15233).OneWayToTwoWayLinkUpsell;
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.v20wwm);
    const intl2 = tmp(1119).intl;
    const obj3 = { help_article: articleURL };
    const formatResult = intl2.format(tmp(1119).t.lTZBit, obj3);
    cResult[0] = OneWayToTwoWayLinkUpsell;
    cResult[1] = stringResult;
    cResult[2] = formatResult;
    tmp6 = stringResult;
    tmp7 = formatResult;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  if (cResult[3] !== tmp4.upsellImage) {
    const obj4 = { style: tmp4.upsellImage, source: _modDef15236, resizeMode: "contain" };
    const tmp17 = jsx(FastImageDefault, { style: tmp4.upsellImage, source: _modDef15236, resizeMode: "contain" });
    cResult[3] = tmp4.upsellImage;
    cResult[4] = tmp17;
    let tmp13 = tmp17;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      const items = [constants.RELINK_UPSELL];
      return PlayStationLinkModalActionCreatorsDefault.showModal(items, constants2.PLAYSTATION);
    };
    cResult[5] = fn;
    let tmp18 = fn;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] !== tmp13) {
    const obj5 = { title: tmp6, body: tmp7, img: tmp13, newIndicatorDismissibleContent: tmp(2031).DismissibleContent.PS_ONE_WAY_RECONNECT, onPress: tmp18 };
    const tmp21 = <tmp5 title={tmp6} body={tmp7} img={tmp13} newIndicatorDismissibleContent={tmp(2031).DismissibleContent.PS_ONE_WAY_RECONNECT} onPress={tmp18} />;
    cResult[6] = tmp13;
    cResult[7] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[7];
  }
  return tmp19;
}) : (() => {
  const tmp = closure_7();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.PS_CONNECTION);
  const obj2 = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.v20wwm);
  const intl2 = util.intl;
  obj2.body = intl2.format(util.t.lTZBit, { help_article: articleURL });
  const obj3 = { style: tmp.upsellImage, source: null, resizeMode: "contain" };
  obj3.source = _modDef15236;
  obj2.img = jsx(FastImageDefault, { style: tmp.upsellImage, source: null, resizeMode: "contain" });
  obj2.newIndicatorDismissibleContent = dismissible_content.DismissibleContent.PS_ONE_WAY_RECONNECT;
  obj2.onPress = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return PlayStationLinkModalActionCreatorsDefault.showModal(items, constants2.PLAYSTATION);
  };
  return jsx(OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell, { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null });
});
