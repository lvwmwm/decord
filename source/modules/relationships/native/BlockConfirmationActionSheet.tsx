// Module ID: 10450
// Function ID: 80439
// Name: BlockedInformationTable
// Dependencies: [57, 31, 27, 1348, 3767, 1849, 8963, 10449, 653, 33, 4130, 689, 8539, 1212, 4088, 5501, 5165, 1273, 1557, 5462, 5482, 566, 7976, 5187, 675, 5189, 8541, 4126, 4319, 8542, 4098, 10451, 1934, 480, 4543, 8962, 7568, 1920, 3827, 2]

// Module 10450 (BlockedInformationTable)
import _slicedToArray from "_slicedToArray";
import importAllResult from "IgnoredInformationTable";
import { View } from "Text";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { UserRemediationAction } from "ClearFriendRequestFilters";
import IGNORE_CONFIRMATION_ACTION_SHEET_KEY from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import ME from "ME";
import jsxProd from "isThrottled";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function BlockedInformationTable() {
  let obj = {
    hasIcons: true,
    children: items.map((icon) => {
      let obj = { start: 0 === arg1, end: outer1_17.length - 1 === arg1 };
      obj = { size: outer1_0(outer1_2[17]).Icon.Sizes.MEDIUM, source: icon.icon };
      obj.icon = outer1_14(outer1_0(outer1_2[17]).Icon, obj);
      obj.label = icon.text();
      obj.subLabel = icon.subtext();
      obj.accessible = true;
      obj.accessibilityLabel = icon.a11yLabel();
      return outer1_14(outer1_0(outer1_2[16]).TableRow, obj, arg1);
    })
  };
  return callback2(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj);
}
({ IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_10, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: closure_11 } = IGNORE_CONFIRMATION_ACTION_SHEET_KEY);
({ HelpdeskArticles: closure_12, AnalyticEvents: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = { button: { alignContent: "center", textAlign: "center" } };
obj = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.tableContainer = obj;
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.otherOptions = _createForOfIteratorHelperLoose;
obj.headerText = { textAlign: "center" };
obj.container = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.header = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj4 = { position: "relative", alignSelf: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.avatarContainer = obj4;
let obj5 = { position: "absolute", bottom: -8, right: -8, padding: require("_createForOfIteratorHelperLoose").space.PX_4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.avatarIconContainer = obj5;
obj.avatar = { alignSelf: "center" };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.footerText = { textAlign: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj6 = { textAlign: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let items = [
  {
    icon: require("registerAsset"),
    text() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.fjFJFV);
    },
    subtext() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["8SIMPz"]);
    },
    a11yLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.qHsrGS);
    }
  },
,

];
let obj7 = {
  icon: require("registerAsset"),
  text() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.fjFJFV);
  },
  subtext() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["8SIMPz"]);
  },
  a11yLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.qHsrGS);
  }
};
items[1] = {
  icon: require("registerAsset"),
  text() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.QCrmqS);
  },
  subtext() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.TKDMoN);
  },
  a11yLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.WR1Mbe);
  }
};
let obj8 = {
  icon: require("registerAsset"),
  text() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.QCrmqS);
  },
  subtext() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.TKDMoN);
  },
  a11yLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.WR1Mbe);
  }
};
items[2] = {
  icon: require("registerAsset"),
  text() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["lkm/a8"]);
  },
  subtext() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["8j3qaC"]);
  },
  a11yLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.lfrNw0);
  }
};
let obj9 = {
  icon: require("registerAsset"),
  text() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["lkm/a8"]);
  },
  subtext() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["8j3qaC"]);
  },
  a11yLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.lfrNw0);
  }
};
const memoResult = importAllResult.memo(function BlockConfirmationActionSheet(userId) {
  let _slicedToArray;
  let closure_4;
  let dependencyMap;
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ onBlock: dependencyMap, onIgnore: _slicedToArray, onSuccess: closure_4 } = userId);
  const tmp = callback4();
  const bottom = channelId(1557)().bottom;
  const items = [channelId(5482).IGNORE_CONFIRMATION_ACTION_SHEET];
  const tmp3 = callback(importAllResult.useState(false), 2);
  const first = tmp3[0];
  let closure_5 = tmp3[1];
  let obj = userId(566);
  const items1 = [closure_8];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_8.getUser(userId), items2);
  let obj1 = userId(566);
  const items3 = [closure_7];
  const items4 = [userId];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => outer1_7.isIgnored(userId), items4);
  let obj2 = userId(566);
  const items5 = [stateFromStores];
  const items6 = [channelId];
  const items7 = [stateFromStores, userId];
  const stateFromStores2 = obj2.useStateFromStores(items5, () => {
    const channel = stateFromStores.getChannel(channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items6);
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const user = userId(outer1_2[22]).getUser(userId);
      const obj = userId(outer1_2[22]);
    }
  }, items7);
  let tmp10Result = null;
  if (null != stateFromStores) {
    obj = { value: tmp2(items).analyticsLocations };
    obj = {
      onDismiss() {
          let obj = channelId(outer1_2[24]);
          obj = { action: outer1_9.DISMISS_BLOCK, location: "user-profile-context-menu" };
          obj.track(outer1_13.USER_REMEDIATION_ACTION, obj);
        },
      scrollable: true
    };
    let num2 = 485;
    if (!stateFromStores1) {
      num2 = closure_11;
    }
    const sum = num2 + bottom;
    const sum1 = sum + channelId(689).space.PX_24;
    obj.startHeight = sum1 + channelId(689).space.PX_24;
    obj1 = { paddingBottom: channelId(689).space.PX_24 + bottom };
    const merged = Object.assign(tmp.container);
    obj.bodyStyles = obj1;
    obj2 = {};
    let obj3 = { style: tmp.header };
    const obj4 = { style: tmp.avatarContainer };
    const obj5 = { guildId: undefined, user: stateFromStores, animate: false, size: userId(1273).AvatarSizes.XLARGE, style: tmp.avatar };
    const items8 = [callback2(userId(1273).Avatar, obj5), ];
    const obj6 = { style: tmp.avatarIconContainer };
    const obj7 = { size: userId(1273).Icon.Sizes.MEDIUM, source: channelId(8541) };
    obj6.children = callback2(userId(1273).Icon, obj7);
    items8[1] = callback2(closure_5, obj6);
    obj4.children = items8;
    const items9 = [callback3(closure_5, obj4), , ];
    const obj8 = { style: tmp.headerText, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
    const intl = userId(1212).intl;
    const obj9 = {};
    let obj14 = channelId(4319);
    obj9.username = obj14.getName(stateFromStores2, channelId, stateFromStores);
    obj8.children = intl.format(userId(1212).t.CIbzHR, obj9);
    items9[1] = callback2(userId(4126).Text, obj8);
    const obj10 = { style: tmp.headerText, variant: "heading-md/medium", color: "text-default", accessibilityRole: "header" };
    const intl2 = userId(1212).intl;
    obj10.children = intl2.string(userId(1212).t.S70jou);
    items9[2] = callback2(userId(4126).Text, obj10);
    obj3.children = items9;
    const items10 = [callback3(closure_5, obj3), , , ];
    const obj11 = { style: tmp.tableContainer, children: callback2(BlockedInformationTable, {}) };
    items10[1] = callback2(closure_5, obj11);
    let tmp31 = !stateFromStores1;
    if (tmp31) {
      const obj12 = { style: tmp.otherOptions };
      const obj13 = {};
      const intl3 = userId(1212).intl;
      obj13.title = intl3.string(userId(1212).t["+BJTcB"]);
      obj13.hasIcons = true;
      obj14 = {};
      const obj15 = { size: userId(1273).Icon.Sizes.MEDIUM, source: channelId(8542) };
      obj14.icon = callback2(userId(1273).Icon, obj15);
      const intl4 = userId(1212).intl;
      obj14.label = intl4.string(userId(1212).t.hC8tcc);
      const intl5 = userId(1212).intl;
      obj14.subLabel = intl5.string(userId(1212).t.If89rE);
      const intl6 = userId(1212).intl;
      obj14.accessibilityLabel = intl6.string(userId(1212).t["8qGQsM"]);
      obj14.onPress = function onPress() {
        let obj = channelId(outer1_2[24]);
        obj = { action: outer1_9.GOTO_IGNORE, location: "user-profile-context-menu" };
        obj.track(outer1_13.USER_REMEDIATION_ACTION, obj);
        const obj3 = channelId(outer1_2[30]);
        obj = { userId, channelId, onSuccess: closure_4, onIgnore: _slicedToArray, impressionName: userId(outer1_2[33]).ImpressionNames.IGNORE_USER_CONFIRMATION };
        obj3.openLazy(userId(outer1_2[32])(outer1_2[31], outer1_2.paths), outer1_10, obj, "replaceTopSheet");
      };
      obj14.arrow = true;
      obj13.children = callback2(userId(5165).TableRow, obj14);
      obj12.children = callback2(userId(5501).TableRowGroup, obj13);
      tmp31 = callback2(closure_5, obj12);
    }
    items10[2] = tmp31;
    const obj16 = { style: tmp.button };
    const obj17 = { size: "lg", variant: "destructive" };
    const intl7 = userId(1212).intl;
    obj17.text = intl7.string(userId(1212).t.l4Emac);
    obj17.onPress = function onPress() {
      callback2(true);
      let obj = channelId(outer1_2[35]);
      obj = { location: channelId(outer1_2[20]).BLOCK_CONFIRMATION_ACTION_SHEET };
      obj.blockUser(userId, obj).then(() => {
        const result = channelId(outer2_2[36]).showBlockSuccessToast(outer1_0, outer1_1);
        if (null != outer1_4) {
          outer1_4();
        }
        const obj = channelId(outer2_2[36]);
        channelId(outer2_2[30]).hideActionSheet();
      });
      if (null != callback) {
        callback();
      }
      const blockUserResult = obj.blockUser(userId, obj);
      channelId(outer1_2[24]).track(outer1_13.BLOCK_USER_CONFIRMED);
    };
    obj17.disabled = first;
    obj17.loading = first;
    const items11 = [callback2(userId(4543).Button, obj17), ];
    const obj18 = { style: tmp.footerText, variant: "text-sm/normal", color: "text-default" };
    const intl8 = userId(1212).intl;
    const obj19 = {
      articleLink() {
          channelId(outer1_2[30]).hideActionSheet();
          const obj = channelId(outer1_2[30]);
          const articleURL = channelId(outer1_2[37]).getArticleURL(outer1_12.STEALTH_REMEDIATION_FEATURE_GUIDE);
          const obj2 = channelId(outer1_2[37]);
          channelId(outer1_2[38]).openURL(articleURL);
        }
    };
    obj18.children = intl8.format(userId(1212).t.CpTgBn, obj19);
    items11[1] = callback2(userId(4126).Text, obj18);
    obj16.children = items11;
    items10[3] = callback3(closure_5, obj16);
    obj2.children = items10;
    obj.children = callback3(userId(5189).BottomSheetScrollView, obj2);
    obj.children = callback2(userId(5187).BottomSheet, obj);
    tmp10Result = callback2(userId(5462).AnalyticsLocationProvider, obj);
    const tmp10 = callback2;
    const tmp13 = callback2;
    const tmp20 = callback3;
  }
  return tmp10Result;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/relationships/native/BlockConfirmationActionSheet.tsx");

export default memoResult;
