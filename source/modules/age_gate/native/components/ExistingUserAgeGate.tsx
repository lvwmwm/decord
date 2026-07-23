// Module ID: 15983
// Function ID: 123576
// Name: ExistingUserAgeGate
// Dependencies: [5, 57, 31, 27, 1342, 1849, 1197, 15981, 653, 33, 4130, 1456, 566, 675, 1212, 1920, 44, 14745, 4337, 3712, 14768, 5121, 4126, 15984, 4543, 2]
// Exports: default

// Module 15983 (ExistingUserAgeGate)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import closure_5 from "result";
import { View } from "get ActivityIndicator";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import result from "result";
import { ExistingUserAgeGateScreens as closure_11 } from "ExistingUserAgeGateScreens";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_9;
const require = arg1;
({ AgeGateAnalyticAction: closure_9, AgeGateSource: closure_10 } = result);
({ AnalyticEvents: closure_12, HelpdeskArticles: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 8, textAlign: "center" }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, inputGroup: { marginBottom: 16, width: "100%" }, buttonWrapper: { width: "100%" } });
result = require("result").fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGate.tsx");

export default function ExistingUserAgeGate(onSuccess) {
  let NSFW_CHANNEL;
  let NSFW_VOICE_CHANNEL;
  let c7;
  let c8;
  let tmp11;
  let tmp13;
  onSuccess = onSuccess.onSuccess;
  const onClose = onSuccess.onClose;
  const source = onSuccess.source;
  let navigation;
  let React;
  let first;
  c7 = undefined;
  c8 = undefined;
  let stateFromStores1;
  function submitBirthday(arg0) {
    return _submitBirthday(...arguments);
  }
  function _submitBirthday() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = navigation(tmp);
    return obj(...arguments);
  }
  function _submitBirthdayWithAgeConfirmation() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = navigation(tmp);
    return obj(...arguments);
  }
  const tmp = callback2();
  let obj = onSuccess(source[11]);
  navigation = obj.useNavigation();
  let obj1 = onSuccess(source[12]);
  const items = [c8];
  const stateFromStores = obj1.useStateFromStores(items, () => _undefined2.getCurrentUser());
  let tmp5 = source === submitBirthday.NSFW_SERVER;
  ({ NSFW_CHANNEL, NSFW_VOICE_CHANNEL } = submitBirthday);
  if (!tmp5) {
    tmp5 = source === submitBirthday.NSFW_SERVER_INVITE;
  }
  if (!tmp5) {
    tmp5 = source === submitBirthday.NSFW_SERVER_INVITE_EMBED;
  }
  React = tmp5;
  const tmp8 = stateFromStores(React.useState(null), 2);
  first = tmp8[0];
  [tmp11, c7] = stateFromStores(React.useState(null), 2);
  const tmp10 = stateFromStores(React.useState(null), 2);
  [tmp13, c8] = stateFromStores(React.useState(false), 2);
  const tmp12 = stateFromStores(React.useState(false), 2);
  let obj2 = onSuccess(source[12]);
  const items1 = [c7];
  stateFromStores1 = obj2.useStateFromStores(items1, () => _undefined.getAction());
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
      if (c5) {
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
        const intl = onSuccess(source[14]).intl;
        if (tmp4) {
          let stringResult = intl.string(tmp19(tmp20[14]).t.mhUrKS);
        } else {
          obj = {};
          let obj4 = onClose(tmp20[15]);
          obj.helpURL = obj4.getArticleURL(constants.AGE_GATE);
          stringResult = intl.format(tmp19(tmp20[14]).t.EcJBEI, obj);
        }
      }
      const intl3 = onSuccess(source[14]).intl;
      const string = intl3.string;
      const t = onSuccess(source[14]).t;
      if (tmp5) {
        let stringResult1 = string(t["H0SG/g"]);
      } else if (tmp4) {
        stringResult1 = string(t.M7mt7m);
      } else {
        stringResult1 = string(t.F8otRo);
      }
      const tmp29 = !onClose(source[20])(first);
      let stringResult2 = tmp11;
      if (tmp29) {
        stringResult2 = tmp11;
        if (null != first) {
          const intl4 = onSuccess(source[14]).intl;
          stringResult2 = intl4.string(onSuccess(source[14]).t.udnqh6);
        }
      }
      obj = { top: true, style: tmp.container };
      obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult1 };
      const items5 = [callback(onSuccess(source[22]).Text, obj1), , , ];
      obj2 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: stringResult };
      items5[1] = callback(onSuccess(source[22]).Text, obj2);
      const obj3 = { style: tmp.inputGroup, ref };
      const intl5 = onSuccess(source[14]).intl;
      obj3.label = intl5.string(onSuccess(source[14]).t.xNpFJ6);
      obj3.date = first;
      obj3.onChangeDate = tmp8[1];
      obj3.error = stringResult2;
      items5[2] = callback(onClose(source[23]), obj3);
      obj4 = { style: tmp.buttonWrapper };
      const obj5 = { loading: tmp13, disabled: tmp13 };
      const intl6 = onSuccess(source[14]).intl;
      obj5.text = intl6.string(onSuccess(source[14]).t.PDTjLN);
      obj5.onPress = function submitBirthdayWithAgeConfirmation() {
        return _submitBirthdayWithAgeConfirmation(...arguments);
      };
      obj5.grow = true;
      obj4.children = callback(onSuccess(source[24]).Button, obj5);
      items5[3] = callback(first, obj4);
      obj.children = items5;
      return closure_15(onSuccess(source[21]).SafeAreaPaddingView, obj);
    }
  }
  const intl2 = onSuccess(source[14]).intl;
  let obj6 = {};
  obj6 = onClose(source[15]);
  obj6.helpURL = obj6.getArticleURL(constants.AGE_GATE);
  stringResult = intl2.format(onSuccess(source[14]).t.n3QjDE, obj6);
};
