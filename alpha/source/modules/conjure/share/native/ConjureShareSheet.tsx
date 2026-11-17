// Module ID: 14580
// Function ID: 14581
// Name: ConjureShareSheet
// Dependencies: [19, 17, 21, 5310, 575, 5546, 6009, 14425, 14565, 7961, 14482, 7923, 1113, 4133, 14573, 5930, 2]
// Exports: default

// Module 14580 (ConjureShareSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4133 from "module_4133" /* 4133 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6009 */;
import useConjureSharingModeDefault from "useConjureSharingMode" /* 14425 */;
import useConjureShareServersDefault from "useConjureShareServers" /* 14565 */;
import ConjureShareAccessDefault from "ConjureShareAccess" /* 14573 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function hideShareSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(ConjureShareSheet_str);
}
function showShareToast(text) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text, variant: "success" };
  obj.open(ConjureShareSheet_str, obj2);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const ConjureShareSheet_str = "ConjureShareSheet";
let createStyles = createStyles_mod;
let obj = { header: obj2, body: obj3 };
obj2 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureShareSheet.tsx");

export default function ConjureShareSheet(guildId) {
  let closure_0;
  let intl2;
  let intl3;
  let items;
  let items1;
  let projectId;
  let publishOptions;
  let tmp8Result;
  ({ projectId, publishOptions } = guildId);
  guildId = guildId.guildId;
  if (publishOptions === undefined) {
    publishOptions = null;
  }
  const tmp = closure_7();
  const tmp4 = useConjureSharingModeDefault(projectId);
  const tmp5 = useConjureShareServersDefault(projectId, guildId, publishOptions);
  _require = tmp5;
  const project = tmp4.project;
  let tmp6Result = null;
  const obj = { style: tmp.header, children: items };
  const ActionSheet = require("ActionSheet").ActionSheet;
  if (null != project) {
    const obj2 = { project, size: "dialog" };
    tmp6Result = tmp6(tmp2(14482), obj2);
  }
  items = [tmp6Result, ];
  const BottomSheetTitleHeader = tmp7(7923).BottomSheetTitleHeader;
  const intl = tmp7(1113).intl;
  const formatToPlainString = intl.formatToPlainString;
  let str;
  const pgxjO4 = tmp2(4133).pgxjO4;
  if (project != null) {
    str = project.name;
  }
  if (str == null) {
    str = "";
  }
  const obj3 = { header: closure_5(View, obj), children: tmp8Result };
  const obj4 = { title: formatToPlainString(pgxjO4, { app: str }), subtitle: intl2.string(_modDef4133.mbybxl) };
  intl2 = tmp7(1113).intl;
  items[1] = closure_4(BottomSheetTitleHeader, obj4);
  tmp8Result = null;
  if (null != project) {
    let i4jeWR;
    const obj5 = { style: tmp.body, children: items1 };
    const obj6 = { project, sharing: tmp4, servers: tmp5, serversLabel: intl3.string(_modDef4133.bRGLUO) };
    const tmp2Result = ConjureShareAccessDefault;
    intl3 = tmp7(1113).intl;
    items1 = [closure_4(tmp2Result, obj6), ];
    const Button = tmp7(5930).Button;
    const intl4 = tmp7(1113).intl;
    const string = intl4.string;
    if (null != tmp5.picked) {
      i4jeWR = tmp2(4133)["+uQwxA"];
    } else {
      i4jeWR = tmp7(1113).t.i4jeWR;
    }
    const obj7 = {
      variant: "primary",
      text: string(i4jeWR),
      loading: tmp5.sharing,
      onPress() {
          return closure_0.finish(hideShareSheet, showShareToast);
        }
    };
    items1[1] = closure_4(Button, obj7);
    tmp8Result = tmp8(tmp9, obj5);
  }
  return closure_4(ActionSheet, obj3);
};
export const CONJURE_SHARE_SHEET_KEY = "ConjureShareSheet";
