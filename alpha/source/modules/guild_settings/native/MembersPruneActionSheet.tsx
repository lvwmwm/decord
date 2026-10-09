// Module ID: 16950
// Function ID: 16951
// Name: MembersPruneActionSheet
// Dependencies: [32, 19, 16951, 2086, 4709, 1390, 21, 558, 576, 584, 16952, 5055, 6835, 1126, 6266, 6267, 5087, 5376, 6892, 6961, 504, 2]

// Module 16950 (MembersPruneActionSheet)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6961 */;
import PruneGuildModalActionCreatorsDefault from "PruneGuildModalActionCreators" /* 16952 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PrunePreviewStore from "PrunePreviewStore" /* 16951 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let updateEstimateV2Result;

let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ usePrunePreview: hasOwnProperty, setPrunePreview: metroRequire, clearAllPrunePreviews: metroImportDefault } = PrunePreviewStore);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function MembersPruneActionSheetContent(guild) {
  let closure_3;
  let count;
  let first;
  let first1;
  let items2;
  let tmp6;
  let obj = guild(first[8]);
  const cResult = obj.c(37);
  guild = guild.guild;
  const id = guild.id;
  let obj2 = count;
  [first, _slicedToArray] = count.useState(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  count = closure_5(guild.id, first, first1).count;
  const tmp5 = closure_5(guild.id, first, first1);
  if (cResult[1] !== guild.id) {
    class T {
      constructor() {
        handlePruneUpdate = function handlePruneUpdate() { /* body not rendered: F148149 */ };
        obj = id(closure_2[9]);
        subscription = obj.subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
        return () => { /* body not rendered: F148150 */ };
      }
    }
    cResult[1] = guild.id;
    cResult[2] = T;
    tmp6 = T;
  } else {
    class T {
      constructor() {
        handlePruneUpdate = function handlePruneUpdate() { /* body not rendered: F148149 */ };
        obj = id(closure_2[9]);
        subscription = obj.subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
        return () => { /* body not rendered: F148150 */ };
      }
    }
  }
  if (cResult[3] === first) {
    class T {
      constructor() {
        handlePruneUpdate = function handlePruneUpdate() { /* body not rendered: F148149 */ };
        obj = id(closure_2[9]);
        subscription = obj.subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
        return () => { /* body not rendered: F148150 */ };
      }
    }
    const effect = obj2.useEffect(tmp6, items2);
    if (cResult[6] === first) {
      class T {
        constructor() {
          handlePruneUpdate = function handlePruneUpdate() { /* body not rendered: F148149 */ };
          obj = id(closure_2[9]);
          subscription = obj.subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
          return () => { /* body not rendered: F148150 */ };
        }
      }
    }
    class R {
      constructor() {
        if (null == count) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[10]);
          tmp3 = guild;
          tmp4 = closure_2;
          updateEstimateV2Result = obj.updateEstimateV2(guild.id, closure_2);
        }
        return;
      }
    }
    const items1 = [guild.id, first, count];
    cResult[6] = first;
    cResult[7] = count;
    cResult[8] = guild.id;
    cResult[9] = R;
    cResult[10] = items1;
  }
  items2 = [guild.id, first];
  cResult[3] = first;
  cResult[4] = guild.id;
  cResult[5] = items2;
}) : (function MembersPruneActionSheetContent(guild) {
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
    let obj = id(first[9]);
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
  const ActionSheet = guild(days[18]).ActionSheet;
  obj2 = { title: intl.string(guild(days[13]).t.zbyz7p) };
  BottomSheetTitleHeader = guild(days[12]).BottomSheetTitleHeader;
  intl = guild(days[13]).intl;
  const obj3 = {
    title: intl2.string(guild(days[13]).t.YccTvK),
    defaultValue: days,
    onChange: function handleDaysChange(arg0) {
      const tmp = first !== arg0 && null != id;
      if (tmp) {
        closure_3(arg0);
      }
    },
    hasIcons: false,
    children: items2
  };
  const TableRadioGroup = guild(days[15]).TableRadioGroup;
  intl2 = guild(days[13]).intl;
  const obj4 = { value: 7, label: intl3.formatToPlainString(guild(days[13]).t.FM1dHS, { days: 7 }) };
  const TableRadioRow = guild(days[14]).TableRadioRow;
  intl3 = guild(days[13]).intl;
  items2 = [closure_11(TableRadioRow, obj4), ];
  const obj5 = { value: 30, label: intl4.formatToPlainString(guild(days[13]).t.FM1dHS, { days: 30 }) };
  const TableRadioRow2 = guild(days[14]).TableRadioRow;
  intl4 = guild(days[13]).intl;
  items2[1] = closure_11(TableRadioRow2, obj5);
  items3 = [closure_12(TableRadioGroup, obj3), , ];
  const Text = guild(days[16]).Text;
  const intl5 = guild(days[13]).intl;
  const format = intl5.format;
  const t = guild(days[13]).t;
  const tmp10 = isLoading ? t["98cHOp"] : t.f13az9;
  const tmp6 = closure_12;
  if (num == null) {
    num = -1;
  }
  const obj6 = { variant: "text-sm/medium", children: format(tmp10, { members: num, days }) };
  items3[1] = closure_11(Text, obj6);
  const obj7 = {
    variant: "destructive",
    onPress: function handlePrune() {
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
    text: intl6.string(guild(days[13]).t["2mIlKQ"])
  };
  const Button = tmp7(tmp8[17]).Button;
  intl6 = tmp7(tmp8[13]).intl;
  items3[2] = closure_11(Button, obj7);
  return tmp6(ActionSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MembersPruneActionSheet(guild) {
  let first;
  let tmp11;
  let tmp12;
  let tmp8;
  let tmp9;
  let tmp = guild;
  let tmp2 = dependencyMap;
  let obj = guild(576);
  const cResult = obj.c(9);
  guild = guild.guild;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore, UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild) {
    const fn = function u() {
      const canPruneGuildMembers = MemberSafetyPermissionsUtils.canPruneGuildMembers;
      MemberSafetyPermissionsUtils;
      const tmp2 = guild;
      guild = GuildStore.getGuild(guild.id);
      if (guild == null) {
        guild = tmp2;
      }
      return canPruneGuildMembers(guild, UserStore.getCurrentUser(), PermissionStore);
    };
    const items1 = [guild];
    cResult[1] = guild;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] !== stateFromStores) {
    class S {
      constructor() {
        const tmp = stateFromStores;
        if (!tmp) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
      }
    }
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = S;
    cResult[6] = items2;
    tmp12 = items2;
    tmp11 = S;
  } else {
    class S {
      constructor() {
        const tmp = stateFromStores;
        if (!tmp) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
      }
    }
    tmp12 = cResult[6];
  }
  const effect = react.useEffect(tmp11, tmp12);
  let tmp14 = null;
  if (stateFromStores) {
    class S {
      constructor() {
        const tmp = stateFromStores;
        if (!tmp) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
      }
    }
    tmp14 = tmp15;
  }
  return tmp14;
}) : (function MembersPruneActionSheet(guild) {
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
    tmp3 = closure_11(closure_13, obj2);
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/guild_settings/native/MembersPruneActionSheet.tsx");

export default tmp4;
