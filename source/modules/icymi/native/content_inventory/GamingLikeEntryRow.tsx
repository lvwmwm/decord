// Module ID: 15275
// Function ID: 116479
// Name: items
// Dependencies: [31, 27, 1849, 33, 11957, 7906, 11962, 15226, 689, 566, 4361, 8561, 5468, 7904, 8631, 8642, 7901, 15276, 1934, 8365, 4337, 15280, 1212, 15282, 4126, 3969, 6883, 21, 666, 4660, 5085, 15283, 2]
// Exports: default

// Module 15275 (items)
import ContentInventoryReplyRow from "ContentInventoryReplyRow";
import { View } from "DISCORD_EPOCH";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { Badge: require("ActiveTimestamp").NewGameBadge, predicate: require("calculateTimestampDurations").isEntryNew };
let items = [obj, , , , ];
obj = {
  Badge: require("ActiveTimestamp").StreakBadge,
  predicate(entry) {
    const streakCount = require(7906) /* calculateTimestampDurations */.getStreakCount(entry);
    let num = 0;
    if (null != streakCount) {
      num = streakCount;
    }
    return num >= 2;
  }
};
items[1] = obj;
obj = {
  Badge: require("ActiveTimestamp").TrendingBadge,
  predicate(entry) {
    const trendingType = require(7906) /* calculateTimestampDurations */.getTrendingType(entry);
    let tmp2 = null != trendingType;
    if (tmp2) {
      tmp2 = trendingType !== require(11962) /* TrendingType */.TrendingType.TRENDING_TYPE_UNSPECIFIED;
    }
    return tmp2;
  }
};
items[2] = obj;
items[3] = {
  Badge: require("ActiveTimestamp").ResurrectedBadge,
  predicate() {
    return true;
  }
};
let obj1 = {
  Badge: require("ActiveTimestamp").ResurrectedBadge,
  predicate() {
    return true;
  }
};
items[4] = {
  Badge: require("ActiveTimestamp").MarathonBadge,
  predicate(entry) {
    return true === require(7906) /* calculateTimestampDurations */.isEntryMarathon(entry);
  }
};
let closure_11 = createICYMIStyles.createICYMIStyles((arg0) => {
  let obj = {};
  obj = { flexDirection: "row", gap: null, alignItems: "center" };
  ({ margin: obj2.gap, margin: obj2.padding, inset: obj2.marginLeft } = arg0);
  obj.borderRadius = importDefault(689).radii.lg;
  obj.backgroundColor = importDefault(689).colors.BACKGROUND_SURFACE_HIGH;
  const merged = Object.assign(importDefault(689).shadows.SHADOW_HIGH);
  obj.card = obj;
  obj.cardInnerContainer = { overflow: "hidden", flex: 1 };
  obj = { width: 72, height: 72, borderRadius: importDefault(689).radii.sm };
  obj.image = obj;
  obj.gameName = { maxWidth: 275, color: importDefault(689).colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY };
  const obj2 = { display: "flex", flexDirection: "row", gap: importDefault(689).space.PX_8, flexWrap: "wrap", alignItems: "center", marginTop: 6 };
  obj.badges = obj2;
  return obj;
});
let obj2 = {
  Badge: require("ActiveTimestamp").MarathonBadge,
  predicate(entry) {
    return true === require(7906) /* calculateTimestampDurations */.isEntryMarathon(entry);
  }
};
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx");

export default function GamingLikeEntryRow(content) {
  content = content.content;
  const renderForScreenshot = content.renderForScreenshot;
  let c2;
  let openReplyActionSheet;
  let tmp = callback2();
  const application_id = content.extra.application_id;
  const author_id = content.author_id;
  let obj = content(openReplyActionSheet[9]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getUser(author_id));
  let obj1 = content(openReplyActionSheet[11]);
  const displayNameStylesFont = obj1.useDisplayNameStylesFont({ displayNameStyles: author_id(openReplyActionSheet[10])({ userId: author_id }) });
  let obj2 = content(openReplyActionSheet[12]);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(application_id);
  let iconURL;
  if (null != getOrFetchApplication) {
    iconURL = getOrFetchApplication.getIconURL(72);
  }
  const primaryColor = author_id(openReplyActionSheet[13])(iconURL).primaryColor;
  if (null != getOrFetchApplication) {
    const iconURL1 = getOrFetchApplication.getIconURL(240);
  }
  obj = { location: "ICYMI Activity Card", applicationId: application_id };
  const tmp3 = author_id(openReplyActionSheet[10])({ userId: author_id });
  obj.source = content(openReplyActionSheet[15]).GameProfileSources.ActivityCard;
  obj.trackEntryPointImpression = true;
  obj.sourceUserId = author_id;
  const tmp7Result = author_id(openReplyActionSheet[14])(obj);
  c2 = tmp7Result;
  const items1 = [tmp7Result];
  const callback = React.useCallback(() => {
    if (null != _undefined) {
      _undefined();
    }
  }, items1);
  const items2 = [content];
  const memo = React.useMemo(() => {
    if (content.content_type === content(openReplyActionSheet[16]).ContentInventoryEntryType.TOP_GAME) {
      let obj = { entry: content };
      const items = [outer1_7(_undefined(openReplyActionSheet[4]).TopGameBadge, obj, "topgame")];
      let found = items;
    } else {
      const mapped = outer1_10.map((Badge) => {
        Badge = Badge.Badge;
        let tmp = null;
        if (Badge.predicate(outer1_0)) {
          const obj = { entry: outer1_0 };
          tmp = outer2_7(Badge, obj, Badge.name);
        }
        return tmp;
      });
      const _Boolean = Boolean;
      found = mapped.filter(Boolean);
    }
    return found;
  }, items2);
  const items3 = [content];
  const callback1 = React.useCallback(() => {
    content(openReplyActionSheet[18])(openReplyActionSheet[17], openReplyActionSheet.paths).then((GameShareModal) => {
      GameShareModal = GameShareModal.GameShareModal;
      if (null != GameShareModal) {
        let obj = author_id(openReplyActionSheet[19]);
        obj.itemInteracted(outer1_0.id, "hotwheels_gaming_activity", "press_forward");
        let obj1 = author_id(openReplyActionSheet[19]);
        obj = { itemId: outer1_0.id, itemType: "hotwheels_gaming_activity", actionParameters: { actionGestureType: "press", actionTargetElement: "forward_button", actionIntentType: "share", actionDestinationType: null } };
        obj1.feedItemActioned(obj);
        const obj4 = author_id(openReplyActionSheet[20]);
        obj = { content: outer1_0 };
        obj1 = { presentation: "modal" };
        obj4.pushLazy(() => Promise.resolve(GameShareModal), obj, "GameShareModal", obj1);
      }
    });
  }, items3);
  let obj5 = content(openReplyActionSheet[21]);
  openReplyActionSheet = obj5.useReplyActions({ content }).openReplyActionSheet;
  const items4 = [content, openReplyActionSheet];
  if (null != getOrFetchApplication) {
    if (null != stateFromStores) {
      if (null != iconURL1) {
        const obj34 = content(openReplyActionSheet[5]);
        const intl4 = content(openReplyActionSheet[22]).intl;
        const string = intl4.string;
        const t = content(openReplyActionSheet[22]).t;
        if (isEntryActiveResult) {
          let stringResult = string(t.Gk1P8Z);
        } else {
          stringResult = string(t.ktOTRQ);
        }
        obj = {};
        ({ id: obj7.contentId, author_id: obj7.userId } = content);
        obj.type = "hotwheels_gaming_activity";
        obj.renderForScreenshot = renderForScreenshot;
        obj.onPress = tmp11;
        obj1 = {};
        isEntryActiveResult = content(openReplyActionSheet[5]).isEntryActive(content);
        obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
        let tmp20;
        if (null != displayNameStylesFont) {
          const obj3 = { fontFamily: displayNameStylesFont };
          tmp20 = obj3;
        }
        obj2.style = tmp20;
        let obj10 = author_id(openReplyActionSheet[25]);
        obj2.children = obj10.getName(stateFromStores);
        const items5 = [callback(content(openReplyActionSheet[24]).Text, obj2), ];
        let obj4 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted" };
        let obj12 = content(openReplyActionSheet[26]);
        let obj13 = author_id(openReplyActionSheet[27]);
        obj4.children = obj12.getRelativeTimestamp(obj13.extractTimestamp(content.id));
        items5[1] = callback(content(openReplyActionSheet[24]).Text, obj4);
        obj1.children = items5;
        obj.title = closure_9(closure_8, obj1);
        obj5 = { variant: "text-sm/normal", lineClamp: 1 };
        let obj15 = content(openReplyActionSheet[5]);
        let str3 = "text-default";
        if (obj15.isEntryActive(content)) {
          str3 = "status-positive";
        }
        obj5.color = str3;
        obj5.children = stringResult;
        obj.subtitle = callback(content(openReplyActionSheet[24]).Text, obj5);
        const obj6 = {};
        const obj7 = {};
        const items6 = [tmp.card, ];
        let tmp27 = null;
        if (null != primaryColor) {
          const obj8 = {};
          let obj19 = author_id(openReplyActionSheet[28])(primaryColor);
          obj8.backgroundColor = obj19.alpha(0.5).hex();
          tmp27 = obj8;
          const alphaResult = obj19.alpha(0.5);
        }
        items6[1] = tmp27;
        obj7.style = items6;
        const obj9 = { onPress: callback, disabled: null == tmp7Result, accessibilityRole: "button" };
        const intl = content(openReplyActionSheet[22]).intl;
        obj10 = { gameName: getOrFetchApplication.name };
        obj9.accessibilityLabel = intl.formatToPlainString(content(openReplyActionSheet[22]).t["9sZWVp"], obj10);
        const obj11 = {};
        obj12 = { uri: iconURL1 };
        obj11.source = obj12;
        obj11.style = tmp.image;
        obj9.children = callback(author_id(openReplyActionSheet[30]), obj11);
        const items7 = [callback(content(openReplyActionSheet[29]).PressableOpacity, obj9), ];
        obj13 = { style: tmp.cardInnerContainer };
        const obj14 = { onPress: callback, disabled: null == tmp7Result, accessibilityRole: "button" };
        const intl2 = content(openReplyActionSheet[22]).intl;
        obj15 = { gameName: getOrFetchApplication.name };
        obj14.accessibilityLabel = intl2.formatToPlainString(content(openReplyActionSheet[22]).t["9sZWVp"], obj15);
        const obj16 = { variant: "text-md/semibold", style: tmp.gameName, children: getOrFetchApplication.name };
        obj14.children = callback(content(openReplyActionSheet[24]).Text, obj16);
        const items8 = [callback(content(openReplyActionSheet[29]).PressableOpacity, obj14), ];
        let tmp36 = null != memo;
        if (tmp36) {
          tmp36 = memo.length > 0;
        }
        if (tmp36) {
          const obj17 = { style: tmp.badges, children: memo };
          tmp36 = callback(View, obj17);
        }
        items8[1] = tmp36;
        obj13.children = items8;
        items7[1] = closure_9(View, obj13);
        obj7.children = items7;
        const items9 = [closure_9(View, obj7), ];
        let tmp39 = null;
        if (!renderForScreenshot) {
          const obj18 = {};
          const intl3 = content(openReplyActionSheet[22]).intl;
          obj19 = { username: author_id(openReplyActionSheet[25]).getName(stateFromStores) };
          obj18.reactText = intl3.formatToPlainString(content(openReplyActionSheet[22]).t.ghWi8V, obj19);
          obj18.onReply = openReplyActionSheet;
          obj18.onForward = callback1;
          tmp39 = callback(content(openReplyActionSheet[31]).ContentInventoryReplyRow, obj18);
          const obj33 = author_id(openReplyActionSheet[25]);
        }
        items9[1] = tmp39;
        obj6.children = items9;
        obj.children = closure_9(View, obj6);
        return callback(author_id(openReplyActionSheet[23]), obj);
      }
    }
  }
  return null;
};
