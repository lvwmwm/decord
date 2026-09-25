// Module ID: 9299
// Function ID: 9300
// Name: InstantInviteShareApps
// Dependencies: [32, 19, 17, 9300, 21, 4829, 576, 5281, 6068, 9334, 7358, 9055, 2]

// Module 9299 (InstantInviteShareApps)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const InstantInviteConstants = fn(9300);
({ SHARE_ITEMS: closure_7, SHARE_ITEMS_DEFAULT: closure_8 } = InstantInviteConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj = { contentContainer: { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, alignItems: "center" } };
let closure_10 = createStyles.createStyles(obj);
let obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default noop.memo(function InstantInviteShareApps(onItemPressed) {
  onItemPressed = onItemPressed.onItemPressed;
  dependencyMap = undefined;
  const tmp = closure_10();
  closure_1 = onItemPressed(5281).useFontScale();
  let obj = onItemPressed(5281);
  [arr, c2] = noop.useState(closure_8);
  const tmp2 = _slicedToArray(noop.useState(closure_8), 2);
  const gesture = onItemPressed(6068).useNativeGesture({ disallowInterruption: true });
  const effect = noop.useEffect(() => {
    Promise.all(React5.map((isAvailable) => isAvailable.isAvailable)).then((arr) => {
      const items = [];
      const item = arr.forEach((item, index) => {
        if (item) {
          items.push(closure_2_7[index]);
        }
      });
      _undefined(items);
    });
  }, []);
  let obj3 = {
    contentContainerStyle: null,
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    children: arr.map((type) => {
      ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
      const obj = { style: { maxWidth: 76 * closure_1 }, children: null };
      if (null != fullIcon) {
        const obj3 = {
          image: fullIcon,
          label: getLabel(),
          onPress() {
              return onItemPressed(closure_1_0);
            },
          maxFontSizeMultiplier: 2
        };
        let tmpResult = tmp(onItemPressed(_undefined[9]).ImageButton, obj3);
      } else {
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
              return onItemPressed(closure_1_0);
            },
          maxFontSizeMultiplier: 2
        };
        tmpResult = tmp(onItemPressed(_undefined[10]).IconButton, obj4);
        tmp4 = _undefined;
      }
      obj.children = tmpResult;
      return <closure_1_5 key={arg0.type} style={{ maxWidth: 76 * closure_1 }}>{null}</closure_1_5>;
    })
  };
  let items = [tmp.contentContainer, onItemPressed.contentContainerStyle];
  obj3.contentContainerStyle = items;
  const children = <closure_6 contentContainerStyle={null} showsHorizontalScrollIndicator={false} horizontal>{arr.map((type) => {
    ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
    const obj = { style: { maxWidth: 76 * closure_1 }, children: null };
    if (null != fullIcon) {
      const obj3 = {
        image: fullIcon,
        label: getLabel(),
        onPress() {
            return onItemPressed(closure_1_0);
          },
        maxFontSizeMultiplier: 2
      };
      let tmpResult = tmp(onItemPressed(_undefined[9]).ImageButton, obj3);
    } else {
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
            return onItemPressed(closure_1_0);
          },
        maxFontSizeMultiplier: 2
      };
      tmpResult = tmp(onItemPressed(_undefined[10]).IconButton, obj4);
      tmp4 = _undefined;
    }
    obj.children = tmpResult;
    return <closure_1_5 key={arg0.type} style={{ maxWidth: 76 * closure_1 }}>{null}</closure_1_5>;
  })}</closure_6>;
  return jsx(onItemPressed(6068).GestureDetector, { gesture, children });
});
