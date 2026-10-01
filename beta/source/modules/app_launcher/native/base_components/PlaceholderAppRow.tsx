// Module ID: 11572
// Function ID: 11573
// Name: PlaceholderAppRow
// Dependencies: [19, 17, 21, 4836, 576, 11536, 5917, 2]
// Exports: default

// Module 11572 (PlaceholderAppRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import TableRow2 from "TableRow" /* 5917 */;
import react2 from "react" /* 11536 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let obj3;
let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { loadingAppIcon: size, loadingTextPlaceholder: obj2, loadingTextPlaceholderSmall: obj3 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
let closure_4 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/PlaceholderAppRow.tsx");

export default function PlaceholderAppRow(isFirstRow) {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_4();
  const obj = react2;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  const obj2 = react2;
  const placeholderWidth1 = obj2.usePlaceholderWidth(30, 90);
  const TableRow = TableRow2.TableRow;
  const items = [tmp.loadingTextPlaceholder, { width: "" + placeholderWidth + "%" }];
  ({ width: "" + placeholderWidth + "%" });
  const items1 = [tmp.loadingTextPlaceholderSmall, { width: "" + placeholderWidth1 + "%" }];
  ({ width: "" + placeholderWidth1 + "%" });
  return <TableRow icon={null} label={null} subLabel={null} subLabelLineClamp={1} start={flag} end={flag2} onPress={function onPress() {

  }} />;
};
