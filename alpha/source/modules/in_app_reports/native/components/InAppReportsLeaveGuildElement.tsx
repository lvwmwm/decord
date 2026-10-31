// Module ID: 15168
// Function ID: 15169
// Name: InAppReportsLeaveGuildElement
// Dependencies: [32, 19, 1072, 21, 9074, 5760, 15163, 1113, 5959, 6030, 11883, 2]
// Exports: default

// Module 15168 (InAppReportsLeaveGuildElement)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1113 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5760 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const AlertDefault = tmp(6030);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx");

export default function LeaveGuildElement(guild) {
  let closure_3;
  let closure_4;
  let first;
  let formatToPlainString;
  let intl;
  let intl2;
  let name;
  let prop;
  let tmp8;
  guild = guild.guild;
  const addCallback = guild.addCallback;
  const reportId = guild.reportId;
  _slicedToArray = undefined;
  react = undefined;
  [first, _slicedToArray] = react.useState(false);
  const tmp3 = null != guild;
  react = tmp3;
  const items = [tmp3];
  const effect = react.useEffect(() => {
    closure_3(!closure_4);
  }, items);
  const items1 = [addCallback, reportId, guild];
  const onConfirm = react.useCallback(() => {
    let id;
    if (null != guild) {
      addCallback(() => {
        const obj = addCallback(reportId[4]);
        return obj.leaveGuild(id.id);
      });
      let obj = AppAnalyticsUtilsDefault;
      const obj2 = { guild_id: tmp.id, report_id: reportId };
      obj.trackWithMetadata(AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED, obj2);
      closure_3(true);
    }
  }, items1);
  let obj = {
    title: intl.string(guild(reportId[7]).t.cU96ip),
    disabledTitle: intl2.string(guild(reportId[7]).t.rJGMXU),
    description: formatToPlainString(prop, { guildName: name }),
    disabled: first,
    variant: "danger",
    onPress: function handleLeaveGuild() {
      let TB1og8;
      let formatToPlainString;
      let intl;
      let intl3;
      let intl4;
      let name;
      const obj = { title: intl.string(intl5.t.J2TBi3), body: formatToPlainString(TB1og8, { name }), confirmText: intl3.string(intl5.t.p89ACt), cancelText: intl4.string(intl5.t.gm1Vej), onConfirm, confirmColor: AlertDefault.Colors.RED };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl5.intl;
      const intl2 = intl5.intl;
      formatToPlainString = intl2.formatToPlainString;
      name = undefined;
      TB1og8 = intl5.t.TB1og8;
      if (guild != null) {
        name = guild.name;
      }
      intl3 = tmp4(1113).intl;
      intl4 = tmp4(1113).intl;
      show(obj);
    },
    icon: tmp5(tmp8(reportId[10]).DoorExitIcon, { color: "text-feedback-critical" })
  };
  const tmp7 = addCallback(reportId[6]);
  intl = guild(reportId[7]).intl;
  intl2 = guild(reportId[7]).intl;
  let intl3 = guild(reportId[7]).intl;
  formatToPlainString = intl3.formatToPlainString;
  name = undefined;
  prop = guild(reportId[7]).t["26mR6/"];
  tmp8 = guild;
  if (guild != null) {
    name = guild.name;
  }
  return jsx(tmp7, obj);
};
