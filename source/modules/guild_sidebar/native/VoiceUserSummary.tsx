// Module ID: 16052
// Function ID: 16053
// Name: VOICE_USER_SUMMARY_HEIGHT
// Dependencies: [19, 17, 21, 1296, 4481, 7805, 7804, 5058, 5062, 2]

// Module 16052 (VOICE_USER_SUMMARY_HEIGHT)
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7805 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = Object.freeze({ direction: require("Button").CutoutDirection.RIGHT, inset: -2 });
let closure_7 = createCacheKey.createStyles({ container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40 }, containerNoPadding: { flexDirection: "row", alignItems: "center", height: 40 }, iconContainer: { height: 40 }, redesignChannelIcon: { marginRight: 4 }, overflow: { height: 20, paddingHorizontal: 4, paddingVertical: 0, display: "flex", flexDirection: "row", alignItems: "center" }, transparentBorder: { borderColor: "transparent" } });
let obj = { direction: require("Button").CutoutDirection.RIGHT, inset: -2 };
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  ({ users, max, renderIcon, noPadding, stageIcon } = guildId);
  const tmp = callback();
  let transparentBorder = null;
  if (useIsUsingClientThemeDefault()) {
    transparentBorder = tmp.transparentBorder;
  }
  let obj = guildId(7804);
  obj = { style: null, children: null };
  const items = [noPadding ? tmp.containerNoPadding : tmp.container, obj.useClientThemesOverride()];
  obj[0] = items;
  if (renderIcon) {
    if (stageIcon) {
      let VoiceNormalIcon = tmp4(5058).StageIcon;
    }
    obj = { size: "sm", color: "channel-icon", style: null };
    obj[2] = tmp.redesignChannelIcon;
    const items1 = [tmp7(VoiceNormalIcon, obj), ];
    obj1 = { offsetAmount: -6, style: null, overflowStyle: null, overflowComponent: null, items: null, max: null, renderItem: null };
    obj1[1] = tmp.iconContainer;
    const items2 = [tmp.overflow, transparentBorder];
    obj1[2] = items2;
    obj1[3] = tmp4(1296).OverflowTextSmall;
    obj1[4] = users;
    obj1[5] = max;
    obj1[6] = function renderItem(user) {
      const obj = { user, guildId, size: guildId(closure_1_2[3]).AvatarSizes.XSMALL_20, cutout: null };
      let tmp2;
      if (!arg1) {
        tmp2 = closure_1_6;
      }
      obj[3] = tmp2;
      return closure_1_4(guildId(closure_1_2[3]).CutoutableAvatarImage, obj);
    };
    items1[1] = tmp7(tmp4(1296).SummarizedIconRow, obj1);
    obj[1] = items1;
    return tmp5(tmp6, obj);
  }
  VoiceNormalIcon = tmp4(5062).VoiceNormalIcon;
});
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/VoiceUserSummary.tsx");

export default memoResult;
export const VOICE_USER_SUMMARY_HEIGHT = 40;
