// Module ID: 19207
// Function ID: 19208
// Name: VoiceChannelAppIcon
// Dependencies: [19, 17, 21, 5143, 575, 9193, 11536, 2]
// Exports: default

// Module 19207 (VoiceChannelAppIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9193 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { tile: size };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_4 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_channel_apps/native/VoiceChannelAppIcon.tsx");

export default function VoiceChannelAppIcon(iconApplication) {
  let applicationId;
  let name;
  let tmp6;
  iconApplication = iconApplication.iconApplication;
  ({ applicationId, name } = iconApplication);
  if (null != iconApplication.icon) {
    tmp6 = jsx(TableRowApplicationIconDefault, { application: iconApplication });
  } else {
    tmp6 = <View style={tmp.tile}>{null}</View>;
  }
  return tmp6;
};
