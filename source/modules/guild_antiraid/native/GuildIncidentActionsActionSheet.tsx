// Module ID: 10963
// Function ID: 85248
// Name: DurationSelectionActionSheet
// Dependencies: []

// Module 10963 (DurationSelectionActionSheet)
function DurationSelectionActionSheet(onClose) {
  const arg1 = onClose.onClose;
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.title = intl.string(arg1(dependencyMap[9]).t.vKYZzc);
  const items = [callback2(arg1(dependencyMap[8]).BottomSheetTitleHeader, obj), ];
  obj = {
    hasIcons: false,
    children: getTimeframes().map((label) => {
      const onClose = label;
      return callback(onClose(closure_2[10]).ActionSheetRow, {
        label: label.label,
        onPress() {
          callback(arg0.value);
          arg0();
        }
      }, label.value);
    })
  };
  items[1] = callback2(arg1(dependencyMap[10]).ActionSheetRow.Group, obj);
  obj.children = items;
  return callback3(arg1(dependencyMap[7]).ActionSheet, obj);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ resetGuildIncidentsActionSheetStore: closure_5, setInitialTime: closure_6, setPauseDms: closure_7, setPauseInvites: closure_8, setTime: closure_9, useGuildIncidentsActionSheetStore: closure_10 } = arg1(dependencyMap[2]));
const getTimeframes = arg1(dependencyMap[3]).getTimeframes;
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_12, GuildFeatures: closure_13 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
let closure_16 = arg1(dependencyMap[6]).createStyles({ beta: { marginLeft: -12 } });
class GuildIncidentActionsActionSheet {
  constructor(arg0) {
    guild = global.guild;
    arg1 = guild;
    importDefault = global.analyticsData;
    onDurationSelectorClose = function onDurationSelectorClose(hasInvitesDisabledResult) {
      let obj = guild(time[13]);
      obj = { content: callback2(closure_18, obj), key: "GuildIncidentActionsActionSheet" };
      obj = { guild, analyticsData };
      obj.showActionSheet(obj);
    };
    handleClose = function handleClose() {
      analyticsData(time[13]).hideActionSheet("GuildIncidentActionsActionSheet");
      hasInvitesDisabledResult();
    };
    tmp = closure_16();
    tmp2 = closure_10();
    time = tmp2.time;
    dependencyMap = time;
    pauseInvites = tmp2.pauseInvites;
    importAll = pauseInvites;
    pauseDms = tmp2.pauseDms;
    closure_4 = pauseDms;
    obj = arg1(dependencyMap[11]);
    items = [];
    items[0] = closure_4;
    stateFromStores = obj.useStateFromStores(items, () => pauseDms.getGuildIncident(guild.id));
    obj2 = arg1(dependencyMap[12]);
    hasInvitesDisabledResult = obj2.hasInvitesDisabled(stateFromStores);
    importDefault = hasInvitesDisabledResult;
    obj3 = arg1(dependencyMap[12]);
    hasDMsDisabledResult = obj3.hasDMsDisabled(stateFromStores);
    setInitialTime = hasDMsDisabledResult;
    obj4 = arg1(dependencyMap[12]);
    result = obj4.initialLockdownDurationHours(stateFromStores);
    closure_7 = result;
    hasItem = undefined;
    if (null != guild) {
      features = guild.features;
      tmp8 = GuildFeatures;
      hasItem = features.has(GuildFeatures.INVITES_DISABLED);
    }
    items1 = [, ];
    items1[0] = hasDMsDisabledResult;
    items1[1] = hasInvitesDisabledResult;
    effect = importAll.useEffect(() => {
      onDurationSelectorClose(hasInvitesDisabledResult);
      result(hasDMsDisabledResult);
    }, items1);
    items2 = [];
    items2[0] = result;
    effect1 = importAll.useEffect(() => {
      if (!state.getState().hasTimeChanges) {
        hasDMsDisabledResult(result);
      }
    }, items2);
    items3 = [];
    items3[0] = time;
    memo = importAll.useMemo(() => {
      let label;
      const found = callback().find((value) => value.value === closure_2);
      if (null != found) {
        label = found.label;
      }
      return label;
    }, items3);
    tmp12 = jsxs;
    obj = { startExpanded: true };
    obj1 = {};
    intl = arg1(dependencyMap[9]).intl;
    obj1.title = intl.string(arg1(dependencyMap[9]).t.oCYAc7);
    obj2 = {};
    obj2.size = arg1(dependencyMap[14]).BetaSizes.SMALL;
    obj2.style = tmp.beta;
    obj1.leading = jsx(arg1(dependencyMap[14]).BetaTag, obj2);
    obj.header = jsx(arg1(dependencyMap[8]).BottomSheetTitleHeader, obj1);
    tmp13 = jsx;
    obj3 = { revealed: true, borderTopWidth: true, borderColor: true, borderRadius: true, backgroundColor: true, paddingHorizontal: true };
    tmp14 = jsx;
    obj4 = {};
    str = "";
    if (null != memo) {
      str = memo;
    }
    obj4.text = str;
    obj3.trailing = tmp14(arg1(dependencyMap[15]).TableRow.TrailingText, obj4);
    intl2 = arg1(dependencyMap[9]).intl;
    obj3.label = intl2.string(arg1(dependencyMap[9]).t.vKYZzc);
    obj3.onPress = function onPress() {
      let obj = guild(time[13]);
      obj = { content: callback2(closure_17, obj), key: "DurationSelectionActionSheet" };
      obj = { onClose: onDurationSelectorClose };
      obj.showActionSheet(obj);
    };
    intl3 = arg1(dependencyMap[9]).intl;
    obj3.accessibilityLabel = intl3.string(arg1(dependencyMap[9]).t.vKYZzc);
    obj3.accessibilityHint = memo;
    items4 = [, , , ];
    items4[0] = tmp13(arg1(dependencyMap[15]).TableRow, obj3);
    tmp15 = jsxs;
    obj5 = { hasIcons: true };
    tmp16 = jsx;
    obj6 = {};
    intl4 = arg1(dependencyMap[9]).intl;
    obj6.label = intl4.string(arg1(dependencyMap[9]).t.Uwsjn6);
    intl5 = arg1(dependencyMap[9]).intl;
    obj6.subLabel = intl5.string(arg1(dependencyMap[9]).t.qPJkZh);
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
    items5[0] = tmp16(arg1(dependencyMap[17]).TableSwitchRow, obj6);
    if (hasItem) {
      tmp18 = jsx;
      tmp19 = arg1;
      tmp20 = dependencyMap;
      obj7 = {};
      tmp21 = jsx;
      obj8 = {};
      tmp22 = importDefault;
      num = 18;
      obj8.source = importDefault(dependencyMap[18]);
      num2 = 19;
      obj8.IconComponent = arg1(dependencyMap[19]).WarningIcon;
      str2 = "secondary";
      obj8.variant = "secondary";
      obj7.icon = jsx(arg1(dependencyMap[15]).TableRow.Icon, obj8);
      intl6 = arg1(dependencyMap[9]).intl;
      obj7.label = intl6.string(arg1(dependencyMap[9]).t.9GPbsV);
      hasItem = jsx(arg1(dependencyMap[15]).TableRow, obj7);
    }
    items5[1] = hasItem;
    obj5.children = items5;
    items4[1] = tmp15(arg1(dependencyMap[16]).TableRowGroup, obj5);
    obj9 = {};
    intl7 = arg1(dependencyMap[9]).intl;
    obj9.label = intl7.string(arg1(dependencyMap[9]).t.wrDmA/);
    intl8 = arg1(dependencyMap[9]).intl;
    obj9.subLabel = intl8.string(arg1(dependencyMap[9]).t.UQbJW7);
    obj9.value = pauseDms;
    obj9.onValueChange = function onValueChange() {
      result(!pauseDms);
    };
    obj9.start = true;
    obj9.end = true;
    items4[2] = jsx(arg1(dependencyMap[17]).TableSwitchRow, obj9);
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
            obj1.track(constants.GUILD_RAID_INTERVENTION_STATE_CHANGE, obj);
            let tmp4 = !hasInvitesDisabledResult;
            if (tmp4) {
              tmp4 = !hasDMsDisabledResult;
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
              obj.content = callback2(analyticsData(time[24]), obj1);
              obj.key = "GuildRaidLockdownFeedbackActionSheet";
              guild(time[13]).showActionSheet(obj);
              const obj6 = guild(time[13]);
            }
          }
    };
    intl9 = arg1(dependencyMap[9]).intl;
    obj11.text = intl9.string(arg1(dependencyMap[9]).t.R3BPH+);
    obj11.variant = "primary";
    obj11.size = "md";
    tmp25 = pauseInvites !== hasInvitesDisabledResult || pauseDms !== hasDMsDisabledResult || tmp2.hasTimeChanges;
    obj11.disabled = !tmp25;
    items6 = [, ];
    items6[0] = tmp24(arg1(dependencyMap[21]).Button, obj11);
    obj12 = { onPress: handleClose };
    intl10 = arg1(dependencyMap[9]).intl;
    obj12.text = intl10.string(arg1(dependencyMap[9]).t.ETE/oC);
    obj12.variant = "secondary";
    obj12.size = "md";
    items6[1] = jsx(arg1(dependencyMap[21]).Button, obj12);
    obj10.children = items6;
    items4[3] = tmp23(arg1(dependencyMap[20]).ButtonGroup, obj10);
    obj.children = items4;
    return tmp12(arg1(dependencyMap[7]).ActionSheet, obj);
  }
}
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx");

export default GuildIncidentActionsActionSheet;
