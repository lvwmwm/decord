// Module ID: 12218
// Function ID: 93782
// Name: BlockUserElement
// Dependencies: []
// Exports: default

// Module 12218 (BlockUserElement)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx");

export default function BlockUserElement(user) {
  user = user.user;
  const arg1 = user;
  const channelId = user.channelId;
  const importDefault = channelId;
  const reportId = user.reportId;
  const dependencyMap = reportId;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_5];
  const items1 = [user];
  const stateFromStores = obj.useStateFromStores(items, () => blocked.isBlocked(user.id), items1);
  let obj1 = arg1(dependencyMap[5]);
  const items2 = [closure_4];
  const items3 = [channelId];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => channel.getChannel(channelId), items3);
  const React = stateFromStores1;
  const items4 = [stateFromStores1, user];
  const memo = React.useMemo(() => {
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
    const intl = arg1(dependencyMap[11]).intl;
    obj = { username: memo };
    obj.title = intl.formatToPlainString(arg1(dependencyMap[11]).t.Q1o/f3, obj);
    const intl2 = arg1(dependencyMap[11]).intl;
    obj1 = { username: memo };
    obj.disabledTitle = intl2.formatToPlainString(arg1(dependencyMap[11]).t.kA0S/d, obj1);
    const intl3 = arg1(dependencyMap[11]).intl;
    obj.description = intl3.string(arg1(dependencyMap[11]).t.G08MKu);
    obj.disabled = stateFromStores;
    obj.variant = "danger";
    obj.onPress = tmp4;
    const obj2 = { color: "text-feedback-critical" };
    obj.icon = jsx(arg1(dependencyMap[12]).DenyIcon, obj2);
    tmp5 = jsx(importDefault(dependencyMap[10]), obj);
    const tmp9 = importDefault(dependencyMap[10]);
  }
  return tmp5;
};
