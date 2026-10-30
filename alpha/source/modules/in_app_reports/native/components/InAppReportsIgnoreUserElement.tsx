// Module ID: 15123
// Function ID: 15124
// Name: InAppReportsIgnoreUserElement
// Dependencies: [19, 4858, 4951, 1072, 21, 504, 6036, 5755, 7482, 15124, 1114, 7129, 2]
// Exports: default

// Module 15123 (InAppReportsIgnoreUserElement)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6036 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7482 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx");

export default function IgnoreUserElement(user) {
  let intl;
  let intl2;
  let intl3;
  let isBlocked;
  let isIgnored;
  let obj4;
  let obj5;
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  const tmp = user;
  const tmp2 = reportId;
  let obj = user(reportId[5]);
  const items = [RelationshipStore];
  const items1 = [user];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { isIgnored: RelationshipStore.isIgnored(user.id), isBlocked: RelationshipStore.isBlocked(user.id) };
    return obj;
  }, items1);
  ({ isIgnored, isBlocked } = stateFromStoresObject);
  let obj2 = user(reportId[5]);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
  const items4 = [stateFromStores, user];
  const memo = stateFromStores.useMemo(() => {
    let guild_id;
    const getName = NicknameUtilsDefault.getName;
    NicknameUtilsDefault;
    if (stateFromStores != null) {
      guild_id = tmp2.guild_id;
    }
    let id;
    if (stateFromStores != null) {
      id = tmp2.id;
    }
    return getName(guild_id, id, user);
  }, items4);
  const items5 = [user, reportId, channelId];
  let tmp8Result = null;
  if (null != user) {
    let obj3 = { title: intl.formatToPlainString(tmp(tmp2[10]).t.U3yyFs, obj4), disabledTitle: intl2.formatToPlainString(tmp(tmp2[10]).t["264qVM"], obj5), description: intl3.string(tmp(tmp2[10]).t.naWE6W), disabled: isIgnored, onPress: tmp6, icon: null };
    const tmp10 = channelId(tmp2[9]);
    intl = tmp(tmp2[10]).intl;
    obj4 = { username: memo };
    intl2 = tmp(tmp2[10]).intl;
    obj5 = { username: memo };
    intl3 = tmp(tmp2[10]).intl;
    if (!isIgnored) {
      isIgnored = isBlocked;
    }
    tmp8Result = tmp8(tmp10, obj3);
  }
  return tmp8Result;
};
