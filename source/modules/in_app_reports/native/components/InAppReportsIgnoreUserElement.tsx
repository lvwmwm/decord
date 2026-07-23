// Module ID: 12334
// Function ID: 95960
// Name: IgnoreUserElement
// Dependencies: [31, 1348, 3767, 653, 33, 566, 4319, 4324, 8923, 12335, 1212, 9218, 2]
// Exports: default

// Module 12334 (IgnoreUserElement)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx");

export default function IgnoreUserElement(user) {
  let isBlocked;
  let isIgnored;
  user = user.user;
  const channelId = user.channelId;
  const reportId = user.reportId;
  let obj = user(reportId[5]);
  const items = [closure_5];
  const items1 = [user];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isIgnored: outer1_5.isIgnored(user.id), isBlocked: outer1_5.isBlocked(user.id) }), items1);
  ({ isIgnored, isBlocked } = stateFromStoresObject);
  let obj1 = user(reportId[5]);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [channelId];
  const stateFromStores = obj1.useStateFromStores(items2, () => outer1_4.getChannel(channelId), items3);
  const items4 = [stateFromStores, user];
  const memo = stateFromStores.useMemo(() => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    return channelId(reportId[6]).getName(guild_id, id, user);
  }, items4);
  const items5 = [user, reportId, channelId];
  let tmp6Result = null;
  if (null != user) {
    obj = {};
    const intl = user(reportId[10]).intl;
    obj = { username: memo };
    obj.title = intl.formatToPlainString(user(reportId[10]).t.U3yyFs, obj);
    const intl2 = user(reportId[10]).intl;
    obj1 = { username: memo };
    obj.disabledTitle = intl2.formatToPlainString(user(reportId[10]).t["264qVM"], obj1);
    const intl3 = user(reportId[10]).intl;
    obj.description = intl3.string(user(reportId[10]).t.naWE6W);
    if (!isIgnored) {
      isIgnored = isBlocked;
    }
    obj.disabled = isIgnored;
    obj.onPress = tmp4;
    obj.icon = jsx(user(reportId[11]).EyeSlashIcon, {});
    tmp6Result = jsx(channelId(reportId[9]), { username: memo });
    const tmp6 = jsx;
    const tmp9 = channelId(reportId[9]);
  }
  return tmp6Result;
};
