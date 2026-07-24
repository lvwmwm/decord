// Module ID: 5799
// Function ID: 49577
// Name: useGiftCardMobileConsumptionHalfsheet
// Dependencies: [57, 31, 5800, 3779, 1345, 482, 5801, 566, 1334, 5802, 4451, 686, 5806, 1934, 4098, 2]
// Exports: useGiftCardMobileConsumptionHalfsheet

// Module 5799 (useGiftCardMobileConsumptionHalfsheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import { PaymentSourceTypes } from "sum";

const require = arg1;
let obj = { Idle: "idle", Opening: "opening", Opened: "opened" };
const Idle = obj.Idle;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx");

export const useGiftCardMobileConsumptionHalfsheet = function useGiftCardMobileConsumptionHalfsheet() {
  enabled = enabled(5801).useGiftCardsExperimentConfig({ location: "useGiftCardMobileConsumptionHalfsheet" }).enabled;
  let obj = enabled(5801);
  let items = [callback];
  let items1 = [enabled];
  const stateFromStores = enabled(566).useStateFromStores(items, () => {
    if (enabled) {
      const _Object = Object;
      const values = Object.values(callback.paymentSources);
      let num = 0;
      if (0 < values.length) {
        while (values[num].type !== outer1_8.TDS_WALLET) {
          num = num + 1;
        }
        return values[num].id;
      }
      return null;
    } else {
      return null;
    }
  }, items1);
  let obj2 = enabled(566);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [stateFromStores];
  const stateFromStores1 = enabled(566).useStateFromStores(items2, () => {
    let balance = null;
    if (null != stateFromStores) {
      balance = ref.getBalance(stateFromStores);
    }
    return balance;
  }, items3);
  const obj3 = enabled(566);
  const items4 = [_isNativeReflectConstruct];
  const items5 = [stateFromStores];
  let tmp4 = enabled;
  const stateFromStores2 = enabled(566).useStateFromStores(items4, () => {
    let isFetching = null != stateFromStores;
    if (isFetching) {
      isFetching = ref.getIsFetching(stateFromStores);
    }
    return isFetching;
  }, items5);
  if (enabled) {
    tmp4 = null != stateFromStores;
  }
  if (tmp4) {
    tmp4 = !stateFromStores2;
  }
  if (tmp4) {
    tmp4 = null != stateFromStores1;
  }
  if (tmp4) {
    tmp4 = stateFromStores1.amount > 0;
  }
  const dependencyMap = tmp4;
  const items6 = [tmp4];
  const memo = React.useMemo(() => {
    if (tmp4) {
      const items = [enabled(tmp4[8]).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items6);
  const obj4 = enabled(566);
  const tmp8 = first(enabled(5802).useSelectedDismissibleContent(memo, undefined, true), 2);
  first = tmp8[0];
  React = tmp10;
  _isNativeReflectConstruct = React.useRef(tmp10);
  const items7 = [tmp8[1]];
  const effect = React.useEffect(() => {
    _isNativeReflectConstruct.current = result;
  }, items7);
  callback = React.useCallback((arg0) => {
    ref.current(arg0);
  }, []);
  const items8 = [enabled];
  const effect1 = React.useEffect(() => {
    if (enabled) {
      const paymentSources = enabled(tmp4[10]).fetchPaymentSources();
      const obj = enabled(tmp4[10]);
    }
  }, items8);
  const items9 = [stateFromStores];
  const effect2 = React.useEffect(() => {
    if (null != stateFromStores) {
      const walletInformation = enabled(tmp4[10]).fetchWalletInformation(stateFromStores);
      const obj = enabled(tmp4[10]);
    }
  }, items9);
  const items10 = [first, callback];
  const effect3 = React.useEffect(() => {
    function handleShow(key) {
      let tmp = c0;
      if (!c0) {
        tmp = key.key !== "GiftCardMobileConsumptionActionSheet";
      }
      if (!tmp) {
        const outer2_10 = outer2_9.Opened;
      }
    }
    if (first === enabled(tmp4[8]).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      if (outer1_10 === outer1_9.Idle) {
        outer1_10 = outer1_9.Opening;
        let c0 = false;
        let obj = stateFromStores(tmp4[11]);
        const subscription = obj.subscribe("SHOW_ACTION_SHEET", handleShow);
        const promise = enabled(stateFromStores[13])(stateFromStores[12], stateFromStores.paths);
        promise.catch(() => {
          let tmp = c0;
          if (!c0) {
            tmp = outer2_10 !== outer2_9.Opening;
          }
          if (!tmp) {
            outer2_10 = outer2_9.Idle;
          }
        });
        const obj2 = stateFromStores(stateFromStores[14]);
        obj = { markAsDismissed: callback };
        obj2.openLazy(promise, "GiftCardMobileConsumptionActionSheet", obj, "stack");
        return () => {
          let c0 = true;
          stateFromStores(table[11]).unsubscribe("SHOW_ACTION_SHEET", handleShow);
          if (outer2_10 === outer2_9.Opening) {
            outer2_10 = outer2_9.Idle;
          }
        };
      }
    }
  }, items10);
  const items11 = [first];
  const effect4 = React.useEffect(() => {
    function handleHide(key) {
      if (key.key === "GiftCardMobileConsumptionActionSheet") {
        outer1_5.current(outer2_7.USER_DISMISS);
      }
    }
    if (first === enabled(tmp4[8]).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      const subscription = stateFromStores(tmp4[11]).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        stateFromStores(table[11]).unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
  }, items11);
};
