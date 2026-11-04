// Module ID: 16447
// Function ID: 16448
// Name: OrbsArcadeGameGraphic
// Dependencies: [19, 17, 21, 5003, 587, 558, 576, 5701, 2]

// Module 16447 (OrbsArcadeGameGraphic)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5701 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { graphic: obj2, graphicImage: { width: "100%", height: "100%" } };
obj2 = { width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_5 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameGraphic(asset) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(8);
  asset = asset.asset;
  const tmp3 = closure_5();
  if (cResult[0] !== asset) {
    const obj2 = { uri: asset };
    cResult[0] = asset;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp3.graphicImage) {
    let tmp5;
    if (cResult[3] === tmp4) {
      tmp5 = cResult[4];
    }
    if (cResult[5] === tmp3.graphic) {
      let tmp7;
      if (cResult[6] === tmp5) {
        tmp7 = cResult[7];
      }
      return tmp7;
    }
    const tmp10 = <View style={tmp3.graphic}>{tmp5}</View>;
    cResult[5] = tmp3.graphic;
    cResult[6] = tmp5;
    cResult[7] = tmp10;
    tmp7 = tmp10;
  }
  const tmp6 = jsx(FastImageDefault, { source: tmp4, style: tmp3.graphicImage, resizeMode: "cover", accessible: false });
  cResult[2] = tmp3.graphicImage;
  cResult[3] = tmp4;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : (function OrbsArcadeGameGraphic(asset) {
  asset = asset.asset;
  const tmp = closure_5();
  return <View style={tmp.graphic}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameGraphic.tsx");

export default tmp3;
