// Module ID: 14754
// Function ID: 14755
// Name: UserSettingsGuildRoleSubscriptions
// Dependencies: [19, 17, 21, 4836, 4832, 1115, 1177, 14755, 14756, 14757, 14760, 14761, 2]
// Exports: default

// Module 14754 (UserSettingsGuildRoleSubscriptions)
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import useRestorePurchasesDefault from "useRestorePurchases" /* 14755 */;
import useActiveGuildSubscriptionsDefault from "useActiveGuildSubscriptions" /* 14756 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 14757 */;
import ManageSubscriptionCardDefault from "ManageSubscriptionCard" /* 14761 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp2;
const LoadingIndicatorDefault = tmp2(14760);
function GuildRoleSubscriptionsSectionHeader() {
  let intl;
  let intl2;
  let items;
  const tmp = closure_8();
  const obj = { style: tmp.sectionHeader, children: items };
  const obj2 = { variant: "eyebrow", color: "text-default", children: intl.string(intl3.t["KzCF/6"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [hasOwnProperty(Text, obj2), ];
  const obj3 = { style: tmp.sectionSubtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl3.t["Y+ucR7"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = hasOwnProperty(Text2, obj3);
  return metroRequire(_false, obj);
}
function renderSectionHeader(section) {
  let tmp = null;
  if (section.section.key === c7) {
    tmp = hasOwnProperty(GuildRoleSubscriptionsSectionHeader, {});
  }
  return tmp;
}
function ItemSeparator() {
  return hasOwnProperty(native.Spacer, { size: 8 });
}
({ View: c3, SectionList: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = "role-subscriptions";
let closure_8 = createStyles.createStyles({ container: { flex: 1 }, list: { flex: 1 }, listContentContainer: { paddingHorizontal: 16 }, sectionHeader: { paddingVertical: 24 }, sectionSubtitle: { marginTop: 4 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx");

export default function UserSettingsGuildRoleSubscriptions() {
  let items;
  let obj4;
  let tmp6Result;
  const tmp = closure_8();
  useRestorePurchasesDefault({ forceRestore: true });
  const tmp5 = useActiveGuildSubscriptionsDefault({ ensureFresh: true });
  const obj = GuildRoleSubscriptionsHooks;
  if (obj.useFetchListingsForSubscriptions(tmp5).loading) {
    tmp6Result = tmp6(LoadingIndicatorDefault, {});
  } else {
    const obj2 = { style: tmp.container, children: hasOwnProperty(React3, obj4) };
    obj4 = {
      contentContainerStyle: null,
      style: null,
      sections: items,
      stickySectionHeadersEnabled: false,
      keyExtractor(id) {
          return id.id;
        },
      renderSectionHeader,
      renderItem(subscription) {
          return closure_1_5(ManageSubscriptionCardDefault, { subscription: subscription.item });
        },
      ItemSeparatorComponent: ItemSeparator
    };
    ({ listContentContainer: obj3.contentContainerStyle, list: obj3.style } = tmp);
    items = [{ key, data: tmp5 }];
    const obj7 = { key, data: tmp5 };
    tmp6Result = tmp6(_false, obj2);
  }
  return tmp6Result;
};
