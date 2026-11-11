// Module ID: 10697
// Function ID: 10698
// Name: GuildPowerupsBoostInfo
// Dependencies: [17, 5461, 21, 5243, 575, 10698, 9915, 5866, 2]
// Exports: default

// Module 10697 (GuildPowerupsBoostInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5461 */;
import Text_Text from "Text/Text" /* 5866 */;
import BoostGemIcon2 from "BoostGemIcon" /* 9915 */;
import getGuildPowerupsBoostInfoText from "getGuildPowerupsBoostInfoText" /* 10698 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const BoostInfoType = GuildPowerupsConstants.BoostInfoType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, headerContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", display: "flex" } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostInfo.tsx");

export default function GuildPowerupsBoostInfo(arg0) {
  let TEXT_MUTED;
  let count;
  let items;
  let items1;
  let type;
  ({ count, type } = arg0);
  const tmp = closure_7();
  const obj = getGuildPowerupsBoostInfoText;
  const guildPowerupsBoostInfoText = obj.getGuildPowerupsBoostInfoText(count, type);
  const obj2 = { style: tmp.container, accessible: true, accessibilityLabel: "" + count + ", " + guildPowerupsBoostInfoText, children: items1 };
  const obj3 = { style: tmp.headerContainer, importantForAccessibility: "no-hide-descendants", accessible: false, children: items };
  const BoostGemIcon = BoostGemIcon2.BoostGemIcon;
  const tmp8 = BoostInfoType;
  if (type === BoostInfoType.AVAILABLE) {
    TEXT_MUTED = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  } else {
    TEXT_MUTED = nativeDefault.colors.TEXT_MUTED;
  }
  items = [hasOwnProperty(BoostGemIcon, { size: "sm", color: TEXT_MUTED }), ];
  let str = "text-subtle";
  const Text = tmp2(5866).Text;
  if (type === tmp8.AVAILABLE) {
    str = "text-strong";
  }
  items[1] = hasOwnProperty(Text, { variant: "body-lg/semibold", color: str, importantForAccessibility: "no-hide-descendants", children: count });
  items1 = [metroRequire(View, obj3), hasOwnProperty(Text_Text.Text, { variant: "body-sm/normal", color: "text-subtle", importantForAccessibility: "no-hide-descendants", children: guildPowerupsBoostInfoText })];
  return metroRequire(View, obj2);
};
