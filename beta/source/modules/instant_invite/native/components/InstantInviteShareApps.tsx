// Module ID: 10090
// Function ID: 10091
// Name: InstantInviteShareApps
// Dependencies: [32, 19, 17, 10091, 21, 4758, 580, 558, 568, 5195, 6891, 10125, 8178, 9851, 2]

// Module 10090 (InstantInviteShareApps)
import nativeDefault from "native" /* 580 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const InstantInviteConstants = fn(10091);
({ SHARE_ITEMS: closure_7, SHARE_ITEMS_DEFAULT: closure_8 } = InstantInviteConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj = { contentContainer: { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, alignItems: "center" } };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onItemPressed) => {
  const cResult = onItemPressed(568).c(19);
  onItemPressed = onItemPressed.onItemPressed;
  const contentContainerStyle = onItemPressed.contentContainerStyle;
  const tmp4 = closure_10();
  let obj = onItemPressed(568);
  const fontScale = onItemPressed(5195).useFontScale();
  const obj2 = onItemPressed(5195);
  let obj3 = noop;
  [arr, dependencyMap] = noop.useState(closure_8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { disallowInterruption: true };
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  const tmp6 = _slicedToArray(noop.useState(closure_8), 2);
  const nativeGesture = onItemPressed(6891).useNativeGesture(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function x() {
      Promise.all(React5.map((isAvailable) => isAvailable.isAvailable)).then((arr) => {
        const items = [];
        const item = arr.forEach((item, index) => {
          if (item) {
            items.push(closure_2_7[index]);
          }
        });
        dependencyMap(items);
      });
    };
    let items = [];
    cResult[1] = fn;
    cResult[2] = items;
    let tmp10 = items;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const effect = obj3.useEffect(tmp9, tmp10);
  if (cResult[3] === contentContainerStyle) {
    if (cResult[4] === tmp4.contentContainer) {
      let tmp12 = cResult[5];
    }
    if (cResult[6] === fontScale) {
      if (cResult[7] === onItemPressed) {
        if (cResult[8] === arr) {
          if (cResult[13] === tmp12) {
            if (cResult[14] === tmp13) {
              let tmp17 = cResult[15];
            }
            if (cResult[16] === nativeGesture) {
              if (cResult[17] === tmp17) {
                let tmp21 = cResult[18];
              }
              return tmp21;
            }
            const obj5 = { gesture: nativeGesture, children: tmp17 };
            const tmp23 = jsx(tmp(6891).GestureDetector, { gesture: nativeGesture, children: tmp17 });
            cResult[16] = nativeGesture;
            cResult[17] = tmp17;
            cResult[18] = tmp23;
            tmp21 = tmp23;
          }
          const obj6 = { contentContainerStyle: tmp12, showsHorizontalScrollIndicator: false, horizontal: true, children: cResult[9] };
          const tmp20 = <closure_6 contentContainerStyle={tmp12} showsHorizontalScrollIndicator={false} horizontal>{cResult[9]}</closure_6>;
          cResult[13] = tmp12;
          cResult[14] = cResult[9];
          cResult[15] = tmp20;
          tmp17 = tmp20;
        }
      }
    }
    if (cResult[10] === fontScale) {
      if (cResult[11] === onItemPressed) {
        let tmp14 = cResult[12];
      }
      const mapped = arr.map(tmp14);
      cResult[6] = fontScale;
      cResult[7] = onItemPressed;
      cResult[8] = arr;
      cResult[9] = mapped;
    }
    const fn2 = function w(type) {
      ({ fullIcon, getLabel, icon, IconComponent, onPress: onItemPressed } = type);
      const obj = { style: { maxWidth: 76 * fontScale }, children: null };
      if (null != fullIcon) {
        const obj3 = {
          image: fullIcon,
          label: getLabel(),
          onPress() {
              return onItemPressed(closure_1_0);
            },
          maxFontSizeMultiplier: 2
        };
        let tmpResult = tmp(onItemPressed(10125).ImageButton, obj3);
      } else {
        if (null == IconComponent) {
          if (icon == null) {
            icon = fontScale(9851);
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
        tmpResult = tmp(onItemPressed(8178).IconButton, obj4);
      }
      obj.children = tmpResult;
      return <closure_1_5 key={arg0.type} style={{ maxWidth: 76 * fontScale }}>{null}</closure_1_5>;
    };
    cResult[10] = fontScale;
    cResult[11] = onItemPressed;
    cResult[12] = fn2;
    tmp14 = fn2;
  }
  const items1 = [tmp4.contentContainer, contentContainerStyle];
  cResult[3] = contentContainerStyle;
  cResult[4] = tmp4.contentContainer;
  cResult[5] = items1;
  tmp12 = items1;
}) : ((onItemPressed) => {
  onItemPressed = onItemPressed.onItemPressed;
  dependencyMap = undefined;
  const tmp = closure_10();
  closure_1 = onItemPressed(5195).useFontScale();
  let obj = onItemPressed(5195);
  [arr, c2] = noop.useState(closure_8);
  const tmp2 = _slicedToArray(noop.useState(closure_8), 2);
  const gesture = onItemPressed(6891).useNativeGesture({ disallowInterruption: true });
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
        let tmpResult = tmp(onItemPressed(_undefined[11]).ImageButton, obj3);
      } else {
        if (null == IconComponent) {
          if (icon == null) {
            icon = closure_1(tmp4[13]);
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
        tmpResult = tmp(onItemPressed(_undefined[12]).IconButton, obj4);
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
      let tmpResult = tmp(onItemPressed(_undefined[11]).ImageButton, obj3);
    } else {
      if (null == IconComponent) {
        if (icon == null) {
          icon = closure_1(tmp4[13]);
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
      tmpResult = tmp(onItemPressed(_undefined[12]).IconButton, obj4);
      tmp4 = _undefined;
    }
    obj.children = tmpResult;
    return <closure_1_5 key={arg0.type} style={{ maxWidth: 76 * closure_1 }}>{null}</closure_1_5>;
  })}</closure_6>;
  return jsx(onItemPressed(6891).GestureDetector, { gesture, children });
}));
