// Module ID: 9901
// Function ID: 76613
// Name: GuildIconWithChannelTypeSizes
// Dependencies: []
// Exports: GuildIconWithChannelType

// Module 9901 (GuildIconWithChannelTypeSizes)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = { SMALL_32: "SMALL_32" };
obj = {};
obj = { guildIconSize: arg1(dependencyMap[3]).GuildIconSizes.XSMALL };
obj[obj.SMALL_32] = obj;
const tmp2 = arg1(dependencyMap[2]);
const obj1 = {};
const obj4 = arg1(dependencyMap[4]);
obj1.typeIconWrapper = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(dependencyMap[5]).radii.round, width: 20 };
let closure_8 = obj4.createStyles(obj1);
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(dependencyMap[5]).radii.round, width: 20 };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild/native/GuildIconWithChannelType.tsx");

export const GuildIconWithChannelTypeSizes = obj;
export const GuildIconWithChannelType = function GuildIconWithChannelType(arg0) {
  let channel;
  let guildIconSize;
  let size;
  let tmp;
  let typeIconSize;
  let obj = { tile_position: "spring", http: 0.4, REDESIGN_INPUT_CONTROL_ACTIVE_BG: 1 };
  ({ aria-label: tmp, size, channel } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  ({ guildIconSize, typeIconSize } = obj[size]);
  const arg1 = typeIconSize;
  const typeIconPadding = tmp5.typeIconPadding;
  const importDefault = typeIconPadding;
  const gap = tmp5.gap;
  const tmp6 = arg1(dependencyMap[3]).ImageSizes[guildIconSize];
  const dependencyMap = tmp6;
  const sum = typeIconSize + 2 * typeIconPadding;
  const React = sum;
  const sum1 = 0.5 + gap / tmp6;
  const items = [tmp6, sum];
  const items1 = [typeIconPadding, sum];
  const memo = React.useMemo(() => {
    const items = [tmp6, sum];
    return items;
  }, items);
  const items2 = [typeIconSize];
  const memo1 = React.useMemo(() => ({ width: sum, height: sum, padding: typeIconPadding }), items1);
  const memo2 = React.useMemo(() => ({ width: typeIconSize, height: typeIconSize }), items2);
  let obj1 = arg1(dependencyMap[6]);
  const channelIcon = obj1.getChannelIcon(channel);
  obj = { aria-label: tmp, shape: arg1(dependencyMap[8]).CutoutShape.Circle, size: memo, gap, depthX: sum1, depthY: sum1 };
  obj = {};
  const tmp4 = callback3();
  const merged1 = Object.assign(merged);
  obj["size"] = guildIconSize;
  const items3 = [callback(importDefault(dependencyMap[3]), obj), ];
  obj1 = { style: items4, children: callback(arg1(dependencyMap[9]).Icon, { style: items5, source: channelIcon }) };
  const items4 = [tmp4.typeIconWrapper, memo1];
  const items5 = [memo2];
  items3[1] = callback(View, obj1);
  obj.children = items3;
  return callback2(arg1(dependencyMap[7]).Pile, obj);
};
