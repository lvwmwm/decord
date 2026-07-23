// Module ID: 13411
// Function ID: 103127
// Name: ActivityShareLinkModal
// Dependencies: [5, 57, 31, 27, 1348, 1849, 1347, 8818, 4123, 33, 4130, 689, 566, 7089, 11252, 13410, 5470, 1327, 13412, 6691, 6924, 3831, 1212, 5492, 3830, 1450, 477, 5094, 9122, 5087, 5788, 4074, 4662, 9883, 9904, 2]
// Exports: default

// Module 13411 (ActivityShareLinkModal)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import LinkIcon from "LinkIcon";
import { View } from "Background";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import { UserRowModes } from "UserRowModes";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import jsxProd from "SearchableDestinationList";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
const require = arg1;
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.headerContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: "transparent" };
let obj1 = { flex: 1, display: "flex", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("result").fileFinishedImporting("modules/activities/native/ActivityShareLinkModal.tsx");

export default function ActivityShareLinkModal(applicationId) {
  applicationId = applicationId.applicationId;
  const customId = applicationId.customId;
  const linkId = applicationId.linkId;
  const message = applicationId.message;
  const onShare = applicationId.onShare;
  const tmp = first4();
  let obj = applicationId(linkId[12]);
  const items = [first2];
  const stateFromStores = obj.useStateFromStores(items, () => first2.getConnectedActivityChannelId());
  const items1 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    let destinationIdFromChannelId;
    if (null != stateFromStores) {
      destinationIdFromChannelId = applicationId(linkId[13]).getDestinationIdFromChannelId(stateFromStores);
      const obj = applicationId(linkId[13]);
    }
    return destinationIdFromChannelId;
  }, items1);
  const tmp4 = onShare(stateFromStores.useState(false), 2);
  const first = tmp4[0];
  let closure_6 = tmp4[1];
  const tmp6 = onShare(stateFromStores.useState(false), 2);
  const first1 = tmp6[0];
  let closure_8 = tmp6[1];
  const tmp8 = onShare(stateFromStores.useState([]), 2);
  first2 = tmp8[0];
  const UserRowModes = tmp8[1];
  const callback = stateFromStores.useCallback((arg0) => {
    callback(arg0);
  }, []);
  let obj1 = applicationId(linkId[12]);
  const items2 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp11 = onShare(stateFromStores.useState(""), 2);
  const first3 = tmp11[0];
  let closure_13 = tmp13;
  const items3 = [applicationId, stateFromStores1, customId, linkId, tmp11[1]];
  const effect = stateFromStores.useEffect(() => {
    let obj = applicationId(linkId[14]);
    obj = { applicationId };
    let id;
    if (null != stateFromStores1) {
      id = stateFromStores1.id;
    }
    obj.referrerId = id;
    obj.customId = customId;
    obj.linkId = linkId;
    closure_13(obj.getActivityLaunchURL(obj));
  }, items3);
  const items4 = [first1, onShare];
  const callback1 = stateFromStores.useCallback(() => {
    onShare(false, first1);
    const result = applicationId(linkId[15]).closeActivityShareLinkModal();
  }, items4);
  const items5 = [applicationId];
  const tmp16 = onShare(customId(linkId[16])(items5), 1);
  first4 = tmp16[0];
  // CreateGeneratorClosureLongIndex (0x67)
  const items6 = [first4, first1, first3, message, onShare, first2];
  const items7 = [first3];
  const callback2 = stateFromStores.useCallback(message(tmp16), items6);
  let closure_15 = stateFromStores.useCallback(() => {
    applicationId(linkId[23]).copy(first3);
    currentUser(true);
    const obj = applicationId(linkId[23]);
    applicationId(linkId[24]).presentLinkCopied();
  }, items7);
  const height = customId(linkId[25])({ ignoreKeyboard: true }).height;
  const items8 = [height];
  obj = {
    style: stateFromStores.useMemo(() => {
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
  let intl = applicationId(linkId[22]).intl;
  obj1.title = intl.string(applicationId(linkId[22]).t.r9qKow);
  obj1.headerTitle = function headerTitle(children) {
    return first3(applicationId(linkId[28]).GenericHeaderTitle, { title: children.children, subtitle: message, variant: "redesign/heading-18/bold" });
  };
  let obj5 = applicationId(linkId[29]);
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
  obj.children = first3(applicationId(linkId[27]).Header, obj1);
  const items9 = [first3(closure_6, obj), ];
  const obj2 = { style: tmp.container };
  const items10 = [first3(customId(linkId[32]), { absolute: true }), , ];
  const obj3 = { disableGradient: true, disableStickySections: true, initialSelectedDestinations: [], insetEnd: 0, onSelectedDestinationChange: callback, originDestination: memo, rowMode: UserRowModes.TOGGLE };
  items10[1] = first3(customId(linkId[33]), obj3);
  const obj4 = { disabled: first, floatingBackgroundColor: tmp.container.backgroundColor, isVisible: first2.length > 0, loading: first };
  let tmp25;
  if (!first) {
    tmp25 = callback2;
  }
  obj4.onPress = tmp25;
  if (1 === first2.length) {
    const intl3 = applicationId(linkId[22]).intl;
    let stringResult = intl3.string(applicationId(linkId[22]).t.TXNS7S);
  } else {
    const intl2 = applicationId(linkId[22]).intl;
    obj5 = { count: length };
    stringResult = intl2.formatToPlainString(applicationId(linkId[22]).t.jWtYUm, obj5);
  }
  obj4.text = stringResult;
  items10[2] = first3(applicationId(linkId[34]).ModalFloatingAction, obj4);
  obj2.children = items10;
  items9[1] = closure_13(closure_6, obj2);
  obj.children = items9;
  return closure_13(closure_6, obj);
};
