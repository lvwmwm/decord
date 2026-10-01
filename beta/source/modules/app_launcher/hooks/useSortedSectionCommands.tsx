// Module ID: 11616
// Function ID: 11617
// Name: useSortedSectionCommands
// Dependencies: [32, 19, 11617, 11553, 1091, 2]
// Exports: default

// Module 11616 (useSortedSectionCommands)
import DurationsDefault from "Durations" /* 1091 */;
import ApplicationDirectoryActionCreatorsAll from "ApplicationDirectoryActionCreators" /* 11553 */;
import AppLauncherConstants from "AppLauncherConstants" /* 11617 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const CommandListSortOrder = AppLauncherConstants.CommandListSortOrder;
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useSortedSectionCommands.tsx");

export default function useSortedSectionCommands(sectionId) {
  let canSort;
  let commands;
  let popularSortedCommands;
  let tmp3;
  let tmp4;
  sectionId = sectionId.sectionId;
  const commandsByActiveSection = sectionId.commandsByActiveSection;
  let setSortOrder;
  canSort = undefined;
  let tmp = CommandListSortOrder;
  [tmp3, tmp4] = canSort(react.useState(CommandListSortOrder.ALPHABETICAL), 2);
  const items = [commandsByActiveSection, sectionId];
  const tmp2 = canSort(react.useState(CommandListSortOrder.ALPHABETICAL), 2);
  const memo = react.useMemo(() => {
    const found = commandsByActiveSection.find((section) => section.section.id === sectionId);
    let data;
    if (found != null) {
      data = found.data;
    }
    if (data == null) {
      data = [];
    }
    return data;
  }, items);
  const items1 = [memo];
  const memo1 = react.useMemo(() => {
    const f125395 = (command) => command.command;
    if (memo.length <= 1) {
      return { popularSortedCommands: memo, canSort: false };
    } else {
      let obj;
      let closure_0 = false;
      const mapped = arr.map((command, alphabeticalSortIndex) => {
        const tmp = closure_0 || null != command.global_popularity_rank;
        closure_0 = tmp;
        return { command, alphabeticalSortIndex };
      });
      let tmp = closure_0;
      if (tmp) {
        const sorted = mapped.sort((command, command2) => {
          const global_popularity_rank = command.command.global_popularity_rank;
          const global_popularity_rank2 = command2.command.global_popularity_rank;
          if (null != global_popularity_rank) {
            if (null != global_popularity_rank2) {
              if (global_popularity_rank !== global_popularity_rank2) {
                return global_popularity_rank - global_popularity_rank2;
              }
            }
            return command.alphabeticalSortIndex - command2.alphabeticalSortIndex;
          }
          if (null != global_popularity_rank) {
            return -1;
          } else if (null != global_popularity_rank2) {
            return 1;
          }
        });
        obj = { popularSortedCommands: mapped.map(f125395), canSort: true };
        const obj3 = { popularSortedCommands: mapped.map(f125395), canSort: true };
      } else {
        obj = { popularSortedCommands: memo, canSort: false };
      }
      return obj;
    }
  }, items1);
  ({ popularSortedCommands, canSort } = memo1);
  const items2 = [sectionId];
  const effect = react.useEffect(() => {
    const obj = ApplicationDirectoryActionCreatorsAll;
    const obj2 = { dontRefetchMs: DurationsDefault.Millis.DAY };
    const application = obj.getApplication(sectionId, obj2);
  }, items2);
  const items3 = [canSort];
  const layoutEffect = react.useLayoutEffect(() => {
    const tmp = canSort;
    if (tmp) {
      setSortOrder(CommandListSortOrder.POPULAR);
    }
  }, items3);
  if (CommandListSortOrder.POPULAR !== sortOrder) {
    const ALPHABETICAL = tmp.ALPHABETICAL;
    commands = memo;
  }
  return { sortOrder, setSortOrder, commands, canSort };
};
