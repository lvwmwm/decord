// Module ID: 6686
// Function ID: 6687
// Name: ChangeEmailComplete
// Dependencies: [19, 17, 6199, 21, 5092, 587, 6197, 558, 576, 6156, 6281, 1126, 5088, 5379, 2]

// Module 6686 (ChangeEmailComplete)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import FastImageDefault from "FastImage" /* 6156 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 6197 */;
import ChangeEmailStore from "ChangeEmailStore" /* 6199 */;
import AssetRegistryDefault from "AssetRegistry" /* 6281 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function handlePress() {
  resetChangeEmailStore();
  const obj = EmailVerificationModalActionCreatorsDefault;
  obj.close();
}
({ View: c3, ScrollView: closure_4 } = react_native);
const resetChangeEmailStore = ChangeEmailStore.resetChangeEmailStore;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentContainer: obj2, image: { height: 190, width: 220, resizeMode: "contain" }, title: { textAlign: "center" }, body: { textAlign: "center" }, bodyInner: { gap: 2 }, tooltip: obj3 };
obj2 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, gap: 20, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: "100%", padding: 12, borderWidth: 1, borderStyle: "solid", borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_8 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeEmailComplete(email) {
  let bodyInner;
  let intl4;
  let items;
  let items1;
  let title;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(23);
  email = email.email;
  const tmp4 = closure_8();
  const contentContainer = tmp4.contentContainer;
  if (cResult[0] !== tmp4.image) {
    const obj2 = { style: tmp4.image, source: AssetRegistryDefault };
    const tmp8 = FastImageDefault;
    const tmp9 = metroRequire(tmp8, obj2);
    cResult[0] = tmp4.image;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  ({ bodyInner, title } = tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl5.t["8O+nF7"]);
    cResult[2] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.title) {
    const obj3 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp10 };
    const tmp14 = metroRequire(Text_Text.Text, obj3);
    cResult[3] = tmp4.title;
    cResult[4] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  const body = tmp4.body;
  if (cResult[5] !== email) {
    const intl2 = tmp(1126).intl;
    const obj4 = { email };
    const formatResult = intl2.format(intl5.t.Zvx0O3, obj4);
    cResult[5] = email;
    cResult[6] = formatResult;
    tmp15 = formatResult;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === tmp4.body) {
    let tmp17;
    if (cResult[8] === tmp15) {
      tmp17 = cResult[9];
    }
    if (cResult[10] === tmp4.bodyInner) {
      if (cResult[11] === tmp12) {
        let tmp19;
        let tmp23;
        let tmp25;
        let tmp28;
        if (cResult[12] === tmp17) {
          tmp19 = cResult[13];
        }
        const _Symbol = Symbol;
        const tooltip = tmp4.tooltip;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(intl5.t.yb7itQ);
          cResult[14] = stringResult1;
          tmp23 = stringResult1;
        } else {
          tmp23 = cResult[14];
        }
        if (cResult[15] !== tmp4.tooltip) {
          const obj5 = { style: tooltip, variant: "text-sm/normal", children: tmp23 };
          const tmp27 = metroRequire(Text_Text.Text, obj5);
          cResult[15] = tmp4.tooltip;
          cResult[16] = tmp27;
          tmp25 = tmp27;
        } else {
          tmp25 = cResult[16];
        }
        const _Symbol2 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { text: intl4.string(intl5.t.BddRzS), onPress: handlePress, grow: true };
          const Button = tmp(5379).Button;
          intl4 = tmp(1126).intl;
          const tmp31 = metroRequire(Button, obj6);
          cResult[17] = tmp31;
          tmp28 = tmp31;
        } else {
          tmp28 = cResult[17];
        }
        if (cResult[18] === tmp4.contentContainer) {
          if (cResult[19] === tmp19) {
            if (cResult[20] === tmp25) {
              let tmp32;
              if (cResult[21] === tmp5) {
                tmp32 = cResult[22];
              }
              return tmp32;
            }
          }
        }
        const obj7 = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: contentContainer, children: items };
        items = [tmp5, tmp19, tmp25, tmp28];
        const tmp35 = metroImportDefault(React3, obj7);
        cResult[18] = tmp4.contentContainer;
        cResult[19] = tmp19;
        cResult[20] = tmp25;
        cResult[21] = tmp5;
        cResult[22] = tmp35;
        tmp32 = tmp35;
      }
    }
    const obj8 = { style: bodyInner, children: items1 };
    items1 = [tmp12, tmp17];
    const tmp22 = metroImportDefault(_false, obj8);
    cResult[10] = tmp4.bodyInner;
    cResult[11] = tmp12;
    cResult[12] = tmp17;
    cResult[13] = tmp22;
    tmp19 = tmp22;
  }
  const tmp18 = metroRequire(Text_Text.Text, { style: body, variant: "text-sm/medium", color: "text-default", children: tmp15 });
  cResult[7] = tmp4.body;
  cResult[8] = tmp15;
  cResult[9] = tmp18;
  tmp17 = tmp18;
}) : (function ChangeEmailComplete(email) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  email = email.email;
  const tmp = closure_8();
  const obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer, children: items };
  const obj2 = { style: tmp.image, source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items = [metroRequire(tmp2, obj2), , , ];
  const obj3 = { style: tmp.bodyInner, children: items1 };
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl5.t["8O+nF7"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items1 = [metroRequire(Text, obj4), ];
  const obj5 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: intl2.format(intl5.t.Zvx0O3, { email }) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items1[1] = metroRequire(Text2, obj5);
  items[1] = metroImportDefault(_false, obj3);
  const obj6 = { style: tmp.tooltip, variant: "text-sm/normal", children: intl3.string(intl5.t.yb7itQ) };
  const Text3 = Text_Text.Text;
  intl3 = intl5.intl;
  items[2] = metroRequire(Text3, obj6);
  const obj7 = { text: intl4.string(intl5.t.BddRzS), onPress: handlePress, grow: true };
  const Button = components_Button_Button.Button;
  intl4 = intl5.intl;
  items[3] = metroRequire(Button, obj7);
  return metroImportDefault(React3, obj);
});
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailComplete.tsx");

export default tmp7;
