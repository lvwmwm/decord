// Module ID: 9998
// Function ID: 77284
// Name: isNearBottom
// Dependencies: [57, 31, 27, 33, 4130, 689, 1450, 1557, 5587, 8627, 2]
// Exports: default

// Module 9998 (isNearBottom)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
function isNearBottom(contentOffset) {
  contentOffset = contentOffset.contentOffset;
  if (contentOffset === undefined) {
    const obj = { y: 0 };
    contentOffset = obj;
  }
  return contentOffset.layoutMeasurement.height + contentOffset.y >= contentOffset.contentSize.height - 5;
}
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { fill: { flex: 1 } };
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.scrollView = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollViewContentLandscape = { flexDirection: "row", alignItems: "center", width: "100%", flexGrow: 1, gap: 16 };
_createForOfIteratorHelperLoose.scrollViewContentPortrait = { flexDirection: "column", width: "100%", flexGrow: 1, gap: 16 };
_createForOfIteratorHelperLoose.header = { paddingTop: 24 };
_createForOfIteratorHelperLoose.bodyContainer = { flexDirection: "column", gap: 16, padding: 16 };
_createForOfIteratorHelperLoose.bodyContainerBackground = { marginHorizontal: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.footerPortrait = { flexDirection: "column", padding: 16, gap: 16 };
let obj1 = { marginHorizontal: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.separator = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeContent.tsx");

export default function OAuth2AuthorizeContent(onScroll) {
  let appDetails;
  let body;
  let bottom;
  let centerContent;
  let footer;
  let hasContentBackground;
  let header;
  let left;
  let obscured;
  let right;
  let setAllContentSeen;
  ({ header, footer, appDetails, setAllContentSeen } = onScroll);
  onScroll = onScroll.onScroll;
  let callback2;
  ({ body, centerContent, hasContentBackground, obscured } = onScroll);
  const tmp = _createForOfIteratorHelperLoose();
  const ref = first.useRef(null);
  const size = setAllContentSeen(onScroll[6])();
  ({ left, right, bottom } = setAllContentSeen(onScroll[7])());
  const tmp5 = ref(first.useState(-1), 2);
  first = tmp5[0];
  let closure_4 = tmp5[1];
  const tmp7 = ref(first.useState(-1), 2);
  const first1 = tmp7[0];
  const callback = tmp7[1];
  const tmp9 = ref(first.useState(-1), 2);
  let closure_7 = tmp9[1];
  let tmp10 = first >= 0;
  if (tmp10) {
    tmp10 = first1 >= 0;
  }
  if (tmp10) {
    tmp10 = null == footer || tmp9[0] >= 0;
    const tmp11 = null == footer || tmp9[0] >= 0;
  }
  callback2 = tmp10;
  const items = [first, tmp10, first1, setAllContentSeen];
  const layoutEffect = first.useLayoutEffect(() => {
    if (c8) {
      let obj = {};
      obj = { height: first1 };
      obj.layoutMeasurement = obj;
      obj = { height: first };
      obj.contentSize = obj;
      if (outer1_10(obj)) {
        if (null != tmp4) {
          setAllContentSeen(true);
        }
      } else if (null != tmp4) {
        setAllContentSeen(false);
      }
    }
  }, items);
  let obj = { style: items1 };
  items1 = [tmp.fill, { marginBottom: bottom }];
  obj = {
    style: items2,
    contentContainerStyle: items3,
    ref,
    onContentSizeChange(arg0, arg1) {
      const current = ref.current;
      if (null != current) {
        const obj = { y: 0 };
        current.scrollTo(obj);
      }
      callback(arg1);
    },
    scrollEventThrottle: 16,
    onLayout(nativeEvent) {
      callback2(nativeEvent.nativeEvent.layout.height);
    },
    onScroll(nativeEvent) {
      if (outer1_10(nativeEvent.nativeEvent)) {
        if (null != setAllContentSeen) {
          setAllContentSeen(true);
        }
      }
      if (null != onScroll) {
        onScroll(nativeEvent);
      }
    },
    centerContent
  };
  items2 = [tmp.scrollView, { paddingLeft: left, paddingRight: right }];
  items3 = [size.width > size.height ? tmp.scrollViewContentLandscape : tmp.scrollViewContentPortrait];
  const tmp13 = callback2;
  const tmp4 = setAllContentSeen(onScroll[7])();
  obj = { obscured };
  let tmp19 = null;
  const tmp14 = setAllContentSeen(onScroll[8]);
  const tmp15 = callback;
  const tmp16 = first1;
  const tmp17 = callback2;
  if (null != header) {
    const obj1 = { style: tmp.header, children: header };
    tmp19 = callback(closure_4, obj1);
  }
  const items4 = [tmp19, ];
  const obj2 = {};
  const items5 = [tmp.bodyContainer, , ];
  let prop = null;
  if (hasContentBackground) {
    prop = tmp.bodyContainerBackground;
  }
  items5[1] = prop;
  if (size.width > size.height) {
    const obj3 = { flex: 1 };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  items5[2] = obj4;
  obj2.style = items5;
  const items6 = [body, ];
  let tmp25 = null;
  if (null != appDetails) {
    const obj5 = {};
    const obj6 = { style: tmp.separator };
    const items7 = [callback(closure_4, obj6), ];
    const obj7 = { children: appDetails };
    items7[1] = callback(closure_4, obj7);
    obj5.children = items7;
    tmp25 = callback2(closure_7, obj5);
  }
  items6[1] = tmp25;
  obj2.children = items6;
  items4[1] = callback2(closure_4, obj2);
  obj.children = items4;
  obj.children = tmp17(setAllContentSeen(onScroll[9]), obj);
  const items8 = [tmp15(tmp16, obj), ];
  let tmp30 = null;
  if (null != footer) {
    const obj8 = {
      onLayout(nativeEvent) {
          callback3(nativeEvent.nativeEvent.layout.height);
        },
      style: tmp.footerPortrait,
      children: footer
    };
    tmp30 = callback(closure_4, obj8);
  }
  items8[1] = tmp30;
  obj.children = items8;
  return tmp13(tmp14, obj);
};
