// Module ID: 17812
// Function ID: 17813
// Name: IAPUpsellActionSheet
// Dependencies: [19, 1072, 4648, 4638, 21, 17813, 17814, 1113, 1099, 2]
// Exports: default

// Module 17812 (IAPUpsellActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import intl4 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4638 */;
import ChannelConstants from "ChannelConstants" /* 4648 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx");

export default function IAPUpsellActionSheet(arg0) {
  let markAsDismissed;
  ({ guildId: require, markAsDismissed } = arg0);
  markAsDismissed(17813);
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const intl3 = intl4.intl;
  return <tmp imageSource={markAsDismissed(17814)} header={intl.string(intl4.t.rBw4cE)} body={intl2.string(intl4.t.mKHibc)} cta={intl3.string(intl4.t.RzWDqY)} onCTAPress={function handleCTAPress() {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(require, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  }} markAsDismissed={markAsDismissed} />;
};
