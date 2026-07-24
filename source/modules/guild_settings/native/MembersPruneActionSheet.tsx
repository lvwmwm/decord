// Module ID: 15348
// Function ID: 117008
// Name: MembersPruneActionSheetContent
// Dependencies: [57, 31, 15349, 1838, 3758, 1849, 33, 686, 15350, 5498, 5186, 1212, 7654, 7653, 4126, 4543, 4098, 566, 5646, 2]
// Exports: default

// Module 15348 (MembersPruneActionSheetContent)
import _slicedToArray from "_slicedToArray";
import result from "result";
import getPrunePreviewKey from "getPrunePreviewKey";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";

let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function MembersPruneActionSheetContent(guild) {
  guild = guild.guild;
  const id = guild.id;
  let tmp = callback(count.useState(7), 2);
  const first = tmp[0];
  callback = tmp[1];
  const tmp3 = callback2(guild.id, first, []);
  count = tmp3.count;
  const items = [guild.id, first];
  const effect = count.useEffect(() => {
    function handlePruneUpdate(guildId) {
      if (guildId.guildId === handlePruneUpdate.id) {
        if (guildId.prune.isPreview) {
          const _Number = Number;
          outer2_6(guildId.guildId, guildId.prune.days, guildId.prune.includeRoles, Number(guildId.prune.pruneCount), guildId.prune.isFinished);
        }
      }
    }
    const subscription = id(first[7]).subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
    return () => {
      id(first[7]).unsubscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
    };
  }, items);
  const items1 = [guild.id, first, count];
  const effect1 = count.useEffect(() => {
    if (null == count) {
      id(first[8]).updateEstimateV2(guild.id, first);
      const obj = id(first[8]);
    }
  }, items1);
  let obj = {};
  obj = {};
  const intl = guild(first[11]).intl;
  obj.title = intl.string(guild(first[11]).t.zbyz7p);
  obj.header = callback3(guild(first[10]).BottomSheetTitleHeader, obj);
  obj = {};
  const intl2 = guild(first[11]).intl;
  obj.title = intl2.string(guild(first[11]).t.YccTvK);
  obj.defaultValue = first;
  obj.onChange = function onChange(arg0) {
    let tmp = first !== arg0;
    if (tmp) {
      tmp = null != id;
    }
    if (tmp) {
      callback(arg0);
    }
  };
  obj.hasIcons = false;
  const obj1 = { value: 7 };
  const intl3 = guild(first[11]).intl;
  obj1.label = intl3.formatToPlainString(guild(first[11]).t.FM1dHS, { days: 7 });
  const items2 = [callback3(guild(first[13]).TableRadioRow, obj1), ];
  let obj2 = { value: 30 };
  const intl4 = guild(first[11]).intl;
  obj2.label = intl4.formatToPlainString(guild(first[11]).t.FM1dHS, { days: 30 });
  items2[1] = callback3(guild(first[13]).TableRadioRow, obj2);
  obj.children = items2;
  const items3 = [callback4(guild(first[12]).TableRadioGroup, obj), , ];
  const obj3 = { variant: "text-sm/medium" };
  const intl5 = guild(first[11]).intl;
  const t = guild(first[11]).t;
  const obj4 = {};
  let num = -1;
  if (null != count) {
    num = count;
  }
  obj4.members = num;
  obj4.days = first;
  obj3.children = intl5.format(tmp3.isLoading ? t["98cHOp"] : t.f13az9, obj4);
  items3[1] = callback3(guild(first[14]).Text, obj3);
  const obj5 = {
    variant: "destructive",
    onPress() {
      let tmp = null != id;
      if (tmp) {
        tmp = null != first;
      }
      if (tmp) {
        id(first[8]).prune(id, first);
        const obj = id(first[8]);
        id(first[16]).hideActionSheet();
        outer1_7();
        const obj2 = id(first[16]);
      }
    }
  };
  const intl6 = guild(first[11]).intl;
  obj5.text = intl6.string(guild(first[11]).t["2mIlKQ"]);
  items3[2] = callback3(guild(first[15]).Button, obj5);
  obj.children = items3;
  return callback4(guild(first[9]).ActionSheet, obj);
}
({ usePrunePreview: closure_5, setPrunePreview: closure_6, clearAllPrunePreviews: closure_7 } = getPrunePreviewKey);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const result = require("getPrunePreviewKey").fileFinishedImporting("modules/guild_settings/native/MembersPruneActionSheet.tsx");

export default function MembersPruneActionSheet(guild) {
  guild = guild.guild;
  let obj = guild(566);
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct, closure_10];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    guild = outer1_8.getGuild(guild.id);
    return guild(outer1_2[18]).canPruneGuildMembers(guild, outer1_10.getCurrentUser(), outer1_9);
  }, items1);
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (!stateFromStores) {
      stateFromStores(outer1_2[16]).hideActionSheet();
      const obj = stateFromStores(outer1_2[16]);
    }
  }, items2);
  let tmp3 = null;
  if (stateFromStores) {
    obj = { guild };
    tmp3 = callback3(MembersPruneActionSheetContent, obj);
  }
  return tmp3;
};
