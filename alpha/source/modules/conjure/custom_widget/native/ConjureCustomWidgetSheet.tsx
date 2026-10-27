// Module ID: 14378
// Function ID: 14379
// Name: ConjureCustomWidgetSheet
// Dependencies: [5, 32, 19, 17, 10698, 21, 4971, 587, 7345, 1128, 3830, 10720, 14377, 10818, 10724, 7298, 7248, 7180, 5244, 2]
// Exports: default

// Module 14378 (ConjureCustomWidgetSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3830 from "module_3830" /* 3830 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10698 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import size from "module_2" /* 2 */;

let c4, c5, dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ ensureConnection: metroImportDefault, sendUserMessage: metroImportAll } = ConjureConnectionStore);
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { body: obj2 };
obj2 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetSheet.tsx");

export default function ConjureCustomWidgetSheet() {
  let BottomSheetTitleHeader;
  let closure_1;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let memo;
  let obj2;
  let obj3;
  let tmp15;
  let tmp16;
  let tmp5;
  let tmp7;
  let value;
  let tmp = closure_11();
  [value, importDefault] = memo.useState("");
  const tmp4 = _slicedToArray(memo.useState(null), 2);
  [tmp5, dependencyMap] = tmp4;
  [tmp7, _asyncToGenerator] = _slicedToArray(memo.useState(false), 2);
  const tmp6 = _slicedToArray(memo.useState(false), 2);
  _slicedToArray = memo.useRef(false);
  memo = memo.useMemo(() => {
    const obj = first(dependencyMap[8]);
    return obj.resolveConjureWorkspaceGuildId("ConjureCustomWidgetSheet");
  }, []);
  const callback = memo.useCallback((arg0) => {
    closure_1(arg0);
    dependencyMap(null);
  }, []);
  const items = [value, memo];
  const callback1 = memo.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_2;
    let obj5;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let tmp;
        let trimmed;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            value = tmp4;
            tmp = undefined;
            trimmed = first.trim();
            if ("" !== trimmed) {
              if (null != memo) {
                if (!ref.current) {
                  ref.current = true;
                  _asyncToGenerator(true);
                  dependencyMap(null);
                  tmp = null;
                  c3 = 2;
                  const obj6 = { guild_id: tmp61, install_scope: "user" };
                  c4 = 3;
                  c5 = 1;
                  const obj7 = { value: obj5.createProject(obj6), done: false };
                  obj5 = value(dependencyMap[11]);
                  return obj7;
                }
              }
            } else {
              const intl = value(dependencyMap[9]).intl;
              dependencyMap(intl.string(tmp(dependencyMap[10]).AuyDIq));
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_4.current = false;
          closure_129_3(false);
          throw dependencyMap;
        } else {
          if (2 === c4) {
            c3 = 1;
            if (null != tmp) {
              tmp(dependencyMap[13])(tmp);
              c3 = 0;
              closure_129_4.current = false;
              closure_129_3(false);
              c5 = 3;
              const obj8 = { value: undefined, done: true };
              return obj8;
            } else {
              const obj3 = value(dependencyMap[14]);
              closure_129_2(obj3.getConjureCreateErrorMessage(dependencyMap));
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_4.current = false;
            closure_129_3(false);
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            tmp = value;
            closure_1_7(tmp);
            const obj = value(dependencyMap[12]);
            closure_1_8(tmp, obj.composeConjureCustomWidgetPrompt(trimmed));
            tmp(dependencyMap[13])(tmp);
            c3 = 1;
          }
          c3 = 0;
          closure_129_4.current = false;
          closure_129_3(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp69) {
        dependencyMap = tmp69;
        if (0 === c3) {
          c5 = 3;
          throw tmp69;
        } else if (1 === tmp71) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items);
  let obj = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_9(BottomSheetTitleHeader, obj2), children: tmp15(tmp16, obj3) };
  const ActionSheet = value(7298).ActionSheet;
  obj2 = { title: intl.string(_modDef3830.yI85oV) };
  BottomSheetTitleHeader = value(7248).BottomSheetTitleHeader;
  intl = value(1128).intl;
  obj3 = { style: tmp.body, children: items1 };
  let obj4 = { label: intl2.string(_modDef3830["09BSx3"]), placeholder: intl3.string(_modDef3830.K7zdCZ), description: intl4.string(_modDef3830.SKwzvJ), errorMessage: tmp5, value, onChange: callback, maxLength: tmp12(14377).CONJURE_CUSTOM_WIDGET_PROMPT_MAX_LENGTH, disabled: tmp7 };
  const TextArea = value(7180).TextArea;
  intl2 = value(1128).intl;
  intl3 = value(1128).intl;
  intl4 = value(1128).intl;
  tmp15 = closure_10;
  tmp16 = View;
  items1 = [tmp11(TextArea, obj4), ];
  let obj5 = { variant: "primary", text: intl5.string(_modDef3830.MDZXiK), onPress: callback1, loading: tmp7, disabled: null == memo };
  const Button = tmp12(5244).Button;
  intl5 = tmp12(1128).intl;
  items1[1] = closure_9(Button, obj5);
  return closure_9(ActionSheet, obj);
};
export const CONJURE_CUSTOM_WIDGET_SHEET_KEY = "ConjureCustomWidgetSheet";
