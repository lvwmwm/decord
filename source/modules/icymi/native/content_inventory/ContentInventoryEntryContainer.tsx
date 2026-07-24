// Module ID: 15282
// Function ID: 116587
// Name: iCYMIStyles
// Dependencies: [31, 27, 1849, 33, 15226, 689, 477, 8365, 8537, 566, 4660, 15265, 1273, 2]
// Exports: default

// Module 15282 (iCYMIStyles)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const iCYMIStyles = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = {};
  obj = {};
  let num = 0;
  if (!arg1) {
    num = margin.margin;
  }
  obj.marginTop = num;
  obj.pressable = obj;
  obj = { marginHorizontal: margin.margin };
  let num2 = 0;
  if (!arg1) {
    num2 = margin.margin;
  }
  obj.paddingBottom = num2;
  let num3 = 0;
  if (arg1) {
    num3 = margin.margin;
  }
  obj.paddingTop = num3;
  obj.container = obj;
  obj.screenshotContainer = { marginBottom: margin.margin };
  const obj1 = { display: "flex", flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_12, marginBottom: margin.margin };
  obj.header = obj1;
  let num4 = 1;
  obj.headerInfo = { flex: 1 };
  const obj2 = { display: "flex", flexDirection: "row", alignItems: "center", gap: 6, marginBottom: null, marginTop: 2 };
  if (obj6.isAndroid()) {
    num4 = -1;
  }
  obj2.marginBottom = num4;
  obj.title = obj2;
  const obj3 = { flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_8 };
  obj.subTitleContainer = obj3;
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx");

export default function ContentInventoryEntryContainer(contentId) {
  let highlight;
  let subtitle;
  let title;
  contentId = contentId.contentId;
  const userId = contentId.userId;
  let flag = contentId.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  const type = contentId.type;
  ({ highlight, title, subtitle } = contentId);
  if (highlight === undefined) {
    highlight = false;
  }
  const onPress = contentId.onPress;
  const tmp = iCYMIStyles(flag);
  const items = [contentId, type, userId, onPress];
  const callback = onPress.useCallback(() => {
    if (null != onPress) {
      let obj = userId(type[7]);
      obj.itemInteracted(contentId, type, "press");
      let obj1 = userId(type[7]);
      obj = { itemId: contentId, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
      obj1.feedItemActioned(obj);
      onPress();
    } else {
      userId(type[7]).itemInteracted(contentId, type, "open_profile");
      const obj4 = userId(type[7]);
      obj = { itemId: contentId, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "user" } };
      userId(type[7]).feedItemActioned(obj);
      obj1 = { userId };
      userId(type[8])(obj1);
      const obj5 = userId(type[7]);
    }
  }, items);
  let obj = contentId(type[9]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_5.getUser(userId));
  let tmp5Result = null;
  if (null != stateFromStores) {
    obj = { unstable_pressDelay: 130, onPress: callback, accessibilityRole: "button", style: tmp.pressable };
    obj = { hideDivider: flag, highlight };
    let obj1 = {};
    const items2 = [tmp.container, ];
    if (flag) {
      flag = tmp.screenshotContainer;
    }
    items2[1] = flag;
    obj1.style = items2;
    const obj2 = { style: tmp.header };
    const obj3 = { animate: true, size: contentId(type[12]).AvatarSizes.NORMAL, user: stateFromStores, guildId: undefined };
    const items3 = [callback(contentId(type[12]).Avatar, obj3, stateFromStores.id), ];
    let obj4 = { style: tmp.headerInfo };
    let obj5 = { style: tmp.title, children: title };
    const items4 = [callback(View, obj5), ];
    const obj6 = { style: tmp.subTitleContainer, children: subtitle };
    items4[1] = callback(View, obj6);
    obj4.children = items4;
    items3[1] = callback2(View, obj4);
    obj2.children = items3;
    const items5 = [callback2(View, obj2), contentId.children];
    obj1.children = items5;
    obj.children = callback2(View, obj1);
    obj.children = callback(contentId(type[11]).SimplePost, obj);
    tmp5Result = tmp5(contentId(type[10]).PressableHighlight, obj);
    const tmp8 = callback2;
    const tmp9 = View;
  }
  return tmp5Result;
};
export const useStyles = iCYMIStyles;
