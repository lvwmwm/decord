// Module ID: 12073
// Function ID: 12074
// Name: UserProfileWidgetGameTags
// Dependencies: [19, 17, 502, 8413, 21, 5243, 575, 12048, 12029, 5252, 1113, 8480, 6268, 5866, 7483, 12074, 2]

// Module 12073 (UserProfileWidgetGameTags)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import Text_Text from "Text/Text" /* 5866 */;
import Constants from "Constants" /* 8413 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8480 */;
import WidgetUtils from "WidgetUtils" /* 12029 */;
import openUserProfileAddTagActionSheetDefault from "openUserProfileAddTagActionSheet" /* 12074 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, map, tag;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let closure_7 = Constants.TrackUserProfileEditActions;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const hitSlop = { top: 7, bottom: 7 };
let closure_11 = Math.max(14, 0);
let createStyles = createStyles_mod;
let obj = { tags: obj2, tag: obj3, addTag: obj4 };
obj2 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 30, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { minHeight: 30, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_12 = createStyles(obj);
const memoResult = react.memo(function UserProfileWidgetGameTags(gameName) {
  let Text;
  let editableTagsWidgetType;
  let gameId;
  let intl;
  let intl2;
  let items;
  let obj3;
  let obj4;
  let tags;
  let tmp5Result;
  ({ tags, gameId: require, editableTagsWidgetType } = gameName);
  let ref;
  let c5;
  gameName = gameName.gameName;
  let tmp = closure_12();
  dependencyMap = tmp;
  ref = ref.useRef(null);
  const useRef = ref.useRef;
  map = new Map();
  let closure_4 = useRef(map);
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
  c5 = flatMapResult;
  if (0 !== flatMapResult.length) {
    let obj = { style: tmp.tags, children: items };
    let tmp5 = closure_9;
    const tmp6 = c5;
    items = [
      flatMapResult.map((tag) => {
          let GCn1ne;
          let XSmallIcon;
          let formatToPlainString;
          let items;
          let obj5;
          let obj6;
          tag = tag.tag;
          const meta = tag.meta;
          let obj = { style: tag.tag, children: items };
          let tmp3 = closure_1_8;
          let obj2 = { size: "xs", color: editableTagsWidgetType(tag[6]).colors.TEXT_MUTED };
          const tmp5 = tag;
          let tmp2 = c5;
          items = [closure_1_8(meta.icon, obj2), , ];
          let obj3 = { variant: "body-sm/normal", color: "text-muted", children: meta.getText() };
          const Text = require("Text/Text").Text;
          items[1] = closure_1_8(Text, obj3);
          let tmp3Result = null != editableTagsWidgetType;
          const tmp = closure_1_9;
          const tmp4 = editableTagsWidgetType;
          if (tmp3Result) {
            const obj4 = {
              ref(arg0) {
                  if (null != arg0) {
                    const current2 = ref.current;
                    const result = current2.set(tag, arg0);
                  } else {
                    const current = ref.current;
                    current.delete(tag);
                  }
                },
              onPress() {
                  let closure_0 = tag;
                  let tmp2 = tag;
                  let tmp3 = c5;
                  const findIndexResult = c5.findIndex((tag) => tag.tag === closure_0);
                  tag = undefined;
                  if (c5[findIndexResult + 1] != null) {
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
                    const setAccessibilityFocus = tag(closure_3_2[12]).setAccessibilityFocus;
                    const tmp2 = tag(closure_3_2[12]);
                    if (null != found) {
                      tmp3 = { current: found };
                      const obj = { current: found };
                    } else {
                      tmp3 = closure_2_3;
                    }
                    const result = setAccessibilityFocus({ ref: tmp3 });
                  }, 100);
                },
              accessibilityRole: "button",
              hitSlop,
              accessibilityLabel: formatToPlainString(GCn1ne, obj5),
              children: tmp3(XSmallIcon, obj6)
            };
            let intl = tmp6(tmp5[10]).intl;
            formatToPlainString = intl.formatToPlainString;
            obj5 = { tag: meta.getText() };
            GCn1ne = tmp6(tmp5[10]).t.GCn1ne;
            obj6 = { size: "xs", color: tmp4(tmp5[6]).colors.ICON_MUTED };
            XSmallIcon = tmp6(tmp5[14]).XSmallIcon;
            tmp3Result = tmp3(ref, obj4);
          }
          items[2] = tmp3Result;
          return tmp(tmp2, obj, tag);
        }),

    ];
    let tmp7 = null != editableTagsWidgetType;
    if (tmp7) {
      let obj2 = {
        ref,
        style: tmp.addTag,
        onPress() {
              const obj = { widgetType: editableTagsWidgetType, gameId: require };
              return openUserProfileAddTagActionSheetDefault(obj);
            },
        accessibilityRole: "button",
        hitSlop,
        accessibilityLabel: intl.formatToPlainString(intl3.t.uLUHj4, obj3),
        children: closure_8(Text, obj4)
      };
      intl = intl3.intl;
      obj3 = { gameName };
      obj4 = { variant: "body-sm/normal", color: "text-muted", children: intl2.string(intl3.t.fZSejy) };
      Text = Text_Text.Text;
      intl2 = intl3.intl;
      tmp7 = closure_8(closure_4, obj2);
    }
    items[1] = tmp7;
    tmp5Result = tmp5(tmp6, obj);
  } else {
    tmp5Result = null;
  }
  return tmp5Result;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameTags.tsx");

export default memoResult;
