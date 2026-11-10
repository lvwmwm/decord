// Module ID: 10908
// Function ID: 10909
// Name: OAuth2AuthorizeContent
// Dependencies: [32, 19, 17, 21, 5014, 575, 1491, 1625, 6954, 9367, 2]
// Exports: default

// Module 10908 (OAuth2AuthorizeContent)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1491 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 6954 */;
import ObscuredSurfaceDefault from "ObscuredSurface" /* 9367 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { fill: { flex: 1 }, scrollView: obj2, scrollViewContentLandscape: { flexDirection: "row", alignItems: "center", width: "100%", flexGrow: 1, gap: 16 }, scrollViewContentPortrait: { flexDirection: "column", width: "100%", flexGrow: 1, gap: 16 }, header: { paddingTop: 24 }, bodyContainer: { flexDirection: "column", gap: 16, padding: 16 }, bodyContainerBackground: obj3, footerPortrait: { flexDirection: "column", padding: 16, gap: 16 }, separator: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeContent.tsx");

export default function OAuth2AuthorizeContent(onScroll) {
  let appDetails;
  let body;
  let bottom;
  let centerContent;
  let closure_4;
  let first;
  let first1;
  let first2;
  let footer;
  let hasContentBackground;
  let header;
  let items1;
  let items2;
  let items3;
  let items5;
  let items6;
  let items7;
  let left;
  let obj4;
  let obscured;
  let right;
  let setAllContentSeen;
  let tmp3Result2;
  ({ header, footer, appDetails, setAllContentSeen } = onScroll);
  onScroll = onScroll.onScroll;
  first = undefined;
  closure_4 = undefined;
  first1 = undefined;
  metroRequire = undefined;
  metroImportDefault = undefined;
  metroImportAll = undefined;
  ({ body, centerContent, hasContentBackground, obscured } = onScroll);
  let tmp = closure_9();
  let obj = react;
  const ref = react.useRef(null);
  const tmp4 = dependencyMap;
  size = useWindowDimensionsDefault();
  ({ left, right, bottom } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  [first, closure_4] = react.useState(-1);
  [first1, metroRequire] = react.useState(-1);
  [first2, metroImportDefault] = react.useState(-1);
  let tmp13 = first >= 0 && first1 >= 0;
  if (tmp13) {
    tmp13 = null == footer || first2 >= 0;
  }
  metroImportAll = tmp13;
  const items = [first, tmp13, first1, setAllContentSeen];
  const layoutEffect = obj.useLayoutEffect(() => {
    let obj2;
    let obj3;
    const tmp = closure_8;
    if (tmp) {
      const obj = { layoutMeasurement: obj2, contentSize: obj3 };
      let contentOffset = obj.contentOffset;
      const layoutMeasurement = obj.layoutMeasurement;
      obj2 = { height: first1 };
      obj3 = { height };
      if (contentOffset === undefined) {
        contentOffset = { y: 0 };
      }
      if (layoutMeasurement.height + contentOffset.y >= obj.contentSize.height - 5) {
        if (setAllContentSeen != null) {
          tmp7(true);
        }
      } else if (setAllContentSeen != null) {
        tmp4(false);
      }
    }
  }, items);
  let obj2 = { style: items1, children: items7 };
  items1 = [tmp.fill, { marginBottom: bottom }];
  let obj3 = {
    style: items2,
    contentContainerStyle: tmp5 ? tmp.scrollViewContentLandscape : tmp.scrollViewContentPortrait,
    ref,
    onContentSizeChange(arg0, arg1) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0 });
      }
      closure_4(arg1);
    },
    scrollEventThrottle: 16,
    onLayout(nativeEvent) {
      closure_6(nativeEvent.nativeEvent.layout.height);
    },
    onScroll(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      let contentOffset = nativeEvent.contentOffset;
      const layoutMeasurement = nativeEvent.layoutMeasurement;
      if (contentOffset === undefined) {
        contentOffset = { y: 0 };
      }
      if (layoutMeasurement.height + contentOffset.y >= nativeEvent.contentSize.height - 5) {
        if (setAllContentSeen != null) {
          tmp(true);
        }
      }
      if (onScroll != null) {
        onScroll(nativeEvent);
      }
    },
    centerContent,
    children: metroImportAll(tmp3Result2, obj4)
  };
  items2 = [tmp.scrollView, { paddingLeft: left, paddingRight: right }];
  let tmp18Result = null;
  obj4 = { obscured, children: items3 };
  const tmp3Result = KeyboardAwareViewDefault;
  const tmp19 = hasOwnProperty;
  tmp3Result2 = ObscuredSurfaceDefault;
  if (null != header) {
    const obj5 = { style: tmp.header, children: header };
    tmp18Result = tmp18(React3, obj5);
  }
  items3 = [tmp18Result, ];
  const items4 = [tmp.bodyContainer, , ];
  let prop = null;
  if (hasContentBackground) {
    prop = tmp.bodyContainerBackground;
  }
  items4[1] = prop;
  const obj6 = { style: items4, children: items5 };
  items4[2] = size.width > size.height ? { flex: 1 } : {};
  items5 = [body, ];
  let tmp16Result = null;
  if (null != appDetails) {
    const obj7 = { children: items6 };
    const obj8 = { style: tmp.separator };
    items6 = [metroRequire(React3, obj8), ];
    const obj9 = { children: appDetails };
    items6[1] = metroRequire(React3, obj9);
    tmp16Result = tmp16(metroImportDefault, obj7);
  }
  items5[1] = tmp16Result;
  items3[1] = metroImportAll(React3, obj6);
  items7 = [metroRequire(tmp19, obj3), ];
  let tmp18Result2 = null;
  if (null != footer) {
    const obj10 = {
      onLayout(nativeEvent) {
          closure_7(nativeEvent.nativeEvent.layout.height);
        },
      style: tmp.footerPortrait,
      children: footer
    };
    tmp18Result2 = tmp18(tmp23, obj10);
  }
  items7[1] = tmp18Result2;
  return metroImportAll(tmp3Result, obj2);
};
