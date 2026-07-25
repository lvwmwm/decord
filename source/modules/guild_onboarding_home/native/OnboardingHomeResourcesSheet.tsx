// Module ID: 15344
// Function ID: 117023
// Name: OnboardingHomeResourcesSheet
// Dependencies: [31, 15342, 33, 3835, 689, 15343, 11375, 4099, 5498, 5500, 1392, 5085, 2]
// Exports: default

// Module 15344 (OnboardingHomeResourcesSheet)
import "result";
import { ONBOARDING_HOME_RESOURCES_SHEET_KEY as closure_3 } from "ONBOARDING_HOME_RESOURCES_SHEET_KEY";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default function OnboardingHomeResourcesSheet(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(3835);
  importDefault = obj.useToken(importDefault(689).modules.mobile.TABLE_ROW_ICON_SIZE);
  obj = {};
  obj = {
    hasIcons: true,
    children: importDefault(15343)(guildId).map((label) => {
      let closure_0 = label;
      let obj = callback(outer1_2[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      let tmp2;
      if (null != resourceChannelIconURL) {
        tmp2 = resourceChannelIconURL;
      }
      obj = { label: label.title };
      let tmp4;
      if (null != tmp2) {
        obj = {};
        const obj1 = { width: callback, height: callback };
        obj.style = obj1;
        const obj2 = { uri: tmp2 };
        obj.source = obj2;
        tmp4 = outer1_4(callback(outer1_2[11]), obj);
      }
      obj.icon = tmp4;
      obj.onPress = function onPress() {
        const homeResourceChannel = guildId(outer2_2[6]).selectHomeResourceChannel(label, label.channelId);
        const obj = guildId(outer2_2[6]);
        callback(outer2_2[7]).hideActionSheet(outer2_3);
      };
      obj.arrow = true;
      return outer1_4(guildId(outer1_2[9]).ActionSheetRow, obj, label.channelId);
    })
  };
  obj.children = jsx(guildId(5500).ActionSheetRow.Group, {
    hasIcons: true,
    children: importDefault(15343)(guildId).map((label) => {
      let closure_0 = label;
      let obj = callback(outer1_2[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      let tmp2;
      if (null != resourceChannelIconURL) {
        tmp2 = resourceChannelIconURL;
      }
      obj = { label: label.title };
      let tmp4;
      if (null != tmp2) {
        obj = {};
        const obj1 = { width: callback, height: callback };
        obj.style = obj1;
        const obj2 = { uri: tmp2 };
        obj.source = obj2;
        tmp4 = outer1_4(callback(outer1_2[11]), obj);
      }
      obj.icon = tmp4;
      obj.onPress = function onPress() {
        const homeResourceChannel = guildId(outer2_2[6]).selectHomeResourceChannel(label, label.channelId);
        const obj = guildId(outer2_2[6]);
        callback(outer2_2[7]).hideActionSheet(outer2_3);
      };
      obj.arrow = true;
      return outer1_4(guildId(outer1_2[9]).ActionSheetRow, obj, label.channelId);
    })
  });
  return jsx(guildId(5498).ActionSheet, {
    hasIcons: true,
    children: importDefault(15343)(guildId).map((label) => {
      let closure_0 = label;
      let obj = callback(outer1_2[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      let tmp2;
      if (null != resourceChannelIconURL) {
        tmp2 = resourceChannelIconURL;
      }
      obj = { label: label.title };
      let tmp4;
      if (null != tmp2) {
        obj = {};
        const obj1 = { width: callback, height: callback };
        obj.style = obj1;
        const obj2 = { uri: tmp2 };
        obj.source = obj2;
        tmp4 = outer1_4(callback(outer1_2[11]), obj);
      }
      obj.icon = tmp4;
      obj.onPress = function onPress() {
        const homeResourceChannel = guildId(outer2_2[6]).selectHomeResourceChannel(label, label.channelId);
        const obj = guildId(outer2_2[6]);
        callback(outer2_2[7]).hideActionSheet(outer2_3);
      };
      obj.arrow = true;
      return outer1_4(guildId(outer1_2[9]).ActionSheetRow, obj, label.channelId);
    })
  });
};
