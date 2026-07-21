// Module ID: 8403
// Function ID: 66890
// Name: useCreateChannelSubmit
// Dependencies: []
// Exports: default

// Module 8403 (useCreateChannelSubmit)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
({ ChannelTypes: closure_7, Permissions: closure_8 } = arg1(dependencyMap[3]));
const obj = { PREMIUM_CHANNEL: 0, [0]: "PREMIUM_CHANNEL" };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/channel/useCreateChannelSubmit.tsx");

export default function useCreateChannelSubmit(arg0) {
  let tmp2;
  let tmp4;
  const arg1 = arg0;
  [tmp2, closure_1] = callback(React.useState(false), 2);
  const tmp = callback(React.useState(false), 2);
  [tmp4, closure_2] = callback(React.useState({}), 2);
  const items = [arg0];
  const items1 = [
    tmp2,
    tmp4,
    React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), items)
  ];
  return items1;
};
export const CreateChannelMode = obj;
