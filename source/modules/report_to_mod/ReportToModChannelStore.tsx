// Module ID: 11779
// Function ID: 91463
// Name: useReportToModChannelFiltersStore
// Dependencies: []
// Exports: useShouldShowResolvedFlagsForChannel

// Module 11779 (useReportToModChannelFiltersStore)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
let obj = { name: "report-to-mod-channel-storage" };
const _module2 = require(dependencyMap[1]);
obj.storage = _module2.createJSONStorage(() => importDefault(dependencyMap[3]));
obj = _module.create(_module1.persist((arg0, arg1) => {
  const require = arg0;
  const importDefault = arg1;
  return {
    channelShowResolvedFlags: {},
    setShowResolvedFlags(arg0, arg1) {
      return arg0(closure_2[2]).batchUpdates(() => {
        arg0((channelShowResolvedFlags) => {
          let obj = {};
          obj = {};
          const merged = Object.assign(channelShowResolvedFlags.channelShowResolvedFlags);
          obj[closure_0] = closure_1;
          obj.channelShowResolvedFlags = obj;
          return obj;
        });
      });
    },
    getShowResolvedFlags(arg0) {
      const tmp = arg1().channelShowResolvedFlags[arg0];
      return null == tmp || tmp;
    }
  };
}, obj));
const _module3 = require(dependencyMap[4]);
const result = _module3.fileFinishedImporting("modules/report_to_mod/ReportToModChannelStore.tsx");

export const useReportToModChannelFiltersStore = obj;
export const useShouldShowResolvedFlagsForChannel = function useShouldShowResolvedFlagsForChannel(arg0) {
  const require = arg0;
  let obj = obj();
  const importDefault = obj;
  if (null == arg0) {
    obj = {
      showResolvedFlags: true,
      setShowResolvedFlags() {

        }
    };
  } else {
    obj = {};
    const showResolvedFlags = obj.getShowResolvedFlags(arg0);
    obj.showResolvedFlags = null == showResolvedFlags || showResolvedFlags;
    obj.setShowResolvedFlags = function setShowResolvedFlags(arg0) {
      return obj.setShowResolvedFlags(arg0, arg0);
    };
  }
  return obj;
};
