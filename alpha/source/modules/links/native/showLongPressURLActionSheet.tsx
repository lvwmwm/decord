// Module ID: 12066
// Function ID: 12067
// Name: showLongPressURLActionSheet
// Dependencies: [5259, 1112, 5724, 7538, 5722, 5220, 5219, 8690, 12067, 7543, 2]
// Exports: default

// Module 12066 (showLongPressURLActionSheet)
import LinkingDefault from "Linking" /* 5722 */;
import ToastUtils from "ToastUtils" /* 5724 */;
import ClipboardUtils from "ClipboardUtils" /* 7538 */;
import showShareActionSheet from "showShareActionSheet" /* 8690 */;
import handleContentLinkingDefault from "handleContentLinking" /* 12067 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/links/native/showLongPressURLActionSheet.tsx");

export default function showLongPressURLActionSheet(urlString) {
  let channelId;
  let closure_3;
  let disableHapticFeedback;
  let guildId;
  let index;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let messageId;
  let obj10;
  let routes;
  const str = urlString.urlString;
  ({ guildId: importDefault, channelId } = urlString);
  ({ messageId: closure_3, disableHapticFeedback } = urlString);
  if (disableHapticFeedback === undefined) {
    disableHapticFeedback = false;
  }
  let match;
  let closure_5;
  if (!disableHapticFeedback) {
    let tmp2 = str;
    let obj = str(channelId[0]);
    const result = obj.triggerHapticFeedback(str(channelId[0]).HapticFeedbackTypes.IMPACT_LIGHT);
  }
  const items = [];
  match = str.match(/^(tel|sms|mailto):([^?;]+)/);
  if (null != match) {
    let ZYLVKo;
    const push2 = items.push;
    const intl7 = str(channelId[1]).intl;
    const string = intl7.string;
    if ("mailto" === match[1]) {
      ZYLVKo = tmp23(tmp24[1]).t.ZYLVKo;
    } else {
      ZYLVKo = tmp23(tmp24[1]).t["3zozoR"];
    }
    let obj2 = {
      label: string(ZYLVKo),
      onPress() {
          const obj = ToastUtils;
          obj.presentLinkCopied();
          const obj2 = ClipboardUtils;
          obj2.copy(match[2]);
        }
    };
    push2(obj2);
    if ("tel" === match[1]) {
      const push = items.push;
      const obj3 = {
        label: intl.string(str(channelId[1]).t["+wbjMW"]),
        onPress() {
              const obj = LinkingDefault;
              obj.openURL(str.replace("tel:", "sms:"));
            }
      };
      intl = tmp23(tmp24[1]).intl;
      push(obj3);
    }
  }
  const obj4 = str(channelId[5]);
  const rootNavigationRef = obj4.getRootNavigationRef();
  let rootState;
  if (rootNavigationRef != null) {
    rootState = rootNavigationRef.getRootState();
  }
  let coerceMainRouteResult;
  if (null != rootState) {
    const tmp9Result = str(channelId[6]);
    coerceMainRouteResult = tmp9Result.coerceMainRoute(rootState.routes[rootState.index]);
  }
  let found;
  if (coerceMainRouteResult != null) {
    const state = coerceMainRouteResult.state;
    if (state != null) {
      const routes1 = state.routes;
      const mapped = routes1.map(tmp9(tmp10[6]).coerceTabsRoute);
      found = mapped.find((item) => null != item);
    }
  }
  let state1;
  if (found != null) {
    state1 = found.state;
  }
  let tmp15;
  if (state1 != null) {
    ({ index, routes } = state1);
    if (index == null) {
      index = 0;
    }
    tmp15 = routes[index];
  }
  let name;
  if (tmp15 != null) {
    name = tmp15.name;
  }
  let tmp17 = "notifications" === name;
  if (!tmp17) {
    let name1;
    if (tmp15 != null) {
      name1 = tmp15.name;
    }
    tmp17 = "icymi" === name1;
  }
  closure_5 = tmp17;
  const obj5 = {
    label: intl2.string(str(channelId[1]).t.wuRE8M),
    onPress() {
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      const obj = { navigationReplace: !closure_5 };
      openURL(str, undefined, true, obj);
    }
  };
  intl2 = tmp9(tmp10[1]).intl;
  const items1 = [obj5, , ];
  const obj6 = {
    label: intl3.string(str(channelId[1]).t.WqhZss),
    onPress() {
      const obj = ToastUtils;
      obj.presentLinkCopied();
      const obj2 = ClipboardUtils;
      obj2.copy(str);
    }
  };
  intl3 = tmp9(tmp10[1]).intl;
  items1[1] = obj6;
  const obj7 = {
    label: intl4.string(str(channelId[1]).t.Ej3B3Y),
    onPress() {
      const obj = showShareActionSheet;
      const obj2 = { url: str };
      obj.showShareActionSheet(obj2, "Share Link");
    }
  };
  const arraySpreadResult = HermesBuiltin.arraySpread(items1, items, 2);
  intl4 = tmp9(tmp10[1]).intl;
  items1[arraySpreadResult] = obj7;
  if (null != channelId) {
    const unshift = items1.unshift;
    const obj8 = {
      label: intl5.string(str(channelId[1]).t.aW2YlJ),
      onPress() {
          let obj2;
          const obj = { guildId: importDefault, channelId, messageId, navigationSettings: obj2 };
          obj2 = { navigationReplace: !closure_5, safe: true };
          handleContentLinkingDefault(obj);
        }
    };
    intl5 = tmp9(tmp10[1]).intl;
    unshift(obj8);
  }
  const obj9 = { key: "LongPressUrl", header: obj10, options: items1, hasIcons: false };
  obj10 = { title: intl6.string(str(channelId[1]).t["5oIOLX"]), subtitle: str };
  const showSimpleActionSheet = str(channelId[9]).showSimpleActionSheet;
  str(channelId[9]);
  intl6 = tmp9(tmp10[1]).intl;
  const result1 = showSimpleActionSheet(obj9);
};
