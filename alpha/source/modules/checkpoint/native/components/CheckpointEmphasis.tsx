// Module ID: 16003
// Function ID: 16004
// Name: CheckpointEmphasis
// Dependencies: [19, 17, 5437, 21, 1383, 15986, 5092, 587, 558, 576, 5386, 10514, 7576, 5088, 2]

// Module 16003 (CheckpointEmphasis)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import useFontScale from "useFontScale" /* 5386 */;
import CheckpointConstants from "CheckpointConstants" /* 5437 */;
import inlineStyles from "inlineStyles" /* 7576 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10514 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 15986 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ StyleSheet: c3, View: closure_4 } = react_native);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let num = 6;
if (PlatformUtils.isIOS()) {
  num = 2;
}
const points = CheckpointCustomizationUtils.getChamferedRectPoints(75, 22, 5.5);
let createStyles = createStyles_mod;
let obj = { container: obj2, emphasis: { flexDirection: "row", alignItems: "center" }, text: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_6 };
createStyles = createStyles.createStyles;
obj3 = { color: "black", textTransform: "uppercase", paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_6, fontSize: 14, lineHeight: 19 };
let closure_10 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointEmphasis(arg0) {
  let children;
  let fill;
  let items;
  let items1;
  let obj4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(17);
  ({ children, fill } = arg0);
  if (undefined === fill) {
    fill = CHECKPOINT_PRIMARY;
  }
  const tmp4 = closure_10();
  const tmpResult = useFontScale;
  const fontScale = tmpResult.useFontScale();
  const tmpResult2 = useScaledTextLineHeight;
  const result = num * tmpResult2.scaleLineHeight(14, fontScale) / 14;
  if (cResult[0] !== result) {
    const obj2 = { transform: items };
    items = [{ translateY: result }];
    const obj3 = { translateY: result };
    cResult[0] = result;
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp4.container) {
    let tmp8;
    let tmp9;
    if (cResult[3] === tmp7) {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== fill) {
      size = { style: _false.absoluteFill, width: "100%", height: "100%", viewBox: "0 0 75 22", preserveAspectRatio: "none", children: metroRequire(inlineStyles.Polygon, obj4) };
      obj4 = { points, fill };
      const tmp12 = inlineStylesDefault;
      const tmp15 = metroRequire(tmp12, size);
      cResult[5] = fill;
      cResult[6] = tmp15;
      tmp9 = tmp15;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === children) {
      let tmp16;
      if (cResult[8] === tmp4.text) {
        tmp16 = cResult[9];
      }
      if (cResult[10] === tmp4.emphasis) {
        if (cResult[11] === tmp9) {
          let tmp19;
          if (cResult[12] === tmp16) {
            tmp19 = cResult[13];
          }
          if (cResult[14] === tmp8) {
            let tmp23;
            if (cResult[15] === tmp19) {
              tmp23 = cResult[16];
            }
            return tmp23;
          }
          const obj5 = { style: tmp8, children: tmp19 };
          const tmp26 = metroRequire(React3, obj5);
          cResult[14] = tmp8;
          cResult[15] = tmp19;
          cResult[16] = tmp26;
          tmp23 = tmp26;
        }
      }
      const obj6 = { style: tmp4.emphasis, children: items1 };
      items1 = [tmp9, tmp16];
      const tmp22 = metroImportDefault(React3, obj6);
      cResult[10] = tmp4.emphasis;
      cResult[11] = tmp9;
      cResult[12] = tmp16;
      cResult[13] = tmp22;
      tmp19 = tmp22;
    }
    const obj7 = { variant: "experimental/mono-md/bold", style: tmp4.text, lineClamp: 1, children };
    const tmp18 = metroRequire(Text_Text.Text, obj7);
    cResult[7] = children;
    cResult[8] = tmp4.text;
    cResult[9] = tmp18;
    tmp16 = tmp18;
  }
  const items2 = [tmp4.container, tmp7];
  cResult[2] = tmp4.container;
  cResult[3] = tmp7;
  cResult[4] = items2;
  tmp8 = items2;
}) : (function CheckpointEmphasis(children) {
  let items;
  let items1;
  let items2;
  let obj6;
  let obj7;
  let fill = children.fill;
  children = children.children;
  if (fill === undefined) {
    fill = CHECKPOINT_PRIMARY;
  }
  const tmp = closure_10();
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj3 = { style: items, children: metroImportDefault(React3, obj6) };
  items = [tmp.container, ];
  const obj4 = { transform: items1 };
  const obj2 = useScaledTextLineHeight;
  items1 = [{ translateY: num * obj2.scaleLineHeight(14, fontScale) / 14 }];
  items[1] = obj4;
  obj6 = { style: tmp.emphasis, children: items2 };
  size = { style: _false.absoluteFill, width: "100%", height: "100%", viewBox: "0 0 75 22", preserveAspectRatio: "none", children: metroRequire(inlineStyles.Polygon, obj7) };
  ({ translateY: num * obj2.scaleLineHeight(14, fontScale) / 14 });
  obj7 = { points, fill };
  const tmp3 = inlineStylesDefault;
  items2 = [metroRequire(tmp3, size), ];
  const obj8 = { variant: "experimental/mono-md/bold", style: tmp.text, lineClamp: 1, children };
  items2[1] = metroRequire(Text_Text.Text, obj8);
  return metroRequire(React3, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointEmphasis.tsx");

export default tmp6;
