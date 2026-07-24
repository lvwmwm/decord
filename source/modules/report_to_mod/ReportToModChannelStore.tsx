// Module ID: 11824
// Function ID: 91798
// Name: useReportToModChannelFiltersStore
// Dependencies: [621, 3999, 682, 6945, 2]
// Exports: useShouldShowResolvedFlagsForChannel

// Module 11824 (useReportToModChannelFiltersStore)
import keys from "keys";
import createJSONStorage from "createJSONStorage";
import createJSONStorage from "createJSONStorage";

let obj = { name: "report-to-mod-channel-storage" };
obj.storage = createJSONStorage.createJSONStorage(() => importDefault(6945));
obj = keys.create(createJSONStorage.persist((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return {
    channelShowResolvedFlags: {},
    setShowResolvedFlags(arg0, arg1) {
      const callback = arg0;
      let closure_1 = arg1;
      return callback(outer1_2[2]).batchUpdates(() => {
        callback((channelShowResolvedFlags) => {
          let obj = {};
          obj = {};
          const merged = Object.assign(channelShowResolvedFlags.channelShowResolvedFlags);
          obj[outer1_0] = outer1_1;
          obj.channelShowResolvedFlags = obj;
          return obj;
        });
      });
    },
    getShowResolvedFlags(arg0) {
      const tmp = callback2().channelShowResolvedFlags[arg0];
      return null == tmp || tmp;
    }
  };
}, obj));
const result = require("batchUpdates").fileFinishedImporting("modules/report_to_mod/ReportToModChannelStore.tsx");

export const useReportToModChannelFiltersStore = obj;
export const useShouldShowResolvedFlagsForChannel = function useShouldShowResolvedFlagsForChannel(arg0) {
  let closure_0 = arg0;
  obj = obj();
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
      return obj.setShowResolvedFlags(closure_0, arg0);
    };
  }
  return obj;
};
