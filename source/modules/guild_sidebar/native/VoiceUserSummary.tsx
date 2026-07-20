// Module ID: 14846
// Function ID: 111892
// Name: VOICE_USER_SUMMARY_HEIGHT
// Dependencies: []

// Module 14846 (VOICE_USER_SUMMARY_HEIGHT)
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_6 = Object.freeze({ direction: arg1(dependencyMap[3]).CutoutDirection.RIGHT, inset: -2 });
const obj = { direction: arg1(dependencyMap[3]).CutoutDirection.RIGHT, inset: -2 };
let closure_7 = arg1(dependencyMap[4]).createStyles({ container: { "Bool(false)": null, "Bool(false)": "0a2944e427275918c323a5aa7d658085", "Bool(false)": "BattlenetNeutralIcon", "Bool(false)": "png" }, containerNoPadding: { "Bool(false)": "venmo.tokenize.desktop.success", "Bool(false)": "<string:24248320>", "Bool(false)": "<string:16777216>" }, iconContainer: { height: 40 }, redesignChannelIcon: { marginRight: 4 }, overflow: { borderTopRightRadius: 0, borderTopLeftRadius: 1072431104, position: -4494, top: 4863, left: 12544, right: 0 }, transparentBorder: { borderColor: "transparent" } });
const obj3 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((guildId) => {
  let max;
  let noPadding;
  let renderIcon;
  let stageIcon;
  let users;
  const arg1 = guildId.guildId;
  ({ users, max, renderIcon, noPadding, stageIcon } = guildId);
  const tmp = callback2();
  let transparentBorder = null;
  if (importDefault(dependencyMap[5])()) {
    transparentBorder = tmp.transparentBorder;
  }
  let obj = arg1(dependencyMap[6]);
  obj = {};
  const items = [noPadding ? tmp.containerNoPadding : tmp.container, obj.useClientThemesOverride()];
  obj.style = items;
  if (renderIcon) {
    if (stageIcon) {
      let VoiceNormalIcon = arg1(dependencyMap[7]).StageIcon;
    }
    obj = { flexDirection: false, alignItems: false, style: tmp.redesignChannelIcon };
    const items1 = [tmp5(VoiceNormalIcon, obj), ];
    const obj1 = { offsetAmount: -6, style: tmp.iconContainer };
    const items2 = [tmp.overflow, transparentBorder];
    obj1.overflowStyle = items2;
    obj1.overflowComponent = arg1(dependencyMap[3]).OverflowTextSmall;
    obj1.items = users;
    obj1.max = max;
    obj1.renderItem = function renderItem(user) {
      const obj = { user, guildId, size: guildId(closure_2[3]).AvatarSizes.XSMALL_20 };
      let tmp2;
      if (!arg1) {
        tmp2 = closure_6;
      }
      obj.cutout = tmp2;
      return closure_4(guildId(closure_2[3]).CutoutableAvatarImage, obj);
    };
    items1[1] = callback(arg1(dependencyMap[3]).SummarizedIconRow, obj1);
    obj.children = items1;
    return tmp3(tmp4, obj);
  }
  VoiceNormalIcon = arg1(dependencyMap[8]).VoiceNormalIcon;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_sidebar/native/VoiceUserSummary.tsx");

export default memoResult;
export const VOICE_USER_SUMMARY_HEIGHT = 40;
