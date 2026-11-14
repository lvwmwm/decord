// Module ID: 12118
// Function ID: 12119
// Name: UserProfileWidgetGameTags
// Dependencies: [19, 17, 502, 8479, 21, 7638, 575, 6061, 5306, 5929, 1113, 7549, 12104, 12090, 5315, 8546, 6331, 12119, 2]

// Module 12118 (UserProfileWidgetGameTags)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5315 */;
import Text_Text from "Text/Text" /* 5929 */;
import IconSize from "IconSize" /* 7638 */;
import Constants from "Constants" /* 8479 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8546 */;
import WidgetUtils from "WidgetUtils" /* 12090 */;
import openUserProfileAddTagActionSheetDefault from "openUserProfileAddTagActionSheet" /* 12119 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let map;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
function GameTag(removeButtonRef) {
  let GCn1ne;
  let XSmallIcon;
  let formatToPlainString;
  let items;
  let metadata;
  let obj5;
  let obj6;
  let onRemove;
  ({ metadata, onRemove } = removeButtonRef);
  removeButtonRef = removeButtonRef.removeButtonRef;
  const tmp = closure_15();
  const obj = { style: tmp.tag, children: items };
  items = [, , ];
  const obj2 = { size: xs, color: nativeDefault.colors.TEXT_MUTED };
  items[0] = metroImportAll(metadata.icon, obj2);
  const obj3 = { variant, color: "text-muted", lineClamp: 1, style: tmp.tagText, children: metadata.getText() };
  const Text = Text_Text.Text;
  items[1] = metroImportAll(Text, obj3);
  let tmp4Result = null != onRemove;
  const tmp2 = React4;
  const tmp3 = hasOwnProperty;
  const tmp5 = xs;
  if (tmp4Result) {
    const obj4 = { ref: removeButtonRef, onPress: onRemove, accessibilityRole: "button", accessibilityLabel: formatToPlainString(GCn1ne, obj5), hitSlop, children: metroImportAll(XSmallIcon, obj6) };
    const intl = tmp8(1113).intl;
    formatToPlainString = intl.formatToPlainString;
    obj5 = { tag: metadata.getText() };
    GCn1ne = tmp8(1113).t.GCn1ne;
    obj6 = { size: tmp5, color: nativeDefault.colors.ICON_MUTED };
    XSmallIcon = tmp8(7549).XSmallIcon;
    tmp4Result = tmp4(React3, obj4);
  }
  items[2] = tmp4Result;
  return tmp2(tmp3, obj);
}
let react = react_mod;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let closure_7 = Constants.TrackUserProfileEditActions;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let xs = "xs";
xs = IconSize.ICON_SIZE.xs;
const PX_4 = nativeDefault.space.PX_4;
let c13 = "body-sm/normal";
const hitSlop = Math.max((44 - xs) / 2, 0);
let createStyles = createStyles_mod;
let obj = { tags: obj2, tag: obj3, tagText: { flexShrink: 1 }, singleLine: { overflow: "hidden" }, addTag: obj4 };
obj2 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 30, flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { minHeight: 30, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_15 = createStyles(obj);
const memoResult = react.memo(function UserProfileWidgetGameTags(singleLineClamp) {
  let Text;
  let closure_3;
  let editableTagsWidgetType;
  let gameId;
  let intl;
  let intl2;
  let items2;
  let obj5;
  let obj6;
  let rect;
  let tags;
  let tmp10Result;
  ({ tags, gameId: require, editableTagsWidgetType } = singleLineClamp);
  let flag = singleLineClamp.singleLineClamp;
  const gameName = singleLineClamp.gameName;
  if (flag === undefined) {
    flag = false;
  }
  let ref;
  react = undefined;
  let c4;
  let tmp = closure_15();
  let tmp2 = require;
  let tmp3 = ref;
  let obj = require("useScaledTextLineHeight");
  const bound = Math.max(Math.max(obj.useScaledTextLineHeight(c13), xs) + 2 * (PX_4 + 1), 30);
  const bound1 = Math.max((44 - bound) / 2, 0);
  ref = react.useRef(null);
  const useRef = react.useRef;
  map = new Map();
  react = useRef(map);
  const tmp4 = c13;
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    let items1;
    const obj = require("UserProfileGameWidgetConstants");
    const widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tag);
    if (null != widgetGameTagMetadata) {
      const items = [{ tag, meta: widgetGameTagMetadata }];
      items1 = items;
      const obj2 = { tag, meta: widgetGameTagMetadata };
    } else {
      items1 = [];
    }
    return items1;
  });
  c4 = flatMapResult;
  if (0 !== flatMapResult.length) {
    let items = [tmp.tags, ];
    let tmp12;
    const tmp10 = closure_9;
    const tmp11 = closure_5;
    if (flag) {
      let items1 = [tmp.singleLine, ];
      let obj2 = { maxHeight: bound };
      items1[1] = obj2;
      tmp12 = items1;
    }
    let obj3 = { style: items, children: items2 };
    items[1] = tmp12;
    items2 = [
      flatMapResult.map((metadata) => {
          let fn;
          let tag = metadata.tag;
          let obj = {
            metadata: metadata.meta,
            onRemove: fn,
            removeButtonRef(arg0) {
              if (null != arg0) {
                const current2 = ref.current;
                const result = current2.set(tag, arg0);
              } else {
                const current = ref.current;
                current.delete(tag);
              }
            }
          };
          fn = undefined;
          let tmp2 = GameTag;
          const tmp = closure_1_8;
          if (null != editableTagsWidgetType) {
            fn = () => {
              let closure_0 = tag;
              let tmp2 = tag;
              let tmp3 = c4;
              const findIndexResult = c4.findIndex((tag) => tag.tag === closure_0);
              tag = undefined;
              if (c4[findIndexResult + 1] != null) {
                tag = tmp5.tag;
              }
              const items = [tag, ];
              let tag1;
              if (tmp3[findIndexResult - 1] != null) {
                tag1 = tmp7.tag;
              }
              items[1] = tag1;
              let obj = WidgetUtils;
              obj.removeTagFromGame(editableTagsWidgetType, require, tmp2);
              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = intl3.intl;
              announce(intl.string(intl3.t.SPQyjm));
              const obj2 = UserProfileAnalyticsUtils;
              const obj3 = { userId: AuthenticationStore.getId(), action: constants.TAG_REMOVED, widgetEdited: editableTagsWidgetType, gameId: require };
              let result = obj2.trackUserProfileEditAction(obj3);
              const timerId = setTimeout(() => {
                let tmp3;
                const mapped = items.map((item) => {
                  let value;
                  if (null != item) {
                    const current = ref.current;
                    value = current.get(item);
                  }
                  return value;
                });
                const found = mapped.find((item) => null != item);
                const setAccessibilityFocus = tag(ref[16]).setAccessibilityFocus;
                const tmp2 = tag(ref[16]);
                if (null != found) {
                  tmp3 = { current: found };
                  const obj = { current: found };
                } else {
                  tmp3 = closure_2_2;
                }
                const result = setAccessibilityFocus({ ref: tmp3 });
              }, 100);
            };
          }
          return tmp(tmp2, obj, tag);
        }),

    ];
    let tmp13 = null != editableTagsWidgetType;
    if (tmp13) {
      const obj4 = {
        ref,
        style: tmp.addTag,
        onPress() {
              const obj = { widgetType: editableTagsWidgetType, gameId: require };
              return openUserProfileAddTagActionSheetDefault(obj);
            },
        accessibilityRole: "button",
        hitSlop: rect,
        accessibilityLabel: intl.formatToPlainString(tmp2(tmp3[10]).t.uLUHj4, obj5),
        children: closure_8(Text, obj6)
      };
      rect = { top: bound1, bottom: bound1 };
      intl = tmp2(tmp3[10]).intl;
      obj5 = { gameName };
      obj6 = { variant: tmp4, color: "text-muted", children: intl2.string(tmp2(tmp3[10]).t.fZSejy) };
      Text = tmp2(tmp3[9]).Text;
      intl2 = tmp2(tmp3[10]).intl;
      tmp13 = closure_8(c4, obj4);
    }
    items2[1] = tmp13;
    tmp10Result = tmp10(tmp11, obj3);
  } else {
    tmp10Result = null;
  }
  return tmp10Result;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameTags.tsx");

export default memoResult;
