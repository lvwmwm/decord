// Module ID: 15982
// Function ID: 15983
// Name: CheckpointButton
// Dependencies: [17, 4983, 21, 4758, 580, 558, 568, 15965, 2]

// Module 15982 (CheckpointButton)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import CheckpointTextDefault from "CheckpointText" /* 15965 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 4983 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4758 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({ CHECKPOINT_PRIMARY: hasOwnProperty, CHECKPOINT_BUTTON_BORDER, CHECKPOINT_BUTTON_SHADOW } = CheckpointConstants);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: { justifyContent: "center", marginRight: -4, marginBottom: -4, paddingRight: 4, paddingBottom: 4 }, backdrop: { position: "absolute", top: 4, left: 4, right: 0, bottom: 0, backgroundColor: CHECKPOINT_BUTTON_SHADOW }, button: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_BUTTON_BORDER, height: 48 }, label: { textTransform: "uppercase" } };
let closure_8 = createStyles.createStyles(obj);
let obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_BUTTON_BORDER, height: 48 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ onPress, Icon, label } = arg0);
  const tmp3 = closure_8();
  if (cResult[0] !== tmp3.backdrop) {
    const obj2 = { style: tmp3.backdrop };
    const tmp7 = timestampProducer(React4, obj2);
    cResult[0] = tmp3.backdrop;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== Icon) {
    let tmp10 = null != Icon;
    if (tmp10) {
      const obj3 = { color, size: "sm" };
      tmp10 = timestampProducer(Icon, obj3);
    }
    cResult[2] = Icon;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === label) {
    if (cResult[5] === tmp3.label) {
      let tmp13 = cResult[6];
    }
    if (cResult[7] === label) {
      if (cResult[8] === onPress) {
        if (cResult[9] === tmp3.button) {
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp13) {
              let tmp17 = cResult[12];
            }
            if (cResult[13] === tmp3.container) {
              if (cResult[14] === tmp4) {
                if (cResult[15] === tmp17) {
                  let tmp21 = cResult[16];
                }
                return tmp21;
              }
            }
            const obj4 = { style: tmp3.container, children: null };
            const items = [tmp4, tmp17];
            obj4.children = items;
            const tmp24 = React5(React4, obj4);
            cResult[13] = tmp3.container;
            cResult[14] = tmp4;
            cResult[15] = tmp17;
            cResult[16] = tmp24;
            tmp21 = tmp24;
          }
        }
      }
    }
    const obj5 = { style: tmp3.button, onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
    const items1 = [tmp8, tmp13];
    obj5.children = items1;
    const tmp20 = React5(React3, obj5);
    cResult[7] = label;
    cResult[8] = onPress;
    cResult[9] = tmp3.button;
    cResult[10] = tmp8;
    cResult[11] = tmp13;
    cResult[12] = tmp20;
    tmp17 = tmp20;
  }
  let tmp14 = null != label;
  if (tmp14) {
    const obj6 = { variant: "text-lg/medium", style: tmp3.label, children: label };
    tmp14 = timestampProducer(CheckpointTextDefault, obj6);
  }
  cResult[4] = label;
  cResult[5] = tmp3.label;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : ((onPress) => {
  ({ Icon, label } = onPress);
  const tmp = closure_8();
  const obj = { style: tmp.container, children: null };
  const items = [timestampProducer(React4, { style: tmp.backdrop }), ];
  const obj3 = { style: tmp.button, onPress: onPress.onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
  let tmp4Result = null != Icon;
  if (tmp4Result) {
    const obj4 = { color, size: "sm" };
    tmp4Result = tmp4(Icon, obj4);
  }
  const items1 = [tmp4Result, ];
  let tmp4Result2 = null != label;
  if (tmp4Result2) {
    const obj5 = { variant: "text-lg/medium", style: tmp.label, children: label };
    tmp4Result2 = tmp4(CheckpointTextDefault, obj5);
  }
  items1[1] = tmp4Result2;
  obj3.children = items1;
  items[1] = React5(React3, obj3);
  obj.children = items;
  return React5(React4, obj);
});
