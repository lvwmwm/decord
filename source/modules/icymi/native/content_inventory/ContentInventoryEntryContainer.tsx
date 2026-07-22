// Module ID: 15120
// Function ID: 114096
// Name: iCYMIStyles
// Dependencies: []
// Exports: default

// Module 15120 (iCYMIStyles)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const iCYMIStyles = arg1(dependencyMap[4]).createICYMIStyles((margin) => {
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
  const obj1 = { id: 8, title: null, options: "\u270A\u{1F3FF}", gap: importDefault(dependencyMap[5]).space.PX_12, marginBottom: margin.margin };
  obj.header = obj1;
  let num4 = 1;
  obj.headerInfo = { flex: 1 };
  const obj2 = {};
  if (obj6.isAndroid()) {
    num4 = -1;
  }
  obj2.marginBottom = num4;
  obj.title = obj2;
  const obj3 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: importDefault(dependencyMap[5]).space.PX_8 };
  obj.subTitleContainer = obj3;
  return obj;
});
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx");

export default function ContentInventoryEntryContainer(contentId) {
  let highlight;
  let subtitle;
  let title;
  contentId = contentId.contentId;
  const arg1 = contentId;
  const userId = contentId.userId;
  const importDefault = userId;
  let flag = contentId.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  const type = contentId.type;
  const dependencyMap = type;
  ({ highlight, title, subtitle } = contentId);
  if (highlight === undefined) {
    highlight = false;
  }
  const onPress = contentId.onPress;
  const React = onPress;
  const tmp = iCYMIStyles(flag);
  const items = [contentId, type, userId, onPress];
  const callback = React.useCallback(() => {
    if (null != onPress) {
      let obj = userId(type[7]);
      obj.itemInteracted(contentId, type, "press");
      let obj1 = userId(type[7]);
      obj = { itemId: contentId, itemType: type, actionParameters: {} };
      obj1.feedItemActioned(obj);
      onPress();
    } else {
      userId(type[7]).itemInteracted(contentId, type, "open_profile");
      const obj4 = userId(type[7]);
      obj = { itemId: contentId, itemType: type, actionParameters: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null } };
      userId(type[7]).feedItemActioned(obj);
      obj1 = { userId };
      userId(type[8])(obj1);
      const obj5 = userId(type[7]);
    }
  }, items);
  let obj = arg1(dependencyMap[9]);
  const items1 = [closure_5];
  const stateFromStores = obj.useStateFromStores(items1, () => user.getUser(userId));
  let tmp5Result = null;
  if (null != stateFromStores) {
    obj = { @braintree/iframer: "construct", @braintree/uuid: "type", @braintree/wrap-promise: "isArray", onPress: callback, style: tmp.pressable };
    obj = { hideDivider: flag, highlight };
    const obj1 = {};
    const items2 = [tmp.container, ];
    if (flag) {
      flag = tmp.screenshotContainer;
    }
    items2[1] = flag;
    obj1.style = items2;
    const obj2 = { style: tmp.header };
    const obj3 = { animate: true, size: arg1(dependencyMap[12]).AvatarSizes.NORMAL, user: stateFromStores, guildId: undefined };
    const items3 = [callback(arg1(dependencyMap[12]).Avatar, obj3, stateFromStores.id), ];
    const obj4 = { style: tmp.headerInfo };
    const obj5 = { style: tmp.title, children: title };
    const items4 = [callback(View, obj5), ];
    const obj6 = { style: tmp.subTitleContainer, children: subtitle };
    items4[1] = callback(View, obj6);
    obj4.children = items4;
    items3[1] = callback2(View, obj4);
    obj2.children = items3;
    const items5 = [callback2(View, obj2), contentId.children];
    obj1.children = items5;
    obj.children = callback2(View, obj1);
    obj.children = callback(arg1(dependencyMap[11]).SimplePost, obj);
    tmp5Result = tmp5(arg1(dependencyMap[10]).PressableHighlight, obj);
    const tmp8 = callback2;
    const tmp9 = View;
  }
  return tmp5Result;
};
export const useStyles = iCYMIStyles;
