// Module ID: 12340
// Function ID: 95990
// Name: LeaveGuildElement
// Dependencies: [57, 31, 653, 33, 8438, 4324, 12335, 1212, 4471, 4561, 10654, 2]
// Exports: default

// Module 12340 (LeaveGuildElement)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx");

export default function LeaveGuildElement(guild) {
  guild = guild.guild;
  const addCallback = guild.addCallback;
  const reportId = guild.reportId;
  const tmp = callback(React.useState(false), 2);
  callback = tmp[1];
  React = tmp2;
  const items = [null != guild];
  const effect = React.useEffect(() => {
    callback(!result);
  }, items);
  const items1 = [addCallback, reportId, guild];
  let closure_5 = React.useCallback(() => {
    if (null != guild) {
      addCallback(() => addCallback(reportId[4]).leaveGuild(outer1_0.id));
      let obj = addCallback(reportId[5]);
      obj = { guild_id: guild.id, report_id: reportId };
      obj.trackWithMetadata(constants.IAR_LEAVE_GUILD_BUTTON_CLICKED, obj);
      callback(true);
    }
  }, items1);
  let obj = {};
  let intl = guild(reportId[7]).intl;
  obj.title = intl.string(guild(reportId[7]).t.cU96ip);
  let intl2 = guild(reportId[7]).intl;
  obj.disabledTitle = intl2.string(guild(reportId[7]).t.rJGMXU);
  let intl3 = guild(reportId[7]).intl;
  obj = {};
  let name;
  if (null != guild) {
    name = guild.name;
  }
  obj.guildName = name;
  obj.description = intl3.formatToPlainString(guild(reportId[7]).t["26mR6/"], obj);
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
  obj.icon = jsx(guild(reportId[10]).DoorExitIcon, { color: "text-feedback-critical" });
  return jsx(addCallback(reportId[6]), {});
};
