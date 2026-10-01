// Module ID: 15221
// Function ID: 15222
// Name: DevToolsBountyQaScreen
// Dependencies: [5, 32, 19, 17, 7113, 21, 4836, 576, 4528, 1613, 504, 5759, 7114, 10744, 10683, 4832, 5997, 6000, 5999, 5917, 14638, 14636, 6389, 5763, 2]
// Exports: default

// Module 15221 (DevToolsBountyQaScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import QuestActionCreators from "QuestActionCreators" /* 10683 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7113 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c3;

let c9;
let metroImportAll;
let obj2;
let obj3;
function toast(content, key) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { content, key };
  obj.open(obj2);
}
const ScrollView = react_native.ScrollView;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let items = [{ value: "15", label: "Last 15 minutes" }, { value: "60", label: "Last hour" }, { value: "1440", label: "Last 24 hours" }];
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBountyQaScreen.tsx");

export default function DevToolsBountyQaScreen() {
  let first;
  let items4;
  let items5;
  let stateFromStores;
  let str;
  let tmp10;
  let obj = function _handleResetAndRefresh() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj4;
      let obj6;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c2;
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c2 = 1;
              if ("most_recent" === str) {
                if (null == stateFromStores) {
                  closure_1_12("No dock bounty in memory. Pick a lookback window.", "bounty-qa-missing-id");
                  c2 = 0;
                  c3 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  c1 = 3;
                  c3 = 1;
                  const obj7 = { value: obj6.resetCreativePreviewDeliveryState(tmp19, tmp(c2[11]).AdPlacement.MOBILE_HOME_DOCK_AREA), done: false };
                  obj6 = tmp(c2[13]);
                  return obj7;
                }
              } else {
                const _Number = Number;
                const NumberResult = Number(tmp33);
                c1 = 2;
                c3 = 1;
                const obj8 = { value: obj4.resetPreviewDeliveryStateLookback(NumberResult), done: false };
                obj4 = tmp(c2[13]);
                return obj8;
              }
            }
          } else {
            if (1 === c1) {
              c2 = 0;
              closure_1_12("Failed to reset delivery state", "bounty-qa-reset-delivery-failed");
            } else {
              if (2 === c1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c3 = 3;
                  const obj9 = { value, done: true };
                  return obj9;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c3 = 3;
                obj = { value, done: true };
                return obj;
              }
              const obj2 = tmp(c2[14]);
              const questToDeliver = obj2.fetchQuestToDeliver(tmp(c2[11]).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
              closure_1_12("Reset delivery state and refreshing dock", "bounty-qa-reset-and-refresh");
              c2 = 0;
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp26) {
          if (0 === c2) {
            c3 = 3;
            throw tmp26;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_11();
  const tmp2 = obj;
  const tmp3 = str(obj[9])();
  obj = stateFromStores(obj[10]);
  items = [AdDeliveryStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    const value = deliveryAdDecisionByPlacement.get(stateFromStores(obj[11]).AdPlacement.MOBILE_HOME_DOCK_AREA);
    let creative;
    const getDeliveredBounty = stateFromStores(obj[12]).getDeliveredBounty;
    stateFromStores(obj[12]);
    if (value != null) {
      creative = value.creative;
    }
    const deliveredBounty = getDeliveredBounty(creative);
    let id;
    if (deliveredBounty != null) {
      id = deliveredBounty.id;
    }
    if (id == null) {
      id = null;
    }
    return id;
  });
  str = "15";
  let str2 = "15";
  const useState = react.useState;
  if (null != stateFromStores) {
    str2 = "most_recent";
  }
  [first, tmp10] = useState(str2);
  if ("most_recent" !== first) {
    str = first;
  }
  if (null != stateFromStores) {
    let obj2 = { value: "most_recent", label: "Most recent", subLabel: "Creative " + stateFromStores };
    const _HermesInternal = HermesInternal;
    const items1 = [obj2];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const items3 = [...items];
  let obj3 = { style: tmp.container, contentContainerStyle: items4, children: items5 };
  items4 = [tmp.content, { paddingBottom: tmp.content.padding + tmp3.bottom }];
  let str4 = "No dock bounty in memory (app kill or refresh). Use a lookback window.";
  const Text = tmp4(tmp2[15]).Text;
  const tmp13 = ScrollView;
  if (null != stateFromStores) {
    const _HermesInternal2 = HermesInternal;
    str4 = "Last dock bounty still in memory: " + stateFromStores + ".";
  }
  items5 = [tmp14(Text, { variant: "text-sm/medium", color: "text-muted", children: str4 }), , ];
  let obj4 = {
    title: "Reset scope",
    description: "Used by Reset and re-serve. Refresh Organic Serve ignores this.",
    value: str,
    onChange: tmp10,
    hasIcons: false,
    children: items3.map((value) => {
      let label;
      let subLabel;
      value = value.value;
      ({ label, subLabel } = value);
      return closure_1_8(stateFromStores(obj[17]).TableRadioRow, { value, label, subLabel }, value);
    })
  };
  const TableRadioGroup = tmp4(tmp2[16]).TableRadioGroup;
  items5[1] = closure_8(TableRadioGroup, obj4);
  const TableRowGroup = tmp4(tmp2[18]).TableRowGroup;
  let obj5 = {
    label: "Reset and re-serve",
    subLabel: "Clears serve, dismiss, claim, and impression for the selected scope, then asks the dock for a new decision.",
    icon: tmp14(tmp4(tmp2[20]).UndoIcon, {}),
    onPress: function handleResetAndRefresh() {
      return obj(...arguments);
    }
  };
  const TableRow = tmp4(tmp2[19]).TableRow;
  const items6 = [tmp14(TableRow, obj5), , ];
  let obj6 = {
    label: "Refresh Organic Serve",
    subLabel: "Re-runs the dock decision without clearing delivery state. Use to confirm a cooldown still blocks.",
    icon: tmp14(tmp4(tmp2[21]).RedoIcon, {}),
    onPress: function handleRefreshOrganicServe() {
      obj = stateFromStores(obj[14]);
      const questToDeliver = obj.fetchQuestToDeliver(stateFromStores(obj[11]).AdPlacement.MOBILE_HOME_DOCK_AREA, "devTools-bountyQa");
      const obj2 = str(obj[8]);
      obj2.open({ content: "Refreshing dock serve", key: "bounty-qa-refresh" });
    }
  };
  const TableRow2 = tmp4(tmp2[19]).TableRow;
  items6[1] = closure_8(TableRow2, obj6);
  let tmp14Result = null;
  if (null != stateFromStores) {
    let obj7 = {
      label: "Reset Seen",
      subLabel: "Clears the Quest Home NEW pill for the last dock bounty. Does not restore the dock.",
      icon: tmp14(tmp4(tmp2[22]).EyeIcon, {}),
      onPress: function handleResetSeen() {
          if (null != stateFromStores) {
            items = [tmp];
            const obj2 = QuestActionCreators;
            obj2.markAdContentUnseen(AdCreativeType.AdCreativeType.BOUNTY, items);
            const obj3 = ToastActionCreatorsDefault;
            obj3.open({ content: "Reset seen", key: "bounty-qa-reset-seen" });
          } else {
            obj = ToastActionCreatorsDefault;
            obj.open({ content: "No dock bounty in memory to reset seen for.", key: "bounty-qa-missing-id" });
          }
        }
    };
    const TableRow3 = tmp4(tmp2[19]).TableRow;
    tmp14Result = tmp14(TableRow3, obj7);
  }
  items6[2] = tmp14Result;
  items5[2] = closure_9(TableRowGroup, { title: "Dock QA", hasIcons: true, children: items6 });
  return closure_9(tmp13, obj3);
};
