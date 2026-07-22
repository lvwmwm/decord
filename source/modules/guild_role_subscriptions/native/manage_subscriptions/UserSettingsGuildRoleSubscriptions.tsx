// Module ID: 13984
// Function ID: 106248
// Name: GuildRoleSubscriptionsSectionHeader
// Dependencies: []
// Exports: default

// Module 13984 (GuildRoleSubscriptionsSectionHeader)
function GuildRoleSubscriptionsSectionHeader() {
  const tmp = callback3();
  let obj = { style: tmp.sectionHeader };
  obj = { cachedAt: "/assets/images/native/premium/illustrations", edpbxy: 51 };
  const intl = arg1(dependencyMap[5]).intl;
  obj.children = intl.string(arg1(dependencyMap[5]).t.KzCF/6);
  const items = [callback(arg1(dependencyMap[4]).Text, obj), ];
  obj = { style: tmp.sectionSubtitle };
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.children = intl2.string(arg1(dependencyMap[5]).t.Y+ucR7);
  items[1] = callback(arg1(dependencyMap[4]).Text, obj);
  obj.children = items;
  return callback2(closure_3, obj);
}
function renderSectionHeader(section) {
  let tmp = null;
  if (section.section.key === closure_7) {
    tmp = callback(GuildRoleSubscriptionsSectionHeader, {});
  }
  return tmp;
}
function ItemSeparator() {
  return callback(arg1(dependencyMap[6]).Spacer, { size: 8 });
}
importAll(dependencyMap[0]);
({ View: closure_3, SectionList: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = "role-subscriptions";
const tmp4 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles({ container: { flex: 1 }, list: { flex: 1 }, listContentContainer: { paddingHorizontal: 16 }, sectionHeader: { paddingVertical: 24 }, sectionSubtitle: { marginTop: 4 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx");

export default function UserSettingsGuildRoleSubscriptions() {
  const tmp = callback3();
  importDefault(dependencyMap[7])({ forceRestore: true });
  const tmp3 = importDefault(dependencyMap[8])({ ensureFresh: true });
  let obj = arg1(dependencyMap[9]);
  if (obj.useFetchListingsForSubscriptions(tmp3).loading) {
    let tmp4Result = tmp4(importDefault(dependencyMap[10]), {});
  } else {
    obj = { style: tmp.container };
    obj = {};
    ({ listContentContainer: obj3.contentContainerStyle, list: obj3.style } = tmp);
    const obj1 = { key: closure_7, data: tmp3 };
    const items = [obj1];
    obj.sections = items;
    obj.stickySectionHeadersEnabled = false;
    obj.keyExtractor = function keyExtractor(id) {
      return id.id;
    };
    obj.renderSectionHeader = renderSectionHeader;
    obj.renderItem = function renderItem(subscription) {
      return callback2(callback(closure_2[11]), { subscription: subscription.item });
    };
    obj.ItemSeparatorComponent = ItemSeparator;
    obj.children = callback(closure_4, obj);
    tmp4Result = tmp4(closure_3, obj);
  }
  return tmp4Result;
};
