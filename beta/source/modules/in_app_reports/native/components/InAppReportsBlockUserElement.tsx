// Module ID: 15483
// Function ID: 15484
// Name: InAppReportsBlockUserElement
// Dependencies: [19, 5019, 5112, 1072, 21, 504, 6205, 5921, 7585, 7601, 15481, 1113, 10038, 2]
// Exports: default

// Module 15483 (InAppReportsBlockUserElement)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5921 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6205 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7585 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7601 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx");

export default function BlockUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  const tmp = user;
  const tmp2 = reportId;
  let obj = user(reportId[5]);
  const items = [RelationshipStore];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(user.id), items1);
  let obj2 = user(reportId[5]);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
  const items4 = [stateFromStores1, user];
  const memo = stateFromStores1.useMemo(() => {
    let guild_id;
    const getName = NicknameUtilsDefault.getName;
    NicknameUtilsDefault;
    if (stateFromStores1 != null) {
      guild_id = tmp2.guild_id;
    }
    let id;
    if (stateFromStores1 != null) {
      id = tmp2.id;
    }
    return getName(guild_id, id, user);
  }, items4);
  const items5 = [user, reportId, channelId];
  let tmp7 = null;
  if (null != user) {
    channelId(tmp2[10]);
    const intl = tmp(tmp2[11]).intl;
    let obj4 = { username: memo };
    const intl2 = tmp(tmp2[11]).intl;
    const obj5 = { username: memo };
    const intl3 = tmp(tmp2[11]).intl;
    tmp7 = <tmp10 title={intl.formatToPlainString(tmp(tmp2[11]).t["Q1o/f3"], obj4)} disabledTitle={intl2.formatToPlainString(tmp(tmp2[11]).t["kA0S/d"], obj5)} description={intl3.string(tmp(tmp2[11]).t.G08MKu)} disabled={stateFromStores} variant="danger" onPress={tmp6} icon={null} />;
  }
  return tmp7;
};
