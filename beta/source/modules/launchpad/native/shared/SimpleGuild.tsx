// Module ID: 16800
// Function ID: 16801
// Name: SimpleGuild
// Dependencies: [19, 17, 2063, 7050, 2067, 1074, 21, 4836, 5896, 16801, 504, 16802, 16804, 1115, 15970, 5385, 576, 16803, 2]
// Exports: default

// Module 16800 (SimpleGuild)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import react from "react" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7050 */;
import GuildStore from "GuildStore" /* 2067 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const getGuildIconSource = GuildRecord.getGuildIconSource;
const ME = Constants.ME;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ dmsWrapper: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = size.fileFinishedImporting("modules/launchpad/native/shared/SimpleGuild.tsx");

export default function SimpleGuild(guildId) {
  let animated;
  let backgroundColor;
  let badge;
  let borderRadius;
  let containerSizeStyle;
  let containerStyles;
  let guildIconRef;
  let iconBackground;
  let iconBackgroundBrand;
  let iconSize;
  let iconStroke;
  let num6;
  let num7;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let style;
  let tmp24;
  let unread;
  let unread2;
  guildId = guildId.guildId;
  ({ backgroundColor, animated } = guildId);
  ({ guildIconRef, style, onPress, onLongPress, onAccessibilityAction, onLayout } = guildId);
  if (animated === undefined) {
    animated = true;
  }
  let flag = guildId.altDefaultBackground;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guildId.selected;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ size, iconSize } = guildId);
  if (iconSize === undefined) {
    let tmp2 = unread2;
    iconSize = guildId(unread2[8]).GuildIconSizes.LARGE;
  }
  ({ borderRadius, unread, badge } = guildId);
  let str;
  unread2 = undefined;
  let badge2;
  const tmp3 = closure_10();
  ({ iconStroke, iconBackground, iconBackgroundBrand } = str(unread2[9])());
  const tmp6 = str(unread2[9])();
  let obj = guildId(unread2[10]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  str = undefined;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  const items1 = [GuildReadStateStore];
  const items2 = [guildId];
  const tmp7Result = guildId(unread2[10]);
  const stateFromStoresObject = tmp7Result.useStateFromStoresObject(items1, () => {
    const obj = { unread: GuildReadStateStore.hasUnread(guildId), badge: GuildReadStateStore.getMentionCount(guildId) };
    return obj;
  }, items2);
  unread2 = stateFromStoresObject.unread;
  badge2 = stateFromStoresObject.badge;
  const tmp7Result3 = guildId(unread2[11]);
  const tmp12 = str(unread2[12])({ size, style });
  const containerSize = tmp12.containerSize;
  const items3 = [str, unread2, badge2];
  ({ containerSizeStyle, containerStyles } = tmp12);
  const memo = badge2.useMemo(() => {
    let tmp2 = str;
    if ("" !== str) {
      let formatToPlainStringResult;
      if (null != badge2) {
        if (badge2 > 0) {
          const intl3 = intl4.intl;
          const obj2 = { guildName: str, mentions: badge2 };
          formatToPlainStringResult = intl3.formatToPlainString(intl4.t["/uzRss"], obj2);
        }
        tmp2 = formatToPlainStringResult;
      }
      if (true === unread2) {
        const intl2 = intl4.intl;
        const obj3 = { guildName: str };
        formatToPlainStringResult = intl2.formatToPlainString(intl4.t.lzqe42, obj3);
      } else {
        const intl = intl4.intl;
        const obj = { guildName: str, mentions: badge2 };
        formatToPlainStringResult = intl.formatToPlainString(intl4.t["/uzRss"], obj);
      }
    }
    return tmp2;
  }, items3);
  const tmp7Result4 = guildId(unread2[14]);
  const activityIndicatorState = tmp7Result4.useActivityIndicatorState(guildId);
  let tmp15 = unread2 || flag2;
  if (!tmp15) {
    tmp15 = badge2 > 0;
  }
  if (!tmp15) {
    tmp15 = null != activityIndicatorState.source;
  }
  if (tmp15) {
    tmp15 = "transparent" === backgroundColor;
  }
  let tmp17Result;
  if (null != stateFromStores) {
    let tmp18 = flag2;
    const tmp17 = getGuildIconSource;
    if (flag2) {
      tmp18 = !tmp15;
    }
    tmp17Result = tmp17(stateFromStores, containerSize, tmp18);
  }
  if (null !== tmp17Result) {
    if (typeof tmp17Result === "object") {
      let tmp19;
      let tmp20Result;
      if ("uri" in tmp17Result) {
        tmp19 = null != tmp17Result.uri;
      }
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (unread == null) {
        unread = unread2;
      }
      if (badge == null) {
        badge = badge2;
      }
      if (guildId === ME) {
        let obj3 = { style: tmp3.dmsWrapper, children: null };
        const ChatIcon = tmp7(tmp5[15]).ChatIcon;
        const colors = tmp4(tmp5[16]).colors;
        tmp20Result = tmp20(View, obj3);
      } else if (tmp15) {
        let num4 = 13;
        const tmp4Result = str(unread2[17]);
        if (badge2 <= 0) {
          let num5 = 0;
          if (unread2) {
            num5 = 11;
          }
          num4 = num5;
        }
        const obj5 = { cutoutBottomRightSize: num4, cutoutBottomRightInsetX: 6, cutoutBottomRightInsetY: 7, cutoutTopRightSize: num6, cutoutTopRightInsetX: 8, cutoutTopRightInsetY: 8, imageSize: containerSize, imageSource: tmp17Result, imageBorderRadius: borderRadius, imageBackgroundColor: tmp19 ? iconBackground.color : iconBackgroundBrand.color, clipOuterAmount: num7, borderStroke: 1, borderStrokeColor: iconStroke.color };
        num6 = 0;
        if (null != activityIndicatorState.source) {
          num6 = 13;
        }
        num7 = 0;
        if (flag2) {
          num7 = 3;
        }
        tmp20Result = tmp20(tmp4Result, obj5);
      } else {
        const obj6 = { guild: stateFromStores, size: iconSize, selected: flag2, animate: flag2, TABS_altDefaultBackground: flag, style: tmp24 };
        tmp24 = null;
        const tmp4Result2 = str(unread2[8]);
        if (null != size) {
          tmp24 = containerSizeStyle;
        }
        tmp20Result = tmp20(tmp4Result2, obj6);
      }
      return <tmp11 guildIconRef={guildIconRef} guildId={id} style={containerStyles} backgroundColor={backgroundColor} selected={flag2} size={size} borderRadius={borderRadius} onPress={onPress} onLongPress={onLongPress} unread={unread} badge={badge} onLayout={onLayout} onAccessibilityAction={onAccessibilityAction} accessibilityLabel={memo} usingCutout={tmp15} activityIndicatorState={activityIndicatorState}>{tmp20Result}</tmp11>;
    }
  }
  tmp19 = null != tmp17Result;
};
