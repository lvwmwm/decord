// Module ID: 15027
// Function ID: 114482
// Name: VOICE_USER_SUMMARY_HEIGHT
// Dependencies: [31, 27, 33, 1273, 4130, 8869, 8868, 4654, 4658, 2]

// Module 15027 (VOICE_USER_SUMMARY_HEIGHT)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importAllResult from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = Object.freeze({ direction: require("Button").CutoutDirection.RIGHT, inset: -2 });
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40 }, containerNoPadding: { flexDirection: "row", alignItems: "center", height: 40 }, iconContainer: { height: 40 }, redesignChannelIcon: { marginRight: 4 }, overflow: { height: 20, paddingHorizontal: 4, paddingVertical: 0, display: "flex", flexDirection: "row", alignItems: "center" }, transparentBorder: { borderColor: "transparent" } });
let obj = { direction: require("Button").CutoutDirection.RIGHT, inset: -2 };
const memoResult = importAllResult.memo((guildId) => {
  let max;
  let noPadding;
  let renderIcon;
  let stageIcon;
  let users;
  guildId = guildId.guildId;
  ({ users, max, renderIcon, noPadding, stageIcon } = guildId);
  const tmp = callback2();
  let transparentBorder = null;
  if (importDefault(8869)()) {
    transparentBorder = tmp.transparentBorder;
  }
  let obj = guildId(8868);
  obj = {};
  const items = [noPadding ? tmp.containerNoPadding : tmp.container, obj.useClientThemesOverride()];
  obj.style = items;
  if (renderIcon) {
    if (stageIcon) {
      let VoiceNormalIcon = guildId(4654).StageIcon;
    }
    obj = { size: "sm", color: "channel-icon", style: tmp.redesignChannelIcon };
    const items1 = [tmp5(VoiceNormalIcon, obj), ];
    const obj1 = { offsetAmount: -6, style: tmp.iconContainer };
    const items2 = [tmp.overflow, transparentBorder];
    obj1.overflowStyle = items2;
    obj1.overflowComponent = guildId(1273).OverflowTextSmall;
    obj1.items = users;
    obj1.max = max;
    obj1.renderItem = function renderItem(user) {
      const obj = { user, guildId, size: guildId(outer1_2[3]).AvatarSizes.XSMALL_20 };
      let tmp2;
      if (!arg1) {
        tmp2 = outer1_6;
      }
      obj.cutout = tmp2;
      return outer1_4(guildId(outer1_2[3]).CutoutableAvatarImage, obj);
    };
    items1[1] = callback(guildId(1273).SummarizedIconRow, obj1);
    obj.children = items1;
    return tmp3(tmp4, obj);
  }
  VoiceNormalIcon = guildId(4658).VoiceNormalIcon;
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_sidebar/native/VoiceUserSummary.tsx");

export default memoResult;
export const VOICE_USER_SUMMARY_HEIGHT = 40;
