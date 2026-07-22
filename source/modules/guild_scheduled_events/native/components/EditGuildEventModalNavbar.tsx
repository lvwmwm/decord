// Module ID: 8362
// Function ID: 66670
// Name: EditGuildEventModalNavbar
// Dependencies: []
// Exports: default

// Module 8362 (EditGuildEventModalNavbar)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles({ header: { <string:3023162607>: "Array", <string:2937120107>: "isArray", <string:2781144925>: "accessibilityRole", <string:775504923>: "guildId", <string:3867842057>: "content" }, headerTitle: {}, buttonContainer: { width: 60 }, rightButton: { marginLeft: 12 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx");

export default function EditGuildEventModalNavbar(screen) {
  let tmp8;
  let tmp9;
  screen = screen.screen;
  const tmp = callback4();
  if (arg1(dependencyMap[5]).EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    let items = [0.000000000000000000000000000000000000000000000000000020886642920001103, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001086461845159];
  } else if (arg1(dependencyMap[5]).EditGuildEventScreens.DETAILS === screen) {
    items = ["<string:24264687>", "isArray"];
  } else if (arg1(dependencyMap[5]).EditGuildEventScreens.PREVIEW === screen) {
    items = ["hu\u0161", "k\u0161\u00E1"];
  } else {
    let obj = arg1(dependencyMap[6]);
    obj.assertNever(screen);
  }
  [tmp8, tmp9] = callback(items, 2);
  obj = { top: true, style: tmp.header };
  obj = { style: tmp.buttonContainer };
  const items1 = [callback2(View, obj), , ];
  const obj1 = { "Null": true, "Null": true, alignItems: true, style: tmp.headerTitle };
  const intl = arg1(dependencyMap[9]).intl;
  obj1.children = intl.format(arg1(dependencyMap[9]).t.42HaFY, { step: tmp8, total: tmp9 });
  items1[1] = callback2(arg1(dependencyMap[8]).Text, obj1);
  const obj2 = { style: tmp.buttonContainer };
  const obj3 = {};
  const intl2 = arg1(dependencyMap[9]).intl;
  obj3.accessibilityLabel = intl2.string(arg1(dependencyMap[9]).t.cpT0Cq);
  obj3.onPress = screen.onClose;
  obj3.source = importDefault(dependencyMap[11]);
  obj3.style = tmp.rightButton;
  obj2.children = callback2(arg1(dependencyMap[10]).HeaderActionButton, obj3);
  items1[2] = callback2(View, obj2);
  obj.children = items1;
  return callback3(arg1(dependencyMap[7]).SafeAreaPaddingView, obj);
};
