// Module ID: 11307
// Function ID: 11308
// Name: GuildIncidentActionsActionSheet
// Dependencies: [19, 9540, 11308, 7459, 1074, 21, 4836, 6618, 6570, 1115, 6620, 563, 7458, 4800, 1177, 5917, 5999, 6621, 8905, 8048, 5745, 5281, 11309, 1241, 11310, 2]

// Module 11307 (GuildIncidentActionsActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import GuildAntiRaidUtils from "GuildAntiRaidUtils" /* 7458 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 7459 */;
import GuildAntiRaidActionCreators from "GuildAntiRaidActionCreators" /* 11309 */;
import react from "react" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 9540 */;
import GuildIncidentsActionSheetStore from "GuildIncidentsActionSheetStore" /* 11308 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp7;
const GuildRaidLockdownFeedbackActionSheetDefault = tmp7(11310);
function DurationSelectionActionSheet(onClose) {
  let intl;
  let items;
  onClose = onClose.onClose;
  let obj = { children: items };
  const arr = getTimeframes();
  const ActionSheet = onClose(6618).ActionSheet;
  const obj2 = { title: intl.string(onClose(1115).t.vKYZzc) };
  const BottomSheetTitleHeader = onClose(6570).BottomSheetTitleHeader;
  intl = onClose(1115).intl;
  items = [closure_14(BottomSheetTitleHeader, obj2), ];
  const obj3 = {
    hasIcons: false,
    children: arr.map((label) => {
      const obj = {
        label: label.label,
        onPress() {
          React4(label.value);
          onClose();
        }
      };
      return closure_1_14(onClose(dependencyMap[10]).ActionSheetRow, obj, label.value);
    })
  };
  const Group = onClose(6620).ActionSheetRow.Group;
  items[1] = closure_14(Group, obj3);
  return closure_15(ActionSheet, obj);
}
({ resetGuildIncidentsActionSheetStore: hasOwnProperty, setInitialTime: metroRequire, setPauseDms: metroImportDefault, setPauseInvites: metroImportAll, setTime: c9, useGuildIncidentsActionSheetStore: c10 } = GuildIncidentsActionSheetStore);
const getTimeframes = GuildAntiRaidConstants.getTimeframes;
({ AnalyticEvents: closure_12, GuildFeatures: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const authStore3 = createStyles.createStyles({ beta: { marginLeft: -12 } });
class GuildIncidentActionsActionSheet {
  constructor(guild) {
    let BetaTag;
    let BottomSheetTitleHeader;
    let Icon;
    let _undefined;
    let intl;
    let intl10;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let items4;
    let items6;
    let obj11;
    let obj6;
    let obj7;
    let tmp17;
    guild = guild.guild;
    const analyticsData = guild.analyticsData;
    function onDurationSelectorClose() {
      let obj2;
      const obj = { content: authStore2(GuildIncidentActionsActionSheet, obj2), key: "GuildIncidentActionsActionSheet" };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      obj2 = { guild, analyticsData };
      ActionSheetActionCreators;
      showActionSheet(obj);
    }
    const tmp = closure_16();
    const tmp2 = state();
    const time = tmp2.time;
    const pauseInvites = tmp2.pauseInvites;
    const pauseDms = tmp2.pauseDms;
    let tmp3 = guild;
    let tmp4 = time;
    const hasTimeChanges = tmp2.hasTimeChanges;
    let obj = guild(time[11]);
    const items = [pauseDms];
    const stateFromStores = obj.useStateFromStores(items, () => GuildIncidentsStore.getGuildIncident(guild.id));
    let obj2 = guild(time[12]);
    const hasInvitesDisabledResult = obj2.hasInvitesDisabled(stateFromStores);
    let c5 = hasInvitesDisabledResult;
    let obj3 = guild(time[12]);
    const hasDMsDisabledResult = obj3.hasDMsDisabled(stateFromStores);
    let c6 = hasDMsDisabledResult;
    let obj4 = guild(time[12]);
    let result = obj4.initialLockdownDurationHours(stateFromStores);
    let c7 = result;
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants2.INVITES_DISABLED);
    }
    const items1 = [hasDMsDisabledResult, hasInvitesDisabledResult];
    const effect = pauseInvites.useEffect(() => {
      metroImportAll(c5);
      metroImportDefault(c6);
    }, items1);
    const items2 = [result];
    const effect1 = pauseInvites.useEffect(() => {
      if (!state.getState().hasTimeChanges) {
        metroRequire(c7);
      }
    }, items2);
    const items3 = [time];
    const memo = pauseInvites.useMemo(() => {
      const arr = getTimeframes();
      const found = arr.find((value) => value.value === time);
      let label;
      if (found != null) {
        label = found.label;
      }
      return label;
    }, items3);
    let obj5 = { startExpanded: true, header: closure_14(BottomSheetTitleHeader, obj6), children: items4 };
    const ActionSheet = tmp3(tmp4[7]).ActionSheet;
    obj6 = { title: intl.string(tmp3(tmp4[9]).t.oCYAc7), leading: closure_14(BetaTag, obj7) };
    BottomSheetTitleHeader = tmp3(tmp4[8]).BottomSheetTitleHeader;
    intl = tmp3(tmp4[9]).intl;
    obj7 = { size: tmp3(tmp4[14]).BetaSizes.SMALL, style: tmp.beta };
    BetaTag = tmp3(tmp4[14]).BetaTag;
    const TableRow = tmp3(tmp4[15]).TableRow;
    let str = memo;
    const TrailingText = tmp3(tmp4[15]).TableRow.TrailingText;
    if (memo == null) {
      str = "";
    }
    const obj8 = {
      trailing: closure_14(TrailingText, { text: str }),
      label: intl2.string(tmp3(tmp4[9]).t.vKYZzc),
      arrow: true,
      onPress() {
        let obj2;
        const obj = { content: authStore2(DurationSelectionActionSheet, obj2), key: "DurationSelectionActionSheet" };
        const showActionSheet = ActionSheetActionCreators.showActionSheet;
        obj2 = { onClose: onDurationSelectorClose };
        ActionSheetActionCreators;
        showActionSheet(obj);
      },
      start: true,
      end: true,
      accessibilityLabel: intl3.string(tmp3(tmp4[9]).t.vKYZzc),
      accessibilityHint: memo
    };
    intl2 = tmp3(tmp4[9]).intl;
    intl3 = tmp3(tmp4[9]).intl;
    items4 = [tmp15(TableRow, obj8), , , ];
    const TableRowGroup = tmp3(tmp4[16]).TableRowGroup;
    const obj9 = {
      label: intl4.string(tmp3(tmp4[9]).t.Uwsjn6),
      subLabel: intl5.string(tmp3(tmp4[9]).t.qPJkZh),
      value: pauseInvites || hasItem,
      onValueChange() {
        metroImportAll(!pauseInvites);
      },
      disabled: hasItem
    };
    const TableSwitchRow = tmp3(tmp4[17]).TableSwitchRow;
    intl4 = tmp3(tmp4[9]).intl;
    intl5 = tmp3(tmp4[9]).intl;
    const items5 = [tmp15(TableSwitchRow, obj9), ];
    if (hasItem) {
      const obj10 = { icon: closure_14(Icon, obj11), label: intl6.string(tmp3(tmp4[9]).t["9GPbsV"]) };
      const TableRow2 = tmp3(tmp4[15]).TableRow;
      obj11 = { source: analyticsData(tmp4[18]), IconComponent: tmp3(tmp4[19]).WarningIcon, variant: "secondary" };
      Icon = tmp3(tmp4[15]).TableRow.Icon;
      intl6 = tmp3(tmp4[9]).intl;
      hasItem = tmp15(TableRow2, obj10);
    }
    items5[1] = hasItem;
    items4[1] = closure_15(TableRowGroup, { hasIcons: true, children: items5 });
    const obj12 = {
      label: intl7.string(tmp3(tmp4[9]).t["wrDmA/"]),
      subLabel: intl8.string(tmp3(tmp4[9]).t.UQbJW7),
      value: pauseDms,
      onValueChange() {
        metroImportDefault(!pauseDms);
      },
      start: true,
      end: true
    };
    const TableSwitchRow2 = tmp3(tmp4[17]).TableSwitchRow;
    intl7 = tmp3(tmp4[9]).intl;
    intl8 = tmp3(tmp4[9]).intl;
    items4[2] = closure_14(TableSwitchRow2, obj12);
    const ButtonGroup = tmp3(tmp4[20]).ButtonGroup;
    const obj13 = {
      onPress() {
        let alertType;
        let messageId;
        let obj4;
        let obj5;
        let obj7;
        let source;
        const obj = GuildAntiRaidActionCreators;
        const result = obj.setGuildIncidentActions(guild.id, pauseInvites, pauseDms, time);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet("GuildIncidentActionsActionSheet");
        hasOwnProperty();
        ({ source, alertType, messageId } = analyticsData);
        const obj3 = { guild_id: guild.id, source, raid_alert_id: messageId, raid_alert_type: alertType, intervention_type_enabled: obj4.getEnabledInterventions(pauseInvites, pauseDms), intervention_type_disabled: obj5.getDisabledInterventions(pauseInvites, pauseDms), duration: 60 * time };
        const track = AnalyticsUtilsDefault.track;
        const GUILD_RAID_INTERVENTION_STATE_CHANGE = constants.GUILD_RAID_INTERVENTION_STATE_CHANGE;
        AnalyticsUtilsDefault;
        obj4 = GuildAntiRaidUtils;
        obj5 = GuildAntiRaidUtils;
        track(GUILD_RAID_INTERVENTION_STATE_CHANGE, obj3);
        let tmp12 = !c5;
        const tmp3 = guild;
        const tmp4 = pauseInvites;
        const tmp5 = pauseDms;
        if (tmp12) {
          tmp12 = !c6;
        }
        if (!tmp12) {
          tmp12 = tmp4;
        }
        if (!tmp12) {
          tmp12 = tmp5;
        }
        if (!tmp12) {
          const obj6 = { content: authStore2(GuildRaidLockdownFeedbackActionSheetDefault, obj7), key: "GuildRaidLockdownFeedbackActionSheet" };
          const showActionSheet = tmp(4800).showActionSheet;
          obj7 = { guildId: tmp3.id };
          ActionSheetActionCreators;
          showActionSheet(obj6);
        }
      },
      text: intl9.string(tmp3(tmp4[9]).t["R3BPH+"]),
      variant: "primary",
      size: "md",
      disabled: !tmp17
    };
    const Button = tmp3(tmp4[21]).Button;
    intl9 = tmp3(tmp4[9]).intl;
    function handleClose() {
      const obj = analyticsData(time[13]);
      obj.hideActionSheet("GuildIncidentActionsActionSheet");
      _undefined();
    }
    const obj14 = { children: items6 };
    tmp17 = pauseInvites !== hasInvitesDisabledResult || pauseDms !== hasDMsDisabledResult || hasTimeChanges;
    items6 = [tmp15(Button, obj13), ];
    const obj15 = { onPress: handleClose, text: intl10.string(tmp3(tmp4[9]).t["ETE/oC"]), variant: "secondary", size: "md" };
    const Button2 = tmp3(tmp4[21]).Button;
    intl10 = tmp3(tmp4[9]).intl;
    items6[1] = closure_14(Button2, obj15);
    items4[3] = closure_15(ButtonGroup, obj14);
    return closure_15(ActionSheet, obj5);
  }
}
let result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx");

export default GuildIncidentActionsActionSheet;
