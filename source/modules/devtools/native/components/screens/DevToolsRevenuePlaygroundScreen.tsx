// Module ID: 14658
// Function ID: 111672
// Name: dismissalPath
// Dependencies: [5, 57, 31, 27, 7754, 6902, 1316, 1348, 1906, 1849, 4129, 1851, 33, 686, 624, 507, 3831, 5165, 5171, 5503, 5498, 6691, 1273, 689, 7110, 4130, 6686, 4098, 14659, 1934, 5504, 14662, 7203, 10941, 4337, 14663, 14666, 14670, 14672, 14675, 2]
// Exports: default

// Module 14658 (dismissalPath)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import toggle from "toggle";
import { ScrollView } from "showActionSheet";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { DevSettingsCategory } from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";
import jsxProd from "BundleUpdaterManager";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
const require = arg1;
function dismissalPath(arg0, arg1) {
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + c21 + "/" + arg0 + "/" + arg1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + c21 + "/" + arg0;
  }
  return combined;
}
function describeServerError(status) {
  status = undefined;
  if (null != status) {
    status = status.status;
  }
  if (403 === status) {
    return "Forbidden (403): this account is likely not in the backend-persistence experiment; clearing also requires staff.";
  } else {
    const _Error = Error;
    if (status instanceof Error) {
      let message = status.message;
    } else {
      const _String = String;
      message = String(status);
    }
  }
}
function formatTimestamp(stateFromStores3) {
  const text = `${obj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} `;
  return `${obj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} ` + new Date(stateFromStores3).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}
function FriendAnniversary() {
  let closure_7;
  let highAffinity;
  let highestAffinity;
  let require;
  let tmp9;
  function renderDismissalRow(userId, hasItem, arg2, gen) {
    let closure_0 = userId;
    const user = map.getUser(userId);
    let username;
    if (null != user) {
      username = user.username;
    }
    if (null == username) {
      const _HermesInternal = HermesInternal;
      username = "Unknown User (" + userId + ")";
    }
    const value = map.get(userId);
    let tmp6 = null != value && stateFromStores2;
    if (tmp6) {
      tmp6 = !first1;
    }
    const obj = {};
    let combined = username;
    if (hasItem) {
      const _HermesInternal2 = HermesInternal;
      combined = "\u2605 " + username;
    }
    obj.label = combined;
    let str4 = "not dismissed";
    let str5 = "not dismissed";
    if (null != username[userId]) {
      str5 = outer1_26(tmp4);
    }
    if (null != value) {
      str4 = outer1_26(value);
    }
    obj.subLabel = "" + arg2 + "Mobile: " + str5 + " \u00B7 Server: " + str4;
    let tmp13;
    if (tmp6) {
      tmp13 = outer1_17(outer1_0(stateFromStores2[18]).TableRowArrow, {});
    }
    obj.trailing = tmp13;
    obj.disabled = first2;
    let fn;
    if (tmp6) {
      fn = () => {
        (function handleClearServerDismissal(closure_0, username) {
          outer2_10(() => {
            const HTTP = outer4_0(stateFromStores2[15]).HTTP;
            return HTTP.del({ url: outer4_24(outer4_22, closure_0), rejectWithError: true });
          }, "Cleared server dismissal for " + username + ".");
        })(closure_0, username);
      };
    }
    obj.onPress = fn;
    return outer1_17(outer1_0(stateFromStores2[17]).TableRow, obj, "" + gen + "-" + userId);
  }
  let obj = require(stateFromStores2[14]);
  let items = [closure_7, map, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    function buildRow(userId) {
      userAffinity = userAffinity.getUserAffinity(userId);
      const obj = { userId };
      const user = map.getUser(userId);
      let username;
      if (null != user) {
        username = user.username;
      }
      if (null == username) {
        const _HermesInternal = HermesInternal;
        username = "Unknown User (" + userId + ")";
      }
      obj.username = username;
      let dmProbability;
      if (null != userAffinity) {
        dmProbability = userAffinity.dmProbability;
      }
      let str3 = "N/A";
      if (null != dmProbability) {
        const result = 100 * userAffinity.dmProbability;
        const _HermesInternal2 = HermesInternal;
        str3 = "" + result.toFixed(3) + "%";
      }
      obj.affinity = str3;
      return obj;
    }
    let obj = { selected: outer1_7.getDevToolTotalFriendAnniversaries() };
    const highestAffinityFriendAnniversaries = outer1_7.getHighestAffinityFriendAnniversaries();
    obj.highestAffinity = highestAffinityFriendAnniversaries.map(buildRow);
    const highAffinityFriendAnniversaries = outer1_7.getHighAffinityFriendAnniversaries();
    obj.highAffinity = highAffinityFriendAnniversaries.map(buildRow);
    return obj;
  }, [], require(stateFromStores2[14]).statesWillNeverBeEqual);
  ({ selected: require, highestAffinity, highAffinity } = stateFromStores);
  let obj1 = require(stateFromStores2[14]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.getMessageGiftIntentLastShownMap());
  let obj2 = require(stateFromStores2[14]);
  const items2 = [map];
  stateFromStores2 = obj2.useStateFromStores(items2, () => {
    const currentUser = map.getCurrentUser();
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    return null != isStaffResult && isStaffResult;
  });
  let obj3 = require(stateFromStores2[14]);
  const items3 = [callback];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => {
    const userContent = callback.settings.userContent;
    let prop;
    if (null != userContent) {
      prop = userContent.lastGiftIntentDismissedAtMs;
    }
    let str = "0";
    if (null != prop) {
      str = prop;
    }
    const NumberResult = Number(str);
    let tmp3 = null;
    if (!Number.isNaN(NumberResult)) {
      tmp3 = null;
      if (0 !== NumberResult) {
        tmp3 = NumberResult;
      }
    }
    return tmp3;
  });
  const tmp5 = callback(first1.useState([]), 2);
  let first = tmp5[0];
  callback = tmp5[1];
  let tmp6 = callback(first1.useState(false), 2);
  first1 = tmp6[0];
  let closure_6 = tmp6[1];
  [tmp9, closure_7] = callback(first1.useState(false), 2);
  const tmp10 = callback(first1.useState(false), 2);
  closure_8 = tmp11;
  // CreateGeneratorClosureLongIndex (0x67)
  callback = first1.useCallback(stateFromStores3(tmp11), []);
  const items4 = [callback, stateFromStores3];
  const effect = first1.useEffect(() => {
    callback();
  }, items4);
  const items5 = [callback];
  let closure_10 = first1.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = stateFromStores3(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items5);
  if (!first2) {
    first2 = tmp10[0];
  }
  const found = first.filter((intent_type) => intent_type.intent_type === outer1_22);
  map = new Map(found.map((target_id) => {
    const items = [target_id.target_id, Number(target_id.dismissed_at_ms)];
    return items;
  }));
  const set = new Set(highestAffinity.map((userId) => userId.userId));
  const items6 = [...highAffinity];
  const tmp8 = callback(first1.useState(false), 2);
  let arr = Array.from(new Map(items6.map((userId) => {
    const items = [userId.userId, userId];
    return items;
  })).values());
  const set1 = new Set(arr.map((userId) => userId.userId));
  const items7 = [...Object.keys(stateFromStores1), ...Array.from(map.keys())];
  const map1 = new Map(items6.map((userId) => {
    const items = [userId.userId, userId];
    return items;
  }));
  arr = Array.from(new Set(items7));
  const found1 = arr.filter((arg0) => !set1.has(arg0));
  const found2 = items.find((value) => value.value === closure_0);
  let label;
  if (null != found2) {
    label = found2.label;
  }
  let str = "None";
  if (null != label) {
    str = label;
  }
  obj = {};
  obj = { title: "Friend Anniversary", hasIcons: false };
  obj1 = {
    label: "Number of anniversaries",
    subLabel: "Current: " + str,
    trailing: callback2(require(stateFromStores2[18]).TableRowArrow, {}),
    onPress() {
      let obj = outer1_0(stateFromStores2[20]);
      obj = {
        key: "dev-tools-friend-anniversary-count",
        header: { title: "Anniversaries to generate" },
        options: outer1_20.map((arg0) => {
          let label;
          let value;
          ({ label, value } = arg0);
          let closure_0 = value;
          let obj = {};
          let combined = label;
          if (value === outer1_0) {
            const _HermesInternal = HermesInternal;
            combined = "" + label + "  (selected)";
          }
          obj.label = combined;
          obj.onPress = function onPress() {
            let obj = stateFromStores1(stateFromStores2[13]);
            obj = { type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: closure_0 };
            obj.dispatch(obj);
          };
          return obj;
        }),
        hasIcons: false
      };
      const result = obj.showSimpleActionSheet(obj);
    }
  };
  const items8 = [callback2(require(stateFromStores2[17]).TableRow, obj1), , ];
  obj2 = {
    label: "Trigger Mobile FA message in current DM",
    subLabel: "Sends an ephemeral GIFTING_PROMPT into the selected channel",
    onPress() {
      const channelId = first2.getChannelId();
      if (null != channelId) {
        channel = channel.getChannel(channelId);
        let first;
        if (null != channel) {
          const recipients = channel.recipients;
          if (null != recipients) {
            first = recipients[0];
          }
        }
        if (null != first) {
          let obj = { giftIntentType: set1.FRIEND_ANNIVERSARY, recipientUserId: first };
          const result = stateFromStores1(stateFromStores2[21]).sendGiftingPromptSystemMessage(channelId, obj);
          const obj3 = stateFromStores1(stateFromStores2[21]);
          stateFromStores1(stateFromStores2[16]).open({ key: "dev-tools-gift-intent-triggered", content: "Friendship anniversary card sent." });
          const obj5 = stateFromStores1(stateFromStores2[16]);
        } else {
          stateFromStores1(stateFromStores2[16]).open({ key: "dev-tools-gift-intent-no-recipient", content: "Selected channel has no other recipient." });
          const obj2 = stateFromStores1(stateFromStores2[16]);
        }
      } else {
        obj = stateFromStores1(stateFromStores2[16]);
        obj.open({ key: "dev-tools-gift-intent-no-channel", content: "Open a DM first." });
      }
    }
  };
  items8[1] = callback2(require(stateFromStores2[17]).TableRow, obj2);
  items8[2] = arr.map((userId) => {
    userId = userId.userId;
    const hasItem = set.has(userId);
    return renderDismissalRow(userId, hasItem, "" + userId.affinity + " \u00B7 ", "gen");
  });
  obj.children = items8;
  const items9 = [callback3(require(stateFromStores2[19]).TableRowGroup, obj), , , ];
  let tmp21 = found1.length > 0;
  if (tmp21) {
    obj3 = {};
    const obj4 = { size: stateFromStores1(stateFromStores2[23]).space.PX_16 };
    const items10 = [callback2(require(stateFromStores2[22]).Spacer, obj4), ];
    let obj5 = { title: "Other Dismissals (not generated)", hasIcons: false, children: found1.map((userId) => renderDismissalRow(userId, false, "", "other")) };
    items10[1] = callback2(require(stateFromStores2[19]).TableRowGroup, obj5);
    obj3.children = items10;
    tmp21 = callback3(closure_19, obj3);
  }
  items9[1] = tmp21;
  const obj6 = { size: stateFromStores1(stateFromStores2[23]).space.PX_16 };
  items9[2] = callback2(require(stateFromStores2[22]).Spacer, obj6);
  const obj7 = { title: "Backend Dismissal Sync", hasIcons: false };
  const obj8 = { label: "Eligibility" };
  let str2 = "ok";
  if (first1) {
    str2 = "not enrolled (calls 403)";
  }
  let str3 = "no";
  if (stateFromStores2) {
    str3 = "yes";
  }
  obj8.subLabel = "Experiment: " + str2 + " \u00B7 Staff: " + str3;
  const items11 = [callback2(require(stateFromStores2[17]).TableRow, obj8), , , , , , ];
  const obj9 = { label: "Server last recorded dismissal" };
  let str4 = "never";
  if (null != stateFromStores3) {
    str4 = formatTimestamp(stateFromStores3);
  }
  obj9.subLabel = str4;
  items11[1] = callback2(require(stateFromStores2[17]).TableRow, obj9);
  const obj10 = {
    label: "Reconcile now",
    subLabel: "Fetch + merge server dismissals into the local store",
    disabled: first2,
    onPress() {
      channel(() => {
        let num = 0;
        if (null != outer1_3) {
          num = outer1_3;
        }
        return outer2_0(stateFromStores2[24]).fetchAndReconcileGiftIntentDismissals(num);
      }, "Reconcile triggered.");
    }
  };
  items11[2] = callback2(require(stateFromStores2[17]).TableRow, obj10);
  const obj11 = { label: "Refresh server dismissals", subLabel: "Re-fetch the per-friend server view above", disabled: first2, onPress: callback };
  items11[3] = callback2(require(stateFromStores2[17]).TableRow, obj11);
  const obj12 = { label: "Dismiss a generated anniversary on the server", subLabel: "POST a server dismissal for a generated friend", trailing: callback2(require(stateFromStores2[18]).TableRowArrow, {}) };
  let tmp34 = first2;
  if (!first2) {
    tmp34 = first1;
  }
  if (!tmp34) {
    tmp34 = 0 === arr.length;
  }
  obj12.disabled = tmp34;
  obj12.onPress = function onPress() {
    let obj = outer1_0(stateFromStores2[20]);
    obj = {
      key: "dev-tools-gift-intent-seed",
      header: { title: "Dismiss a generated anniversary on the server" },
      options: arr.map((label) => {
        let closure_0 = label;
        return {
          label: label.username,
          onPress() {
            return outer2_10(() => {
              const HTTP = outer4_0(stateFromStores2[15]).HTTP;
              let obj = { url: "/users/@me/gift-intents/dismiss", body: null, rejectWithError: true };
              obj = { intent_type: outer4_22, target_id: outer1_0.userId };
              obj.body = obj;
              return HTTP.post(obj);
            }, "Dismissed " + label.username + " on the server.");
          }
        };
      }),
      hasIcons: false
    };
    const result = obj.showSimpleActionSheet(obj);
  };
  items11[4] = callback2(require(stateFromStores2[17]).TableRow, obj12);
  const obj13 = { variant: "danger", label: "Clear all server dismissals (staff)", subLabel: "DELETE every server dismissal for this user" };
  if (!first2) {
    first2 = !stateFromStores2;
  }
  if (!first2) {
    first2 = first1;
  }
  if (!first2) {
    first2 = 0 === map.size;
  }
  obj13.disabled = first2;
  obj13.onPress = function onPress() {
    channel(() => {
      const HTTP = outer2_0(stateFromStores2[15]).HTTP;
      return HTTP.del({ url: outer2_24(outer2_22), rejectWithError: true });
    }, "Cleared all server dismissals.");
  };
  items11[5] = callback2(require(stateFromStores2[17]).TableRow, obj13);
  const obj14 = {
    variant: "danger",
    label: "Reset local message cooldown",
    subLabel: "Clears messageGiftIntentLastShownMap on this device",
    onPress() {
      stateFromStores1(stateFromStores2[13]).dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
      const obj = stateFromStores1(stateFromStores2[13]);
      stateFromStores1(stateFromStores2[16]).open({ key: "dev-tools-gift-intent-local", content: "Cleared local message cooldown." });
    }
  };
  items11[6] = callback2(require(stateFromStores2[17]).TableRow, obj14);
  obj7.children = items11;
  items9[3] = callback3(require(stateFromStores2[19]).TableRowGroup, obj7);
  obj.children = items9;
  return callback3(closure_19, obj);
}
function TrialOfferSheetExample() {
  function openTrialOfferActionSheet(TIER_0) {
    if (null != premiumTrialOffer) {
      let obj = openTrialOfferActionSheet(outer1_2[27]);
      obj = {
        fallbackPremiumType: TIER_0,
        userTrialOffer: premiumTrialOffer,
        markAsDismissed() {

          }
      };
      obj.openLazy(premiumTrialOffer(outer1_2[29])(outer1_2[28], outer1_2.paths), "PremiumTrialOfferActionSheet", obj);
    }
  }
  let obj = premiumTrialOffer(6686);
  premiumTrialOffer = obj.usePremiumTrialOffer();
  obj = { title: "Trial Offers", hasIcons: false };
  obj = {
    label: "Trial Offer Nitro Basic",
    subLabel: "No trial offer in store",
    disabled: null == premiumTrialOffer,
    onPress() {
      openTrialOfferActionSheet(outer1_16.TIER_0);
    }
  };
  const items = [closure_17(premiumTrialOffer(5165).TableRow, obj), ];
  const obj1 = {
    label: "Trial Offer Nitro",
    subLabel: "No trial offer in store",
    disabled: null == premiumTrialOffer,
    onPress() {
      openTrialOfferActionSheet(outer1_16.TIER_2);
    }
  };
  items[1] = closure_17(premiumTrialOffer(5165).TableRow, obj1);
  obj.children = items;
  return closure_18(premiumTrialOffer(5503).TableRowGroup, obj);
}
function PremiumToggles() {
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [closure_13];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_13.allByCategory(outer1_14.PREMIUM).filter((arg0) => {
    let tmp;
    [tmp] = arg0;
    return "force_mock_iap" !== tmp;
  }), [], require(624) /* defaultAreStatesEqual */.statesWillNeverBeEqual);
  obj = {
    title: "Premium Toggles",
    hasIcons: false,
    children: stateFromStores.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2, ] = arg0;
      return outer1_17(outer1_0(outer1_2[30]).TableSwitchRow, {
        label: tmp3,
        subLabel: tmp,
        value: tmp2,
        onValueChange(arg0) {
          return outer2_0(outer2_2[31]).toggle(closure_0, arg0);
        }
      }, tmp);
    })
  };
  return callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
}
function ForceMockIAP() {
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [closure_13];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_13.get("force_mock_iap"));
  let result = require(7203) /* serializePurchaseResponse */.shouldMockIAPForceEnable();
  obj = { title: "iOS IAP Mock", hasIcons: false };
  obj = { label: "Force mock IAP products" };
  let str = "Replaces StoreKit with hardcoded fixture data. App will restart when toggled.";
  if (result) {
    str = "Forced on - the current device can't fetch real StoreKit products.";
  }
  obj.subLabel = str;
  let tmp5 = result;
  if (!result) {
    tmp5 = stateFromStores;
  }
  obj.value = tmp5;
  obj.disabled = result;
  obj.onValueChange = function onValueChange(arg0) {
    outer1_0(outer1_2[31]).toggle("force_mock_iap", arg0);
    outer1_13.persist();
    const obj = outer1_0(outer1_2[31]);
    const result = outer1_1(outer1_2[33]).checkForUpdateAndReload();
  };
  obj.children = closure_17(require(5504) /* TableSwitchRow */.TableSwitchRow, obj);
  return closure_17(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
}
function PaymentFlowTest() {
  let obj = { title: "Payment Flow Test", hasIcons: false };
  obj = {
    label: "Test Payment Flow",
    onPress() {
      outer1_1(outer1_2[34]).pushLazy(outer1_0(outer1_2[29])(outer1_2[35], outer1_2.paths));
    },
    trailing: callback2(require(5171) /* TableRowArrow */.TableRowArrow, {})
  };
  obj.children = callback2(require(5165) /* TableRowInner */.TableRow, obj);
  return callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
}
function Orbs() {
  let obj = { title: "Orbs", hasIcons: false };
  obj = {
    label: "Test Orbs Flow",
    onPress() {
      outer1_1(outer1_2[34]).pushLazy(outer1_0(outer1_2[29])(outer1_2[36], outer1_2.paths));
    },
    trailing: callback2(require(5171) /* TableRowArrow */.TableRowArrow, {})
  };
  obj.children = callback2(require(5165) /* TableRowInner */.TableRow, obj);
  return callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
}
function RevenueSmokeTests() {
  let obj = { title: "Revenue Smoke Tests", hasIcons: false };
  obj = {
    label: "Test all purchasing flows",
    onPress() {
      outer1_1(outer1_2[34]).pushLazy(outer1_0(outer1_2[29])(outer1_2[37], outer1_2.paths));
    },
    trailing: callback2(require(5171) /* TableRowArrow */.TableRowArrow, {})
  };
  obj.children = callback2(require(5165) /* TableRowInner */.TableRow, obj);
  return callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
}
function GuildPowerups() {
  let obj = { title: "Guild Powerups", hasIcons: false };
  obj = {
    label: "Guild Powerups",
    onPress() {
      outer1_1(outer1_2[34]).pushLazy(outer1_0(outer1_2[29])(outer1_2[38], outer1_2.paths));
    },
    trailing: callback2(require(5171) /* TableRowArrow */.TableRowArrow, {})
  };
  obj.children = callback2(require(5165) /* TableRowInner */.TableRow, obj);
  return callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
}
function GuildTagBadges() {
  let obj = { title: "Guild Tag Badges", hasIcons: false };
  obj = {
    label: "Badge gallery",
    subLabel: "Preview all native badge kinds across sizes and tints",
    onPress() {
      outer1_1(outer1_2[34]).pushLazy(outer1_0(outer1_2[29])(outer1_2[39], outer1_2.paths));
    },
    trailing: callback2(require(5171) /* TableRowArrow */.TableRowArrow, {})
  };
  obj.children = callback2(require(5165) /* TableRowInner */.TableRow, obj);
  return callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
}
({ GiftIntentType: closure_15, PremiumTypes: closure_16 } = GuildFeatures);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
let items = [{ label: "None", value: null }, { label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "5", value: 5 }, { label: "10", value: 10 }, { label: "25", value: 25 }];
let c21 = "/users/@me/gift-intents/dismissals";
const FRIEND_ANNIVERSARY = "FRIEND_ANNIVERSARY";
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollContainer = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("result").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsRevenuePlaygroundScreen.tsx");

export default function DevToolsRevenuePlaygroundScreen() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container, contentContainerStyle: tmp.scrollContainer };
  const items = [callback2(TrialOfferSheetExample, {}), , , , , , , , , , , , , , , , ];
  obj = { size: importDefault(689).space.PX_16 };
  items[1] = callback2(require(1273) /* Button */.Spacer, obj);
  items[2] = callback2(PremiumToggles, {});
  obj = { size: importDefault(689).space.PX_16 };
  items[3] = callback2(require(1273) /* Button */.Spacer, obj);
  items[4] = callback2(ForceMockIAP, {});
  const obj1 = { size: importDefault(689).space.PX_16 };
  items[5] = callback2(require(1273) /* Button */.Spacer, obj1);
  items[6] = callback2(PaymentFlowTest, {});
  const obj2 = { size: importDefault(689).space.PX_16 };
  items[7] = callback2(require(1273) /* Button */.Spacer, obj2);
  items[8] = callback2(Orbs, {});
  const obj3 = { size: importDefault(689).space.PX_16 };
  items[9] = callback2(require(1273) /* Button */.Spacer, obj3);
  items[10] = callback2(RevenueSmokeTests, {});
  const obj4 = { size: importDefault(689).space.PX_16 };
  items[11] = callback2(require(1273) /* Button */.Spacer, obj4);
  items[12] = callback2(GuildPowerups, {});
  const obj5 = { size: importDefault(689).space.PX_16 };
  items[13] = callback2(require(1273) /* Button */.Spacer, obj5);
  items[14] = callback2(GuildTagBadges, {});
  const obj6 = { size: importDefault(689).space.PX_16 };
  items[15] = callback2(require(1273) /* Button */.Spacer, obj6);
  items[16] = callback2(FriendAnniversary, {});
  obj.children = items;
  return callback3(ScrollView, obj);
};
