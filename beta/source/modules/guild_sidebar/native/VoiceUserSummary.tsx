// Module ID: 15762
// Function ID: 15763
// Name: VoiceUserSummary
// Dependencies: [19, 17, 21, 1177, 4836, 7298, 7297, 5411, 5415, 2]

// Module 15762 (VoiceUserSummary)
import react_native from "react-native" /* 17 */;
import native from "native" /* 1177 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7298 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let guildId;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { direction: native.CutoutDirection.RIGHT, inset: -2 };
let closure_6 = Object.freeze(obj);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40 }, containerNoPadding: { flexDirection: "row", alignItems: "center", height: 40 }, iconContainer: { height: 40 }, redesignChannelIcon: { marginRight: 4 }, overflow: { height: 20, paddingHorizontal: 4, paddingVertical: 0, display: "flex", flexDirection: "row", alignItems: "center" }, transparentBorder: { borderColor: "transparent" } });
const memoResult = react.memo((guildId) => {
  let items;
  let items2;
  let max;
  let noPadding;
  let renderIcon;
  let stageIcon;
  let users;
  guildId = guildId.guildId;
  ({ users, max, renderIcon, noPadding, stageIcon } = guildId);
  let tmp = closure_7();
  let tmp2 = dependencyMap;
  let transparentBorder = null;
  if (useIsUsingClientThemeDefault()) {
    transparentBorder = tmp.transparentBorder;
  }
  let obj = guildId(7297);
  const obj2 = { style: items, children: null };
  items = [noPadding ? tmp.containerNoPadding : tmp.container, obj.useClientThemesOverride()];
  if (renderIcon) {
    let VoiceNormalIcon;
    if (stageIcon) {
      VoiceNormalIcon = tmp4(5411).StageIcon;
    }
    const obj3 = { size: "sm", color: "channel-icon", style: tmp.redesignChannelIcon };
    const items1 = [closure_4(VoiceNormalIcon, obj3), ];
    const obj4 = {
      offsetAmount: -6,
      style: tmp.iconContainer,
      overflowStyle: items2,
      overflowComponent: guildId(1177).OverflowTextSmall,
      items: users,
      max,
      renderItem(user, arg1) {
          let tmp2;
          const obj = { user, guildId, size: native.AvatarSizes.XSMALL_20, cutout: tmp2 };
          const CutoutableAvatarImage = native.CutoutableAvatarImage;
          tmp2 = undefined;
          const tmp = React3;
          if (!arg1) {
            tmp2 = closure_6;
          }
          return tmp(CutoutableAvatarImage, obj);
        }
    };
    items2 = [tmp.overflow, transparentBorder];
    const SummarizedIconRow = tmp4(1177).SummarizedIconRow;
    items1[1] = closure_4(SummarizedIconRow, obj4);
    obj2.children = items1;
    return tmp5(tmp6, obj2);
  }
  VoiceNormalIcon = tmp4(5415).VoiceNormalIcon;
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserSummary.tsx");

export default memoResult;
export const VOICE_USER_SUMMARY_HEIGHT = 40;
