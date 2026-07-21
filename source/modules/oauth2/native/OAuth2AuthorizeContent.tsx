// Module ID: 9989
// Function ID: 77231
// Name: isNearBottom
// Dependencies: []
// Exports: default

// Module 9989 (isNearBottom)
function isNearBottom(contentOffset) {
  contentOffset = contentOffset.contentOffset;
  if (contentOffset === undefined) {
    const obj = { y: 0 };
    contentOffset = obj;
  }
  return contentOffset.layoutMeasurement.height + contentOffset.y >= contentOffset.contentSize.height - 5;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { fill: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER };
obj.scrollView = obj;
obj.scrollViewContentLandscape = { grow: null, width: null, height: true, borderRadius: null, overflow: "" };
obj.scrollViewContentPortrait = { "Null": "<string:17552193>", "Null": "<string:493961472>", "Null": "<string:72417282>", "Null": "<string:1283408144>" };
obj.header = { paddingTop: 24 };
obj.bodyContainer = {};
const tmp3 = arg1(dependencyMap[3]);
obj.bodyContainerBackground = { marginHorizontal: 16, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.footerPortrait = {};
const obj1 = { marginHorizontal: 16, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[5]).radii.lg };
obj.separator = { height: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
let closure_9 = obj.createStyles(obj);
const obj2 = { height: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeContent.tsx");

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
  const importDefault = setAllContentSeen;
  const dependencyMap = onScroll.onScroll;
  let tmp10;
  ({ body, centerContent, hasContentBackground, obscured } = onScroll);
  const tmp = callback3();
  const ref = React.useRef(null);
  const callback = ref;
  const size = importDefault(dependencyMap[6])();
  ({ left, right, bottom } = importDefault(dependencyMap[7])());
  const tmp5 = callback(React.useState(-1), 2);
  const first = tmp5[0];
  const React = first;
  let closure_4 = tmp5[1];
  const tmp7 = callback(React.useState(-1), 2);
  const first1 = tmp7[0];
  const callback2 = tmp7[1];
  const tmp9 = callback(React.useState(-1), 2);
  let closure_7 = tmp9[1];
  tmp10 = first >= 0;
  if (tmp10) {
    tmp10 = first1 >= 0;
  }
  if (tmp10) {
    tmp10 = null == footer || tmp9[0] >= 0;
    const tmp11 = null == footer || tmp9[0] >= 0;
  }
  const items = [first, tmp10, first1, setAllContentSeen];
  const layoutEffect = React.useLayoutEffect(() => {
    if (tmp10) {
      let obj = {};
      obj = { height: first1 };
      obj.layoutMeasurement = obj;
      obj = { height: first };
      obj.contentSize = obj;
      if (callback4(obj)) {
        if (null != tmp4) {
          setAllContentSeen(true);
        }
      } else if (null != tmp4) {
        setAllContentSeen(false);
      }
    }
  }, items);
  let obj = { style: items1 };
  const items1 = [tmp.fill, { marginBottom: bottom }];
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
      if (callback4(nativeEvent.nativeEvent)) {
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
  const items2 = [tmp.scrollView, { paddingLeft: left, paddingRight: right }];
  const items3 = [size.width > size.height ? tmp.scrollViewContentLandscape : tmp.scrollViewContentPortrait];
  const tmp13 = tmp10;
  const tmp4 = importDefault(dependencyMap[7])();
  obj = { obscured };
  let tmp19 = null;
  const tmp14 = importDefault(dependencyMap[8]);
  const tmp15 = callback2;
  const tmp16 = first1;
  const tmp17 = tmp10;
  if (null != header) {
    const obj1 = { style: tmp.header, children: header };
    tmp19 = callback2(closure_4, obj1);
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
    const items7 = [callback2(closure_4, obj6), ];
    const obj7 = { children: appDetails };
    items7[1] = callback2(closure_4, obj7);
    obj5.children = items7;
    tmp25 = tmp10(closure_7, obj5);
  }
  items6[1] = tmp25;
  obj2.children = items6;
  items4[1] = tmp10(closure_4, obj2);
  obj.children = items4;
  obj.children = tmp17(importDefault(dependencyMap[9]), obj);
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
    tmp30 = callback2(closure_4, obj8);
  }
  items8[1] = tmp30;
  obj.children = items8;
  return tmp13(tmp14, obj);
};
