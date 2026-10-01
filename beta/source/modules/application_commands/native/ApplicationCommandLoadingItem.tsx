// Module ID: 11892
// Function ID: 11893
// Name: ApplicationCommandLoadingItem
// Dependencies: [19, 17, 9726, 21, 4836, 576, 5288, 2]
// Exports: default

// Module 11892 (ApplicationCommandLoadingItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useFontScale from "useFontScale" /* 5288 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 9726 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = 16;
let closure_8 = createStyles.createStyles((arg0) => {
  let size1;
  let size2;
  const obj = { applicationCommandLoadingItem: { flexDirection: "row", paddingVertical: 4, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) }, applicationCommandLoadingLeftWrapper: { flexDirection: "column", width: "75%", height: "100%", justifyContent: "space-between" }, applicationCommandLoadingName: size, applicationCommandLoadingDescription: size1, applicationCommandLoadingSectionName: size2 };
  ({ flexDirection: "row", paddingVertical: 4, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) });
  size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, height: v16, borderRadius: v16, width: "20%" };
  size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: v16, borderRadius: v16, width: "80%" };
  size2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingLeft: 16, width: "25%", marginLeft: "auto", height: v16, borderRadius: v16 };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandLoadingItem.tsx");

export default function ApplicationCommandLoadingItem() {
  let items;
  let items1;
  const obj = useFontScale;
  const tmp = closure_8(obj.useFontScale());
  const obj3 = { style: tmp.applicationCommandLoadingLeftWrapper, children: items };
  items = [, ];
  const obj2 = { style: tmp.applicationCommandLoadingItem, children: items1 };
  const obj4 = { style: tmp.applicationCommandLoadingName };
  items[0] = hasOwnProperty(View, obj4);
  const obj5 = { style: tmp.applicationCommandLoadingDescription };
  items[1] = hasOwnProperty(View, obj5);
  items1 = [metroRequire(View, obj3), ];
  const obj6 = { style: tmp.applicationCommandLoadingSectionName };
  items1[1] = hasOwnProperty(View, obj6);
  return metroRequire(View, obj2);
};
