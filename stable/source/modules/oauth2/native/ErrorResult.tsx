// Module ID: 9378
// Function ID: 9379
// Dependencies: [19, 17, 21, 4636, 576, 7226, 9379, 4632, 1114, 5056, 4839, 2]
// Exports: default

// Module 9378
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4632 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7226 */;
import _modDef9379 from "module_9379" /* 9379 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" }, inner: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }, text: { marginTop: 24, textAlign: "center" }, image: null };
const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" };
obj2.image = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  error = error.error;
  const tmp = closure_7();
  const obj = { bottom: true, style: tmp.container, children: null };
  const obj2 = { style: tmp.inner, children: null };
  const items = [hasOwnProperty(React3, { source: _modDef9379, style: tmp.image }), ];
  const obj4 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (error == null) {
    const intl = tmp3(1114).intl;
    error = intl.string(tmp3(1114).t.mqn873);
  }
  obj4.children = error;
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [timestampProducer(React4, obj2), ];
  let tmp6Result = null;
  if (!error.hideFooter) {
    const obj5 = { size: "lg", text: null, onPress: null };
    const intl2 = tmp3(1114).intl;
    obj5.text = intl2.string(tmp3(1114).t.cpT0Cq);
    obj5.onPress = function onPress() {
      return ModalActionCreatorsDefault.pop();
    };
    tmp6Result = tmp6(tmp3(5056).Button, obj5);
  }
  items1[1] = tmp6Result;
  obj.children = items1;
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj);
};
