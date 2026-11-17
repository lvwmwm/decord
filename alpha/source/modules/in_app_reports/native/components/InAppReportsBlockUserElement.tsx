// Module ID: 11038
// Function ID: 11039
// Name: InAppReportsBlockUserElement
// Dependencies: [19, 5159, 5252, 1072, 21, 504, 6349, 6064, 8148, 6913, 11036, 1113, 9168, 2]
// Exports: default

// Module 11038 (InAppReportsBlockUserElement)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6064 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6349 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 6913 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 8148 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import RelationshipStore from "RelationshipStore" /* 5252 */;
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
