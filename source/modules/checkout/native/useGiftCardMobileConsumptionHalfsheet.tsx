// Module ID: 5794
// Function ID: 49537
// Name: useGiftCardMobileConsumptionHalfsheet
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: useGiftCardMobileConsumptionHalfsheet

// Module 5794 (useGiftCardMobileConsumptionHalfsheet)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import { ContentDismissActionType } from "__exportStarResult1";
import { PaymentSourceTypes } from "__exportStarResult1";

const obj = { Idle: "idle", Opening: "opening", Opened: "opened" };
const Idle = obj.Idle;
const result = require("__exportStarResult1").fileFinishedImporting("modules/checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx");

export const useGiftCardMobileConsumptionHalfsheet = function useGiftCardMobileConsumptionHalfsheet() {
  const enabled = arg1(dependencyMap[6]).useGiftCardsExperimentConfig({ location: "useGiftCardMobileConsumptionHalfsheet" }).enabled;
  const arg1 = enabled;
  const obj = arg1(dependencyMap[6]);
  const items = [closure_6];
  const items1 = [enabled];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => {
    if (enabled) {
      const _Object = Object;
      const values = Object.values(callback.paymentSources);
      let num = 0;
      if (0 < values.length) {
        while (values[num].type !== constants.TDS_WALLET) {
          num = num + 1;
        }
        return values[num].id;
      }
      return null;
    } else {
      return null;
    }
  }, items1);
  const importDefault = stateFromStores;
  const obj2 = arg1(dependencyMap[7]);
  const items2 = [closure_5];
  const items3 = [stateFromStores];
  const stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items2, () => {
    let balance = null;
    if (null != stateFromStores) {
      balance = ref.getBalance(stateFromStores);
    }
    return balance;
  }, items3);
  const obj3 = arg1(dependencyMap[7]);
  const items4 = [closure_5];
  const items5 = [stateFromStores];
  let tmp4 = enabled;
  const stateFromStores2 = arg1(dependencyMap[7]).useStateFromStores(items4, () => {
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
  const obj4 = arg1(dependencyMap[7]);
  const tmp8 = callback(arg1(dependencyMap[9]).useSelectedDismissibleContent(memo, undefined, true), 2);
  const first = tmp8[0];
  let callback = first;
  const React = tmp10;
  closure_5 = React.useRef(tmp10);
  const items7 = [tmp8[1]];
  const effect = React.useEffect(() => {
    closure_5.current = tmp10;
  }, items7);
  callback = React.useCallback((arg0) => {
    ref.current(arg0);
  }, []);
  closure_6 = callback;
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
      let tmp = closure_0;
      if (!closure_0) {
        tmp = key.key !== "GiftCardMobileConsumptionActionSheet";
      }
      if (!tmp) {
        const Opening = closure_9.Opened;
      }
    }
    const stateFromStores = handleShow;
    if (first === enabled(tmp4[8]).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      if (Opening === closure_9.Idle) {
        const Opening = closure_9.Opening;
        const enabled = false;
        let obj = stateFromStores(tmp4[11]);
        const subscription = obj.subscribe("SHOW_ACTION_SHEET", handleShow);
        const promise = enabled(stateFromStores[13])(stateFromStores[12], stateFromStores.paths);
        promise.catch(() => {
          let tmp = closure_0;
          if (!closure_0) {
            tmp = Opening !== closure_9.Opening;
          }
          if (!tmp) {
            const Opening = closure_9.Idle;
          }
        });
        const obj2 = stateFromStores(stateFromStores[14]);
        obj = { markAsDismissed: callback };
        obj2.openLazy(promise, "GiftCardMobileConsumptionActionSheet", obj, "stack");
        return () => {
          let closure_0 = true;
          handleShow(closure_2[11]).unsubscribe("SHOW_ACTION_SHEET", handleShow);
          if (Opening === closure_9.Opening) {
            const Opening = closure_9.Idle;
          }
        };
      }
    }
  }, items10);
  const items11 = [first];
  const effect4 = React.useEffect(() => {
    function handleHide(key) {
      if (key.key === "GiftCardMobileConsumptionActionSheet") {
        ref.current(constants.USER_DISMISS);
      }
    }
    const enabled = handleHide;
    if (first === enabled(tmp4[8]).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      const subscription = stateFromStores(tmp4[11]).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        callback(closure_2[11]).unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
  }, items11);
};
