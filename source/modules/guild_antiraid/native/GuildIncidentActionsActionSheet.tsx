// Module ID: 10974
// Function ID: 85321
// Name: DurationSelectionActionSheet
// Dependencies: [31, 10219, 10975, 7703, 653, 33, 4130, 5500, 5186, 1212, 5502, 624, 7702, 4098, 1273, 5165, 5503, 5504, 8479, 7576, 4965, 4543, 10976, 675, 10977, 2]

// Module 10974 (DurationSelectionActionSheet)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import useGuildIncidentsActionSheetStore from "useGuildIncidentsActionSheetStore";
import { getTimeframes } from "GUILD_REPORT_RAID_MOBILE_KEY";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function DurationSelectionActionSheet(onClose) {
  onClose = onClose.onClose;
  let obj = {};
  obj = {};
  const intl = onClose(1212).intl;
  obj.title = intl.string(onClose(1212).t.vKYZzc);
  const items = [callback2(onClose(5186).BottomSheetTitleHeader, obj), ];
  obj = {
    hasIcons: false,
    children: getTimeframes().map((label) => {
      let closure_0 = label;
      return outer1_14(onClose(outer1_2[10]).ActionSheetRow, {
        label: label.label,
        onPress() {
          outer2_9(label.value);
          label();
        }
      }, label.value);
    })
  };
  items[1] = callback2(onClose(5502).ActionSheetRow.Group, obj);
  obj.children = items;
  return callback3(onClose(5500).ActionSheet, obj);
}
({ resetGuildIncidentsActionSheetStore: closure_5, setInitialTime: closure_6, setPauseDms: closure_7, setPauseInvites: closure_8, setTime: closure_9, useGuildIncidentsActionSheetStore: closure_10 } = useGuildIncidentsActionSheetStore);
({ AnalyticEvents: closure_12, GuildFeatures: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = _createForOfIteratorHelperLoose.createStyles({ beta: { marginLeft: -12 } });
class GuildIncidentActionsActionSheet {
  constructor(arg0) {
    guild = global.guild;
    analyticsData = global.analyticsData;
    onDurationSelectorClose = function onDurationSelectorClose(closure_5) {
      let obj = guild(time[13]);
      obj = { content: outer1_14(outer1_18, obj), key: "GuildIncidentActionsActionSheet" };
      obj = { guild, analyticsData };
      obj.showActionSheet(obj);
    };
    handleClose = function handleClose() {
      analyticsData(time[13]).hideActionSheet("GuildIncidentActionsActionSheet");
      hasInvitesDisabledResult();
    };
    tmp = c16();
    tmp2 = c10();
    time = tmp2.time;
    pauseInvites = tmp2.pauseInvites;
    pauseDms = tmp2.pauseDms;
    obj = require("defaultAreStatesEqual");
    items = [];
    items[0] = pauseDms;
    stateFromStores = obj.useStateFromStores(items, () => pauseDms.getGuildIncident(guild.id));
    obj2 = require("hasDetectedRaid");
    hasInvitesDisabledResult = obj2.hasInvitesDisabled(stateFromStores);
    closure_5 = hasInvitesDisabledResult;
    obj3 = require("hasDetectedRaid");
    hasDMsDisabledResult = obj3.hasDMsDisabled(stateFromStores);
    setInitialTime = hasDMsDisabledResult;
    obj4 = require("hasDetectedRaid");
    result = obj4.initialLockdownDurationHours(stateFromStores);
    c7 = result;
    hasItem = undefined;
    if (null != guild) {
      features = guild.features;
      tmp8 = GuildFeatures;
      hasItem = features.has(GuildFeatures.INVITES_DISABLED);
    }
    items1 = [, ];
    items1[0] = hasDMsDisabledResult;
    items1[1] = hasInvitesDisabledResult;
    effect = pauseInvites.useEffect(() => {
      onDurationSelectorClose(closure_5);
      result(closure_6);
    }, items1);
    items2 = [];
    items2[0] = result;
    effect1 = pauseInvites.useEffect(() => {
      if (!outer1_10.getState().hasTimeChanges) {
        hasDMsDisabledResult(closure_7);
      }
    }, items2);
    items3 = [];
    items3[0] = time;
    memo = pauseInvites.useMemo(() => {
      let label;
      const found = outer1_11().find((value) => value.value === outer1_2);
      if (null != found) {
        label = found.label;
      }
      return label;
    }, items3);
    tmp12 = jsxs;
    obj = { startExpanded: true };
    obj1 = {};
    intl = require("getSystemLocale").intl;
    obj1.title = intl.string(require("getSystemLocale").t.oCYAc7);
    obj2 = {};
    obj2.size = require("Button").BetaSizes.SMALL;
    obj2.style = tmp.beta;
    obj1.leading = jsx(require("Button").BetaTag, obj2);
    obj.header = jsx(require("RedesignBottomSheetTitleHeaderBase").BottomSheetTitleHeader, obj1);
    tmp13 = jsx;
    obj3 = { trailing: null, label: null, arrow: true, onPress: null, start: true, end: true };
    tmp14 = jsx;
    obj4 = {};
    str = "";
    if (null != memo) {
      str = memo;
    }
    obj4.text = str;
    obj3.trailing = tmp14(require("TableRowInner").TableRow.TrailingText, obj4);
    intl2 = require("getSystemLocale").intl;
    obj3.label = intl2.string(require("getSystemLocale").t.vKYZzc);
    obj3.onPress = function onPress() {
      let obj = guild(time[13]);
      obj = { content: outer1_14(outer1_17, obj), key: "DurationSelectionActionSheet" };
      obj = { onClose: onDurationSelectorClose };
      obj.showActionSheet(obj);
    };
    intl3 = require("getSystemLocale").intl;
    obj3.accessibilityLabel = intl3.string(require("getSystemLocale").t.vKYZzc);
    obj3.accessibilityHint = memo;
    items4 = [, , , ];
    items4[0] = tmp13(require("TableRowInner").TableRow, obj3);
    tmp15 = jsxs;
    obj5 = { hasIcons: true };
    tmp16 = jsx;
    obj6 = {};
    intl4 = require("getSystemLocale").intl;
    obj6.label = intl4.string(require("getSystemLocale").t.Uwsjn6);
    intl5 = require("getSystemLocale").intl;
    obj6.subLabel = intl5.string(require("getSystemLocale").t.qPJkZh);
    tmp17 = pauseInvites;
    if (!pauseInvites) {
      tmp17 = hasItem;
    }
    obj6.value = tmp17;
    obj6.onValueChange = function onValueChange() {
      onDurationSelectorClose(!pauseInvites);
    };
    obj6.disabled = hasItem;
    items5 = [, ];
    items5[0] = tmp16(require("TableSwitchRow").TableSwitchRow, obj6);
    if (hasItem) {
      tmp18 = jsx;
      tmp19 = guild;
      tmp20 = time;
      obj7 = {};
      tmp21 = jsx;
      obj8 = {};
      tmp22 = analyticsData;
      num = 18;
      obj8.source = require("registerAsset");
      num2 = 19;
      obj8.IconComponent = require("WarningIcon").WarningIcon;
      str2 = "secondary";
      obj8.variant = "secondary";
      obj7.icon = jsx(require("TableRowInner").TableRow.Icon, obj8);
      intl6 = require("getSystemLocale").intl;
      obj7.label = intl6.string(require("getSystemLocale").t["9GPbsV"]);
      hasItem = jsx(require("TableRowInner").TableRow, obj7);
    }
    items5[1] = hasItem;
    obj5.children = items5;
    items4[1] = tmp15(require("TableRowGroupTitle").TableRowGroup, obj5);
    obj9 = {};
    intl7 = require("getSystemLocale").intl;
    obj9.label = intl7.string(require("getSystemLocale").t["wrDmA/"]);
    intl8 = require("getSystemLocale").intl;
    obj9.subLabel = intl8.string(require("getSystemLocale").t.UQbJW7);
    obj9.value = pauseDms;
    obj9.onValueChange = function onValueChange() {
      result(!pauseDms);
    };
    obj9.start = true;
    obj9.end = true;
    items4[2] = jsx(require("TableSwitchRow").TableSwitchRow, obj9);
    tmp23 = jsxs;
    obj10 = {};
    tmp24 = jsx;
    obj11 = {
      onPress() {
            let alertType;
            let messageId;
            let source;
            let obj = guild(time[22]);
            const result = obj.setGuildIncidentActions(guild.id, pauseInvites, pauseDms, time);
            handleClose();
            ({ source, alertType, messageId } = analyticsData);
            let obj1 = analyticsData(time[23]);
            obj = { guild_id: guild.id, source, raid_alert_id: messageId, raid_alert_type: alertType, intervention_type_enabled: guild(time[12]).getEnabledInterventions(pauseInvites, pauseDms) };
            const obj4 = guild(time[12]);
            obj.intervention_type_disabled = guild(time[12]).getDisabledInterventions(pauseInvites, pauseDms);
            obj.duration = 60 * time;
            obj1.track(outer1_12.GUILD_RAID_INTERVENTION_STATE_CHANGE, obj);
            let tmp4 = !closure_5;
            if (tmp4) {
              tmp4 = !closure_6;
            }
            if (!tmp4) {
              tmp4 = pauseInvites;
            }
            if (!tmp4) {
              tmp4 = pauseDms;
            }
            if (!tmp4) {
              obj = {};
              obj1 = { guildId: guild.id };
              obj.content = outer1_14(analyticsData(time[24]), obj1);
              obj.key = "GuildRaidLockdownFeedbackActionSheet";
              guild(time[13]).showActionSheet(obj);
              const obj6 = guild(time[13]);
            }
          }
    };
    intl9 = require("getSystemLocale").intl;
    obj11.text = intl9.string(require("getSystemLocale").t["R3BPH+"]);
    obj11.variant = "primary";
    obj11.size = "md";
    tmp25 = pauseInvites !== hasInvitesDisabledResult || pauseDms !== hasDMsDisabledResult || tmp2.hasTimeChanges;
    obj11.disabled = !tmp25;
    items6 = [, ];
    items6[0] = tmp24(require("Button").Button, obj11);
    obj12 = { onPress: handleClose };
    intl10 = require("getSystemLocale").intl;
    obj12.text = intl10.string(require("getSystemLocale").t["ETE/oC"]);
    obj12.variant = "secondary";
    obj12.size = "md";
    items6[1] = jsx(require("Button").Button, obj12);
    obj10.children = items6;
    items4[3] = tmp23(require("ButtonGroup").ButtonGroup, obj10);
    obj.children = items4;
    return tmp12(require("ActionSheet").ActionSheet, obj);
  }
}
let result = require("useGuildIncidentsActionSheetStore").fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx");

export default GuildIncidentActionsActionSheet;
