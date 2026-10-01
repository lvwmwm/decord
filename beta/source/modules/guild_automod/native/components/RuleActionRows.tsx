// Module ID: 17334
// Function ID: 17335
// Name: RuleActionRows
// Dependencies: [19, 2045, 4467, 11341, 21, 4836, 576, 17311, 10871, 1115, 4800, 17335, 1981, 17336, 17314, 5917, 5279, 4832, 5929, 17310, 5999, 2]
// Exports: default

// Module 17334 (RuleActionRows)
import nativeDefault from "native" /* 576 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import TableRow2 from "TableRow" /* 5917 */;
import FormCheckbox from "FormCheckbox" /* 5929 */;
import Constants from "Constants" /* 11341 */;
import getActionInfo from "getActionInfo" /* 17314 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let metroImportDefault;
let metroRequire;
let obj2;
function RuleActionRow(onPress) {
  let Stack;
  let Text;
  let actionType;
  let items1;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  let obj8;
  let rule;
  ({ rule, actionType } = onPress);
  onPress = onPress.onPress;
  const actions = rule.actions;
  const tmp = closure_8();
  const found = actions.find((type) => type.type === actionType);
  const obj = getActionInfo;
  const actionInfo = obj.getActionInfo(actionType, found, rule.triggerType);
  if (null == actionInfo) {
    return null;
  } else {
    let Yl1D84;
    const icon = actionInfo.icon;
    const obj2 = { icon: metroRequire(TableRow2.TableRow.Icon, obj3), label: actionInfo.headerText, subLabel: metroRequire(Stack, obj4), trailing: metroRequire(FormCheckbox.FormCheckbox, obj7), accessibilityValue: obj8, disabled: !actionInfo.isEditable, onPress, arrow: true };
    const TableRow = tmp3(5917).TableRow;
    obj3 = { IconComponent: icon };
    obj4 = { spacing: nativeDefault.space.PX_4, style: tmp.subLabel, children: metroImportDefault(Text, obj6) };
    Stack = tmp3(5279).Stack;
    const items = [actionInfo.descriptionText, ];
    let tmp9Result = null != actionInfo.helperText;
    Text = tmp3(4832).Text;
    if (tmp9Result) {
      const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: items1 };
      items1 = [" ", actionInfo.helperText];
      tmp9Result = tmp9(tmp3(4832).Text, obj5);
    }
    obj6 = { variant: "text-xs/medium", color: "text-subtle", children: items };
    items[1] = tmp9Result;
    obj7 = { checked: null != found };
    const intl = tmp3(1115).intl;
    const string = intl.string;
    if (null != found) {
      Yl1D84 = tmp3(1115).t.G00RI5;
    } else {
      Yl1D84 = tmp3(1115).t.Yl1D84;
    }
    obj8 = { text: string(Yl1D84) };
    return metroRequire(TableRow, obj2);
  }
}
let closure_4 = GuildChannelStore.GUILD_SELECTABLE_CHANNELS_KEY;
const AutomodActionType = Constants.AutomodActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { subLabel: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/RuleActionRows.tsx");

export default function RuleActionRows(rule) {
  let intl;
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  let tmp = rule;
  let tmp2 = dependencyMap;
  let obj = rule(17310);
  const availableActionTypes = obj.getAvailableActionTypes(rule.triggerType);
  let tmp3 = null;
  if (0 !== availableActionTypes.length) {
    let tmp4 = closure_6;
    let obj2 = {
      title: intl.string(tmp(1115).t["18TOiQ"]),
      hasIcons: true,
      children: availableActionTypes.map((actionType) => {
          let channelType;
          rule = actionType;
          let obj = {
            rule,
            actionType,
            onChangeRule,
            onPress() {
              let actions;
              let actions2;
              let intl;
              let tmp = actionType;
              let tmp2 = constants;
              if (constants.FLAG_TO_CHANNEL === actionType) {
                actionType = rule;
                let closure_1 = onChangeRule;
                const actions1 = rule.actions;
                const found = actions1.find(actionType(closure_1_2[7]).isActionFlagToChannel);
                let channelId;
                const tmp19 = rule;
                if (found != null) {
                  channelId = found.metadata.channelId;
                }
                let obj3 = {
                  guildId: tmp19.guildId,
                  channelType,
                  selectedChannel: channel,
                  filterFn(channel) {
                      channel = channel.channel;
                      const isGuildVocalResult = channel.isGuildVocal();
                      const tmp2 = !isGuildVocalResult && !channel.isThread() && !channel.isForumLikeChannel();
                      return tmp2;
                    },
                  noChannelOptionLabel: intl.string(actionType(closure_1_2[9]).t.PoWNfe),
                  onSelect(id) {
                      let obj5;
                      if (null != id) {
                        const _Set = Set;
                        const self = this;
                        const self2 = this;
                        set = new Set(exemptChannels.exemptChannels);
                        set.add(id.id);
                        const obj3 = { type: constants.FLAG_TO_CHANNEL, metadata: obj5 };
                        const obj2 = { exemptChannels: set };
                        obj5 = { channelId: id.id };
                        const obj4 = actionType(closure_2_2[7]);
                        const merged = Object.assign(obj4.setRuleAction(exemptChannels, constants.FLAG_TO_CHANNEL, obj3));
                        closure_1(obj2);
                      } else {
                        const obj = actionType(closure_2_2[7]);
                        closure_1(obj.setRuleAction(exemptChannels, constants.FLAG_TO_CHANNEL, null));
                      }
                    }
                };
                channel = null;
                const tmp27 = closure_1_1(closure_1_2[8]);
                if (null != channelId) {
                  channel = channel.getChannel(channelId);
                }
                if (channel == null) {
                  channel = null;
                }
                intl = tmp21(tmp22[9]).intl;
                tmp27(obj3);
              } else if (tmp2.BLOCK_MESSAGE === tmp) {
                actionType = rule;
                closure_1 = onChangeRule;
                const openLazy2 = closure_1_1(closure_1_2[10]).openLazy;
                const tmp15 = closure_1_1(closure_1_2[10]);
                let obj5 = {
                  triggerType: null,
                  action: actions2.find(actionType(closure_1_2[7]).isActionBlockMessage),
                  onConfirm(arg0) {
                      let tmp4;
                      const obj = { type: constants.BLOCK_MESSAGE, metadata: { customMessage: tmp4 } };
                      tmp4 = undefined;
                      const setRuleAction = actionType(closure_2_2[7]).setRuleAction;
                      const BLOCK_MESSAGE = constants.BLOCK_MESSAGE;
                      actionType(closure_2_2[7]);
                      const tmp = closure_1;
                      const tmp3 = closure_0;
                      if ("" !== arg0) {
                        tmp4 = arg0;
                      }
                      return tmp(setRuleAction(tmp3, BLOCK_MESSAGE, obj));
                    },
                  onRemove() {
                      const obj = actionType(closure_2_2[7]);
                      return closure_1(obj.setRuleAction(closure_0, constants.BLOCK_MESSAGE, null));
                    }
                };
                ({ triggerType: obj2.triggerType, actions: actions2 } = rule);
                const tmp17 = actionType(closure_1_2[12])(closure_1_2[13], closure_1_2.paths);
                openLazy2(tmp17, "AutomodBlockMessage", obj5);
              } else if (tmp2.USER_COMMUNICATION_DISABLED === tmp) {
                let tmp3 = rule;
                let tmp4 = onChangeRule;
                actionType = rule;
                closure_1 = onChangeRule;
                const openLazy = closure_1_1(closure_1_2[10]).openLazy;
                const tmp7 = closure_1_1(closure_1_2[10]);
                let obj = {
                  triggerType: null,
                  action: actions.find(actionType(closure_1_2[7]).isActionUserCommunicationDisabled),
                  onSelectDuration(durationSeconds) {
                      let obj3;
                      const obj2 = { type: constants.USER_COMMUNICATION_DISABLED, metadata: obj3 };
                      obj3 = { durationSeconds };
                      const obj = actionType(closure_2_2[7]);
                      return closure_1(obj.setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, obj2));
                    },
                  onRemove() {
                      const obj = actionType(closure_2_2[7]);
                      return closure_1(obj.setRuleAction(closure_0, constants.USER_COMMUNICATION_DISABLED, null));
                    }
                };
                ({ triggerType: obj.triggerType, actions } = rule);
                const tmp9 = actionType(closure_1_2[12])(closure_1_2[11], closure_1_2.paths);
                openLazy(tmp9, "AutomodTimeoutDuration", obj);
              } else {
                const QUARANTINE_USER = tmp2.QUARANTINE_USER;
              }
            }
          };
          return closure_1_6(RuleActionRow, obj, actionType);
        })
    };
    const TableRowGroup = tmp(5999).TableRowGroup;
    intl = tmp(1115).intl;
    tmp3 = closure_6(TableRowGroup, obj2);
  }
  return tmp3;
};
