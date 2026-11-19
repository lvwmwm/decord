// Module ID: 17869
// Function ID: 17870
// Name: WaterwheelsDiscoverNavigation
// Dependencies: [4825, 1072, 9918, 17870, 6714, 2]
// Exports: leaveWaterwheelsDiscover, selectWaterwheelsDiscover, selectWaterwheelsDiscoverFromGuildsBar

// Module 17869 (WaterwheelsDiscoverNavigation)
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 9918 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 17870 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4825 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const transitionToGuild = tmp(6714);
({ ME: closure_4, WATERWHEELS: hasOwnProperty } = Constants);
const WaterwheelsDiscoverNavigation = "WaterwheelsDiscoverNavigation";
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverNavigation.tsx");

export function selectWaterwheelsDiscoverFromGuildsBar() {
  const obj = WaterwheelsDiscoverExperiment;
  let flag = obj.getWaterwheelsDiscoverEnabled(WaterwheelsDiscoverNavigation);
  if (flag) {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(hasOwnProperty);
    flag = true;
  }
  return flag;
}
export function selectWaterwheelsDiscover() {
  const obj = WaterwheelsDiscoverExperiment;
  if (obj.getWaterwheelsDiscoverEnabled(WaterwheelsDiscoverNavigation)) {
    const tmpResult = transitionToGuild;
    tmpResult.transitionToGuild(hasOwnProperty);
  }
}
export function leaveWaterwheelsDiscover() {
  if (SelectedGuildStore.getGuildId() === hasOwnProperty) {
    const obj = transitionToGuild;
    obj.transitionToGuild(React3);
  }
}
