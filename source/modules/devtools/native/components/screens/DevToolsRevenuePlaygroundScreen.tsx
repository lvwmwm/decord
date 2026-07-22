// Module ID: 14544
// Function ID: 109512
// Name: dismissalPath
// Dependencies: []
// Exports: default

// Module 14544 (dismissalPath)
function dismissalPath(arg0, arg1) {
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + closure_21 + "/" + arg0 + "/" + arg1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_21 + "/" + arg0;
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
  const text = `${obj.toLocaleDateString("en-US", { "Bool(true)": "log", "Bool(true)": "info", "Bool(true)": "warn" })} `;
  return `${obj.toLocaleDateString("en-US", { "Bool(true)": "log", "Bool(true)": "info", "Bool(true)": "warn" })} ` + new Date(stateFromStores3).toLocaleTimeString("en-US", { <string:1024641584>: true, <string:1874175738>: true, <string:995318883>: true });
}
function FriendAnniversary() {
  let highAffinity;
  let highestAffinity;
  let tmp9;
  function renderDismissalRow(userId, hasItem, arg2, gen) {
    const user = map.getUser(userId);
    let username;
    if (null != user) {
      username = user.username;
    }
    if (null == username) {
      const _HermesInternal = HermesInternal;
      username = "Unknown User (" + userId + ")";
    }
    const stateFromStores1 = username;
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
    if (null != stateFromStores1[userId]) {
      str5 = callback3(tmp4);
    }
    if (null != value) {
      str4 = callback3(value);
    }
    obj.subLabel = "" + arg2 + "Mobile: " + str5 + " \u00B7 Server: " + str4;
    let tmp13;
    if (tmp6) {
      tmp13 = callback2(userId(stateFromStores2[18]).TableRowArrow, {});
    }
    obj.trailing = tmp13;
    obj.disabled = first2;
    let fn;
    if (tmp6) {
      fn = () => {
        function handleClearServerDismissal(arg0, username) {
          callback(() => {
            const HTTP = arg0(closure_2[15]).HTTP;
            return HTTP.del({ url: callback(closure_22, arg0), rejectWithError: true });
          }, "Cleared server dismissal for " + username + ".");
        }(arg0, username);
      };
    }
    obj.onPress = fn;
    return callback2(userId(stateFromStores2[17]).TableRow, obj, "" + gen + "-" + userId);
  }
  let obj = arg1(dependencyMap[14]);
  const items = [closure_7, closure_12, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    function buildRow(userId) {
      const userAffinity = userAffinity.getUserAffinity(userId);
      const obj = { userId };
      const user = user.getUser(userId);
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
    const obj = { selected: uiStore.getDevToolTotalFriendAnniversaries() };
    const highestAffinityFriendAnniversaries = uiStore.getHighestAffinityFriendAnniversaries();
    obj.highestAffinity = highestAffinityFriendAnniversaries.map(buildRow);
    const highAffinityFriendAnniversaries = uiStore.getHighAffinityFriendAnniversaries();
    obj.highAffinity = highAffinityFriendAnniversaries.map(buildRow);
    return obj;
  }, [], arg1(dependencyMap[14]).statesWillNeverBeEqual);
  ({ selected: closure_0, highestAffinity, highAffinity } = stateFromStores);
  let obj1 = arg1(dependencyMap[14]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => uiStore.getMessageGiftIntentLastShownMap());
  const importDefault = stateFromStores1;
  let obj2 = arg1(dependencyMap[14]);
  const items2 = [closure_12];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    const currentUser = map.getCurrentUser();
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    return null != isStaffResult && isStaffResult;
  });
  const dependencyMap = stateFromStores2;
  let obj3 = arg1(dependencyMap[14]);
  const items3 = [closure_9];
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
  let callback = stateFromStores3;
  const tmp5 = callback2(React.useState([]), 2);
  const first = tmp5[0];
  const callback2 = tmp5[1];
  const tmp6 = callback2(React.useState(false), 2);
  const first1 = tmp6[0];
  const React = first1;
  let closure_6 = tmp6[1];
  [tmp9, closure_7] = callback2(React.useState(false), 2);
  const tmp10 = callback2(React.useState(false), 2);
  closure_8 = tmp11;
  // CreateGeneratorClosureLongIndex (0x67)
  callback = React.useCallback(callback(tmp11), []);
  closure_9 = callback;
  const items4 = [callback, stateFromStores3];
  const effect = React.useEffect(() => {
    callback();
  }, items4);
  const items5 = [callback];
  let closure_10 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = stateFromStores3(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items5);
  if (!first2) {
    let first2 = tmp10[0];
  }
  let closure_11 = first2;
  const found = first.filter((intent_type) => intent_type.intent_type === closure_22);
  const map = new Map(found.map((target_id) => {
    const items = [target_id.target_id, Number(target_id.dismissed_at_ms)];
    return items;
  }));
  closure_12 = map;
  const tmp8 = callback2(React.useState(false), 2);
  let closure_13 = new Set(highestAffinity.map((userId) => userId.userId));
  const items6 = [...highAffinity];
  const set = new Set(highestAffinity.map((userId) => userId.userId));
  let arr = Array.from(new Map(items6.map((userId) => {
    const items = [userId.userId, userId];
    return items;
  })).values());
  const DevSettingsCategory = arr;
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
  obj = { -9223372036854775808: null, 9223372036854775807: null };
  obj1 = {
    label: "Number of anniversaries",
    subLabel: "Current: " + str,
    trailing: callback3(arg1(dependencyMap[18]).TableRowArrow, {}),
    onPress() {
      let obj = callback(stateFromStores2[20]);
      obj = {
        key: "dev-tools-friend-anniversary-count",
        header: { title: "Anniversaries to generate" },
        options: closure_20.map((arg0) => {
          let label;
          let value;
          ({ label, value } = arg0);
          const obj = {};
          let combined = label;
          if (value === value) {
            const _HermesInternal = HermesInternal;
            combined = "" + label + "  (selected)";
          }
          obj.label = combined;
          obj.onPress = function onPress() {
            let obj = callback(closure_2[13]);
            obj = { type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: value };
            obj.dispatch(obj);
          };
          return obj;
        }),
        hasIcons: false
      };
      const result = obj.showSimpleActionSheet(obj);
    }
  };
  const items8 = [callback3(arg1(dependencyMap[17]).TableRow, obj1), , ];
  obj2 = {
    onPress() {
      const channelId = first2.getChannelId();
      if (null != channelId) {
        const channel = channel.getChannel(channelId);
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
          stateFromStores1(stateFromStores2[16]).open({ stateMachine: "User Level DCs", fit: false });
          const obj5 = stateFromStores1(stateFromStores2[16]);
        } else {
          stateFromStores1(stateFromStores2[16]).open({ stateMachine: "TOO_MANY_CONNECTIONS", fit: "boosting_prompt" });
          const obj2 = stateFromStores1(stateFromStores2[16]);
        }
      } else {
        obj = stateFromStores1(stateFromStores2[16]);
        obj.open({ stateMachine: true, fit: true });
      }
    }
  };
  items8[1] = callback3(arg1(dependencyMap[17]).TableRow, obj2);
  items8[2] = arr.map((userId) => {
    userId = userId.userId;
    const hasItem = set.has(userId);
    return renderDismissalRow(userId, hasItem, "" + userId.affinity + " \u00B7 ", "gen");
  });
  obj.children = items8;
  const items9 = [callback4(arg1(dependencyMap[19]).TableRowGroup, obj), , , ];
  let tmp21 = found1.length > 0;
  if (tmp21) {
    obj3 = {};
    const obj4 = { size: importDefault(dependencyMap[23]).space.PX_16 };
    const items10 = [callback3(arg1(dependencyMap[22]).Spacer, obj4), ];
    const obj5 = { -9223372036854775808: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004573084686348991, 9223372036854775807: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000264089331213, children: found1.map((userId) => renderDismissalRow(userId, false, "", "other")) };
    items10[1] = callback3(arg1(dependencyMap[19]).TableRowGroup, obj5);
    obj3.children = items10;
    tmp21 = callback4(closure_19, obj3);
  }
  items9[1] = tmp21;
  const obj6 = { size: importDefault(dependencyMap[23]).space.PX_16 };
  items9[2] = callback3(arg1(dependencyMap[22]).Spacer, obj6);
  const obj7 = { -9223372036854775808: 32, 9223372036854775807: null };
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
  const items11 = [callback3(arg1(dependencyMap[17]).TableRow, obj8), , , , , , ];
  const obj9 = { label: "Server last recorded dismissal" };
  let str4 = "never";
  if (null != stateFromStores3) {
    str4 = formatTimestamp(stateFromStores3);
  }
  obj9.subLabel = str4;
  items11[1] = callback3(arg1(dependencyMap[17]).TableRow, obj9);
  const obj10 = {
    disabled: first2,
    onPress() {
      channel(() => {
        let num = 0;
        if (null != closure_3) {
          num = closure_3;
        }
        return callback(closure_2[24]).fetchAndReconcileGiftIntentDismissals(num);
      }, "Reconcile triggered.");
    }
  };
  items11[2] = callback3(arg1(dependencyMap[17]).TableRow, obj10);
  const obj11 = { disabled: first2, onPress: callback };
  items11[3] = callback3(arg1(dependencyMap[17]).TableRow, obj11);
  const obj12 = { trailing: callback3(arg1(dependencyMap[18]).TableRowArrow, {}) };
  let tmp34 = first2;
  if (!first2) {
    tmp34 = first1;
  }
  if (!tmp34) {
    tmp34 = 0 === arr.length;
  }
  obj12.disabled = tmp34;
  obj12.onPress = function onPress() {
    let obj = callback(stateFromStores2[20]);
    obj = {
      key: "dev-tools-gift-intent-seed",
      header: { title: "Dismiss a generated anniversary on the server" },
      options: arr.map((label) => ({
        label: label.username,
        onPress() {
          return callback(() => {
            const HTTP = lib(closure_2[15]).HTTP;
            let obj = { "Bool(false)": "EvalError", "Bool(false)": "withExposureTracking", "Bool(false)": "EvalError" };
            obj = { intent_type: closure_22, target_id: lib.userId };
            obj.body = obj;
            return HTTP.post(obj);
          }, "Dismissed " + arg0.username + " on the server.");
        }
      })),
      hasIcons: false
    };
    const result = obj.showSimpleActionSheet(obj);
  };
  items11[4] = callback3(arg1(dependencyMap[17]).TableRow, obj12);
  const obj13 = { fetched: "Array", usernameSuggestionLoading: "Array", xml: "isArray" };
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
      const HTTP = callback(closure_2[15]).HTTP;
      return HTTP.del({ url: callback2(closure_22), rejectWithError: true });
    }, "Cleared all server dismissals.");
  };
  items11[5] = callback3(arg1(dependencyMap[17]).TableRow, obj13);
  items11[6] = callback3(arg1(dependencyMap[17]).TableRow, {
    onPress() {
      stateFromStores1(stateFromStores2[13]).dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
      const obj = stateFromStores1(stateFromStores2[13]);
      stateFromStores1(stateFromStores2[16]).open({});
    }
  });
  obj7.children = items11;
  items9[3] = callback4(arg1(dependencyMap[19]).TableRowGroup, obj7);
  obj.children = items9;
  return callback4(closure_19, obj);
}
function TrialOfferSheetExample() {
  function openTrialOfferActionSheet(TIER_0) {
    if (null != premiumTrialOffer) {
      let obj = openTrialOfferActionSheet(paths[27]);
      obj = {
        fallbackPremiumType: TIER_0,
        userTrialOffer: premiumTrialOffer,
        markAsDismissed() {

          }
      };
      obj.openLazy(premiumTrialOffer(paths[29])(paths[28], paths.paths), "PremiumTrialOfferActionSheet", obj);
    }
  }
  let obj = arg1(dependencyMap[26]);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  const arg1 = premiumTrialOffer;
  obj = { -9223372036854775808: "Powerup Rollback DCs", 9223372036854775807: false };
  obj = {
    label: "Trial Offer Nitro Basic",
    subLabel: "No trial offer in store",
    disabled: null == premiumTrialOffer,
    onPress() {
      openTrialOfferActionSheet(closure_16.TIER_0);
    }
  };
  const items = [closure_17(arg1(dependencyMap[17]).TableRow, obj), ];
  const obj1 = {
    label: "Trial Offer Nitro",
    subLabel: "No trial offer in store",
    disabled: null == premiumTrialOffer,
    onPress() {
      openTrialOfferActionSheet(closure_16.TIER_2);
    }
  };
  items[1] = closure_17(arg1(dependencyMap[17]).TableRow, obj1);
  obj.children = items;
  return closure_18(arg1(dependencyMap[19]).TableRowGroup, obj);
}
function PremiumToggles() {
  let obj = arg1(dependencyMap[14]);
  const items = [closure_13];
  const stateFromStores = obj.useStateFromStores(items, () => closure_13.allByCategory(constants.PREMIUM).filter((arg0) => {
    let tmp;
    [tmp] = arg0;
    return "force_mock_iap" !== tmp;
  }), [], arg1(dependencyMap[14]).statesWillNeverBeEqual);
  obj = {
    -9223372036854775808: "System Messages",
    9223372036854775807: false,
    children: stateFromStores.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2, ] = arg0;
      return callback2(callback(closure_2[30]).TableSwitchRow, {
        label: tmp3,
        subLabel: tmp,
        value: tmp2,
        onValueChange(arg0) {
          return callback(closure_2[31]).toggle(callback, arg0);
        }
      }, tmp);
    })
  };
  return callback3(arg1(dependencyMap[19]).TableRowGroup, obj);
}
function ForceMockIAP() {
  let obj = arg1(dependencyMap[14]);
  const items = [closure_13];
  const stateFromStores = obj.useStateFromStores(items, () => closure_13.get("force_mock_iap"));
  const result = arg1(dependencyMap[32]).shouldMockIAPForceEnable();
  obj = { -9223372036854775808: "Surveys", 9223372036854775807: false };
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
    callback(closure_2[31]).toggle("force_mock_iap", arg0);
    closure_13.persist();
    const obj = callback(closure_2[31]);
    const result = callback2(closure_2[33]).checkForUpdateAndReload();
  };
  obj.children = closure_17(arg1(dependencyMap[30]).TableSwitchRow, obj);
  return closure_17(arg1(dependencyMap[19]).TableRowGroup, obj);
}
function PaymentFlowTest() {
  let obj = { -9223372036854775808: "Changelog", 9223372036854775807: false };
  obj = {
    label: "Test Payment Flow",
    onPress() {
      callback2(paths[34]).pushLazy(callback(paths[29])(paths[35], paths.paths));
    },
    trailing: callback3(arg1(dependencyMap[18]).TableRowArrow, {})
  };
  obj.children = callback3(arg1(dependencyMap[17]).TableRow, obj);
  return callback3(arg1(dependencyMap[19]).TableRowGroup, obj);
}
function Orbs() {
  let obj = { -9223372036854775808: "Actions", 9223372036854775807: false };
  obj = {
    label: "Test Orbs Flow",
    onPress() {
      callback2(paths[34]).pushLazy(callback(paths[29])(paths[36], paths.paths));
    },
    trailing: callback3(arg1(dependencyMap[18]).TableRowArrow, {})
  };
  obj.children = callback3(arg1(dependencyMap[17]).TableRow, obj);
  return callback3(arg1(dependencyMap[19]).TableRowGroup, obj);
}
function RevenueSmokeTests() {
  let obj = { -9223372036854775808: "md", 9223372036854775807: "Search design toggles" };
  obj = {
    label: "Test all purchasing flows",
    onPress() {
      callback2(paths[34]).pushLazy(callback(paths[29])(paths[37], paths.paths));
    },
    trailing: callback3(arg1(dependencyMap[18]).TableRowArrow, {})
  };
  obj.children = callback3(arg1(dependencyMap[17]).TableRow, obj);
  return callback3(arg1(dependencyMap[19]).TableRowGroup, obj);
}
function GuildPowerups() {
  let obj = {};
  obj = {
    label: "Guild Powerups",
    onPress() {
      callback2(paths[34]).pushLazy(callback(paths[29])(paths[38], paths.paths));
    },
    trailing: callback3(arg1(dependencyMap[18]).TableRowArrow, {})
  };
  obj.children = callback3(arg1(dependencyMap[17]).TableRow, obj);
  return callback3(arg1(dependencyMap[19]).TableRowGroup, obj);
}
function GuildTagBadges() {
  let obj = {};
  obj = {
    onPress() {
      callback2(paths[34]).pushLazy(callback(paths[29])(paths[39], paths.paths));
    },
    trailing: callback3(arg1(dependencyMap[18]).TableRowArrow, {})
  };
  obj.children = callback3(arg1(dependencyMap[17]).TableRow, obj);
  return callback3(arg1(dependencyMap[19]).TableRowGroup, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const ScrollView = arg1(dependencyMap[3]).ScrollView;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const DevSettingsCategory = arg1(dependencyMap[10]).DevSettingsCategory;
({ GiftIntentType: closure_15, PremiumTypes: closure_16 } = arg1(dependencyMap[11]));
const tmp2 = arg1(dependencyMap[11]);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = arg1(dependencyMap[12]));
const items = [{ "Null": "isArray", "Null": "count" }, { "Null": "jsx", "Null": "r" }, { "Null": "log", "Null": null }, { "Null": 87, "Null": 18 }, { "Null": null, "Null": null }, { "Null": false, "Null": false }, { "Null": null, "Null": null }, { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005794404933148447, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000267813383574139 }];
let closure_21 = "/users/@me/gift-intents/dismissals";
let closure_22 = "FRIEND_ANNIVERSARY";
let obj = arg1(dependencyMap[25]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[23]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[12]);
obj.scrollContainer = { padding: importDefault(dependencyMap[23]).space.PX_16 };
let closure_23 = obj.createStyles(obj);
const obj1 = { padding: importDefault(dependencyMap[23]).space.PX_16 };
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsRevenuePlaygroundScreen.tsx");

export default function DevToolsRevenuePlaygroundScreen() {
  const tmp = callback5();
  let obj = { style: tmp.container, contentContainerStyle: tmp.scrollContainer };
  const items = [callback3(TrialOfferSheetExample, {}), , , , , , , , , , , , , , , , ];
  obj = { size: importDefault(dependencyMap[23]).space.PX_16 };
  items[1] = callback3(arg1(dependencyMap[22]).Spacer, obj);
  items[2] = callback3(PremiumToggles, {});
  obj = { size: importDefault(dependencyMap[23]).space.PX_16 };
  items[3] = callback3(arg1(dependencyMap[22]).Spacer, obj);
  items[4] = callback3(ForceMockIAP, {});
  const obj1 = { size: importDefault(dependencyMap[23]).space.PX_16 };
  items[5] = callback3(arg1(dependencyMap[22]).Spacer, obj1);
  items[6] = callback3(PaymentFlowTest, {});
  const obj2 = { size: importDefault(dependencyMap[23]).space.PX_16 };
  items[7] = callback3(arg1(dependencyMap[22]).Spacer, obj2);
  items[8] = callback3(Orbs, {});
  const obj3 = { size: importDefault(dependencyMap[23]).space.PX_16 };
  items[9] = callback3(arg1(dependencyMap[22]).Spacer, obj3);
  items[10] = callback3(RevenueSmokeTests, {});
  const obj4 = { size: importDefault(dependencyMap[23]).space.PX_16 };
  items[11] = callback3(arg1(dependencyMap[22]).Spacer, obj4);
  items[12] = callback3(GuildPowerups, {});
  const obj5 = { size: importDefault(dependencyMap[23]).space.PX_16 };
  items[13] = callback3(arg1(dependencyMap[22]).Spacer, obj5);
  items[14] = callback3(GuildTagBadges, {});
  const obj6 = { size: importDefault(dependencyMap[23]).space.PX_16 };
  items[15] = callback3(arg1(dependencyMap[22]).Spacer, obj6);
  items[16] = callback3(FriendAnniversary, {});
  obj.children = items;
  return callback4(ScrollView, obj);
};
