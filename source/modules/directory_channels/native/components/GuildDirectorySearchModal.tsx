// Module ID: 10023
// Function ID: 77439
// Name: GuildDirectorySearchModal
// Dependencies: []
// Exports: default

// Module 10023 (GuildDirectorySearchModal)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModal.tsx");

export default function GuildDirectorySearchModal(arg0) {
  const arg1 = arg0;
  const obj = {
    screens: importDefault(dependencyMap[4])(() => function getScreens(arg0) {
      const obj = {
        type: "<string:1040334421>",
        text: "<string:1040334338>",
        render() {
          const merged = Object.assign(arg0);
          return callback2(callback(closure_2[2]), {});
        }
      };
      return { ["SEARCH_SCREEN_KEY"]: obj };
    }(arg0)),
    initialRouteName: "SEARCH_SCREEN_KEY"
  };
  return jsx(arg1(dependencyMap[3]).Navigator, obj);
};
