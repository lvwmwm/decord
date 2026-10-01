// Module ID: 16147
// Function ID: 16148
// Name: ContentInventoryEntryContainer
// Dependencies: [19, 17, 1372, 21, 16091, 576, 1364, 7799, 7624, 504, 5435, 16130, 1177, 2]
// Exports: default

// Module 16147 (ContentInventoryEntryContainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const iCYMIStyles = createICYMIStyles.createICYMIStyles((marginBottom, arg1) => {
  let num2;
  let num3;
  let num4;
  let obj2;
  let num = 0;
  if (!arg1) {
    num = marginBottom.margin;
  }
  const obj = { pressable: { marginTop: num }, container: obj2, screenshotContainer: { marginBottom: marginBottom.margin }, header: { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginBottom: marginBottom.margin }, headerInfo: { flex: 1 }, title: { display: "flex", flexDirection: "row", alignItems: "center", gap: 6, marginBottom: num4, marginTop: 2 }, subTitleContainer: { flexDirection: "row", alignItems: "center", gap: tmp(576).space.PX_8 } };
  obj2 = { marginHorizontal: marginBottom.margin, paddingBottom: num2, paddingTop: num3 };
  num2 = 0;
  if (!arg1) {
    num2 = marginBottom.margin;
  }
  num3 = 0;
  if (arg1) {
    num3 = marginBottom.margin;
  }
  ({ display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginBottom: marginBottom.margin });
  num4 = 1;
  const obj4 = PlatformUtils;
  if (obj4.isAndroid()) {
    num4 = -1;
  }
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  return obj;
});
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx");

export default function ContentInventoryEntryContainer(contentId) {
  let SimplePost;
  let highlight;
  let items3;
  let items4;
  let items5;
  let obj3;
  let obj4;
  let subtitle;
  let title;
  contentId = contentId.contentId;
  const userId = contentId.userId;
  let flag = contentId.renderForScreenshot;
  const children = contentId.children;
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
      const obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(contentId, type, "press");
      const obj3 = { itemId: contentId, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
      const obj2 = ICYMIActionCreatorsDefault;
      obj2.feedItemActioned(obj3);
      tmp();
    } else {
      const obj4 = ICYMIActionCreatorsDefault;
      obj4.itemInteracted(contentId, type, "open_profile");
      const obj6 = { itemId: contentId, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "user" } };
      const obj5 = ICYMIActionCreatorsDefault;
      obj5.feedItemActioned(obj6);
      const obj7 = { userId };
      showUserProfileActionSheetDefault(obj7);
    }
  }, items);
  let obj = contentId(type[9]);
  const items1 = [UserStore];
  const stateFromStores = obj.useStateFromStores(items1, () => UserStore.getUser(userId));
  let tmp7Result = null;
  if (null != stateFromStores) {
    let obj2 = { unstable_pressDelay: 130, onPress: callback, accessibilityRole: "button", style: tmp.pressable, children: tmp7(SimplePost, obj3) };
    const PressableHighlight = tmp3(tmp4[10]).PressableHighlight;
    obj3 = { hideDivider: flag, highlight, children: tmp8(View, obj4) };
    const items2 = [tmp.container, ];
    let screenshotContainer = flag;
    SimplePost = tmp3(tmp4[11]).SimplePost;
    if (flag) {
      screenshotContainer = tmp.screenshotContainer;
    }
    obj4 = { style: items2, children: items5 };
    items2[1] = screenshotContainer;
    let obj5 = { style: tmp.header, children: items3 };
    let obj6 = { animate: true, size: tmp3(tmp4[12]).AvatarSizes.NORMAL, user: stateFromStores, guildId: "Array" };
    const Avatar = tmp3(tmp4[12]).Avatar;
    items3 = [tmp7(Avatar, obj6, stateFromStores.id), ];
    let obj7 = { style: tmp.headerInfo, children: items4 };
    const obj8 = { style: tmp.title, children: title };
    items4 = [tmp7(View, obj8), ];
    const obj9 = { style: tmp.subTitleContainer, children: subtitle };
    items4[1] = closure_6(View, obj9);
    items3[1] = closure_7(View, obj7);
    items5 = [tmp8(View, obj5), children];
    tmp7Result = tmp7(PressableHighlight, obj2);
  }
  return tmp7Result;
};
export const useStyles = iCYMIStyles;
