// Module ID: 9838
// Function ID: 76334
// Name: PostPurchaseFooter
// Dependencies: [31, 27, 8312, 9839, 1345, 33, 4130, 689, 1557, 4337, 3982, 4543, 8812, 1212, 2294, 9840, 4126, 4099, 4100, 9720, 9841, 3946, 1334, 566, 8309, 2]
// Exports: default

// Module 9838 (PostPurchaseFooter)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getNextTierForProgress from "getNextTierForProgress";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function PostPurchaseFooter(onSendGift) {
  onSendGift = onSendGift.onSendGift;
  const items = [onSendGift];
  const callback = React.useCallback(() => {
    let arr = outer1_1(outer1_2[9]);
    arr = arr.pop();
    onSendGift();
  }, items);
  let obj = { style: callback6(importDefault(1557)().bottom).footer };
  const callback1 = React.useCallback(() => {
    let arr = outer1_1(outer1_2[9]);
    arr = arr.pop();
    const rootNavigationRef = onSendGift(outer1_2[10]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("you");
    }
  }, []);
  obj = { grow: true, variant: "primary" };
  obj = { size: "sm", color: importDefault(689).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  obj.icon = callback4(onSendGift(8812).GiftIcon, obj);
  const intl = onSendGift(1212).intl;
  obj.text = intl.string(importDefault(2294).g86YiI);
  obj.onPress = callback;
  const items1 = [callback4(onSendGift(4543).Button, obj), ];
  const obj1 = { grow: true, variant: "secondary" };
  const intl2 = onSendGift(1212).intl;
  obj1.text = intl2.string(importDefault(2294)["sa/cfM"]);
  obj1.onPress = callback1;
  items1[1] = callback4(onSendGift(4543).Button, obj1);
  obj.children = items1;
  return callback5(View, obj);
}
function InProgressScreen(arg0) {
  let currentTier;
  let description;
  let nextTier;
  let onSendGift;
  let progress;
  let progressBarTitle;
  let title;
  ({ progress, title, progressBarTitle, description, currentTier, nextTier, onSendGift } = arg0);
  const tmp = callback6(importDefault(1557)().bottom);
  let obj = { style: tmp.screenContainer };
  obj = { style: tmp.content };
  obj = { style: tmp.progressWrapper, children: callback4(importDefault(9840), { progress, currentTier, nextTier, iconSize: 48, title: progressBarTitle }) };
  const items = [callback4(View, obj), ];
  const obj1 = { style: tmp.messageSection };
  const items1 = [callback4(require(4126) /* Text */.Text, { variant: "heading-xxl/bold", style: tmp.centerText, children: title }), ];
  const obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp.centerText, children: description };
  items1[1] = callback4(require(4126) /* Text */.Text, obj3);
  obj1.children = items1;
  items[1] = callback5(View, obj1);
  obj.children = items;
  const items2 = [callback5(View, obj), callback4(PostPurchaseFooter, { onSendGift })];
  obj.children = items2;
  return callback5(View, obj);
}
function LevelUpScreen(arg0) {
  let currentTier;
  let giftsToNextTier;
  let newTier;
  let nextTier;
  let onSendGift;
  let simulatedProgress;
  ({ newTier, nextTier, giftsToNextTier } = arg0);
  ({ simulatedProgress, currentTier, onSendGift } = arg0);
  const tmp = callback6(importDefault(1557)().bottom);
  const effect = React.useEffect(() => {
    const result = outer1_0(outer1_2[17]).triggerHapticFeedback(outer1_1(outer1_2[18]).IMPACT_HEAVY);
  }, []);
  let obj = { style: tmp.screenContainer };
  obj = { style: tmp.content };
  obj = { style: tmp.levelUpIconWrapper };
  let tmp9 = null != newTier.simple_icon_url;
  if (tmp9) {
    const obj1 = { icon: newTier.simple_icon_url, size: 140 };
    tmp9 = callback4(importDefault(9720), obj1);
  }
  obj.children = tmp9;
  const items = [callback4(View, obj), ];
  const obj2 = { style: tmp.levelUpBody };
  const items1 = [callback4(importDefault(9841), { progress: simulatedProgress, currentTier, newTier, style: tmp.levelUpProgress }), ];
  const obj4 = { style: tmp.messageSection };
  const obj5 = { variant: "heading-xxl/bold", style: tmp.centerText };
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj6 = {};
  const name = newTier.name;
  let str = "";
  let str2 = "";
  if (null != name) {
    str2 = name;
  }
  obj6.tierName = str2;
  obj5.children = intl.format(importDefault(2294).k8MmO8, obj6);
  const items2 = [callback4(require(4126) /* Text */.Text, obj5), ];
  let tmp19Result = null != nextTier && null != giftsToNextTier;
  if (tmp19Result) {
    tmp19Result = giftsToNextTier > 0;
  }
  if (tmp19Result) {
    const obj7 = { variant: "text-md/normal", color: "text-subtle", style: tmp.centerText };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj8 = { count: giftsToNextTier };
    const name2 = nextTier.name;
    if (null != name2) {
      str = name2;
    }
    obj8.nextTierName = str;
    obj7.children = intl2.format(importDefault(2294)["6QVlxw"], obj8);
    tmp19Result = callback4(require(4126) /* Text */.Text, obj7);
    const tmp19 = callback4;
  }
  items2[1] = tmp19Result;
  obj4.children = items2;
  items1[1] = closure_11(View, obj4);
  obj2.children = items1;
  items[1] = closure_11(View, obj2);
  obj.children = items;
  const items3 = [closure_11(View, obj), callback4(PostPurchaseFooter, { onSendGift })];
  obj.children = items3;
  return closure_11(View, obj);
}
({ getRemainingGiftsToNextTier: closure_6, getTierForProgress: closure_7, getNextTierForProgress: closure_8 } = getNextTierForProgress);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { screenContainer: { flex: 1 } };
  obj = { flex: 1, alignItems: "center", justifyContent: "center", padding: importDefault(689).space.PX_16 };
  obj.content = obj;
  obj = { padding: importDefault(689).space.PX_16, width: "100%", marginBottom: importDefault(689).space.PX_24 };
  obj.progressWrapper = obj;
  const obj1 = { gap: importDefault(689).space.PX_12, alignItems: "center", width: "100%", paddingHorizontal: importDefault(689).space.PX_16 };
  obj.messageSection = obj1;
  obj.centerText = { textAlign: "center" };
  const obj2 = { paddingVertical: 26, paddingHorizontal: 74, marginBottom: importDefault(689).space.PX_48 };
  obj.levelUpIconWrapper = obj2;
  const obj3 = { gap: importDefault(689).space.PX_12, alignItems: "center", width: "100%" };
  obj.levelUpBody = obj3;
  obj.levelUpProgress = { maxWidth: 260 };
  obj.footer = { width: "100%", gap: importDefault(689).space.PX_12, paddingHorizontal: importDefault(689).space.PX_16, paddingBottom: importDefault(689).space.PX_16 + arg0 };
  return obj;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/gifting/GiftBadgePostPurchase.tsx");

export default function GiftBadgePostPurchase(arg0) {
  let currentProgress;
  let onSendGift;
  ({ currentProgress, onSendGift } = arg0);
  const effect = React.useEffect(() => {
    let obj = outer1_0(outer1_2[21]);
    obj = { dismissAction: outer1_9.INDIRECT_ACTION };
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(outer1_0(outer1_2[22]).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK, obj);
  }, []);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tiers;
    const badgeById = outer1_5.getBadgeById(outer1_0(outer1_2[24]).BadgeId.GIFTING);
    if (null != badgeById) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp31 = callback2(stateFromStores, currentProgress);
    const sum = currentProgress + 1;
    const tmp33 = callback2(stateFromStores, sum);
    let key;
    if (null != tmp33) {
      key = tmp33.key;
    }
    let key1;
    if (null != tmp31) {
      key1 = tmp31.key;
    }
    const tmp6 = callback3(stateFromStores, sum);
    const tmp8 = callback(stateFromStores, sum);
    if (key !== key1) {
      if (null != tmp33) {
        obj = { simulatedProgress: sum, currentTier: tmp31, newTier: tmp33, nextTier: tmp6, giftsToNextTier: tmp8, onSendGift };
        let tmp9Result = callback4(LevelUpScreen, obj);
      }
      return tmp9Result;
    }
    if (1 === tmp8) {
      obj = {};
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj1 = {};
      let name;
      if (null != tmp6) {
        name = tmp6.name;
      }
      let str2 = "";
      if (null != name) {
        str2 = name;
      }
      obj1.nextTier = str2;
      obj.title = intl2.formatToPlainString(importDefault(2294).KjdBPz, obj1);
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj.description = intl3.string(importDefault(2294).oqDrEM);
      const intl4 = require(1212) /* getSystemLocale */.intl;
      obj.progressBarTitle = intl4.string(importDefault(2294)["Ka5s+Q"]);
      obj.progress = sum;
      let tmp25;
      if (null != tmp33) {
        tmp25 = tmp33;
      }
      obj.currentTier = tmp25;
      let tmp26;
      if (null != tmp6) {
        tmp26 = tmp6;
      }
      obj.nextTier = tmp26;
      obj.onSendGift = onSendGift;
      let obj2 = obj;
    } else {
      obj2 = {};
      const intl5 = require(1212) /* getSystemLocale */.intl;
      obj2.title = intl5.string(importDefault(2294)["/rBQud"]);
      const intl6 = require(1212) /* getSystemLocale */.intl;
      obj2.description = intl6.string(importDefault(2294).DDQMlx);
      let name1;
      if (null != tmp31) {
        name1 = tmp31.name;
      }
      let str = "";
      if (null != name1) {
        const intl = require(1212) /* getSystemLocale */.intl;
        const obj3 = {};
        let name2;
        if (null != tmp31) {
          name2 = tmp31.name;
        }
        obj3.tierName = name2;
        str = intl.formatToPlainString(importDefault(2294).bwyQt8, obj3);
      }
      obj2.progressBarTitle = str;
      obj2.progress = sum;
      let tmp16;
      if (null != tmp33) {
        tmp16 = tmp33;
      }
      obj2.currentTier = tmp16;
      let tmp17;
      if (null != tmp6) {
        tmp17 = tmp6;
      }
      obj2.nextTier = tmp17;
      obj2.onSendGift = onSendGift;
    }
    tmp9Result = callback4(InProgressScreen, obj2);
    const tmp10 = InProgressScreen;
    const tmp9 = callback4;
  }
};
