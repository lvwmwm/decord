// Module ID: 9023
// Function ID: 9024
// Name: TableRowApplicationIcon
// Dependencies: [19, 21, 4836, 576, 5899, 1397, 2]
// Exports: default

// Module 9023 (TableRowApplicationIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import FastImageDefault from "FastImage" /* 5899 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
