// Module ID: 15866
// Function ID: 121403
// Name: ExistingUserAgeGate
// Dependencies: []
// Exports: default

// Module 15866 (ExistingUserAgeGate)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ AgeGateAnalyticAction: closure_9, AgeGateSource: closure_10 } = arg1(dependencyMap[6]));
let closure_11 = arg1(dependencyMap[7]).ExistingUserAgeGateScreens;
const tmp2 = arg1(dependencyMap[6]);
({ AnalyticEvents: closure_12, HelpdeskArticles: closure_13 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[9]));
const tmp4 = arg1(dependencyMap[9]);
let closure_16 = arg1(dependencyMap[10]).createStyles({ container: {}, header: { value: null, on: null }, body: {}, inputGroup: { "Bool(false)": "column", "Bool(false)": "flex-end" }, buttonWrapper: { width: "100%" } });
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGate.tsx");

export default function ExistingUserAgeGate(onSuccess) {
  let NSFW_CHANNEL;
  let NSFW_VOICE_CHANNEL;
  let tmp11;
  let tmp13;
  onSuccess = onSuccess.onSuccess;
  const arg1 = onSuccess;
  const onClose = onSuccess.onClose;
  const importDefault = onClose;
  const source = onSuccess.source;
  const dependencyMap = source;
  let closure_3;
  let React;
  let View;
  let closure_7;
  let closure_8;
  let stateFromStores1;
  function submitBirthday(arg0) {
    return _submitBirthday(...arguments);
  }
  function _submitBirthday() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = navigation(tmp);
    const _submitBirthday = obj;
    return obj(...arguments);
  }
  function _submitBirthdayWithAgeConfirmation() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = navigation(tmp);
    const _submitBirthdayWithAgeConfirmation = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  let obj = arg1(dependencyMap[11]);
  const navigation = obj.useNavigation();
  closure_3 = navigation;
  let obj1 = arg1(dependencyMap[12]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  const callback = stateFromStores;
  let tmp5 = source === submitBirthday.NSFW_SERVER;
  ({ NSFW_CHANNEL, NSFW_VOICE_CHANNEL } = submitBirthday);
  if (!tmp5) {
    tmp5 = source === submitBirthday.NSFW_SERVER_INVITE;
  }
  if (!tmp5) {
    tmp5 = source === submitBirthday.NSFW_SERVER_INVITE_EMBED;
  }
  React = tmp5;
  const tmp8 = callback(React.useState(null), 2);
  const first = tmp8[0];
  View = first;
  [tmp11, closure_7] = callback(React.useState(null), 2);
  const tmp10 = callback(React.useState(null), 2);
  [tmp13, closure_8] = callback(React.useState(false), 2);
  const tmp12 = callback(React.useState(false), 2);
  let obj2 = arg1(dependencyMap[12]);
  const items1 = [closure_7];
  stateFromStores1 = obj2.useStateFromStores(items1, () => action.getAction());
  const items2 = [stateFromStores1, onClose];
  const effect = React.useEffect(() => {
    if (null != stateFromStores1) {
      if (null != onClose) {
        onClose();
      }
    }
  }, items2);
  const items3 = [stateFromStores, onSuccess, tmp5, navigation];
  const effect1 = React.useEffect(() => {
    let nsfwAllowed;
    if (null != stateFromStores) {
      nsfwAllowed = stateFromStores.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      if (tmp5) {
        navigation.push(_submitBirthday.Pawtect);
      }
    }
    let nsfwAllowed1;
    if (null != stateFromStores) {
      nsfwAllowed1 = stateFromStores.nsfwAllowed;
    }
    if (null != nsfwAllowed1) {
      onSuccess();
    }
  }, items3);
  const items4 = [source];
  const effect2 = React.useEffect(() => {
    let obj = onClose(source[13]);
    obj = { source, action: stateFromStores1.AGE_GATE_OPEN };
    obj.track(_submitBirthdayWithAgeConfirmation.AGE_GATE_ACTION, obj);
  }, items4);
  if (source !== NSFW_CHANNEL) {
    if (source !== NSFW_VOICE_CHANNEL) {
      if (!tmp5) {
        const intl = arg1(dependencyMap[14]).intl;
        if (tmp4) {
          let stringResult = intl.string(tmp19(tmp20[14]).t.mhUrKS);
        } else {
          obj = {};
          let obj4 = importDefault(tmp20[15]);
          obj.helpURL = obj4.getArticleURL(constants.AGE_GATE);
          stringResult = intl.format(tmp19(tmp20[14]).t.EcJBEI, obj);
        }
      }
      const intl3 = arg1(dependencyMap[14]).intl;
      const string = intl3.string;
      const t = arg1(dependencyMap[14]).t;
      if (tmp5) {
        let stringResult1 = string(t.H0SG/g);
      } else if (tmp4) {
        stringResult1 = string(t.M7mt7m);
      } else {
        stringResult1 = string(t.F8otRo);
      }
      const tmp29 = !importDefault(dependencyMap[20])(first);
      let stringResult2 = tmp11;
      if (tmp29) {
        stringResult2 = tmp11;
        if (null != first) {
          const intl4 = arg1(dependencyMap[14]).intl;
          stringResult2 = intl4.string(arg1(dependencyMap[14]).t.udnqh6);
        }
      }
      obj = { top: true, style: tmp.container };
      obj1 = { style: tmp.header, children: stringResult1 };
      const items5 = [callback2(arg1(dependencyMap[22]).Text, obj1), , , ];
      obj2 = { "Null": -1493172224, "Null": 1962934272, alignItems: 0, style: tmp.body, children: stringResult };
      items5[1] = callback2(arg1(dependencyMap[22]).Text, obj2);
      const obj3 = { style: tmp.inputGroup, ref };
      const intl5 = arg1(dependencyMap[14]).intl;
      obj3.label = intl5.string(arg1(dependencyMap[14]).t.xNpFJ6);
      obj3.date = first;
      obj3.onChangeDate = tmp8[1];
      obj3.error = stringResult2;
      items5[2] = callback2(importDefault(dependencyMap[23]), obj3);
      obj4 = { style: tmp.buttonWrapper };
      const obj5 = { loading: tmp13, disabled: tmp13 };
      const intl6 = arg1(dependencyMap[14]).intl;
      obj5.text = intl6.string(arg1(dependencyMap[14]).t.PDTjLN);
      obj5.onPress = function submitBirthdayWithAgeConfirmation() {
        return _submitBirthdayWithAgeConfirmation(...arguments);
      };
      obj5.grow = true;
      obj4.children = callback2(arg1(dependencyMap[24]).Button, obj5);
      items5[3] = callback2(View, obj4);
      obj.children = items5;
      return closure_15(arg1(dependencyMap[21]).SafeAreaPaddingView, obj);
    }
  }
  const intl2 = arg1(dependencyMap[14]).intl;
  let obj6 = {};
  obj6 = importDefault(dependencyMap[15]);
  obj6.helpURL = obj6.getArticleURL(constants.AGE_GATE);
  stringResult = intl2.format(arg1(dependencyMap[14]).t.n3QjDE, obj6);
};
