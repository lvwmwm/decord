// Module ID: 12337
// Function ID: 95973
// Name: BlockUserElement
// Dependencies: [31, 1348, 3767, 653, 33, 566, 4319, 4324, 8923, 7488, 12335, 1212, 10424, 2]
// Exports: default

// Module 12337 (BlockUserElement)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx");

export default function BlockUserElement(user) {
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  let obj = user(reportId[5]);
  const items = [closure_5];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.isBlocked(user.id), items1);
  let obj1 = user(reportId[5]);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [channelId];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_4.getChannel(channelId), items3);
  const items4 = [stateFromStores1, user];
  const memo = stateFromStores1.useMemo(() => {
    let guild_id;
    if (null != stateFromStores1) {
      guild_id = stateFromStores1.guild_id;
    }
    let id;
    if (null != stateFromStores1) {
      id = stateFromStores1.id;
    }
    return channelId(reportId[6]).getName(guild_id, id, user);
  }, items4);
  const items5 = [user, reportId, channelId];
  let tmp5 = null;
  if (null != user) {
    obj = {};
    const intl = user(reportId[11]).intl;
    obj = { username: memo };
    obj.title = intl.formatToPlainString(user(reportId[11]).t["Q1o/f3"], obj);
    const intl2 = user(reportId[11]).intl;
    obj1 = { username: memo };
    obj.disabledTitle = intl2.formatToPlainString(user(reportId[11]).t["kA0S/d"], obj1);
    const intl3 = user(reportId[11]).intl;
    obj.description = intl3.string(user(reportId[11]).t.G08MKu);
    obj.disabled = stateFromStores;
    obj.variant = "danger";
    obj.onPress = tmp4;
    const obj2 = { color: "text-feedback-critical" };
    obj.icon = jsx(user(reportId[12]).DenyIcon, { color: "text-feedback-critical" });
    tmp5 = jsx(channelId(reportId[10]), { username: memo });
    const tmp9 = channelId(reportId[10]);
  }
  return tmp5;
};
