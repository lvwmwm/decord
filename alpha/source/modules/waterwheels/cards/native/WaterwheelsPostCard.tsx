// Module ID: 19009
// Function ID: 19010
// Name: WaterwheelsPostCard
// Dependencies: [19, 17, 21, 5306, 575, 5377, 10225, 7087, 6020, 1414, 5328, 6029, 5929, 5936, 2]
// Exports: default

// Module 19009 (WaterwheelsPostCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import themes from "themes" /* 5328 */;
import native from "native" /* 5377 */;
import FastImageDefault from "FastImage" /* 6020 */;
import PlatformsDefault from "Platforms" /* 7087 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10225 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, standardContent: obj3, header: obj4, copy: obj5, icon: size, fallback: obj6, media: obj7, postAction: { alignSelf: "flex-start" } };
obj2 = { gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj5 = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 };
size = { height: nativeDefault.space.PX_40, width: nativeDefault.space.PX_40, borderRadius: nativeDefault.radii.md };
obj6 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj7 = { width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/WaterwheelsPostCard.tsx");

export default function WaterwheelsPostCard(onAction) {
  let Button;
  let LinkIcon;
  let action;
  let items;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj13;
  let obj16;
  let post;
  let tmp13Result;
  let tmp19Result7;
  let tmp2Result2;
  ({ post, action } = onAction);
  onAction = onAction.onAction;
  const tmp = closure_6();
  let type;
  const obj = native;
  const theme = obj.useThemeContext().theme;
  if (action != null) {
    type = action.type;
  }
  const tmp5 = type === WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION;
  let value = null;
  if (tmp5) {
    const obj2 = PlatformsDefault;
    value = obj2.get(action.value.provider);
  }
  if (tmp5) {
    let icon1;
    if (value != null) {
      icon1 = value.icon;
    }
    if (null != icon1) {
      const tmp15 = FastImageDefault;
      const makeSource = AvatarUtils.makeSource;
      AvatarUtils;
      const icon = value.icon;
      const obj3 = { accessible: false, source: makeSource(tmp2Result2.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG), style: tmp.icon };
      tmp2Result2 = themes;
      tmp13Result = React3(tmp15, obj3);
    }
    const obj5 = { style: tmp.header, children: items };
    items = [tmp13Result, ];
    let num;
    const obj4 = { style: tmp5 ? tmp.content : tmp.standardContent, children: items2 };
    const obj6 = { style: tmp.copy, children: items1 };
    const Heading = tmp2(5929).Heading;
    if (tmp5) {
      num = 2;
    }
    const obj7 = { variant: "heading-sm/semibold", color: "text-strong", lineClamp: num, children: post.title };
    items1 = [React3(Heading, obj7), ];
    let tmp19Result = null;
    if (tmp5) {
      const obj8 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: post.body };
      tmp19Result = tmp19(tmp2(5929).Text, obj8);
    }
    items1[1] = tmp19Result;
    items[1] = hasOwnProperty(View, obj6);
    items2 = [hasOwnProperty(View, obj5), , , ];
    let tmp19Result5 = null;
    if (!tmp5) {
      const obj9 = { variant: "body-md/normal", color: "text-default", lineClamp: 4, children: post.body };
      tmp19Result5 = tmp19(tmp2(5929).Text, obj9);
    }
    items2[1] = tmp19Result5;
    let tmp19Result6 = null;
    if (null != post.imageUrl) {
      const obj10 = { accessible: false, style: tmp.media, source: obj11 };
      obj11 = { uri: post.imageUrl };
      tmp19Result6 = tmp19(FastImageDefault, obj10);
    }
    items2[2] = tmp19Result6;
    let tmp19Result8 = null;
    if (null != action) {
      tmp19Result8 = null;
      if (null != post.actionLabel) {
        let postAction;
        if (!tmp5) {
          postAction = tmp.postAction;
        }
        let str = "sm";
        const obj12 = { style: postAction, children: React3(Button, obj13) };
        Button = tmp2(5936).Button;
        if (tmp5) {
          str = "md";
        }
        obj13 = {
          size: str,
          variant: "primary",
          text: post.actionLabel,
          grow: tmp5,
          icon: tmp19Result7,
          onPress() {
                  return onAction(action);
                }
        };
        tmp19Result7 = undefined;
        if (tmp5) {
          const obj14 = { size: "sm", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
          const LinkIcon2 = tmp2(6029).LinkIcon;
          tmp19Result7 = tmp19(LinkIcon2, obj14);
        }
        tmp19Result8 = tmp19(tmp18, obj12);
      }
    }
    items2[3] = tmp19Result8;
    return hasOwnProperty(View, obj4);
  }
  tmp13Result = null;
  if (tmp5) {
    const obj15 = { style: items3, children: React3(LinkIcon, obj16) };
    items3 = [, ];
    ({ icon: arr[0], fallback: arr[1] } = tmp);
    obj16 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
    LinkIcon = tmp2(6029).LinkIcon;
    tmp13Result = React3(View, obj15);
  }
};
