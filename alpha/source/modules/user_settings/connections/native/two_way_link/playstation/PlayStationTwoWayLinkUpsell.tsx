// Module ID: 17361
// Function ID: 17362
// Name: PlayStationTwoWayLinkUpsell
// Dependencies: [19, 1072, 21, 5243, 2185, 17359, 1113, 5957, 17362, 5076, 7525, 2]
// Exports: PlayStationTwoWayLinkUpsell

// Module 17361 (PlayStationTwoWayLinkUpsell)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import FastImageDefault from "FastImage" /* 5957 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 7525 */;
import OneWayToTwoWayLinkUpsell2 from "OneWayToTwoWayLinkUpsell" /* 17359 */;
import AssetRegistryDefault from "AssetRegistry" /* 17362 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export function PlayStationTwoWayLinkUpsell() {
  let constants2;
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
}
