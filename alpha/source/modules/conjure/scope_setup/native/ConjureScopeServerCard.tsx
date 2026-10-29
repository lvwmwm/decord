// Module ID: 12563
// Function ID: 12564
// Name: ConjureScopeServerCard
// Dependencies: [32, 19, 17, 21, 5005, 587, 558, 576, 5271, 1125, 3864, 12564, 5281, 12280, 2]

// Module 12563 (ConjureScopeServerCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12280 */;
import ConjureClarificationEntityPickerDefault from "ConjureClarificationEntityPicker" /* 12564 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const intl5 = tmp(1125);
const Text_Text = tmp(5271);
const components_Button_Button = tmp(5281);
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureScopeServerCard(arg0) {
  let card;
  let first3;
  let intl;
  let intl2;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let projectId;
  let tmp17;
  let tmp21;
  const tmp = require;
  const tmp2 = dependencyMap;
  const obj = react2;
  const cResult = obj.c(33);
  ({ projectId, card } = arg0);
  const tmp4 = closure_9();
  const first = _slicedToArray(card.clarification.questions, 1)[0];
  let default_entities = first.default_entities;
  const useState = react.useState;
  const tmp5 = _slicedToArray;
  if (default_entities == null) {
    default_entities = closure_8;
  }
  const tmp5Result = tmp5(useState(default_entities), 2);
  const first1 = tmp5Result[0];
  const onPickServer = card.onPickServer;
  const onBack = card.onBack;
  const first2 = first1[0];
  let id;
  const tmp10 = tmp5Result[1];
  if (first2 != null) {
    id = first2.id;
  }
  const surface = tmp4.surface;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: intl.string(_modDef3864.ickKBI) };
    const Text = Text_Text.Text;
    intl = intl5.intl;
    const tmp16 = metroRequire(Text, obj2);
    cResult[0] = tmp16;
    first3 = tmp16;
  } else {
    first3 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(_modDef3864.OyM4SV) };
    const Text2 = Text_Text.Text;
    intl2 = intl5.intl;
    const tmp20 = metroRequire(Text2, obj3);
    cResult[1] = tmp20;
    tmp17 = tmp20;
  } else {
    tmp17 = cResult[1];
  }
  if (cResult[2] !== tmp4.header) {
    const obj4 = { style: tmp4.header, children: items };
    items = [first3, tmp17];
    const tmp24 = metroImportDefault(View, obj4);
    cResult[2] = tmp4.header;
    cResult[3] = tmp24;
    tmp21 = tmp24;
  } else {
    tmp21 = cResult[3];
  }
  if (cResult[4] === first1) {
    if (cResult[5] === projectId) {
      if (cResult[6] === first) {
        let tmp26;
        let tmp28;
        if (cResult[7] === null == onPickServer) {
          tmp26 = cResult[8];
        }
        if (cResult[9] !== first.note) {
          let tmp29 = null;
          if (null != first.note) {
            const obj5 = { variant: "text-xs/normal", color: "text-muted", children: first.note };
            tmp29 = metroRequire(Text_Text.Text, obj5);
          }
          cResult[9] = first.note;
          cResult[10] = tmp29;
          tmp28 = tmp29;
        } else {
          tmp28 = cResult[10];
        }
        if (cResult[11] === tmp4.content) {
          if (cResult[12] === tmp26) {
            let tmp31;
            let tmp35;
            if (cResult[13] === tmp28) {
              tmp31 = cResult[14];
            }
            const _Symbol = Symbol;
            const footer = tmp4.footer;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = intl5.intl;
              const stringResult = intl3.string(_modDef3864.PTIP7V);
              cResult[15] = stringResult;
              tmp35 = stringResult;
            } else {
              tmp35 = cResult[15];
            }
            if (cResult[16] === id) {
              let tmp39;
              if (cResult[17] === onPickServer) {
                tmp39 = cResult[18];
              }
              if (cResult[19] === (null == id || null == onPickServer)) {
                let tmp40;
                let tmp43;
                if (cResult[20] === tmp39) {
                  tmp40 = cResult[21];
                }
                if (cResult[22] !== onBack) {
                  let tmp44 = null;
                  if (null != onBack) {
                    const obj6 = { variant: "tertiary", size: "sm", text: intl4.string(intl5.t["ETE/oC"]), onPress: onBack };
                    const Button = components_Button_Button.Button;
                    intl4 = intl5.intl;
                    tmp44 = metroRequire(Button, obj6);
                  }
                  cResult[22] = onBack;
                  cResult[23] = tmp44;
                  tmp43 = tmp44;
                } else {
                  tmp43 = cResult[23];
                }
                if (cResult[24] === tmp4.footer) {
                  if (cResult[25] === tmp40) {
                    let tmp46;
                    if (cResult[26] === tmp43) {
                      tmp46 = cResult[27];
                    }
                    if (cResult[28] === tmp4.surface) {
                      if (cResult[29] === tmp46) {
                        if (cResult[30] === tmp21) {
                          let tmp50;
                          if (cResult[31] === tmp31) {
                            tmp50 = cResult[32];
                          }
                          return tmp50;
                        }
                      }
                    }
                    const obj7 = { style: surface, children: items1 };
                    items1 = [tmp21, tmp31, tmp46];
                    const tmp53 = metroImportDefault(ConjureNativeCardSurfaceDefault, obj7);
                    cResult[28] = tmp4.surface;
                    cResult[29] = tmp46;
                    cResult[30] = tmp21;
                    cResult[31] = tmp31;
                    cResult[32] = tmp53;
                    tmp50 = tmp53;
                  }
                }
                const obj8 = { style: footer, children: items2 };
                items2 = [tmp40, tmp43];
                const tmp49 = metroImportDefault(View, obj8);
                cResult[24] = tmp4.footer;
                cResult[25] = tmp40;
                cResult[26] = tmp43;
                cResult[27] = tmp49;
                tmp46 = tmp49;
              }
              const obj9 = { variant: "primary", size: "sm", text: tmp35, disabled: null == id || null == onPickServer, onPress: tmp39 };
              const tmp42 = metroRequire(components_Button_Button.Button, obj9);
              cResult[19] = null == id || null == onPickServer;
              cResult[20] = tmp39;
              cResult[21] = tmp42;
              tmp40 = tmp42;
            }
            const fn = function w() {
              if (null != id) {
                if (onPickServer != null) {
                  tmp2(tmp);
                }
              }
            };
            cResult[16] = id;
            cResult[17] = onPickServer;
            cResult[18] = fn;
            tmp39 = fn;
          }
        }
        const obj10 = { style: tmp4.content, children: items3 };
        items3 = [tmp26, tmp28];
        const tmp34 = metroImportDefault(View, obj10);
        cResult[11] = tmp4.content;
        cResult[12] = tmp26;
        cResult[13] = tmp28;
        cResult[14] = tmp34;
        tmp31 = tmp34;
      }
    }
  }
  const tmp27 = metroRequire(ConjureClarificationEntityPickerDefault, { projectId, question: first, value: first1, disabled: null == onPickServer, onChange: tmp10, fallback: null });
  cResult[4] = first1;
  cResult[5] = projectId;
  cResult[6] = first;
  cResult[7] = null == onPickServer;
  cResult[8] = tmp27;
  tmp26 = tmp27;
}) : (function ConjureScopeServerCard(card) {
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
  const obj3 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: intl.string(_modDef3864.ickKBI) };
  const tmp13 = ConjureNativeCardSurfaceDefault;
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [metroRequire(Text, obj3), ];
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(_modDef3864.OyM4SV) };
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
    tmp15Result = tmp15(tmp16(5271).Text, obj7);
  }
  items2[1] = tmp15Result;
  items1[1] = metroImportDefault(View, obj5);
  const obj8 = { style: tmp.footer, children: items3 };
  const obj9 = {
    variant: "primary",
    size: "sm",
    text: intl3.string(_modDef3864.PTIP7V),
    disabled: null == id || null == onPickServer,
    onPress() {
      if (null != id) {
        if (onPickServer != null) {
          tmp2(tmp);
        }
      }
    }
  };
  const Button = tmp16(5281).Button;
  intl3 = tmp16(1125).intl;
  items3 = [metroRequire(Button, obj9), ];
  let tmp15Result2 = null;
  if (null != onBack) {
    const obj10 = { variant: "tertiary", size: "sm", text: intl4.string(intl5.t["ETE/oC"]), onPress: onBack };
    const Button2 = tmp16(5281).Button;
    intl4 = tmp16(1125).intl;
    tmp15Result2 = tmp15(Button2, obj10);
  }
  items3[1] = tmp15Result2;
  items1[2] = metroImportDefault(View, obj8);
  return metroImportDefault(tmp13, obj);
});
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeServerCard.tsx");

export default tmp4;
