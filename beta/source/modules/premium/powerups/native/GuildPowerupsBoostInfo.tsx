// Module ID: 12049
// Function ID: 12050
// Name: GuildPowerupsBoostInfo
// Dependencies: [17, 4724, 21, 4836, 576, 6401, 12050, 8678, 4832, 2]
// Exports: default

// Module 12049 (GuildPowerupsBoostInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6401 */;
import BoostGemIcon2 from "BoostGemIcon" /* 8678 */;
import getGuildPowerupsBoostInfoText from "getGuildPowerupsBoostInfoText" /* 12050 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  let str2;
  let type;
  ({ count, type } = arg0);
  const tmp = closure_7();
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsBoostInfo");
  const obj2 = getGuildPowerupsBoostInfoText;
  const guildPowerupsBoostInfoText = obj2.getGuildPowerupsBoostInfoText(count, type);
  const obj3 = { style: tmp.container, accessible: true, accessibilityLabel: "" + count + ", " + guildPowerupsBoostInfoText, children: items1 };
  const obj4 = { style: tmp.headerContainer, importantForAccessibility: "no-hide-descendants", accessible: false, children: items };
  const BoostGemIcon = BoostGemIcon2.BoostGemIcon;
  const tmp9 = BoostInfoType;
  if (type === BoostInfoType.AVAILABLE) {
    TEXT_MUTED = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  } else {
    TEXT_MUTED = nativeDefault.colors.TEXT_MUTED;
  }
  items = [hasOwnProperty(BoostGemIcon, { size: "sm", color: TEXT_MUTED }), ];
  let str = "text-lg/medium";
  const Text = tmp2(4832).Text;
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-lg/semibold";
  }
  const obj5 = { variant: str, color: str2, importantForAccessibility: "no-hide-descendants", children: count };
  str2 = "text-subtle";
  if (type === tmp9.AVAILABLE) {
    str2 = "text-strong";
  }
  items[1] = hasOwnProperty(Text, obj5);
  items1 = [metroRequire(View, obj4), ];
  let str3 = "text-md/normal";
  const Text2 = tmp2(4832).Text;
  if (manaTypeConsolidationExperiment) {
    str3 = "text-sm/normal";
  }
  items1[1] = hasOwnProperty(Text2, { variant: str3, color: "text-subtle", importantForAccessibility: "no-hide-descendants", children: guildPowerupsBoostInfoText });
  return metroRequire(View, obj3);
};
