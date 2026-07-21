// Module ID: 13842
// Function ID: 104632
// Name: CARD_WIDTH
// Dependencies: []

// Module 13842 (CARD_WIDTH)
let num = 0;
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ AppState: closure_5, StyleSheet: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_12 = arg1(dependencyMap[6]).createStyles(() => {
  let obj = {};
  obj = { gap: importDefault(dependencyMap[7]).space.PX_12 };
  obj.tile = obj;
  obj.card = {};
  obj = {};
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj.cardImage = obj;
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj.previewVideo = {};
  obj.badge = { position: "absolute", top: importDefault(dependencyMap[7]).space.PX_12, left: importDefault(dependencyMap[7]).space.PX_12, backgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.round, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8, paddingVertical: importDefault(dependencyMap[7]).space.PX_4, color: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj1 = {};
  const obj2 = { position: "absolute", top: importDefault(dependencyMap[7]).space.PX_12, left: importDefault(dependencyMap[7]).space.PX_12, backgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.round, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8, paddingVertical: importDefault(dependencyMap[7]).space.PX_4, color: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.badgeContent = { gap: importDefault(dependencyMap[7]).space.PX_4 };
  const obj3 = { gap: importDefault(dependencyMap[7]).space.PX_4 };
  obj.badgeText = { textTransform: "uppercase", color: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj4 = { textTransform: "uppercase", color: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.startButton = { position: "absolute", bottom: importDefault(dependencyMap[7]).space.PX_8, left: importDefault(dependencyMap[7]).space.PX_8, right: importDefault(dependencyMap[7]).space.PX_8 };
  obj.cardFooter = { "Null": "row", "Null": "center", "Null": "space-between" };
  const obj6 = { x: null, "Null": null, "Null": null, gap: importDefault(dependencyMap[7]).space.PX_4 };
  obj.advertiserRow = obj6;
  obj.advertiserName = { flexShrink: 1 };
  obj.advertiserIcon = { <string:1415356514>: "e2f2314b317d679f7a97eb76ebf6b124", <string:3609742505>: "UnsendIcon" };
  return obj;
});
const obj2 = arg1(dependencyMap[6]);
if (obj3.isAndroid()) {
  num = 150;
}
const obj3 = arg1(dependencyMap[8]);
let closure_14 = arg1(dependencyMap[8]).isAndroid();
const obj4 = arg1(dependencyMap[8]);
let closure_15 = arg1(dependencyMap[8]).isAndroid();
const obj5 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo((bounty) => {
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp33;
  bounty = bounty.bounty;
  const arg1 = bounty;
  const index = bounty.index;
  const importDefault = index;
  const isActive = bounty.isActive;
  const dependencyMap = isActive;
  const onPress = bounty.onPress;
  let callback = onPress;
  let React;
  tmp15 = undefined;
  let first;
  let tmp18;
  let closure_8;
  let closure_9;
  let callback2;
  let tmp36;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => ref.isBountyCompleted(bounty.id));
  const items1 = [onPress, bounty, index];
  callback = React.useCallback(() => {
    onPress(bounty, index);
  }, items1);
  const videoPreview = bounty.videoPreview;
  let scaledImageUrl = null;
  if (null != bounty.imagePreview) {
    let obj1 = arg1(dependencyMap[10]);
    obj = { flex: true, flexDirection: true, alignItems: true, assetUrl: bounty.imagePreview };
    scaledImageUrl = obj1.getScaledImageUrl(obj);
  }
  if (tmp7) {
    let obj3 = arg1(dependencyMap[10]);
    obj = { flex: true, flexDirection: true, alignItems: true, assetUrl: videoPreview };
    scaledImageUrl = obj3.getScaledFirstFrameImageUrl(obj);
  }
  [tmp11, closure_4] = callback(React.useState(false), 2);
  const callback1 = React.useCallback(() => {
    _undefined(true);
  }, []);
  const tmp10 = callback(React.useState(false), 2);
  const tmp7 = null == scaledImageUrl && null != videoPreview;
  [tmp14, tmp15] = callback(React.useState(false), 2);
  const tmp16 = callback(React.useState(false), 2);
  first = tmp16[0];
  tmp18 = tmp16[1];
  let obj5 = arg1(dependencyMap[9]);
  const items2 = [closure_8];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => closure_8.useReducedMotion);
  let obj6 = arg1(dependencyMap[11]);
  const token = obj6.useToken(importDefault(dependencyMap[7]).modules.mobile.BOUNTY_TILE_BORDER_RADIUS);
  closure_8 = React.useRef(null);
  callback2 = React.useCallback(() => {
    if (null != closure_8.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_8.current);
    }
    closure_8.current = setTimeout(() => {
      callback(true);
    }, closure_13);
  }, []);
  const tmp22 = callback(React.useState(isActive), 2);
  if (isActive !== tmp22[0]) {
    tmp22[1](isActive);
    if (isActive) {
      let tmp26 = tmp14;
      if (tmp14) {
        tmp26 = !first;
      }
      if (tmp26) {
        tmp15(false);
      }
      if (first) {
        tmp18(false);
      }
    } else if (closure_14) {
      tmp18(true);
    }
  }
  closure_9 = React.useRef(null);
  const items3 = [first];
  const effect = React.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      closure_9.current = setTimeout(() => {
        callback2(false);
        callback(false);
        closure_9.current = null;
      }, 150);
    }
    return () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
    };
  }, items3);
  const items4 = [isActive];
  const effect1 = React.useEffect(() => {
    let tmp = isActive;
    if (isActive) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    let tmp9 = isActive;
    if (!isActive) {
      tmp9 = null == closure_8.current;
    }
    if (!tmp9) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_8.current);
      closure_8.current = null;
    }
  }, items4);
  const effect2 = React.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const tmp13 = callback(React.useState(false), 2);
  [tmp33, closure_10] = callback(React.useState("active" === tmp15.currentState), 2);
  const effect3 = React.useEffect(() => {
    let closure_0 = tmp15.addEventListener("change", (arg0) => {
      callback("active" === arg0);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  let tmp40Result = isActive;
  if (!isActive) {
    tmp40Result = first;
  }
  if (tmp40Result) {
    tmp40Result = null != videoPreview;
  }
  if (tmp40Result) {
    tmp40Result = tmp11;
  }
  let isModalVisible = closure_15;
  if (closure_15) {
    isModalVisible = bounty.isModalVisible;
  }
  tmp36 = !isModalVisible;
  if (tmp36) {
    if (first) {
      first = !isActive;
    }
    tmp36 = !first;
  }
  if (tmp36) {
    tmp36 = tmp40Result;
  }
  if (tmp36) {
    tmp36 = tmp14;
  }
  const items5 = [tmp36];
  obj1 = { style: tmp.tile };
  const memo = React.useMemo(() => {
    const obj = {};
    let num = 1;
    if (tmp36) {
      num = 0;
    }
    obj.opacity = num;
    return obj;
  }, items5);
  const obj2 = { style: tmp.card, radius: token, onPress: callback, android_ripple: { color: "transparent" } };
  if (tmp40Result) {
    obj3 = { "Bool(true)": "45%", "Bool(true)": "center", "Bool(true)": "center", "Bool(true)": "absolute", "Bool(true)": 124, "Bool(true)": 0, "Bool(true)": 0, "Bool(true)": "center", "Bool(true)": "flex-start", "Bool(true)": "absolute", onReadyForDisplay: callback2 };
    const obj4 = { uri: videoPreview };
    obj3.source = obj4;
    obj3.style = tmp.previewVideo;
    let tmp44 = !tmp33;
    if (!tmp44) {
      tmp44 = stateFromStores1;
    }
    obj3.paused = tmp44;
    tmp40Result = callback2(importDefault(dependencyMap[13]), obj3);
    const tmp40 = callback2;
    const tmp43 = importDefault(dependencyMap[13]);
  }
  const items6 = [tmp40Result, , , ];
  obj5 = { style: items7, onLoad: callback1 };
  const items7 = [tmp.cardImage, memo];
  obj6 = {};
  let tmp47;
  const tmp32 = callback(React.useState("active" === tmp15.currentState), 2);
  const tmp39 = tmp18;
  const tmp45 = callback2;
  if (null != scaledImageUrl) {
    tmp47 = scaledImageUrl;
  }
  obj6.uri = tmp47;
  obj5.source = obj6;
  obj5.resizeMode = "cover";
  items6[1] = tmp45(importDefault(dependencyMap[14]), obj5);
  const obj7 = { style: tmp.badge };
  const obj8 = { style: tmp.badgeContent };
  let tmp51 = stateFromStores;
  if (stateFromStores) {
    const obj9 = { size: "xxs", color: importDefault(dependencyMap[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
    tmp51 = callback2(arg1(dependencyMap[15]).CheckmarkSmallBoldIcon, obj9);
  }
  const items8 = [tmp51, ];
  const obj10 = { variant: "text-xs/bold", style: tmp.badgeText };
  const intl = arg1(dependencyMap[17]).intl;
  const t = arg1(dependencyMap[17]).t;
  obj10.children = intl.string(stateFromStores ? t.vlGTLf : t.fFIJ/9);
  items8[1] = callback2(arg1(dependencyMap[16]).Text, obj10);
  obj8.children = items8;
  obj7.children = tmp36(tmp18, obj8);
  items6[2] = callback2(tmp18, obj7);
  const obj11 = { style: tmp.startButton };
  const obj12 = { variant: "secondary-overlay" };
  const intl2 = arg1(dependencyMap[17]).intl;
  const string = intl2.string;
  const t2 = arg1(dependencyMap[17]).t;
  if (stateFromStores) {
    let stringResult = string(t2.9UtZAY);
  } else {
    stringResult = string(t2.LhlgY9);
  }
  obj12.text = stringResult;
  obj12.onPress = callback;
  obj11.children = callback2(arg1(dependencyMap[18]).Button, obj12);
  items6[3] = callback2(tmp18, obj11);
  obj2.children = items6;
  const items9 = [tmp36(arg1(dependencyMap[12]).Card, obj2), ];
  const obj13 = { style: tmp.cardFooter };
  const obj14 = { style: tmp.advertiserRow };
  const obj15 = { -9223372036854775808: true, 0: true, 0: true, style: tmp.advertiserName };
  const advertiserName = bounty.advertiserName;
  let str2 = "";
  if (null != advertiserName) {
    str2 = advertiserName;
  }
  obj15.children = str2;
  const items10 = [callback2(arg1(dependencyMap[16]).Text, obj15), ];
  const obj16 = { size: "xxs", style: tmp.advertiserIcon, color: importDefault(dependencyMap[7]).colors.ICON_SUBTLE };
  items10[1] = callback2(arg1(dependencyMap[19]).CircleCheckIcon, obj16);
  obj14.children = items10;
  const items11 = [tmp36(tmp18, obj14), ];
  const obj17 = {};
  const intl3 = arg1(dependencyMap[17]).intl;
  obj17.children = intl3.string(arg1(dependencyMap[17]).t.o6FLcF);
  items11[1] = callback2(arg1(dependencyMap[16]).Text, obj17);
  obj13.children = items11;
  items9[1] = tmp36(tmp18, obj13);
  obj1.children = items9;
  return tmp36(tmp39, obj1);
});
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/quests/native/BountyCard.tsx");

export default memoResult;
export const CARD_WIDTH = 188;
