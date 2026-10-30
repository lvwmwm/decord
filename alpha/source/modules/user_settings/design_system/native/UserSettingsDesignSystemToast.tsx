// Module ID: 17736
// Function ID: 17737
// Name: UserSettingsDesignSystemToast
// Dependencies: [19, 17, 21, 5009, 575, 6971, 6022, 5619, 5629, 5708, 5707, 5730, 5726, 4959, 15818, 2]
// Exports: default

// Module 17736 (UserSettingsDesignSystemToast)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import EmojiUtils from "EmojiUtils" /* 4959 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import toastUtils from "toastUtils" /* 5708 */;
import CopyIcon from "CopyIcon" /* 5726 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5730 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import Card_Card from "Card/Card" /* 6971 */;
import Toast4 from "Toast" /* 15818 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let currentToastMap, queuedToastsMap;

let closure_4;
let hasOwnProperty;
let obj2;
function DemoGroup(demos) {
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
}
function LiveStores() {
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
}
const ScrollView = react_native.ScrollView;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = "This is a toast message";
let c7 = "https://cdn.discordapp.com/embed/avatars/0.png";
let metroImportAll = 0;
let obj = { container: obj2, previews: { alignItems: "center" } };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
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
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx");

export default function UserSettingsDesignSystemToast() {
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
  items = [React3(LiveStores, {}), , , , ];
  const obj4 = { title: "Variants and icons", hint: "Status toasts use the success and critical variants. Other toasts can show an icon.", demos: items };
  items[1] = React3(DemoGroup, obj4);
  const obj5 = { title: "Queueing", hint: "Toasts queue, but repeats of the key on screen are dropped.", demos: items1 };
  items[2] = React3(DemoGroup, obj5);
  const obj6 = { title: "Placement", hint: "Both are deprecated on the Mana API but still forwarded, so existing call sites keep working.", demos: items2 };
  items[3] = React3(DemoGroup, obj6);
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
};
