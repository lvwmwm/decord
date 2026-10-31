// Module ID: 9041
// Function ID: 9042
// Name: TableRowApplicationIcon
// Dependencies: [19, 21, 5014, 575, 5717, 1409, 2]
// Exports: default

// Module 9041 (TableRowApplicationIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let size;
const jsx = Fragment.jsx;
const obj = { icon: size };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
let closure_3 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/applications/native/TableRowApplicationIcon.tsx");

export default function TableRowApplicationIcon(application) {
  application = application.application;
  const tmp = closure_3();
  FastImageDefault;
  const obj2 = AvatarUtilsDefault;
  const obj3 = { id: application.id, icon: application.icon, size: 32 };
  return <tmp2 source={obj2.getApplicationIconSource(obj3)} style={tmp.icon} />;
};
