// Module ID: 12224
// Function ID: 93828
// Name: MuteUserElement
// Dependencies: []
// Exports: default

// Module 12224 (MuteUserElement)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const MuteUntilSeconds = arg1(dependencyMap[4]).MuteUntilSeconds;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx");

export default function MuteUserElement(user) {
  user = user.user;
  const arg1 = user;
  const channelId = user.channelId;
  const importDefault = channelId;
  const reportId = user.reportId;
  const dependencyMap = reportId;
  let dMFromUserId;
  dMFromUserId = dMFromUserId.getDMFromUserId(user.id);
  const callback = dMFromUserId;
  let obj = arg1(dependencyMap[6]);
  const items = [dMFromUserId];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId), items1);
  const React = stateFromStores;
  const items2 = [stateFromStores, user];
  const memo = React.useMemo(() => {
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
  const muted = React.useMemo(() => user(reportId[8]).getMuteSettings(dMFromUserId), items3).muted;
  let tmp5 = null != muted;
  if (tmp5) {
    tmp5 = muted;
  }
  const tmp6 = callback(React.useState(tmp5), 2);
  dMFromUserId = tmp6[1];
  const items4 = [dMFromUserId, channelId, user, reportId];
  let tmp8 = null;
  if (null != user) {
    obj = {};
    const intl = arg1(dependencyMap[12]).intl;
    obj = { username: memo };
    obj.title = intl.formatToPlainString(arg1(dependencyMap[12]).t.TRp5wR, obj);
    const intl2 = arg1(dependencyMap[12]).intl;
    const obj1 = { username: memo };
    obj.disabledTitle = intl2.formatToPlainString(arg1(dependencyMap[12]).t.raALhx, obj1);
    const intl3 = arg1(dependencyMap[12]).intl;
    obj.description = intl3.string(arg1(dependencyMap[12]).t.yM/+AJ);
    obj.disabled = tmp6[0];
    obj.onPress = tmp7;
    obj.icon = jsx(arg1(dependencyMap[13]).BellSlashIcon, {});
    tmp8 = jsx(importDefault(dependencyMap[11]), obj);
    const tmp12 = importDefault(dependencyMap[11]);
  }
  return tmp8;
};
