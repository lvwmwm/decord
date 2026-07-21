// Module ID: 14769
// Function ID: 111337
// Name: useMessageRequestCounts
// Dependencies: []
// Exports: default

// Module 14769 (useMessageRequestCounts)
function useMessageRequestCounts() {
  const obj = {};
  const items = [closure_5];
  obj.requestCount = arg1(dependencyMap[6]).useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
  const obj2 = arg1(dependencyMap[6]);
  const items1 = [closure_6];
  obj.spamCount = arg1(dependencyMap[6]).useStateFromStores(items1, () => spamChannelsCount.getSpamChannelsCount());
  return obj;
}
function MessageRequestAnimation(color) {
  const ref = React.useRef(null);
  const arg1 = ref;
  const requestCount = useMessageRequestCounts().requestCount;
  const importDefault = requestCount;
  const items = [requestCount];
  const effect = React.useEffect(() => {
    if (requestCount > 0) {
      let tmp3 = null == ref;
      if (!tmp3) {
        const current = ref.current;
        tmp3 = null == current;
        const obj = current;
      }
      if (!tmp3) {
        obj.play();
      }
    }
  }, items);
  return callback(arg1(dependencyMap[7]).MessageRequestLottie, { ref, color: color.color, size: "sm", autoPlay: true });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ buttonContainer: { position: "relative" } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx");

export default function MessageRequestsButton(alternateVariant) {
  let flag = alternateVariant.alternateVariant;
  if (flag === undefined) {
    flag = false;
  }
  let obj = Object.create(null);
  obj.alternateVariant = 0;
  const merged = Object.assign(alternateVariant, obj);
  const tmp4 = useMessageRequestCounts();
  let str = tmp4.requestCount;
  if (0 === str) {
    if (0 === tmp4.spamCount) {
      return null;
    }
  }
  if (flag) {
    str = undefined;
    if (str > 0) {
      str = str.toString();
    }
    obj = { style: tmp3.buttonContainer, collapsable: false };
    if (null != str) {
      const obj1 = { icon: callback(MessageRequestAnimation, {}), variant: "secondary", text: str, size: "sm" };
      const intl2 = arg1(dependencyMap[9]).intl;
      obj1.accessibilityLabel = intl2.string(arg1(dependencyMap[9]).t.e7GWjQ);
      const merged1 = Object.assign(merged);
      let tmp26 = callback(arg1(dependencyMap[8]).Button, obj1);
    } else {
      const obj2 = { icon: callback(MessageRequestAnimation, {}) };
      const intl3 = arg1(dependencyMap[9]).intl;
      obj2.accessibilityLabel = intl3.string(arg1(dependencyMap[9]).t.e7GWjQ);
      const merged2 = Object.assign(merged);
      tmp26 = callback(arg1(dependencyMap[10]).IconButton, obj2);
    }
    const items = [tmp26, ];
    let tmp27 = str > 0;
    if (tmp27) {
      const obj3 = { badgePosition: "right" };
      tmp27 = callback(arg1(dependencyMap[11]).ButtonBadge, obj3);
    }
    items[1] = tmp27;
    obj.children = items;
    return closure_8(View, obj);
  } else {
    obj = { source: importDefault(dependencyMap[12]), IconComponent: MessageRequestAnimation };
    const intl = arg1(dependencyMap[9]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.e7GWjQ);
    let str1;
    if (str > 0) {
      str1 = str.toString();
    }
    obj.buttonText = str1;
    obj.badge = str > 0;
    obj.badgePosition = "right";
    const merged3 = Object.assign(merged);
    return callback(importDefault(dependencyMap[11]), obj);
  }
  const tmp3 = callback2();
};
