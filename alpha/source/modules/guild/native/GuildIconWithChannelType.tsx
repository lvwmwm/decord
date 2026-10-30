// Module ID: 13373
// Function ID: 13374
// Name: GuildIconWithChannelType
// Dependencies: [19, 17, 21, 6951, 5009, 575, 8595, 13374, 9487, 1188, 2]
// Exports: GuildIconWithChannelType

// Module 13373 (GuildIconWithChannelType)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import GuildIcon from "GuildIcon" /* 6951 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8595 */;
import ClipView from "ClipView" /* 9487 */;
import Pile2 from "Pile" /* 13374 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { SMALL_32: "SMALL_32" };
let obj2 = {};
let obj3 = { pileSize: 32, guildIconSize: GuildIcon.GuildIconSizes.XSMALL, typeIconSize: 12, typeIconPadding: 4, gap: 3 };
obj2[obj.SMALL_32] = obj3;
let obj4 = { typeIconWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, width: 20 } };
({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, width: 20 });
let closure_8 = createStyles.createStyles(obj4);
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild/native/GuildIconWithChannelType.tsx");

export const GuildIconWithChannelTypeSizes = obj;
export function GuildIconWithChannelType(arg0) {
  let channel;
  let guildIconSize;
  let items3;
  let items4;
  let tmp;
  let typeIconSize;
  ({ "aria-label": tmp, size, channel } = arg0);
  const merged = Object.assign(arg0, Object.assign({ "aria-label": 0, size: 0, channel: 0 }));
  typeIconSize = undefined;
  ({ guildIconSize, typeIconSize } = obj2[size]);
  const typeIconPadding = tmp4.typeIconPadding;
  const gap = tmp4.gap;
  const tmp3 = closure_8();
  const tmp5 = GuildIcon.ImageSizes[guildIconSize];
  let closure_2 = tmp5;
  const sum = typeIconSize + 2 * typeIconPadding;
  let c3 = sum;
  const sum1 = 0.5 + gap / tmp5;
  let items = [tmp5, sum];
  const items1 = [typeIconPadding, sum];
  const memo = react.useMemo(() => {
    const items = [closure_2, c3];
    return items;
  }, items);
  const items2 = [typeIconSize];
  const memo1 = react.useMemo(() => {
    size = { width: _undefined, height: _undefined, padding: typeIconPadding };
    return size;
  }, items1);
  const memo2 = react.useMemo(() => {
    size = { width: typeIconSize, height: typeIconSize };
    return size;
  }, items2);
  const obj = utils_ChannelUtils;
  const channelIcon = obj.getChannelIcon(channel);
  obj2 = { "aria-label": tmp, shape: ClipView.CutoutShape.Circle, size: memo, gap, depthX: sum1, depthY: sum1, children: items3 };
  const Pile = Pile2.Pile;
  const obj3 = { size: guildIconSize };
  const tmp12 = GuildIconDefault;
  const merged1 = Object.assign(merged);
  items3 = [hasOwnProperty(tmp12, obj3), ];
  const obj4 = { style: items4, children: hasOwnProperty(native.Icon, { style: memo2, source: channelIcon }) };
  items4 = [tmp3.typeIconWrapper, memo1];
  items3[1] = hasOwnProperty(View, obj4);
  return metroRequire(Pile, obj2);
}
