// Module ID: 11621
// Function ID: 11622
// Name: GiftCodeRedeemError
// Dependencies: [19, 17, 21, 4790, 580, 558, 568, 1489, 11622, 11623, 1119, 4786, 5220, 4993, 7403, 2]

// Module 11621 (GiftCodeRedeemError)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import Link from "Link" /* 1489 */;
import Text_Text from "Text/Text" /* 4786 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import components_Button_Button from "components/Button/Button" /* 5220 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7403 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 }, header: { marginTop: 32, textAlign: "center" }, message: { marginTop: 8, textAlign: "center" }, footer: { paddingHorizontal: 24 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const cResult = c.c(21);
  message = message.message;
  const tmp4 = closure_8();
  ({ container, body } = tmp4);
  if (obj2.useTheme().dark) {
    let tmp5Result = tmp5(11622);
  } else {
    tmp5Result = tmp5(11623);
  }
  if (cResult[0] !== tmp5Result) {
    const obj3 = { source: tmp5Result };
    const tmp10 = timestampProducer(React3, obj3);
    cResult[0] = tmp5Result;
    cResult[1] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const result = intl.formatToMarkdownString(tmp(1119).t.JUvC0s, {});
    cResult[2] = result;
    let tmp11 = result;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== tmp4.header) {
    const obj4 = { variant: "heading-xl/bold", style: tmp4.header, children: tmp11 };
    const tmp15 = timestampProducer(tmp(4786).Text, obj4);
    cResult[3] = tmp4.header;
    cResult[4] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === message) {
    if (cResult[6] === tmp4.message) {
      let tmp16 = cResult[7];
    }
    if (cResult[8] === tmp4.body) {
      if (cResult[9] === tmp7) {
        if (cResult[10] === tmp13) {
          if (cResult[11] === tmp16) {
            let tmp18 = cResult[12];
          }
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1119).intl;
            const stringResult = intl2.string(tmp(1119).t.cpT0Cq);
            cResult[13] = stringResult;
            let tmp22 = stringResult;
          } else {
            tmp22 = cResult[13];
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = {
              text: tmp22,
              size: "md",
              onPress() {
                          return ModalActionCreatorsDefault.pop();
                        }
            };
            const tmp26 = timestampProducer(tmp(5220).Button, obj5);
            cResult[14] = tmp26;
            let tmp24 = tmp26;
          } else {
            tmp24 = cResult[14];
          }
          if (cResult[15] !== tmp4.footer) {
            const obj6 = { style: tmp4.footer, children: tmp24 };
            const tmp30 = timestampProducer(React4, obj6);
            cResult[15] = tmp4.footer;
            cResult[16] = tmp30;
            let tmp27 = tmp30;
          } else {
            tmp27 = cResult[16];
          }
          if (cResult[17] === tmp4.container) {
            if (cResult[18] === tmp27) {
              if (cResult[19] === tmp18) {
                let tmp31 = cResult[20];
              }
              return tmp31;
            }
          }
          const obj7 = { bottom: true, style: container, children: null };
          const items = [tmp18, tmp27];
          obj7.children = items;
          const tmp33 = React5(tmp(7403).SafeAreaPaddingView, obj7);
          cResult[17] = tmp4.container;
          cResult[18] = tmp27;
          cResult[19] = tmp18;
          cResult[20] = tmp33;
          tmp31 = tmp33;
        }
      }
    }
    const obj8 = { contentContainerStyle: body, alwaysBounceVertical: false, children: null };
    const items1 = [tmp7, tmp13, tmp16];
    obj8.children = items1;
    const tmp21 = React5(hasOwnProperty, obj8);
    cResult[8] = tmp4.body;
    cResult[9] = tmp7;
    cResult[10] = tmp13;
    cResult[11] = tmp16;
    cResult[12] = tmp21;
    tmp18 = tmp21;
  }
  const tmp17 = timestampProducer(Text_Text.Text, { variant: "text-lg/medium", style: tmp4.message, children: message });
  cResult[5] = message;
  cResult[6] = tmp4.message;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : ((children) => {
  const tmp = closure_8();
  const theme = Link.useTheme();
  const obj2 = { bottom: true, style: tmp.container, children: null };
  const obj3 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (theme.dark) {
    let tmp9Result = tmp9(11622);
  } else {
    tmp9Result = tmp9(11623);
  }
  const items = [timestampProducer(React3, { source: tmp9Result }), , ];
  const obj4 = { variant: "heading-xl/bold", style: tmp.header, children: null };
  const intl = tmp2(1119).intl;
  obj4.children = intl.formatToMarkdownString(util.t.JUvC0s, {});
  items[1] = timestampProducer(Text_Text.Text, obj4);
  items[2] = timestampProducer(Text_Text.Text, { variant: "text-lg/medium", style: tmp.message, children: children.message });
  obj3.children = items;
  const items1 = [React5(hasOwnProperty, obj3), ];
  const obj6 = { style: tmp.footer, children: null };
  const obj7 = { text: null, size: "md", onPress: null };
  const intl2 = tmp2(1119).intl;
  obj7.text = intl2.string(util.t.cpT0Cq);
  obj7.onPress = function onPress() {
    return ModalActionCreatorsDefault.pop();
  };
  obj6.children = timestampProducer(components_Button_Button.Button, obj7);
  items1[1] = timestampProducer(React4, obj6);
  obj2.children = items1;
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj2);
});
