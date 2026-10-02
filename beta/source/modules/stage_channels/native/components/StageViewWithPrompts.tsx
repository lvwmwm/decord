// Module ID: 9375
// Function ID: 9376
// Name: StageViewWithPrompts
// Dependencies: [19, 17, 1097, 21, 9376, 4837, 558, 576, 1619, 9377, 7859, 4833, 2]

// Module 9375 (StageViewWithPrompts)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1097 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1619 */;
import Text_Text from "Text/Text" /* 4833 */;
import StageChannelHeightHooks from "StageChannelHeightHooks" /* 9376 */;
import FocusedControls from "FocusedControls" /* 9377 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let tmp5;
const StageSparkleDefault = tmp5(7859);
({ ScrollView: c3, View: closure_4 } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = StageChannelHeightHooks.CALL_ACTION_BAR_HEIGHT + 8;
const styles = createStyles.createStyles({ scrollView: { flex: 1 }, container: { paddingHorizontal: 16, alignItems: "center" }, sparkle: { marginTop: 48, marginBottom: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, body: { fontSize: 14, textAlign: "center" }, prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" } });
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let body;
  let bottom;
  let children;
  let items;
  let title;
  let top;
  const obj = react2;
  const cResult = obj.c(24);
  ({ title, body, children } = arg0);
  const tmp4 = styles();
  ({ top, bottom } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  const sum = top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT;
  const sum1 = bottom + closure_8;
  if (cResult[0] === sum) {
    let tmp9;
    if (cResult[1] === sum1) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === tmp4.container) {
      let tmp10;
      let tmp11;
      if (cResult[4] === tmp9) {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp4.sparkle) {
        const obj2 = { style: tmp4.sparkle, theme: ThemeTypes.DARK };
        const tmp14 = metroRequire(StageSparkleDefault, obj2);
        cResult[6] = tmp4.sparkle;
        cResult[7] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp4.title) {
        let tmp15;
        if (cResult[9] === title) {
          tmp15 = cResult[10];
        }
        if (cResult[11] === body) {
          let tmp18;
          if (cResult[12] === tmp4.body) {
            tmp18 = cResult[13];
          }
          if (cResult[14] === children) {
            let tmp21;
            if (cResult[15] === tmp4.prompts) {
              tmp21 = cResult[16];
            }
            if (cResult[17] === tmp4.scrollView) {
              if (cResult[18] === tmp10) {
                if (cResult[19] === tmp11) {
                  if (cResult[20] === tmp15) {
                    if (cResult[21] === tmp18) {
                      let tmp25;
                      if (cResult[22] === tmp21) {
                        tmp25 = cResult[23];
                      }
                      return tmp25;
                    }
                  }
                }
              }
            }
            const obj3 = { style: tmp4.scrollView, contentContainerStyle: tmp10, alwaysBounceVertical: false, children: items };
            items = [tmp11, tmp15, tmp18, tmp21];
            const tmp28 = metroImportDefault(_false, obj3);
            cResult[17] = tmp4.scrollView;
            cResult[18] = tmp10;
            cResult[19] = tmp11;
            cResult[20] = tmp15;
            cResult[21] = tmp18;
            cResult[22] = tmp21;
            cResult[23] = tmp28;
            tmp25 = tmp28;
          }
          const obj4 = { style: tmp4.prompts, children };
          const tmp24 = metroRequire(React3, obj4);
          cResult[14] = children;
          cResult[15] = tmp4.prompts;
          cResult[16] = tmp24;
          tmp21 = tmp24;
        }
        const obj5 = { style: tmp4.body, variant: "text-sm/medium", color: "text-overlay-light", children: body };
        const tmp20 = metroRequire(Text_Text.Text, obj5);
        cResult[11] = body;
        cResult[12] = tmp4.body;
        cResult[13] = tmp20;
        tmp18 = tmp20;
      }
      const obj6 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title };
      const tmp17 = metroRequire(Text_Text.Text, obj6);
      cResult[8] = tmp4.title;
      cResult[9] = title;
      cResult[10] = tmp17;
      tmp15 = tmp17;
    }
    const items1 = [tmp4.container, tmp9];
    cResult[3] = tmp4.container;
    cResult[4] = tmp9;
    cResult[5] = items1;
    tmp10 = items1;
  }
  const obj7 = { paddingTop: sum, paddingBottom: sum1 };
  cResult[0] = sum;
  cResult[1] = sum1;
  cResult[2] = obj7;
  tmp9 = obj7;
}) : ((arg0) => {
  let body;
  let bottom;
  let children;
  let items;
  let items1;
  let title;
  let top;
  ({ title, body, children } = arg0);
  const tmp = styles();
  const obj = { style: tmp.scrollView, contentContainerStyle: items, alwaysBounceVertical: false, children: items1 };
  items = [tmp.container, ];
  const tmp2 = useSafeAreaInsetsDefault();
  const obj2 = { paddingTop: top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_8 };
  ({ top, bottom } = tmp2);
  items[1] = obj2;
  items1 = [, , , ];
  const obj3 = { style: tmp.sparkle, theme: ThemeTypes.DARK };
  items1[0] = metroRequire(StageSparkleDefault, obj3);
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title };
  items1[1] = metroRequire(Text_Text.Text, obj4);
  const obj5 = { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body };
  items1[2] = metroRequire(Text_Text.Text, obj5);
  const obj6 = { style: tmp.prompts, children };
  items1[3] = metroRequire(React3, obj6);
  return metroImportDefault(_false, obj);
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

export default tmp6;
export const useStyles = styles;
