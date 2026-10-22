// Module ID: 17572
// Function ID: 17573
// Name: IAPUpsellActionSheet
// Dependencies: [19, 1087, 4828, 4818, 21, 558, 576, 1114, 1128, 17573, 17574, 2]

// Module 17572 (IAPUpsellActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1087 */;
import router_utils from "router_utils" /* 1114 */;
import intl4 from "intl" /* 1128 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4818 */;
import ChannelConstants from "ChannelConstants" /* 4828 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function IAPUpsellActionSheet(guildId) {
  let obj = guildId(576);
  const cResult = obj.c(9);
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  if (cResult[0] === guildId) {
    let tmp4;
    let tmp8;
    let tmp7;
    let tmp6;
    if (cResult[1] === markAsDismissed) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(guildId(1128).t.rBw4cE);
      const intl2 = tmp(1128).intl;
      const stringResult1 = intl2.string(guildId(1128).t.mKHibc);
      const intl3 = tmp(1128).intl;
      const stringResult2 = intl3.string(guildId(1128).t.RzWDqY);
      cResult[3] = stringResult;
      cResult[4] = stringResult1;
      cResult[5] = stringResult2;
      tmp8 = stringResult2;
      tmp7 = stringResult1;
      tmp6 = stringResult;
    } else {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
      tmp8 = cResult[5];
    }
    if (cResult[6] === tmp4) {
      let tmp12;
      if (cResult[7] === markAsDismissed) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
    markAsDismissed(17573);
    const tmp16 = <tmp15 imageSource={markAsDismissed(17574)} header={tmp6} body={tmp7} cta={tmp8} onCTAPress={tmp4} markAsDismissed={markAsDismissed} />;
    cResult[6] = tmp4;
    cResult[7] = markAsDismissed;
    cResult[8] = tmp16;
    tmp12 = tmp16;
  }
  function handleCTAPress() {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  }
  cResult[0] = guildId;
  cResult[1] = markAsDismissed;
  cResult[2] = handleCTAPress;
  tmp4 = handleCTAPress;
}) : (function IAPUpsellActionSheet(arg0) {
  let markAsDismissed;
  ({ guildId: require, markAsDismissed } = arg0);
  markAsDismissed(17573);
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const intl3 = intl4.intl;
  return <tmp imageSource={markAsDismissed(17574)} header={intl.string(intl4.t.rBw4cE)} body={intl2.string(intl4.t.mKHibc)} cta={intl3.string(intl4.t.RzWDqY)} onCTAPress={function handleCTAPress() {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(require, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  }} markAsDismissed={markAsDismissed} />;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx");

export default tmp3;
