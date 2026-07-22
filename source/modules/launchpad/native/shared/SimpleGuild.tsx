// Module ID: 15535
// Function ID: 118590
// Name: SimpleGuild
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 27, 33, 15542, 15545, 2, 15542]
// Exports: default

// Module 15535 (SimpleGuild)
import __exportStarResult1 from "__exportStarResult1";
import { View } from "__exportStarResult1";
import { getGuildIconSource } from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import { ME } from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import getLayoutStyle from "getLayoutStyle";

let closure_10 = require("__exportStarResult1").createStyles({ dmsWrapper: {} });
const result = getLayoutStyle.fileFinishedImporting("modules/launchpad/native/shared/SimpleGuild.tsx");

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
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let size;
  let style;
  let unread;
  guildId = guildId.guildId;
  const arg1 = guildId;
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
    iconSize = arg1(dependencyMap[8]).GuildIconSizes.LARGE;
  }
  ({ borderRadius, unread, badge } = guildId);
  let importDefault;
  let dependencyMap;
  let React;
  const tmp3 = callback();
  ({ iconStroke, iconBackground, iconBackgroundBrand } = importDefault(dependencyMap[9])());
  let obj = arg1(dependencyMap[10]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  importDefault = str;
  let obj1 = arg1(dependencyMap[10]);
  const items1 = [closure_6];
  const items2 = [guildId];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ unread: closure_6.hasUnread(guildId), badge: closure_6.getMentionCount(guildId) }), items2);
  const unread2 = stateFromStoresObject.unread;
  dependencyMap = unread2;
  const badge2 = stateFromStoresObject.badge;
  React = badge2;
  const tmp8 = arg1(dependencyMap[11]);
  const tmp10 = importDefault(dependencyMap[12])({ size, style });
  const containerSize = tmp10.containerSize;
  const items3 = [str, unread2, badge2];
  ({ containerSizeStyle, containerStyles } = tmp10);
  const memo = React.useMemo(() => {
    if ("" === str) {
      let formatToPlainStringResult = str;
    } else {
      if (null != badge2) {
        if (badge2 > 0) {
          const intl3 = guildId(unread2[13]).intl;
          let obj = { guildName: str, mentions: badge2 };
          formatToPlainStringResult = intl3.formatToPlainString(guildId(unread2[13]).t./uzRss, obj);
        }
      }
      if (true === unread2) {
        const intl2 = guildId(unread2[13]).intl;
        obj = { guildName: str };
        formatToPlainStringResult = intl2.formatToPlainString(guildId(unread2[13]).t.lzqe42, obj);
      } else {
        const intl = guildId(unread2[13]).intl;
        obj = { guildName: str, mentions: badge2 };
        formatToPlainStringResult = intl.formatToPlainString(guildId(unread2[13]).t./uzRss, obj);
      }
    }
    return formatToPlainStringResult;
  }, items3);
  let obj2 = arg1(dependencyMap[14]);
  const activityIndicatorState = obj2.useActivityIndicatorState(guildId);
  let tmp13 = unread2;
  if (!unread2) {
    tmp13 = flag2;
  }
  if (!tmp13) {
    tmp13 = badge2 > 0;
  }
  if (!tmp13) {
    tmp13 = null != activityIndicatorState.source;
  }
  if (tmp13) {
    tmp13 = "transparent" === backgroundColor;
  }
  let tmp15Result;
  if (null != stateFromStores) {
    let tmp16 = flag2;
    if (flag2) {
      tmp16 = !tmp13;
    }
    tmp15Result = getGuildIconSource(stateFromStores, containerSize, tmp16);
    const tmp15 = getGuildIconSource;
  }
  if (null !== tmp15Result) {
    if ("object" === typeof tmp15Result) {
      if ("uri" in tmp15Result) {
        let tmp17 = null != tmp15Result.uri;
      }
      obj = { guildIconRef };
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      obj.guildId = id;
      obj.style = containerStyles;
      obj.backgroundColor = backgroundColor;
      obj.selected = flag2;
      obj.size = size;
      obj.borderRadius = borderRadius;
      obj.onPress = onPress;
      obj.onLongPress = onLongPress;
      let tmp20 = unread2;
      if (null != unread) {
        tmp20 = unread;
      }
      obj.unread = tmp20;
      let tmp21 = badge2;
      if (null != badge) {
        tmp21 = badge;
      }
      obj.badge = tmp21;
      obj.onLayout = onLayout;
      obj.onAccessibilityAction = onAccessibilityAction;
      obj.accessibilityLabel = memo;
      obj.usingCutout = tmp13;
      obj.activityIndicatorState = activityIndicatorState;
      if (guildId === ME) {
        obj = { style: tmp3.dmsWrapper };
        obj1 = {};
        const colors = importDefault(dependencyMap[16]).colors;
        obj1.color = flag2 ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
        obj1 = tmp27(arg1(dependencyMap[15]).ChatIcon, obj1);
        obj.children = obj1;
        <View {...obj} />;
        const tmp28 = View;
      } else {
        if (tmp13) {
          obj2 = { "Bool(false)": "isArray", "Bool(false)": "useValidOrderedFilterTokens", "Bool(false)": "isArray", "Bool(false)": "SenderStopped", "Bool(false)": "center", "Bool(false)": "row" };
          let num7 = 13;
          let tmp35Result = tmp35(tmp36[17]);
          if (badge2 <= 0) {
            let num8 = 0;
            if (unread2) {
              num8 = 11;
            }
            num7 = num8;
          }
          obj2.cutoutBottomRightSize = num7;
          let num9 = 0;
          if (null != activityIndicatorState.source) {
            num9 = 13;
          }
          obj2.cutoutTopRightSize = num9;
          obj2.imageSize = containerSize;
          obj2.imageSource = tmp15Result;
          obj2.imageBorderRadius = borderRadius;
          obj2.imageBackgroundColor = tmp17 ? iconBackground.color : iconBackgroundBrand.color;
          let num10 = 0;
          if (flag2) {
            num10 = 3;
          }
          obj2.clipOuterAmount = num10;
          obj2.borderStroke = 1;
          obj2.borderStrokeColor = iconStroke.color;
          let tmp34Result = tmp34(tmp35Result, obj2);
        } else {
          const obj3 = { guild: stateFromStores, size: iconSize, selected: flag2, animate: flag2, TABS_altDefaultBackground: flag };
          let tmp24 = null;
          tmp35Result = tmp35(tmp36[8]);
          if (null != size) {
            tmp24 = containerSizeStyle;
          }
          obj3.style = tmp24;
          tmp34Result = tmp34(tmp35Result, obj3);
        }
        obj.children = tmp34Result;
        return tmp18(tmp9, obj);
      }
      const tmp18 = jsx;
    }
  }
  tmp17 = null != tmp15Result;
};
