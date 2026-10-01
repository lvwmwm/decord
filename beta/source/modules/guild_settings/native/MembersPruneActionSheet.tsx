// Module ID: 16225
// Function ID: 16226
// Name: MembersPruneActionSheet
// Dependencies: [32, 19, 16226, 2067, 4469, 1372, 21, 573, 16227, 6618, 6570, 1115, 5997, 6000, 4832, 5281, 4800, 504, 6683, 2]
// Exports: default

// Module 16225 (MembersPruneActionSheet)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6683 */;
import PruneGuildModalActionCreatorsDefault from "PruneGuildModalActionCreators" /* 16227 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PrunePreviewStore from "PrunePreviewStore" /* 16226 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function MembersPruneActionSheetContent(guild) {
  let BottomSheetTitleHeader;
  let closure_3;
  let days;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let items2;
  let items3;
  let obj2;
  guild = guild.guild;
  days = undefined;
  _slicedToArray = undefined;
  let num;
  const id = guild.id;
  [days, _slicedToArray] = num.useState(7);
  const tmp3 = closure_5(guild.id, days, []);
  num = tmp3.count;
  const items = [guild.id, days];
  const isLoading = tmp3.isLoading;
  const effect = num.useEffect(() => {
    function handlePruneUpdate(guildId) {
      if (guildId.guildId === handlePruneUpdate.id) {
        if (guildId.prune.isPreview) {
          const _Number = Number;
          closure_2_6(guildId.guildId, guildId.prune.days, guildId.prune.includeRoles, Number(guildId.prune.pruneCount), guildId.prune.isFinished);
        }
      }
    }
    let obj = id(first[7]);
    const subscription = obj.subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
    };
  }, items);
  const items1 = [guild.id, days, num];
  const effect1 = num.useEffect(() => {
    if (null == num) {
      const obj = PruneGuildModalActionCreatorsDefault;
      obj.updateEstimateV2(guild.id, first);
    }
  }, items1);
  let obj = { header: closure_11(BottomSheetTitleHeader, obj2), children: items3 };
  const ActionSheet = guild(days[9]).ActionSheet;
  obj2 = { title: intl.string(guild(days[11]).t.zbyz7p) };
  BottomSheetTitleHeader = guild(days[10]).BottomSheetTitleHeader;
  intl = guild(days[11]).intl;
  const obj3 = {
    title: intl2.string(guild(days[11]).t.YccTvK),
    defaultValue: days,
    onChange(arg0) {
      const tmp = first !== arg0 && null != id;
      if (tmp) {
        closure_3(arg0);
      }
    },
    hasIcons: false,
    children: items2
  };
  const TableRadioGroup = guild(days[12]).TableRadioGroup;
  intl2 = guild(days[11]).intl;
  const obj4 = { value: 7, label: intl3.formatToPlainString(guild(days[11]).t.FM1dHS, { days: 7 }) };
  const TableRadioRow = guild(days[13]).TableRadioRow;
  intl3 = guild(days[11]).intl;
  items2 = [closure_11(TableRadioRow, obj4), ];
  const obj5 = { value: 30, label: intl4.formatToPlainString(guild(days[11]).t.FM1dHS, { days: 30 }) };
  const TableRadioRow2 = guild(days[13]).TableRadioRow;
  intl4 = guild(days[11]).intl;
  items2[1] = closure_11(TableRadioRow2, obj5);
  items3 = [closure_12(TableRadioGroup, obj3), , ];
  const Text = guild(days[14]).Text;
  const intl5 = guild(days[11]).intl;
  const format = intl5.format;
  const t = guild(days[11]).t;
  const tmp10 = isLoading ? t["98cHOp"] : t.f13az9;
  const tmp6 = closure_12;
  if (num == null) {
    num = -1;
  }
  const obj6 = { variant: "text-sm/medium", children: format(tmp10, { members: num, days }) };
  items3[1] = closure_11(Text, obj6);
  const obj7 = {
    variant: "destructive",
    onPress() {
      let tmp2 = null != id;
      const tmp = id;
      if (tmp2) {
        tmp2 = null != first;
      }
      if (tmp2) {
        const obj = PruneGuildModalActionCreatorsDefault;
        obj.prune(tmp, first);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
        metroImportDefault();
      }
    },
    text: intl6.string(guild(days[11]).t["2mIlKQ"])
  };
  const Button = tmp7(tmp8[15]).Button;
  intl6 = tmp7(tmp8[11]).intl;
  items3[2] = closure_11(Button, obj7);
  return tmp6(ActionSheet, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ usePrunePreview: hasOwnProperty, setPrunePreview: metroRequire, clearAllPrunePreviews: metroImportDefault } = PrunePreviewStore);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const result = size.fileFinishedImporting("modules/guild_settings/native/MembersPruneActionSheet.tsx");

export default function MembersPruneActionSheet(guild) {
  guild = guild.guild;
  let obj = guild(504);
  const items = [GuildStore, PermissionStore, UserStore];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const canPruneGuildMembers = MemberSafetyPermissionsUtils.canPruneGuildMembers;
    MemberSafetyPermissionsUtils;
    const tmp2 = guild;
    guild = GuildStore.getGuild(guild.id);
    if (guild == null) {
      guild = tmp2;
    }
    return canPruneGuildMembers(guild, UserStore.getCurrentUser(), PermissionStore);
  }, items1);
  const items2 = [stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }, items2);
  let tmp3 = null;
  if (stateFromStores) {
    const obj2 = { guild };
    tmp3 = closure_11(MembersPruneActionSheetContent, obj2);
  }
  return tmp3;
};
