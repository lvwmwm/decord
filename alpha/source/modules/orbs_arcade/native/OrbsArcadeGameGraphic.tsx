// Module ID: 17030
// Function ID: 17031
// Name: OrbsArcadeGameGraphic
// Dependencies: [19, 17, 21, 5014, 575, 5717, 2]
// Exports: default

// Module 17030 (OrbsArcadeGameGraphic)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { graphic: obj2, graphicImage: { width: "100%", height: "100%" } };
obj2 = { width: nativeDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH, maxWidth: "100%", alignSelf: "center", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameGraphic.tsx");

export default function OrbsArcadeGameGraphic(asset) {
  asset = asset.asset;
  const tmp = closure_4();
  return <View style={tmp.graphic}>{null}</View>;
};
