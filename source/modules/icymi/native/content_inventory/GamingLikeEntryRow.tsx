// Module ID: 15113
// Function ID: 113988
// Name: items
// Dependencies: [32178176, 305528832, 438173696, 519897088, 102039552, 31260672, 333643776, 597360640, 333185024, 647233536, 131072, 124977152, 503316507, 33554458, 2030043136, 6, 7, 15, 17, 18, 31, 27, 33, 15117, 334832, 2031616, 88342528, 292552704, 121176064, 121372672, 270073856, 2162688, 37093376]
// Exports: default

// Module 15113 (items)
let closure_4 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_6 = importDefault(dependencyMap[2]);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
let obj = { Badge: importAll(dependencyMap[4]).NewGameBadge, predicate: arg1(dependencyMap[5]).isEntryNew };
const items = [obj, , , , ];
obj = {
  Badge: importAll(dependencyMap[4]).StreakBadge,
  predicate(entry) {
    const streakCount = arg1(dependencyMap[5]).getStreakCount(entry);
    let num = 0;
    if (null != streakCount) {
      num = streakCount;
    }
    return num >= 2;
  }
};
items[1] = obj;
obj = {
  Badge: importAll(dependencyMap[4]).TrendingBadge,
  predicate(entry) {
    const trendingType = arg1(dependencyMap[5]).getTrendingType(entry);
    let tmp2 = null != trendingType;
    if (tmp2) {
      tmp2 = trendingType !== arg1(dependencyMap[6]).TrendingType.TRENDING_TYPE_UNSPECIFIED;
    }
    return tmp2;
  }
};
items[2] = obj;
const tmp2 = arg1(dependencyMap[3]);
items[3] = {
  Badge: importAll(dependencyMap[4]).ResurrectedBadge,
  predicate() {
    return true;
  }
};
const obj1 = {
  Badge: importAll(dependencyMap[4]).ResurrectedBadge,
  predicate() {
    return true;
  }
};
items[4] = {
  Badge: importAll(dependencyMap[4]).MarathonBadge,
  predicate(entry) {
    return true === arg1(dependencyMap[5]).isEntryMarathon(entry);
  }
};
const obj2 = {
  Badge: importAll(dependencyMap[4]).MarathonBadge,
  predicate(entry) {
    return true === arg1(dependencyMap[5]).isEntryMarathon(entry);
  }
};
let closure_11 = arg1(dependencyMap[7]).createICYMIStyles((arg0) => {
  let obj = {};
  obj = { -2108412530: "text-lg/normal", -266912356: "text-default", 1638363508: true };
  ({ margin: obj2.gap, margin: obj2.padding, inset: obj2.marginLeft } = arg0);
  obj.borderRadius = importDefault(dependencyMap[8]).radii.lg;
  obj.backgroundColor = importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH;
  const merged = Object.assign(importDefault(dependencyMap[8]).shadows.SHADOW_HIGH);
  obj.card = obj;
  obj.cardInnerContainer = { "Null": true, "Null": true };
  obj = { "Null": "nativeStyles", "Null": "__handleCache", borderRadius: importDefault(dependencyMap[8]).radii.sm };
  obj.image = obj;
  obj.gameName = { maxWidth: 275, color: importDefault(dependencyMap[8]).colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY };
  const obj2 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, gap: importDefault(dependencyMap[8]).space.PX_8 };
  obj.badges = obj2;
  return obj;
});
const obj6 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx");

export default function GamingLikeEntryRow(content) {
  content = content.content;
  const arg1 = content;
  const renderForScreenshot = content.renderForScreenshot;
  let importAll;
  let dependencyMap;
  const tmp = callback2();
  const application_id = content.extra.application_id;
  const author_id = content.author_id;
  const importDefault = author_id;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(author_id));
  let obj1 = arg1(dependencyMap[11]);
  const displayNameStylesFont = obj1.useDisplayNameStylesFont({ displayNameStyles: importDefault(dependencyMap[10])({ userId: author_id }) });
  let obj2 = arg1(dependencyMap[12]);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(application_id);
  let iconURL;
  if (null != getOrFetchApplication) {
    iconURL = getOrFetchApplication.getIconURL(72);
  }
  const primaryColor = importDefault(dependencyMap[13])(iconURL).primaryColor;
  if (null != getOrFetchApplication) {
    const iconURL1 = getOrFetchApplication.getIconURL(240);
  }
  obj = { location: "ICYMI Activity Card", applicationId: application_id };
  const tmp3 = importDefault(dependencyMap[10])({ userId: author_id });
  obj.source = arg1(dependencyMap[15]).GameProfileSources.ActivityCard;
  obj.trackEntryPointImpression = true;
  obj.sourceUserId = author_id;
  const tmp7Result = importDefault(dependencyMap[14])(obj);
  importAll = tmp7Result;
  const items1 = [tmp7Result];
  const callback = React.useCallback(() => {
    if (null != tmp7Result) {
      tmp7Result();
    }
  }, items1);
  const items2 = [content];
  const memo = React.useMemo(() => {
    if (content.content_type === content(openReplyActionSheet[16]).ContentInventoryEntryType.TOP_GAME) {
      const obj = { entry: content };
      const items = [callback(tmp7Result(openReplyActionSheet[4]).TopGameBadge, obj, "topgame")];
      let found = items;
    } else {
      const mapped = closure_10.map((Badge) => {
        Badge = Badge.Badge;
        let tmp = null;
        if (Badge.predicate(closure_0)) {
          const obj = { entry: closure_0 };
          tmp = callback(Badge, obj, Badge.name);
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
        let obj = callback(closure_3[19]);
        obj.itemInteracted(GameShareModal.id, "hotwheels_gaming_activity", "press_forward");
        let obj1 = callback(closure_3[19]);
        obj = { itemId: GameShareModal.id, itemType: "hotwheels_gaming_activity", actionParameters: {} };
        obj1.feedItemActioned(obj);
        const obj4 = callback(closure_3[20]);
        obj = { content: GameShareModal };
        obj1 = { presentation: "modal" };
        obj4.pushLazy(() => Promise.resolve(GameShareModal), obj, "GameShareModal", obj1);
      }
    });
  }, items3);
  let obj5 = arg1(dependencyMap[21]);
  const openReplyActionSheet = obj5.useReplyActions({ content }).openReplyActionSheet;
  dependencyMap = openReplyActionSheet;
  const items4 = [content, openReplyActionSheet];
  if (null != getOrFetchApplication) {
    if (null != stateFromStores) {
      if (null != iconURL1) {
        const obj34 = arg1(dependencyMap[5]);
        const intl4 = arg1(dependencyMap[22]).intl;
        const string = intl4.string;
        const t = arg1(dependencyMap[22]).t;
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
        const isEntryActiveResult = arg1(dependencyMap[5]).isEntryActive(content);
        obj2 = {};
        let tmp20;
        if (null != displayNameStylesFont) {
          const obj3 = { fontFamily: displayNameStylesFont };
          tmp20 = obj3;
        }
        obj2.style = tmp20;
        let obj10 = importDefault(dependencyMap[25]);
        obj2.children = obj10.getName(stateFromStores);
        const items5 = [callback(arg1(dependencyMap[24]).Text, obj2), ];
        const obj4 = {};
        let obj12 = arg1(dependencyMap[26]);
        let obj13 = importDefault(dependencyMap[27]);
        obj4.children = obj12.getRelativeTimestamp(obj13.extractTimestamp(content.id));
        items5[1] = callback(arg1(dependencyMap[24]).Text, obj4);
        obj1.children = items5;
        obj.title = closure_9(closure_8, obj1);
        obj5 = { -1405509148: -191638511062811800000000000000000000000000000000000000, -1376015004: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008670305676611304 };
        let obj15 = arg1(dependencyMap[5]);
        let str3 = "text-default";
        if (obj15.isEntryActive(content)) {
          str3 = "status-positive";
        }
        obj5.color = str3;
        obj5.children = stringResult;
        obj.subtitle = callback(arg1(dependencyMap[24]).Text, obj5);
        const obj6 = {};
        const obj7 = {};
        const items6 = [tmp.card, ];
        let tmp27 = null;
        if (null != primaryColor) {
          const obj8 = {};
          let obj19 = importDefault(dependencyMap[28])(primaryColor);
          obj8.backgroundColor = obj19.alpha(0.5).hex();
          tmp27 = obj8;
          const alphaResult = obj19.alpha(0.5);
        }
        items6[1] = tmp27;
        obj7.style = items6;
        const obj9 = { onPress: callback, disabled: null == tmp7Result, accessibilityRole: "button" };
        const intl = arg1(dependencyMap[22]).intl;
        obj10 = { gameName: getOrFetchApplication.name };
        obj9.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[22]).t.9sZWVp, obj10);
        const obj11 = {};
        obj12 = { uri: iconURL1 };
        obj11.source = obj12;
        obj11.style = tmp.image;
        obj9.children = callback(importDefault(dependencyMap[30]), obj11);
        const items7 = [callback(arg1(dependencyMap[29]).PressableOpacity, obj9), ];
        obj13 = { style: tmp.cardInnerContainer };
        const obj14 = { onPress: callback, disabled: null == tmp7Result, accessibilityRole: "button" };
        const intl2 = arg1(dependencyMap[22]).intl;
        obj15 = { gameName: getOrFetchApplication.name };
        obj14.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[22]).t.9sZWVp, obj15);
        const obj16 = { variant: "text-md/semibold", style: tmp.gameName, children: getOrFetchApplication.name };
        obj14.children = callback(arg1(dependencyMap[24]).Text, obj16);
        const items8 = [callback(arg1(dependencyMap[29]).PressableOpacity, obj14), ];
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
          const intl3 = arg1(dependencyMap[22]).intl;
          obj19 = { username: importDefault(dependencyMap[25]).getName(stateFromStores) };
          obj18.reactText = intl3.formatToPlainString(arg1(dependencyMap[22]).t.ghWi8V, obj19);
          obj18.onReply = openReplyActionSheet;
          obj18.onForward = callback1;
          tmp39 = callback(arg1(dependencyMap[31]).ContentInventoryReplyRow, obj18);
          const obj33 = importDefault(dependencyMap[25]);
        }
        items9[1] = tmp39;
        obj6.children = items9;
        obj.children = closure_9(View, obj6);
        return callback(importDefault(dependencyMap[23]), obj);
      }
    }
  }
  return null;
};
