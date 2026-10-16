// Module ID: 7054
// Function ID: 7055
// Name: Form/Form
// Dependencies: [19, 17, 21, 5154, 558, 576, 6889, 6488, 2]

// Module 7054 (Form/Form)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6889 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5154 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const RedesignCompat = tmp(6488);
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ form: { flex: 1 }, redesign: { paddingTop: 16 } });
const context = react.createContext({ isForm: false });
const value = { isForm: true };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function Form(arg0) {
  let alwaysBounceVertical;
  let children;
  let contentContainerStyle;
  let keyboardShouldPersistTaps;
  let onLayout;
  let onScroll;
  let ref;
  let scrollsToTop;
  let style;
  const obj = react2;
  const cResult = obj.c(20);
  ({ style, children, keyboardShouldPersistTaps, alwaysBounceVertical, contentContainerStyle, onScroll, scrollsToTop, onLayout, ref } = arg0);
  let str = "never";
  if (undefined !== keyboardShouldPersistTaps) {
    str = keyboardShouldPersistTaps;
  }
  const tmp5 = closure_6();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const tmp6 = react.useContext(RedesignCompat.RedesignCompatContext) && tmp5.redesign;
  if (cResult[0] === style) {
    if (cResult[1] === tmp5.form) {
      let tmp7;
      let tmp9;
      if (cResult[2] === tmp6) {
        tmp7 = cResult[3];
      }
      const sum = 38 + insets.bottom;
      if (cResult[4] !== sum) {
        const obj2 = { paddingBottom: sum };
        cResult[4] = sum;
        cResult[5] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === contentContainerStyle) {
        let tmp10;
        if (cResult[7] === tmp9) {
          tmp10 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { top: 0 };
          cResult[9] = obj3;
        }
        if (cResult[10] === (undefined === alwaysBounceVertical || alwaysBounceVertical)) {
          if (cResult[11] === children) {
            if (cResult[12] === str) {
              if (cResult[13] === onLayout) {
                if (cResult[14] === onScroll) {
                  if (cResult[15] === ref) {
                    if (cResult[16] === scrollsToTop) {
                      if (cResult[17] === tmp7) {
                        let tmp13;
                        if (cResult[18] === tmp10) {
                          tmp13 = cResult[19];
                        }
                        return tmp13;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const Provider = context.Provider;
        const tmp18 = <Provider value={value}>{null}</Provider>;
        cResult[10] = undefined === alwaysBounceVertical || alwaysBounceVertical;
        cResult[11] = children;
        cResult[12] = str;
        cResult[13] = onLayout;
        cResult[14] = onScroll;
        cResult[15] = ref;
        cResult[16] = scrollsToTop;
        cResult[17] = tmp7;
        cResult[18] = tmp10;
        cResult[19] = tmp18;
        tmp13 = tmp18;
      }
      const items = [tmp9, contentContainerStyle];
      cResult[6] = contentContainerStyle;
      cResult[7] = tmp9;
      cResult[8] = items;
      tmp10 = items;
    }
  }
  const items1 = [tmp5.form, style, tmp6];
  cResult[0] = style;
  cResult[1] = tmp5.form;
  cResult[2] = tmp6;
  cResult[3] = items1;
  tmp7 = items1;
}) : (function Form(keyboardShouldPersistTaps) {
  let children;
  let contentContainerStyle;
  let onLayout;
  let onScroll;
  let ref;
  let scrollsToTop;
  let style;
  let str = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
  ({ style, children } = keyboardShouldPersistTaps);
  if (str === undefined) {
    str = "never";
  }
  let flag = keyboardShouldPersistTaps.alwaysBounceVertical;
  if (flag === undefined) {
    flag = true;
  }
  ({ contentContainerStyle, onScroll, scrollsToTop, onLayout, ref } = keyboardShouldPersistTaps);
  const tmp = closure_6();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  let redesign = react.useContext(RedesignCompat.RedesignCompatContext);
  const items = [tmp.form, style, ];
  const Provider = context.Provider;
  if (redesign) {
    redesign = tmp.redesign;
  }
  items[2] = redesign;
  const items1 = [, ];
  const obj3 = { paddingBottom: 38 + insets.bottom };
  items1[0] = obj3;
  items1[1] = contentContainerStyle;
  return <Provider value={value}>{null}</Provider>;
});
const result = size.fileFinishedImporting("design/void/Form/native/Form.tsx");

export default tmp3;
export const FormContext = context;
