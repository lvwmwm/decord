// Module ID: 14045
// Function ID: 14046
// Name: GuildPowerupsBoostGem
// Dependencies: [17, 21, 5009, 575, 14046, 2]
// Exports: default

// Module 14045 (GuildPowerupsBoostGem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { boostGemContainer: size };
size = { width: 100, height: 100, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, alignItems: "center", justifyContent: "center", alignSelf: "center" };
let closure_4 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostGem.tsx");

export default function GuildPowerupsBoostGem(arg0) {
  let gemHeight;
  let gemWidth;
  let style;
  ({ style, gemWidth, gemHeight } = arg0);
  const items = [closure_4().boostGemContainer, style];
  return <View style={items}>{null}</View>;
};
