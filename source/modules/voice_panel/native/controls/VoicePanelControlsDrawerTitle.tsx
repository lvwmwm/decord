// Module ID: 11368
// Function ID: 88391
// Dependencies: []

// Module 11368
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = { titleWrapper: obj };
obj = { <string:2038909267>: 20, <string:640898370>: null, <string:1630821457>: "row", <string:1914433812>: "center", <string:3357282920>: "center", <string:3026206311>: null, <string:4084393489>: 6, height: arg1(dependencyMap[2]).CONTROLS_DRAWER_HEADER_SIZE };
obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.titlePill = obj1;
const tmp2 = arg1(dependencyMap[3]);
obj.titlePillBG = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = obj1.createStyles(obj);
let closure_7 = { code: "function VoicePanelControlsDrawerTitleTsx1(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};}" };
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
const memoResult = importAllResult.memo(function VoicePanelControlsDrawerTitle(shown) {
  let blurStyle;
  let style;
  shown = shown.shown;
  const arg1 = shown;
  let flag = shown.disablePill;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let dependencyMap;
  let StyleSheet;
  ({ style, blurStyle } = shown);
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  let sharedValue = obj.useSharedValue(true);
  dependencyMap = sharedValue;
  const backgroundColor = tmp.titlePillBG.backgroundColor;
  StyleSheet = backgroundColor;
  let obj1 = arg1(dependencyMap[6]);
  const fn = function p() {
    const obj = {};
    if (null != shown) {
      let value = shown.get();
    } else {
      value = sharedValue.get();
    }
    let str = "transparent";
    if (value) {
      str = "transparent";
      if (!flag) {
        str = backgroundColor;
      }
    }
    obj.backgroundColor = str;
    return obj;
  };
  obj = { shown, _shown: sharedValue, disablePill: flag, backgroundColor };
  fn.__closure = obj;
  fn.__workletHash = 14837285839887;
  fn.__initData = closure_7;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: items };
  const items = [tmp.titleWrapper, style];
  obj1 = {};
  const tmp4 = closure_5;
  const tmp5 = importDefault(dependencyMap[7]);
  const tmp6 = callback;
  if (null != shown) {
    sharedValue = shown;
  }
  obj1.shown = sharedValue;
  obj1.style = StyleSheet.absoluteFillObject;
  obj1.blurStyle = blurStyle;
  const items1 = [tmp6(importDefault(dependencyMap[8]), obj1), ];
  const obj2 = { style: items2 };
  const items2 = [tmp.titlePill, animatedStyle];
  const tmp7 = importDefault(dependencyMap[8]);
  const obj3 = { handleMessageFocus: 17, enableHome: "message_display_compact", afterMs: "message", children: shown.title };
  obj2.children = callback(arg1(dependencyMap[10]).Text, obj3);
  items1[1] = callback(importDefault(dependencyMap[9]), obj2);
  obj.children = items1;
  return tmp4(tmp5, obj);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx");

export default memoResult;
