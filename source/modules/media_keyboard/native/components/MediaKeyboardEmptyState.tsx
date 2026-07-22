// Module ID: 9669
// Function ID: 75289
// Name: MediaKeyboardEmptyState
// Dependencies: []
// Exports: getMediaEmptyStateComponentOrNull

// Module 9669 (MediaKeyboardEmptyState)
class MediaKeyboardEmptyState {
  constructor(arg0) {
    ({ actionIcon, actionLabel, actionPress, imageSource, label } = global);
    tmp = closure_8();
    obj = { style: tmp.container };
    items = [, , ];
    items[0] = jsx(Image, { source: imageSource });
    obj = { cachedAt: null, edpbxy: null };
    obj.style = tmp.label;
    obj.children = label;
    items[1] = jsx(arg1(dependencyMap[6]).Text, obj);
    items[2] = jsx(arg1(dependencyMap[7]).Button, { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress });
    obj.children = items;
    return jsxs(View, obj);
  }
}
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const NativePermissionStatus = arg1(dependencyMap[2]).NativePermissionStatus;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_8, marginVertical: importDefault(dependencyMap[5]).space.PX_32, justifyContent: "center", alignItems: "center" };
obj.container = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.label = { textAlign: "center", marginVertical: importDefault(dependencyMap[5]).space.PX_16 };
let closure_8 = obj.createStyles(obj);
const obj1 = { textAlign: "center", marginVertical: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx");

export default MediaKeyboardEmptyState;
export const getMediaEmptyStateComponentOrNull = function getMediaEmptyStateComponentOrNull(photosEmpty) {
  let photoPermissionStatus;
  let showCameraButton;
  ({ photoPermissionStatus, showCameraButton } = photosEmpty);
  if (showCameraButton === undefined) {
    showCameraButton = true;
  }
  if (photoPermissionStatus !== NativePermissionStatus.DENIED) {
    if (photoPermissionStatus !== NativePermissionStatus.RESTRICTED) {
      if (photosEmpty.photosEmpty) {
        if (photoPermissionStatus === NativePermissionStatus.LIMITED) {
          let obj = { actionIcon: callback(arg1(dependencyMap[8]).SettingsIcon, {}) };
          const intl3 = arg1(dependencyMap[9]).intl;
          obj.actionLabel = intl3.string(arg1(dependencyMap[9]).t.JuXTi6);
          obj.actionPress = tmp2;
          obj.imageSource = importDefault(dependencyMap[10]);
          const intl4 = arg1(dependencyMap[9]).intl;
          obj.label = intl4.string(arg1(dependencyMap[9]).t.5g7NcN);
          return callback(MediaKeyboardEmptyState, obj);
        } else if (showCameraButton) {
          obj = { actionIcon: callback(arg1(dependencyMap[11]).CameraIcon, {}) };
          const intl = arg1(dependencyMap[9]).intl;
          obj.actionLabel = intl.string(arg1(dependencyMap[9]).t.tpoWUd);
          obj.actionPress = tmp;
          obj.imageSource = importDefault(dependencyMap[12]);
          const intl2 = arg1(dependencyMap[9]).intl;
          obj.label = intl2.string(arg1(dependencyMap[9]).t.YOvRBZ);
          return callback(MediaKeyboardEmptyState, obj);
        }
      }
    }
  }
  obj = { actionIcon: callback(arg1(dependencyMap[8]).SettingsIcon, {}) };
  const intl5 = arg1(dependencyMap[9]).intl;
  obj.actionLabel = intl5.string(arg1(dependencyMap[9]).t.457oeG);
  obj.actionPress = photosEmpty.onPressPrivacySettings;
  obj.imageSource = importDefault(dependencyMap[10]);
  const intl6 = arg1(dependencyMap[9]).intl;
  obj.label = intl6.string(arg1(dependencyMap[9]).t.8p9jGu);
  return callback(MediaKeyboardEmptyState, obj);
};
