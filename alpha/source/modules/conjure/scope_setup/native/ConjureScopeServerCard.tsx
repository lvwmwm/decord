// Module ID: 12715
// Function ID: 12716
// Name: ConjureScopeServerCard
// Dependencies: [32, 19, 17, 21, 5009, 575, 12442, 5619, 1114, 3865, 12716, 5629, 2]
// Exports: default

// Module 12715 (ConjureScopeServerCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import Text_Text from "Text/Text" /* 5619 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12442 */;
import ConjureClarificationEntityPickerDefault from "ConjureClarificationEntityPicker" /* 12716 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = [];
let createStyles = createStyles_mod;
let obj = { surface: obj2, header: obj3, content: obj4, footer: obj5 };
obj2 = { marginTop: nativeDefault.space.PX_8, padding: 0, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeServerCard.tsx");

export default function ConjureScopeServerCard(card) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  card = card.card;
  let onPickServer;
  let id;
  const projectId = card.projectId;
  const tmp = closure_9();
  const tmp2 = _slicedToArray;
  const first = _slicedToArray(card.clarification.questions, 1)[0];
  let default_entities = first.default_entities;
  const useState = react.useState;
  if (default_entities == null) {
    default_entities = closure_8;
  }
  const tmp2Result = tmp2(useState(default_entities), 2);
  const first1 = tmp2Result[0];
  onPickServer = card.onPickServer;
  const onBack = card.onBack;
  const first2 = first1[0];
  id = undefined;
  const tmp7 = tmp2Result[1];
  if (first2 != null) {
    id = first2.id;
  }
  const obj = { style: tmp.surface, children: items1 };
  const obj2 = { style: tmp.header, children: items };
  const obj3 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: intl.string(_modDef3865.ickKBI) };
  const tmp13 = ConjureNativeCardSurfaceDefault;
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [metroRequire(Text, obj3), ];
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(_modDef3865.OyM4SV) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items[1] = metroRequire(Text2, obj4);
  items1 = [metroImportDefault(View, obj2), , ];
  const obj5 = { style: tmp.content, children: items2 };
  items2 = [, ];
  const obj6 = { projectId, question: first, value: first1, disabled: null == onPickServer, onChange: tmp7, fallback: null };
  items2[0] = metroRequire(ConjureClarificationEntityPickerDefault, obj6);
  let tmp15Result = null;
  if (null != first.note) {
    const obj7 = { variant: "text-xs/normal", color: "text-muted", children: first.note };
    tmp15Result = tmp15(tmp16(5619).Text, obj7);
  }
  items2[1] = tmp15Result;
  items1[1] = metroImportDefault(View, obj5);
  const obj8 = { style: tmp.footer, children: items3 };
  const obj9 = {
    variant: "primary",
    size: "sm",
    text: intl3.string(_modDef3865.PTIP7V),
    disabled: null == id || null == onPickServer,
    onPress() {
      if (null != id) {
        if (onPickServer != null) {
          tmp2(tmp);
        }
      }
    }
  };
  const Button = tmp16(5629).Button;
  intl3 = tmp16(1114).intl;
  items3 = [metroRequire(Button, obj9), ];
  let tmp15Result2 = null;
  if (null != onBack) {
    const obj10 = { variant: "tertiary", size: "sm", text: intl4.string(intl5.t["ETE/oC"]), onPress: onBack };
    const Button2 = tmp16(5629).Button;
    intl4 = tmp16(1114).intl;
    tmp15Result2 = tmp15(Button2, obj10);
  }
  items3[1] = tmp15Result2;
  items1[2] = metroImportDefault(View, obj8);
  return metroImportDefault(tmp13, obj);
};
