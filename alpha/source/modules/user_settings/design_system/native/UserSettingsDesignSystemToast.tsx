// Module ID: 16138
// Function ID: 16139
// Name: UserSettingsDesignSystemToast
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 5088, 5379, 6181, 5377, 4810, 4809, 5046, 5042, 4768, 14255, 2]

// Module 16138 (UserSettingsDesignSystemToast)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import EmojiUtils from "EmojiUtils" /* 4768 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import toastUtils from "toastUtils" /* 4810 */;
import CopyIcon from "CopyIcon" /* 5042 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import Text_Text from "Text/Text" /* 5088 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import Card_Card from "Card/Card" /* 6181 */;
import Toast4 from "Toast" /* 14255 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const ScrollView = react_native.ScrollView;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = "This is a toast message";
let c7 = "https://cdn.discordapp.com/embed/avatars/0.png";
let metroImportAll = 0;
let obj = { container: obj2, previews: { alignItems: "center" } };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function DemoGroup(arg0) {
  let Stack;
  let demos;
  let hint;
  let obj5;
  let title;
  let tmp10;
  let tmp4;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(11);
  ({ title, hint, demos } = arg0);
  if (cResult[0] !== title) {
    const obj2 = { variant: "text-lg/bold", children: title };
    const tmp6 = React3(Text_Text.Text, obj2);
    cResult[0] = title;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== hint) {
    const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: hint };
    const tmp9 = React3(Text_Text.Text, obj3);
    cResult[2] = hint;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== demos) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(label) {
        const obj = { variant: "secondary", size: "sm", text: label.label, onPress: label.onPress };
        return closure_1_4(components_Button_Button.Button, obj, label.label);
      };
      cResult[6] = fn;
      tmp12 = fn;
    } else {
      tmp12 = cResult[6];
    }
    const mapped = demos.map(tmp12);
    cResult[4] = demos;
    cResult[5] = mapped;
    tmp10 = mapped;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[7] === tmp4) {
    if (cResult[8] === tmp7) {
      let tmp14;
      if (cResult[9] === tmp10) {
        tmp14 = cResult[10];
      }
      return tmp14;
    }
  }
  const obj4 = { children: hasOwnProperty(Stack, obj5) };
  const Card = tmp(6181).Card;
  obj5 = { spacing: nativeDefault.space.PX_8, children: items };
  Stack = tmp(5377).Stack;
  items = [tmp4, tmp7, tmp10];
  const tmp15 = React3(Card, obj4);
  cResult[7] = tmp4;
  cResult[8] = tmp7;
  cResult[9] = tmp10;
  cResult[10] = tmp15;
  tmp14 = tmp15;
}) : (function DemoGroup(demos) {
  let Stack;
  let hint;
  let obj2;
  let title;
  demos = demos.demos;
  ({ title, hint } = demos);
  let obj = { children: hasOwnProperty(Stack, obj2) };
  const Card = Card_Card.Card;
  obj2 = { spacing: nativeDefault.space.PX_8, children: items };
  Stack = Stack_Stack.Stack;
  items = [
    React3(Text_Text.Text, { variant: "text-lg/bold", children: title }),
    React3(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: hint }),
    demos.map((label) => {
      const obj = { variant: "secondary", size: "sm", text: label.label, onPress: label.onPress };
      return closure_1_4(components_Button_Button.Button, obj, label.label);
    })
  ];
  return React3(Card, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function LiveStores() {
  let Stack;
  let first;
  let obj3;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(currentToastMap) {
      currentToastMap = currentToastMap.currentToastMap;
      const value = currentToastMap.get("app");
      let toast;
      if (value != null) {
        toast = value.toast;
      }
      return toast;
    };
    let num = 0;
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = toastUtils;
  const toastStore = tmpResult.useToastStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(queuedToastsMap) {
      queuedToastsMap = queuedToastsMap.queuedToastsMap;
      const value = queuedToastsMap.get("app");
      let num;
      if (value != null) {
        num = value.length;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    };
    cResult[1] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult2 = toastUtils;
  const toastStore1 = tmpResult2.useToastStore(tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = React3(Text_Text.Text, { variant: "text-lg/bold", children: "Live store" });
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  let str = "text-subtle";
  if (null != toastStore) {
    str = "text-feedback-positive";
  }
  let str2;
  if (toastStore != null) {
    str2 = toastStore.text;
  }
  if (str2 == null) {
    str2 = "idle";
  }
  let str3 = "";
  if (toastStore1 > 0) {
    const _HermesInternal = HermesInternal;
    str3 = " (+" + toastStore1 + " queued)";
  }
  if (cResult[3] === str) {
    if (cResult[4] === str2) {
      let tmp11;
      if (cResult[5] === str3) {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  const obj2 = { children: hasOwnProperty(Stack, obj3) };
  const Card = tmp(6181).Card;
  obj3 = { spacing: nativeDefault.space.PX_8, children: items };
  Stack = tmp(5377).Stack;
  items = [tmp8, ];
  const obj4 = { variant: "text-md/medium", color: str, children: items1 };
  items1 = ["Mana: ", str2, str3];
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  const tmp12 = React3(Card, obj2);
  cResult[3] = str;
  cResult[4] = str2;
  cResult[5] = str3;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : (function LiveStores() {
  const obj = toastUtils;
  const toastStore = obj.useToastStore((currentToastMap) => {
    currentToastMap = currentToastMap.currentToastMap;
    const value = currentToastMap.get("app");
    let toast;
    if (value != null) {
      toast = value.toast;
    }
    return toast;
  });
  const obj2 = toastUtils;
  const toastStore1 = obj2.useToastStore((queuedToastsMap) => {
    queuedToastsMap = queuedToastsMap.queuedToastsMap;
    const value = queuedToastsMap.get("app");
    let num;
    if (value != null) {
      num = value.length;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const Card = Card_Card.Card;
  const obj3 = { spacing: nativeDefault.space.PX_8, children: items };
  const Stack = Stack_Stack.Stack;
  items = [React3(Text_Text.Text, { variant: "text-lg/bold", children: "Live store" }), ];
  let str = "text-subtle";
  const Text = Text_Text.Text;
  const tmp3 = React3;
  if (null != toastStore) {
    str = "text-feedback-positive";
  }
  let str2;
  const obj4 = { variant: "text-md/medium", color: str, children: items1 };
  if (toastStore != null) {
    str2 = toastStore.text;
  }
  if (str2 == null) {
    str2 = "idle";
  }
  items1 = ["Mana: ", str2];
  let str3 = "";
  if (toastStore1 > 0) {
    const _HermesInternal = HermesInternal;
    str3 = " (+" + toastStore1 + " queued)";
  }
  items1[2] = str3;
  const obj5 = { children: hasOwnProperty(Stack, obj3) };
  items[1] = hasOwnProperty(Text, obj4);
  return tmp3(Card, obj5);
});
let obj3 = {
  label: "Success",
  onPress() {
    metroImportAll = metroImportAll + 1;
    const obj = ToastActionCreatorsDefault;
    return obj.open("" + "SUCCESS" + "-" + metroImportAll, { text: "Saved", variant: "success" });
  }
};
let items = [
  obj3,
  {
    label: "Critical",
    onPress() {
      metroImportAll = metroImportAll + 1;
      const obj = ToastActionCreatorsDefault;
      return obj.open("" + "CRITICAL" + "-" + metroImportAll, { text: "Something went wrong", variant: "critical" });
    }
  },
  {
    label: "Default \u2014 information icon",
    onPress() {
      metroImportAll = metroImportAll + 1;
      const open = ToastActionCreatorsDefault.open;
      const obj = { text, icon: CircleInformationIcon.CircleInformationIcon };
      ToastActionCreatorsDefault;
      const combined = "" + "INFO_ICON" + "-" + metroImportAll;
      return open(combined, obj);
    }
  },
  {
    label: "Default \u2014 copy icon",
    onPress() {
      metroImportAll = metroImportAll + 1;
      const open = ToastActionCreatorsDefault.open;
      const obj = { text: "Copied", icon: CopyIcon.CopyIcon };
      ToastActionCreatorsDefault;
      const combined = "" + "COPY_ICON" + "-" + metroImportAll;
      return open(combined, obj);
    }
  },
  {
    label: "Default \u2014 no icon",
    onPress() {
      metroImportAll = metroImportAll + 1;
      const obj = ToastActionCreatorsDefault;
      const obj2 = { text };
      return obj.open("" + "NO_ICON" + "-" + metroImportAll, obj2);
    }
  },
  {
    label: "Long text",
    onPress() {
      metroImportAll = metroImportAll + 1;
      const obj = ToastActionCreatorsDefault;
      return obj.open("" + "LONG" + "-" + metroImportAll, { text: "This is a much longer toast message that should wrap onto several lines and then clamp, so the container has to make room for it." });
    }
  }
];
let obj4 = {
  label: "Queue three",
  onPress() {
    metroImportAll = metroImportAll + 1;
    const obj = ToastActionCreatorsDefault;
    obj.open("" + "QUEUE" + "-" + metroImportAll, { text: "First of three" });
    const sum1 = metroImportAll + 1;
    metroImportAll = sum1;
    const obj2 = ToastActionCreatorsDefault;
    obj2.open("" + "QUEUE" + "-" + sum1, { text: "Second of three" });
    const sum2 = metroImportAll + 1;
    metroImportAll = sum2;
    const obj3 = ToastActionCreatorsDefault;
    obj3.open("" + "QUEUE" + "-" + sum2, { text: "Third of three" });
  }
};
let items1 = [
  obj4,
  {
    label: "Same key three times",
    onPress() {
      let num = 0;
      do {
        let obj = ToastActionCreatorsDefault;
        let openResult = obj.open("DEDUPE_DEMO", { text: "Should only appear once" });
        num = num + 1;
      } while (num < 3);
    }
  },
  {
    label: "Dismiss current",
    onPress() {
      const obj = ToastActionCreatorsDefault;
      return obj.close();
    }
  }
];
let obj5 = {
  label: "Bottom position",
  onPress() {
    metroImportAll = metroImportAll + 1;
    const obj = ToastActionCreatorsDefault;
    const obj2 = { text, position: "bottom" };
    return obj.open("" + "BOTTOM" + "-" + metroImportAll, obj2);
  }
};
const items2 = [
  obj5,
  {
    label: "Ten second duration",
    onPress() {
      metroImportAll = metroImportAll + 1;
      const obj = ToastActionCreatorsDefault;
      const obj2 = { text, duration: 10000 };
      return obj.open("" + "DURATION" + "-" + metroImportAll, obj2);
    }
  }
];
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsDesignSystemToast() {
  let Stack2;
  let first;
  let obj14;
  let obj16;
  let obj20;
  let tmp10;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp38;
  let tmp41;
  let tmp45;
  let tmp49;
  let tmp52;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = EmojiUtils;
    const emojiUrl = tmpResult.getEmojiUrl({ name: "\u{1F525}" });
    cResult[0] = emojiUrl;
    first = emojiUrl;
  } else {
    first = cResult[0];
  }
  const tmp6 = closure_9();
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = React3(closure_11, {});
    const obj2 = { title: "Variants and icons", hint: "Status toasts use the success and critical variants. Other toasts can show an icon.", demos: items };
    const tmp16 = React3(closure_10, obj2);
    const obj3 = { title: "Queueing", hint: "Toasts queue, but repeats of the key on screen are dropped.", demos: items1 };
    const tmp18 = React3(closure_10, obj3);
    const obj4 = { title: "Placement", hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.", demos: items2 };
    const tmp20 = React3(closure_10, obj4);
    cResult[1] = tmp13;
    cResult[2] = tmp16;
    cResult[3] = tmp18;
    cResult[4] = tmp20;
    tmp10 = tmp20;
    tmp9 = tmp18;
    tmp8 = tmp16;
    tmp7 = tmp13;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp29 = React3(Text_Text.Text, { variant: "text-lg/bold", children: "Components" });
    const obj5 = { text, variant: "default" };
    const tmp31 = React3(Toast4.Toast, obj5);
    const obj6 = { text, variant: "default", icon: CircleInformationIcon.CircleInformationIcon };
    const Toast = tmp(14255).Toast;
    const tmp32 = React3(Toast, obj6);
    const obj7 = { text, variant: "default", icon: CircleInformationIcon.CircleInformationIcon, iconColor: nativeDefault.colors.ICON_BRAND, secondaryIconColor: nativeDefault.colors.ICON_DEFAULT };
    const Toast2 = tmp(14255).Toast;
    const tmp34 = React3(Toast2, obj7);
    const obj8 = { text, variant: "success" };
    const tmp35 = React3(Toast4.Toast, obj8);
    const obj9 = { text, variant: "critical" };
    const tmp36 = React3(Toast4.Toast, obj9);
    const tmp37 = React3(Text_Text.Text, { variant: "text-lg/bold", children: "Entities" });
    cResult[5] = tmp36;
    cResult[6] = tmp37;
    cResult[7] = tmp29;
    cResult[8] = tmp31;
    cResult[9] = tmp32;
    cResult[10] = tmp34;
    cResult[11] = tmp35;
    tmp27 = tmp35;
    tmp26 = tmp34;
    tmp25 = tmp32;
    tmp24 = tmp31;
    tmp23 = tmp29;
    tmp22 = tmp37;
    tmp21 = tmp36;
  } else {
    tmp21 = cResult[5];
    tmp22 = cResult[6];
    tmp23 = cResult[7];
    tmp24 = cResult[8];
    tmp25 = cResult[9];
    tmp26 = cResult[10];
    tmp27 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    let obj11;
    const Toast3 = tmp(14255).Toast;
    const tmp39 = React3;
    if ("" !== first) {
      obj11 = { type: "emoji", src: first, alt: "\u{1F525}" };
      const obj10 = { type: "emoji", src: first, alt: "\u{1F525}" };
    } else {
      obj11 = { type: "emoji", unicode: "\u{1F525}" };
    }
    const obj12 = { text: "Default reaction set to \u{1F525}", icon: obj11 };
    const tmp39Result = tmp39(Toast3, obj12);
    cResult[12] = tmp39Result;
    tmp38 = tmp39Result;
  } else {
    tmp38 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const obj13 = { text: "Nelly is now speaking", icon: obj14 };
    obj14 = { type: "avatar", src, alt: "Nelly" };
    const tmp44 = React3(Toast4.Toast, obj13);
    cResult[13] = tmp44;
    tmp41 = tmp44;
  } else {
    tmp41 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const obj15 = { text: "Discord Staff", icon: obj16 };
    obj16 = { type: "guild", src, name: "Discord Staff" };
    const tmp48 = React3(Toast4.Toast, obj15);
    cResult[14] = tmp48;
    tmp45 = tmp48;
  } else {
    tmp45 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const obj17 = { text: "Discord Staff", icon: { type: "guild", src: null, name: "Discord Staff" } };
    const tmp51 = React3(Toast4.Toast, obj17);
    cResult[15] = tmp51;
    tmp49 = tmp51;
  } else {
    tmp49 = cResult[15];
  }
  if (cResult[16] !== tmp6.previews) {
    const obj18 = { spacing: nativeDefault.space.PX_16, children: items };
    const Stack = tmp(5377).Stack;
    items = [tmp7, tmp8, tmp9, tmp10, ];
    const obj19 = { children: hasOwnProperty(Stack2, obj20) };
    const Card = tmp(6181).Card;
    obj20 = { spacing: nativeDefault.space.PX_12, style: tmp6.previews, children: items1 };
    Stack2 = tmp(5377).Stack;
    items1 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp21, tmp22, tmp38, tmp41, tmp45, tmp49];
    items[4] = React3(Card, obj19);
    const tmp56 = hasOwnProperty(Stack, obj18);
    cResult[16] = tmp6.previews;
    cResult[17] = tmp56;
    tmp52 = tmp56;
  } else {
    tmp52 = cResult[17];
  }
  if (cResult[18] === tmp6.container) {
    let tmp57;
    if (cResult[19] === tmp52) {
      tmp57 = cResult[20];
    }
    return tmp57;
  }
  const obj21 = { contentContainerStyle: tmp6.container, children: tmp52 };
  const tmp58 = React3(ScrollView, obj21);
  cResult[18] = tmp6.container;
  cResult[19] = tmp52;
  cResult[20] = tmp58;
  tmp57 = tmp58;
}) : (function UserSettingsDesignSystemToast() {
  let Stack;
  let obj14;
  let obj17;
  let obj3;
  const obj = EmojiUtils;
  const emojiUrl = obj.getEmojiUrl({ name: "\u{1F525}" });
  const tmp4 = closure_9();
  const obj2 = { contentContainerStyle: tmp4.container, children: hasOwnProperty(Stack, obj3) };
  obj3 = { spacing: nativeDefault.space.PX_16, children: items };
  Stack = Stack_Stack.Stack;
  items = [React3(closure_11, {}), , , , ];
  const obj4 = { title: "Variants and icons", hint: "Status toasts use the success and critical variants. Other toasts can show an icon.", demos: items };
  items[1] = React3(closure_10, obj4);
  const obj5 = { title: "Queueing", hint: "Toasts queue, but repeats of the key on screen are dropped.", demos: items1 };
  items[2] = React3(closure_10, obj5);
  const obj6 = { title: "Placement", hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.", demos: items2 };
  items[3] = React3(closure_10, obj6);
  const Card = Card_Card.Card;
  const obj7 = { spacing: nativeDefault.space.PX_12, style: tmp4.previews, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  items1 = [React3(Text_Text.Text, { variant: "text-lg/bold", children: "Components" }), , , , , , , , , , ];
  const obj8 = { text, variant: "default" };
  items1[1] = React3(Toast4.Toast, obj8);
  const obj9 = { text, variant: "default", icon: CircleInformationIcon.CircleInformationIcon };
  const Toast = Toast4.Toast;
  items1[2] = React3(Toast, obj9);
  const obj10 = { text, variant: "default", icon: CircleInformationIcon.CircleInformationIcon, iconColor: nativeDefault.colors.ICON_BRAND, secondaryIconColor: nativeDefault.colors.ICON_DEFAULT };
  const Toast2 = Toast4.Toast;
  items1[3] = React3(Toast2, obj10);
  const obj11 = { text, variant: "success" };
  items1[4] = React3(Toast4.Toast, obj11);
  const obj12 = { text, variant: "critical" };
  items1[5] = React3(Toast4.Toast, obj12);
  items1[6] = React3(Text_Text.Text, { variant: "text-lg/bold", children: "Entities" });
  const Toast3 = Toast4.Toast;
  const tmp6 = ScrollView;
  if ("" !== emojiUrl) {
    obj14 = { type: "emoji", src: emojiUrl, alt: "\u{1F525}" };
    const obj13 = { type: "emoji", src: emojiUrl, alt: "\u{1F525}" };
  } else {
    obj14 = { type: "emoji", unicode: "\u{1F525}" };
  }
  const obj15 = { children: hasOwnProperty(Stack2, obj7) };
  items1[7] = React3(Toast3, { text: "Default reaction set to \u{1F525}", icon: obj14 });
  const obj16 = { text: "Nelly is now speaking", icon: obj17 };
  obj17 = { type: "avatar", src, alt: "Nelly" };
  items1[8] = React3(Toast4.Toast, obj16);
  const obj18 = { text: "Discord Staff", icon: { type: "guild", src, name: "Discord Staff" } };
  items1[9] = React3(Toast4.Toast, obj18);
  items1[10] = React3(Toast4.Toast, { text: "Discord Staff", icon: { type: "guild", src: null, name: "Discord Staff" } });
  items[4] = React3(Card, obj15);
  return React3(tmp6, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx");

export default tmp4;
