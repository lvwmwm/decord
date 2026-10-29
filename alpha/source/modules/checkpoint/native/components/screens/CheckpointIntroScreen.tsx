// Module ID: 13439
// Function ID: 13440
// Name: CheckpointIntroScreen
// Dependencies: [17, 13236, 21, 5005, 587, 558, 576, 504, 13440, 13441, 1125, 3090, 13436, 13438, 2]

// Module 13439 (CheckpointIntroScreen)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3090 from "module_3090" /* 3090 */;
import CheckpointStore2 from "CheckpointStore" /* 13236 */;
import CheckpointTextDefault from "CheckpointText" /* 13436 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 13438 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13440 */;
import CheckpointGlobeAnimationDefault from "CheckpointGlobeAnimation" /* 13441 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointStore = CheckpointStore2;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
const get_initialized = tmp(504);
const intl3 = tmp(1125);
const View = react_native.View;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = "2026";
let createStyles = createStyles_mod;
let obj = { container: obj2, year: obj3, globe: { width: 75, height: 56 }, descriptions: obj4 };
obj2 = { flexGrow: 1, justifyContent: "flex-end", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj4 = { gap: nativeDefault.space.PX_32 };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointIntroScreen() {
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj6;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react;
  const cResult = obj.c(23);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function u() {
      return CheckpointStore.fetchState !== constants.SUCCESS || null != CheckpointStore.stats;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const container = tmp4.container;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value, size: 96, isStepHeading: true };
    const tmp13 = metroRequire(CheckpointStatNumberDefault, obj2);
    cResult[2] = tmp13;
    tmp9 = tmp13;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === stateFromStores) {
    let tmp14;
    if (cResult[4] === tmp4.globe) {
      tmp14 = cResult[5];
    }
    if (cResult[6] === tmp4.year) {
      let tmp18;
      let tmp22;
      let tmp26;
      let tmp30;
      if (cResult[7] === tmp14) {
        tmp18 = cResult[8];
      }
      const descriptions = tmp4.descriptions;
      if (cResult[9] !== stateFromStores) {
        const intl = intl3.intl;
        const string = intl.string;
        const tmp24 = _modDef3090;
        const stringResult = string(stateFromStores ? tmp24["7YmUVu"] : tmp24["Fyr+NW"]);
        cResult[9] = stateFromStores;
        cResult[10] = stringResult;
        tmp22 = stringResult;
      } else {
        tmp22 = cResult[10];
      }
      if (cResult[11] !== tmp22) {
        const obj3 = { variant: "heading-lg/medium", children: tmp22 };
        const tmp29 = metroRequire(CheckpointTextDefault, obj3);
        cResult[11] = tmp22;
        cResult[12] = tmp29;
        tmp26 = tmp29;
      } else {
        tmp26 = cResult[12];
      }
      if (cResult[13] !== stateFromStores) {
        let tmp31 = !stateFromStores;
        if (tmp31) {
          const obj4 = { variant: "heading-lg/medium", children: intl2.string(_modDef3090["2GRr6H"]) };
          const tmp34 = CheckpointTextDefault;
          intl2 = intl3.intl;
          tmp31 = metroRequire(tmp34, obj4);
        }
        cResult[13] = stateFromStores;
        cResult[14] = tmp31;
        tmp30 = tmp31;
      } else {
        tmp30 = cResult[14];
      }
      if (cResult[15] === tmp4.descriptions) {
        if (cResult[16] === tmp26) {
          let tmp35;
          if (cResult[17] === tmp30) {
            tmp35 = cResult[18];
          }
          if (cResult[19] === tmp4.container) {
            if (cResult[20] === tmp35) {
              let tmp39;
              if (cResult[21] === tmp18) {
                tmp39 = cResult[22];
              }
              return tmp39;
            }
          }
          const obj5 = { children: metroImportDefault(View, obj6) };
          obj6 = { style: container, children: items1 };
          items1 = [tmp18, tmp35];
          const tmp42 = CheckpointScreenDefault;
          const tmp45 = metroRequire(tmp42, obj5);
          cResult[19] = tmp4.container;
          cResult[20] = tmp35;
          cResult[21] = tmp18;
          cResult[22] = tmp45;
          tmp39 = tmp45;
        }
      }
      const obj7 = { style: descriptions, children: items2 };
      items2 = [tmp26, tmp30];
      const tmp38 = metroImportDefault(View, obj7);
      cResult[15] = tmp4.descriptions;
      cResult[16] = tmp26;
      cResult[17] = tmp30;
      cResult[18] = tmp38;
      tmp35 = tmp38;
    }
    const obj8 = { style: tmp4.year, children: items3 };
    items3 = [tmp9, tmp14];
    const tmp21 = metroImportDefault(View, obj8);
    cResult[6] = tmp4.year;
    cResult[7] = tmp14;
    cResult[8] = tmp21;
    tmp18 = tmp21;
  }
  let tmp15 = !stateFromStores;
  if (tmp15) {
    const obj9 = { style: tmp4.globe };
    tmp15 = metroRequire(CheckpointGlobeAnimationDefault, obj9);
  }
  cResult[3] = stateFromStores;
  cResult[4] = tmp4.globe;
  cResult[5] = tmp15;
  tmp14 = tmp15;
}) : (function CheckpointIntroScreen() {
  let intl2;
  let items1;
  let items2;
  let items3;
  const tmp = closure_9();
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.fetchState !== constants.SUCCESS || null != CheckpointStore.stats);
  const obj3 = { style: tmp.year, children: items1 };
  items1 = [, ];
  const obj2 = { style: tmp.container, children: items2 };
  const obj4 = { value, size: 96, isStepHeading: true };
  const tmp7 = CheckpointScreenDefault;
  items1[0] = metroRequire(CheckpointStatNumberDefault, obj4);
  let tmp5Result = !stateFromStores;
  if (tmp5Result) {
    const obj5 = { style: tmp.globe };
    tmp5Result = tmp5(tmp6(13441), obj5);
  }
  items1[1] = tmp5Result;
  items2 = [metroImportDefault(View, obj3), ];
  const obj6 = { style: tmp.descriptions, children: items3 };
  const tmp6Result = CheckpointTextDefault;
  const intl = tmp2(1125).intl;
  const string = intl.string;
  const tmp6Result3 = _modDef3090;
  items3 = [, ];
  const obj7 = { variant: "heading-lg/medium", children: string(stateFromStores ? tmp6Result3["7YmUVu"] : tmp6Result3["Fyr+NW"]) };
  items3[0] = metroRequire(tmp6Result, obj7);
  let tmp5Result2 = !stateFromStores;
  if (tmp5Result2) {
    const obj8 = { variant: "heading-lg/medium", children: intl2.string(_modDef3090["2GRr6H"]) };
    const tmp6Result4 = CheckpointTextDefault;
    intl2 = tmp2(1125).intl;
    tmp5Result2 = tmp5(tmp6Result4, obj8);
  }
  items3[1] = tmp5Result2;
  const obj9 = { children: metroImportDefault(View, obj2) };
  items2[1] = metroImportDefault(View, obj6);
  return metroRequire(tmp7, obj9);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointIntroScreen.tsx");

export default tmp4;
