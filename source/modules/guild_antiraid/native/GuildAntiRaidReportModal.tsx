// Module ID: 12971
// Function ID: 100402
// Name: ReportModal
// Dependencies: [57, 31, 27, 12972, 33, 4130, 689, 1557, 4126, 3827, 5459, 1212, 5503, 9094, 4543, 5087, 10976, 5519, 2]
// Exports: default

// Module 12971 (ReportModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import COMMUNITY_PORTAL_SERVER_SAFETY_PAGE from "COMMUNITY_PORTAL_SERVER_SAFETY_PAGE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function ReportModal(onSubmit) {
  let importDefault;
  let require;
  ({ raidTypes: require, onChange: importDefault } = onSubmit);
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  const items = [tmp];
  let _slicedToArray = React.useCallback((arg0) => {
    const obj = { style: tmp.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: outer1_7(arg0) };
    return outer1_9(outer1_0(tmp[8]).Text, obj);
  }, items);
  let obj = { style: tmp.container };
  const callback = React.useCallback(() => {
    outer1_1(tmp[9]).openURL(outer1_6);
  }, []);
  obj = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.Hg8Ee7, { onClick: callback });
  const items1 = [callback2(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj), , ];
  obj = { style: tmp.formBody };
  const obj1 = {
    hasIcons: false,
    children: closure_8.map((arg0, arg1) => {
      let closure_0 = arg0;
      const obj = {
        start: 0 === arg1,
        end: arg1 === outer1_8.length - 1,
        label: callback(arg0),
        checked: closure_0.includes(arg0),
        onPress() {
          return outer1_1(closure_0);
        }
      };
      return outer1_9(outer1_0(tmp[13]).TableCheckboxRow, obj, arg0);
    })
  };
  obj.children = callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj1);
  items1[1] = callback2(View, obj);
  const obj2 = { style: items2 };
  items2 = [tmp.submitButtonContainer, { paddingBottom: importDefault(1557)().bottom + 16 }];
  const obj4 = { size: "md" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl2.string(require(1212) /* getSystemLocale */.t.geKm7t);
  obj4.onPress = onSubmit.onSubmit;
  obj2.children = callback2(require(4543) /* Button */.Button, obj4);
  items1[2] = callback2(View, obj2);
  obj.children = items1;
  return callback3(View, obj);
}
({ COMMUNITY_PORTAL_SERVER_SAFETY_PAGE: closure_6, getReportRaidTypeLabel: closure_7, REPORT_RAID_OPTIONS: closure_8 } = COMMUNITY_PORTAL_SERVER_SAFETY_PAGE);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerSubtitle = { textAlign: "center", marginTop: 8 };
_createForOfIteratorHelperLoose.formBody = { marginTop: 24 };
_createForOfIteratorHelperLoose.formRow = { paddingVertical: 2 };
let obj1 = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.submitButtonContainer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx");

export default function GuildAntiRaidReportModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const guildId = onCloseModal.guildId;
  const tmp = callback(React.useState([]), 2);
  const first = tmp[0];
  callback = tmp[1];
  const items = [onCloseModal, first, guildId];
  const screens = React.useMemo(() => (function getScreens(onCloseModal) {
    let closure_0;
    let closure_1;
    let closure_2;
    ({ raidTypes: closure_0, onChange: closure_1, onSubmit: closure_2 } = onCloseModal);
    let obj = {};
    obj = { ignoreKeyboard: true };
    const intl = onCloseModal(first[11]).intl;
    obj.title = intl.string(onCloseModal(first[11]).t.uYPGsS);
    obj.headerLeft = onCloseModal(first[15]).getHeaderCloseButton(onCloseModal.onCloseModal);
    obj.render = function render() {
      return outer3_9(outer3_12, { raidTypes: closure_0, onChange: closure_1, onSubmit: closure_2 });
    };
    obj["REPORT_RAID"] = obj;
    return obj;
  })({
    onCloseModal,
    raidTypes: first,
    onChange(arg0) {
      let closure_0 = arg0;
      outer1_3((arr) => {
        if (arr.includes(closure_0)) {
          let found = arr.filter((arg0) => arg0 !== outer1_0);
        } else {
          found = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
          found[arraySpreadResult] = closure_0;
          const sum = arraySpreadResult + 1;
        }
        return found;
      });
    },
    onSubmit() {
      const result = onCloseModal(first[16]).trackReportRaidViewed(outer1_1, outer1_2);
      const obj = onCloseModal(first[16]);
      onCloseModal(first[16]).handleReportRaid(outer1_1);
      outer1_0();
    }
  }), items);
  return callback2(onCloseModal(first[17]).Navigator, { screens, initialRouteName: "REPORT_RAID", headerStatusBarHeight: guildId(first[7])().top });
};
