// Module ID: 12165
// Function ID: 95214
// Dependencies: [57, 31, 27, 12166, 33, 4130, 689, 4549, 5217, 12196, 7771, 12167, 2]

// Module 12165
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import SHARE_APPS_KEY from "SHARE_APPS_KEY";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ SHARE_ITEMS: closure_7, SHARE_ITEMS_DEFAULT: closure_8 } = SHARE_APPS_KEY);
let obj = {};
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "center" };
obj.contentContainer = obj;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function InstantInviteShareApps(onItemPressed) {
  onItemPressed = onItemPressed.onItemPressed;
  let obj = onItemPressed(4549);
  let closure_1 = obj.useFontScale();
  const tmp2 = callback(importAllResult.useState(closure_8), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  const gesture = importAllResult.useMemo(() => {
    const Gesture = onItemPressed(5217).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  const effect = importAllResult.useEffect(() => {
    Promise.all(outer1_7.map((isAvailable) => isAvailable.isAvailable)).then((arr) => {
      const items = [];
      const item = arr.forEach((arg0, arg1) => {
        if (arg0) {
          items.push(outer3_7[arg1]);
        }
      });
      outer1_2(items);
    });
  }, []);
  obj = { contentContainerStyle: null, showsHorizontalScrollIndicator: false, horizontal: true };
  let items = [callback2().contentContainer, onItemPressed.contentContainerStyle];
  obj.contentContainerStyle = items;
  obj.children = first.map((type) => {
    let IconComponent;
    let fullIcon;
    let getLabel;
    let icon;
    let onItemPressed;
    ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
    obj = { style: obj };
    obj = { maxWidth: 76 * callback };
    if (null != fullIcon) {
      obj = {
        image: fullIcon,
        label: getLabel(),
        onPress() {
            return outer1_0(closure_0);
          },
        maxFontSizeMultiplier: 2
      };
      let tmp3Result = outer1_9(onItemPressed(12196).ImageButton, obj);
    } else {
      const obj1 = { variant: "secondary" };
      if (null == IconComponent) {
        if (null == icon) {
          icon = callback(12167);
        }
        IconComponent = icon;
      }
      obj1.icon = IconComponent;
      obj1.label = getLabel();
      obj1.onPress = function onPress() {
        return outer1_0(closure_0);
      };
      obj1.maxFontSizeMultiplier = 2;
      tmp3Result = outer1_9(onItemPressed(7771).IconButton, obj1);
      const tmp3 = outer1_9;
    }
    obj.children = tmp3Result;
    return outer1_9(outer1_5, obj, type.type);
  });
  const children = <closure_6 contentContainerStyle={null} showsHorizontalScrollIndicator={false} horizontal />;
  return jsx(onItemPressed(5217).GestureDetector, { gesture, children });
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default memoResult;
