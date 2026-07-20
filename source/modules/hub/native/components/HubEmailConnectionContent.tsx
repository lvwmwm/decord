// Module ID: 11747
// Function ID: 91228
// Name: HubEmailConnectionContent
// Dependencies: []
// Exports: default

// Module 11747 (HubEmailConnectionContent)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ HubEmailConnectionSteps: closure_9, INVITE_ROUTING_HUB_GUILD_ID: closure_10 } = arg1(dependencyMap[5]));
const MarketingURLs = arg1(dependencyMap[6]).MarketingURLs;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { container: { paddingHorizontal: 16 }, header: { visible: "r", transparent: "getSystemVersionMinor", animationType: "r" }, scrollViewContainer: { flexGrow: 2 }, title: { person_pouting: -0.0014069081515246523, cv: -0.0001058445630777106 }, description: { person_pouting: 24, cv: "recent_games_enabled" }, input: { marginBottom: 32 } };
obj = { borderRadius: importDefault(dependencyMap[9]).radii.lg };
obj.textInput = obj;
const tmp4 = arg1(dependencyMap[7]);
obj.growSpacing = { flexGrow: 2, minHeight: importDefault(dependencyMap[9]).space.PX_24 };
const obj1 = { flexGrow: 2, minHeight: importDefault(dependencyMap[9]).space.PX_24 };
obj.buttonContainer = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16 };
let closure_14 = obj.createStyles(obj);
const obj2 = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16 };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/hub/native/components/HubEmailConnectionContent.tsx");

export default function HubEmailConnectionContent(arg0) {
  let invite;
  let obj2;
  ({ onClose: closure_0, invite } = arg0);
  const importDefault = invite;
  let closure_2;
  let closure_3;
  let callback;
  let React;
  function _signup() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first(tmp);
    const _signup = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  let obj = arg1(closure_2[10]);
  closure_2 = obj.useNavigation();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  closure_3 = first;
  const tmp4 = callback(React.useState(false), 2);
  callback = tmp4[1];
  [obj2, closure_5] = callback(React.useState(null), 2);
  const ref = React.useRef(null);
  const intl = arg1(closure_2[14]).intl;
  const stringResult = intl.string(arg1(closure_2[14]).t.H1jCHH);
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
        const intl2 = arg1(closure_2[14]).intl;
        obj = { guildName: invite.guild.name, count: invite.approximate_member_count };
        formatToPlainStringResult = intl2.formatToPlainString(arg1(closure_2[14]).t.4T4+p1, obj);
      }
    }
  }
  obj = {};
  const obj1 = { ref };
  const items = [tmp.scrollViewContainer, ];
  obj2 = { paddingBottom: importDefault(closure_2[11])().insets.bottom + importDefault(closure_2[9]).space.PX_16 };
  items[1] = obj2;
  obj1.contentContainerStyle = items;
  const obj3 = { style: tmp.container };
  const tmp15 = _signup;
  const tmp5 = callback(React.useState(null), 2);
  const items1 = [callback2(ref, { style: tmp.header, children: callback2(arg1(closure_2[16]).StudyGroupsSpotIllustration, { scale: 0.75 }) }), , , ];
  const obj5 = { style: tmp.title, children: formatToPlainStringResult };
  items1[1] = callback2(arg1(closure_2[17]).Text, obj5);
  const obj6 = { style: tmp.description };
  const intl3 = arg1(closure_2[14]).intl;
  obj6.children = intl3.format(arg1(closure_2[14]).t.6kzaqs, {
    onClick() {
      invite(paths[19]).openLazy(callback(paths[21])(paths[20], paths.paths), "HubEmailConnectionDescriptionActionsheet");
    }
  });
  items1[2] = callback2(arg1(closure_2[18]).TextWithIOSLinkWorkaround, obj6);
  const obj8 = { "Bool(false)": -1119809180, "Bool(false)": 1895825852, "Bool(false)": 200, "Bool(false)": 49, "Bool(false)": 1634729984, "Bool(false)": -1522400960 };
  const obj4 = { style: tmp.header, children: callback2(arg1(closure_2[16]).StudyGroupsSpotIllustration, { scale: 0.75 }) };
  const obj7 = {
    onClick() {
      invite(paths[19]).openLazy(callback(paths[21])(paths[20], paths.paths), "HubEmailConnectionDescriptionActionsheet");
    }
  };
  const tmp16 = ref;
  const intl4 = arg1(closure_2[14]).intl;
  obj8.label = intl4.string(arg1(closure_2[14]).t.K/7rLI);
  const intl5 = arg1(closure_2[14]).intl;
  obj8.placeholder = intl5.string(arg1(closure_2[14]).t.ImAOh5);
  obj8.value = first;
  const intl6 = arg1(closure_2[14]).intl;
  obj8.hint = intl6.format(arg1(closure_2[14]).t.RPT0vj, { termsURL: MarketingURLs.TERMS, privacyURL: MarketingURLs.PRIVACY });
  obj8.textStyle = tmp.textInput;
  obj8.onChangeText = tmp2[1];
  obj8.style = tmp.input;
  obj8.clearButtonVisibility = arg1(closure_2[23]).ClearButtonVisibility.WITH_CONTENT;
  let anyErrorMessage;
  if (null != obj1) {
    anyErrorMessage = obj1.getAnyErrorMessage();
  }
  obj8.error = anyErrorMessage;
  obj8.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj8.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (null != current) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items1[3] = callback2(importDefault(closure_2[22]), obj8);
  obj3.children = items1;
  const items2 = [closure_13(tmp16, obj3), callback2(ref, { style: tmp.growSpacing }), ];
  const obj11 = { style: tmp.buttonContainer };
  const obj12 = { size: "lg" };
  const intl7 = arg1(closure_2[14]).intl;
  obj12.text = intl7.string(arg1(closure_2[14]).t.8vmKO0);
  obj12.onPress = function signup() {
    return _signup(...arguments);
  };
  obj12.loading = tmp4[0];
  obj11.children = callback2(arg1(closure_2[24]).Button, obj12);
  items2[2] = callback2(ref, obj11);
  obj1.children = items2;
  obj.children = closure_13(tmp15, obj1);
  return callback2(arg1(closure_2[15]).HubEmailConnectionScreen, obj);
};
