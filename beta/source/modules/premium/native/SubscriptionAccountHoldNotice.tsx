// Module ID: 13697
// Function ID: 13698
// Name: SubscriptionAccountHoldNotice
// Dependencies: [19, 17, 1078, 21, 4790, 580, 558, 568, 1181, 12956, 1119, 4450, 4786, 5220, 2]

// Module 13697 (SubscriptionAccountHoldNotice)
import nativeDefault from "native" /* 580 */;
import PremiumUtils from "PremiumUtils" /* 4450 */;
import _modDef12956 from "module_12956" /* 12956 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Linking: c3, View: closure_4 } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1078).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { padding: 8, margin: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, textContainer: { flexDirection: "row" }, icon: { marginRight: 4 }, text: { marginBottom: 8, flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: 8, margin: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/SubscriptionAccountHoldNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((subscription) => {
  const cResult = subscription(568).c(19);
  subscription = subscription.subscription;
  const tmp4 = closure_8();
  if (subscription.status !== SubscriptionStatusTypes.ACCOUNT_HOLD) {
    return null;
  } else {
    ({ container, textContainer } = tmp4);
    if (cResult[0] !== tmp4.icon) {
      const obj2 = { size: tmp(1181).IconSizes.MEDIUM, style: tmp4.icon, source: _modDef12956 };
      const tmp8 = closure_6(tmp(1181).Icon, obj2);
      cResult[0] = tmp4.icon;
      cResult[1] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[1];
    }
    if (cResult[2] === subscription.currentPeriodEnd) {
      if (cResult[3] === subscription.planId) {
        let tmp10 = cResult[4];
      }
      if (cResult[5] === tmp4.text) {
        if (cResult[6] === tmp10) {
          let tmp12 = cResult[7];
        }
        if (cResult[8] === tmp4.textContainer) {
          if (cResult[9] === tmp5) {
            if (cResult[10] === tmp12) {
              let tmp15 = cResult[11];
            }
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1119).intl;
              const stringResult = intl2.string(tmp(1119).t.VJmUNy);
              cResult[12] = stringResult;
              let tmp20 = stringResult;
            } else {
              tmp20 = cResult[12];
            }
            if (cResult[13] !== subscription.paymentGateway) {
              const obj3 = {
                size: "sm",
                text: tmp20,
                onPress() {
                              return React3.openURL(PremiumUtils.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
                            }
              };
              const tmp24 = closure_6(tmp(5220).Button, obj3);
              cResult[13] = subscription.paymentGateway;
              cResult[14] = tmp24;
              let tmp22 = tmp24;
            } else {
              tmp22 = cResult[14];
            }
            if (cResult[15] === tmp4.container) {
              if (cResult[16] === tmp15) {
                if (cResult[17] === tmp22) {
                  let tmp25 = cResult[18];
                }
                return tmp25;
              }
            }
            const obj4 = { style: container, children: null };
            const items = [tmp15, tmp22];
            obj4.children = items;
            const tmp28 = closure_7(closure_4, obj4);
            cResult[15] = tmp4.container;
            cResult[16] = tmp15;
            cResult[17] = tmp22;
            cResult[18] = tmp28;
            tmp25 = tmp28;
          }
        }
        const obj5 = { style: textContainer, children: null };
        const items1 = [tmp5, tmp12];
        obj5.children = items1;
        const tmp18 = closure_7(closure_4, obj5);
        cResult[8] = tmp4.textContainer;
        cResult[9] = tmp5;
        cResult[10] = tmp12;
        cResult[11] = tmp18;
        tmp15 = tmp18;
      }
      const obj6 = { style: tmp9, variant: "text-sm/medium", children: tmp10 };
      const tmp14 = closure_6(tmp(4786).Text, obj6);
      cResult[5] = tmp4.text;
      cResult[6] = tmp10;
      cResult[7] = tmp14;
      tmp12 = tmp14;
    }
    const intl = tmp(1119).intl;
    const obj7 = { endDate: subscription.currentPeriodEnd, planDescription: tmp(4450).getDisplayName(subscription.planId) };
    const formatResult = intl.format(tmp(1119).t["7I21Iz"], obj7);
    cResult[2] = subscription.currentPeriodEnd;
    cResult[3] = subscription.planId;
    cResult[4] = formatResult;
    tmp10 = formatResult;
    const tmpResult = tmp(4450);
  }
}) : ((subscription) => {
  subscription = subscription.subscription;
  const tmp = closure_8();
  let tmp2 = null;
  if (subscription.status === SubscriptionStatusTypes.ACCOUNT_HOLD) {
    const obj = { style: tmp.container, children: null };
    const obj2 = { style: tmp.textContainer, children: null };
    const obj3 = { size: subscription(1181).IconSizes.MEDIUM, style: tmp.icon, source: _modDef12956 };
    const items = [closure_6(subscription(1181).Icon, obj3), ];
    const obj4 = { style: tmp.text, variant: "text-sm/medium", children: null };
    const intl = subscription(1119).intl;
    const obj5 = { endDate: subscription.currentPeriodEnd, planDescription: subscription(4450).getDisplayName(subscription.planId) };
    obj4.children = intl.format(subscription(1119).t["7I21Iz"], obj5);
    items[1] = closure_6(subscription(4786).Text, obj4);
    obj2.children = items;
    const items1 = [closure_7(closure_4, obj2), ];
    const obj7 = { size: "sm", text: null, onPress: null };
    const intl2 = subscription(1119).intl;
    obj7.text = intl2.string(subscription(1119).t.VJmUNy);
    obj7.onPress = function onPress() {
      return React3.openURL(PremiumUtils.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    };
    items1[1] = closure_6(subscription(5220).Button, obj7);
    obj.children = items1;
    tmp2 = closure_7(closure_4, obj);
    const obj6 = subscription(4450);
  }
  return tmp2;
});
