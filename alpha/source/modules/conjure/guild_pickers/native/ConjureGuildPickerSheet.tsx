// Module ID: 17072
// Function ID: 17073
// Name: ConjureGuildPickerSheet
// Dependencies: [32, 19, 2065, 2087, 21, 5445, 558, 576, 17070, 17071, 6816, 8257, 5056, 11379, 8158, 6187, 8650, 11376, 2]

// Module 17072 (ConjureGuildPickerSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5445 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8158 */;
import MentionableSelectOptionParts from "MentionableSelectOptionParts" /* 11379 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore_mod from "GuildStore" /* 2087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let GuildStore = GuildStore_mod;
const jsx = Fragment.jsx;
let obj = { channel: InteractionComponentTypes.SelectOptionType.CHANNEL, role: InteractionComponentTypes.SelectOptionType.ROLE, user: InteractionComponentTypes.SelectOptionType.USER };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureGuildPickerSheet(guildId) {
  let channelFilter;
  let maxPicks;
  let str;
  let title;
  let tmp4;
  let tmp = guildId;
  const tmp2 = maxPicks;
  obj = guildId(maxPicks[7]);
  const cResult = obj.c(54);
  guildId = guildId.guildId;
  const type = guildId.type;
  ({ channelFilter, title, maxPicks } = guildId);
  const selected = guildId.selected;
  const onSubmit = guildId.onSubmit;
  if (cResult[0] !== type) {
    function toOption(id) {
      obj = { type: obj[type], value: id.id, label: id.label };
      return obj;
    }
    cResult[0] = type;
    cResult[1] = toOption;
    tmp4 = toOption;
  } else {
    tmp4 = cResult[1];
  }
  let channel = tmp4;
  let tmp6 = selected(onSubmit.useState(""), 2);
  [str, GuildStore] = tmp6;
  const obj2 = onSubmit;
  const tmp5 = selected;
  if (cResult[2] === selected) {
    let tmp7;
    if (cResult[3] === tmp4) {
      tmp7 = cResult[4];
    }
    const tmp5Result = tmp5(obj2.useState(tmp7), 2);
    let closure_7 = tmp5Result[0];
    let closure_8 = tmp5Result[1];
    if (cResult[5] === channelFilter) {
      let tmp9;
      let tmp12;
      let tmp20;
      if (cResult[6] === type) {
        tmp9 = cResult[7];
      }
      const tmp11 = type(tmp2[8])(guildId, tmp9);
      const tmp10 = type;
      if (cResult[8] !== selected) {
        let tmp14;
        const _Symbol = Symbol;
        const str2 = "react.memo_cache_sentinel";
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor(id) {
              return id.id;
            }
          }
          cResult[10] = P;
          tmp14 = P;
        } else {
          class P {
            constructor(id) {
              return id.id;
            }
          }
        }
        const mapped = selected.map(tmp14);
        cResult[8] = selected;
        cResult[9] = mapped;
        tmp12 = mapped;
      } else {
        class P {
          constructor(id) {
            return id.id;
          }
        }
      }
      let tmpResult = tmp(tmp2[9]);
      const useConjureMemberRequests = tmpResult.useConjureMemberRequests;
      if ("user" === type) {
        class P {
          constructor(id) {
            return id.id;
          }
        }
      }
      const conjureMemberRequests = useConjureMemberRequests(tmp18, tmp12);
      if (cResult[11] !== guildId) {
        class P {
          constructor(id) {
            return id.id;
          }
        }
        let guild = GuildStore.getGuild(guildId);
        cResult[11] = guildId;
        cResult[12] = guild;
        tmp20 = guild;
      } else {
        class P {
          constructor(id) {
            return id.id;
          }
        }
      }
      guild = tmp20;
      const tmp10Result = tmp10(tmp2[10]);
      if ("role" === type) {
        class P {
          constructor(id) {
            return id.id;
          }
        }
      }
      let closure_11 = tmp10Result(null, tmp(tmp2[11]).MIN_REREQUEST_TIME);
      tmp10Result(null, tmp(tmp2[11]).MIN_REREQUEST_TIME);
      if (cResult[13] === tmp11) {
        class P {
          constructor(id) {
            return id.id;
          }
        }
      }
      const str5 = str.trim();
      let closure_12 = str5.toLowerCase();
      const arr2 = tmp11;
      if (tmp11 == null) {
        class P {
          constructor(id) {
            return id.id;
          }
        }
      }
      const found = arr2.filter((label) => {
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
      const mapped1 = found.map(tmp4);
      cResult[13] = tmp11;
      class E {
        constructor() {
          return selected.map(channel);
        }
      }
      cResult[14] = str;
      cResult[15] = tmp4;
      cResult[16] = mapped1;
    }
    const obj3 = { type, channel_filter: channelFilter };
    cResult[5] = channelFilter;
    cResult[6] = type;
    cResult[7] = obj3;
    tmp9 = obj3;
  }
  class E {
    constructor() {
      return selected.map(channel);
    }
  }
  cResult[2] = selected;
  cResult[3] = tmp4;
  cResult[4] = E;
  tmp7 = E;
}) : (function ConjureGuildPickerSheet(guildId) {
  let _undefined;
  let c6;
  let channelFilter;
  let str;
  let title;
  const f148740 = (id) => ({ id: id.value, label: id.label });
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
  const tmp5 = type(maxPicks[8])(guildId, { type, channel_filter: channelFilter });
  let tmp6 = guildId;
  let tmp8 = null;
  const useConjureMemberRequests = guildId(maxPicks[9]).useConjureMemberRequests;
  const tmp7 = guildId(maxPicks[9]);
  if ("user" === type) {
    tmp8 = guildId;
  }
  closure_9 = useConjureMemberRequests(tmp8, selected.map((id) => id.id));
  guild = GuildStore.getGuild(guildId);
  let tmp11 = null;
  const tmp3Result = tmp3(maxPicks[10]);
  if ("role" === type) {
    tmp11 = guildId;
  }
  closure_11 = tmp3Result(tmp11, tmp6(tmp4[11]).MIN_REREQUEST_TIME);
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
        tmp8 = jsx(tmp(6187).TableRowIcon, { source: channelIconWithGuild });
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
        onSubmit(items.map(f148740));
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
      onSubmit(first.map(f148740));
      obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    onQueryChange(ref) {
      _undefined(ref);
      closure_9(ref);
    },
    renderIcon: callback,
    renderDescription: tmp6(maxPicks[13]).renderMentionableOptionDescription,
    renderOptionSuffix(type) {
      obj = MentionableSelectOptionParts;
      return obj.renderMentionableOptionSuffix(type, guild, closure_11);
    },
    itemAccessibilityLabel: function accessibilityLabel(type) {
      const tmp = guildId;
      if (type.type !== guildId(maxPicks[5]).SelectOptionType.CHANNEL) {
        const tmpResult = tmp(maxPicks[13]);
        return tmpResult.mentionableOptionAccessibilityLabel(type);
      } else {
        const channel = toOption.getChannel(type.value);
        let tmp6;
        if (null != channel) {
          obj = { channel };
          tmp6 = type(tmp2[16])(obj);
        }
        return tmp6;
      }
    }
  };
  const tmp3Result2 = tmp3(maxPicks[17]);
  return selectedOptions(tmp3Result2, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/guild_pickers/native/ConjureGuildPickerSheet.tsx");

export default tmp2;
