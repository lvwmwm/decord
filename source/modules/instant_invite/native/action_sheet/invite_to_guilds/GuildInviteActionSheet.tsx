// Module ID: 12025
// Function ID: 92933
// Name: EmptyGuildList
// Dependencies: []
// Exports: default

// Module 12025 (EmptyGuildList)
function EmptyGuildList() {
  const obj = { containerStyle: callback5().emptyStateContainer };
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.2bfiLk);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.body = intl2.string(arg1(dependencyMap[7]).t.V6nAfF);
  obj.darkSource = importDefault(dependencyMap[8]);
  obj.lightSource = importDefault(dependencyMap[9]);
  return callback3(arg1(dependencyMap[6]).ThemedEmptyState, obj);
}
function GuildList(recipientId) {
  recipientId = recipientId.recipientId;
  const arg1 = recipientId;
  const importDefault = recipientId.source;
  let callback2;
  let closure_2 = callback5();
  let obj = arg1(closure_2[10]);
  const tmp = callback2(obj.useServerInviteRows(recipientId, recipientId.query), 2);
  const first = tmp[0];
  if (0 === first.length) {
    if (0 === arr2.length) {
      let items = [];
    }
    let tmp4 = 0 === first.length;
    if (!tmp4) {
      tmp4 = 0 === arr2.length;
    }
    callback2 = tmp4;
    obj = {
      renderItem(arg0) {
          let end;
          let item;
          let start;
          ({ item, start, end } = arg0);
          return callback(source(closure_2[14]), { row: item, recipientId, source, start, end });
        }
    };
    obj = {};
    let num3 = 0;
    if (tmp4) {
      num3 = 24;
    }
    obj.paddingTop = num3;
    obj.paddingBottom = importDefault(closure_2[12])().insets.bottom + importDefault(closure_2[5]).space.PX_16;
    obj.contentContainerStyle = obj;
    obj.sections = items;
    obj.renderSectionHeader = function renderSectionHeader(section) {
      section = section.section;
      let tmp = null;
      if (!tmp4) {
        let tmp2 = null;
        if (section.data.length > 0) {
          const obj = { style: sectionTitle.sectionTitle, children: section.title };
          tmp2 = callback(recipientId(sectionTitle[11]).Text, obj);
          const tmp4 = recipientId;
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
    return closure_6(arg1(closure_2[13]).UserProfileStackedActionSheetSectionList, obj);
  }
  const obj1 = {};
  const intl = arg1(closure_2[7]).intl;
  obj1.title = intl.string(arg1(closure_2[7]).t.u+Ithu);
  obj1.data = first;
  items = [obj1, ];
  const obj2 = {};
  const intl2 = arg1(closure_2[7]).intl;
  obj2.title = intl2.string(arg1(closure_2[7]).t.c5T+X/);
  obj2.data = tmp[1];
  items[1] = obj2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.content = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.searchbarWrapper = { rowGap: 8, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const obj1 = { rowGap: 8, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.sectionTitle = { backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.emptyStateContainer = { margin: 24 };
let closure_8 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx");

export default function GuildInviteActionSheet(arg0) {
  let recipientId;
  let source;
  ({ recipientId, source } = arg0);
  const tmp = callback5();
  const tmp2 = callback2(React.useState(""), 2);
  const callback = tmp2[1];
  let obj = {};
  const intl = callback(dependencyMap[7]).intl;
  obj.title = intl.string(callback(dependencyMap[7]).t.HvoZQD);
  obj = { openDisableCommunication: null, freezeEnabled: null };
  obj.header = callback3(callback(dependencyMap[15]).BottomSheetTitleHeader, obj);
  obj.contentStyles = tmp.content;
  obj = { style: tmp.searchbarWrapper };
  const obj1 = {
    onChange(arg0) {
      callback(arg0);
    }
  };
  const intl2 = callback(dependencyMap[7]).intl;
  obj1.placeholder = intl2.string(callback(dependencyMap[7]).t.uohsSv);
  const items = [callback3(callback(dependencyMap[17]).SearchField, obj1), ];
  const obj2 = { cachedAt: null, edpbxy: null };
  const intl3 = callback(dependencyMap[7]).intl;
  const obj3 = { xDays: importDefault(dependencyMap[18]).INVITE_OPTIONS_7_DAYS.label };
  obj2.children = intl3.format(callback(dependencyMap[7]).t.4UyUHh, obj3);
  items[1] = callback3(callback(dependencyMap[11]).Text, obj2);
  obj.children = items;
  const items1 = [callback4(View, obj), callback3(GuildList, { query: tmp2[0], recipientId, source })];
  obj.children = items1;
  return callback4(callback(dependencyMap[16]).BottomSheet, obj);
};
