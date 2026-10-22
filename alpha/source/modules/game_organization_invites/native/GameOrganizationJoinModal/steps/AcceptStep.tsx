// Module ID: 12668
// Function ID: 12669
// Name: AcceptStep
// Dependencies: [19, 17, 12662, 21, 4969, 587, 558, 576, 5655, 5220, 5963, 12664, 1128, 2406, 12669, 7886, 5230, 12667, 6681, 7885, 2]

// Module 12668 (AcceptStep)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1128 */;
import _modDef2406 from "module_2406" /* 2406 */;
import Text_Text from "Text/Text" /* 5220 */;
import FastImageDefault from "FastImage" /* 5655 */;
import Stack_Stack from "Stack/Stack" /* 5963 */;
import ModalScreen2 from "ModalScreen" /* 7885 */;
import ModalContent2 from "ModalContent" /* 7886 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 12662 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12664 */;
import GameOrganizationLinkedServerCardDefault from "GameOrganizationLinkedServerCard" /* 12669 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const onPress = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { text: { textAlign: "center" }, benefitCard: { flex: 1 }, benefitImage: obj2 };
obj2 = { width: "100%", aspectRatio: 1.7, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function BenefitCard(arg0) {
  let img;
  let items;
  let obj5;
  let text;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(9);
  ({ text, img } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === img) {
    let tmp5;
    let tmp11;
    if (cResult[1] === tmp4.benefitImage) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== text) {
      const obj2 = { variant: "text-md/normal", color: "text-muted", children: text };
      const tmp13 = metroRequire(Text_Text.Text, obj2);
      cResult[3] = text;
      cResult[4] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp4.benefitCard) {
      if (cResult[6] === tmp5) {
        let tmp14;
        if (cResult[7] === tmp11) {
          tmp14 = cResult[8];
        }
        return tmp14;
      }
    }
    const obj3 = { spacing: nativeDefault.space.PX_16, style: tmp4.benefitCard, children: items };
    const Stack = tmp(5963).Stack;
    items = [tmp5, tmp11];
    const tmp17 = metroImportDefault(Stack, obj3);
    cResult[5] = tmp4.benefitCard;
    cResult[6] = tmp5;
    cResult[7] = tmp11;
    cResult[8] = tmp17;
    tmp14 = tmp17;
  }
  if (null != img) {
    const obj4 = { source: obj5, style: tmp4.benefitImage, resizeMode: "cover", accessible: false };
    obj5 = { uri: img };
    tmp8 = metroRequire(FastImageDefault, obj4);
  } else {
    const obj6 = { style: tmp4.benefitImage };
    tmp8 = metroRequire(View, obj6);
  }
  cResult[0] = img;
  cResult[1] = tmp4.benefitImage;
  cResult[2] = tmp8;
  tmp5 = tmp8;
}) : (function BenefitCard(img) {
  let items;
  let obj3;
  let tmp6;
  let tmp8;
  img = img.img;
  const text = img.text;
  const tmp = closure_8();
  const obj = { spacing: nativeDefault.space.PX_16, style: tmp.benefitCard, children: items };
  const Stack = Stack_Stack.Stack;
  const tmp2 = metroImportDefault;
  if (null != img) {
    const obj2 = { source: obj3, style: tmp.benefitImage, resizeMode: "cover", accessible: false };
    obj3 = { uri: img };
    tmp8 = metroRequire(FastImageDefault, obj2);
    tmp6 = metroRequire;
  } else {
    tmp6 = metroRequire;
    const obj4 = { style: tmp.benefitImage };
    tmp8 = metroRequire(View, obj4);
  }
  items = [tmp8, tmp6(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: text })];
  return tmp2(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AcceptStep(code) {
  let ButtonGroup;
  let Stack4;
  let displayNoun;
  let first;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj13;
  let organization;
  const obj = react2;
  const cResult = obj.c(20);
  code = code.code;
  const tmp4 = closure_8();
  const tmp6 = useResolvedGameOrganizationInviteDefault(code);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      onPress();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (null == tmp6) {
    return null;
  } else {
    let tmp8;
    ({ displayNoun, organization } = tmp6);
    const text = tmp4.text;
    if (cResult[1] !== displayNoun) {
      const intl = tmp(1128).intl;
      const formatToPlainString = intl.formatToPlainString;
      let str = displayNoun;
      const WmxMAI = tmp5(2406).WmxMAI;
      if (displayNoun == null) {
        str = "other";
      }
      const obj2 = { displayNoun: str };
      const formatToPlainStringResult = formatToPlainString(WmxMAI, obj2);
      cResult[1] = displayNoun;
      cResult[2] = formatToPlainStringResult;
      tmp8 = formatToPlainStringResult;
    } else {
      tmp8 = cResult[2];
    }
    if (cResult[3] === tmp4.text) {
      let tmp10;
      let tmp13;
      if (cResult[4] === tmp8) {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== organization.iconUrl) {
        const obj3 = { name: "Fang\u2019s Corner", iconUrl: organization.iconUrl, presenceCount: 20, memberCount: 200 };
        const tmp15 = metroRequire(GameOrganizationLinkedServerCardDefault, obj3);
        cResult[6] = organization.iconUrl;
        cResult[7] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp10) {
        let tmp16;
        let tmp19;
        let tmp22;
        let tmp26;
        let tmp31;
        let tmp35;
        let tmp38;
        let tmp43;
        if (cResult[9] === tmp13) {
          tmp16 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "heading-lg/semibold", children: intl2.string(_modDef2406.yFqGy8) };
          const Text = tmp(5220).Text;
          intl2 = tmp(1128).intl;
          const tmp21 = metroRequire(Text, obj4);
          cResult[11] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { text: intl3.string(_modDef2406.WUVzdk) };
          intl3 = tmp(1128).intl;
          const tmp25 = metroRequire(closure_9, obj5);
          cResult[12] = tmp25;
          tmp22 = tmp25;
        } else {
          tmp22 = cResult[12];
        }
        const _Symbol3 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { spacing: nativeDefault.space.PX_24, children: items };
          const Stack2 = tmp(5963).Stack;
          items = [tmp19, ];
          const obj7 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, children: items1 };
          const Stack3 = tmp(5963).Stack;
          items1 = [tmp22, ];
          const obj8 = { text: intl4.string(_modDef2406.MEQJ1m) };
          intl4 = tmp(1128).intl;
          items1[1] = metroRequire(closure_9, obj8);
          items[1] = metroImportDefault(Stack3, obj7);
          const tmp30 = metroImportDefault(Stack2, obj6);
          cResult[13] = tmp30;
          tmp26 = tmp30;
        } else {
          tmp26 = cResult[13];
        }
        if (cResult[14] !== tmp16) {
          const obj9 = { children: metroImportDefault(Stack4, obj10) };
          const ModalContent = tmp(7886).ModalContent;
          obj10 = { spacing: nativeDefault.space.PX_48, children: items2 };
          Stack4 = tmp(5963).Stack;
          items2 = [tmp16, tmp26];
          const tmp34 = metroRequire(ModalContent, obj9);
          cResult[14] = tmp16;
          cResult[15] = tmp34;
          tmp31 = tmp34;
        } else {
          tmp31 = cResult[15];
        }
        const _Symbol4 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const obj11 = { text: intl5.string(_modDef2406.BaZ6nt), size: "lg", onPress: first };
          const Button = tmp(5230).Button;
          intl5 = tmp(1128).intl;
          const tmp37 = metroRequire(Button, obj11);
          cResult[16] = tmp37;
          tmp35 = tmp37;
        } else {
          tmp35 = cResult[16];
        }
        const _Symbol5 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const obj12 = { children: metroImportDefault(ButtonGroup, obj13) };
          const ModalFooter = tmp(12667).ModalFooter;
          obj13 = { children: items3 };
          items3 = [tmp35, ];
          ButtonGroup = tmp(6681).ButtonGroup;
          const obj14 = { text: intl6.string(intl7.t["ETE/oC"]), size: "lg", variant: "secondary", onPress };
          const Button2 = tmp(5230).Button;
          intl6 = tmp(1128).intl;
          items3[1] = metroRequire(Button2, obj14);
          const tmp42 = metroRequire(ModalFooter, obj12);
          cResult[17] = tmp42;
          tmp38 = tmp42;
        } else {
          tmp38 = cResult[17];
        }
        if (cResult[18] !== tmp31) {
          const obj15 = { children: items4 };
          items4 = [tmp31, tmp38];
          const tmp45 = metroImportDefault(ModalScreen2.ModalScreen, obj15);
          cResult[18] = tmp31;
          cResult[19] = tmp45;
          tmp43 = tmp45;
        } else {
          tmp43 = cResult[19];
        }
        return tmp43;
      }
      const obj16 = { spacing: nativeDefault.space.PX_24, children: items5 };
      const Stack = tmp(5963).Stack;
      items5 = [tmp10, tmp13];
      const tmp18 = metroImportDefault(Stack, obj16);
      cResult[8] = tmp10;
      cResult[9] = tmp13;
      cResult[10] = tmp18;
      tmp16 = tmp18;
    }
    const obj17 = { variant: "heading-xl/semibold", style: text, children: tmp8 };
    const tmp12 = metroRequire(Text_Text.Text, obj17);
    cResult[3] = tmp4.text;
    cResult[4] = tmp8;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  }
}) : (function AcceptStep(code) {
  let ButtonGroup;
  let WmxMAI;
  let formatToPlainString;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj14;
  let obj6;
  code = code.code;
  const tmp = closure_8();
  const tmp4 = useResolvedGameOrganizationInviteDefault(code);
  if (null == tmp4) {
    return null;
  } else {
    let str = tmp4.displayNoun;
    const organization = tmp4.organization;
    const ModalScreen = ModalScreen2.ModalScreen;
    const ModalContent = ModalContent2.ModalContent;
    const obj2 = { spacing: nativeDefault.space.PX_48, children: items1 };
    const Stack3 = Stack_Stack.Stack;
    const obj3 = { spacing: nativeDefault.space.PX_24, children: items };
    const Stack4 = Stack_Stack.Stack;
    const obj4 = { variant: "heading-xl/semibold", style: tmp.text, children: formatToPlainString(WmxMAI, obj6) };
    const Text2 = Text_Text.Text;
    const intl6 = intl7.intl;
    formatToPlainString = intl6.formatToPlainString;
    WmxMAI = tmp2(2406).WmxMAI;
    if (str == null) {
      str = "other";
    }
    const obj = { children: items4 };
    const obj5 = { children: metroImportDefault(Stack3, obj2) };
    obj6 = { displayNoun: str };
    items = [metroRequire(Text2, obj4), ];
    const obj7 = { name: "Fang\u2019s Corner", iconUrl: organization.iconUrl, presenceCount: 20, memberCount: 200 };
    items[1] = metroRequire(GameOrganizationLinkedServerCardDefault, obj7);
    items1 = [metroImportDefault(Stack4, obj3), ];
    const obj8 = { spacing: nativeDefault.space.PX_24, children: items2 };
    const Stack = tmp9(5963).Stack;
    const obj9 = { variant: "heading-lg/semibold", children: intl.string(_modDef2406.yFqGy8) };
    const Text = tmp9(5220).Text;
    intl = tmp9(1128).intl;
    items2 = [metroRequire(Text, obj9), ];
    const obj10 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, children: items3 };
    const Stack2 = tmp9(5963).Stack;
    const obj11 = { text: intl2.string(_modDef2406.WUVzdk) };
    intl2 = tmp9(1128).intl;
    items3 = [metroRequire(closure_9, obj11), ];
    const obj12 = { text: intl3.string(_modDef2406.MEQJ1m) };
    intl3 = tmp9(1128).intl;
    items3[1] = metroRequire(closure_9, obj12);
    items2[1] = metroImportDefault(Stack2, obj10);
    items1[1] = metroImportDefault(Stack, obj8);
    items4 = [metroRequire(ModalContent, obj5), ];
    const obj13 = { children: metroImportDefault(ButtonGroup, obj14) };
    const ModalFooter = tmp9(12667).ModalFooter;
    obj14 = { children: items5 };
    ButtonGroup = tmp9(6681).ButtonGroup;
    const obj15 = { text: intl4.string(_modDef2406.BaZ6nt), size: "lg", onPress: tmp5 };
    const Button = tmp9(5230).Button;
    intl4 = tmp9(1128).intl;
    items5 = [metroRequire(Button, obj15), ];
    const obj16 = { text: intl5.string(intl7.t["ETE/oC"]), size: "lg", variant: "secondary", onPress };
    const Button2 = tmp9(5230).Button;
    intl5 = tmp9(1128).intl;
    items5[1] = metroRequire(Button2, obj16);
    items4[1] = metroRequire(ModalFooter, obj13);
    return metroImportDefault(ModalScreen, obj);
  }
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/AcceptStep.tsx");

export const AcceptStep = tmp3;
