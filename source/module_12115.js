// Module ID: 12115
// Function ID: 93327
// Dependencies: []

// Module 12115
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[2]).createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[3]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, marginVertical: importDefault(dependencyMap[3]).space.PX_8, marginHorizontal: importDefault(dependencyMap[3]).space.PX_8, marginRight: importDefault(dependencyMap[3]).space.PX_8 + arg0, paddingHorizontal: importDefault(dependencyMap[3]).space.PX_8, paddingVertical: importDefault(dependencyMap[3]).space.PX_4, borderRadius: importDefault(dependencyMap[3]).radii.sm, alignSelf: "flex-end" };
  obj.container = obj;
  return obj;
});
const obj2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function MediaModalOverlayAltTextButton(description) {
  description = description.description;
  let arg1;
  let str = "";
  if (null != description) {
    str = description;
  }
  arg1 = str;
  const ViewImageDescriptions = arg1(dependencyMap[5]).ViewImageDescriptions;
  let tmp2 = null;
  if (ViewImageDescriptions.useSetting()) {
    tmp2 = null;
    if (0 !== str.length) {
      let obj = {
        style: tmp.container,
        onPress() {
              const obj = {};
              const str = "";
              obj.description = str;
              callback(closure_2[7])(obj);
            },
        hitSlop: {}
      };
      obj = {};
      const intl = arg1(dependencyMap[9]).intl;
      obj.children = intl.string(arg1(dependencyMap[9]).t.Q5VqrN);
      obj.children = jsx(arg1(dependencyMap[8]).Text, obj);
      tmp2 = jsx(arg1(dependencyMap[6]).PressableOpacity, obj);
    }
  }
  return tmp2;
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx");

export default memoResult;
