// Module ID: 15185
// Function ID: 114516
// Name: MembersPruneActionSheetContent
// Dependencies: [45154304, 43581440, 516882432, 465502208, 124780544, 516554752, 339738624, 83427328, 556793856, 79429632, 251658240, 339869696, 995557376, 356712448, 131072, 670040064, 31, 27, 1348, 5185]
// Exports: default

// Module 15185 (MembersPruneActionSheetContent)
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO";

function MembersPruneActionSheetContent(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const importDefault = guild.id;
  const tmp = callback(React.useState(7), 2);
  const first = tmp[0];
  const dependencyMap = first;
  const callback = tmp[1];
  const tmp3 = callback2(guild.id, first, []);
  const count = tmp3.count;
  const React = count;
  const items = [guild.id, first];
  const effect = React.useEffect(() => {
    function handlePruneUpdate(guildId) {
      if (guildId.guildId === handlePruneUpdate.id) {
        if (guildId.prune.isPreview) {
          const _Number = Number;
          callback2(guildId.guildId, guildId.prune.days, guildId.prune.includeRoles, Number(guildId.prune.pruneCount), guildId.prune.isFinished);
        }
      }
    }
    const guild = handlePruneUpdate;
    const subscription = id(first[7]).subscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
    return () => {
      callback(closure_2[7]).unsubscribe("GUILD_PRUNE_UPDATE", handlePruneUpdate);
    };
  }, items);
  const items1 = [guild.id, first, count];
  const effect1 = React.useEffect(() => {
    if (null == count) {
      id(first[8]).updateEstimateV2(guild.id, first);
      const obj = id(first[8]);
    }
  }, items1);
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.title = intl.string(arg1(dependencyMap[11]).t.zbyz7p);
  obj.header = callback3(arg1(dependencyMap[10]).BottomSheetTitleHeader, obj);
  obj = {};
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.title = intl2.string(arg1(dependencyMap[11]).t.YccTvK);
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
  const intl3 = arg1(dependencyMap[11]).intl;
  obj1.label = intl3.formatToPlainString(arg1(dependencyMap[11]).t.FM1dHS, { days: 7 });
  const items2 = [callback3(arg1(dependencyMap[13]).TableRadioRow, obj1), ];
  const obj2 = { value: 30 };
  const intl4 = arg1(dependencyMap[11]).intl;
  obj2.label = intl4.formatToPlainString(arg1(dependencyMap[11]).t.FM1dHS, { days: 30 });
  items2[1] = callback3(arg1(dependencyMap[13]).TableRadioRow, obj2);
  obj.children = items2;
  const items3 = [callback4(arg1(dependencyMap[12]).TableRadioGroup, obj), , ];
  const obj3 = { variant: "text-sm/medium" };
  const intl5 = arg1(dependencyMap[11]).intl;
  const t = arg1(dependencyMap[11]).t;
  const obj4 = {};
  let num = -1;
  if (null != count) {
    num = count;
  }
  obj4.members = num;
  obj4.days = first;
  obj3.children = intl5.format(tmp3.isLoading ? t.98cHOp : t.f13az9, obj4);
  items3[1] = callback3(arg1(dependencyMap[14]).Text, obj3);
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
        callback2();
        const obj2 = id(first[16]);
      }
    }
  };
  const intl6 = arg1(dependencyMap[11]).intl;
  obj5.text = intl6.string(arg1(dependencyMap[11]).t.2mIlKQ);
  items3[2] = callback3(arg1(dependencyMap[15]).Button, obj5);
  obj.children = items3;
  return callback4(arg1(dependencyMap[9]).ActionSheet, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ usePrunePreview: closure_5, setPrunePreview: closure_6, clearAllPrunePreviews: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
const result = ACTION_SHEET_START_HEIGHT_RATIO.fileFinishedImporting("modules/guild_settings/native/MembersPruneActionSheet.tsx");

export default function MembersPruneActionSheet(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_8, closure_9, closure_10];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = guild.getGuild(guild.id);
    return guild(closure_2[18]).canPruneGuildMembers(guild, currentUser.getCurrentUser(), closure_9);
  }, items1);
  const importDefault = stateFromStores;
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (!stateFromStores) {
      stateFromStores(closure_2[16]).hideActionSheet();
      const obj = stateFromStores(closure_2[16]);
    }
  }, items2);
  let tmp3 = null;
  if (stateFromStores) {
    obj = { guild };
    tmp3 = callback3(MembersPruneActionSheetContent, obj);
  }
  return tmp3;
};
