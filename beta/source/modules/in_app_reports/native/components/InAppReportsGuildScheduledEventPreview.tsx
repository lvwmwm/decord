// Module ID: 12463
// Function ID: 12464
// Name: InAppReportsGuildScheduledEventPreview
// Dependencies: [19, 17, 2067, 21, 4836, 576, 504, 4683, 4832, 1115, 5896, 2]
// Exports: default

// Module 12463 (InAppReportsGuildScheduledEventPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: obj2, title: { lineHeight: 16, marginBottom: 8 }, itemContainer: obj3, guildInfo: { display: "flex", flexDirection: "row", alignItems: "center" }, guildName: { lineHeight: 18, marginStart: 8 }, eventName: { lineHeight: 20, marginTop: 8 } };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsGuildScheduledEventPreview.tsx");

export default function GuildScheduledEventPreview(event) {
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  event = event.event;
  const tmp = closure_7();
  const items = [GuildStore];
  const obj = event(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(event.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj2 = { style: tmp.container, children: items1 };
    const tmp2Result = event(4683);
    const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: intl.string(event(1115).t.SDTOL7) };
    const hexWithOpacityResult = tmp2Result.hexWithOpacity(tmp.borderColor.color, 0.08);
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items1 = [closure_5(Text, obj3), ];
    const obj4 = { style: items2, children: items4 };
    items2 = [tmp.itemContainer, ];
    const obj5 = { borderColor: hexWithOpacityResult };
    items2[1] = obj5;
    const obj6 = { style: tmp.guildInfo, children: items3 };
    const obj7 = { guild: stateFromStores, size: event(5896).GuildIconSizes.XXSMALL, selected: false };
    const tmp10 = GuildIconDefault;
    items3 = [closure_5(tmp10, obj7), ];
    const obj8 = { style: tmp.guildName, variant: "text-sm/medium", color: "text-default", children: stateFromStores.name };
    items3[1] = closure_5(event(4832).Text, obj8);
    items4 = [closure_6(View, obj6), ];
    const obj9 = { style: tmp.eventName, variant: "text-md/bold", color: "mobile-text-heading-primary", children: event.name };
    items4[1] = closure_5(event(4832).Text, obj9);
    items1[1] = closure_6(View, obj4);
    return closure_6(View, obj2);
  }
};
