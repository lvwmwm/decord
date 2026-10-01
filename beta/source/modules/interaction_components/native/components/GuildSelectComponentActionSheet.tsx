// Module ID: 14208
// Function ID: 14209
// Name: GuildSelectComponentActionSheet
// Dependencies: [32, 19, 17, 2067, 5750, 21, 4836, 5067, 1115, 4800, 11300, 5896, 4988, 1177, 4832, 5754, 2]
// Exports: default

// Module 14208 (GuildSelectComponentActionSheet)
import react_native from "react-native" /* 17 */;
import native from "native" /* 1177 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5067 */;
import SelectComponentActionSheetDefault from "SelectComponentActionSheet" /* 11300 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, flattenedGuildIds, record;

let c9;
let metroImportAll;
let tmp5;
const intl2 = tmp5(1115);
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ guildIdentity: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 16 }, avatar: { marginRight: 4 } });
const result = size.fileFinishedImporting("modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx");

export default function GuildSelectComponentActionSheet(arg0) {
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
      reduced = reduce((arg0, arg1) => {
        guild = guild.getGuild(arg1);
        if (null != guild) {
          const obj = { type: closure_1_0(guildIdentity[7]).SelectOptionType.GUILD, value: null, label: null, guild };
          const push = arg0.push;
          ({ id: obj.value, name: obj.label } = guild);
          push(obj);
        }
        return arg0;
      }, array);
    } else {
      let obj = require("AutocompleteUtils");
      const obj2 = { query };
      const queryGuildsResult = obj.queryGuilds(obj2);
      reduced = queryGuildsResult.map((record) => {
        record = record.record;
        const obj = { type: closure_1_0(guildIdentity[7]).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
        return obj;
      });
    }
    return reduced;
  }, []);
  const items2 = [first, callback];
  const memo = obj.useMemo(() => callback(first), items2);
  const obj4 = {
    onPressOptionItem(arg0, guild) {
      require(guild.guild);
      closure_5(guild);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    onRemoveOptionItem() {
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
    itemAccessibilityLabel(label) {
      return label.label;
    },
    allowEmpty: false,
    expanded: true
  };
  return closure_8(SelectComponentActionSheetDefault, obj4);
};
