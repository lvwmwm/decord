// Module ID: 11765
// Function ID: 91325
// Name: HubEmailConnectionContent
// Dependencies: [5, 57, 31, 27, 1348, 11753, 653, 33, 4130, 689, 1456, 5160, 11766, 4029, 1212, 11761, 5807, 4126, 5459, 4098, 11767, 1934, 9000, 1273, 4543, 2]
// Exports: default

// Module 11765 (HubEmailConnectionContent)
import closure_3 from "HubEmailConnectionSteps";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import HubEmailConnectionSteps from "HubEmailConnectionSteps";
import { MarketingURLs } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ HubEmailConnectionSteps: closure_9, INVITE_ROUTING_HUB_GUILD_ID: closure_10 } = HubEmailConnectionSteps);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingHorizontal: 16 }, header: { marginTop: 16, marginBottom: 16, alignSelf: "center" }, scrollViewContainer: { flexGrow: 2 }, title: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 24 }, input: { marginBottom: 32 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.textInput = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.growSpacing = { flexGrow: 2, minHeight: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj1 = { flexGrow: 2, minHeight: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.buttonContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("result").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionContent.tsx");

export default function HubEmailConnectionContent(arg0) {
  let c5;
  let invite;
  let obj2;
  let require;
  ({ onClose: require, invite } = arg0);
  let dependencyMap;
  let first;
  let callback;
  let React;
  function _signup() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(1456) /* useNavigation */;
  dependencyMap = obj.useNavigation();
  const tmp2 = callback(React.useState(""), 2);
  first = tmp2[0];
  const tmp4 = callback(React.useState(false), 2);
  callback = tmp4[1];
  [obj2, c5] = callback(React.useState(null), 2);
  const ref = React.useRef(null);
  const intl = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1212) /* getSystemLocale */.t.H1jCHH);
  let guild;
  if (null != invite) {
    guild = invite.guild;
  }
  let formatToPlainStringResult = stringResult;
  if (null != guild) {
    formatToPlainStringResult = stringResult;
    if (invite.guild.id !== closure_10) {
      let prop;
      if (null != invite) {
        prop = invite.approximate_member_count;
      }
      formatToPlainStringResult = stringResult;
      if (null != prop) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj = { guildName: invite.guild.name, count: invite.approximate_member_count };
        formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["4T4+p1"], obj);
      }
    }
  }
  obj = {};
  const obj1 = { ref };
  const items = [tmp.scrollViewContainer, ];
  obj2 = { paddingBottom: invite(5160)().insets.bottom + invite(689).space.PX_16 };
  items[1] = obj2;
  obj1.contentContainerStyle = items;
  const obj3 = { style: tmp.container };
  const tmp15 = _signup;
  const tmp5 = callback(React.useState(null), 2);
  const items1 = [callback2(ref, { style: tmp.header, children: callback2(require(5807) /* AccountAgeTier10LargeBadge */.StudyGroupsSpotIllustration, { scale: 0.75 }) }), , , ];
  const obj5 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, accessibilityRole: "header", children: formatToPlainStringResult };
  items1[1] = callback2(require(4126) /* Text */.Text, obj5);
  const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl3.format(require(1212) /* getSystemLocale */.t["6kzaqs"], {
    onClick() {
      invite(paths[19]).openLazy(outer1_0(paths[21])(paths[20], paths.paths), "HubEmailConnectionDescriptionActionsheet");
    }
  });
  items1[2] = callback2(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj6);
  const obj8 = { label: null, placeholder: null, value: null, textContentType: "emailAddress", autoCapitalize: "none", keyboardType: "email-address" };
  const obj4 = { style: tmp.header, children: callback2(require(5807) /* AccountAgeTier10LargeBadge */.StudyGroupsSpotIllustration, { scale: 0.75 }) };
  const obj7 = {
    onClick() {
      invite(paths[19]).openLazy(outer1_0(paths[21])(paths[20], paths.paths), "HubEmailConnectionDescriptionActionsheet");
    }
  };
  const tmp16 = ref;
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj8.label = intl4.string(require(1212) /* getSystemLocale */.t["K/7rLI"]);
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj8.placeholder = intl5.string(require(1212) /* getSystemLocale */.t.ImAOh5);
  obj8.value = first;
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj8.hint = intl6.format(require(1212) /* getSystemLocale */.t.RPT0vj, { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  obj8.textStyle = tmp.textInput;
  obj8.onChangeText = tmp2[1];
  obj8.style = tmp.input;
  obj8.clearButtonVisibility = require(1273) /* Button */.ClearButtonVisibility.WITH_CONTENT;
  let anyErrorMessage;
  if (null != obj1) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  obj8.error = anyErrorMessage;
  obj8.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = outer1_6.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj8.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = outer1_6.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items1[3] = callback2(invite(9000), obj8);
  obj3.children = items1;
  const items2 = [closure_13(tmp16, obj3), callback2(ref, { style: tmp.growSpacing }), ];
  const obj11 = { style: tmp.buttonContainer };
  const obj12 = { size: "lg" };
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj12.text = intl7.string(require(1212) /* getSystemLocale */.t["8vmKO0"]);
  obj12.onPress = function signup() {
    return _signup(...arguments);
  };
  obj12.loading = tmp4[0];
  obj11.children = callback2(require(4543) /* Button */.Button, obj12);
  items2[2] = callback2(ref, obj11);
  obj1.children = items2;
  obj.children = closure_13(tmp15, obj1);
  return callback2(require(11761) /* getScreens */.HubEmailConnectionScreen, obj);
};
