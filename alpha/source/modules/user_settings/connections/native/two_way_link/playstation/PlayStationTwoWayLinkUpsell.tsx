// Module ID: 16821
// Function ID: 16822
// Name: PlayStationTwoWayLinkUpsell
// Dependencies: [19, 1072, 21, 5009, 2062, 16819, 1114, 5712, 16822, 4842, 14584, 2]
// Exports: PlayStationTwoWayLinkUpsell

// Module 16821 (PlayStationTwoWayLinkUpsell)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import FastImageDefault from "FastImage" /* 5712 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 14584 */;
import OneWayToTwoWayLinkUpsell2 from "OneWayToTwoWayLinkUpsell" /* 16819 */;
import AssetRegistryDefault from "AssetRegistry" /* 16822 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5009 */;
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
