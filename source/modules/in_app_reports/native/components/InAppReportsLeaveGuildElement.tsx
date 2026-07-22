// Module ID: 12226
// Function ID: 93839
// Name: LeaveGuildElement
// Dependencies: []
// Exports: default

// Module 12226 (LeaveGuildElement)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx");

export default function LeaveGuildElement(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const importDefault = addCallback;
  const reportId = guild.reportId;
  const dependencyMap = reportId;
  const tmp = callback(React.useState(false), 2);
  const callback = tmp[1];
  const React = tmp2;
  const items = [null != guild];
  const effect = React.useEffect(() => {
    callback(!tmp2);
  }, items);
  const items1 = [guild.addCallback, reportId, guild];
  let closure_5 = React.useCallback(() => {
    if (null != guild) {
      addCallback(() => callback(closure_2[4]).leaveGuild(id.id));
      let obj = addCallback(reportId[5]);
      obj = { guild_id: guild.id, report_id: reportId };
      obj.trackWithMetadata(constants.IAR_LEAVE_GUILD_BUTTON_CLICKED, obj);
      callback(true);
    }
  }, items1);
  let obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.cU96ip);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.disabledTitle = intl2.string(arg1(dependencyMap[7]).t.rJGMXU);
  const intl3 = arg1(dependencyMap[7]).intl;
  obj = {};
  let name;
  if (null != guild) {
    name = guild.name;
  }
  obj.guildName = name;
  obj.description = intl3.formatToPlainString(arg1(dependencyMap[7]).t.26mR6/, obj);
  obj.disabled = tmp[0];
  obj.variant = "danger";
  obj.onPress = function onPress() {
    let obj = addCallback(reportId[8]);
    obj = {};
    const intl = guild(reportId[7]).intl;
    obj.title = intl.string(guild(reportId[7]).t.J2TBi3);
    const intl2 = guild(reportId[7]).intl;
    obj = {};
    let name;
    if (null != guild) {
      name = guild.name;
    }
    obj.name = name;
    obj.body = intl2.formatToPlainString(guild(reportId[7]).t.TB1og8, obj);
    const intl3 = guild(reportId[7]).intl;
    obj.confirmText = intl3.string(guild(reportId[7]).t.p89ACt);
    const intl4 = guild(reportId[7]).intl;
    obj.cancelText = intl4.string(guild(reportId[7]).t.gm1Vej);
    obj.onConfirm = closure_5;
    obj.confirmColor = addCallback(reportId[9]).Colors.RED;
    obj.show(obj);
  };
  obj.icon = jsx(arg1(dependencyMap[10]).DoorExitIcon, { color: "text-feedback-critical" });
  return jsx(importDefault(dependencyMap[6]), obj);
};
