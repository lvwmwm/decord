// Module ID: 14016
// Function ID: 107183
// Name: CARD_WIDTH
// Dependencies: [57, 31, 27, 4122, 6940, 33, 4130, 689, 478, 566, 9494, 3834, 5167, 8192, 5085, 8569, 4126, 1212, 4543, 4091, 2]

// Module 14016 (CARD_WIDTH)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import isWindows from "isWindows";
import isWindows from "isWindows";
import isWindows from "isWindows";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
let num = 0;
({ AppState: closure_5, StyleSheet: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { gap: importDefault(689).space.PX_12 };
  obj.tile = obj;
  obj.card = { width: 188, height: 313, overflow: "hidden", padding: 0 };
  obj = {};
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj.cardImage = obj;
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj.previewVideo = {};
  obj.badge = { position: "absolute", top: importDefault(689).space.PX_12, left: importDefault(689).space.PX_12, backgroundColor: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: importDefault(689).radii.round, paddingHorizontal: importDefault(689).space.PX_8, paddingVertical: importDefault(689).space.PX_4, color: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_4 };
  obj.badgeContent = obj3;
  const obj1 = {};
  const obj2 = { position: "absolute", top: importDefault(689).space.PX_12, left: importDefault(689).space.PX_12, backgroundColor: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: importDefault(689).radii.round, paddingHorizontal: importDefault(689).space.PX_8, paddingVertical: importDefault(689).space.PX_4, color: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.badgeText = { textTransform: "uppercase", color: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj4 = { textTransform: "uppercase", color: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.startButton = { position: "absolute", bottom: importDefault(689).space.PX_8, left: importDefault(689).space.PX_8, right: importDefault(689).space.PX_8 };
  obj.cardFooter = { flexDirection: "column", alignItems: "flex-start", maxWidth: 188 };
  const obj6 = { flexDirection: "row", gap: importDefault(689).space.PX_4, alignItems: "center" };
  obj.advertiserRow = obj6;
  obj.advertiserName = { flexShrink: 1 };
  obj.advertiserIcon = { flexShrink: 0, opacity: 0.7 };
  return obj;
});
if (isWindows.isAndroid()) {
  num = 150;
}
isWindows = isWindows.isAndroid();
isWindows = isWindows.isAndroid();
const memoResult = importAllResult.memo((bounty) => {
  let c10;
  let c4;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp33;
  bounty = bounty.bounty;
  const index = bounty.index;
  const isActive = bounty.isActive;
  const onPress = bounty.onPress;
  let currentState;
  let first;
  let c7;
  let _isNativeReflectConstruct;
  let closure_9;
  let callback;
  let c11;
  let tmp = callback2();
  let obj = bounty(isActive[9]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => ref.isBountyCompleted(bounty.id));
  const items1 = [onPress, bounty, index];
  callback = importAllResult.useCallback(() => {
    onPress(bounty, index);
  }, items1);
  const videoPreview = bounty.videoPreview;
  let scaledImageUrl = null;
  if (null != bounty.imagePreview) {
    let obj1 = bounty(isActive[10]);
    obj = { assetUrl: bounty.imagePreview, width: 188, height: 313 };
    scaledImageUrl = obj1.getScaledImageUrl(obj);
  }
  if (tmp7) {
    let obj3 = bounty(isActive[10]);
    obj = { assetUrl: videoPreview, width: 188, height: 313 };
    scaledImageUrl = obj3.getScaledFirstFrameImageUrl(obj);
  }
  [tmp11, c4] = onPress(undefined.useState(false), 2);
  const callback1 = importAllResult.useCallback(() => {
    _undefined(true);
  }, []);
  const tmp10 = onPress(undefined.useState(false), 2);
  tmp7 = null == scaledImageUrl && null != videoPreview;
  [tmp14, tmp15] = onPress(undefined.useState(false), 2);
  currentState = tmp15;
  const tmp16 = onPress(undefined.useState(false), 2);
  first = tmp16[0];
  c7 = tmp18;
  let obj5 = bounty(isActive[9]);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => _isNativeReflectConstruct.useReducedMotion);
  let obj6 = bounty(isActive[11]);
  const token = obj6.useToken(index(isActive[7]).modules.mobile.BOUNTY_TILE_BORDER_RADIUS);
  _isNativeReflectConstruct = importAllResult.useRef(null);
  callback2 = importAllResult.useCallback(() => {
    if (null != _isNativeReflectConstruct.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(_isNativeReflectConstruct.current);
    }
    _isNativeReflectConstruct.current = setTimeout(() => {
      outer1_5(true);
    }, outer1_13);
  }, []);
  const tmp22 = onPress(undefined.useState(isActive), 2);
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
    } else if (isWindows) {
      tmp18(true);
    }
  }
  closure_9 = importAllResult.useRef(null);
  const items3 = [first];
  const effect = importAllResult.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      closure_9.current = setTimeout(() => {
        outer1_7(false);
        outer1_5(false);
        outer1_9.current = null;
      }, 150);
    }
    return () => {
      if (null != outer1_9.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(outer1_9.current);
        outer1_9.current = null;
      }
    };
  }, items3);
  const items4 = [isActive];
  const effect1 = importAllResult.useEffect(() => {
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
      tmp9 = null == _isNativeReflectConstruct.current;
    }
    if (!tmp9) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(_isNativeReflectConstruct.current);
      _isNativeReflectConstruct.current = null;
    }
  }, items4);
  const effect2 = importAllResult.useEffect(() => () => {
    if (null != outer1_8.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(outer1_8.current);
      outer1_8.current = null;
    }
  }, []);
  const tmp13 = onPress(undefined.useState(false), 2);
  [tmp33, c10] = onPress(undefined.useState("active" === currentState.currentState), 2);
  const effect3 = importAllResult.useEffect(() => {
    let closure_0 = _undefined2.addEventListener("change", (arg0) => {
      outer1_10("active" === arg0);
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
  let isModalVisible = isWindows;
  if (isWindows) {
    isModalVisible = bounty.isModalVisible;
  }
  let tmp36 = !isModalVisible;
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
  c11 = tmp36;
  const items5 = [tmp36];
  obj1 = { style: tmp.tile };
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    let num = 1;
    if (c11) {
      num = 0;
    }
    obj.opacity = num;
    return obj;
  }, items5);
  const obj2 = { style: tmp.card, radius: token, onPress: callback, android_ripple: { color: "transparent" } };
  if (tmp40Result) {
    obj3 = { accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", onReadyForDisplay: callback2, source: null, style: null, resizeMode: "cover", repeat: true, muted: true, disableFocus: true };
    const obj4 = { uri: videoPreview };
    obj3.source = obj4;
    obj3.style = tmp.previewVideo;
    let tmp44 = !tmp33;
    if (!tmp44) {
      tmp44 = stateFromStores1;
    }
    obj3.paused = tmp44;
    tmp40Result = callback(index(isActive[13]), obj3);
    const tmp40 = callback;
    const tmp43 = index(isActive[13]);
  }
  const items6 = [tmp40Result, , , ];
  obj5 = { style: items7, onLoad: callback1 };
  items7 = [tmp.cardImage, memo];
  obj6 = {};
  let tmp47;
  const tmp32 = onPress(undefined.useState("active" === currentState.currentState), 2);
  const tmp39 = c7;
  const tmp45 = callback;
  if (null != scaledImageUrl) {
    tmp47 = scaledImageUrl;
  }
  obj6.uri = tmp47;
  obj5.source = obj6;
  obj5.resizeMode = "cover";
  items6[1] = tmp45(index(isActive[14]), obj5);
  const obj7 = { style: tmp.badge };
  const obj8 = { style: tmp.badgeContent };
  let tmp51 = stateFromStores;
  if (stateFromStores) {
    const obj9 = { size: "xxs", color: index(isActive[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
    tmp51 = callback(bounty(isActive[15]).CheckmarkSmallBoldIcon, obj9);
  }
  const items8 = [tmp51, ];
  const obj10 = { variant: "text-xs/bold", style: tmp.badgeText };
  const intl = bounty(isActive[17]).intl;
  const t = bounty(isActive[17]).t;
  obj10.children = intl.string(stateFromStores ? t.vlGTLf : t["fFIJ/9"]);
  items8[1] = callback(bounty(isActive[16]).Text, obj10);
  obj8.children = items8;
  obj7.children = c11(c7, obj8);
  items6[2] = callback(c7, obj7);
  const obj11 = { style: tmp.startButton };
  const obj12 = { variant: "secondary-overlay" };
  const intl2 = bounty(isActive[17]).intl;
  const string = intl2.string;
  const t2 = bounty(isActive[17]).t;
  if (stateFromStores) {
    let stringResult = string(t2["9UtZAY"]);
  } else {
    stringResult = string(t2.LhlgY9);
  }
  obj12.text = stringResult;
  obj12.onPress = callback;
  obj11.children = callback(bounty(isActive[18]).Button, obj12);
  items6[3] = callback(c7, obj11);
  obj2.children = items6;
  const items9 = [c11(bounty(isActive[12]).Card, obj2), ];
  const obj13 = { style: tmp.cardFooter };
  const obj14 = { style: tmp.advertiserRow };
  const obj15 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, style: tmp.advertiserName };
  const advertiserName = bounty.advertiserName;
  let str2 = "";
  if (null != advertiserName) {
    str2 = advertiserName;
  }
  obj15.children = str2;
  const items10 = [callback(bounty(isActive[16]).Text, obj15), ];
  const obj16 = { size: "xxs", style: tmp.advertiserIcon, color: index(isActive[7]).colors.ICON_SUBTLE };
  items10[1] = callback(bounty(isActive[19]).CircleCheckIcon, obj16);
  obj14.children = items10;
  const items11 = [c11(c7, obj14), ];
  const obj17 = { variant: "text-sm/medium", color: "text-muted" };
  const intl3 = bounty(isActive[17]).intl;
  obj17.children = intl3.string(bounty(isActive[17]).t.o6FLcF);
  items11[1] = callback(bounty(isActive[16]).Text, obj17);
  obj13.children = items11;
  items9[1] = c11(c7, obj13);
  obj1.children = items9;
  return c11(tmp39, obj1);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/BountyCard.tsx");

export default memoResult;
export const CARD_WIDTH = 188;
