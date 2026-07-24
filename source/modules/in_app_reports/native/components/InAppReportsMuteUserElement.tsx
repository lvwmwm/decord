// Module ID: 12365
// Function ID: 96219
// Name: MuteUserElement
// Dependencies: [57, 31, 1348, 653, 662, 33, 566, 4319, 10311, 4324, 7568, 12362, 1212, 10232, 2]
// Exports: default

// Module 12365 (MuteUserElement)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { MuteUntilSeconds } from "MAX_FAVORITES";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx");

export default function MuteUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  let dMFromUserId;
  dMFromUserId = dMFromUserId.getDMFromUserId(user.id);
  let obj = user(reportId[6]);
  const items = [dMFromUserId];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId), items1);
  const items2 = [stateFromStores, user];
  const memo = stateFromStores.useMemo(() => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    return channelId(reportId[7]).getName(guild_id, id, user);
  }, items2);
  const items3 = [dMFromUserId];
  const muted = stateFromStores.useMemo(() => user(reportId[8]).getMuteSettings(dMFromUserId), items3).muted;
  let tmp5 = null != muted;
  if (tmp5) {
    tmp5 = muted;
  }
  const tmp6 = dMFromUserId(stateFromStores.useState(tmp5), 2);
  dMFromUserId = tmp6[1];
  const items4 = [dMFromUserId, channelId, user, reportId];
  let tmp8 = null;
  if (null != user) {
    obj = {};
    const intl = user(reportId[12]).intl;
    obj = { username: memo };
    obj.title = intl.formatToPlainString(user(reportId[12]).t.TRp5wR, obj);
    const intl2 = user(reportId[12]).intl;
    const obj1 = { username: memo };
    obj.disabledTitle = intl2.formatToPlainString(user(reportId[12]).t.raALhx, obj1);
    const intl3 = user(reportId[12]).intl;
    obj.description = intl3.string(user(reportId[12]).t["yM/+AJ"]);
    obj.disabled = tmp6[0];
    obj.onPress = tmp7;
    obj.icon = jsx(user(reportId[13]).BellSlashIcon, {});
    tmp8 = jsx(channelId(reportId[11]), { username: memo });
    const tmp12 = channelId(reportId[11]);
  }
  return tmp8;
};
