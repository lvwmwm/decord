// Module ID: 12215
// Function ID: 93781
// Name: IgnoreUserElement
// Dependencies: []
// Exports: default

// Module 12215 (IgnoreUserElement)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsIgnoreUserElement.tsx");

export default function IgnoreUserElement(user) {
  let isBlocked;
  let isIgnored;
  user = user.user;
  const arg1 = user;
  const channelId = user.channelId;
  const importDefault = channelId;
  const reportId = user.reportId;
  const dependencyMap = reportId;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_5];
  const items1 = [user];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isIgnored: closure_5.isIgnored(user.id), isBlocked: closure_5.isBlocked(user.id) }), items1);
  ({ isIgnored, isBlocked } = stateFromStoresObject);
  let obj1 = arg1(dependencyMap[5]);
  const items2 = [closure_4];
  const items3 = [channelId];
  const stateFromStores = obj1.useStateFromStores(items2, () => channel.getChannel(channelId), items3);
  const React = stateFromStores;
  const items4 = [stateFromStores, user];
  const memo = React.useMemo(() => {
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
    const intl = arg1(dependencyMap[10]).intl;
    obj = { username: memo };
    obj.title = intl.formatToPlainString(arg1(dependencyMap[10]).t.U3yyFs, obj);
    const intl2 = arg1(dependencyMap[10]).intl;
    obj1 = { username: memo };
    obj.disabledTitle = intl2.formatToPlainString(arg1(dependencyMap[10]).t.264qVM, obj1);
    const intl3 = arg1(dependencyMap[10]).intl;
    obj.description = intl3.string(arg1(dependencyMap[10]).t.naWE6W);
    if (!isIgnored) {
      isIgnored = isBlocked;
    }
    obj.disabled = isIgnored;
    obj.onPress = tmp4;
    obj.icon = jsx(arg1(dependencyMap[11]).EyeSlashIcon, {});
    tmp6Result = jsx(importDefault(dependencyMap[9]), obj);
    const tmp6 = jsx;
    const tmp9 = importDefault(dependencyMap[9]);
  }
  return tmp6Result;
};
