// Module ID: 17358
// Function ID: 17359
// Name: XboxTwoWayLinkUpsell
// Dependencies: [19, 1072, 21, 5243, 2185, 17359, 1113, 5957, 17360, 5076, 7360, 2]
// Exports: XboxTwoWayLinkUpsell

// Module 17358 (XboxTwoWayLinkUpsell)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import FastImageDefault from "FastImage" /* 5957 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 7360 */;
import OneWayToTwoWayLinkUpsell2 from "OneWayToTwoWayLinkUpsell" /* 17359 */;
import AssetRegistryDefault from "AssetRegistry" /* 17360 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5243 */;
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
