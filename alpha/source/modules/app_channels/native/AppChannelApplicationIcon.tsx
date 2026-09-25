// Module ID: 9012
// Function ID: 9013
// Name: AppChannelApplicationIcon
// Dependencies: [19, 21, 4829, 576, 5894, 1397, 2]
// Exports: default

// Module 9012 (AppChannelApplicationIcon)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import FastImageDefault from "FastImage" /* 5894 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { icon: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.md };
obj2.icon = size;
let closure_3 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/native/AppChannelApplicationIcon.tsx");

export default function AppChannelApplicationIcon(application) {
  application = application.application;
  const obj = { source: null, style: null };
  const tmp = closure_3();
  obj.source = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon, size: 32 });
  obj.style = tmp.icon;
  return <tmp2 source={null} style={null} />;
};
