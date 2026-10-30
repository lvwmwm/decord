// Module ID: 12460
// Function ID: 12461
// Name: ConjureGuildPickerSheet
// Dependencies: [32, 19, 4858, 4880, 21, 6068, 12458, 12459, 7291, 8696, 5253, 12461, 8595, 6977, 12462, 9066, 2]
// Exports: default

// Module 12460 (ConjureGuildPickerSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6068 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8595 */;
import MentionableSelectOptionParts from "MentionableSelectOptionParts" /* 12461 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore_mod from "GuildStore" /* 4880 */;
import size from "module_2" /* 2 */;

let set;

let GuildStore = GuildStore_mod;
const jsx = Fragment.jsx;
let obj = { channel: InteractionComponentTypes.SelectOptionType.CHANNEL, role: InteractionComponentTypes.SelectOptionType.ROLE, user: InteractionComponentTypes.SelectOptionType.USER };
const result = size.fileFinishedImporting("modules/conjure/guild_pickers/native/ConjureGuildPickerSheet.tsx");

export default function ConjureGuildPickerSheet(guildId) {
  let _undefined;
  let c6;
  let channelFilter;
  let str;
  let title;
  const f126964 = (id) => ({ id: id.value, label: id.label });
  guildId = guildId.guildId;
  const type = guildId.type;
  const maxPicks = guildId.maxPicks;
  const selected = guildId.selected;
  const onSubmit = guildId.onSubmit;
  GuildStore = undefined;
  let closure_9;
  let guild;
  let closure_11;
  let closure_12;
  set = undefined;
  function toOption(id) {
    obj = { type: obj[type], value: id.id, label: id.label };
    return obj;
  }
  obj = onSubmit;
  ({ channelFilter, title } = guildId);
  let tmp = selected(onSubmit.useState(""), 2);
  [str, c6] = tmp;
  const tmp2 = selected(onSubmit.useState(() => selected.map(toOption)), 2);
  const selectedOptions = tmp2[0];
  let closure_8 = tmp2[1];
  const tmp3 = type;
  const tmp5 = type(maxPicks[6])(guildId, { type, channel_filter: channelFilter });
  let tmp6 = guildId;
  let tmp8 = null;
  const useConjureMemberRequests = guildId(maxPicks[7]).useConjureMemberRequests;
  const tmp7 = guildId(maxPicks[7]);
  if ("user" === type) {
    tmp8 = guildId;
  }
  closure_9 = useConjureMemberRequests(tmp8, selected.map((id) => id.id));
  guild = GuildStore.getGuild(guildId);
  let tmp11 = null;
  const tmp3Result = tmp3(maxPicks[8]);
  if ("role" === type) {
    tmp11 = guildId;
  }
  closure_11 = tmp3Result(tmp11, tmp6(tmp4[9]).MIN_REREQUEST_TIME);
  const str2 = str.trim();
  closure_12 = str2.toLowerCase();
  let items = tmp5;
  if (tmp5 == null) {
    items = [];
  }
  const found = items.filter((label) => {
    let hasItem = "" === closure_12;
    if (!hasItem) {
      const str = label.label;
      const formatted = str.toLowerCase();
      hasItem = formatted.includes(tmp);
    }
    if (!hasItem) {
      let hasItem1;
      if (label.description != null) {
        const formatted1 = str2.toLowerCase();
        hasItem1 = formatted1.includes(tmp);
      }
      hasItem = true === hasItem1;
    }
    return hasItem;
  });
  const mapped = found.map(toOption);
  set = new Set(selectedOptions.map((value) => value.value));
  let items1 = [guild, guildId];
  const callback = obj.useCallback((type) => {
    if (type.type !== InteractionComponentTypes.SelectOptionType.CHANNEL) {
      const tmpResult = MentionableSelectOptionParts;
      return tmpResult.renderMentionableOptionIcon(type, guild, guildId);
    } else {
      const channel = ChannelStore.getChannel(type.value);
      let channelIconWithGuild = null;
      if (null != channel) {
        const tmpResult2 = utils_ChannelUtils;
        channelIconWithGuild = tmpResult2.getChannelIconWithGuild(channel, guild);
      }
      let tmp8 = null;
      if (null != channelIconWithGuild) {
        tmp8 = jsx(tmp(6977).TableRowIcon, { source: channelIconWithGuild });
      }
      return tmp8;
    }
  }, items1);
  const obj2 = {
    selectionActionComponent: { placeholder: title, minValues: 0, maxValues: maxPicks },
    allowEmpty: true,
    options: mapped,
    selectedOptions,
    selectedCount: selectedOptions.length,
    isSelected(value) {
      return set.has(value.value);
    },
    onPressOptionItem: function press(arg0, value) {
      let closure_0 = value;
      const hasItem = set.has(value.value);
      if (1 === maxPicks) {
        let items;
        if (hasItem) {
          items = [];
        } else {
          items = [value];
        }
        onSubmit(items.map(f126964));
        obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      } else if (hasItem) {
        closure_8(first.filter((value) => value.value !== value.value));
      } else if (first.length < tmp3) {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, first, 0)] = value;
        closure_8(items1);
      }
    },
    submitSelection() {
      onSubmit(first.map(f126964));
      obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    onQueryChange(ref) {
      _undefined(ref);
      closure_9(ref);
    },
    renderIcon: callback,
    renderDescription: tmp6(maxPicks[11]).renderMentionableOptionDescription,
    renderOptionSuffix(type) {
      obj = MentionableSelectOptionParts;
      return obj.renderMentionableOptionSuffix(type, guild, closure_11);
    },
    itemAccessibilityLabel: function accessibilityLabel(type) {
      const tmp = guildId;
      if (type.type !== guildId(maxPicks[5]).SelectOptionType.CHANNEL) {
        const tmpResult = tmp(maxPicks[11]);
        return tmpResult.mentionableOptionAccessibilityLabel(type);
      } else {
        const channel = toOption.getChannel(type.value);
        let tmp6;
        if (null != channel) {
          obj = { channel };
          tmp6 = type(tmp2[15])(obj);
        }
        return tmp6;
      }
    }
  };
  const tmp3Result2 = tmp3(maxPicks[14]);
  return selectedOptions(tmp3Result2, obj2);
};
