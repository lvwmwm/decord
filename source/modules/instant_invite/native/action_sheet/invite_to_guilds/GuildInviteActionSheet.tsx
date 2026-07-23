// Module ID: 12139
// Function ID: 95084
// Name: EmptyGuildList
// Dependencies: [57, 31, 27, 33, 4130, 689, 1273, 1212, 12140, 12141, 12137, 4126, 5160, 11637, 12142, 5186, 5187, 5772, 8483, 2]
// Exports: default

// Module 12139 (EmptyGuildList)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function EmptyGuildList() {
  const obj = { containerStyle: _createForOfIteratorHelperLoose().emptyStateContainer };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["2bfiLk"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.V6nAfF);
  obj.darkSource = importDefault(12140);
  obj.lightSource = importDefault(12141);
  return callback2(require(1273) /* Button */.ThemedEmptyState, obj);
}
function GuildList(recipientId) {
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  let callback;
  const dependencyMap = _createForOfIteratorHelperLoose();
  let obj = recipientId(12137);
  let tmp = callback(obj.useServerInviteRows(recipientId, recipientId.query), 2);
  const first = tmp[0];
  if (0 === first.length) {
    if (0 === arr2.length) {
      let items = [];
    }
    let tmp4 = 0 === first.length;
    if (!tmp4) {
      tmp4 = 0 === arr2.length;
    }
    callback = tmp4;
    obj = {
      renderItem(arg0) {
          let end;
          let item;
          let start;
          ({ item, start, end } = arg0);
          return outer1_6(source(sectionTitle[14]), { row: item, recipientId, source, start, end });
        }
    };
    obj = {};
    let num3 = 0;
    if (tmp4) {
      num3 = 24;
    }
    obj.paddingTop = num3;
    obj.paddingBottom = source(5160)().insets.bottom + source(689).space.PX_16;
    obj.contentContainerStyle = obj;
    obj.sections = items;
    obj.renderSectionHeader = function renderSectionHeader(section) {
      section = section.section;
      let tmp = null;
      if (!c3) {
        let tmp2 = null;
        if (section.data.length > 0) {
          const obj = { style: sectionTitle.sectionTitle, variant: "text-sm/semibold", color: "text-default", children: section.title };
          tmp2 = outer1_6(recipientId(sectionTitle[11]).Text, obj);
        }
        tmp = tmp2;
      }
      return tmp;
    };
    obj.stickySectionHeadersEnabled = true;
    obj.keyExtractor = function keyExtractor(guild) {
      return guild.guild.id;
    };
    obj.ListEmptyComponent = EmptyGuildList;
    return closure_6(recipientId(11637).UserProfileStackedActionSheetSectionList, obj);
  }
  const obj1 = {};
  const intl = recipientId(1212).intl;
  obj1.title = intl.string(recipientId(1212).t["u+Ithu"]);
  obj1.data = first;
  items = [obj1, ];
  const obj2 = {};
  const intl2 = recipientId(1212).intl;
  obj2.title = intl2.string(recipientId(1212).t["c5T+X/"]);
  obj2.data = tmp[1];
  items[1] = obj2;
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.searchbarWrapper = { rowGap: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj2 = { paddingBottom: 6, paddingTop: 24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.sectionTitle = obj2;
_createForOfIteratorHelperLoose.emptyStateContainer = { margin: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { rowGap: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx");

export default function GuildInviteActionSheet(arg0) {
  let recipientId;
  let source;
  ({ recipientId, source } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(""), 2);
  const _require = tmp2[1];
  let obj = {};
  const intl = _require(1212).intl;
  obj.title = intl.string(_require(1212).t.HvoZQD);
  obj = { scrollable: true, startExpanded: true };
  obj.header = callback2(_require(5186).BottomSheetTitleHeader, obj);
  obj.contentStyles = tmp.content;
  obj = { style: tmp.searchbarWrapper };
  const obj1 = {
    onChange(arg0) {
      callback(arg0);
    }
  };
  const intl2 = _require(1212).intl;
  obj1.placeholder = intl2.string(_require(1212).t.uohsSv);
  const items = [callback2(_require(5772).SearchField, obj1), ];
  const obj2 = { variant: "text-xs/medium", color: "text-subtle" };
  const intl3 = _require(1212).intl;
  const obj3 = { xDays: importDefault(8483).INVITE_OPTIONS_7_DAYS.label };
  obj2.children = intl3.format(_require(1212).t["4UyUHh"], obj3);
  items[1] = callback2(_require(4126).Text, obj2);
  obj.children = items;
  const items1 = [callback3(View, obj), callback2(GuildList, { query: tmp2[0], recipientId, source })];
  obj.children = items1;
  return callback3(_require(5187).BottomSheet, obj);
};
