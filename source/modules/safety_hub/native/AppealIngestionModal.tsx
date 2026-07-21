// Module ID: 11030
// Function ID: 85874
// Name: getHeader
// Dependencies: []
// Exports: AppealIngestionModalHeader, AppealIngestionModalScreen, default

// Module 11030 (getHeader)
function getHeader(arg0) {
  return callback3(arg1(dependencyMap[10]).Text, { variant: "text-md/normal", children: undefined });
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_8 = importDefault(dependencyMap[4]);
({ APPEAL_INGESTION_IMPRESSION_PROPERTIES: closure_9, AppealIngestionSections: closure_10 } = arg1(dependencyMap[5]));
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[6]).EMPTY_STRING_SNOWFLAKE_ID;
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.headerContainer = { <string:3489662072>: "<string:553648707>", <string:3638919185>: "<string:4009755204>", <string:1607818591>: "<string:3875537478>", getInspectorDataForViewTag: "<string:3019899464>" };
obj.header = { "Null": null, "Null": null };
obj.subheader = {};
const tmp3 = arg1(dependencyMap[7]);
obj.separator = { backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
obj.footerContainer = { marginBottom: 16 };
obj.footerText = { "Null": "center", "Null": "center" };
obj.footerButton = { paddingHorizontal: 16 };
let closure_15 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionModal.tsx");

export default function AppealIngestionModal(classificationId) {
  let classification;
  let importDefault;
  let importAll;
  let obj = arg1(dependencyMap[12]);
  const safetyHubClassification = obj.useSafetyHubClassification(classificationId.classificationId);
  ({ isDsaEligible: closure_0, classification } = safetyHubClassification);
  let flag;
  if (null != classification) {
    flag = classification.is_spam;
  }
  if (!flag) {
    flag = false;
  }
  importDefault = flag;
  const classification2 = safetyHubClassification.classification;
  let flag2;
  if (null != classification2) {
    flag2 = classification2.is_coppa;
  }
  if (!flag2) {
    flag2 = false;
  }
  importAll = flag2;
  obj = {
    initialRouteName: constants.SPEED_BUMP,
    screens: importDefault(dependencyMap[29])(() => function getScreens(closure_0, flag, flag2) {
      let obj = {};
      obj = {};
      let obj2 = closure_0(closure_3[21]);
      obj.headerLeft = obj2.getHeaderCloseButton(flag(closure_3[15]).close);
      obj.headerTitle = function headerTitle() {
        return callback2();
      };
      obj.render = function render() {
        return callback(arg1(closure_3[22]), { isDsaEligible: arg0, isSpam: arg1, isCoppa: arg2 });
      };
      obj.impressionName = closure_0(closure_3[23]).ImpressionNames.APPEAL_INGESTION_SPEED_BUMP;
      obj.impressionProperties = closure_9;
      obj[constants.SPEED_BUMP] = obj;
      obj = {};
      let obj4 = closure_0(closure_3[21]);
      obj.headerLeft = obj4.getHeaderBackButton();
      obj.headerTitle = function headerTitle() {
        return callback2();
      };
      obj.render = function render() {
        return callback(arg1(closure_3[24]), { isDsaEligible: arg0 });
      };
      obj.impressionName = closure_0(closure_3[23]).ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL;
      obj.impressionProperties = closure_9;
      obj[constants.COLLECT_SIGNAL] = obj;
      const obj1 = {
        headerLeft: closure_0(closure_3[21]).getHeaderBackButton(),
        headerTitle() {
          return callback2();
        },
        render() {
          return callback(arg1(closure_3[25]), { isDsaEligible: arg0 });
        },
        impressionName: closure_0(closure_3[23]).ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        impressionProperties: closure_9
      };
      obj[constants.CONFIRM_SUBMISSION] = obj1;
      obj2 = {};
      const obj7 = closure_0(closure_3[21]);
      obj2.headerLeft = closure_0(closure_3[21]).getHeaderCloseButton(flag(closure_3[15]).close);
      obj2.headerTitle = function headerTitle() {
        return callback2();
      };
      obj2.render = function render() {
        return callback(arg1(closure_3[26]), {});
      };
      obj2.impressionName = closure_0(closure_3[23]).ImpressionNames.APPEAL_INGESTION_REQUEST_SENT;
      obj2.impressionProperties = closure_9;
      obj[constants.REQUEST_SENT] = obj2;
      const obj3 = {};
      const obj9 = closure_0(closure_3[21]);
      obj3.headerLeft = closure_0(closure_3[21]).getHeaderCloseButton(flag(closure_3[15]).close);
      obj3.headerTitle = function headerTitle() {
        return callback2();
      };
      obj3.render = function render() {
        return callback(arg1(closure_3[27]), {});
      };
      obj3.impressionName = closure_0(closure_3[23]).ImpressionNames.APPEAL_INGESTION_THANKS;
      obj3.impressionProperties = closure_9;
      obj[constants.THANKS] = obj3;
      obj4 = {};
      const obj11 = closure_0(closure_3[21]);
      obj4.headerLeft = closure_0(closure_3[21]).getHeaderCloseButton(flag(closure_3[15]).close);
      obj4.headerTitle = function headerTitle() {
        return callback2();
      };
      obj4.render = function render() {
        return callback(arg1(closure_3[28]), {});
      };
      obj4.impressionName = closure_0(closure_3[23]).ImpressionNames.APPEAL_INGESTION_SPAM;
      obj4.impressionProperties = closure_9;
      obj[constants.SPAM] = obj4;
      return obj;
    }(closure_0, flag, flag2))
  };
  const intl = arg1(dependencyMap[19]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[19]).t.13/7kX);
  obj.headerTitleAlign = "center";
  return callback3(arg1(dependencyMap[30]).Navigator, obj);
};
export const AppealIngestionModalHeader = function AppealIngestionModalHeader(arg0) {
  let headerText;
  let subHeaderText;
  ({ headerText, subHeaderText } = arg0);
  const tmp = callback4();
  let obj = { style: tmp.headerContainer };
  let tmp4 = null != headerText;
  if (tmp4) {
    tmp4 = "" !== headerText;
  }
  if (tmp4) {
    obj = { style: tmp.header, children: headerText };
    tmp4 = callback3(arg1(dependencyMap[10]).Text, obj);
  }
  const items = [tmp4, ];
  let tmp8 = null;
  if (null != subHeaderText) {
    tmp8 = null;
    if (subHeaderText.length > 0) {
      obj = { style: tmp.subheader, children: subHeaderText };
      tmp8 = callback3(arg1(dependencyMap[10]).Text, obj);
    }
  }
  items[1] = tmp8;
  obj.children = items;
  return closure_13(View, obj);
};
export const AppealIngestionModalScreen = function AppealIngestionModalScreen(children) {
  let dependencyMap;
  let callback;
  let callback2;
  let React;
  let View;
  let footerText = callback4();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => store.getIsSubmitting());
  let obj1 = arg1(dependencyMap[12]);
  const safetyHubAppealSignal = obj1.useSafetyHubAppealSignal();
  const arg1 = safetyHubAppealSignal;
  let obj2 = arg1(dependencyMap[11]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => store.getFreeTextAppealReason());
  const importDefault = stateFromStores1;
  let obj3 = arg1(dependencyMap[11]);
  const items2 = [closure_8];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => store.getAppealClassificationId());
  const importAll = stateFromStores2;
  let obj4 = arg1(dependencyMap[12]);
  let tmp6 = stateFromStores2;
  if (null == stateFromStores2) {
    tmp6 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj4.useSafetyHubClassification(tmp6);
  const classification = safetyHubClassification.classification;
  let flag;
  if (null != classification) {
    flag = classification.is_spam;
  }
  if (!flag) {
    flag = false;
  }
  const classification2 = safetyHubClassification.classification;
  let flag2;
  if (null != classification2) {
    flag2 = classification2.is_coppa;
  }
  if (!flag2) {
    flag2 = false;
  }
  const classification3 = safetyHubClassification.classification;
  let prop;
  if (null != classification3) {
    prop = classification3.appeal_ingestion_type;
  }
  let obj5 = arg1(dependencyMap[13]);
  const navigation = obj5.useNavigation();
  dependencyMap = navigation;
  let tmp10 = null != prop;
  if (tmp10) {
    tmp10 = prop !== arg1(dependencyMap[14]).AppealIngestionType.IN_APP;
  }
  if (!tmp10) {
    tmp10 = flag2;
  }
  if (!tmp10) {
    tmp10 = flag;
  }
  const tmp14 = callback2(React.useState(""), 2);
  let first = tmp14[0];
  callback = tmp14[1];
  const tmp16 = callback2(React.useState(""), 2);
  const first1 = tmp16[0];
  callback2 = first1;
  React = tmp16[1];
  const items3 = [navigation];
  const effect = React.useEffect(() => {
    let closure_0 = navigation.addListener("state", () => {
      callback(closure_3.getState().routes[closure_3.getState(closure_3).routes.length - 1].name);
    });
    return () => {
      closure_3.removeListener("state", closure_0);
    };
  }, items3);
  const items4 = [navigation, first1];
  callback = React.useCallback(() => {
    if (first1 === constants.SPEED_BUMP) {
      navigation.push(constants.COLLECT_SIGNAL);
    } else if (first1 === constants.COLLECT_SIGNAL) {
      navigation.push(constants.CONFIRM_SUBMISSION);
    } else if (first1 === constants.CONFIRM_SUBMISSION) {
      navigation.push(constants.REQUEST_SENT);
    } else {
      stateFromStores1(navigation[15]).close();
      const obj = stateFromStores1(navigation[15]);
    }
  }, items4);
  View = callback;
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [stateFromStores2, safetyHubAppealSignal, stateFromStores1, callback];
  let string = React.useCallback(callback(tmp), items5);
  obj = { style: footerText.container };
  const items6 = [children.children, ];
  obj = { style: footerText.footerContainer };
  obj1 = { style: footerText.separator };
  const items7 = [callback3(View, obj1), ];
  if (!!tmp10) {
    items7[1] = tmp13;
    obj.children = items7;
    items6[1] = tmp20(tmp21, obj);
    obj.children = items6;
    return tmp20(tmp21, obj);
  } else {
    obj2 = { bottom: true, style: footerText.footerButton };
    if (first1 === constants.CONFIRM_SUBMISSION) {
      obj3 = {};
      obj4 = { style: footerText.footerText };
      const intl3 = arg1(dependencyMap[19]).intl;
      obj4.children = intl3.string(arg1(dependencyMap[19]).t.d6qgY/);
      const items8 = [callback3(arg1(dependencyMap[10]).Text, obj4), , ];
      let tmp38 = `` !== first;
      if (tmp38) {
        obj5 = {};
        footerText = footerText.footerText;
        obj5.style = footerText;
        obj5.children = first;
        tmp38 = callback3(arg1(dependencyMap[10]).Text, obj5);
      }
      items8[1] = tmp38;
      first = arg1;
      const obj6 = { onPress: string };
      const intl4 = arg1(dependencyMap[19]).intl;
      string = intl4.string;
      obj6.text = string(arg1(dependencyMap[19]).t.geKm7t);
      obj6.variant = "destructive";
      obj6.loading = stateFromStores;
      obj6.disabled = stateFromStores;
      items8[2] = callback3(arg1(dependencyMap[20]).Button, obj6);
      obj3.children = items8;
      let tmp45Result = closure_13(closure_14, obj3);
      const tmp33 = closure_13;
      const tmp34 = closure_14;
    } else {
      const obj7 = { onPress: callback };
      if (first1 !== constants.REQUEST_SENT) {
        if (first1 !== constants.THANKS) {
          const intl = arg1(dependencyMap[19]).intl;
          let stringResult = intl.string(arg1(dependencyMap[19]).t.XiOHRX);
        }
        obj7.text = stringResult;
        tmp45Result = tmp45(tmp48, obj7);
      }
      const intl2 = arg1(dependencyMap[19]).intl;
      stringResult = intl2.string(arg1(dependencyMap[19]).t.i4jeWR);
      const tmp45 = callback3;
    }
    obj2.children = tmp45Result;
    callback3(arg1(dependencyMap[18]).SafeAreaPaddingView, obj2);
    const tmp22 = callback3;
  }
};
