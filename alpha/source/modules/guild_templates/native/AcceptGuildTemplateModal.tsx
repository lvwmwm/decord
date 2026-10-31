// Module ID: 13205
// Function ID: 13206
// Name: AcceptGuildTemplateModal
// Dependencies: [5, 32, 19, 7637, 1072, 21, 5014, 5586, 504, 6901, 13206, 7292, 13207, 8220, 13217, 13204, 6998, 7169, 2]
// Exports: default

// Module 13205 (AcceptGuildTemplateModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import NavigatorConstants from "NavigatorConstants" /* 5586 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import AcceptGuildTemplateActionCreatorsDefault from "AcceptGuildTemplateActionCreators" /* 13217 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7637 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c2, c3, dependencyMap;

let obj2;
function ConnectedAcceptGuildTemplate(code) {
  let closure_3;
  let closure_5;
  let closure_6;
  let first1;
  let first2;
  let name;
  code = code.code;
  name = undefined;
  dependencyMap = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  const tmp = closure_10();
  let obj = code(504);
  const items = [GuildTemplateStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildTemplateStore.getGuildTemplate(code));
  const useState = react.useState;
  let obj2 = name(6901);
  [name, dependencyMap] = useState(obj2.getGuildNameSuggestion());
  [first1, _slicedToArray] = react.useState(null);
  [first2, react] = react.useState(null);
  stateFromStores(13206)(stateFromStores);
  const SafeAreaPaddingView = code(7292).SafeAreaPaddingView;
  let obj4 = {
    code,
    guildTemplate: stateFromStores,
    name,
    setName(arg0) {
      return closure_3(arg0);
    },
    icon: first1,
    errors: first2,
    chooseIcon: first1(function*(arg0, value) {
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          let base64;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp;
              base64 = undefined;
              const obj5 = { size };
              c2 = 1;
              const obj2 = tmp4(c3[13]);
              c3 = 1;
              const obj6 = { value: obj2.openImagePicker(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            base64 = value.base64;
            if (null != base64) {
              closure_129_5(base64);
            }
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    }),
    createServer: function handleCreateServer() {
      if (null != stateFromStores) {
        let obj = AcceptGuildTemplateActionCreatorsDefault;
        const acceptGuildTemplateResult = obj.acceptGuildTemplate(tmp.code, first, first1);
        acceptGuildTemplateResult.then(() => {
          const obj = stateFromStores(closure_1_3[15]);
          return obj.hideModal();
        }, (arg0) => closure_1_6(arg0));
      }
    }
  };
  stateFromStores(13207);
  return <SafeAreaPaddingView top style={tmp.container}>{null}</SafeAreaPaddingView>;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, marginTop: NavigatorConstants.NAV_BAR_HEIGHT };
let closure_10 = createStyles.createStyles(obj);
const ACCEPT_GUILD_TEMPLATE = "ACCEPT_GUILD_TEMPLATE";
const result = size.fileFinishedImporting("modules/guild_templates/native/AcceptGuildTemplateModal.tsx");

export default function AcceptGuildTemplateModal(code) {
  code = code.code;
  const items = [code];
  const memo = react.useMemo(() => {
    let obj4;
    let obj = { code };
    const obj2 = {};
    const obj3 = {
      title: "",
      fullscreen: true,
      headerLeft: obj4.getHeaderCloseButton(() => {
        const obj = closure_1_1(closure_1_3[15]);
        return obj.hideModal();
      }),
      render() {
        obj = {};
        const merged = Object.assign(obj);
        return closure_2_9(closure_2_11, obj);
      }
    };
    obj2[ACCEPT_GUILD_TEMPLATE] = obj3;
    obj4 = NavigatorHeader;
    return obj2;
  }, items);
  return jsx(code(7169).Navigator, { initialRouteName: ACCEPT_GUILD_TEMPLATE, screens: memo });
};
