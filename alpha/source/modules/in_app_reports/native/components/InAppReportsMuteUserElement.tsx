// Module ID: 15127
// Function ID: 15128
// Name: InAppReportsMuteUserElement
// Dependencies: [32, 19, 4858, 1072, 1082, 21, 504, 6036, 11052, 5755, 7490, 15124, 1114, 10973, 2]
// Exports: default

// Module 15127 (InAppReportsMuteUserElement)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6036 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7490 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 11052 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore_mod from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

let ChannelStore = ChannelStore_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const MuteUntilSeconds = UserSettingsConstants.MuteUntilSeconds;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx");

export default function MuteUserElement(user) {
  let closure_5;
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  ChannelStore = undefined;
  const dMFromUserId = ChannelStore.getDMFromUserId(user.id);
  const tmp2 = user;
  let obj = user(reportId[6]);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const items2 = [stateFromStores, user];
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
  }, items2);
  const items3 = [dMFromUserId];
  let flag = stateFromStores.useMemo(() => {
    const obj = MuteSettingsUtils;
    return obj.getMuteSettings(dMFromUserId);
  }, items3).muted;
  const useState = stateFromStores.useState;
  if (flag == null) {
    flag = false;
  }
  const tmp7 = dMFromUserId(useState(flag), 2);
  ChannelStore = tmp7[1];
  const items4 = [dMFromUserId, channelId, user, reportId];
  const first = tmp7[0];
  let tmp10 = null;
  if (null != user) {
    channelId(reportId[11]);
    const intl = tmp2(tmp3[12]).intl;
    let obj3 = { username: memo };
    const intl2 = tmp2(tmp3[12]).intl;
    let obj4 = { username: memo };
    const intl3 = tmp2(tmp3[12]).intl;
    tmp10 = <tmp13 title={intl.formatToPlainString(tmp2(reportId[12]).t.TRp5wR, obj3)} disabledTitle={intl2.formatToPlainString(tmp2(reportId[12]).t.raALhx, obj4)} description={intl3.string(tmp2(reportId[12]).t["yM/+AJ"])} disabled={first} onPress={tmp9} icon={null} />;
  }
  return tmp10;
};
