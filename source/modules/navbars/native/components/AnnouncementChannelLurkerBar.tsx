// Module ID: 10359
// Function ID: 79954
// Name: AnnouncementChannelLurkerBar
// Dependencies: []

// Module 10359 (AnnouncementChannelLurkerBar)
class AnnouncementChannelLurkerBar {
  constructor(arg0) {
    arg1 = global.channel;
    tmp = closure_5();
    obj = { style: tmp.wrapper };
    obj = { style: tmp.text };
    intl = arg1(dependencyMap[6]).intl;
    obj.children = intl.string(arg1(dependencyMap[6]).t.Hl0Mqh);
    items = [, ];
    items[0] = jsx(arg1(dependencyMap[5]).Text, obj);
    obj1 = {
      onPress() {
            const guildId = channel.getGuildId();
            if (null != guildId) {
              const result = channel(closure_1[8]).showChannelFollowingActionSheet(channel.id, guildId);
              const obj = channel(closure_1[8]);
            }
          }
    };
    intl2 = arg1(dependencyMap[6]).intl;
    obj1.text = intl2.string(arg1(dependencyMap[6]).t.4z5PU1);
    items[1] = jsx(arg1(dependencyMap[7]).Button, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.wrapper = obj;
obj.text = {};
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx");

export default AnnouncementChannelLurkerBar;
export { AnnouncementChannelLurkerBar };
