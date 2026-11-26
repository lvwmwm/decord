// Module ID: 17821
// Function ID: 17822
// Name: WaterwheelsPostCard
// Dependencies: [19, 17, 21, 4913, 575, 4974, 10051, 6691, 5600, 1412, 4935, 5609, 1112, 17822, 5504, 5511, 2]
// Exports: default

// Module 17821 (WaterwheelsPostCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AvatarUtils from "AvatarUtils" /* 1412 */;
import themes from "themes" /* 4935 */;
import native from "native" /* 4974 */;
import Text_Text from "Text/Text" /* 5504 */;
import FastImageDefault from "FastImage" /* 5600 */;
import PlatformsDefault from "Platforms" /* 6691 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10051 */;
import WaterwheelsSectionLabelDefault from "WaterwheelsSectionLabel" /* 17822 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, standardContent: obj3, header: obj4, copy: obj5, icon: size, sectionIcon: { height: 18, width: 18 }, connectionCard: obj6, connectionArt: { height: 143, alignItems: "center", justifyContent: "center" }, connectionArtImage: { width: "100%", height: 143 }, connectionProviderArt: size1, connectionCopy: obj7, connectionText: obj8, fallback: obj9, media: obj10, postAction: { alignSelf: "flex-start" } };
obj2 = { gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj5 = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 };
size = { height: nativeDefault.space.PX_40, width: nativeDefault.space.PX_40, borderRadius: nativeDefault.radii.md };
obj6 = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden" };
size1 = { height: nativeDefault.space.PX_80, width: nativeDefault.space.PX_80 };
obj7 = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
obj8 = { gap: nativeDefault.space.PX_4 };
obj9 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj10 = { width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/WaterwheelsPostCard.tsx");

export default function WaterwheelsPostCard(discoverSectionLabel) {
  let Button;
  let LinkIcon;
  let action;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj24;
  let obj26;
  let obj29;
  let obj6;
  let post;
  let tmp11Result;
  let tmp20Result7;
  let tmp2Result4;
  let tmp2Result6;
  ({ post, action } = discoverSectionLabel);
  let flag = discoverSectionLabel.discoverSectionLabel;
  if (flag === undefined) {
    flag = false;
  }
  const onAction = discoverSectionLabel.onAction;
  const tmp = closure_6();
  const obj = native;
  const theme = obj.useThemeContext().theme;
  let type;
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
      const tmp16 = FastImageDefault;
      const makeSource = AvatarUtils.makeSource;
      AvatarUtils;
      const icon = value.icon;
      const obj3 = { accessible: false, source: makeSource(tmp2Result4.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG), style: tmp5 && flag ? tmp.sectionIcon : tmp.icon };
      tmp2Result4 = themes;
      tmp11Result = React3(tmp16, obj3);
    }
    if (tmp5 && flag) {
      let title;
      let tmp31Result;
      if (null != value) {
        const intl = tmp2(1112).intl;
        const obj4 = { platform: value.name };
        title = intl.formatToPlainString(tmp2(1112).t.XWSHTb, obj4);
      } else {
        title = post.title;
      }
      if (null != post.imageUrl) {
        const obj5 = { accessible: false, style: tmp.connectionArtImage, source: obj6, resizeMode: "cover" };
        obj6 = { uri: post.imageUrl };
        tmp31Result = React3(FastImageDefault, obj5);
      } else {
        let icon3;
        if (value != null) {
          icon3 = value.icon;
        }
        tmp31Result = null;
        if (null != icon3) {
          const tmp33 = FastImageDefault;
          const makeSource2 = AvatarUtils.makeSource;
          AvatarUtils;
          const icon2 = value.icon;
          const obj7 = { accessible: false, source: makeSource2(tmp2Result6.isThemeDark(theme) ? icon2.darkPNG : icon2.lightPNG), style: tmp.connectionProviderArt };
          tmp2Result6 = themes;
          tmp31Result = React3(tmp33, obj7);
        }
      }
      const obj8 = { style: tmp.content, children: items };
      const obj9 = { icon: tmp11Result, text: title };
      items = [React3(WaterwheelsSectionLabelDefault, obj9), ];
      const obj10 = { style: tmp.connectionCard, children: items1 };
      const obj11 = { style: tmp.connectionArt, children: tmp31Result };
      items1 = [React3(View, obj11), ];
      let tmp39Result = null;
      const obj12 = { style: tmp.connectionCopy, children: items3 };
      const obj13 = { style: tmp.connectionText, children: items2 };
      if (post.title !== title) {
        const obj14 = { variant: "body-md/medium", color: "text-strong", children: post.title };
        tmp39Result = tmp39(tmp2(5504).Text, obj14);
      }
      items2 = [tmp39Result, ];
      const obj15 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 4, children: post.body };
      items2[1] = React3(Text_Text.Text, obj15);
      items3 = [hasOwnProperty(View, obj13), ];
      let tmp39Result2 = null;
      if (null != post.actionLabel) {
        const obj16 = {
          size: "sm",
          variant: "secondary",
          grow: true,
          text: post.actionLabel,
          onPress() {
                  return onAction(action);
                }
        };
        tmp39Result2 = tmp39(tmp2(5511).Button, obj16);
      }
      items3[1] = tmp39Result2;
      items1[1] = hasOwnProperty(View, obj12);
      items[1] = hasOwnProperty(View, obj10);
      return hasOwnProperty(View, obj8);
    } else {
      const obj18 = { style: tmp.header, children: items4 };
      items4 = [tmp11Result, ];
      let num;
      const obj17 = { style: tmp5 ? tmp.content : tmp.standardContent, children: items6 };
      const obj19 = { style: tmp.copy, children: items5 };
      const Heading = tmp2(5504).Heading;
      if (tmp5) {
        num = 2;
      }
      const obj20 = { variant: "heading-sm/semibold", color: "text-strong", lineClamp: num, children: post.title };
      items5 = [React3(Heading, obj20), ];
      let tmp20Result = null;
      if (tmp5) {
        const obj21 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: post.body };
        tmp20Result = tmp20(tmp2(5504).Text, obj21);
      }
      items5[1] = tmp20Result;
      items4[1] = hasOwnProperty(View, obj19);
      items6 = [hasOwnProperty(View, obj18), , , ];
      let tmp20Result5 = null;
      if (!tmp5) {
        const obj22 = { variant: "body-md/normal", color: "text-default", lineClamp: 4, children: post.body };
        tmp20Result5 = tmp20(tmp2(5504).Text, obj22);
      }
      items6[1] = tmp20Result5;
      let tmp20Result6 = null;
      if (null != post.imageUrl) {
        const obj23 = { accessible: false, style: tmp.media, source: obj24 };
        obj24 = { uri: post.imageUrl };
        tmp20Result6 = tmp20(FastImageDefault, obj23);
      }
      items6[2] = tmp20Result6;
      let tmp20Result8 = null;
      if (null != action) {
        tmp20Result8 = null;
        if (null != post.actionLabel) {
          let postAction;
          if (!tmp5) {
            postAction = tmp.postAction;
          }
          let str2 = "sm";
          const obj25 = { style: postAction, children: React3(Button, obj26) };
          Button = tmp2(5511).Button;
          if (tmp5) {
            str2 = "md";
          }
          obj26 = {
            size: str2,
            variant: "primary",
            text: post.actionLabel,
            grow: tmp5,
            icon: tmp20Result7,
            onPress() {
                      return onAction(action);
                    }
          };
          tmp20Result7 = undefined;
          if (tmp5) {
            const obj27 = { size: "sm", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
            const LinkIcon2 = tmp2(5609).LinkIcon;
            tmp20Result7 = tmp20(LinkIcon2, obj27);
          }
          tmp20Result8 = tmp20(tmp19, obj25);
        }
      }
      items6[3] = tmp20Result8;
      return hasOwnProperty(View, obj17);
    }
  }
  tmp11Result = null;
  if (tmp5) {
    let sectionIcon;
    const tmp12 = View;
    if (tmp5 && flag) {
      sectionIcon = tmp.sectionIcon;
    } else {
      sectionIcon = [, ];
      ({ icon: arr[0], fallback: arr[1] } = tmp);
    }
    let str = "md";
    const obj28 = { style: sectionIcon, children: React3(LinkIcon, obj29) };
    LinkIcon = tmp2(5609).LinkIcon;
    if (tmp5 && flag) {
      str = "sm";
    }
    obj29 = { size: str, color: nativeDefault.colors.ICON_MUTED, accessible: false };
    tmp11Result = tmp11(tmp12, obj28);
  }
};
