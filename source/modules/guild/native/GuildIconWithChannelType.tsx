// Module ID: 9908
// Function ID: 76654
// Name: GuildIconWithChannelTypeSizes
// Dependencies: [31, 27, 33, 5515, 4130, 689, 4593, 9909, 7873, 1273, 2]
// Exports: GuildIconWithChannelType

// Module 9908 (GuildIconWithChannelTypeSizes)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { SMALL_32: "SMALL_32" };
obj = {};
obj = { pileSize: 32, guildIconSize: require("makeSizeStyle").GuildIconSizes.XSMALL, typeIconSize: 12, typeIconPadding: 4, gap: 3 };
obj[obj.SMALL_32] = obj;
let obj1 = { typeIconWrapper: { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, width: 20 } };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj1);
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, width: 20 };
const result = require("jsxProd").fileFinishedImporting("modules/guild/native/GuildIconWithChannelType.tsx");

export const GuildIconWithChannelTypeSizes = obj;
export const GuildIconWithChannelType = function GuildIconWithChannelType(arg0) {
  let channel;
  let guildIconSize;
  let size;
  let tmp;
  let typeIconSize;
  let obj = { "aria-label": 0, size: 0, channel: 0 };
  ({ aria-label: tmp, size, channel } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  ({ guildIconSize, typeIconSize } = obj[size]);
  const typeIconPadding = tmp5.typeIconPadding;
  const gap = tmp5.gap;
  const tmp6 = typeIconSize(5515).ImageSizes[guildIconSize];
  const dependencyMap = tmp6;
  const sum = typeIconSize + 2 * typeIconPadding;
  const sum1 = 0.5 + gap / tmp6;
  let items = [tmp6, sum];
  const items1 = [typeIconPadding, sum];
  const memo = sum.useMemo(() => {
    const items = [closure_2, result];
    return items;
  }, items);
  const items2 = [typeIconSize];
  const memo1 = sum.useMemo(() => ({ width: result, height: result, padding: typeIconPadding }), items1);
  const memo2 = sum.useMemo(() => ({ width: typeIconSize, height: typeIconSize }), items2);
  let obj1 = typeIconSize(4593);
  const channelIcon = obj1.getChannelIcon(channel);
  obj = { "aria-label": tmp, shape: typeIconSize(7873).CutoutShape.Circle, size: memo, gap, depthX: sum1, depthY: sum1 };
  obj = {};
  const tmp4 = callback3();
  const merged1 = Object.assign(merged);
  obj["size"] = guildIconSize;
  const items3 = [callback(typeIconPadding(5515), obj), ];
  obj1 = { style: items4, children: callback(typeIconSize(1273).Icon, { style: items5, source: channelIcon }) };
  items4 = [tmp4.typeIconWrapper, memo1];
  items5 = [memo2];
  items3[1] = callback(View, obj1);
  obj.children = items3;
  return callback2(typeIconSize(9909).Pile, obj);
};
