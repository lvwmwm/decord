// Module ID: 14759
// Function ID: 14760
// Name: GuildSelectComponentActionSheet
// Dependencies: [32, 19, 17, 2086, 5968, 21, 5090, 558, 576, 5441, 1126, 5054, 5405, 1200, 5086, 6161, 11428, 5975, 2]

// Module 14759 (GuildSelectComponentActionSheet)
import react_native from "react-native" /* 17 */;
import native from "native" /* 1200 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5405 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5441 */;
import SelectComponentActionSheetDefault from "SelectComponentActionSheet" /* 11428 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import SortedGuildStore from "SortedGuildStore" /* 5968 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, flattenedGuildIds;

let c9;
let metroImportAll;
let tmp5;
const intl2 = tmp5(1126);
const f118263 = (arg0, arg1) => {
  guild = guild.getGuild(arg1);
  if (null != guild) {
    const obj = { type: closure_1_0(guildIdentity[9]).SelectOptionType.GUILD, value: null, label: null, guild };
    const push = arg0.push;
    ({ id: obj.value, name: obj.label } = guild);
    push(obj);
  }
  return arg0;
};
const f118264 = (record) => {
  record = record.record;
  const obj = { type: closure_1_0(guildIdentity[9]).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
  return obj;
};
let react = react_mod;
let View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ guildIdentity: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 16 }, avatar: { marginRight: 4 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSelectComponentActionSheet(user) {
  let closure_4;
  let closure_5;
  let first;
  let guildIdentity;
  let intl;
  let onSelectGuild;
  let selectedGuild;
  let tmp17;
  let tmp7;
  let tmp8;
  let tmp = onSelectGuild;
  let obj = onSelectGuild(576);
  const cResult = obj.c(28);
  ({ selectedGuild, onSelectGuild } = user);
  user = user.user;
  const tmp4 = closure_10();
  dependencyMap = tmp4;
  let obj2 = react;
  let tmp5 = first;
  let tmp6 = first(react.useState(""), 2);
  [tmp7, r10022] = tmp6;
  if (cResult[0] !== selectedGuild) {
    const obj4 = { type: tmp(5441).SelectOptionType.GUILD, value: null, label: null, guild: selectedGuild };
    ({ id: obj3.value, name: obj3.label } = selectedGuild);
    cResult[0] = selectedGuild;
    cResult[1] = obj4;
    tmp8 = obj4;
  } else {
    tmp8 = cResult[1];
  }
  const tmp5Result = tmp5(obj2.useState(tmp8), 2);
  first = tmp5Result[0];
  react = tmp5Result[1];
  if (cResult[2] !== first) {
    let items1;
    if (null != first) {
      let items = [first];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[2] = first;
    cResult[3] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { maxValues: 1, minValues: 1, placeholder: intl.string(tmp(1126).t["ZImm/x"]) };
    intl = tmp(1126).intl;
    cResult[4] = obj6;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
    cResult[5] = T;
  } else {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
  }
  if (cResult[6] !== tmp7) {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
    cResult[6] = tmp7;
    cResult[7] = tmp16;
  } else {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
    cResult[8] = tmp18;
    tmp17 = tmp18;
  } else {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
  }
  View = tmp17;
  if (cResult[9] !== onSelectGuild) {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
    cResult[9] = onSelectGuild;
    cResult[10] = tmp20;
  } else {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
    cResult[11] = tmp22;
  } else {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
  }
  const tmp23 = cResult[12];
  if (first != null) {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
  }
  if (tmp23 !== undefined) {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
    if (first != null) {
      class T {
        constructor(query) {
          let reduced;
          if (0 === query.length) {
            flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
            const _Array = Array;
            const self = this;
            const self2 = this;
            const reduce = flattenedGuildIds.reduce;
            const array = new Array();
            reduced = reduce(f118263, array);
          } else {
            const obj2 = { query };
            const obj = user(guildIdentity[17]);
            const queryGuildsResult = obj.queryGuilds(obj2);
            reduced = queryGuildsResult.map(f118264);
          }
          return reduced;
        }
      }
    }
    function isSelected(value) {
      let value2;
      value = value.value;
      if (first != null) {
        value2 = first.value;
      }
      return value === value2;
    }
    cResult[12] = tmp25;
    cResult[13] = isSelected;
  } else {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
    cResult[14] = tmp27;
  } else {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
  }
  if (cResult[15] === tmp4.avatar) {
    class T {
      constructor(query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f118263, array);
        } else {
          const obj2 = { query };
          const obj = user(guildIdentity[17]);
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f118264);
        }
        return reduced;
      }
    }
  }
  function renderDescription(guild) {
    let items;
    const hasAvatarForGuildResult = user.hasAvatarForGuild(guild.guild.id);
    const obj = NicknameUtilsDefault;
    let username = obj.getNickname(guild.guild.id, undefined, user);
    let tmp8 = hasAvatarForGuildResult;
    const obj2 = { style: guildIdentity.guildIdentity, children: items };
    const tmp5 = React4;
    const tmp6 = View;
    if (hasAvatarForGuildResult) {
      const obj3 = { size: native.AvatarSizes.SIZE_16, style: tmp7.avatar, user, guildId: guild.guild.id, animate: true };
      const Avatar = native.Avatar;
      tmp8 = metroImportAll(Avatar, obj3);
    }
    items = [tmp8, ];
    const Text = Text_Text.Text;
    const tmp11 = metroImportAll;
    if (username == null) {
      username = tmp.username;
    }
    items[1] = tmp11(Text, { variant: "text-sm/medium", color: "text-default", children: username });
    return tmp5(tmp6, obj2);
  }
  cResult[15] = tmp4.avatar;
  cResult[16] = tmp4.guildIdentity;
  cResult[17] = user;
  cResult[18] = renderDescription;
}) : (function GuildSelectComponentActionSheet(arg0) {
  let guildIdentity;
  let intl;
  let items1;
  let selectedGuild;
  ({ selectedGuild, onSelectGuild: require, user: importDefault } = arg0);
  let first;
  let first1;
  let callback;
  let tmp = closure_10();
  dependencyMap = tmp;
  let obj = first1;
  const tmp2 = first(first1.useState(""), 2);
  first = tmp2[0];
  let obj2 = { type: InteractionComponentTypes.SelectOptionType.GUILD, value: selectedGuild.id, label: selectedGuild.name, guild: selectedGuild };
  let tmp5 = require;
  let tmp6 = dependencyMap;
  const tmp4 = tmp2[1];
  const tmp7 = first(first1.useState(obj2), 2);
  first1 = tmp7[0];
  let closure_5 = tmp7[1];
  if (null != first1) {
    let items = [first1];
    items1 = items;
  } else {
    items1 = [];
  }
  let obj3 = { maxValues: 1, minValues: 1, placeholder: intl.string(intl2.t["ZImm/x"]) };
  function submitSelection() {
    const obj = require("ActionSheetActionCreators");
    return obj.hideActionSheet();
  }
  intl = intl2.intl;
  callback = obj.useCallback(function(query) {
    let reduced;
    if (0 === query.length) {
      flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const _Array = Array;
      const self = this;
      const self2 = this;
      const reduce = flattenedGuildIds.reduce;
      const array = new Array();
      reduced = reduce(f118263, array);
    } else {
      let obj = require("AutocompleteUtils");
      const obj2 = { query };
      const queryGuildsResult = obj.queryGuilds(obj2);
      reduced = queryGuildsResult.map(f118264);
    }
    return reduced;
  }, []);
  const items2 = [first, callback];
  const memo = obj.useMemo(() => callback(first), items2);
  const obj4 = {
    onPressOptionItem: function handlePressOptionItem(arg0, guild) {
      require(guild.guild);
      closure_5(guild);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    onRemoveOptionItem: function handleRemoveOptionItem() {
      closure_5(null);
    },
    renderIcon(guild) {
      const obj = { guild: guild.guild };
      return closure_1_8(require("GuildIcon"), obj);
    },
    renderHeaderIcon(guild) {
      const obj = { size: require("GuildIcon").GuildIconSizes.XSMALL, guild: guild.guild };
      const tmp = require("GuildIcon");
      return closure_1_8(tmp, obj);
    },
    iconContainerStyle: tmp.iconContainer,
    renderDescription(guild) {
      let items;
      const hasAvatarForGuildResult = importDefault.hasAvatarForGuild(guild.guild.id);
      const obj = NicknameUtilsDefault;
      let username = obj.getNickname(guild.guild.id, undefined, importDefault);
      let tmp8 = hasAvatarForGuildResult;
      const obj2 = { style: guildIdentity.guildIdentity, children: items };
      const tmp5 = React4;
      const tmp6 = View;
      if (hasAvatarForGuildResult) {
        const obj3 = { size: native.AvatarSizes.SIZE_16, style: tmp7.avatar, user: importDefault, guildId: guild.guild.id, animate: true };
        const Avatar = native.Avatar;
        tmp8 = metroImportAll(Avatar, obj3);
      }
      items = [tmp8, ];
      const Text = Text_Text.Text;
      const tmp11 = metroImportAll;
      if (username == null) {
        username = tmp.username;
      }
      items[1] = tmp11(Text, { variant: "text-sm/medium", color: "text-default", children: username });
      return tmp5(tmp6, obj2);
    },
    selectionActionComponent: obj3,
    options: memo,
    selectedCount: items1.length,
    selectedOptions: items1,
    isSelected(value) {
      let value2;
      value = value.value;
      if (first1 != null) {
        value2 = first1.value;
      }
      return value === value2;
    },
    submitSelection,
    onQueryChange: tmp4,
    itemAccessibilityLabel: function accessibilityLabel(label) {
      return label.label;
    },
    allowEmpty: false,
    expanded: true
  };
  return closure_8(SelectComponentActionSheetDefault, obj4);
});
const result = size.fileFinishedImporting("modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx");

export default tmp3;
