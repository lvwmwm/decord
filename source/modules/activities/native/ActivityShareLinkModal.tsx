// Module ID: 13297
// Function ID: 100971
// Name: ActivityShareLinkModal
// Dependencies: []
// Exports: default

// Module 13297 (ActivityShareLinkModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const UserRowModes = arg1(dependencyMap[7]).UserRowModes;
const MessageSendLocation = arg1(dependencyMap[8]).MessageSendLocation;
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingVertical: importDefault(dependencyMap[11]).space.PX_8, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWER };
obj.headerContainer = obj;
obj.header = {};
const obj1 = { "Bool(false)": null, "Bool(false)": null, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj1;
let closure_14 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/activities/native/ActivityShareLinkModal.tsx");

export default function ActivityShareLinkModal(applicationId) {
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  const customId = applicationId.customId;
  const importDefault = customId;
  const linkId = applicationId.linkId;
  const dependencyMap = linkId;
  const message = applicationId.message;
  let callback = message;
  const onShare = applicationId.onShare;
  let callback2 = onShare;
  const tmp = callback3();
  let obj = arg1(dependencyMap[12]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => first2.getConnectedActivityChannelId());
  const React = stateFromStores;
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    let destinationIdFromChannelId;
    if (null != stateFromStores) {
      destinationIdFromChannelId = applicationId(linkId[13]).getDestinationIdFromChannelId(stateFromStores);
      const obj = applicationId(linkId[13]);
    }
    return destinationIdFromChannelId;
  }, items1);
  const tmp4 = callback2(React.useState(false), 2);
  const first = tmp4[0];
  let closure_6 = tmp4[1];
  const tmp6 = callback2(React.useState(false), 2);
  const first1 = tmp6[0];
  let closure_7 = first1;
  let closure_8 = tmp6[1];
  const tmp8 = callback2(React.useState([]), 2);
  const first2 = tmp8[0];
  closure_9 = first2;
  const constants = tmp8[1];
  callback = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  let obj1 = arg1(dependencyMap[12]);
  const items2 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const MessageSendLocation = stateFromStores1;
  const tmp11 = callback2(React.useState(""), 2);
  const first3 = tmp11[0];
  const tmp13 = tmp11[1];
  const items3 = [applicationId, stateFromStores1, customId, linkId, tmp13];
  const effect = React.useEffect(() => {
    let obj = applicationId(linkId[14]);
    obj = { applicationId };
    let id;
    if (null != stateFromStores1) {
      id = stateFromStores1.id;
    }
    obj.referrerId = id;
    obj.customId = customId;
    obj.linkId = linkId;
    tmp13(obj.getActivityLaunchURL(obj));
  }, items3);
  const items4 = [first1, onShare];
  const callback1 = React.useCallback(() => {
    onShare(false, first1);
    const result = applicationId(linkId[15]).closeActivityShareLinkModal();
  }, items4);
  const items5 = [applicationId];
  const tmp16 = callback2(importDefault(dependencyMap[16])(items5), 1);
  const first4 = tmp16[0];
  const callback3 = first4;
  // CreateGeneratorClosureLongIndex (0x67)
  const items6 = [first4, first1, first3, message, onShare, first2];
  const items7 = [first3];
  callback2 = React.useCallback(callback(tmp16), items6);
  let closure_15 = React.useCallback(() => {
    applicationId(linkId[23]).copy(first3);
    currentUser(true);
    const obj = applicationId(linkId[23]);
    applicationId(linkId[24]).presentLinkCopied();
  }, items7);
  const height = importDefault(dependencyMap[25])({ ignoreKeyboard: true }).height;
  const items8 = [height];
  obj = {
    style: React.useMemo(() => {
      const obj = {};
      let str = "100%";
      if (obj2.isAndroid()) {
        str = height;
      }
      obj.height = str;
      return obj;
    }, items8)
  };
  obj = { style: tmp.headerContainer };
  obj1 = { headerStyle: tmp.header };
  const intl = arg1(dependencyMap[22]).intl;
  obj1.title = intl.string(arg1(dependencyMap[22]).t.r9qKow);
  obj1.headerTitle = function headerTitle(children) {
    return first3(applicationId(linkId[28]).GenericHeaderTitle, { title: children.children, subtitle: message, variant: "redesign/heading-18/bold" });
  };
  let obj5 = arg1(dependencyMap[29]);
  obj1.headerLeft = obj5.getHeaderCloseButton(callback1);
  obj1.headerRight = function headerRight(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["onPress"] = closure_15;
    const intl = applicationId(linkId[22]).intl;
    obj["accessibilityLabel"] = intl.string(applicationId(linkId[22]).t.Xrt5Po);
    obj["IconComponent"] = applicationId(linkId[31]).LinkIcon;
    return first3(applicationId(linkId[30]).HeaderActionButton, obj);
  };
  let num;
  if (obj7.isIOS()) {
    num = 0;
  }
  obj1.headerStatusBarHeight = num;
  obj1.headerTitleAlign = "center";
  obj.children = first3(arg1(dependencyMap[27]).Header, obj1);
  const items9 = [first3(closure_6, obj), ];
  const obj2 = { style: tmp.container };
  const items10 = [first3(importDefault(dependencyMap[32]), { absolute: true }), , ];
  const obj3 = { "Bool(true)": "Galaxy S7", "Bool(true)": "SM-G930", "Bool(true)": "Galaxy S7 Edge", "Bool(true)": "SM-G935", initialSelectedDestinations: [], onSelectedDestinationChange: callback, originDestination: memo, rowMode: constants.TOGGLE };
  items10[1] = first3(importDefault(dependencyMap[33]), obj3);
  const obj4 = { disabled: first, floatingBackgroundColor: tmp.container.backgroundColor, isVisible: first2.length > 0, loading: first };
  let tmp25;
  if (!first) {
    tmp25 = callback2;
  }
  obj4.onPress = tmp25;
  if (1 === first2.length) {
    const intl3 = arg1(dependencyMap[22]).intl;
    let stringResult = intl3.string(arg1(dependencyMap[22]).t.TXNS7S);
  } else {
    const intl2 = arg1(dependencyMap[22]).intl;
    obj5 = { count: length };
    stringResult = intl2.formatToPlainString(arg1(dependencyMap[22]).t.jWtYUm, obj5);
  }
  obj4.text = stringResult;
  items10[2] = first3(arg1(dependencyMap[34]).ModalFloatingAction, obj4);
  obj2.children = items10;
  items9[1] = tmp13(closure_6, obj2);
  obj.children = items9;
  return tmp13(closure_6, obj);
};
