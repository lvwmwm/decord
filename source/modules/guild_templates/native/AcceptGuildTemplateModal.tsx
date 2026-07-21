// Module ID: 10934
// Function ID: 85038
// Name: ConnectedAcceptGuildTemplate
// Dependencies: []
// Exports: default

// Module 10934 (ConnectedAcceptGuildTemplate)
function ConnectedAcceptGuildTemplate(code) {
  code = code.code;
  const arg1 = code;
  let obj = arg1(closure_3[8]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => guildTemplate.getGuildTemplate(code));
  const importDefault = stateFromStores;
  const tmp2 = callback3();
  const tmp4 = callback2(React.useState(importAll(closure_3[9]).getGuildNameSuggestion()), 2);
  const first = tmp4[0];
  const importAll = first;
  closure_3 = tmp4[1];
  const tmp6 = callback2(React.useState(null), 2);
  const first1 = tmp6[0];
  const callback = first1;
  const callback2 = tmp6[1];
  const tmp8 = callback2(React.useState(null), 2);
  const React = tmp8[1];
  importDefault(closure_3[10])(stateFromStores);
  obj = { top: true, style: tmp2.container };
  obj = {
    code,
    guildTemplate: stateFromStores,
    name: first,
    setName(arg0) {
      return callback(arg0);
    },
    icon: first1,
    errors: tmp8[0]
  };
  // CreateGeneratorClosureLongIndex (0x67)
  const obj2 = importAll(closure_3[9]);
  obj.chooseIcon = callback(tmp);
  obj.createServer = function createServer() {
    if (null != stateFromStores) {
      const obj = stateFromStores(closure_3[14]);
      stateFromStores(closure_3[14]).acceptGuildTemplate(stateFromStores.code, first, first1).then(() => callback(closure_3[15]).hideModal(), (arg0) => callback2(arg0));
      const acceptGuildTemplateResult = stateFromStores(closure_3[14]).acceptGuildTemplate(stateFromStores.code, first, first1);
    }
  };
  obj.children = jsx(importDefault(closure_3[12]), obj);
  return jsx(arg1(closure_3[11]).SafeAreaPaddingView, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const UPLOAD_MEDIUM_SIZE = arg1(dependencyMap[4]).UPLOAD_MEDIUM_SIZE;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { marginTop: arg1(dependencyMap[7]).NAV_BAR_HEIGHT };
obj.container = obj;
let closure_10 = obj.createStyles(obj);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_templates/native/AcceptGuildTemplateModal.tsx");

export default function AcceptGuildTemplateModal(code) {
  code = code.code;
  const arg1 = code;
  const items = [code];
  const screens = React.useMemo(() => function getScreens(arg0) {
    let obj = {};
    obj = {
      headerLeft: arg0(closure_3[16]).getHeaderCloseButton(() => callback(closure_3[15]).hideModal()),
      render() {
        const merged = Object.assign(arg0);
        return callback2(closure_11, {});
      }
    };
    obj["ACCEPT_GUILD_TEMPLATE"] = obj;
    return obj;
  }({ code }), items);
  return jsx(arg1(dependencyMap[17]).Navigator, { initialRouteName: "ACCEPT_GUILD_TEMPLATE", screens });
};
