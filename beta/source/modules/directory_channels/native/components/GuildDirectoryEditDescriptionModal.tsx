// Module ID: 11798
// Function ID: 11799
// Name: GuildDirectoryEditDescriptionModal
// Dependencies: [5, 19, 17, 21, 4836, 5994, 11799, 11797, 6544, 4832, 1115, 11800, 5936, 6421, 2]
// Exports: default

// Module 11798 (GuildDirectoryEditDescriptionModal)
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators" /* 11797 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
function GuildDirectoryEditDescription(entry) {
  let Text;
  let intl;
  let intl2;
  let items;
  let obj2;
  let obj4;
  let obj5;
  entry = entry.entry;
  let obj = function _onSubmit() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_2;
      let closure_0 = arg0;
      let closure_1 = value;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj3 = tmp3(c3[6]);
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj3.updateDirectoryEntry(entry.channelId, entry.guildId, closure_0, closure_1), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            obj = closure_1(c3[7]);
            obj.close();
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_9();
  obj = { top: true, style: tmp.safeArea, children: closure_8(closure_6, obj2) };
  obj2 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: items };
  let obj3 = { style: tmp.header, children: closure_7(Text, obj4) };
  const SafeAreaPaddingView = entry(6544).SafeAreaPaddingView;
  obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.format(entry(1115).t.w9tsNk, obj5) };
  Text = entry(4832).Text;
  intl = entry(1115).intl;
  obj5 = { guildName: entry.name };
  items = [closure_7(closure_5, obj3), ];
  let obj6 = {
    onSubmit(arg0, arg1) {
      return obj(...arguments);
    },
    buttonLabel: intl2.string(entry(1115).t["R3BPH+"]),
    entry,
    directoryChannelId: entry.channelId
  };
  const tmp2 = obj(11800);
  intl2 = entry(1115).intl;
  items[1] = closure_7(tmp2, obj6);
  return closure_7(SafeAreaPaddingView, obj);
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { safeArea: obj2, container: { flex: 1 }, title: { marginBottom: 8, textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 } };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flex: 1 };
let closure_9 = createStyles.createStyles(obj);
const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx");

export default function GuildDirectoryEditDescriptionModal(arg0) {
  let closure_0;
  let obj2;
  let obj4;
  let obj = { screens: obj2, initialRouteName: EDIT_DESCRIPTION };
  _require = arg0;
  obj2 = {};
  const obj3 = {
    fullscreen: true,
    headerLeft: obj4.getHeaderCloseButton(GuildDirectoryEditDescriptionModalActionCreatorsDefault.close),
    headerTitle() {
      return null;
    },
    render() {
      const obj = {};
      const merged = Object.assign(closure_0);
      return metroImportDefault(GuildDirectoryEditDescription, obj);
    }
  };
  const Navigator = require("Navigator").Navigator;
  obj2[EDIT_DESCRIPTION] = obj3;
  obj4 = require("NavigatorHeader");
  return closure_7(Navigator, obj);
};
