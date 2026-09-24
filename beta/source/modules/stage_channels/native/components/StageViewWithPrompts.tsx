// Module ID: 10216
// Function ID: 10217
// Name: StageViewWithPrompts
// Dependencies: [19, 17, 1089, 21, 10217, 4790, 558, 568, 1616, 10218, 8715, 4786, 2]

// Module 10216 (StageViewWithPrompts)
import c from "c" /* 568 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import Text_Text from "Text/Text" /* 4786 */;
import FocusedControls from "FocusedControls" /* 10218 */;
import noop from "module_19" /* 19 */;

const StageSparkleDefault = tmp5(8715);
require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const ThemeTypes = fn(1089).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = fn(10217).CALL_ACTION_BAR_HEIGHT + 8;
const createStyles = fn(4790);
const styles = createStyles.createStyles({ scrollView: { flex: 1 }, container: { paddingHorizontal: 16, alignItems: "center" }, sparkle: { marginTop: 48, marginBottom: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, body: { fontSize: 14, textAlign: "center" }, prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(24);
  ({ title, body, children } = arg0);
  const tmp4 = styles();
  ({ top, bottom } = useSafeAreaInsetsDefault());
  const sum = top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT;
  const sum1 = bottom + closure_8;
  if (cResult[0] === sum) {
    if (cResult[1] === sum1) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] === tmp4.container) {
      if (cResult[4] === tmp9) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp4.sparkle) {
        const obj2 = { style: tmp4.sparkle, theme: ThemeTypes.DARK };
        const tmp14 = timestampProducer(StageSparkleDefault, obj2);
        cResult[6] = tmp4.sparkle;
        cResult[7] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp4.title) {
        if (cResult[9] === title) {
          let tmp15 = cResult[10];
        }
        if (cResult[11] === body) {
          if (cResult[12] === tmp4.body) {
            let tmp18 = cResult[13];
          }
          if (cResult[14] === children) {
            if (cResult[15] === tmp4.prompts) {
              let tmp21 = cResult[16];
            }
            if (cResult[17] === tmp4.scrollView) {
              if (cResult[18] === tmp10) {
                if (cResult[19] === tmp11) {
                  if (cResult[20] === tmp15) {
                    if (cResult[21] === tmp18) {
                      if (cResult[22] === tmp21) {
                        let tmp25 = cResult[23];
                      }
                      return tmp25;
                    }
                  }
                }
              }
            }
            const obj3 = { style: tmp4.scrollView, contentContainerStyle: tmp10, alwaysBounceVertical: false, children: null };
            const items = [tmp11, tmp15, tmp18, tmp21];
            obj3.children = items;
            const tmp28 = React5(React3, obj3);
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
          const tmp24 = timestampProducer(React4, obj4);
          cResult[14] = children;
          cResult[15] = tmp4.prompts;
          cResult[16] = tmp24;
          tmp21 = tmp24;
        }
        const obj5 = { style: tmp4.body, variant: "text-sm/medium", color: "text-overlay-light", children: body };
        const tmp20 = timestampProducer(tmp(4786).Text, obj5);
        cResult[11] = body;
        cResult[12] = tmp4.body;
        cResult[13] = tmp20;
        tmp18 = tmp20;
      }
      const obj6 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title };
      const tmp17 = timestampProducer(tmp(4786).Text, obj6);
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
  ({ title, body, children } = arg0);
  const tmp = styles();
  const obj = { style: tmp.scrollView, contentContainerStyle: null, alwaysBounceVertical: false, children: null };
  const items = [tmp.container, ];
  const tmp2 = useSafeAreaInsetsDefault();
  ({ top, bottom } = tmp2);
  items[1] = { paddingTop: top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_8 };
  obj.contentContainerStyle = items;
  const items1 = [timestampProducer(StageSparkleDefault, { style: tmp.sparkle, theme: ThemeTypes.DARK }), timestampProducer(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title }), timestampProducer(Text_Text.Text, { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body }), timestampProducer(React4, { style: tmp.prompts, children })];
  obj.children = items1;
  return React5(React3, obj);
});
export const useStyles = styles;
