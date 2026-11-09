// Module ID: 17167
// Function ID: 17168
// Name: XboxTwoWayLinkUpsell
// Dependencies: [19, 1072, 21, 5140, 2185, 17168, 1113, 5842, 17169, 4973, 9811, 2]
// Exports: XboxTwoWayLinkUpsell

// Module 17167 (XboxTwoWayLinkUpsell)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import dismissible_content from "dismissible_content" /* 4973 */;
import FastImageDefault from "FastImage" /* 5842 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9811 */;
import OneWayToTwoWayLinkUpsell2 from "OneWayToTwoWayLinkUpsell" /* 17168 */;
import AssetRegistryDefault from "AssetRegistry" /* 17169 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4 } = Constants);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx");

export function XboxTwoWayLinkUpsell() {
  const tmp = closure_6();
  let obj = HelpdeskUtilsDefault;
  const articleURL = obj.getArticleURL(constants.XBOX_CONNECTION);
  const OneWayToTwoWayLinkUpsell = OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  ({ style: tmp.upsellImage, source: AssetRegistryDefault, resizeMode: "contain" });
  FastImageDefault;
  return <OneWayToTwoWayLinkUpsell title={intl.string(intl3.t["2okkZV"])} body={intl2.format(intl3.t.OnERSS, { help_article: articleURL })} img={null} newIndicatorDismissibleContent={dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT} onPress={function onPress() {
    const items = [constants.RELINK_UPSELL];
    const obj = XboxLinkModalActionCreatorsDefault;
    return obj.showModal(items);
  }} />;
}
