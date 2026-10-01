// Module ID: 9310
// Function ID: 9311
// Name: InstantInviteShareApps
// Dependencies: [32, 19, 17, 9311, 21, 4836, 576, 5288, 6073, 9345, 7363, 9066, 2]

// Module 9310 (InstantInviteShareApps)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import InstantInviteConstants from "components/InstantInviteConstants" /* 9311 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, type;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ SHARE_ITEMS: metroImportDefault, SHARE_ITEMS_DEFAULT: metroImportAll } = InstantInviteConstants);
const jsx = Fragment.jsx;
let obj = { contentContainer: obj2 };
obj2 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, alignItems: "center" };
let closure_10 = createStyles.createStyles(obj);
const memoResult = react.memo(function InstantInviteShareApps(onItemPressed) {
  let _undefined;
  let arr;
  let c2;
  onItemPressed = onItemPressed.onItemPressed;
  dependencyMap = undefined;
  const contentContainerStyle = onItemPressed.contentContainerStyle;
  let tmp = closure_10();
  const obj = onItemPressed(5288);
  let closure_1 = obj.useFontScale();
  const tmp2 = _slicedToArray(react.useState(closure_8), 2);
  [arr, c2] = tmp2;
  let obj2 = onItemPressed(6073);
  const gesture = obj2.useNativeGesture({ disallowInterruption: true });
  const effect = react.useEffect(() => {
    const allPromises = Promise.all(metroImportDefault.map((isAvailable) => isAvailable.isAvailable));
    allPromises.then((arr) => {
      const items = [];
      const item = arr.forEach((item, index) => {
        const tmp = item;
        if (tmp) {
          items.push(closure_2_7[index]);
        }
      });
      _undefined(items);
    });
  }, []);
  let items = [tmp.contentContainer, contentContainerStyle];
  const children = <closure_6 contentContainerStyle={items} showsHorizontalScrollIndicator={false} horizontal>{arr.map((type) => {
    let IconComponent;
    let fullIcon;
    let getLabel;
    let icon;
    let tmpResult;
    ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
    type = type.type;
    const obj2 = { maxWidth: 76 * closure_1 };
    if (null != fullIcon) {
      const obj3 = {
        image: fullIcon,
        label: getLabel(),
        onPress() {
            return onItemPressed(onItemPressed);
          },
        maxFontSizeMultiplier: 2
      };
      const ImageButton = onItemPressed(c2[9]).ImageButton;
      tmpResult = tmp(ImageButton, obj3);
    } else {
      const IconButton = onItemPressed(c2[10]).IconButton;
      const tmp4 = c2;
      if (null == IconComponent) {
        if (icon == null) {
          icon = closure_1(tmp4[11]);
        }
        IconComponent = icon;
      }
      const obj4 = {
        variant: "secondary",
        icon: IconComponent,
        label: getLabel(),
        onPress() {
            return onItemPressed(onItemPressed);
          },
        maxFontSizeMultiplier: 2
      };
      tmpResult = tmp(IconButton, obj4);
    }
    return <tmp2 key={type} style={obj2}>{tmpResult}</tmp2>;
  })}</closure_6>;
  return jsx(onItemPressed(6073).GestureDetector, { gesture, children });
});
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default memoResult;
