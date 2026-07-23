// Module ID: 10422
// Function ID: 80269
// Name: IgnoredInformationTable
// Dependencies: [57, 31, 27, 1348, 1849, 8924, 10420, 653, 33, 4130, 689, 8494, 1212, 4088, 5503, 5165, 1273, 1557, 5464, 5484, 566, 675, 7889, 5187, 5189, 8497, 4126, 4319, 8496, 4098, 10421, 1934, 480, 4543, 8923, 5459, 1920, 3827, 2]

// Module 10422 (IgnoredInformationTable)
import _slicedToArray from "_slicedToArray";
import importAllResult from "maybeLoadBundle";
import { View } from "getNickname";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { UserRemediationAction } from "ClearFriendRequestFilters";
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import ME from "ME";
import jsxProd from "Button";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_9;
const require = arg1;
function IgnoredInformationTable() {
  let obj = {
    hasIcons: true,
    children: items.map((icon) => {
      let obj = { start: 0 === arg1, end: outer1_16.length - 1 === arg1 };
      obj = { size: outer1_0(outer1_2[16]).Icon.Sizes.MEDIUM, source: icon.icon };
      obj.icon = outer1_13(outer1_0(outer1_2[16]).Icon, obj);
      obj.label = icon.text();
      obj.subLabel = icon.subtext();
      obj.accessible = true;
      obj.accessibilityLabel = icon.a11yLabel();
      return outer1_13(outer1_0(outer1_2[15]).TableRow, obj, arg1);
    })
  };
  return callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
}
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_9, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: closure_10 } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
({ AnalyticEvents: closure_11, HelpdeskArticles: closure_12 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let obj = { button: { alignContent: "center", textAlign: "center" } };
obj = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.tableContainer = obj;
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.otherOptions = _createForOfIteratorHelperLoose;
obj.subTitle = { textAlign: "center" };
obj.title = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.container = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj3 = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.header = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj5 = { position: "relative", alignSelf: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.avatarContainer = obj5;
let obj6 = { position: "absolute", bottom: -8, right: -8, padding: require("_createForOfIteratorHelperLoose").space.PX_4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.avatarIconContainer = obj6;
obj.avatar = { alignSelf: "center" };
let obj4 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.destructiveIcon = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj7 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
let items = [
  {
    icon: require("registerAsset"),
    text() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.ruhGkg);
    },
    subtext() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["/FWKKC"]);
    },
    a11yLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.QAzPrp);
    }
  },
,

];
let obj8 = {
  icon: require("registerAsset"),
  text() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ruhGkg);
  },
  subtext() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/FWKKC"]);
  },
  a11yLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.QAzPrp);
  }
};
items[1] = {
  icon: require("registerAsset"),
  text() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.N9v3eq);
  },
  subtext() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ddpuJg);
  },
  a11yLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.PYR8jT);
  }
};
let obj9 = {
  icon: require("registerAsset"),
  text() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.N9v3eq);
  },
  subtext() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ddpuJg);
  },
  a11yLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.PYR8jT);
  }
};
items[2] = {
  icon: require("registerAsset"),
  text() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["4ycGE0"]);
  },
  subtext() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["5yfN+o"]);
  },
  a11yLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/XoqE6"]);
  }
};
let obj10 = {
  icon: require("registerAsset"),
  text() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["4ycGE0"]);
  },
  subtext() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["5yfN+o"]);
  },
  a11yLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/XoqE6"]);
  }
};
const memoResult = importAllResult.memo(function IgnoreConfirmationActionSheet(userId) {
  let _slicedToArray;
  let dependencyMap;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ onIgnore: dependencyMap, onSuccess: _slicedToArray } = userId);
  function handleClose() {
    let obj = channelId(outer1_2[21]);
    obj = { action: outer1_8.DISMISS_IGNORE, location: "user-profile-context-menu" };
    obj.track(outer1_11.USER_REMEDIATION_ACTION, obj);
  }
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(false), 2);
  const first = tmp2[0];
  const bottom = channelId(1557)().bottom;
  const items = [channelId(5484).IGNORE_CONFIRMATION_ACTION_SHEET];
  let obj = userId(566);
  const items1 = [closure_7];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_7.getUser(userId), items2);
  let obj1 = userId(566);
  const items3 = [_isNativeReflectConstruct];
  const items4 = [channelId];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => {
    const channel = outer1_6.getChannel(channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items4);
  const items5 = [stateFromStores, userId];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const user = userId(outer1_2[22]).getUser(userId);
      const obj = userId(outer1_2[22]);
    }
  }, items5);
  let tmp9Result = null;
  if (null != stateFromStores) {
    obj = { value: tmp4(items).analyticsLocations };
    obj = { onDismiss: handleClose, scrollable: true };
    const sum = closure_10 + bottom;
    const sum1 = sum + channelId(689).space.PX_24;
    obj.startHeight = sum1 + channelId(689).space.PX_24;
    obj1 = { paddingBottom: channelId(689).space.PX_16 + bottom };
    const merged = Object.assign(tmp.container);
    obj.bodyStyles = obj1;
    let obj2 = {};
    let obj3 = { style: tmp.header };
    const obj4 = { style: tmp.avatarContainer };
    const obj5 = {};
    let tmp22;
    if (null != stateFromStores1) {
      tmp22 = stateFromStores1;
    }
    obj5.guildId = tmp22;
    obj5.user = stateFromStores;
    obj5.animate = false;
    obj5.size = userId(1273).AvatarSizes.XLARGE;
    obj5.style = tmp.avatar;
    const items6 = [callback2(userId(1273).Avatar, obj5), ];
    const obj6 = { style: tmp.avatarIconContainer };
    const obj7 = { size: userId(1273).Icon.Sizes.MEDIUM, source: channelId(8497) };
    obj6.children = callback2(userId(1273).Icon, obj7);
    items6[1] = callback2(stateFromStores, obj6);
    obj4.children = items6;
    const items7 = [callback3(stateFromStores, obj4), , ];
    const obj8 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
    const intl = userId(1212).intl;
    const obj9 = {};
    let obj13 = channelId(4319);
    obj9.username = obj13.getName(stateFromStores1, channelId, stateFromStores);
    obj8.children = intl.format(userId(1212).t["WrQD/Y"], obj9);
    items7[1] = callback2(userId(4126).Text, obj8);
    const obj10 = { style: tmp.subTitle, variant: "heading-md/medium", color: "text-default", accessibilityRole: "header" };
    const intl2 = userId(1212).intl;
    obj10.children = intl2.string(userId(1212).t.JKL1u1);
    items7[2] = callback2(userId(4126).Text, obj10);
    obj3.children = items7;
    const items8 = [callback3(stateFromStores, obj3), , , ];
    const obj11 = { style: tmp.tableContainer, children: callback2(IgnoredInformationTable, {}) };
    items8[1] = callback2(stateFromStores, obj11);
    const obj12 = { style: tmp.otherOptions };
    obj13 = {};
    const intl3 = userId(1212).intl;
    obj13.title = intl3.string(userId(1212).t["1v01gh"]);
    obj13.hasIcons = true;
    const obj14 = {};
    const obj15 = { size: userId(1273).Icon.Sizes.MEDIUM, source: channelId(8496), color: tmp.destructiveIcon.color };
    obj14.icon = callback2(userId(1273).Icon, obj15);
    const intl4 = userId(1212).intl;
    obj14.label = intl4.string(userId(1212).t.bwxY30);
    obj14.variant = "danger";
    const obj16 = { variant: "text-xs/medium", color: "text-feedback-critical" };
    const intl5 = userId(1212).intl;
    obj16.children = intl5.string(userId(1212).t.NTnf1T);
    obj14.subLabel = callback2(userId(4126).Text, obj16);
    const intl6 = userId(1212).intl;
    obj14.accessibilityLabel = intl6.string(userId(1212).t["fZ+p9C"]);
    obj14.onPress = function onPress() {
      let obj = channelId(outer1_2[21]);
      obj = { action: outer1_8.GOTO_BLOCK, location: "user-profile-context-menu" };
      obj.track(outer1_11.USER_REMEDIATION_ACTION, obj);
      const obj3 = channelId(outer1_2[29]);
      obj = { userId, channelId, onSuccess: _slicedToArray, impressionName: userId(outer1_2[32]).ImpressionNames.BLOCK_USER_CONFIRMATION };
      obj3.openLazy(userId(outer1_2[31])(outer1_2[30], outer1_2.paths), outer1_9, obj, "replaceTopSheet");
    };
    obj14.arrow = true;
    obj13.children = callback2(userId(5165).TableRow, obj14);
    obj12.children = callback2(userId(5503).TableRowGroup, obj13);
    items8[2] = callback2(stateFromStores, obj12);
    const obj17 = { style: tmp.button };
    const obj18 = { size: "lg" };
    const intl7 = userId(1212).intl;
    obj18.text = intl7.string(userId(1212).t.ytCpKs);
    obj18.onPress = function onPress() {
      callback2(true);
      const obj = channelId(outer1_2[34]);
      channelId(outer1_2[34]).ignoreUser(userId, channelId(outer1_2[19]).IGNORE_CONFIRMATION_ACTION_SHEET, channelId).then(() => {
        if (null != outer1_3) {
          outer1_3();
        }
        channelId(outer2_2[29]).hideActionSheet();
      });
      if (null != callback) {
        callback();
      }
      const ignoreUserResult = channelId(outer1_2[34]).ignoreUser(userId, channelId(outer1_2[19]).IGNORE_CONFIRMATION_ACTION_SHEET, channelId);
      channelId(outer1_2[21]).track(outer1_11.IGNORE_USER_CONFIRMED);
    };
    obj18.disabled = first;
    obj18.loading = first;
    const items9 = [callback2(userId(4543).Button, obj18), ];
    const obj19 = { onPress: handleClose };
    const obj20 = { textAlign: "center", marginTop: channelId(689).space.PX_12, paddingBottom: channelId(689).space.PX_4 };
    obj19.style = obj20;
    obj19.variant = "text-sm/normal";
    obj19.color = "text-default";
    const intl8 = userId(1212).intl;
    const obj21 = {
      articleLink() {
          channelId(outer1_2[29]).hideActionSheet();
          const obj = channelId(outer1_2[29]);
          const articleURL = channelId(outer1_2[36]).getArticleURL(outer1_12.STEALTH_REMEDIATION_FEATURE_GUIDE);
          const obj2 = channelId(outer1_2[36]);
          channelId(outer1_2[37]).openURL(articleURL);
        }
    };
    obj19.children = intl8.format(userId(1212).t.iX9qtL, obj21);
    items9[1] = callback2(userId(5459).TextWithIOSLinkWorkaround, obj19);
    obj17.children = items9;
    items8[3] = callback3(stateFromStores, obj17);
    obj2.children = items8;
    obj.children = callback3(userId(5189).BottomSheetScrollView, obj2);
    obj.children = callback2(userId(5187).BottomSheet, obj);
    tmp9Result = callback2(userId(5464).AnalyticsLocationProvider, obj);
    const tmp12 = callback2;
    const tmp21 = callback2;
    const tmp9 = callback2;
  }
  return tmp9Result;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/relationships/native/IgnoreConfirmationActionSheet.tsx");

export default memoResult;
