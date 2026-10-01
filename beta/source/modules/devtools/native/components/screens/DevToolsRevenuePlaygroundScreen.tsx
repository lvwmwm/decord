// Module ID: 15286
// Function ID: 15287
// Name: DevToolsRevenuePlaygroundScreen
// Dependencies: [5, 32, 19, 17, 7521, 7072, 1220, 2045, 2099, 1372, 4835, 1374, 21, 573, 563, 1271, 4528, 5917, 5924, 5999, 6616, 6876, 1177, 576, 10205, 4836, 6867, 4800, 15287, 1981, 6621, 15292, 10513, 11269, 5039, 15293, 15296, 15300, 15302, 15305, 2]
// Exports: default

// Module 15286 (DevToolsRevenuePlaygroundScreen)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import DevSettingsStore2 from "DevSettingsStore" /* 4835 */;
import TableRow6 from "TableRow" /* 5917 */;
import TableRowArrow from "TableRowArrow" /* 5924 */;
import TableRowGroup4 from "TableRowGroup" /* 5999 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6616 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6621 */;
import IAPUtils from "IAPUtils" /* 10513 */;
import BundleUpdaterDefault from "BundleUpdater" /* 11269 */;
import DevSettingsActions from "DevSettingsActions" /* 15292 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 7521 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7072 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserStore from "UserStore" /* 1372 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const DevSettingsStore = DevSettingsStore2;
let closure_2, closure_3, closure_4, content, map, map1, set, set2, userAffinity;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let obj2;
let obj3;
function describeServerError(status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  let str = "Forbidden (403): this account is likely not in the backend-persistence experiment; clearing also requires staff.";
  if (403 !== status) {
    let message;
    const _Error = Error;
    if (status instanceof Error) {
      message = status.message;
    } else {
      const _String = String;
      message = String(status);
    }
    str = message;
  }
  return str;
}
function FriendAnniversary() {
  let arr5;
  let closure_6;
  let closure_8;
  let first1;
  let from3;
  let highAffinity;
  let highestAffinity;
  let items10;
  let items8;
  let onPress;
  let recipientUserId;
  let stateFromStores2;
  let tmp11;
  let uiStore;
  function renderDismissalRow(userId, hasItem, arg2, gen) {
    let fn;
    let str4;
    let str5;
    let tmp8Result;
    require = userId;
    const user = map.getUser(userId);
    let username;
    if (user != null) {
      username = user.username;
    }
    if (username == null) {
      let _HermesInternal = HermesInternal;
      username = "Unknown User (" + userId + ")";
    }
    const value = map.get(userId);
    let tmp6 = null != value && stateFromStores2;
    if (tmp6) {
      tmp6 = !first;
    }
    let combined = username;
    const TableRow = require("TableRow").TableRow;
    const tmp10 = stateFromStores2;
    const tmp9 = require;
    if (hasItem) {
      let _HermesInternal2 = HermesInternal;
      combined = "\u2605 " + username;
    }
    const obj = { label: combined, subLabel: "" + arg2 + "Mobile: " + str5 + " \u00B7 Server: " + str4, trailing: tmp8Result, disabled: first1, onPress: fn };
    str4 = "not dismissed";
    str5 = "not dismissed";
    if (null != username[userId]) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      new Date(username[userId]);
      const text = `${obj2.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} `;
      str5 = `${obj2.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} ${obj2.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
    }
    if (null != value) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      new Date(value);
      const text1 = `${obj3.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} `;
      str4 = `${obj3.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} ${obj3.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
    }
    tmp8Result = undefined;
    if (tmp6) {
      tmp8Result = tmp8(tmp9(tmp10[18]).TableRowArrow, {});
    }
    fn = undefined;
    if (tmp6) {
      fn = () => {
        const tmp = channel(() => {
          let url;
          const HTTP = userId(closure_2_2[15]).HTTP;
          const del = HTTP.del;
          if (null != closure_0) {
            const _HermesInternal2 = HermesInternal;
            url = "" + closure_2_21 + "/" + tmp + "/" + tmp2;
          } else {
            const _HermesInternal = HermesInternal;
            url = "" + closure_2_21 + "/" + tmp;
          }
          return del({ url, rejectWithError: true });
        }, "Cleared server dismissal for " + username + ".");
      };
    }
    return closure_1_17(TableRow, obj, "" + gen + "-" + userId);
  }
  let tmp = require;
  let tmp2 = stateFromStores2;
  let obj = require("useStateFromStores");
  items = [PremiumGiftingIntentStore, map, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let highAffinityFriendAnniversaries;
    let highestAffinityFriendAnniversaries;
    function buildRow(userId) {
      let str3;
      let username;
      userAffinity = userAffinity.getUserAffinity(userId);
      const obj = { userId, username, affinity: str3 };
      user = user.getUser(userId);
      username = undefined;
      if (user != null) {
        username = user.username;
      }
      if (username == null) {
        const _HermesInternal = HermesInternal;
        username = "Unknown User (" + userId + ")";
      }
      let dmProbability;
      if (userAffinity != null) {
        dmProbability = userAffinity.dmProbability;
      }
      str3 = "N/A";
      if (null != dmProbability) {
        const result = 100 * userAffinity.dmProbability;
        const _HermesInternal2 = HermesInternal;
        str3 = "" + result.toFixed(3) + "%";
      }
      return obj;
    }
    let obj = { selected: PremiumGiftingIntentStore.getDevToolTotalFriendAnniversaries(), highestAffinity: highestAffinityFriendAnniversaries.map(buildRow), highAffinity: highAffinityFriendAnniversaries.map(buildRow) };
    highestAffinityFriendAnniversaries = PremiumGiftingIntentStore.getHighestAffinityFriendAnniversaries();
    highAffinityFriendAnniversaries = PremiumGiftingIntentStore.getHighAffinityFriendAnniversaries();
    return obj;
  }, [], require("useStateFromStores").statesWillNeverBeEqual);
  ({ selected: require, highestAffinity, highAffinity } = stateFromStores);
  let obj2 = require("useStateFromStores");
  const items1 = [PremiumGiftingIntentStore];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => PremiumGiftingIntentStore.getMessageGiftIntentLastShownMap());
  let obj3 = require("useStateFromStores");
  const items2 = [map];
  stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const currentUser = map.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj4 = require("useStateFromStores");
  const items3 = [onPress];
  const stateFromStores3 = obj4.useStateFromStores(items3, () => {
    const userContent = callback.settings.userContent;
    let str;
    const _Number = Number;
    if (userContent != null) {
      str = userContent.lastGiftIntentDismissedAtMs;
    }
    if (str == null) {
      str = "0";
    }
    const _NumberResult = _Number(str);
    let tmp2 = null;
    if (!Number.isNaN(_NumberResult)) {
      tmp2 = null;
      if (0 !== _NumberResult) {
        tmp2 = _NumberResult;
      }
    }
    return tmp2;
  });
  let tmp7 = _slicedToArray(recipientUserId.useState([]), 2);
  [arr5, _slicedToArray] = tmp7;
  [recipientUserId, closure_6] = recipientUserId.useState(false);
  let tmp10 = _slicedToArray(recipientUserId.useState(false), 2);
  [tmp11, PremiumGiftingIntentStore] = tmp10;
  [first1, closure_8] = recipientUserId.useState(false);
  onPress = recipientUserId.useCallback(stateFromStores3(function*(arg0, value) {
    let closure_1;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let status;
        let body;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            status = tmp;
            body = undefined;
            stateFromStores1 = undefined;
            PremiumGiftingIntentStore(true);
            c4 = 2;
            const HTTP = closure_0(status[15]).HTTP;
            c5 = 3;
            c6 = 1;
            const obj4 = { value: HTTP.get({ url: "/users/@me/gift-intent-dismissals", rejectWithError: true }), done: false };
            return obj4;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_130_7(false);
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
            status = closure_3;
            stateFromStores1 = 403 === status.status;
            closure_130_6(stateFromStores1);
            const tmp25 = stateFromStores1;
            if (tmp25) {
              closure_130_4([]);
            } else {
              const obj5 = { key: "dev-tools-gift-intent-server", content: describeServerError(status) };
              const open = stateFromStores1(status[16]).open;
              const tmp30 = stateFromStores1(status[16]);
              open(obj5);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_7(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            body = value.body;
            const dismissals = body.dismissals;
            closure_0 = dismissals;
            const tmp7 = closure_130_4;
            if (dismissals == null) {
              closure_0 = [];
            }
            tmp7(closure_0);
            closure_130_6(false);
            c4 = 1;
          }
          c4 = 0;
          closure_130_7(false);
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp49) {
        closure_3 = tmp49;
        if (0 === c4) {
          c6 = 3;
          throw tmp49;
        } else if (1 === tmp51) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  }), []);
  const items4 = [onPress, stateFromStores3];
  const effect = recipientUserId.useEffect(() => {
    callback();
  }, items4);
  const useCallback = recipientUserId.useCallback;
  let closure_0 = stateFromStores3((content, arg1) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      let tmp12;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp12;
              content = closure_1;
              closure_1_8(true);
              c5 = 2;
              c6 = 3;
              c7 = 1;
              const obj5 = { value: content(), done: false };
              return obj5;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_1_8(false);
            throw closure_4;
          } else {
            if (2 === c6) {
              c5 = 1;
              closure_1 = closure_4;
              tmp12 = stateFromStores1(stateFromStores2[16]);
              const open = tmp12.open;
              const obj6 = { key: "dev-tools-gift-intent-server", content: closure_2_23(closure_1) };
              open(obj6);
            } else if (3 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                closure_1_8(false);
                c7 = 3;
                return { value, done: true };
              } else {
                const obj8 = { key: "dev-tools-gift-intent-server", content };
                const obj2 = stateFromStores1(stateFromStores2[16]);
                obj2.open(obj8);
                c6 = 4;
                c7 = 1;
                const obj9 = { value: closure_1_9(), done: false };
                return obj9;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_1_8(false);
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 1;
            }
            c5 = 0;
            closure_1_8(false);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp40) {
          closure_4 = tmp40;
          if (0 === c5) {
            c7 = 3;
            throw tmp40;
          } else if (1 === tmp42) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    })();
  });
  const items5 = [onPress];
  let channel = useCallback(function() {
    return closure_0(...arguments);
  }, items5);
  if (!tmp11) {
    tmp11 = first1;
  }
  first1 = tmp11;
  const found = arr5.filter((intent_type) => intent_type.intent_type === FRIEND_ANNIVERSARY);
  map = new Map(found.map((target_id) => {
    items = [target_id.target_id, Number(target_id.dismissed_at_ms)];
    return items;
  }));
  set = new Set(highestAffinity.map((userId) => userId.userId));
  const items6 = [...highAffinity];
  map1 = new Map(items6.map((userId) => {
    items = [userId.userId, userId];
    return items;
  }));
  const fromResult = from(map1.values());
  DevSettingsCategory = fromResult;
  const set1 = new Set(fromResult.map((userId) => userId.userId));
  const from2 = Array.from;
  const items7 = [...Object.keys(stateFromStores1), ...from3(map.keys())];
  from3 = Array.from;
  set2 = new Set(items7);
  const from2Result = from2(set2);
  const found1 = from2Result.filter((item) => !set1.has(item));
  const found2 = items.find((value) => value.value === require);
  let str;
  if (found2 != null) {
    str = found2.label;
  }
  if (str == null) {
    str = "None";
  }
  let obj5 = { title: "Friend Anniversary", hasIcons: false, children: items8 };
  const TableRowGroup = tmp(tmp2[19]).TableRowGroup;
  let obj6 = {
    label: "Number of anniversaries",
    subLabel: "Current: " + str,
    trailing: closure_17(tmp(tmp2[18]).TableRowArrow, {}),
    onPress() {
      let obj = Sheet_showSimpleActionSheet;
      let obj2 = {
        key: "dev-tools-friend-anniversary-count",
        header: { title: "Anniversaries to generate" },
        options: items.map((item) => {
          let label;
          let value;
          ({ label, value } = item);
          let combined = label;
          if (value === closure_1_0) {
            const _HermesInternal = HermesInternal;
            combined = "" + label + "  (selected)";
          }
          let obj = {
            label: combined,
            onPress() {
              const obj = closure_2_1(closure_2_2[13]);
              const obj2 = { type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: value };
              obj.dispatch(obj2);
            }
          };
          return obj;
        }),
        hasIcons: false
      };
      const result = obj.showSimpleActionSheet(obj2);
    }
  };
  let TableRow = tmp(tmp2[17]).TableRow;
  items8 = [closure_17(TableRow, obj6), , ];
  const obj7 = {
    label: "Trigger Mobile FA message in current DM",
    subLabel: "Sends an ephemeral GIFTING_PROMPT into the selected channel",
    onPress() {
      const channelId = first1.getChannelId();
      if (null != channelId) {
        channel = channel.getChannel(channelId);
        recipientUserId = undefined;
        if (channel != null) {
          const recipients = channel.recipients;
          if (recipients != null) {
            recipientUserId = recipients[0];
          }
        }
        if (null != recipientUserId) {
          const obj4 = { giftIntentType: set1.FRIEND_ANNIVERSARY, recipientUserId };
          const obj3 = stateFromStores1(stateFromStores2[21]);
          const result = obj3.sendGiftingPromptSystemMessage(channelId, obj4);
          const obj5 = stateFromStores1(stateFromStores2[16]);
          obj5.open({ key: "dev-tools-gift-intent-triggered", content: "Friendship anniversary card sent." });
        } else {
          const obj2 = stateFromStores1(stateFromStores2[16]);
          obj2.open({ key: "dev-tools-gift-intent-no-recipient", content: "Selected channel has no other recipient." });
        }
      } else {
        const obj = stateFromStores1(stateFromStores2[16]);
        obj.open({ key: "dev-tools-gift-intent-no-channel", content: "Open a DM first." });
      }
    }
  };
  items8[1] = closure_17(tmp(tmp2[17]).TableRow, obj7);
  items8[2] = fromResult.map((userId) => {
    userId = userId.userId;
    const affinity = userId.affinity;
    const hasItem = set.has(userId);
    return renderDismissalRow(userId, hasItem, "" + affinity + " \u00B7 ", "gen");
  });
  const items9 = [closure_18(TableRowGroup, obj5), , , ];
  let tmp20Result = found1.length > 0;
  if (tmp20Result) {
    let obj8 = { children: items10 };
    let obj9 = { size: stateFromStores1(tmp2[23]).space.PX_16 };
    const Spacer = tmp(tmp2[22]).Spacer;
    items10 = [tmp22(Spacer, obj9), ];
    const obj10 = { title: "Other Dismissals (not generated)", hasIcons: false, children: found1.map((item) => renderDismissalRow(item, false, "", "other")) };
    const TableRowGroup2 = tmp(tmp2[19]).TableRowGroup;
    items10[1] = closure_17(TableRowGroup2, obj10);
    tmp20Result = tmp20(tmp21, obj8);
  }
  items9[1] = tmp20Result;
  const obj11 = { size: stateFromStores1(tmp2[23]).space.PX_16 };
  const Spacer2 = tmp(tmp2[22]).Spacer;
  items9[2] = closure_17(Spacer2, obj11);
  const TableRowGroup3 = tmp(tmp2[19]).TableRowGroup;
  let str2 = "ok";
  const TableRow2 = tmp(tmp2[17]).TableRow;
  if (recipientUserId) {
    str2 = "not enrolled (calls 403)";
  }
  let str3 = "no";
  if (stateFromStores2) {
    str3 = "yes";
  }
  const items11 = [, , , , , , ];
  const obj12 = { label: "Eligibility", subLabel: "Experiment: " + str2 + " \u00B7 Staff: " + str3 };
  items11[0] = closure_17(TableRow2, obj12);
  let str4 = "never";
  const TableRow3 = tmp(tmp2[17]).TableRow;
  if (null != stateFromStores3) {
    let _Date = Date;
    let self = this;
    let self2 = this;
    let tmp25 = stateFromStores3;
    const date = new Date(stateFromStores3);
    let str5 = "en-US";
    const str6 = " ";
    let text = `${obj15.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} `;
    str4 = `${obj15.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} ${obj15.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
  }
  items11[1] = closure_17(TableRow3, { label: "Server last recorded dismissal", subLabel: str4 });
  const obj13 = {
    label: "Reconcile now",
    subLabel: "Fetch + merge server dismissals into the local store",
    disabled: tmp11,
    onPress() {
      const tmp = channel(() => {
        let num = stateFromStores3;
        const fetchAndReconcileGiftIntentDismissals = require("PremiumGiftingIntentActionCreators").fetchAndReconcileGiftIntentDismissals;
        require("PremiumGiftingIntentActionCreators");
        if (stateFromStores3 == null) {
          num = 0;
        }
        return fetchAndReconcileGiftIntentDismissals(num);
      }, "Reconcile triggered.");
    }
  };
  items11[2] = closure_17(tmp(tmp2[17]).TableRow, obj13);
  items11[3] = closure_17(tmp(tmp2[17]).TableRow, { label: "Refresh server dismissals", subLabel: "Re-fetch the per-friend server view above", disabled: tmp11, onPress });
  const obj14 = {
    label: "Dismiss a generated anniversary on the server",
    subLabel: "POST a server dismissal for a generated friend",
    trailing: closure_17(tmp(tmp2[18]).TableRowArrow, {}),
    disabled: tmp11 || recipientUserId || 0 === fromResult.length,
    onPress() {
      let intent_type;
      let obj = Sheet_showSimpleActionSheet;
      const obj2 = {
        key: "dev-tools-gift-intent-seed",
        header: { title: "Dismiss a generated anniversary on the server" },
        options: DevSettingsCategory.map((label) => {
          let obj = {
            label: label.username,
            onPress() {
              let userId;
              return channel(() => {
                let obj;
                const HTTP = closure_3_0(stateFromStores2[15]).HTTP;
                const request = { url: "/users/@me/gift-intents/dismiss", body: obj, rejectWithError: true };
                obj = { intent_type, target_id: userId.userId };
                return HTTP.post(request);
              }, "Dismissed " + label.username + " on the server.");
            }
          };
          return obj;
        }),
        hasIcons: false
      };
      const result = obj.showSimpleActionSheet(obj2);
    }
  };
  const TableRow4 = tmp(tmp2[17]).TableRow;
  items11[4] = closure_17(TableRow4, obj14);
  const TableRow5 = tmp(tmp2[17]).TableRow;
  if (!tmp11) {
    tmp11 = !stateFromStores2;
  }
  if (!tmp11) {
    tmp11 = recipientUserId;
  }
  if (!tmp11) {
    tmp11 = 0 === map.size;
  }
  const obj16 = { children: items9 };
  const obj17 = { title: "Backend Dismissal Sync", hasIcons: false, children: items11 };
  const obj18 = {
    variant: "danger",
    label: "Clear all server dismissals (staff)",
    subLabel: "DELETE every server dismissal for this user",
    disabled: tmp11,
    onPress() {
      channel(() => {
        const HTTP = closure_1_0(stateFromStores2[15]).HTTP;
        const obj = { url: "" + closure_1_21 + "/" + closure_1_22, rejectWithError: true };
        return HTTP.del(obj);
      }, "Cleared all server dismissals.");
    }
  };
  items11[5] = closure_17(TableRow5, obj18);
  const obj19 = {
    variant: "danger",
    label: "Reset local message cooldown",
    subLabel: "Clears messageGiftIntentLastShownMap on this device",
    onPress() {
      const obj = stateFromStores1(stateFromStores2[13]);
      obj.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
      const obj2 = stateFromStores1(stateFromStores2[16]);
      obj2.open({ key: "dev-tools-gift-intent-local", content: "Cleared local message cooldown." });
    }
  };
  items11[6] = closure_17(tmp(tmp2[17]).TableRow, obj19);
  items9[3] = closure_18(TableRowGroup3, obj17);
  return closure_18(closure_19, obj16);
}
function TrialOfferSheetExample() {
  let premiumTrialOffer;
  function markAsDismissed() {

  }
  const tmp = premiumTrialOffer;
  const tmp2 = dependencyMap;
  let obj = premiumTrialOffer(6867);
  premiumTrialOffer = obj.usePremiumTrialOffer();
  const TableRowGroup = premiumTrialOffer(5999).TableRowGroup;
  const TableRow = premiumTrialOffer(5917).TableRow;
  let obj2 = {
    label: "Trial Offer Nitro Basic",
    subLabel: str2,
    disabled: !tmp4,
    onPress() {
      if (null != premiumTrialOffer) {
        const obj2 = { fallbackPremiumType: tmp, userTrialOffer: tmp2, markAsDismissed };
        const obj = ActionSheetActionCreatorsDefault;
        obj.openLazy(asyncRequire(15287, dependencyMap.paths), "PremiumTrialOfferActionSheet", obj2);
      }
    }
  };
  items = [closure_17(TableRow, obj2), ];
  const TableRow2 = tmp(5917).TableRow;
  const obj3 = { title: "Trial Offers", hasIcons: false, children: items };
  const obj4 = {
    label: "Trial Offer Nitro",
    subLabel: "No trial offer in store",
    disabled: null == premiumTrialOffer,
    onPress() {
      if (null != premiumTrialOffer) {
        const obj2 = { fallbackPremiumType: tmp, userTrialOffer: tmp2, markAsDismissed };
        const obj = ActionSheetActionCreatorsDefault;
        obj.openLazy(asyncRequire(15287, dependencyMap.paths), "PremiumTrialOfferActionSheet", obj2);
      }
    }
  };
  items[1] = closure_17(TableRow2, obj4);
  return closure_18(TableRowGroup, obj3);
}
function PremiumToggles() {
  let obj = useStateFromStores;
  items = [DevSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const allByCategoryResult = DevSettingsStore.allByCategory(constants.PREMIUM);
    return allByCategoryResult.filter((item) => {
      let tmp;
      [tmp] = item;
      return "force_mock_iap" !== tmp;
    });
  }, [], useStateFromStores.statesWillNeverBeEqual);
  const obj2 = {
    title: "Premium Toggles",
    hasIcons: false,
    children: stateFromStores.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2, ] = item;
      let obj = {
        label: tmp3,
        subLabel: tmp,
        value: tmp2,
        onValueChange(arg0) {
          const obj = DevSettingsActions;
          return obj.toggle(closure_1_0, arg0);
        }
      };
      return closure_17(closure_0(closure_2[30]).TableSwitchRow, obj, tmp);
    })
  };
  const TableRowGroup = TableRowGroup4.TableRowGroup;
  return closure_17(TableRowGroup, obj2);
}
function ForceMockIAP() {
  let tmp4;
  let obj = useStateFromStores;
  items = [DevSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.get("force_mock_iap"));
  let obj2 = IAPUtils;
  let result = obj2.shouldMockIAPForceEnable();
  const TableRowGroup = TableRowGroup4.TableRowGroup;
  let str = "Replaces StoreKit with hardcoded fixture data. App will restart when toggled.";
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  if (result) {
    str = "Forced on - the current device can't fetch real StoreKit products.";
  }
  const obj3 = {
    label: "Force mock IAP products",
    subLabel: str,
    value: tmp4,
    disabled: result,
    onValueChange(arg0) {
      const obj = DevSettingsActions;
      obj.toggle("force_mock_iap", arg0);
      DevSettingsStore.persist();
      const obj2 = BundleUpdaterDefault;
      const result = obj2.checkForUpdateAndReload();
    }
  };
  tmp4 = result || stateFromStores;
  const obj4 = { title: "iOS IAP Mock", hasIcons: false, children: closure_17(TableSwitchRow, obj3) };
  return closure_17(TableRowGroup, obj4);
}
function PaymentFlowTest() {
  let TableRow;
  let obj2;
  let paths;
  let obj = { title: "Payment Flow Test", hasIcons: false, children: closure_17(TableRow, obj2) };
  const TableRowGroup = TableRowGroup4.TableRowGroup;
  obj2 = {
    label: "Test Payment Flow",
    onPress() {
      const obj = require("ModalActionCreators");
      obj.pushLazy(require("asyncRequire")(paths[35], paths.paths));
    },
    trailing: closure_17(TableRowArrow.TableRowArrow, {})
  };
  TableRow = TableRow6.TableRow;
  return closure_17(TableRowGroup, obj);
}
function Orbs() {
  let TableRow;
  let obj2;
  let paths;
  let obj = { title: "Orbs", hasIcons: false, children: closure_17(TableRow, obj2) };
  const TableRowGroup = TableRowGroup4.TableRowGroup;
  obj2 = {
    label: "Test Orbs Flow",
    onPress() {
      const obj = require("ModalActionCreators");
      obj.pushLazy(require("asyncRequire")(paths[36], paths.paths));
    },
    trailing: closure_17(TableRowArrow.TableRowArrow, {})
  };
  TableRow = TableRow6.TableRow;
  return closure_17(TableRowGroup, obj);
}
function RevenueSmokeTests() {
  let TableRow;
  let obj2;
  let paths;
  let obj = { title: "Revenue Smoke Tests", hasIcons: false, children: closure_17(TableRow, obj2) };
  const TableRowGroup = TableRowGroup4.TableRowGroup;
  obj2 = {
    label: "Test all purchasing flows",
    onPress() {
      const obj = require("ModalActionCreators");
      obj.pushLazy(require("asyncRequire")(paths[37], paths.paths));
    },
    trailing: closure_17(TableRowArrow.TableRowArrow, {})
  };
  TableRow = TableRow6.TableRow;
  return closure_17(TableRowGroup, obj);
}
function GuildPowerups() {
  let TableRow;
  let obj2;
  let paths;
  let obj = { title: "Guild Powerups", hasIcons: false, children: closure_17(TableRow, obj2) };
  const TableRowGroup = TableRowGroup4.TableRowGroup;
  obj2 = {
    label: "Guild Powerups",
    onPress() {
      const obj = require("ModalActionCreators");
      obj.pushLazy(require("asyncRequire")(paths[38], paths.paths));
    },
    trailing: closure_17(TableRowArrow.TableRowArrow, {})
  };
  TableRow = TableRow6.TableRow;
  return closure_17(TableRowGroup, obj);
}
function GuildTagBadges() {
  let TableRow;
  let obj2;
  let paths;
  let obj = { title: "Guild Tag Badges", hasIcons: false, children: closure_17(TableRow, obj2) };
  const TableRowGroup = TableRowGroup4.TableRowGroup;
  obj2 = {
    label: "Badge gallery",
    subLabel: "Preview all native badge kinds across sizes and tints",
    onPress() {
      const obj = require("ModalActionCreators");
      obj.pushLazy(require("asyncRequire")(paths[39], paths.paths));
    },
    trailing: closure_17(TableRowArrow.TableRowArrow, {})
  };
  TableRow = TableRow6.TableRow;
  return closure_17(TableRowGroup, obj);
}
const ScrollView = react_native.ScrollView;
let DevSettingsCategory = DevSettingsStore2.DevSettingsCategory;
({ GiftIntentType: closure_15, PremiumTypes: closure_16 } = PremiumConstants);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
let items = [{ label: "None", value: null }, { label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }, { label: "4", value: 4 }, { label: "5", value: 5 }, { label: "10", value: 10 }, { label: "25", value: 25 }];
let c21 = "/users/@me/gift-intents/dismissals";
const FRIEND_ANNIVERSARY = "FRIEND_ANNIVERSARY";
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollContainer: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_25 = createStyles(obj);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsRevenuePlaygroundScreen.tsx");

export default function DevToolsRevenuePlaygroundScreen() {
  const tmp = closure_25();
  const obj = { style: tmp.container, contentContainerStyle: tmp.scrollContainer, children: items };
  items = [closure_17(TrialOfferSheetExample, {}), , , , , , , , , , , , , , , , ];
  const obj2 = { size: nativeDefault.space.PX_16 };
  const Spacer = native.Spacer;
  items[1] = closure_17(Spacer, obj2);
  items[2] = closure_17(PremiumToggles, {});
  const obj3 = { size: nativeDefault.space.PX_16 };
  const Spacer2 = native.Spacer;
  items[3] = closure_17(Spacer2, obj3);
  items[4] = closure_17(ForceMockIAP, {});
  const obj4 = { size: nativeDefault.space.PX_16 };
  const Spacer3 = native.Spacer;
  items[5] = closure_17(Spacer3, obj4);
  items[6] = closure_17(PaymentFlowTest, {});
  const obj5 = { size: nativeDefault.space.PX_16 };
  const Spacer4 = native.Spacer;
  items[7] = closure_17(Spacer4, obj5);
  items[8] = closure_17(Orbs, {});
  const obj6 = { size: nativeDefault.space.PX_16 };
  const Spacer5 = native.Spacer;
  items[9] = closure_17(Spacer5, obj6);
  items[10] = closure_17(RevenueSmokeTests, {});
  const obj7 = { size: nativeDefault.space.PX_16 };
  const Spacer6 = native.Spacer;
  items[11] = closure_17(Spacer6, obj7);
  items[12] = closure_17(GuildPowerups, {});
  const obj8 = { size: nativeDefault.space.PX_16 };
  const Spacer7 = native.Spacer;
  items[13] = closure_17(Spacer7, obj8);
  items[14] = closure_17(GuildTagBadges, {});
  const obj9 = { size: nativeDefault.space.PX_16 };
  const Spacer8 = native.Spacer;
  items[15] = closure_17(Spacer8, obj9);
  items[16] = closure_17(FriendAnniversary, {});
  return authStore4(ScrollView, obj);
};
