// Module ID: 15232
// Function ID: 15233
// Name: XboxTwoWayLinkUpsell
// Dependencies: [19, 1078, 21, 4758, 558, 568, 2112, 15233, 1119, 5802, 15234, 9340, 2031, 2]

// Module 15232 (XboxTwoWayLinkUpsell)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import FastImageDefault from "FastImage" /* 5802 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9340 */;
import OneWayToTwoWayLinkUpsell2 from "OneWayToTwoWayLinkUpsell" /* 15233 */;
import _modDef15234 from "module_15234" /* 15234 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1078);
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_6 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx");

export const XboxTwoWayLinkUpsell = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(8);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
    const OneWayToTwoWayLinkUpsell = tmp(15233).OneWayToTwoWayLinkUpsell;
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["2okkZV"]);
    const intl2 = tmp(1119).intl;
    const obj3 = { help_article: articleURL };
    const formatResult = intl2.format(tmp(1119).t.OnERSS, obj3);
    cResult[0] = OneWayToTwoWayLinkUpsell;
    cResult[1] = stringResult;
    cResult[2] = formatResult;
    tmp6 = stringResult;
    tmp7 = formatResult;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  if (cResult[3] !== tmp4.upsellImage) {
    const obj4 = { style: tmp4.upsellImage, source: _modDef15234, resizeMode: "contain" };
    const tmp17 = jsx(FastImageDefault, { style: tmp4.upsellImage, source: _modDef15234, resizeMode: "contain" });
    cResult[3] = tmp4.upsellImage;
    cResult[4] = tmp17;
    let tmp13 = tmp17;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items);
      }
    }
    cResult[5] = O;
    const tmp18 = O;
  } else {
    class O {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items);
      }
    }
  }
  if (cResult[6] !== tmp13) {
    class O {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items);
      }
    }
    const obj5 = { title: tmp6, body: tmp7, img: tmp13, newIndicatorDismissibleContent: tmp(2031).DismissibleContent.XBOX_ONE_WAY_RECONNECT, onPress: tmp18 };
    const tmp20 = <tmp5 title={tmp6} body={tmp7} img={tmp13} newIndicatorDismissibleContent={tmp(2031).DismissibleContent.XBOX_ONE_WAY_RECONNECT} onPress={tmp18} />;
    cResult[6] = tmp13;
    cResult[7] = tmp20;
    const tmp19 = tmp20;
  } else {
    class O {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items);
      }
    }
  }
  return tmp19;
}) : (() => {
  const tmp = closure_6();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
  const obj2 = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["2okkZV"]);
  const intl2 = util.intl;
  obj2.body = intl2.format(util.t.OnERSS, { help_article: articleURL });
  const obj3 = { style: tmp.upsellImage, source: null, resizeMode: "contain" };
  obj3.source = _modDef15234;
  obj2.img = jsx(FastImageDefault, { style: tmp.upsellImage, source: null, resizeMode: "contain" });
  obj2.newIndicatorDismissibleContent = dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT;
  obj2.onPress = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return XboxLinkModalActionCreatorsDefault.showModal(items);
  };
  return jsx(OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell, { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null });
});
