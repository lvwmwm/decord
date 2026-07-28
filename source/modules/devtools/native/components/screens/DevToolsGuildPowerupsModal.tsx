// Module ID: 14775
// Function ID: 112457
// Dependencies: [31, 33, 9085, 5552, 9094, 10163, 14776, 2]

// Module 14775
import { jsx } from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "result";

const require = arg1;
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = require("result").memo(function DevToolsGuildPowerupsModal() {
  let Navigator;
  let Screen;
  let obj = _require(5552);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      let obj = {
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return outer2_3(callback(outer2_2[4]).GenericHeaderTitle, obj);
        },
        headerLeft: callback(outer1_2[4]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(callback);
      let merged1 = Object.assign(outer1_1(outer1_2[5])());
      return obj;
    }
  };
  obj = {
    name: "DevToolsGuildPowerups",
    options() {
      return { title: "Guild Powerups" };
    },
    component: importDefault(14776)
  };
  ({ Navigator, Screen } = createNativeStackNavigator);
  obj.children = <Screen name="DevToolsGuildPowerups" options={function options() {
    return { title: "Guild Powerups" };
  }} component={importDefault(14776)} />;
  return <Navigator name="DevToolsGuildPowerups" options={function options() {
    return { title: "Guild Powerups" };
  }} component={importDefault(14776)} />;
});
const result = require("createNativeStackNavigator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsModal.tsx");

export default memoResult;
