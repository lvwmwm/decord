// Module ID: 8731
// Function ID: 8732
// Name: AgeVerificationOtherWindowScreen
// Dependencies: [19, 21, 4758, 558, 568, 1119, 3038, 7201, 580, 4754, 5186, 8698, 8699, 2]

// Module 8731 (AgeVerificationOtherWindowScreen)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import _modDef3038 from "module_3038" /* 3038 */;
import Text_Text from "Text/Text" /* 4754 */;
import Stack_Stack from "Stack/Stack" /* 5186 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7201 */;
import ModalScreen from "ModalScreen" /* 8698 */;
import ModalContent from "ModalContent" /* 8699 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4758);
let closure_5 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch" }, text: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationOtherWindowScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((copy) => {
  const cResult = c.c(17);
  copy = copy.copy;
  const tmp4 = closure_5();
  let title;
  if (copy != null) {
    title = copy.title;
  }
  if (cResult[0] !== title) {
    let title1;
    if (copy != null) {
      title1 = copy.title;
    }
    if (title1 == null) {
      const intl = tmp(1119).intl;
      title1 = intl.string(_modDef3038.MLPgsX);
    }
    let title2;
    if (copy != null) {
      title2 = copy.title;
    }
    cResult[0] = title2;
    cResult[1] = title1;
    let tmp6 = title1;
  } else {
    tmp6 = cResult[1];
  }
  let description;
  if (copy != null) {
    description = copy.description;
  }
  if (cResult[2] !== description) {
    let description1;
    if (copy != null) {
      description1 = copy.description;
    }
    if (description1 == null) {
      const intl2 = tmp(1119).intl;
      description1 = intl2.string(_modDef3038.VcZF1q);
    }
    let description2;
    if (copy != null) {
      description2 = copy.description;
    }
    cResult[2] = description2;
    cResult[3] = description1;
    let tmp11 = description1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "lg", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    const tmp18 = React3(tmp(7201).MobilePhoneIcon, obj2);
    cResult[4] = tmp18;
    let tmp15 = tmp18;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] === tmp4.text) {
    if (cResult[6] === tmp6) {
      let tmp19 = cResult[7];
    }
    if (cResult[8] === tmp11) {
      if (cResult[9] === tmp4.text) {
        let tmp21 = cResult[10];
      }
      if (cResult[11] === tmp19) {
        if (cResult[12] === tmp21) {
          let tmp24 = cResult[13];
        }
        if (cResult[14] === tmp4.container) {
          if (cResult[15] === tmp24) {
            let tmp27 = cResult[16];
          }
          return tmp27;
        }
        const obj3 = { children: null };
        const obj4 = { children: null };
        const obj5 = { align: "center", justify: "center", spacing: 16, style: tmp4.container, children: null };
        const items = [tmp15, tmp24];
        obj5.children = items;
        obj4.children = React4(tmp(5186).Stack, obj5);
        obj3.children = React3(tmp(8699).ModalContent, obj4);
        const tmp30 = React3(tmp(8698).ModalScreen, obj3);
        cResult[14] = tmp4.container;
        cResult[15] = tmp24;
        cResult[16] = tmp30;
        tmp27 = tmp30;
      }
      const obj6 = { align: "center", justify: "center", spacing: 8, children: null };
      const items1 = [tmp19, tmp21];
      obj6.children = items1;
      const tmp26 = React4(tmp(5186).Stack, obj6);
      cResult[11] = tmp19;
      cResult[12] = tmp21;
      cResult[13] = tmp26;
      tmp24 = tmp26;
    }
    const obj7 = { variant: "text-md/medium", color: "text-muted", style: tmp4.text, children: tmp11 };
    const tmp23 = React3(tmp(4754).Text, obj7);
    cResult[8] = tmp11;
    cResult[9] = tmp4.text;
    cResult[10] = tmp23;
    tmp21 = tmp23;
  }
  const tmp20 = React3(Text_Text.Text, { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.text, children: tmp6 });
  cResult[5] = tmp4.text;
  cResult[6] = tmp6;
  cResult[7] = tmp20;
  tmp19 = tmp20;
}) : ((copy) => {
  copy = copy.copy;
  const tmp = closure_5();
  let title;
  if (copy != null) {
    title = copy.title;
  }
  if (title == null) {
    const intl = util.intl;
    title = intl.string(_modDef3038.MLPgsX);
  }
  let description;
  if (copy != null) {
    description = copy.description;
  }
  if (description == null) {
    const intl2 = util.intl;
    description = intl2.string(_modDef3038.VcZF1q);
  }
  const obj = { children: null };
  const obj2 = { children: null };
  const obj3 = { align: "center", justify: "center", spacing: 16, style: tmp.container, children: null };
  const items = [React3(MobilePhoneIcon.MobilePhoneIcon, { size: "lg", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT }), ];
  const obj5 = { align: "center", justify: "center", spacing: 8, children: null };
  const items1 = [React3(Text_Text.Text, { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: title }), React3(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", style: tmp.text, children: description })];
  obj5.children = items1;
  items[1] = React4(Stack_Stack.Stack, obj5);
  obj3.children = items;
  obj2.children = React4(Stack_Stack.Stack, obj3);
  obj.children = React3(ModalContent.ModalContent, obj2);
  return React3(ModalScreen.ModalScreen, obj);
});
