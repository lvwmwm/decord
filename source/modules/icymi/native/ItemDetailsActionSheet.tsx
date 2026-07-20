// Module ID: 15052
// Function ID: 113350
// Name: ItemDetailsActionSheet
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15052 (ItemDetailsActionSheet)
import "result";
import { View } from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = result);
result = {};
result = { height: 1, backgroundColor: require("result").colors.BORDER_SUBTLE };
result.divider = result;
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/icymi/native/ItemDetailsActionSheet.tsx");

export default function ItemDetailsActionSheet(arg0) {
  ({ guildId: closure_0, channelId: closure_1, id: closure_2 } = arg0);
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_1));
  let obj1 = arg1(dependencyMap[8]);
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => guild.getGuild(closure_0));
  let obj2 = arg1(dependencyMap[8]);
  const items2 = [closure_6];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let dehydratedItem = null;
    if (null != closure_2) {
      dehydratedItem = dehydratedItem.getDehydratedItem(closure_2);
    }
    return dehydratedItem;
  });
  const tmp3 = importDefault(dependencyMap[9])(stateFromStores, true);
  if (null != stateFromStores1) {
    obj = { guild: stateFromStores1, size: arg1(dependencyMap[11]).GuildIconSizes.LARGE };
    let tmp6 = callback(importDefault(dependencyMap[11]), obj);
    const tmp13 = importDefault(dependencyMap[11]);
  } else if (null != stateFromStores) {
    obj = { size: arg1(dependencyMap[12]).AvatarSizes.LARGE, channel: stateFromStores };
    tmp6 = callback(arg1(dependencyMap[12]).Avatar, obj);
  }
  let result = null != stateFromStores;
  const tmp5 = importDefault(dependencyMap[10])("show_icymi_debug_scores");
  if (result) {
    result = null != stateFromStores1;
  }
  if (result) {
    let obj5 = arg1(dependencyMap[13]);
    result = obj5.isChannelCustomScoreEligible(stateFromStores);
  }
  obj1 = { Kn: null, ContentInventoryFeedKey: null };
  obj2 = { icon: tmp6, title: tmp3 };
  let name;
  if (null != stateFromStores1) {
    name = stateFromStores1.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  obj2.subtitle = str;
  obj1.header = callback(arg1(dependencyMap[15]).ActionSheetIconHeader, obj2);
  let tmp22 = result;
  if (result) {
    const obj3 = { channel: stateFromStores, guild: stateFromStores1 };
    tmp22 = callback(arg1(dependencyMap[16]).ChannelScoreSettings, obj3);
  }
  const items3 = [tmp22, , ];
  let tmp27Result = null != stateFromStores2 && null != stateFromStores1;
  if (tmp27Result) {
    const obj4 = {};
    if (result) {
      obj5 = { style: tmp15.divider };
      result = callback(View, obj5);
    }
    const items4 = [result, ];
    const obj6 = { guild: stateFromStores1 };
    items4[1] = callback(arg1(dependencyMap[16]).GuildScoreSettings, obj6);
    obj4.children = items4;
    tmp27Result = closure_9(closure_8, obj4);
    const tmp27 = closure_9;
    const tmp28 = closure_8;
  }
  items3[1] = tmp27Result;
  let tmp34 = null;
  if (null != stateFromStores2) {
    tmp34 = null;
    if (tmp5) {
      const obj7 = {};
      const obj8 = { label: `Total Score: ${tmp4.score}` };
      const _JSON = JSON;
      obj8.subLabel = JSON.stringify(stateFromStores2.score_components);
      obj7.children = callback(arg1(dependencyMap[18]).TableRow, obj8);
      tmp34 = callback(arg1(dependencyMap[17]).TableRowGroup, obj7);
    }
  }
  items3[2] = tmp34;
  obj1.children = items3;
  return closure_9(arg1(dependencyMap[14]).ActionSheet, obj1);
};
