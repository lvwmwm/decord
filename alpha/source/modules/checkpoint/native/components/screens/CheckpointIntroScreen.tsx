// Module ID: 13589
// Function ID: 13590
// Name: CheckpointIntroScreen
// Dependencies: [17, 13386, 21, 5009, 575, 504, 13585, 13590, 13591, 13587, 1114, 3091, 2]
// Exports: default

// Module 13589 (CheckpointIntroScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef3091 from "module_3091" /* 3091 */;
import CheckpointStore2 from "CheckpointStore" /* 13386 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 13585 */;
import CheckpointTextDefault from "CheckpointText" /* 13587 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13590 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const CheckpointStore = CheckpointStore2;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, year: obj3, globe: { width: 75, height: 56 }, descriptions: obj4 };
obj2 = { flexGrow: 1, justifyContent: "flex-end", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj4 = { gap: nativeDefault.space.PX_32 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointIntroScreen.tsx");

export default function CheckpointIntroScreen() {
  let intl2;
  let items1;
  let items2;
  let items3;
  const tmp = closure_8();
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.fetchState !== constants.SUCCESS || null != CheckpointStore.stats);
  const obj3 = { style: tmp.year, children: items1 };
  items1 = [, ];
  const obj2 = { style: tmp.container, children: items2 };
  const tmp7 = CheckpointScreenDefault;
  items1[0] = metroRequire(CheckpointStatNumberDefault, { value: "2026", size: 96, isStepHeading: true });
  let tmp5Result = !stateFromStores;
  if (tmp5Result) {
    const obj4 = { style: tmp.globe };
    tmp5Result = tmp5(tmp6(13591), obj4);
  }
  items1[1] = tmp5Result;
  items2 = [metroImportDefault(View, obj3), ];
  const obj5 = { style: tmp.descriptions, children: items3 };
  const tmp6Result = CheckpointTextDefault;
  const intl = tmp2(1114).intl;
  const string = intl.string;
  const tmp6Result3 = _modDef3091;
  items3 = [, ];
  const obj6 = { variant: "heading-lg/medium", children: string(stateFromStores ? tmp6Result3["7YmUVu"] : tmp6Result3["Fyr+NW"]) };
  items3[0] = metroRequire(tmp6Result, obj6);
  let tmp5Result2 = !stateFromStores;
  if (tmp5Result2) {
    const obj7 = { variant: "heading-lg/medium", children: intl2.string(_modDef3091["2GRr6H"]) };
    const tmp6Result4 = CheckpointTextDefault;
    intl2 = tmp2(1114).intl;
    tmp5Result2 = tmp5(tmp6Result4, obj7);
  }
  items3[1] = tmp5Result2;
  const obj8 = { children: metroImportDefault(View, obj2) };
  items2[1] = metroImportDefault(View, obj5);
  return metroRequire(tmp7, obj8);
};
