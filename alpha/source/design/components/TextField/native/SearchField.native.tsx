// Module ID: 6738
// Function ID: 6739
// Name: SearchField
// Dependencies: [109, 19, 21, 558, 576, 1126, 6292, 6739, 2]

// Module 6738 (SearchField)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import TextField2 from "TextField" /* 6292 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6739 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["ref"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchField(ref) {
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_2);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl2.t["5h0QOP"]);
    cResult[3] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    let tmp11;
    if (cResult[5] === tmp5) {
      tmp11 = cResult[6];
    }
    return tmp11;
  }
  const TextField = tmp(6292).TextField;
  const merged = Object.assign(tmp4);
  const tmp13 = <TextField placeholder={tmp9} returnKeyType="search" ref={tmp5} autoCorrect={false} autoCapitalize="none" accessibilityRole="search" leadingIcon={MagnifyingGlassIcon.MagnifyingGlassIcon} clearable />;
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = tmp13;
  tmp11 = tmp13;
}) : (function SearchField(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const TextField = TextField2.TextField;
  const intl = intl2.intl;
  const merged1 = Object.assign(merged);
  return <TextField placeholder={intl.string(intl2.t["5h0QOP"])} returnKeyType="search" ref={ref} autoCorrect={false} autoCapitalize="none" accessibilityRole="search" leadingIcon={MagnifyingGlassIcon.MagnifyingGlassIcon} clearable />;
});
const result = size.fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = tmp3;
